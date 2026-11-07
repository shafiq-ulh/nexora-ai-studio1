import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const src = path.join(root, 'public', 'logos', 'nexora-mark-source.png');
const logoDir = path.join(root, 'public', 'logos');
const appDir = path.join(root, 'src', 'app');

const { data, info } = await sharp(src)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const total = width * height;

const luma = new Float32Array(total);
for (let i = 0, p = 0; i < data.length; i += channels, p += 1) {
  luma[p] = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
}

const DARK = 42;
const isDark = (p) => luma[p] < DARK;

const transparent = new Uint8Array(total);
const stack = [];

const seed = (x, y) => {
  const p = y * width + x;
  if (!transparent[p] && isDark(p)) {
    stack.push(p);
  }
};

for (let x = 0; x < width; x += 1) {
  seed(x, 0);
  seed(x, height - 1);
}
for (let y = 0; y < height; y += 1) {
  seed(0, y);
  seed(width - 1, y);
}

while (stack.length > 0) {
  const p = stack.pop();
  if (transparent[p] || !isDark(p)) continue;
  transparent[p] = 1;

  const x = p % width;
  const y = (p - x) / width;

  if (x > 0) seed(x - 1, y);
  if (x < width - 1) seed(x + 1, y);
  if (y > 0) seed(x, y - 1);
  if (y < height - 1) seed(x, y + 1);
}

const rgba = Buffer.alloc(total * 4);
let minX = width;
let minY = height;
let maxX = 0;
let maxY = 0;

for (let p = 0; p < total; p += 1) {
  const i = p * channels;
  const o = p * 4;
  const visible = transparent[p] ? 0 : 255;

  rgba[o] = data[i];
  rgba[o + 1] = data[i + 1];
  rgba[o + 2] = data[i + 2];
  rgba[o + 3] = visible;

  if (visible) {
    const x = p % width;
    const y = (p - x) / width;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
}

const bbox = {
  left: minX,
  top: minY,
  width: maxX - minX + 1,
  height: maxY - minY + 1,
};

const badge = await sharp(rgba, { raw: { width, height, channels: 4 } })
  .extract(bbox)
  .png()
  .toBuffer();

const makeTransparentSquare = async (padRatio, size) => {
  const side = Math.ceil(Math.max(bbox.width, bbox.height) * (1 + padRatio * 2));
  const left = Math.round((side - bbox.width) / 2);
  const top = Math.round((side - bbox.height) / 2);

  const composed = await sharp({
    create: {
      width: side,
      height: side,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: badge, left, top }])
    .png()
    .toBuffer();

  return sharp(composed)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
};

for (const size of [512, 256]) {
  const buffer = await makeTransparentSquare(0.06, size);
  await writeFile(path.join(logoDir, `nexora-mark-${size}.png`), buffer);
}

const makeOpaqueIcon = async (size) => {
  const padRatio = 0.08;
  const side = Math.ceil(Math.max(bbox.width, bbox.height) * (1 + padRatio * 2));
  const left = Math.round((side - bbox.width) / 2);
  const top = Math.round((side - bbox.height) / 2);

  const composed = await sharp({
    create: {
      width: side,
      height: side,
      channels: 3,
      background: { r: 8, g: 11, b: 16 },
    },
  })
    .composite([{ input: badge, left, top }])
    .png()
    .toBuffer();

  return sharp(composed)
    .resize(size, size, { fit: 'contain', background: { r: 8, g: 11, b: 16 } })
    .png()
    .toBuffer();
};

await writeFile(path.join(appDir, 'icon.png'), await makeOpaqueIcon(512));
await writeFile(path.join(appDir, 'apple-icon.png'), await makeOpaqueIcon(180));

const icoSizes = [16, 32, 48];
const icoPngs = await Promise.all(icoSizes.map((size) => makeOpaqueIcon(size)));

const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(icoSizes.length, 4);

let offset = 6 + icoSizes.length * 16;
const icoEntries = [];
for (let i = 0; i < icoSizes.length; i += 1) {
  const entry = Buffer.alloc(16);
  const dim = icoSizes[i] >= 256 ? 0 : icoSizes[i];
  entry.writeUInt8(dim, 0);
  entry.writeUInt8(dim, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(icoPngs[i].length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += icoPngs[i].length;
  icoEntries.push(entry);
}

const ico = Buffer.concat([icoHeader, ...icoEntries, ...icoPngs]);
await writeFile(path.join(appDir, 'favicon.ico'), ico);

console.log('Generated brand assets');
console.log({ bbox, transparent: transparent.reduce((a, b) => a + b, 0), sizes: icoSizes });

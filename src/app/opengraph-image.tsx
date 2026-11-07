import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/siteConfig';

export const alt = `${siteConfig.agencyName} — ${siteConfig.agencyTagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#080B10',
          color: '#F5F5F2',
          backgroundImage:
            'radial-gradient(circle at 18% 18%, rgba(201,169,110,0.28), transparent 45%), radial-gradient(circle at 88% 82%, rgba(142,170,173,0.20), transparent 42%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 30 }}>
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: '#C9A96E',
              transform: 'rotate(45deg)',
            }}
          />
          <span
            style={{
              fontSize: 26,
              letterSpacing: 7,
              textTransform: 'uppercase',
              color: '#C9A96E',
            }}
          >
            {siteConfig.agencyName}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: 20,
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1.06,
            maxWidth: 920,
          }}
        >
          <span>Build Smarter.</span>
          <span style={{ color: '#C9A96E' }}>Operate Faster.</span>
        </div>
        <div style={{ fontSize: 30, color: '#A2A9B3', marginTop: 30, maxWidth: 800 }}>
          {siteConfig.agencyTagline}
        </div>
      </div>
    ),
    { ...size }
  );
}

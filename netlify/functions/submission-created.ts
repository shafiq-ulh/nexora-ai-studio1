import nodemailer from 'nodemailer';
import { siteConfig } from '../../src/config/siteConfig';

type NetlifyEvent = {
  body: string | null;
};

type SubmissionPayload = {
  form_name?: string;
  data?: Record<string, unknown>;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildCopy = (formName: string, data: Record<string, unknown>) => {
  const name = typeof data.fullName === 'string' && data.fullName.trim() ? data.fullName.trim() : 'there';

  if (formName === 'consultation-booking') {
    return {
      subject: 'Your consultation request — Nexora AI Studio',
      heading: `Thanks, ${name}.`,
      intro:
        'We received your consultation request and will confirm your preferred date and time within 24–48 hours.',
      outro: 'If anything changes, simply reply to this email.',
    };
  }

  return {
    subject: 'Your project inquiry — Nexora AI Studio',
    heading: `Thanks, ${name}.`,
    intro:
      'We received your project inquiry and will review the details carefully. Expect a reply within 24–48 hours.',
    outro: 'If you have anything to add, just reply to this email.',
  };
};

const buildHtml = (heading: string, intro: string, outro: string) => `
<div style="background:#f4f4f2;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e3e3df;">
    <div style="background:#080B10;padding:28px 32px;">
      <p style="margin:0;color:#C9A96E;font-size:12px;letter-spacing:3px;text-transform:uppercase;">${escapeHtml(
        siteConfig.agencyName
      )}</p>
    </div>
    <div style="padding:32px;">
      <h1 style="margin:0 0 16px;font-size:24px;color:#111;font-weight:600;">${escapeHtml(heading)}</h1>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#444;">${escapeHtml(intro)}</p>
      <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#444;">${escapeHtml(outro)}</p>
      <p style="margin:0;font-size:13px;line-height:1.7;color:#777;">— ${escapeHtml(
        siteConfig.founderName
      )}, ${escapeHtml(siteConfig.founderTitle)}</p>
    </div>
    <div style="border-top:1px solid #e3e3df;padding:20px 32px;">
      <p style="margin:0;font-size:12px;color:#999;line-height:1.6;">
        ${escapeHtml(siteConfig.agencyName)} · <a href="mailto:${escapeHtml(
          siteConfig.businessEmail
        )}" style="color:#C9A96E;text-decoration:none;">${escapeHtml(siteConfig.businessEmail)}</a>
      </p>
    </div>
  </div>
</div>
`;

export async function handler(event: NetlifyEvent) {
  try {
    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;

    if (!user || !pass) {
      console.warn('Auto-responder skipped: GMAIL_USER or GMAIL_APP_PASSWORD not set.');
      return { statusCode: 200, body: 'skipped: missing credentials' };
    }

    const payload = JSON.parse(event.body || '{}') as SubmissionPayload;
    const formName = payload.form_name || 'unknown';
    const data = payload.data || {};
    const email = typeof data.email === 'string' ? data.email.trim() : '';

    if (!email) {
      console.warn(`Auto-responder skipped for ${formName}: no email field.`);
      return { statusCode: 200, body: 'skipped: no email' };
    }

    const { subject, heading, intro, outro } = buildCopy(formName, data);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${siteConfig.agencyName}" <${user}>`,
      to: email,
      replyTo: siteConfig.businessEmail,
      subject,
      html: buildHtml(heading, intro, outro),
    });

    return { statusCode: 200, body: 'auto-response sent' };
  } catch (error) {
    console.error('Auto-responder failed:', error);
    return { statusCode: 200, body: 'error logged' };
  }
}

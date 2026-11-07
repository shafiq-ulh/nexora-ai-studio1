import nodemailer from 'nodemailer';
import { siteConfig } from '../../src/config/siteConfig';

const jsonHeaders = { 'Content-Type': 'application/json' };

const maskEmail = (value: string) => value.replace(/^(.).*(@.*)$/, '$1***$2');

export async function handler(event: { queryStringParameters?: Record<string, string> | null }) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const shouldSend = event.queryStringParameters?.send === '1';

  const result: Record<string, unknown> = {
    hasUser: Boolean(user),
    hasPass: Boolean(pass),
    passLength: pass ? pass.length : 0,
    user: user ? maskEmail(user) : null,
    passHasSpaces: pass ? /\s/.test(pass) : false,
    siteUrl: siteConfig.websiteURL,
  };

  if (!user || !pass) {
    return {
      statusCode: 200,
      headers: jsonHeaders,
      body: JSON.stringify({ ...result, error: 'Missing GMAIL_USER or GMAIL_APP_PASSWORD at runtime.' }),
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    await transporter.verify();
    result.verify = 'ok';

    if (shouldSend) {
      const info = await transporter.sendMail({
        from: `"${siteConfig.agencyName}" <${user}>`,
        to: user,
        subject: 'Nexora SMTP self-test',
        text: 'If you received this, the Gmail SMTP auto-responder is configured correctly.',
      });
      result.send = 'ok';
      result.messageId = info.messageId;
      result.response = info.response;
    }

    return { statusCode: 200, headers: jsonHeaders, body: JSON.stringify(result) };
  } catch (error) {
    return {
      statusCode: 200,
      headers: jsonHeaders,
      body: JSON.stringify({
        ...result,
        error: error instanceof Error ? error.message : String(error),
      }),
    };
  }
}

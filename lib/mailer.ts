import nodemailer from 'nodemailer';

const {
  APP_BASE_URL,
  NEXT_PUBLIC_BASE_URL,
  BREVO_HOST,
  BREVO_PORT,
  BREVO_USER,
  BREVO_PASS,
  MAIL_FROM_EMAIL,
  MAIL_FROM_NAME,
  VERCEL_URL
} = process.env;

function normalizeUrlCandidate(url: string) {
  if (!url) return null;
  // Prepend https if protocol is missing
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
}

function resolveBaseUrl() {
  const rawCandidates = [
    APP_BASE_URL,
    NEXT_PUBLIC_BASE_URL,
    VERCEL_URL ? `https://${VERCEL_URL}` : null
  ].filter(Boolean) as string[];

  const candidates = rawCandidates
    .map(normalizeUrlCandidate)
    .filter(Boolean) as string[];

  for (const url of candidates) {
    if (!/localhost|127\.0\.0\.1/i.test(url)) return url;
  }

  return candidates[0] ?? 'http://localhost:3000';
}

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;
  if (!BREVO_HOST || !BREVO_PORT || !BREVO_USER || !BREVO_PASS) {
    return null;
  }
  transporter = nodemailer.createTransport({
    host: BREVO_HOST,
    port: Number(BREVO_PORT),
    secure: false,
    auth: {
      user: BREVO_USER,
      pass: BREVO_PASS
    }
  });
  return transporter;
}

export async function sendVerificationEmail(to: string, token: string, newEmail?: string) {
  const baseUrl = resolveBaseUrl();
  const verifyUrl = new URL('/api/auth/verify-email', baseUrl);
  verifyUrl.searchParams.set('token', token);
  if (newEmail) {
    verifyUrl.searchParams.set('newEmail', newEmail);
  }

  const transport = getTransporter();

  if (!transport) {
    console.warn('Verification email stubbed. Send this link manually:', {
      to,
      verifyUrl: verifyUrl.toString(),
      newEmail: newEmail ?? null
    });
    return;
  }

  const from = MAIL_FROM_EMAIL ?? BREVO_USER;
  const fromName = MAIL_FROM_NAME ?? 'GM Recall';
  const subject = 'Verify your GM Recall email';
  const text = `Tap the link to verify your account: ${verifyUrl.toString()}`;
  const html = `<p>Hi!</p><p>Please confirm your email for GM Recall.</p><p><a href="${verifyUrl.toString()}" target="_blank" rel="noreferrer">Verify email</a></p><p>If you can't click the link, copy and paste this URL:</p><p>${verifyUrl.toString()}</p>`;

  await transport.sendMail({
    to,
    from: fromName ? `"${fromName}" <${from}>` : from,
    subject,
    text,
    html
  });
}

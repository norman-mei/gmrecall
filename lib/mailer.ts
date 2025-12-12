const { APP_BASE_URL, NEXT_PUBLIC_BASE_URL } = process.env;

function resolveBaseUrl() {
  return APP_BASE_URL ?? NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
}

export async function sendVerificationEmail(to: string, token: string, newEmail?: string) {
  const baseUrl = resolveBaseUrl();
  const verifyUrl = new URL('/api/auth/verify-email', baseUrl);
  verifyUrl.searchParams.set('token', token);
  if (newEmail) {
    verifyUrl.searchParams.set('newEmail', newEmail);
  }

  // In this environment we skip SMTP and just log the link so the build does not depend on nodemailer.
  console.warn('Verification email stubbed. Send this link manually:', {
    to,
    verifyUrl: verifyUrl.toString(),
    newEmail: newEmail ?? null
  });
}

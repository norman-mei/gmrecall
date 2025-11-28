import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grandmaster Recall',
  description: 'Guess the chess opening from animated move sequences.',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

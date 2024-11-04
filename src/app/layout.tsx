import './globals.css';

import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
  metadataBase: new URL('https://google.com'),
  openGraph: {
    title: 'Your App Name',
    description: 'Your app description',
    url: 'https://google.com',
    siteName: 'Your App Name',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@username',
    creator: '@username',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

import '@/styles/globals.scss';

import type { Metadata, Viewport } from 'next';
import type { CSSProperties } from 'react';

import { inter } from '@/fonts';

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
    <html
      lang="en"
      style={
        {
          '--font-inter': inter.style.fontFamily,
        } as CSSProperties
      }
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

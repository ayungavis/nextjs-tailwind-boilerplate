import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import type { CSSProperties, ReactNode } from "react";

import { inter } from "@/fonts/inter";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
  metadataBase: new URL("https://google.com"),
  openGraph: {
    title: "Your App Name",
    description: "Your app description",
    url: "https://google.com",
    siteName: "Your App Name",
  },
  twitter: {
    card: "summary_large_image",
    site: "@username",
    creator: "@username",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html
    lang="en"
    style={
      {
        "--font-inter": inter.style.fontFamily,
      } as CSSProperties
    }
    suppressHydrationWarning
  >
    <body>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

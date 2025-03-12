import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LocalFont from 'next/font/local';
import type { PropsWithChildren } from 'react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true,
  display: 'swap',
});

const calSans = LocalFont({
  src: './font/CalSans-SemiBold.woff2',
  variable: '--font-cal',
  preload: true,
  display: 'block',
  weight: '600',
});

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body
        className={`min-h-dvh antialiased ${inter.variable} ${calSans.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: 'Zewdlabs | Innovative and ',
    template: '%s - Zewdlabs',
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
  ),
  description:
    'Digital agency focusing on buidling products that satisfy customers.  Corporate Design ✓ Graphic Design ✓ Web Design with Strategy ✓',
  keywords: [],
  authors: [
    {
      name: 'Zewdlabs',
      url: process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000',
    },
  ],
  creator: 'Zewdlabs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000',
    title: 'Zewdlabs',
    description:
      'Digital agency focusing on buidling products that satisfy customers.  Corporate Design ✓ Graphic Design ✓ Web Design with Strategy ✓',
    siteName: 'Zewdlabs',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Zewdlabs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/api/og'],
    title: 'Zewdlabs',
    description:
      'Digital agency focusing on buidling products that satisfy customers.  Corporate Design ✓ Graphic Design ✓ Web Design with Strategy ✓',
    creator: '@zewdlabs',
  },

  icons: [
    {
      rel: 'icon',
      url: '/favicon-48x48.png',
      type: 'image/png',
      sizes: '48x48',
    },
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'shortcut icon', url: '/favicon.ico' },
  ],

  category: 'Agency',
  applicationName: 'Zewdlabs',
};

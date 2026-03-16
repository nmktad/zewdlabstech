import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import env from "@/env.config";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
  preload: true,
  display: "block",
  weight: "600",
});

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-dvh antialiased ${geistSans.variable} ${geistMono.variable} ${calSans.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Zewdlabs | Custom Software Development Agency",
    template: "%s | Zewdlabs",
  },

  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),

  description:
    "Zewdlabs builds scalable SaaS platforms, web applications, and AI-powered software for startups and growing companies.",

  keywords: [
    "custom software development",
    "SaaS development",
    "web application development",
    "AI software development",
    "MVP development for startups",
  ],

  authors: [
    {
      name: "Zewdlabs",
      url: env.NEXT_PUBLIC_BASE_URL,
    },
  ],

  creator: "Zewdlabs",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: env.NEXT_PUBLIC_BASE_URL,
    title: "Zewdlabs | Custom Software Development Agency",
    description:
      "Software development agency building scalable SaaS platforms, AI tools, and modern web applications.",
    siteName: "Zewdlabs",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Zewdlabs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
    title: "Zewdlabs",
    description:
      "Custom software development agency building SaaS platforms and web applications.",
    creator: "@zewdlabs",
  },

  icons: [
    {
      rel: "icon",
      url: "/favicon-48x48.png",
      type: "image/png",
      sizes: "48x48",
    },
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],

  category: "technology",
  applicationName: "Zewdlabs",
};

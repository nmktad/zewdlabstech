import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { PropsWithChildren } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap"
});

export default function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-dvh`}>
        <ThemeProvider attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Zewdlabs.co | Empowering businesses with technology",
  description: "Zewdlabs is a software development company that helps businesses grow by building custom software solutions.",
  metadataBase: new URL("https://zewdlabs.co"),
  openGraph: {
    title: "Zewdlabs.co | Empowering businesses with technology",
    description: "Zewdlabs is a software development company that helps businesses grow by building custom software solutions.",
    url: "https://zewdlabs.co",
    type: "website",
    siteName: "Zewdlabs.co",
    emails: ["contact@zewdlabs.co", "support@zewdlabs.co"],
    images: ["/api/og"],
  },
  keywords: [
    "software development",
    "web development",
    "mobile development",
    "custom software",
    "software solutions",
    "business growth",
    "zewdlabs",
    "technology",
    "empowering businesses",
    "innovative solutions"
  ],
  category: "software company",
  applicationName: "Zewdlabs",
  twitter: {
    title: "Zewdlabs.co | Empowering businesses with technology",
    description: "Zewdlabs is a software development company that helps businesses grow by building custom software solutions.",
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

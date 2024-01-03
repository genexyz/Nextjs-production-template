import type {Metadata} from "next";
import {Inter} from "next/font/google";

import {ThemeProvider} from "@/components/theme-provider";

import "../globals.css";

import {cn} from "@/lib/utils";
import Navbar from "@/components/navbar";

import {siteConfig} from "../../config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "TypeScript",
    "ESLint",
    "Prettier",
    "NextAuth",
    "Prisma",
    "Vercel",
    "PostgreSQL",
  ],
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "white"},
    {media: "(prefers-color-scheme: dark)", color: "black"},
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
  },
  robots: {
    follow: true,
    index: true,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

const RootLayout = ({children}: {children: React.ReactNode}) => (
  <html lang="en">
    <body
      className={cn(
        "min-h-screen bg-background font-inter antialiased",
        inter.variable,
      )}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

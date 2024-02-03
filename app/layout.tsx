import type { Metadata } from "next";
import "./globals.css";

import { Sora } from "next/font/google";
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { fontSans } from "@/lib/fonts"
import { ThemeProvider } from "@/components/theme-provider"

const FontSans = Sora({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
          </ThemeProvider>
      </body>
    </html>
  );
}

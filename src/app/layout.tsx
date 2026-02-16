import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ThemeScript } from "@/components/ThemeScript/ThemeScript";
import { Providers } from "@/providers/root-provider";
import { ParticlesBg } from "@/components/ParticlesBG/ParticlesBG";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Abderahmane Adjali",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  description:
    "Portfolio d’Abderahmane Adjali, développeur web full stack : projets, compétences et contact.",
  other: {
    "Content-Security-Policy": "script-src 'self' 'unsafe-inline'",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html:not(.dark) { color-scheme: light; }
              html.dark { color-scheme: dark; }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F0F0F4] dark:bg-[#151C25]`}
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          <ParticlesBg />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

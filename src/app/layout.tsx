import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { GridBackground } from "@/components/ui/GridBackground";

export const metadata: Metadata = {
  title: {
    default: "Lorenzo Cavallini — Startup founder & Developer",
    template: "%s | Lorenzo Cavallini",
  },
  description:
    "Portfolio di Lorenzo Cavallini, 21 anni. Ingegnere informatico, founder di GNAM! e freelance developer. Di giorno studio, di notte costruisco. / Portfolio of Lorenzo Cavallini — Computer Engineering student, GNAM! founder & freelance developer.",
  keywords: [
    "Lorenzo Cavallini", "portfolio", "startup", "GNAM", "freelance", "developer",
    "ingegneria informatica", "automazioni", "Computer Engineering", "Mantova",
  ],
  authors: [{ name: "Lorenzo Cavallini", url: "https://lorenzocavallini.dev" }],
  creator: "Lorenzo Cavallini",
  metadataBase: new URL("https://lorenzocavallini.dev"),
  alternates: {
    canonical: "/",
    languages: { "it-IT": "/", "en-US": "/" },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: "en_US",
    title: "Lorenzo Cavallini — Startup founder & Developer",
    description: "Di giorno studio, di notte costruisco.",
    siteName: "Lorenzo Cavallini",
    url: "https://lorenzocavallini.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorenzo Cavallini — Startup founder & Developer",
    description: "Di giorno studio, di notte costruisco.",
    creator: "@lorenzocavallini",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" hrefLang="it" href="https://lorenzocavallini.dev" />
        <link rel="alternate" hrefLang="en" href="https://lorenzocavallini.dev" />
        <link rel="alternate" hrefLang="x-default" href="https://lorenzocavallini.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#070d1a" />
        <meta name="geo.region" content="IT-MN" />
        <meta name="geo.placename" content="Mantova, Lombardia, Italia" />
        <meta name="geo.position" content="45.1564;10.7914" />
        <meta name="ICBM" content="45.1564, 10.7914" />
      </head>
      <body className="antialiased text-base-content min-h-screen">
        {/*
          Layering from back to front:
          -1  → solid dark background div
           0  → interactive grid canvas (GridBackground)
           5  → glow decorations
          10  → header, content, footer
        */}
        {/* Layer -1: solid background (overrides DaisyUI bg on transparent body) */}
        <div
          className="fixed inset-0 bg-base-100"
          style={{ zIndex: -1 }}
          aria-hidden="true"
        />

        {/* Layer 0: interactive grid canvas */}
        <GridBackground />

        {/* Layer 5: decorative glow overlays */}
        <div
          className="fixed inset-0 hero-glow pointer-events-none"
          style={{ zIndex: 5 }}
          aria-hidden="true"
        />
        <div
          className="fixed inset-0 hero-glow-secondary pointer-events-none"
          style={{ zIndex: 5 }}
          aria-hidden="true"
        />

        {/* Layer 10: Header + content + Footer, all sharing the same locale context */}
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

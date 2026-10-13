import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import { Bebas_Neue, Open_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { PreviewBanner } from "@/components/PreviewBanner";
import { PREVIEW_MODE, school } from "@/lib/content";
import "./globals.css";

// Headings: tall condensed capitals. Body: a clean humanist sans (with italics for quotes and taglines).
const heading = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const body = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const description =
  "DIVCOM Nursery & Primary School, Ori-Okuta, Ikorodu, Lagos. A caring, high-achieving school for Nursery, Kindergarten and Basic 1 – 5, with French, Music, ICT and after-school care. Established 2011.";

export const metadata: Metadata = {
  // Lets shared links (WhatsApp, Facebook, etc.) resolve page images and URLs against the real domain.
  metadataBase: new URL(school.url),
  title: {
    default: `${school.name} | Ikorodu, Lagos`,
    template: `%s | ${school.name}`,
  },
  description,
  keywords: [
    "DIVCOM",
    "nursery school Ikorodu",
    "primary school Ikorodu",
    "Ori-Okuta school",
    "Lagos private school",
    "best nursery and primary school in Ikorodu",
  ],
  openGraph: {
    title: school.name,
    description,
    type: "website",
    locale: "en_NG",
    siteName: school.name,
  },
  // Preview mode: keep the unfinished site out of search results (see PREVIEW_MODE in lib/content.ts).
  robots: PREVIEW_MODE ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0f1d4a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      className={`${heading.variable} ${body.variable} antialiased`}
      style={
        PREVIEW_MODE
          ? ({ "--preview-h": "2.5rem" } as CSSProperties)
          : undefined
      }
      suppressHydrationWarning
    >
      <head>
        {/* Enables scroll-reveal animations only when JavaScript is available. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-pink-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        {PREVIEW_MODE && <PreviewBanner />}
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}

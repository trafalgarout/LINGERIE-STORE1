import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LingerieParadise.store - Luxury Lingerie & Fashion Guide",
  description: "Your ultimate guide to luxury lingerie, bridal wear, shapewear, and bra fitting. Expert advice for the modern woman.",
  metadataBase: new URL("https://lingerieparadise.store"),
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6865939387108271"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
        <SmoothScrollProvider>
          <Header />
          <main style={{ minHeight: "calc(100vh - var(--header-height))" }}>
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

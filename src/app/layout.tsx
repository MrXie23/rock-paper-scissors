import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PageTracker from "@/components/PageTracker";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WasteTime Games | Play Rock Paper Scissors Online",
  description: "Play the classic Rock Paper Scissors game online for free. Challenge the computer, track your wins, and enjoy beautiful animations in this fun web-based game.",
  keywords: "rock paper scissors, online game, free game, browser game, web game, react game, nextjs, casual game, time waster, fun game, multiplayer, computer opponent, strategy game, hand game",
  authors: [{ name: "WasteTime Games" }],
  category: "Game",
  creator: "WasteTime Games",
  publisher: "WasteTime Games",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rock-paper-scissors-game.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WasteTime Games | Play Rock Paper Scissors Online",
    description: "Play the classic Rock Paper Scissors game online for free. Challenge the computer, track your wins, and enjoy beautiful animations in this fun web-based game.",
    url: "/",
    siteName: "WasteTime Games",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/rock.png",
        width: 1200,
        height: 630,
        alt: "Rock Paper Scissors Game Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WasteTime Games | Play Rock Paper Scissors Online",
    description: "Play the classic Rock Paper Scissors game online for free. Challenge the computer and track your score!",
    images: ["/images/rock.png"],
    creator: "@wastetime_games",
    site: "@wastetime_games",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // 添加你的Google验证码
  },
  applicationName: "WasteTime Games",
  appleWebApp: {
    capable: true,
    title: "WasteTime Games",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8437685566143391"
          crossOrigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="google-adsense-account" content="ca-pub-8437685566143391"></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Google Analytics - Safely loaded with Suspense */}
        {gaMeasurementId && (
          <Suspense fallback={null}>
            <GoogleAnalytics measurementId={gaMeasurementId} />
          </Suspense>
        )}

        {/* Page structure with tracking */}
        <PageTracker>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </PageTracker>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rock Paper Scissors Game",
  description: "Play the classic Rock Paper Scissors game online. Challenge the computer and track your wins, losses, and draws.",
  keywords: "rock paper scissors, game, online game, browser game, react game, nextjs",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rock-paper-scissors-game.vercel.app"),
  openGraph: {
    title: "Rock Paper Scissors Game",
    description: "Play the classic Rock Paper Scissors game online. Challenge the computer and track your wins, losses, and draws.",
    url: "/",
    siteName: "Rock Paper Scissors Game",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rock Paper Scissors Game",
    description: "Play the classic Rock Paper Scissors game online. Challenge the computer and track your wins, losses, and draws.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

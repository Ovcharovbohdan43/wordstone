import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { FlightLinesBackground } from "@/components/flight-lines-background";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Learn English by Reading Books | Wordstone",
  description:
    "Read real books in English with smart translation. Understand words in context and stop memorizing vocabulary. Join Wordstone beta.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Learn English by Reading Books",
    description: "Understand real books instantly with smart translation.",
    url: "/",
    siteName: "Wordstone",
    images: [
      {
        url: "/preview.png",
      },
    ],
    type: "website",
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
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative isolate min-h-full">
        <FlightLinesBackground />
        <div className="relative z-10 flex min-h-full flex-col bg-transparent">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}



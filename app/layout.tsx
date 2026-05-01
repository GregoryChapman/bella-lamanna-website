import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CREATOR } from "@/config/creator";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bellalamanna.ca"),
  title: {
    default: "Bella Lamanna | Lifestyle & Wellness Creator",
    template: `%s | Bella Lamanna`,
  },
  description:
    "Lifestyle, wellness, and day-in-the-life content from Bella Lamanna. Brand partnerships, collaborations, and portfolio work.",
  keywords: [
    "Bella Lamanna",
    "Isabella Lamanna",
    "Canadian content creator",
    "lifestyle creator",
    "wellness",
    "student life",
    "inclusivity",
    "UGC creator",
    "TikTok creator",
    "Instagram creator",
  ],
  authors: [{ name: "Bella Lamanna" }],
  creator: "Bella Lamanna",
  openGraph: {
    title: "Bella Lamanna | Lifestyle & Wellness Creator",
    description:
      "Lifestyle, wellness, and day-in-the-life content from Bella Lamanna. Brand partnerships, collaborations, and portfolio work.",
    type: "website",
    locale: "en_CA",
    url: "https://bellalamanna.ca",
    siteName: "Bella Lamanna",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bella Lamanna | Lifestyle & Wellness Creator",
    description:
      "Lifestyle, wellness, and day-in-the-life content from Bella Lamanna. Brand partnerships, collaborations, and portfolio work.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

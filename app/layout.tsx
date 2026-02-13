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
  metadataBase: new URL("https://isabellalmanna.com"),
  title: {
    default: `${CREATOR.name} | ${CREATOR.title} — ${CREATOR.tagline}`,
    template: `%s | ${CREATOR.name}`,
  },
  description: CREATOR.bio,
  keywords: [
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
  authors: [{ name: CREATOR.name }],
  creator: CREATOR.name,
  openGraph: {
    title: `${CREATOR.name} | ${CREATOR.title}`,
    description: CREATOR.mission,
    type: "website",
    locale: "en_CA",
    siteName: CREATOR.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${CREATOR.name} — ${CREATOR.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CREATOR.name} | ${CREATOR.title}`,
    description: CREATOR.mission,
    images: ["/og-image.jpg"],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

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
  title: `${CREATOR.name} - ${CREATOR.tagline}`,
  description: CREATOR.bio,
  openGraph: {
    title: `${CREATOR.name} - ${CREATOR.tagline}`,
    description: CREATOR.bio,
    type: "website",
    locale: "en_CA",
    siteName: CREATOR.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${CREATOR.name} - ${CREATOR.tagline}`,
    description: CREATOR.bio,
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


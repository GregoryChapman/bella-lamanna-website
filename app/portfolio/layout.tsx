import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Bella Lamanna Brand Collaborations",
  description:
    "A selection of brand collaborations and content created by Bella Lamanna — authentic, relatable storytelling across lifestyle, fashion, food, and beauty.",
  openGraph: {
    title: "Portfolio | Bella Lamanna Brand Collaborations",
    description:
      "A selection of brand collaborations and content created by Bella Lamanna — authentic, relatable storytelling across lifestyle, fashion, food, and beauty.",
    url: "https://bellalamanna.ca/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

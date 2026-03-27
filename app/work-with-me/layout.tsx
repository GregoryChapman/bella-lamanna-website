import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me | Brand Partnerships & Collaborations",
  description:
    "Partner with Bella Lamanna for sponsored content, brand ambassadorships, UGC creation, event coverage, and lifestyle collaborations.",
  openGraph: {
    title: "Work With Me | Brand Partnerships & Collaborations",
    description:
      "Partner with Bella Lamanna for sponsored content, brand ambassadorships, UGC creation, event coverage, and lifestyle collaborations.",
    url: "https://bellalamanna.ca/work-with-me",
  },
};

export default function WorkWithMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who am I? | Bella Lamanna",
  description:
    "Get to know Bella Lamanna — her story, values, and passion for lifestyle, wellness, student life, and inclusivity.",
  openGraph: {
    title: "Who am I? | Bella Lamanna",
    description:
      "Get to know Bella Lamanna — her story, values, and passion for lifestyle, wellness, student life, and inclusivity.",
    url: "https://bellalamanna.ca/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

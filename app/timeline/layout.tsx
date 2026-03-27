import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story | Bella Lamanna Timeline",
  description:
    "Follow Bella Lamanna's journey as a content creator — from posting just for fun to building a platform rooted in connection, kindness, and real life.",
  openGraph: {
    title: "My Story | Bella Lamanna Timeline",
    description:
      "Follow Bella Lamanna's journey as a content creator — from posting just for fun to building a platform rooted in connection, kindness, and real life.",
    url: "https://bellalamanna.ca/timeline",
  },
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

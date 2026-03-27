import { LinkHub } from "@/components/link-hub";
import { CREATOR } from "@/config/creator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links | Bella Lamanna",
  description:
    "Find all of Bella Lamanna's social media profiles, links, and collaboration information in one place.",
  openGraph: {
    title: "Links | Bella Lamanna",
    description:
      "Find all of Bella Lamanna's social media profiles, links, and collaboration information in one place.",
    url: "https://bellalamanna.ca/links",
  },
};

export default function LinksPage() {
  return <LinkHub />;
}


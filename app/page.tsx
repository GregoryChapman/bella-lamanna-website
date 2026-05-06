import type { Metadata } from "next";
import { Hero } from "@/components/hero";

export const metadata: Metadata = {
  title: "Bella Lamanna | Bits of Bella's Life",
  description:
    "Lifestyle, wellness, and day-in-the-life content from Bella Lamanna — brand partnerships, collaborations, and storytelling grounded in real life.",
  openGraph: {
    title: "Bella Lamanna | Bits of Bella's Life",
    description:
      "Lifestyle, wellness, and day-in-the-life content from Bella Lamanna — brand partnerships, collaborations, and storytelling grounded in real life.",
    url: "https://bellalamanna.ca",
  },
};

export default function Home() {
  return <Hero />;
}

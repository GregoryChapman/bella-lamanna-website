import { Contact } from "@/components/contact";
import { CREATOR } from "@/config/creator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Bella Lamanna",
  description:
    "Get in touch with Bella Lamanna for brand collaborations, partnerships, media kit requests, and inquiries.",
  openGraph: {
    title: "Contact | Bella Lamanna",
    description:
      "Get in touch with Bella Lamanna for brand collaborations, partnerships, media kit requests, and inquiries.",
    url: "https://bellalamanna.ca/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}

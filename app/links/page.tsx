import { LinkHub } from "@/components/link-hub";
import { CREATOR } from "@/config/creator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Links - ${CREATOR.name}`,
  description: `Connect with ${CREATOR.name} on all social platforms`,
};

export default function LinksPage() {
  return <LinkHub />;
}


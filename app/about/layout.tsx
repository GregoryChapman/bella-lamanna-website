import { CREATOR } from "@/config/creator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${CREATOR.name} — a Canadian content creator passionate about lifestyle, wellness, student life, and inclusivity.`,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

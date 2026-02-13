import { CREATOR } from "@/config/creator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me",
  description: `Collaborate with ${CREATOR.name} — brand partnerships, UGC, sponsored content, and more.`,
};

export default function WorkWithMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

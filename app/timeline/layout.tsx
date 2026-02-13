import { CREATOR } from "@/config/creator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story So Far",
  description: `The journey of ${CREATOR.name} — from early TikTok days to becoming a multi-platform Canadian content creator.`,
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

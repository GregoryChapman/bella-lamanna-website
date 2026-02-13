import { CREATOR } from "@/config/creator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `View ${CREATOR.name}'s content portfolio — lifestyle, wellness, and brand collaboration highlights.`,
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

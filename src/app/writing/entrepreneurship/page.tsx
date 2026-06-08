import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrepreneurship Essays",
  description: "Building things, executing with conviction, and thinking long-term.",
};

export default function EntrepreneurshipPage() {
  return <CategoryPage category="entrepreneurship" />;
}

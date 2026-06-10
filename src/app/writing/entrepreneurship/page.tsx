import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Entrepreneurship Essays",
  description: "Building things, executing with conviction, and thinking long-term.",
  alternates: {
    canonical: `${SITE_URL}/writing/entrepreneurship`,
  },
};

export default function EntrepreneurshipPage() {
  return <CategoryPage category="entrepreneurship" />;
}

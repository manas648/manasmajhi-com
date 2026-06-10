import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hiring Essays",
  description: "Why executive hiring fails, what better looks like, and the infrastructure that fixes it.",
  alternates: {
    canonical: `${SITE_URL}/writing/hiring`,
  },
};

export default function HiringPage() {
  return <CategoryPage category="hiring" />;
}

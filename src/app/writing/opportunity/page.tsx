import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Opportunity Essays",
  description: "On how opportunity shapes lives, societies, and the arc of human progress.",
  alternates: {
    canonical: `${SITE_URL}/writing/opportunity`,
  },
};

export default function OpportunityPage() {
  return <CategoryPage category="opportunity" />;
}

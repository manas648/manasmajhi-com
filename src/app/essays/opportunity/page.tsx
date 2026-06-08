import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opportunity Essays",
  description: "On how opportunity shapes lives, societies, and the arc of human progress.",
};

export default function OpportunityPage() {
  return <CategoryPage category="opportunity" />;
}

import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Philosophy Essays",
  description: "On learning, identity, perspective, and the examined life.",
  alternates: {
    canonical: `${SITE_URL}/writing/philosophy`,
  },
};

export default function PhilosophyPage() {
  return <CategoryPage category="philosophy" />;
}

import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Future of Work Essays",
  description: "AI, hiring, leadership, and how the nature of work is being transformed.",
  alternates: {
    canonical: `${SITE_URL}/writing/future-of-work`,
  },
};

export default function FutureworkPage() {
  return <CategoryPage category="future-of-work" />;
}

import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future of Work Essays",
  description: "AI, hiring, leadership, and how the nature of work is being transformed.",
};

export default function FutureOfWorkPage() {
  return <CategoryPage category="future-of-work" />;
}

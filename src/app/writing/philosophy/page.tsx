import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy Essays",
  description: "On learning, identity, perspective, and the examined life.",
};

export default function PhilosophyPage() {
  return <CategoryPage category="philosophy" />;
}

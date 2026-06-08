import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hiring Essays",
  description:
    "Why executive hiring fails, what better looks like, and the infrastructure that fixes it.",
};

export default function HiringPage() {
  return <CategoryPage category="hiring" />;
}

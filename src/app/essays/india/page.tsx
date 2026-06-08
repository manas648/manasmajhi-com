import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Essays",
  description: "Infrastructure, technology, policy, and the making of a new India.",
};

export default function IndiaPage() {
  return <CategoryPage category="india" />;
}

import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Essays",
  description: "What crossing borders teaches us about perspective, people, and identity.",
};

export default function TravelPage() {
  return <CategoryPage category="travel" />;
}

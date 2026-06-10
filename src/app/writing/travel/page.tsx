import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Travel Essays",
  description: "What crossing borders teaches us about perspective, people, and identity.",
  alternates: {
    canonical: `${SITE_URL}/writing/travel`,
  },
};

export default function TravelPage() {
  return <CategoryPage category="travel" />;
}

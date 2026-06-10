import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "India Essays",
  description: "Infrastructure, technology, policy, and the making of a new India.",
  alternates: {
    canonical: `${SITE_URL}/writing/india`,
  },
};

export default function IndiaPage() {
  return <CategoryPage category="india" />;
}

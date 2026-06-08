import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odisha Essays",
  description: "Development, tourism, culture, and the untapped potential of a remarkable state.",
};

export default function OdishaPage() {
  return <CategoryPage category="odisha" />;
}

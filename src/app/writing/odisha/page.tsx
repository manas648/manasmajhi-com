import { CategoryPage } from "@/components/essay/CategoryPage";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Odisha Essays",
  description: "Development, tourism, culture, and the untapped potential of a remarkable state.",
  alternates: {
    canonical: `${SITE_URL}/writing/odisha`,
  },
};

export default function OdishaPage() {
  return <CategoryPage category="odisha" />;
}

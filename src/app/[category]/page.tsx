import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/essay/CategoryPage";
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, EssayCategory } from "@/types";
import { SITE_URL } from "@/lib/utils";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

const VALID_CATEGORIES: EssayCategory[] = [
  "opportunity",
  "future-of-work",
  "india",
  "odisha",
  "travel",
  "entrepreneurship",
  "philosophy",
  "hiring",
];

export function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!VALID_CATEGORIES.includes(category as EssayCategory)) return {};

  const cat = category as EssayCategory;
  return {
    title: `${CATEGORY_LABELS[cat]} — Manas Majhi`,
    description: CATEGORY_DESCRIPTIONS[cat],
    alternates: {
      canonical: `${SITE_URL}/${category}`,
    },
  };
}

export default async function CategoryHubPage({ params }: Props) {
  const { category } = await params;

  if (!VALID_CATEGORIES.includes(category as EssayCategory)) {
    notFound();
  }

  return <CategoryPage category={category as EssayCategory} />;
}

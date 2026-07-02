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
  "kalahandi",
  "odia",
  "travel",
  "entrepreneurship",
  "philosophy",
  "hiring",
  "frameworks",
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

  const cat = category as EssayCategory;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/${category}`,
    name: CATEGORY_LABELS[cat],
    description: CATEGORY_DESCRIPTIONS[cat],
    url: `${SITE_URL}/${category}`,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Manas Majhi",
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Writing",
        item: `${SITE_URL}/writing`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: CATEGORY_LABELS[cat],
        item: `${SITE_URL}/${category}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CategoryPage category={cat} />
    </>
  );
}

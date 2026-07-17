import { getFeaturedEssays } from "@/lib/essays";
import { EssayCard } from "@/components/essay/EssayCard";
import { SITE_URL } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured",
  description: "A curated selection of the most essential essays — on opportunity, hiring, Odisha, and what it means to build from the ground up.",
  alternates: { canonical: `${SITE_URL}/featured` },
  openGraph: {
    title: "Featured — Manas Majhi",
    description: "A curated selection of the most essential essays — on opportunity, hiring, Odisha, and what it means to build from the ground up.",
    url: `${SITE_URL}/featured`,
    images: [{ url: `${SITE_URL}/api/og?title=Featured`, width: 1200, height: 630, alt: "Featured — Manas Majhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured — Manas Majhi",
    description: "A curated selection of the most essential essays — on opportunity, hiring, Odisha, and what it means to build from the ground up.",
    images: [`${SITE_URL}/api/og?title=Featured`],
  },
};

export default function FeaturedPage() {
  const essays = getFeaturedEssays();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/featured`,
    name: "Featured",
    description: "A curated selection of the most essential essays by Manas Majhi.",
    url: `${SITE_URL}/featured`,
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
      { "@type": "ListItem", position: 1, name: "Writing", item: `${SITE_URL}/writing` },
      { "@type": "ListItem", position: 2, name: "Featured", item: `${SITE_URL}/featured` },
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
      <div className="min-h-screen">
        {/* Header */}
        <div className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Collection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-5">
              Featured
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A curated selection of the most essential essays — on opportunity, hiring, Odisha, and what it means to build from the ground up.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {essays.length} {essays.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
        </div>

        {/* Essays grid */}
        <div className="px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {essays.map((essay) => (
                <EssayCard key={essay.slug} essay={essay} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

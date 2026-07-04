import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllEssayMeta } from "@/lib/essays";
import { EssayCard } from "@/components/essay/EssayCard";
import { CATEGORY_LABELS } from "@/types";
import type { Metadata } from "next";
import SearchInput from "./SearchInput";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across all writing by Manas Majhi.",
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ q?: string }>;
}

function scoreEssay(
  content: { title: string; excerpt: string; tags: string[]; category: string },
  terms: string[]
): number {
  let score = 0;
  for (const term of terms) {
    const t = term.toLowerCase();
    if (content.title.toLowerCase().includes(t)) score += 10;
    if (content.excerpt.toLowerCase().includes(t)) score += 5;
    if (content.tags.some((tag) => tag.toLowerCase().includes(t))) score += 4;
    if (content.category.toLowerCase().includes(t)) score += 2;
  }
  return score;
}

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const essays = getAllEssayMeta();

  const results =
    query.length > 0
      ? essays
          .map((e) => ({
            essay: e,
            score: scoreEssay(
              { title: e.title, excerpt: e.excerpt, tags: e.tags, category: e.category },
              query.split(/\s+/).filter(Boolean)
            ),
          }))
          .filter((r) => r.score > 0)
          .sort((a, b) => b.score - a.score)
          .map((r) => r.essay)
      : [];

  return (
    <div className="min-h-screen px-6 lg:px-8 pt-16 pb-20">
      <div className="max-w-3xl mx-auto mb-12">
        <Link
          href="/writing"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All writing
        </Link>

        <h1 className="font-serif text-4xl font-medium tracking-tight mb-8">
          Search
        </h1>

        <SearchInput initialQuery={query} />
      </div>

      {query && (
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-8">
            {results.length === 0
              ? `No results for "${query}"`
              : `${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`}
          </p>

          {results.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {results.map((essay) => (
                <EssayCard key={essay.slug} essay={essay} />
              ))}
            </div>
          )}
        </div>
      )}

      {!query && (
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-sm">
            Search across {essays.length} essays — Odisha, Kalahandi, India, hiring, opportunity, travel, philosophy.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <Link
                key={key}
                href={`/search?q=${encodeURIComponent(label)}`}
                className="px-4 py-3 rounded-xl border border-border text-sm hover:border-accent/40 hover:text-accent transition-all text-muted-foreground"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

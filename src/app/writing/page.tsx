import Link from "next/link";
import { getAllEssayMeta } from "@/lib/essays";
import { EssayCard } from "@/components/essay/EssayCard";
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, EssayCategory } from "@/types";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "All writing on opportunity, human potential, India, technology, and the systems that shape lives.",
};

const categories: EssayCategory[] = [
  "opportunity",
  "future-of-work",
  "india",
  "odisha",
  "travel",
  "entrepreneurship",
  "philosophy",
];

export default function EssaysPage() {
  const essays = getAllEssayMeta();

  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="section-label mb-4">Library</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Essays
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Long-form thinking on opportunity, human potential, India,
            technology, and the systems that shape our lives.
          </p>
        </div>

        {/* Category nav */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/writing/${cat}`}
              className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
            >
              {CATEGORY_LABELS[cat]}
            </Link>
          ))}
        </div>

        {essays.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">
            <p className="font-serif text-2xl mb-4">Writing coming soon.</p>
            <p>Upload your MDX files to{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                content/essays/
              </code>
            </p>
          </div>
        ) : (
          <>
            {/* Essays by category */}
            {categories.map((cat) => {
              const catEssays = essays.filter((e) => e.category === cat);
              if (catEssays.length === 0) return null;
              return (
                <section key={cat} className="mb-20">
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <p className="section-label mb-2">{CATEGORY_LABELS[cat]}</p>
                      <p className="text-muted-foreground text-sm max-w-lg">
                        {CATEGORY_DESCRIPTIONS[cat]}
                      </p>
                    </div>
                    <Link
                      href={`/writing/${cat}`}
                      className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      All in {CATEGORY_LABELS[cat]}{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {catEssays.slice(0, 3).map((essay) => (
                      <EssayCard key={essay.slug} essay={essay} />
                    ))}
                  </div>
                </section>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

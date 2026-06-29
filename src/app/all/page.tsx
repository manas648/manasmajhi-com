import Link from "next/link";
import Image from "next/image";
import { getAllEssayMeta } from "@/lib/essays";
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, EssayCategory } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Index",
  description:
    "Every article by Manas Majhi, organised by section — plus long-form documents on hiring and opportunity.",
};

const categories: EssayCategory[] = [
  "opportunity",
  "future-of-work",
  "india",
  "odisha",
  "kalahandi",
  "travel",
  "entrepreneurship",
  "philosophy",
  "hiring",
  "frameworks",
];

export default function IndexPage() {
  const articles = getAllEssayMeta();
  const latest = articles[0];

  const byCategory = categories.reduce<Record<EssayCategory, typeof articles>>(
    (acc, cat) => {
      acc[cat] = articles
        .filter((a) => a.category === cat)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      return acc;
    },
    {} as Record<EssayCategory, typeof articles>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-6 lg:px-8 pt-24 pb-12 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Index
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Everything
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Long-form documents and every article, organised by section.
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-8">
            <a
              href="#long-form"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Long-form ↓
            </a>
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {CATEGORY_LABELS[cat]} ({byCategory[cat].length}) ↓
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* Latest article */}
          {latest && (
            <section>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                New
              </p>
              <Link
                href={`/${latest.category}/${latest.slug}`}
                className="group block rounded-2xl border border-foreground/20 hover:border-foreground/50 transition-all overflow-hidden"
              >
                {latest.coverImage && (
                  <div className="relative h-52 w-full">
                    <Image
                      src={latest.coverImage}
                      alt={latest.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {CATEGORY_LABELS[latest.category as EssayCategory]} · {latest.readingTime}
                  </p>
                  <h3 className="font-serif text-2xl font-medium mb-3 group-hover:text-accent transition-colors">
                    {latest.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {latest.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">Read →</p>
                </div>
              </Link>
            </section>
          )}

          {/* Long-form documents */}
          <section id="long-form">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Long-form
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Whitepaper 1 */}
              <Link
                href="/whitepaper"
                className="group block p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Research Report
                </p>
                <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                  The Operational Visibility Gap
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Why 68% of VP searches stall past week 10 — and what the data
                  says about a different architecture.
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  PDF · Whitepaper →
                </p>
              </Link>

              {/* Whitepaper 2 */}
              <Link
                href="/whitepaper/automation-trap"
                className="group block p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Research Report
                </p>
                <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                  The Automation Trap
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Why AI is accelerating the wrong layer of recruiting — and why
                  74% of mandates still stall on AI-assisted stacks.
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  PDF · Whitepaper →
                </p>
              </Link>

              {/* Ebook */}
              <a
                href="https://majhi.tech/executive-search-playbook.pdf"
                className="group block p-6 rounded-2xl border border-border hover:border-foreground/30 transition-all"
              >
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Ebook
                </p>
                <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                  The Opportunity Framework
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A structured guide to how opportunity forms, compounds, and
                  how to build systems that create it.
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  PDF · Ebook →
                </p>
              </a>
            </div>
          </section>

          {/* Per-category sections */}
          {categories.map((cat) => {
            const catArticles = byCategory[cat];
            return (
              <section key={cat} id={cat}>
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Section
                    </p>
                    <h2 className="font-serif text-2xl font-medium">
                      {CATEGORY_LABELS[cat]}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1 max-w-xl">
                      {CATEGORY_DESCRIPTIONS[cat]}
                    </p>
                  </div>
                  <Link
                    href={`/${cat}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap ml-6"
                  >
                    View all →
                  </Link>
                </div>

                {catArticles.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Nothing published yet.
                  </p>
                ) : (
                  <ul className="divide-y divide-border">
                    {catArticles.map((article) => (
                      <li key={article.slug}>
                        <Link
                          href={`/${article.category}/${article.slug}`}
                          className="group flex items-baseline justify-between gap-4 py-3 hover:text-foreground transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-1">
                            {article.title}
                          </span>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {article.readingTime}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

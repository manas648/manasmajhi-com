import Link from "next/link";
import { getAllEssayMeta } from "@/lib/essays";
import {
  CATEGORY_LABELS,
  CATEGORY_DESCRIPTIONS,
  EssayCategory,
} from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Every article by Manas Majhi, organised by section. Opportunity, India, Odisha, hiring, philosophy, and more.",
};

const categories: EssayCategory[] = [
  "opportunity",
  "future-of-work",
  "india",
  "odisha",
  "travel",
  "entrepreneurship",
  "philosophy",
  "hiring",
];

export default function LibraryPage() {
  const essays = getAllEssayMeta();

  const totalCount = essays.length;

  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="section-label mb-4">Complete Index</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Library
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Every piece of writing, organised by section. {totalCount} articles, 3 long-form guides, across{" "}
            {categories.filter((c) => essays.some((e) => e.category === c)).length} categories.
          </p>
        </div>

        {/* Category jump links */}
        <div className="flex flex-wrap gap-2 mb-20 pb-8 border-b border-border">
          <a
            href="#long-form"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
          >
            Long-form
            <span className="text-xs opacity-60">2</span>
          </a>
          {categories.map((cat) => {
            const count = essays.filter((e) => e.category === cat).length;
            if (count === 0) return null;
            return (
              <a
                key={cat}
                href={`#${cat}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
              >
                {CATEGORY_LABELS[cat]}
                <span className="text-xs opacity-60">{count}</span>
              </a>
            );
          })}
        </div>

        {/* Long-form section */}
        <div id="long-form" className="mb-20 pb-8 border-b border-border">
          <div className="flex items-start justify-between mb-8 pb-4 border-b border-border">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="font-serif text-2xl font-medium">Long-form</h2>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">3</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-lg">
                Research reports and guides — longer pieces on hiring, executive search, and operational infrastructure.
              </p>
            </div>
          </div>
          <ul className="space-y-0 divide-y divide-border/50">
            <li>
              <a
                href="/whitepaper"
                className="group flex items-start justify-between gap-6 py-4 hover:bg-muted/30 -mx-3 px-3 rounded-lg transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground leading-snug mb-0.5">
                    The Operational Visibility Gap
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-1 leading-relaxed">
                    Why recruiting breaks at scale — and the infrastructure that closes the gap. Majhi OS Research Report.
                  </p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground/60 mt-0.5 whitespace-nowrap">
                  Research Report
                </span>
              </a>
            </li>
            <li>
              <a
                href="/whitepaper/automation-trap"
                className="group flex items-start justify-between gap-6 py-4 hover:bg-muted/30 -mx-3 px-3 rounded-lg transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground leading-snug mb-0.5">
                    The Automation Trap
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-1 leading-relaxed">
                    Why AI is accelerating the wrong layer of recruiting — and why 74% of mandates still stall. Majhi OS Research Report.
                  </p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground/60 mt-0.5 whitespace-nowrap">
                  Research Report
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://majhi.tech/executive-search-playbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 py-4 hover:bg-muted/30 -mx-3 px-3 rounded-lg transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground leading-snug mb-0.5">
                    The Executive Search Playbook
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-1 leading-relaxed">
                    How to close the right VP or C-suite hire in 50 days — and why most searches take 120. Majhi Group Guide.
                  </p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground/60 mt-0.5 whitespace-nowrap">
                  PDF Guide
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Sections */}
        <div className="space-y-20">
          {categories.map((cat) => {
            const catEssays = essays
              .filter((e) => e.category === cat)
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

            if (catEssays.length === 0) return null;

            return (
              <section key={cat} id={cat}>
                {/* Section header */}
                <div className="flex items-start justify-between mb-8 pb-4 border-b border-border">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="font-serif text-2xl font-medium">
                        {CATEGORY_LABELS[cat]}
                      </h2>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                        {catEssays.length}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-lg">
                      {CATEGORY_DESCRIPTIONS[cat]}
                    </p>
                  </div>
                  <Link
                    href={`/writing/${cat}`}
                    className="hidden sm:inline-flex shrink-0 text-xs text-muted-foreground hover:text-foreground transition-colors mt-1"
                  >
                    Browse section →
                  </Link>
                </div>

                {/* Essay list */}
                <ul className="space-y-0 divide-y divide-border/50">
                  {catEssays.map((essay) => (
                    <li key={essay.slug}>
                      <Link
                        href={`/writing/${essay.slug}`}
                        className="group flex items-start justify-between gap-6 py-4 hover:bg-muted/30 -mx-3 px-3 rounded-lg transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground group-hover:text-foreground leading-snug mb-0.5 truncate">
                            {essay.title}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-1 leading-relaxed">
                            {essay.excerpt}
                          </p>
                        </div>
                        <span className="shrink-0 text-xs text-muted-foreground/60 mt-0.5 whitespace-nowrap">
                          {essay.readingTime}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-24 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            New articles added regularly.{" "}
            <Link href="/writing" className="underline underline-offset-4 hover:text-foreground transition-colors">
              View by latest
            </Link>{" "}
            or{" "}
            <Link href="/start-here" className="underline underline-offset-4 hover:text-foreground transition-colors">
              start here
            </Link>{" "}
            if you're new.
          </p>
        </div>

      </div>
    </div>
  );
}

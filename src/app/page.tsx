import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getAllEssayMeta, getFeaturedEssays, getLatestEssays } from "@/lib/essays";
import { EssayCard } from "@/components/essay/EssayCard";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { CATEGORY_LABELS, EssayCategory, CATEGORY_DESCRIPTIONS, CATEGORY_IMAGES } from "@/types";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manas Majhi — Opportunity Shapes Outcomes",
  description:
    "Essays on opportunity, human potential, India, technology, and the systems that shape lives. By Manas Majhi.",
};

const collections = [
  {
    id: "opportunity" as EssayCategory,
    label: "Primary Collection",
    title: "Opportunity",
    description: CATEGORY_DESCRIPTIONS["opportunity"],
    href: "/essays/opportunity",
  },
  {
    id: "india" as EssayCategory,
    label: "Country",
    title: "India",
    description: CATEGORY_DESCRIPTIONS["india"],
    href: "/essays/india",
  },
  {
    id: "future-of-work" as EssayCategory,
    label: "Technology",
    title: "Future of Work",
    description: CATEGORY_DESCRIPTIONS["future-of-work"],
    href: "/essays/future-of-work",
  },
  {
    id: "philosophy" as EssayCategory,
    label: "Thinking",
    title: "Philosophy",
    description: CATEGORY_DESCRIPTIONS["philosophy"],
    href: "/essays/philosophy",
  },
];

const readingPaths = [
  {
    title: "New Reader",
    description: "The best place to start.",
    essays: ["improving-lives-with-new-opportunities", "talent-is-evenly-distributed", "why-i-build"],
    href: "/start-here",
  },
  {
    title: "India Path",
    description: "India's moment and what it means.",
    essays: ["indias-ai-opportunity", "indias-greatest-asset-is-its-people"],
    href: "/essays/india",
  },
  {
    title: "AI Path",
    description: "Technology and human potential.",
    essays: ["ai-and-human-potential"],
    href: "/essays/future-of-work",
  },
];

export default function HomePage() {
  const featured = getFeaturedEssays();
  const latest = getLatestEssays(6);
  const allEssays = getAllEssayMeta();

  const heroEssay = featured[0] || latest[0];
  const gridEssays = latest.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="section-label mb-6">Manas Majhi</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-balance">
              Opportunity
              <br />
              <span className="text-muted-foreground">Shapes Outcomes.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Exploring how people, technology, and systems create human potential.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/start-here"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
              >
                Start reading
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/essays"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                All essays
              </Link>
            </div>
          </div>

          {/* Mission line */}
          <div className="mt-16 pt-16 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Mission
              </p>
              <p className="font-serif text-lg">
                Improving Lives With New Opportunities.
              </p>
            </div>
            <div className="h-px sm:h-8 w-full sm:w-px bg-border shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Core Belief
              </p>
              <p className="font-serif text-lg">
                Talent is abundant. Opportunity is not.
              </p>
            </div>
            <div className="h-px sm:h-8 w-full sm:w-px bg-border shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Essays
              </p>
              <p className="font-serif text-lg">
                {allEssays.length > 0 ? `${allEssays.length} published` : "Growing library"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Essay */}
      {heroEssay && (
        <section className="px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <p className="section-label mb-6">Featured Essay</p>
            <Link href={`/essays/${heroEssay.slug}`} className="group block">
              <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-muted/50 to-background p-8 md:p-12 lg:p-16">
                <div className="max-w-3xl">
                  <div className="essay-meta mb-4">
                    {CATEGORY_LABELS[heroEssay.category]} · {formatDate(heroEssay.date)} ·{" "}
                    {heroEssay.readingTime}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 group-hover:text-accent transition-colors">
                    {heroEssay.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
                    {heroEssay.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Read essay
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Collections */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-3">Collections</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium">
                Topics I return to.
              </h2>
            </div>
            <Link
              href="/essays"
              className="hidden md:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all topics <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {collections.map((c) => (
              <Link key={c.id} href={c.href} className="group block h-full">
                <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden border border-border hover:border-accent/40 transition-all duration-300">
                  {/* Category photo */}
                  <Image
                    src={CATEGORY_IMAGES[c.id]}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Text */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p className="text-xs uppercase tracking-widest text-white/60 mb-1.5">
                      {c.label}
                    </p>
                    <h3 className="font-serif text-xl font-medium text-white mb-1.5 group-hover:text-accent transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
                      {c.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-medium text-accent">
                      Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Paths */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Reading Paths</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-10">
            Where to begin.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {readingPaths.map((path) => (
              <Link key={path.title} href={path.href} className="group block">
                <div className="rounded-2xl border border-border p-6 hover:border-accent/40 transition-all duration-200 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-accent" />
                    <p className="section-label">{path.title}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {path.description}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {path.essays.length} essays in this path
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Essays */}
      {gridEssays.length > 0 && (
        <section className="px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="section-label mb-3">Latest</p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium">
                  Recent essays.
                </h2>
              </div>
              <Link
                href="/essays"
                className="hidden md:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                All essays <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridEssays.map((essay) => (
                <EssayCard key={essay.slug} essay={essay} />
              ))}
            </div>
            <div className="mt-8 md:hidden">
              <Link
                href="/essays"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                All essays <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Frameworks teaser */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <Link href="/frameworks" className="group block">
            <div className="rounded-3xl border border-border bg-muted/30 p-8 md:p-12 hover:border-accent/40 transition-all">
              <p className="section-label mb-4">Frameworks</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4 group-hover:text-accent transition-colors">
                Mental models for opportunity.
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-6">
                Structured frameworks for thinking about opportunity, hiring,
                and human potential. Built from years of practice.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                Explore frameworks{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 lg:px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl">
            <p className="section-label mb-4">Newsletter</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
              Essays in your inbox.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              New essays on opportunity, India, technology, and human potential.
              Written when there's something worth saying.
            </p>
            <NewsletterForm variant="inline" />
          </div>
        </div>
      </section>
    </div>
  );
}

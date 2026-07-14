import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Award } from "lucide-react";
import { getAllEssayMeta, getFeaturedEssays, getLatestEssays } from "@/lib/essays";
import { EssayCard } from "@/components/essay/EssayCard";
import { VisitorCounter } from "@/components/VisitorCounter";

import { CATEGORY_LABELS, EssayCategory, CATEGORY_DESCRIPTIONS, CATEGORY_IMAGES } from "@/types";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Manas Majhi" },
  description:
    "Essays on opportunity, hiring, India, and the systems that shape lives — by Manas Majhi, founder of Majhi Group and Majhi OS.",
};

const collections = [
  {
    id: "opportunity" as EssayCategory,
    label: "Primary Collection",
    title: "Opportunity",
    description: CATEGORY_DESCRIPTIONS["opportunity"],
    href: "/opportunity",
  },
  {
    id: "india" as EssayCategory,
    label: "Country",
    title: "India",
    description: CATEGORY_DESCRIPTIONS["india"],
    href: "/india",
  },
  {
    id: "future-of-work" as EssayCategory,
    label: "Technology",
    title: "Future of Work",
    description: CATEGORY_DESCRIPTIONS["future-of-work"],
    href: "/future-of-work",
  },
  {
    id: "philosophy" as EssayCategory,
    label: "Thinking",
    title: "Philosophy",
    description: CATEGORY_DESCRIPTIONS["philosophy"],
    href: "/philosophy",
  },
];

const readingPaths = [
  {
    title: "New Reader",
    description: "The best place to start.",
    href: "/start-here",
    category: null,
    fixedCount: 3,
  },
  {
    title: "Opportunity",
    description: "How opportunity forms, compounds, and what closes the gap.",
    href: "/opportunity",
    category: "opportunity" as EssayCategory,
    fixedCount: null,
  },
  {
    title: "India",
    description: "India's moment and what it means.",
    href: "/india",
    category: "india" as EssayCategory,
    fixedCount: null,
  },
  {
    title: "Odisha",
    description: "Development, talent, and the untapped potential of a remarkable state.",
    href: "/odisha",
    category: "odisha" as EssayCategory,
    fixedCount: null,
  },
  {
    title: "Kalahandi",
    description: "Where I come from and what it taught me.",
    href: "/kalahandi",
    category: "kalahandi" as EssayCategory,
    fixedCount: null,
  },
  {
    title: "Future of Work",
    description: "AI, automation, and what actually changes.",
    href: "/future-of-work",
    category: "future-of-work" as EssayCategory,
    fixedCount: null,
  },
  {
    title: "Entrepreneurship",
    description: "Building things, executing with conviction, thinking long-term.",
    href: "/entrepreneurship",
    category: "entrepreneurship" as EssayCategory,
    fixedCount: null,
  },
  {
    title: "Hiring",
    description: "Why executive hiring fails and what better looks like.",
    href: "/hiring",
    category: "hiring" as EssayCategory,
    fixedCount: null,
  },
  {
    title: "Philosophy",
    description: "On learning, identity, perspective, and the examined life.",
    href: "/philosophy",
    category: "philosophy" as EssayCategory,
    fixedCount: null,
  },
  {
    title: "Frameworks",
    description: "Mental models for thinking about opportunity and human potential.",
    href: "/frameworks",
    category: "frameworks" as EssayCategory,
    fixedCount: null,
  },
];

const placesHubs = [
  {
    label: "Country",
    title: "India",
    description: "Why India's moment is now. Technology, talent, and what's being built.",
    href: "/india",
    count: "26 articles",
  },
  {
    label: "State",
    title: "Odisha",
    description: "The most differentiated state in India. Economy, talent, cities, and opportunity.",
    href: "/odisha",
    count: "38 articles",
  },
  {
    label: "District",
    title: "Kalahandi",
    description: "Where I come from. What a place most people haven't heard of taught me about opportunity.",
    href: "/kalahandi",
    count: "15 articles",
  },
];

const socialProof = [
  { label: "World Staffing Leader", org: "Staffing Industry Analysts", href: "/entrepreneurship/world-staffing-leader" },
  { label: "Indian Achievers Award", org: "Indian Achievers Forum", href: "/entrepreneurship/indian-achievers-award-2022" },
  { label: "Startup of the Year", org: "HackerNoon 2023", href: "/entrepreneurship/hackernoon-startup-of-the-year-2023" },
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="max-w-2xl">
              <p className="section-label mb-6">Manas Majhi</p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-balance">
                Opportunity
                <br />
                <span className="text-muted-foreground">Shapes Outcomes.</span>
              </h1>
              <p className="font-serif text-xl md:text-2xl italic text-foreground/80 leading-relaxed mb-5 max-w-xl">
                "Talent is evenly distributed. Opportunity is not."
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                A Kalahandi-born entrepreneur writing about how talent, opportunity, technology, and development intersect in Odisha, India, and the world.
              </p>
              <p className="text-sm text-muted-foreground mb-10">
                A growing community of thousands of readers across India and beyond.
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
                  href="/writing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                >
                  All writing
                </Link>
              </div>
            </div>

            {/* Headshot */}
            <div className="flex justify-center lg:justify-end shrink-0">
              <div className="relative flex items-center justify-center">
                {/* Warm amber halo behind photo */}
                <div
                  className="absolute bg-amber-300/50 dark:bg-amber-600/30 blur-3xl"
                  style={{ width: "240px", height: "320px" }}
                />
                {/* Portrait — fades into page background */}
                <div className="relative w-[200px] h-[280px] lg:w-[280px] lg:h-[400px]">
                  <Image
                    src="/manas-majhi-1.jpg"
                    alt="Manas Majhi"
                    width={376}
                    height={550}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "center top",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 85% 88% at 50% 38%, black 48%, transparent 76%)",
                      maskImage:
                        "radial-gradient(ellipse 85% 88% at 50% 38%, black 48%, transparent 76%)",
                    }}
                    priority
                  />
                </div>
              </div>
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
                Articles
              </p>
              <p className="font-serif text-lg">
                {allEssays.length > 0 ? `${allEssays.length} published` : "Growing library"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is Manas Majhi */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-border bg-muted/30 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-12 items-start">
              {/* Bio */}
              <div className="max-w-2xl">
                <p className="section-label mb-5">Who is Manas Majhi</p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6">
                  From a government school in Kalahandi to building companies that operate globally.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  I grew up in Kalahandi, Odisha — a part of India most people
                  will never visit. I attended a government Odia-medium school.
                  What I built there was a habit of figuring things out without
                  the infrastructure that makes figuring things out easy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  That background became the lens through which I see
                  everything: opportunity, systems, India, hiring, and human
                  potential. I run <strong className="text-foreground">Majhi Group</strong> — a retained
                  executive search firm that places VP and C-suite leaders in
                  30–45 days against a 65–90 day industry median — and{" "}
                  <strong className="text-foreground">Majhi OS</strong>, autonomous hiring
                  operations infrastructure. 25+ placements completed. Two
                  global recognitions as a World Staffing Leader.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The writing on this site is not content. It is the actual
                  work of trying to understand things that matter — and
                  building frameworks for people who are serious about them.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
                  >
                    Full story <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/start-here"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
                  >
                    Start reading
                  </Link>
                </div>
              </div>

              {/* Credentials */}
              <div className="lg:min-w-[220px] space-y-6">
                {[
                  { label: "Indian Achievers Award", sub: "Entrepreneur of the Year · 2022" },
                  { label: "World Staffing Leader #18", sub: "Global Top 100 · 2024" },
                  { label: "World Staffing Leader #87", sub: "Global Top 100 · 2023" },
                  { label: "HackerNoon Startup of the Year", sub: "North America · 2023" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <Award className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.sub}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-border space-y-3">
                  {[
                    { stat: "64K+", label: "Majhi Group followers" },
                    { stat: "19K+", label: "Newsletter subscribers" },
                    { stat: `${allEssays.length}`, label: "Articles published" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-baseline gap-2">
                      <span className="font-serif text-xl font-medium">{item.stat}</span>
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Essay */}
      {heroEssay && (
        <section className="px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <p className="section-label mb-6">Featured Article</p>
            <Link href={`/${heroEssay.category}/${heroEssay.slug}`} className="group block">
              <div className="relative rounded-3xl overflow-hidden border border-border">
                {/* Cover image */}
                {heroEssay.coverImage && (
                  <div className="relative h-64 md:h-80 w-full">
                    <Image
                      src={heroEssay.coverImage}
                      alt={heroEssay.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                )}
                <div className={heroEssay.coverImage ? "p-8 md:p-12" : "bg-gradient-to-br from-muted/50 to-background p-8 md:p-12 lg:p-16"}>
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
                      Read article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
              href="/writing"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {readingPaths.map((path) => {
              const count = path.fixedCount ?? allEssays.filter((e) => e.category === path.category).length;
              return (
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
                      {count} articles in this path
                    </div>
                  </div>
                </Link>
              );
            })}
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
                  Recent articles.
                </h2>
              </div>
              <Link
                href="/writing"
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
                href="/writing"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                All essays <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Frameworks teaser — raised above collections */}
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

      {/* Places */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-3">Places</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium">
                Where I come from shapes what I see.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {placesHubs.map((place) => (
              <Link key={place.href} href={place.href} className="group block">
                <div className="rounded-2xl border border-border p-7 hover:border-accent/40 transition-all duration-200 h-full flex flex-col">
                  <div className="mb-4">
                    <p className="section-label mb-1.5">{place.label}</p>
                    <h3 className="font-serif text-2xl font-medium group-hover:text-accent transition-colors">
                      {place.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                    {place.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{place.count}</span>
                    <div className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                      Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <VisitorCounter />
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getAllEssayMeta } from "@/lib/essays";
import { EssayCard } from "@/components/essay/EssayCard";
import { CATEGORY_LABELS } from "@/types";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Here",
  description:
    "The best place to begin reading Manas Majhi — a curated guide to the most important essays.",
};

const FLAGSHIP_SLUGS = [
  "improving-lives-with-new-opportunities",
  "talent-is-evenly-distributed",
  "opportunity-changes-lives",
  "why-your-vp-search-stalled-at-week-ten",
  "forty-one-days",
  "why-i-build",
  "learning-from-people",
  "one-year-later",
  "ai-and-human-potential",
  "indias-ai-opportunity",
  "indias-greatest-asset-is-its-people",
  "odishas-untapped-potential",
  "the-future-of-odisha",
  "what-travel-teaches-us-about-home",
];

const readingPaths = [
  {
    id: "new",
    icon: "✦",
    title: "New Reader",
    description:
      "If you're here for the first time, start with the foundational essays on opportunity and why this work exists.",
    slugs: [
      "improving-lives-with-new-opportunities",
      "talent-is-evenly-distributed",
      "why-i-build",
    ],
  },
  {
    id: "opportunity",
    icon: "◎",
    title: "Opportunity Path",
    description:
      "The core thesis — how opportunity shapes lives, societies, and the arc of human progress.",
    slugs: [
      "talent-is-evenly-distributed",
      "opportunity-changes-lives",
      "improving-lives-with-new-opportunities",
    ],
  },
  {
    id: "india",
    icon: "◉",
    title: "India Path",
    description:
      "India's moment — technology, potential, and what the next decade holds.",
    slugs: ["indias-ai-opportunity", "indias-greatest-asset-is-its-people"],
  },
  {
    id: "odisha",
    icon: "○",
    title: "Odisha Path",
    description:
      "The state I come from — its potential, its people, its future.",
    slugs: ["odishas-untapped-potential", "the-future-of-odisha"],
  },
  {
    id: "ai",
    icon: "◈",
    title: "AI Path",
    description: "How artificial intelligence intersects with human potential.",
    slugs: ["ai-and-human-potential", "indias-ai-opportunity"],
  },
  {
    id: "entrepreneurship",
    icon: "◆",
    title: "Entrepreneurship Path",
    description: "Building, executing, and thinking for the long term.",
    slugs: ["why-i-build", "learning-from-people", "one-year-later"],
  },
  {
    id: "hiring",
    icon: "◇",
    title: "Hiring Path",
    description:
      "Why hiring infrastructure breaks, what it costs, and what the next generation of execution looks like.",
    slugs: [
      "why-your-vp-search-stalled-at-week-ten",
      "the-four-ways-hiring-infrastructure-fails",
      "forty-one-days",
    ],
  },
];

export default function StartHerePage() {
  const allEssays = getAllEssayMeta();

  const flagshipEssays = FLAGSHIP_SLUGS.map((slug) =>
    allEssays.find((e) => e.slug === slug)
  ).filter(Boolean);

  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="section-label mb-4">Welcome</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Start Here
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A curated reading experience. The essays below are the best place
            to begin — the ones that define this work and why it exists.
          </p>
        </div>

        {/* Core belief */}
        <div className="border-l-4 border-accent pl-8 mb-20 max-w-2xl">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed italic">
            "Talent is abundant. Opportunity is not. The purpose of technology,
            institutions, leadership, and systems is to reduce that gap."
          </p>
          <p className="mt-4 text-sm text-muted-foreground">— Manas Majhi</p>
        </div>

        {/* Reading Paths */}
        <div className="mb-20">
          <p className="section-label mb-3">Reading Paths</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-10">
            Choose your journey.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {readingPaths.map((path) => {
              const pathEssays = path.slugs
                .map((slug) => allEssays.find((e) => e.slug === slug))
                .filter(Boolean);

              return (
                <div
                  key={path.id}
                  className="rounded-2xl border border-border p-6 hover:border-accent/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent text-lg">{path.icon}</span>
                    <p className="section-label">{path.title}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {path.description}
                  </p>
                  <div className="space-y-2">
                    {pathEssays.length > 0 ? (
                      pathEssays.map((essay) => (
                        <Link
                          key={essay!.slug}
                          href={`/writing/${essay!.slug}`}
                          className="flex items-start gap-2 text-sm group"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors line-clamp-1">
                            {essay!.title}
                          </span>
                        </Link>
                      ))
                    ) : (
                      path.slugs.map((slug) => (
                        <div
                          key={slug}
                          className="flex items-start gap-2 text-sm"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/40 mt-0.5 shrink-0" />
                          <span className="text-muted-foreground/40 italic text-xs">
                            {slug.replace(/-/g, " ")}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flagship essays */}
        <div className="mb-20">
          <p className="section-label mb-3">Essential Reading</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-10">
            The most important essays.
          </h2>

          {flagshipEssays.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {flagshipEssays.map((essay) => (
                <EssayCard key={essay!.slug} essay={essay!} variant="featured" />
              ))}
            </div>
          ) : (
            <div className="space-y-px border border-border rounded-2xl overflow-hidden">
              {FLAGSHIP_SLUGS.map((slug, i) => (
                <div
                  key={slug}
                  className="flex items-center gap-4 px-6 py-4 bg-card hover:bg-muted/50 transition-colors"
                >
                  <span className="text-muted-foreground/40 text-sm font-mono w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2 min-w-0">
                    <BookOpen className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                    <span className="text-sm text-muted-foreground italic truncate">
                      {slug.replace(/-/g, " ")}
                    </span>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground/40">
                    Coming soon
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Work with Manas */}
        <div className="mb-20">
          <p className="section-label mb-3">The Work</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-10">
            If you&apos;re here about hiring.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Majhi OS */}
            <div className="rounded-2xl border border-border p-8 flex flex-col">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Majhi OS
              </p>
              <h3 className="font-serif text-2xl font-medium mb-3">
                Hiring system health.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">
                Autonomous hiring operations infrastructure — the observability
                and execution layer that prevents VP searches from stalling and
                recovers them when they do. 68% of VP searches fail past week
                10. Most don&apos;t have to.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/whitepaper"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
                >
                  Read the research report
                </Link>
                <a
                  href="https://majhi.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium hover:border-foreground/40 transition-colors"
                >
                  Book a Mission Walkthrough →
                </a>
              </div>
            </div>

            {/* Majhi Group */}
            <div className="rounded-2xl border border-border p-8 flex flex-col">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Majhi Group
              </p>
              <h3 className="font-serif text-2xl font-medium mb-3">
                Retained executive search.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">
                VP and C-suite placements. 30–45 days against the 65–90 day
                industry median. 90-day replacement guarantee. For CEOs running
                revenue-critical searches that can&apos;t afford to stall.
              </p>
              <Link
                href="/work-with-me"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity w-fit"
              >
                Request a Search Assessment →
              </Link>
            </div>
          </div>
        </div>

        {/* About Manas */}
        <div className="max-w-2xl">
          <p className="section-label mb-4">About the Author</p>
          <h2 className="font-serif text-3xl font-medium mb-6">
            Who is Manas Majhi?
          </h2>
          <div className="prose-essay text-sm text-muted-foreground space-y-4 font-sans">
            <p>
              I grew up in Kalahandi, Odisha — one of India's most underserved
              districts. I attended a government Odia-medium school with no
              access to the internet, no connections to the outside world, and
              no clear path forward.
            </p>
            <p>
              That experience shaped everything. Not as a hardship story, but as
              a lens: I understand, from the inside, what it means to have
              talent without access. To see potential without opportunity.
            </p>
            <p>
              Today I run two companies: Majhi Group (retained executive search)
              and Majhi OS (autonomous hiring operations infrastructure). I write
              because ideas matter — and because the gap between talent and
              opportunity is still too wide.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Full story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/timeline"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Timeline
            </Link>
            <Link
              href="/work-with-me"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work with Manas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

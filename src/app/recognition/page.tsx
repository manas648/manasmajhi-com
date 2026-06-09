import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Awards and media recognition for Manas Majhi — Indian Achievers Award, World Staffing Summit, HackerNoon, and more.",
};

const awards = [
  {
    year: "2024",
    rank: "Rank #18",
    title: "Top 100 Staffing Leaders",
    body: "World Staffing Summit",
    href: "https://www.candidately.com/directory/person/maanas-majhi",
  },
  {
    year: "2023",
    rank: "Rank #87",
    title: "Top 100 Staffing Leaders",
    body: "World Staffing Summit",
    href: "https://www.candidately.com/worldstaffingsummit/awards/meet-all-staffing-leaders/manas-majhi",
  },
  {
    year: "2023",
    rank: "North America",
    title: "Startups of the Year",
    body: "HackerNoon",
    href: "https://hackernoon.com/startups-of-the-year-2023-winners-north-america",
  },
  {
    year: "2022",
    rank: "Entrepreneur of the Year",
    title: "Indian Achievers Award",
    body: "Indian Achievers' Forum",
    href: "https://www.business-standard.com/content/press-releases-ani/manas-ranjan-majhi-director-of-majhi-group-honoured-with-the-indian-achievers-award-2022-122062000539_1.html",
  },
  {
    year: "2022",
    rank: "Advisory Board Member",
    title: "Customer Experience Certificate Program Advisory Board",
    body: "Ithaca College · Zschool",
    href: null,
  },
];

const media = [
  {
    name: "Business Standard",
    href: "https://www.business-standard.com/content/press-releases-ani/manas-ranjan-majhi-director-of-majhi-group-honoured-with-the-indian-achievers-award-2022-122062000539_1.html",
  },
  {
    name: "The Print",
    href: "https://theprint.in/ani-press-releases/manas-ranjan-majhi-director-of-majhi-group-honoured-with-the-indian-achievers-award-2022/1004061/",
  },
  {
    name: "ANI",
    href: "https://www.aninews.in/news/business/business/manas-ranjan-majhi-director-of-majhi-group-honoured-with-the-indian-achievers-award-202220220620133831",
  },
  {
    name: "Zee5",
    href: null, // URL pending
  },
  {
    name: "HackerNoon",
    href: "https://hackernoon.com/startups-of-the-year-2023-winners-north-america",
  },
  {
    name: "Candidately",
    href: "https://www.candidately.com/directory/person/maanas-majhi",
  },
];

export default function RecognitionPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="section-label mb-4">Recognition</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Awards &amp;
            <br />
            <span className="text-muted-foreground">Recognition.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Selected recognition for work in executive search, hiring
            infrastructure, and entrepreneurship.
          </p>
        </div>

        {/* As seen on */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            As seen on
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {media.map((outlet, i) => (
              <span key={outlet.name} className="flex items-center gap-8">
                {outlet.href ? (
                  <a
                    href={outlet.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {outlet.name}
                  </a>
                ) : (
                  <span className="font-serif text-lg font-medium text-foreground">
                    {outlet.name}
                  </span>
                )}
                {i < media.length - 1 && (
                  <span className="text-border text-lg select-none">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-border mb-20" />

        {/* Awards */}
        <div className="space-y-px">
          {awards.map((award) => {
            const inner = (
              <>
                <div className="flex items-start gap-6">
                  {/* Year */}
                  <span className="shrink-0 w-12 text-xs uppercase tracking-widest text-muted-foreground pt-1">
                    {award.year}
                  </span>
                  {/* Content */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {award.rank}
                    </p>
                    <h2 className="font-serif text-2xl font-medium group-hover:text-muted-foreground transition-colors">
                      {award.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {award.body}
                    </p>
                  </div>
                </div>
                {award.href && (
                  <span className="shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-150 pt-2">
                    →
                  </span>
                )}
              </>
            );
            return award.href ? (
              <a
                key={`${award.year}-${award.title}`}
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 py-8 border-b border-border hover:border-foreground/20 transition-colors"
              >
                {inner}
              </a>
            ) : (
              <div
                key={`${award.year}-${award.title}`}
                className="group flex items-start justify-between gap-6 py-8 border-b border-border"
              >
                {inner}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="font-serif text-lg text-muted-foreground italic">
            "Recognition is a byproduct. The work comes first."
          </p>
        </div>
      </div>
    </div>
  );
}

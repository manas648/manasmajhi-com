import type { Metadata } from "next";
import { TimelineItem } from "@/types";

export const metadata: Metadata = {
  title: "Timeline",
  description: "The story of Manas Majhi — from Kalahandi to global clients, Majhi Group, Majhi OS, and writing.",
};

const timeline: TimelineItem[] = [
  {
    year: "Origin",
    title: "Kalahandi, Odisha",
    description:
      "Born and raised in Kalahandi — one of India's most underserved districts. The gap between talent and opportunity was not abstract here. It was lived, daily, by everyone around me. That gap became the question I've spent my career trying to answer.",
    location: "Kalahandi, Odisha",
    type: "origin",
  },
  {
    year: "Education",
    title: "Government School",
    description:
      "Educated entirely in Odia medium, with no internet access, no mentors, and no obvious path forward. The constraint became a teacher. I learned to find information without infrastructure, to move without a map, and to build conviction without external validation. Those skills never left.",
    location: "Odisha, India",
    type: "education",
  },
  {
    year: "Education",
    title: "Engineering",
    description:
      "Left Odisha for New Delhi to study engineering — the first step out, and proof that geography is not destiny. The move was disorienting and clarifying in equal measure. It confirmed what I had suspected: the world rewards people who show up prepared to learn.",
    location: "New Delhi, India",
    type: "education",
  },
  {
    year: "Early Career",
    title: "Barclays · American Express · Synpulse",
    description:
      "Built foundational experience across global financial institutions and management consulting. Barclays. American Express. Synpulse Management Consulting. Each role sharpened a different edge — systems thinking, client delivery, and how large organisations actually make decisions. The pattern I kept seeing: the best organisations win on people, and most organisations don't hire well enough to know it.",
    location: "India",
    type: "career",
  },
  {
    year: "Company",
    title: "Majhi Group",
    description:
      "Founded Majhi Group — a retained executive search firm built on a single thesis: the hiring system for senior leaders is broken in a specific, measurable way, and a better system is possible. Retained model. 20–25% of total CTC. Exclusivity. 90-day guarantee. Weekly status reports. 25+ C-suite and VP placements. 30–45 day average close versus a 65–90 day industry median. Quality over speed — every time.",
    location: "India",
    type: "company",
  },
  {
    year: "Infrastructure",
    title: "Majhi OS",
    description:
      "Started building Majhi OS — autonomous hiring operations infrastructure. The insight: most recruiting software helps teams send outreach and track candidates. Nobody owns what happens when the hiring system fails. Majhi OS detects failing mandates before they collapse, launches recovery sequences autonomously, and gives leadership real-time visibility into hiring health. The category is new. The problem is not.",
    location: "India",
    type: "company",
  },
  {
    year: "Now",
    title: "Writing",
    description:
      "This site. A growing library of essays on opportunity, India, technology, and human potential. Writing is how I think out loud — and how I stay honest about what I actually believe. Every essay is written for the person I was at 22, in Kalahandi, looking for maps.",
    type: "writing",
  },
];

const typeColors: Record<TimelineItem["type"], string> = {
  origin: "bg-amber-500",
  education: "bg-blue-500",
  career: "bg-emerald-500",
  company: "bg-accent",
  milestone: "bg-purple-500",
  writing: "bg-rose-500",
};

export default function TimelinePage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="section-label mb-4">Journey</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Timeline
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From Kalahandi to global executive search to hiring infrastructure.
            The story in chapters.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-16 pb-16 last:pb-0">
                {/* Dot */}
                <div
                  className={`absolute left-4 top-1 w-4 h-4 rounded-full ${typeColors[item.type]} ring-4 ring-background`}
                />

                {/* Content */}
                <div>
                  <div className="essay-meta mb-2">
                    <span className="font-medium text-foreground">
                      {item.year}
                    </span>
                    {item.location && (
                      <>
                        {" "}
                        · <span>{item.location}</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-serif text-2xl font-medium mb-4">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="font-serif text-lg text-muted-foreground italic">
            "The arc bends toward opportunity — if you're willing to look for it
            in the right places."
          </p>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { TimelineItem } from "@/types";

export const metadata: Metadata = {
  title: "Timeline",
  description: "The story of Manas Majhi — from Kalahandi to global clients, Majhi Group, Majhi OS, and writing.",
};

const timeline: TimelineItem[] = [
  {
    year: "Kalahandi",
    title: "Origin",
    description:
      "Born and raised in Kalahandi, Odisha — one of India's most underserved districts. Attended a government Odia-medium school with no internet access, no mentors, and no clear path forward. The gap between talent and opportunity was not abstract. It was lived.",
    location: "Kalahandi, Odisha",
    type: "origin",
  },
  {
    year: "Education",
    title: "Government School",
    description:
      "Educated entirely in Odia medium. The constraint became a teacher: I learned to find information without infrastructure, to move without a map, and to build conviction without validation.",
    location: "Odisha, India",
    type: "education",
  },
  {
    year: "Early Career",
    title: "Entering Recruitment",
    description:
      "Discovered executive search — a field where understanding people, systems, and markets creates measurable value. Started placing talent and rapidly realized that hiring, done well, is one of the highest-leverage activities in any organization.",
    location: "India",
    type: "career",
  },
  {
    year: "Scale",
    title: "Global Clients",
    description:
      "Built a track record working with global organizations on high-stakes hiring. 25+ C-suite and VP placements. 30–45 day average time-to-fill against a 65–90 day industry median. 90%+ offer acceptance rate. The system was working.",
    location: "Global",
    type: "career",
  },
  {
    year: "Leverage",
    title: "Upwork & Distribution",
    description:
      "Used Upwork as a distribution channel to reach international clients — an early lesson in how platforms democratize access. This was opportunity creation in practice: reaching buyers I had no relationship with, purely through quality of work.",
    location: "Remote",
    type: "milestone",
  },
  {
    year: "Company",
    title: "Majhi Group",
    description:
      "Founded Majhi Group — a retained executive search firm. The thesis: the hiring system for senior leaders is broken in a specific, measurable way. We built a different system. Retained model. 20–25% fee. Exclusivity. 90-day guarantee. Weekly status reports. Quality over speed.",
    location: "India",
    type: "company",
  },
  {
    year: "Infrastructure",
    title: "Majhi OS",
    description:
      "Started building Majhi OS — autonomous hiring operations infrastructure. The insight: most recruiting software helps teams send outreach and track candidates. Nobody owns what happens when the hiring system fails. Majhi OS detects failing mandates before they collapse, and recovers them autonomously.",
    location: "India",
    type: "company",
  },
  {
    year: "Now",
    title: "Writing",
    description:
      "This site. A growing library of long-form essays on opportunity, India, technology, and human potential. Writing is how I think. The essays are the actual work of trying to understand things that matter — for the person I was at 22, looking for maps.",
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

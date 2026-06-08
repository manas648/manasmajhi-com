import type { Metadata } from "next";
import { Framework } from "@/types";

export const metadata: Metadata = {
  title: "Frameworks",
  description:
    "Mental models for thinking about opportunity, hiring, and human potential. Built from years of practice.",
};

const frameworks: Framework[] = [
  {
    id: "opportunity",
    title: "Opportunity Framework™",
    tagline: "How opportunity compounds.",
    description:
      "Opportunity is not a single event. It is a chain. Each link enables the next. Understanding this chain — and where it breaks — is how you design systems that actually close the gap between talent and potential.",
    steps: [
      "Talent — the raw material. Evenly distributed. Often unrealized.",
      "Access — the gateway. Information, networks, systems, mentors.",
      "Opportunity — the moment. The door that opens, or doesn't.",
      "Mobility — the outcome. Economic, geographic, social movement.",
      "Prosperity — the compound effect. Generational change.",
    ],
    color: "from-amber-500/15 to-orange-500/10 border-amber-500/25",
  },
  {
    id: "intelligence-hiring",
    title: "Intelligence Hiring System™",
    tagline: "The architecture of exceptional hiring.",
    description:
      "Most hiring fails not because of bad candidates, but because of bad intelligence. The right hire requires three layers of intelligence working in sequence. Without all three, decisions are guesses.",
    steps: [
      "Market Intelligence — Who exists? Where are they? What do they earn? What moves them?",
      "Talent Intelligence — Who is exceptional vs. merely available? How do you distinguish signal from noise?",
      "Decision Intelligence — How do you evaluate fit, risk, and potential? How do you remove bias from the room?",
    ],
    color: "from-blue-500/15 to-indigo-500/10 border-blue-500/25",
  },
  {
    id: "hiring-health",
    title: "Hiring System Health™",
    tagline: "The three dimensions of a healthy mandate.",
    description:
      "A hiring mandate is a system. Like all systems, it has health metrics. Most organizations measure outcomes (did we hire?) instead of health (is the system working?). By the time outcomes fail, it's too late.",
    steps: [
      "Pipeline Health — Is the funnel filling? Are the right candidates entering? Is response rate holding?",
      "Process Health — Are stages moving? Are decisions being made? Where is velocity dying?",
      "Decision Health — Are evaluations calibrated? Is bias being managed? Is the right person in the room?",
    ],
    color: "from-emerald-500/15 to-teal-500/10 border-emerald-500/25",
  },
  {
    id: "opportunity-mobility",
    title: "Opportunity Mobility Framework™",
    tagline: "How people move through systems.",
    description:
      "Opportunity alone is not enough. The question is whether individuals can convert opportunity into actual mobility. Most systemic interventions fail because they solve for opportunity without solving for capability, participation, and the conditions that make mobility real.",
    steps: [
      "Opportunity — The door exists. The role, the program, the path.",
      "Capability — The person can walk through it. Skills, confidence, preparation.",
      "Participation — The person does walk through it. No structural barriers block entry.",
      "Mobility — The outcome materializes. Economic, social, professional change.",
    ],
    color: "from-purple-500/15 to-violet-500/10 border-purple-500/25",
  },
];

export default function FrameworksPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="section-label mb-4">Mental Models</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Frameworks
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Structured models for thinking about opportunity, hiring systems, and
            human potential. Built from years of practice and failure.
          </p>
        </div>

        {/* Frameworks grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {frameworks.map((fw) => (
            <div
              key={fw.id}
              className={`rounded-3xl border bg-gradient-to-br p-8 md:p-10 ${fw.color}`}
            >
              <p className="section-label mb-3">{fw.tagline}</p>
              <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                {fw.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
                {fw.description}
              </p>

              {/* Steps */}
              <div className="space-y-4">
                {fw.steps.map((step, i) => {
                  const [label, ...rest] = step.split(" — ");
                  const detail = rest.join(" — ");
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-7 h-7 rounded-full border-2 border-accent/40 flex items-center justify-center text-xs font-mono text-accent font-medium">
                          {i + 1}
                        </div>
                        {i < fw.steps.length - 1 && (
                          <div className="w-px flex-1 bg-accent/20 mt-1 min-h-[1.5rem]" />
                        )}
                      </div>
                      <div className="pb-1">
                        {detail ? (
                          <>
                            <p className="font-medium text-sm mb-0.5">
                              {label}
                            </p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {detail}
                            </p>
                          </>
                        ) : (
                          <p className="text-sm leading-relaxed">{step}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-20 max-w-2xl">
          <p className="text-muted-foreground text-sm leading-relaxed">
            These frameworks are living tools — refined through practice, not
            through theory. They are meant to be used, not admired. If something
            here challenges how you think about opportunity or hiring, that's
            the point.
          </p>
        </div>
      </div>
    </div>
  );
}

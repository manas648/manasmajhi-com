import type { Metadata } from "next";
import { Framework } from "@/types";

import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Frameworks",
  description:
    "Mental models for thinking about opportunity, hiring, and human potential. Built from years of practice.",
  alternates: { canonical: `${SITE_URL}/frameworks` },
  openGraph: {
    title: "Frameworks — Manas Majhi",
    description: "Mental models for thinking about opportunity, hiring, and human potential. Built from years of practice.",
    url: `${SITE_URL}/frameworks`,
    images: [{ url: `${SITE_URL}/api/og?title=Frameworks`, width: 1200, height: 630, alt: "Frameworks — Manas Majhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frameworks — Manas Majhi",
    description: "Mental models for thinking about opportunity, hiring, and human potential. Built from years of practice.",
    images: [`${SITE_URL}/api/og?title=Frameworks`],
  },
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
  {
    id: "mandate-recovery",
    title: "Mandate Recovery Framework™",
    tagline: "The five stages of recovering a stalled search.",
    description:
      "When a VP search stalls, the default response is to add more: more sourcing, more outreach, a new vendor. These are supply-side solutions to a demand-side problem. Mandate recovery requires a different sequence — one that starts with diagnosis, not action.",
    steps: [
      "Diagnose — Identify the actual failure point. Is this a sourcing problem, a positioning problem, a process problem, or a decision problem?",
      "Audit — Review every touchpoint in the mandate. What is the outreach quality? What is the intake accuracy? Where did velocity collapse?",
      "Reposition — Fix the upstream problem before re-engaging downstream. Bad positioning cannot be outrun by volume.",
      "Re-engage — Return to the market with corrected inputs. Reactivate dormant candidates. Expand the search radius deliberately.",
      "Rebuild — Reconstruct the pipeline with improved decision infrastructure. Track the signals that caused the original stall.",
    ],
    color: "from-rose-500/15 to-red-500/10 border-rose-500/25",
  },
  {
    id: "failure-prediction",
    title: "Failure Prediction System™",
    tagline: "The five signals that precede hiring system failure.",
    description:
      "Mandate failure is not sudden. It is telegraphed, weeks in advance, through a consistent set of signals. Most teams don't monitor them until after the damage is done. These five indicators, tracked in real time, predict which mandates are at risk — before the pipeline collapses.",
    steps: [
      "Response Decay — Reply rates dropping across channels. Not a sourcing problem. A positioning or timing problem.",
      "Funnel Stall — Candidates entering the pipeline but not advancing. A process or decision problem.",
      "Intake Drift — Requirements shifting without documentation. A stakeholder alignment problem.",
      "Recruiter Overload — Mandate count exceeding execution capacity. A resource allocation problem.",
      "Decision Lag — Evaluation cycles extending past 72 hours per stage. A hiring manager problem.",
    ],
    color: "from-sky-500/15 to-cyan-500/10 border-sky-500/25",
  },
  {
    id: "compounding-failure-loop",
    title: "Compounding Failure Loop™",
    tagline: "How hiring systems collapse — and where to intervene.",
    description:
      "When a mandate fails, the natural response is to add more inputs: more sourcing, more outreach, more urgency. This usually makes things worse. What looks like a sourcing problem is almost always a symptom of a failure that started several stages earlier.",
    steps: [
      "Bad Intake — Criteria are unclear, contradictory, or misaligned between hiring manager and search team.",
      "Poor Dossiers — Candidate briefs lack the intelligence needed to make a compelling case to the market.",
      "Weak Outreach — Without a clear value proposition, outreach reads generic and response rates collapse.",
      "Low Replies — Pipeline dries up. The team responds by adding volume, which compounds the positioning problem.",
      "Pipeline Collapse — Qualified candidates disengage. The mandate acquires a reputation in the market.",
      "Leadership Escalation — Pressure mounts. The team scrambles into manual recovery rather than systematic repair.",
    ],
    color: "from-zinc-500/15 to-slate-500/10 border-zinc-500/25",
  },
  {
    id: "hiring-slo",
    title: "Hiring SLO Framework™",
    tagline: "Service-level thinking for hiring operations.",
    description:
      "In engineering, a service level objective defines the acceptable threshold of system performance — and triggers an automated response when breached. Most hiring teams have no equivalent: no defined thresholds, no alerts, no recovery protocols. Applying SLO thinking to hiring is the shift that separates infrastructure-grade teams from everyone else.",
    steps: [
      "Define the Mandate SLO — What is acceptable time-to-shortlist? What is the minimum response rate? What is the maximum stage duration?",
      "Monitor in Real Time — Track mandate health against defined thresholds continuously, not retrospectively in a Friday review.",
      "Alert on Breach — When a mandate crosses a threshold, surface the alert before the pipeline collapses — not after.",
      "Execute Recovery Protocol — Launch a defined response sequence. Not a scramble. A playbook built from prior recovery data.",
      "Measure and Compound — Track which recovery actions succeed. Build institutional memory. Each mandate makes the system smarter.",
    ],
    color: "from-fuchsia-500/15 to-pink-500/10 border-fuchsia-500/25",
  },
];

const frameworksJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${SITE_URL}/frameworks#termset`,
  name: "Manas Majhi — Operational Frameworks",
  description:
    "Named operational frameworks developed through practice in executive search, hiring operations, and opportunity research.",
  url: `${SITE_URL}/frameworks`,
  creator: { "@type": "Person", "@id": `${SITE_URL}/#person` },
  hasDefinedTerm: [
    {
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/frameworks#opportunity`,
      name: "Opportunity Framework™",
      description:
        "Opportunity is not a single event. It is a chain. Each link enables the next — Talent, Access, Opportunity, Mobility, Prosperity. Understanding where this chain breaks is how you design systems that close the gap between talent and potential.",
      inDefinedTermSet: `${SITE_URL}/frameworks#termset`,
      url: `${SITE_URL}/frameworks`,
    },
    {
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/frameworks#intelligence-hiring`,
      name: "Intelligence Hiring System™",
      description:
        "Most hiring fails not because of bad candidates, but because of bad intelligence. The right hire requires three layers working in sequence: Market Intelligence, Talent Intelligence, and Decision Intelligence.",
      inDefinedTermSet: `${SITE_URL}/frameworks#termset`,
      url: `${SITE_URL}/frameworks`,
    },
    {
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/frameworks#hiring-health`,
      name: "Hiring System Health™",
      description:
        "A hiring mandate is a system with health metrics across three dimensions: Pipeline Health (is the funnel filling?), Process Health (are stages moving?), and Decision Health (are evaluations calibrated?).",
      inDefinedTermSet: `${SITE_URL}/frameworks#termset`,
      url: `${SITE_URL}/frameworks`,
    },
    {
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/frameworks#opportunity-mobility`,
      name: "Opportunity Mobility Framework™",
      description:
        "Opportunity alone is not enough. Individuals must convert opportunity into actual mobility through four stages: Opportunity (the door exists), Capability (the person can walk through), Participation (no structural barriers), and Mobility (the outcome materialises).",
      inDefinedTermSet: `${SITE_URL}/frameworks#termset`,
      url: `${SITE_URL}/frameworks`,
    },
    {
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/frameworks#mandate-recovery`,
      name: "Mandate Recovery Framework™",
      description:
        "When a VP search stalls, recovery requires a five-stage sequence — Diagnose, Audit, Reposition, Re-engage, Rebuild — not simply adding more sourcing volume to a broken mandate.",
      inDefinedTermSet: `${SITE_URL}/frameworks#termset`,
      url: `${SITE_URL}/frameworks`,
    },
    {
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/frameworks#failure-prediction`,
      name: "Failure Prediction System™",
      description:
        "Mandate failure is telegraphed weeks in advance through five signals: Response Decay, Funnel Stall, Intake Drift, Recruiter Overload, and Decision Lag — trackable in real time before pipeline collapse.",
      inDefinedTermSet: `${SITE_URL}/frameworks#termset`,
      url: `${SITE_URL}/frameworks`,
    },
    {
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/frameworks#compounding-failure-loop`,
      name: "Compounding Failure Loop™",
      description:
        "When a mandate fails, adding more inputs makes things worse. The loop runs: Bad Intake → Poor Dossiers → Weak Outreach → Low Replies → Pipeline Collapse → Leadership Escalation → Manual Recovery.",
      inDefinedTermSet: `${SITE_URL}/frameworks#termset`,
      url: `${SITE_URL}/frameworks`,
    },
    {
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/frameworks#hiring-slo`,
      name: "Hiring SLO Framework™",
      description:
        "Applying service-level objective thinking to hiring operations: define mandate SLOs, monitor in real time, alert on breach, execute recovery protocols, and measure outcomes to compound institutional memory.",
      inDefinedTermSet: `${SITE_URL}/frameworks#termset`,
      url: `${SITE_URL}/frameworks`,
    },
  ],
};

export default function FrameworksPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(frameworksJsonLd) }}
      />
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

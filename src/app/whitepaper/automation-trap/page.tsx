import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Automation Trap — Majhi OS Research Report",
  description:
    "Why AI is accelerating the wrong layer of recruiting. A research report on why AI-assisted outreach increases volume but not results — and what genuine hiring infrastructure requires.",
};

const stats = [
  {
    value: "74%",
    label: "Stall rate with AI-assisted outreach",
    sub: "same failure modes, higher volume",
  },
  {
    value: "3.1×",
    label: "More outreach volume",
    sub: "same reply rate on fragmented stacks",
  },
  {
    value: "$4.6K",
    label: "Monthly tool spend",
    sub: "median per recruiting team before a hire",
  },
  {
    value: "82%",
    label: "Shortlist approval on Majhi OS",
    sub: "vs. 31% industry average",
  },
];

const sections = [
  {
    number: "01",
    title: "The automation trap defined",
    description:
      "Most teams are automating the wrong layer. AI is accelerating outreach volume — not fixing the underlying execution failures that cause mandates to stall.",
  },
  {
    number: "02",
    title: "Why more outreach isn't the answer",
    description:
      "Teams using AI-assisted sourcing are sending 3× more messages and seeing identical reply rates. The problem was never volume. It was operational structure.",
  },
  {
    number: "03",
    title: "The four layers AI can't fix",
    description:
      "Mandate intake. Candidate evaluation quality. Hiring manager alignment. Execution observability. None of these are outreach problems. All of them are infrastructure problems.",
  },
  {
    number: "04",
    title: "What the data shows",
    description:
      "74% of mandates still stall past week 10 on AI-assisted stacks. The stall rate hasn't moved because AI was applied to the symptom, not the system.",
  },
  {
    number: "05",
    title: "Infrastructure vs. automation",
    description:
      "The gap between stacking AI tools and building operational infrastructure is architectural. One increases noise. The other changes what's possible.",
  },
  {
    number: "06",
    title: "What recovery actually requires",
    description:
      "Observability across every active mandate. Evidence-gated evaluation. Autonomous escalation. Attribution at the executive level. A system — not a stack.",
  },
];

export default function AutomationTrapPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Infrastructure Research · Majhi OS · 2025</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6 leading-tight">
            The Automation<br />Trap
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Why AI is accelerating the wrong layer of recruiting. A research report on
            why AI-assisted outreach increases volume but not results — and what genuine
            hiring infrastructure actually requires.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            For senior talent leaders, recruiting operations teams, and hiring executives.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-border bg-muted/30 p-5"
            >
              <p className="font-serif text-3xl font-medium text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-foreground leading-snug mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground leading-snug">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote className="border-l-2 border-foreground pl-6 mb-16">
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground">
            "AI didn't fix the hiring problem. It amplified it. Teams are now sending
            more messages into broken pipelines, faster than ever, and wondering why
            the mandates still stall."
          </p>
          <footer className="mt-4 text-sm text-muted-foreground">
            — Manas Majhi, Founder, Majhi OS
          </footer>
        </blockquote>

        {/* What's inside */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-medium mb-8">What's inside</h2>
          <div className="space-y-px">
            {sections.map((section) => (
              <div
                key={section.number}
                className="flex gap-6 py-6 border-b border-border/60 last:border-0"
              >
                <span className="text-xs font-mono text-muted-foreground mt-1 w-6 shrink-0">
                  {section.number}
                </span>
                <div>
                  <p className="font-medium text-foreground mb-1">{section.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="rounded-2xl border border-border bg-muted/20 p-8 mb-12">
          <h2 className="font-serif text-2xl font-medium mb-3">
            Download the full report
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg">
            10 pages. All data sourced from Majhi OS internal mandate observations
            (2024–25). Includes benchmark comparisons between AI-assisted stacks and
            infrastructure-grade hiring operations.
          </p>
          <a
            href="/majhi-os-automation-trap.pdf"
            download="Majhi-OS-The-Automation-Trap.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Download PDF — Free
          </a>
        </div>

        {/* Mission Walkthrough CTA */}
        <div className="rounded-2xl border border-border p-8">
          <p className="section-label mb-3">Majhi OS</p>
          <h2 className="font-serif text-2xl font-medium mb-3">
            See it against your actual mandate
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg">
            A Mission Walkthrough is 45 minutes with Manas — using your live mandate as
            working context, not a generic demo. You leave with a clear picture of where
            your current search is losing candidates and what recovery looks like.
          </p>
          <a
            href="https://majhi.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            Book a Mission Walkthrough at majhi.tech →
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-xs text-muted-foreground">
          All benchmark data is derived from Majhi OS internal mandate observations
          (2024–25) and publicly available research on executive recruiting timelines.
          VP-level is defined as VP, SVP, EVP, and C-suite. Results vary by role,
          market, and configuration.
        </p>

      </div>
    </div>
  );
}

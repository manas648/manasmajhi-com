import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The Operational Visibility Gap — Majhi OS Research Report",
  description:
    "Why recruiting breaks at scale. A research report documenting the structural failure modes of fragmented hiring execution — and what genuine operational infrastructure requires.",
  alternates: {
    canonical: `${SITE_URL}/whitepaper`,
  },
  openGraph: {
    title: "The Operational Visibility Gap",
    description:
      "Why recruiting breaks at scale. A research report documenting the structural failure modes of fragmented hiring execution — and what genuine operational infrastructure requires.",
    url: `${SITE_URL}/whitepaper`,
    images: [{ url: `${SITE_URL}/api/og?title=The+Operational+Visibility+Gap`, width: 1200, height: 630, alt: "The Operational Visibility Gap — Majhi OS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Operational Visibility Gap",
    description:
      "Why recruiting breaks at scale. A research report documenting the structural failure modes of fragmented hiring execution — and what genuine operational infrastructure requires.",
    images: [`${SITE_URL}/api/og?title=The+Operational+Visibility+Gap`],
  },
};

const stats = [
  {
    value: "68%",
    label: "VP searches stall past week 10",
    sub: "due to execution failure, not talent scarcity",
  },
  {
    value: "14 wk",
    label: "Industry median time-to-fill",
    sub: "VP-level roles on fragmented tooling",
  },
  {
    value: "$3.8K",
    label: "Monthly tool spend per recruiter",
    sub: "before a single hire is made",
  },
  {
    value: "50 d",
    label: "Average close time on Majhi OS",
    sub: "vs. 14-week fragmented average",
  },
];

const sections = [
  {
    number: "01",
    title: "The problem isn't talent scarcity",
    description:
      "The primary cause of VP search failure is operational invisibility. The tools don't share state, produce no unified signal, and offer no systemic view of what's happening inside a search.",
  },
  {
    number: "02",
    title: "The real cost of fragmented hiring",
    description:
      "The cost is not software spend. It's execution delay — the gap between when a mandate should close and when it actually does. Every week of delay compounds.",
  },
  {
    number: "03",
    title: "Four structural failure modes",
    description:
      "Intake without normalization. Outreach without verification. Evaluation without evidence. Execution without observability. Each amplifies the next.",
  },
  {
    number: "04",
    title: "Fragmented vs. infrastructure operation",
    description:
      "The gap between these two operating models is architectural — not a matter of tooling budget or headcount.",
  },
  {
    number: "05",
    title: "Where candidates are lost in the funnel",
    description:
      "From 400 sourced to 8 hires on a fragmented stack. From 400 sourced to 52 hires on Majhi OS. The advantage compounds at every stage.",
  },
  {
    number: "06",
    title: "Six principles for infrastructure-grade hiring",
    description:
      "Evidence before opinion. Observability is foundational. Gate before you execute. One system. No handoffs. Automation reduces load. Surface failures first.",
  },
];

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Infrastructure Research · Majhi OS · 2026</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6 leading-tight">
            The Operational<br />Visibility Gap
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Why recruiting breaks at scale. A research report documenting the structural
            failure modes of fragmented hiring execution — and what genuine operational
            infrastructure requires.
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
            "The difference between a search that closes in 50 days and one that closes
            in 120 is rarely the talent market. It's almost always the execution layer —
            and whether anyone can see inside it."
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
            10 pages. All benchmark data sourced from Majhi OS internal mandate
            observations (2024–25) and publicly available research on executive
            recruiting timelines.
          </p>
          <a
            href="/majhi-os-whitepaper.pdf"
            download="Majhi-OS-Operational-Visibility-Gap.pdf"
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
          (2024–26) and publicly available research on executive recruiting timelines.
          VP-level is defined as VP, SVP, EVP, and C-suite. Funnel data is illustrative,
          based on median search patterns. Results vary by role, market, and
          configuration.
        </p>

      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Majhi Group — retained executive search. Majhi OS — autonomous hiring operations infrastructure.",
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: {
    title: "Work — Manas Majhi",
    description: "Majhi Group — retained executive search. Majhi OS — autonomous hiring operations infrastructure.",
    url: `${SITE_URL}/work`,
    images: [{ url: `${SITE_URL}/api/og?title=Work`, width: 1200, height: 630, alt: "Work — Manas Majhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Manas Majhi",
    description: "Majhi Group — retained executive search. Majhi OS — autonomous hiring operations infrastructure.",
    images: [`${SITE_URL}/api/og?title=Work`],
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="section-label mb-4">Companies</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Work
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Two companies. One thesis: the hiring system is broken, and broken
            hiring systems block opportunity.
          </p>
        </div>

        {/* Majhi Group */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="section-label mb-3">Company 01</p>
            <h2 className="font-serif text-4xl font-medium mb-4">
              Majhi Group
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Executive Search & Talent Intelligence
            </p>
            <p className="leading-relaxed mb-6 text-muted-foreground">
              Retained executive search for organizations placing VP and
              C-suite leaders. Not a staffing agency. Not a contingency
              recruiter. A search firm that deploys a system — and stands
              behind the result.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We operate on one model: retained, exclusive, with skin in the
              game. 20–25% of total CTC. 90-day guarantee. Weekly status
              reports. We use your actual mandate as working context — not a
              generic process.
            </p>
          </div>

          {/* Proof points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { stat: "25+", label: "C-suite & VP placements" },
              { stat: "30–45", label: "Days avg (vs 65–90 industry)" },
              { stat: "90%+", label: "Offer acceptance rate" },
              { stat: "90-day", label: "Replacement guarantee" },
            ].map((item) => (
              <div
                key={item.stat}
                className="rounded-2xl border border-border bg-card p-4 text-center"
              >
                <div className="font-serif text-2xl font-medium mb-1">
                  {item.stat}
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl border-dashed-accent bg-accent/5 mb-8">
            <p className="font-serif text-lg italic mb-2">
              "41 days. $275K search. Two firms failed in 60+ days. That's not
              luck. That's a different system."
            </p>
            <a
              href="https://www.linkedin.com/posts/background-a-prominent-global-financial-share-7224380852200255488-UF3k/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              Case study: Alternatives Investment Director placement
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://www.majhigroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              majhigroup.com <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <hr className="border-border mb-20" />

        {/* Majhi OS */}
        <div className="mb-20">
          <div className="mb-8">
            <p className="section-label mb-3">Company 02</p>
            <h2 className="font-serif text-4xl font-medium mb-4">Majhi OS</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Infrastructure for High-Stakes Hiring
            </p>
            <p className="leading-relaxed mb-6 text-muted-foreground">
              Autonomous hiring operations infrastructure. The operational
              intelligence and execution layer that prevents hiring systems from
              failing — and recovers them when they do.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Most recruiting software helps teams send outreach, track
              candidates, schedule interviews. Majhi OS owns something bigger:
              preventing hiring system failure. Think Datadog for hiring systems.
            </p>
          </div>

          {/* Architecture */}
          <div className="space-y-3 mb-8">
            {[
              {
                layer: "Layer 1",
                title: "Observability",
                desc: "Real-time mandate health monitoring. Datadog for hiring systems.",
              },
              {
                layer: "Layer 2",
                title: "Intelligence",
                desc: "Operational reasoning. Palantir for hiring ops.",
              },
              {
                layer: "Layer 3",
                title: "Autonomous Execution",
                desc: "System launches recovery sequences without manual orchestration.",
              },
              {
                layer: "Layer 4",
                title: "Attribution & ROI",
                desc: "CFO and CEO-level reporting on hiring efficiency.",
              },
            ].map((item) => (
              <div
                key={item.layer}
                className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card"
              >
                <div className="text-xs font-mono text-accent shrink-0 pt-0.5">
                  {item.layer}
                </div>
                <div>
                  <p className="font-medium mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://majhi.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              majhi.tech <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* The thesis */}
        <div className="p-8 rounded-3xl bg-muted/50 border border-border">
          <p className="section-label mb-4">The Thesis</p>
          <p className="font-serif text-xl leading-relaxed mb-4">
            The hiring system is broken in a specific, measurable way. And
            broken hiring systems block opportunity — for organizations, for
            individuals, and for the economy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Majhi Group solves it at the individual mandate level. Majhi OS
            solves it at the infrastructure level. Together, they represent a
            thesis about what it takes to get hiring right at scale.
          </p>
        </div>
      </div>
    </div>
  );
}

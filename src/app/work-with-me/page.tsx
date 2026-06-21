import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Me — Manas Majhi",
  description:
    "Two ways to work with Manas Majhi: Majhi OS for hiring teams that need operational infrastructure, and Majhi Group for CEOs running a critical VP or C-suite search.",
};

export default function WorkWithMePage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <p className="section-label mb-4">Work With Me</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Two businesses.<br />One focus.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I build and operate infrastructure for the part of the organization most
            companies treat as a workflow: hiring.
          </p>
        </div>

        {/* Two offerings */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">

          {/* Majhi OS */}
          <div className="rounded-2xl border border-border p-8 flex flex-col">
            <div className="mb-8">
              <p className="section-label mb-3">Majhi OS</p>
              <h2 className="font-serif text-3xl font-medium mb-4">
                Autonomous hiring operations infrastructure
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For hiring teams running VP and C-suite searches who can't see inside
                their mandates in real time. Majhi OS detects stalling searches before
                they collapse, runs recovery sequences automatically, and gives
                leadership a live operational picture instead of a weekly status call.
              </p>
            </div>

            {/* Who it's for */}
            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
                For
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                VP People, CHRO, and TA Leads at Series B/C SaaS and tech companies
                with 1–4 person recruiting teams running concurrent leadership hires.
              </p>
            </div>

            {/* Proof points */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { v: "50 days", l: "avg VP close time" },
                { v: "14% → 35%", l: "outreach reply rate" },
                { v: "38% → 82%", l: "shortlist approval" },
                { v: "100%", l: "audit trail coverage" },
              ].map((p) => (
                <div key={p.v} className="rounded-xl bg-muted/40 px-4 py-3">
                  <p className="font-medium text-foreground text-sm">{p.v}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.l}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <a
                href="https://majhi.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity w-full justify-center"
              >
                Book a Mission Walkthrough →
              </a>
              <p className="text-xs text-muted-foreground text-center mt-3">
                45 min · your actual mandate as context · not a demo
              </p>
            </div>
          </div>

          {/* Majhi Group */}
          <div className="rounded-2xl border border-border p-8 flex flex-col">
            <div className="mb-8">
              <p className="section-label mb-3">Majhi Group</p>
              <h2 className="font-serif text-3xl font-medium mb-4">
                Retained executive search
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For CEOs running a critical VP or C-suite hire that can't afford to
                fail. Not contingency. Not a job board. A retained search firm that
                deploys a system — with evidence dossiers, quality-gated outreach,
                and a 90-day replacement guarantee.
              </p>
            </div>

            {/* Who it's for */}
            <div className="mb-8">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
                For
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                CEOs and Founders at funded companies (Series A–C) with a revenue-critical
                VP or C-suite seat that's been open 60+ days, or where previous search
                attempts haven't delivered.
              </p>
            </div>

            {/* Proof points */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { v: "41 days", l: "$275K search, two firms failed" },
                { v: "30–45 days", l: "avg close vs. 65–90 industry" },
                { v: "90%+", l: "offer acceptance rate" },
                { v: "90 days", l: "replacement guarantee" },
              ].map((p) => (
                <div key={p.v} className="rounded-xl bg-muted/40 px-4 py-3">
                  <p className="font-medium text-foreground text-sm">{p.v}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.l}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <a
                href="mailto:manas@majhigroup.com?subject=Search%20Assessment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity w-full justify-center"
              >
                Request a Search Assessment →
              </a>
              <p className="text-xs text-muted-foreground text-center mt-3">
                20 min · confidential · for CEOs only
              </p>
            </div>
          </div>

        </div>

        {/* Divider + framing */}
        <div className="border-t border-border pt-16 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl font-medium mb-4">
              Why both exist
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Majhi Group has completed 25+ C-suite and VP placements over five years.
              That depth of operational experience surfaced a consistent pattern: searches
              fail at the execution layer, not the talent layer. The same failure modes
              appeared across mandates — visibility gaps, unverified outreach, impression-based
              shortlisting, no audit trail. Majhi OS was built to eliminate those failure
              modes at the infrastructure level.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Majhi OS is now deployed as a standalone product for hiring teams who need
              that operational infrastructure — not only for Majhi Group searches, but for
              any organization running concurrent leadership hires at scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Both operate under the same principle: controlled execution is the only
              kind that scales without breaking.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="border-t border-border pt-16 mb-16">
          <h2 className="font-serif text-2xl font-medium mb-8">Ready to talk?</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            <div className="rounded-2xl border border-border p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Executive Search</p>
              <p className="text-sm text-foreground mb-3">Majhi Group — retained search enquiries</p>
              <a
                href="mailto:manas@majhigroup.com"
                className="text-sm font-medium text-accent hover:underline"
              >
                manas@majhigroup.com
              </a>
            </div>
            <div className="rounded-2xl border border-border p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Hiring Infrastructure</p>
              <p className="text-sm text-foreground mb-3">Majhi OS — product and partnership enquiries</p>
              <a
                href="mailto:manas@majhi.tech"
                className="text-sm font-medium text-accent hover:underline"
              >
                manas@majhi.tech
              </a>
            </div>
          </div>
        </div>

        {/* Reading links */}
        <div className="border-t border-border pt-12">
          <p className="text-sm text-muted-foreground mb-6">
            If you want to understand the thinking behind this:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/whitepaper"
              className="px-4 py-2 rounded-xl border border-border text-sm hover:bg-muted/50 transition-colors"
            >
              The Operational Visibility Gap — research report →
            </Link>
            <Link
              href="/writing/why-hiring-is-becoming-infrastructure"
              className="px-4 py-2 rounded-xl border border-border text-sm hover:bg-muted/50 transition-colors"
            >
              Why hiring is becoming infrastructure →
            </Link>
            <Link
              href="/writing/the-future-of-executive-search"
              className="px-4 py-2 rounded-xl border border-border text-sm hover:bg-muted/50 transition-colors"
            >
              The future of executive search →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Two ways to work with Manas Majhi: Majhi OS for hiring teams that need operational infrastructure, and Majhi Group for CEOs running a critical VP or C-suite search.",
  alternates: {
    canonical: `${SITE_URL}/work-with-me`,
  },
  openGraph: {
    title: "Work With Manas Majhi",
    description:
      "Two ways to work with Manas Majhi: Majhi OS for hiring teams that need operational infrastructure, and Majhi Group for CEOs running a critical VP or C-suite search.",
    url: `${SITE_URL}/work-with-me`,
    images: [{ url: `${SITE_URL}/api/og?title=Work+With+Me`, width: 1200, height: 630, alt: "Work With Manas Majhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work With Manas Majhi",
    description:
      "Two ways to work with Manas Majhi: Majhi OS for hiring teams that need operational infrastructure, and Majhi Group for CEOs running a critical VP or C-suite search.",
    images: [`${SITE_URL}/api/og?title=Work+With+Me`],
  },
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
              <div className="mb-3">
                <p className="section-label mb-2">Majhi OS</p>
                <div className="flex items-center gap-2">
                  <a href="https://www.linkedin.com/company/majhi-os/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Majhi OS on LinkedIn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://www.crunchbase.com/organization/majhi-os" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Majhi OS on Crunchbase">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4c1.38 0 2.693.298 3.875.83L14.03 6.674A6.002 6.002 0 0 0 12 6C8.686 6 6 8.686 6 12s2.686 6 6 6a6.002 6.002 0 0 0 5.671-4.03l1.846 1.846A8 8 0 1 1 12 4zm4 7h-3V8l-3 4h3v3l3-4z"/></svg>
                  </a>
                </div>
              </div>
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
              <div className="mb-3">
                <p className="section-label mb-2">Majhi Group</p>
                <div className="flex items-center gap-2">
                  <a href="https://www.linkedin.com/company/majhigroup/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Majhi Group on LinkedIn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://www.crunchbase.com/organization/majhi-group" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Majhi Group on Crunchbase">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4c1.38 0 2.693.298 3.875.83L14.03 6.674A6.002 6.002 0 0 0 12 6C8.686 6 6 8.686 6 12s2.686 6 6 6a6.002 6.002 0 0 0 5.671-4.03l1.846 1.846A8 8 0 1 1 12 4zm4 7h-3V8l-3 4h3v3l3-4z"/></svg>
                  </a>
                </div>
              </div>
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
                href="https://majhigroup.com"
                target="_blank"
                rel="noopener noreferrer"
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

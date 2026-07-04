import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "What I Think About",
  description:
    "The intellectual map behind the writing — Manas Majhi's positions on opportunity, talent, AI, Odisha, Kalahandi, entrepreneurship, and the future.",
  alternates: { canonical: `${SITE_URL}/the-map` },
  openGraph: {
    title: "What I Think About — Manas Majhi",
    description: "The intellectual map behind the writing — Manas Majhi's positions on opportunity, talent, AI, Odisha, Kalahandi, entrepreneurship, and the future.",
    url: `${SITE_URL}/the-map`,
    images: [{ url: `${SITE_URL}/api/og?title=What+I+Think+About`, width: 1200, height: 630, alt: "What I Think About — Manas Majhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What I Think About — Manas Majhi",
    description: "The intellectual map behind the writing — Manas Majhi's positions on opportunity, talent, AI, Odisha, Kalahandi, entrepreneurship, and the future.",
    images: [`${SITE_URL}/api/og?title=What+I+Think+About`],
  },
};

export default function ThinkingPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 pt-16 pb-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Home
        </Link>

        <div className="mb-12">
          <p className="section-label mb-3">Intellectual Map</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">
            What I Think About
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Not a biography. Not a list of accomplishments. The actual positions
            behind the writing — what I believe, why I believe it, and what
            shaped the view from where I stand.
          </p>
        </div>

        <div className="space-y-14">

          {/* Opportunity */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">
              Opportunity
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Talent is not the scarce resource. Opportunity is. Most of what
                determines whether a person&apos;s potential gets realized is
                structural — where they were born, what systems surrounded them,
                what doors were open when they were ready to walk through.
              </p>
              <p>
                I write about this because I have lived both sides: the side
                without the infrastructure, and the side with enough access to
                see what the difference actually produces. The gap is not small,
                and it is not inevitable.
              </p>
            </div>
          </section>

          {/* Talent */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">
              Talent
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Five years of running executive searches taught me that
                talent is radically more evenly distributed than hiring systems
                account for. The filters we use — credential, network,
                geography, school — are proxies that correlate weakly with
                actual performance.
              </p>
              <p>
                The best executives I have placed were not the most credentialed
                ones. They were the ones whose specific context matched the
                specific problem the company needed solved. Most hiring fails at
                the matching problem, not the talent scarcity problem.
              </p>
            </div>
          </section>

          {/* AI */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">
              AI
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                AI is not replacing judgment in executive search — it is
                replacing the work that was never really judgment in the first
                place. Sourcing at scale, initial screening, outreach
                automation. The work that determines whether a hire succeeds —
                reading context, understanding what a company needs at a
                specific moment in its history, knowing which candidates will
                work in which cultures — that remains a human problem.
              </p>
              <p>
                What AI is doing is making the non-judgment work free, which
                changes the economics of search firms but not the fundamental
                value they produce. I am building Majhi OS on that premise.
              </p>
            </div>
          </section>

          {/* India */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">
              India
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                India is in the middle of something that doesn&apos;t have a clean
                name yet. The infrastructure build, the digital stack, the
                demographic curve, the global repositioning — these are
                happening simultaneously, and the compounding effect is larger
                than any single trend suggests. Most coverage either overstates
                it or understates it because the story is too uneven to fit a
                single frame.
              </p>
              <p>
                What I watch most closely is the talent layer — whether the
                people being produced by India&apos;s education system are finding
                work that matches their capability, and whether the systems
                connecting talent to opportunity are keeping pace with the scale
                of what is being built. That gap, more than any policy question,
                will determine what the next decade actually produces.
              </p>
            </div>
          </section>

          {/* Odisha */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">
              Odisha
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Odisha has more going for it than most national narratives
                acknowledge. The mineral base, the coastline, the port
                infrastructure, the improving governance — these are real. What
                holds it back is not resources but the translation gap: the
                distance between what the state possesses and what its human
                capital base can convert into economic activity.
              </p>
              <p>
                That gap is narrowing faster than the coverage suggests. I watch
                it closely because I know what the baseline was.
              </p>
            </div>
          </section>

          {/* Kalahandi */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">
              Kalahandi
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Kalahandi is one of the most misunderstood districts in India.
                The outside narrative is poverty and deprivation. The inside
                reality is more complicated: a place with genuine capability, a
                hard-earned resilience, and a talent pool that has been
                systematically exported rather than cultivated locally.
              </p>
              <p>
                I grew up there. I watched people who were brilliant leave
                because there was nowhere to go. That observation has shaped
                everything I believe about opportunity, development, and what it
                means to build something from a place the world has not noticed
                yet.
              </p>
            </div>
          </section>

          {/* Entrepreneurship */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">
              Entrepreneurship
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Building from outside the centre — without the networks, without
                the proximity to capital, without the infrastructure that makes
                building easy — teaches you things that building inside the
                system cannot. You have to figure out what is actually essential
                versus what is merely accessible.
              </p>
              <p>
                What I have built from Odisha is not worse for being built
                there. In some ways it is better calibrated, because I could not
                rely on the shortcuts that metropolitan founders use as default.
                The constraint was an instruction.
              </p>
            </div>
          </section>

          {/* The Future */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">
              The Future
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The question I am most interested in is what happens when the
                access problem gets solved — when talent from Tier-2 and Tier-3
                cities can reach global markets without relocating, when AI
                removes some of the credential and connection gates, when the
                infrastructure historically concentrated in a few cities becomes
                less concentrated.
              </p>
              <p>
                I think the answer is a significant redistribution of who gets
                to build things. I think Odisha is one of the places where that
                shows up clearly, if you know how to read the signals. That is
                what I am watching and writing toward.
              </p>
            </div>
          </section>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Want to push back on any of this or continue the conversation?{" "}
              <a
                href="mailto:manas@majhigroup.com"
                className="text-accent underline underline-offset-2"
              >
                manas@majhigroup.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

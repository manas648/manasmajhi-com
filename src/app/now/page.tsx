import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Now",
  description: "What Manas Majhi is working on, reading, and thinking about right now.",
  alternates: { canonical: `${SITE_URL}/now` },
  openGraph: {
    title: "Now — Manas Majhi",
    description: "What Manas Majhi is working on, reading, and thinking about right now.",
    url: `${SITE_URL}/now`,
    images: [{ url: `${SITE_URL}/api/og?title=Now`, width: 1200, height: 630, alt: "Now — Manas Majhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Now — Manas Majhi",
    description: "What Manas Majhi is working on, reading, and thinking about right now.",
    images: [`${SITE_URL}/api/og?title=Now`],
  },
};

export default function NowPage() {
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
          <p className="section-label mb-3">Now</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">
            What I&apos;m focused on
          </h1>
          <p className="text-sm text-muted-foreground">
            Updated July 2026 · from Odisha, India
          </p>
        </div>

        <div className="space-y-12">

          {/* Building */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">Building</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most of my time is going into{" "}
                <strong className="text-foreground">Majhi OS</strong> — autonomous
                hiring operations infrastructure for recruiting teams. The problem:
                68% of VP searches stall past week 10, not because of sourcing, but
                because no one can see inside the system in real time. Majhi OS is
                the observability and recovery layer. Think Datadog for hiring systems.
              </p>
              <p>
                We&apos;re at the early customer stage. Targeting 12 clients by
                December 2026. Each one goes through a{" "}
                <a
                  href="https://majhi.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  45-minute Mission Walkthrough
                </a>{" "}
                using their actual mandate as working context — not a demo.
              </p>
              <p>
                In parallel, I still run{" "}
                <strong className="text-foreground">Majhi Group</strong> — retained
                VP and C-suite executive search. 30–45 day median. This is the
                business that generates the real mandate data that informs what I&apos;m
                building in Majhi OS.
              </p>
            </div>
          </section>

          {/* Writing */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">Writing</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Publishing on LinkedIn 3×/week — mostly about what I&apos;m actually
                seeing inside hiring systems: recruiter load, mandate failure patterns,
                operational blind spots that no one talks about. Not advice columns.
                Observations from the inside of searches.
              </p>
              <p>
                On this site I&apos;m continuing the Odisha and Kalahandi writing. There is
                a lot that has not been written about this part of India — the development
                trajectory, the talent story, what the landscape actually looks like —
                and I want to write it before the moment passes.
              </p>
            </div>
          </section>

          {/* Thinking about */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">Thinking about</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                How AI changes the executive search business. Not in the sourcing layer —
                everyone is working on that. In the evaluation layer. The gap between
                a candidate who looks right and a candidate who will actually perform is
                not a data problem. It is a judgment problem. I&apos;m skeptical that AI closes it,
                and interested in what that means for firms that are betting it does.
              </p>
              <p>
                Also: the economics of building from a second-tier city in India.
                Odisha is not Bangalore. The cost structure is different, the talent
                availability is different, the network density is different. Whether
                those differences are advantages or constraints depends heavily on
                what you are building. I am running the experiment in real time.
              </p>
            </div>
          </section>

          {/* Reading */}
          <section>
            <h2 className="font-serif text-xl font-medium mb-4 text-foreground">Reading</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mostly primary sources — annual reports, government data releases,
                research on Indian state-level development. I find most writing about
                India&apos;s development story is either too optimistic or too pessimistic
                and I prefer to read the underlying data directly.
              </p>
            </div>
          </section>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              This is a{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                /now page
              </a>
              . Want to reply to any of this?{" "}
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

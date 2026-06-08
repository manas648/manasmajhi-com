import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Manas Majhi — from Kalahandi, Odisha to executive search and autonomous hiring infrastructure. The story behind the writing.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">About</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Talent is abundant.
            <br />
            <span className="text-muted-foreground">Opportunity is not.</span>
          </h1>
        </div>

        {/* Story */}
        <div className="prose-essay space-y-8 font-sans text-base leading-relaxed">
          <p className="text-xl text-muted-foreground leading-relaxed">
            I grew up in Kalahandi — one of Odisha's most underserved districts.
            Not as a hardship story. As a lens.
          </p>

          <p>
            Kalahandi taught me something that no MBA program teaches: the
            distance between talent and opportunity is not small. It is vast.
            And it is not evenly distributed. Some people are born near the
            door. Others are born miles away from it, without a map.
          </p>

          <p>
            I attended a government Odia-medium school. No internet. No
            connections. No mentors who had done what I wanted to do. What I had
            was curiosity, stubbornness, and an unreasonable belief that the gap
            between where I was and where I wanted to be could be crossed.
          </p>

          <p>
            It could. But only because I found access — to information, to
            people, to systems that rewarded effort. That experience is the
            foundation of everything I write and build.
          </p>

          <hr className="border-border my-10" />

          <h2 className="font-serif text-3xl font-medium">What I do.</h2>

          <p>
            I run two companies. <strong>Majhi Group</strong> is a retained
            executive search firm — we place VP and C-suite leaders for
            high-stakes organizations that can't afford to get the hire wrong.
            We've completed 25+ C-suite and VP placements, averaging 30–45 days
            when the industry median is 65–90.
          </p>

          <p>
            <strong>Majhi OS</strong> is the infrastructure I'm building for
            the future of hiring operations — autonomous systems that detect,
            predict, and recover failing executive searches before they collapse.
            Think Datadog for hiring systems.
          </p>

          <p>
            Both companies exist because I believe the hiring system is broken
            in a specific, measurable way. And broken hiring systems block
            opportunity. For everyone.
          </p>

          <hr className="border-border my-10" />

          <h2 className="font-serif text-3xl font-medium">Why I write.</h2>

          <p>
            Writing is how I think. The essays on this site are not content
            marketing. They are the actual work of trying to understand things
            that matter: opportunity, systems, India, technology, the future of
            work, and the examined life.
          </p>

          <p>
            I write because ideas have leverage. A framework, once named,
            becomes transferable. A pattern, once articulated, becomes
            actionable. I write for the person I was at 22 — curious,
            ambitious, and looking for maps.
          </p>

          <p>
            The goal is a growing library of long-form thinking that gets more
            useful over time. Not a blog. Not content. A body of work.
          </p>

          <hr className="border-border my-10" />

          <h2 className="font-serif text-3xl font-medium">
            What I believe.
          </h2>

          <blockquote>
            The purpose of technology, institutions, leadership, and systems is
            to reduce the gap between talent and opportunity.
          </blockquote>

          <p>
            Every essay on this site orbits that belief. Opportunity is the
            lens I use to understand India, AI, entrepreneurship, hiring, and
            human potential.
          </p>

          <p>
            Talent is evenly distributed. Opportunity is not. That asymmetry is
            the most important problem of our time — and the most solvable one.
          </p>
        </div>

        {/* Links */}
        <div className="mt-16 flex flex-wrap gap-6">
          <Link
            href="/start-here"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
          >
            Start reading <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            View timeline
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            See my work
          </Link>
          <Link
            href="/recognition"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            Awards &amp; Recognition
          </Link>
        </div>
      </div>
    </div>
  );
}

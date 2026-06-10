import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Manas Majhi",
  description:
    "Manas Majhi (Manas Ranjan Majhi) — founder of Majhi Group and Majhi OS. From Kalahandi, Odisha to executive search and autonomous hiring infrastructure.",
  keywords: [
    "Manas Majhi",
    "Manas Ranjan Majhi",
    "Maanas Ranjan Majhi",
    "Majhi Group founder",
    "Majhi OS founder",
    "executive search India",
    "hiring infrastructure",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about`,
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Manas Majhi",
    alternateName: ["Manas Ranjan Majhi", "Maanas Ranjan Majhi"],
    url: SITE_URL,
    image: `${SITE_URL}/headshot.jpg`,
    jobTitle: "Founder",
    birthPlace: "Kalahandi, Odisha, India",
    description:
      "Manas Majhi (also known as Manas Ranjan Majhi) is the founder of Majhi Group, a retained executive search firm, and Majhi OS, autonomous hiring operations infrastructure. He writes on opportunity, India, technology, and systems that shape human potential.",
    worksFor: [
      { "@type": "Organization", name: "Majhi Group", url: "https://majhigroup.com" },
      { "@type": "Organization", name: "Majhi OS", url: "https://majhi.tech" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/manasmajhi",
      "https://twitter.com/manasmajhi",
      "https://majhigroup.com",
      "https://majhi.tech",
      "https://www.wikidata.org/wiki/Q140134809",
      "https://www.crunchbase.com/person/manas-majhi",
    ],
    knowsAbout: [
      "Executive Search",
      "Hiring Operations Infrastructure",
      "Opportunity and Human Potential",
      "India and Odisha",
      "Entrepreneurship",
      "Technology",
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <p className="section-label mb-4">About</p>
            <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-4">
              Talent is abundant.
              <br />
              <span className="text-muted-foreground">Opportunity is not.</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-4">
              <span className="font-medium text-foreground">Manas Ranjan Majhi</span>
              {" "}· Founder, Majhi Group & Majhi OS · Kalahandi, Odisha
            </p>
          </div>

          {/* Social proof */}
          <div className="mb-20 flex flex-wrap gap-10 sm:gap-16">
            {[
              {
                stat: "64K+",
                label: "Majhi Group",
                sub: "LinkedIn followers",
                href: "https://www.linkedin.com/company/majhi-group/",
              },
              {
                stat: "19K+",
                label: "Startup Talentscape",
                sub: "Newsletter subscribers",
                href: "https://www.linkedin.com/newsletters/startup-talentscape-7091974829532180481/",
              },
              {
                stat: "6K+",
                label: "Manas Majhi",
                sub: "LinkedIn followers",
                href: "https://www.linkedin.com/in/manasmajhi",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <p className="font-serif text-4xl font-medium group-hover:text-muted-foreground transition-colors">
                  {item.stat}
                </p>
                <p className="text-sm font-medium mt-1">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </a>
            ))}
          </div>

        {/* Story */}
        <div className="prose-essay space-y-8 font-sans text-base leading-relaxed">
          <p className="text-xl text-muted-foreground leading-relaxed">
            I grew up in Kalahandi, in the southwestern corner of Odisha —
            where the Eastern Ghats meet dense forest and the rivers run through
            valleys most of India will never see.
          </p>

          <p>
            The place shaped something specific in me: a particular stubbornness,
            a tendency to treat problems as problems worth solving, a patience
            with the gap between where things are and where they could be.
            Kalahandi produces that in people. I did not know it at the time.
            I know it now.
          </p>

          <p>
            I attended a government Odia-medium school. Lessons in Odia from
            beginning to end — the language I dreamed in, teachers who showed up
            and treated curiosity as its own reward. What I built there was a
            habit of figuring things out without the infrastructure that makes
            figuring things out easy. That habit is the foundation of everything
            I've done since.
          </p>

          <p>
            That experience is the origin of the question I've spent my career on:
            what does it take to move from where you are to where you're capable
            of going? The distance between talent and opportunity is not small.
            It is vast. And it is not evenly distributed. Understanding that
            distance — and what closes it — is what I write and build around.
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
    </>
  );
}

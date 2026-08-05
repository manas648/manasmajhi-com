import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Manas Majhi — Founder, Majhi Group & Majhi OS" },
  description:
    "Founder of Majhi Group (retained executive search) and Majhi OS (autonomous hiring infrastructure). From Kalahandi, Odisha. 25+ C-suite placements. Recognized as World Staffing Leader.",
  keywords: [
    "Manas Majhi",
    "Manas Ranjan Majhi",
    "Maanas Ranjan Majhi",
    "Manas Majhi Kalahandi",
    "Manas Majhi Odisha",
    "Manas Majhi India",
    "Manas Majhi Majhi Group",
    "Manas Majhi Majhi OS",
    "Manas Majhi Indian Achievers Award",
    "Manas Majhi World Staffing Leader",
    "Manas Majhi HackerNoon Startup of the Year",
    "Majhi Group founder",
    "Majhi OS founder",
    "executive search India",
    "hiring infrastructure",
    "Kalahandi Odisha",
    "Indian Achievers Award 2022",
    "World Staffing Leader",
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Manas Majhi",
    description:
      "Manas Majhi (Manas Ranjan Majhi) — founder of Majhi Group and Majhi OS. From Kalahandi, Odisha to executive search and autonomous hiring infrastructure.",
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/api/og?title=About+Manas+Majhi`, width: 1200, height: 630, alt: "About Manas Majhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Manas Majhi",
    description:
      "Manas Majhi (Manas Ranjan Majhi) — founder of Majhi Group and Majhi OS. From Kalahandi, Odisha to executive search and autonomous hiring infrastructure.",
    images: [`${SITE_URL}/api/og?title=About+Manas+Majhi`],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/about`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h1 ~ p"],
    },
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
        { "@type": "Organization", "@id": "https://majhigroup.com/#organization", name: "Majhi Group", url: "https://majhigroup.com" },
        { "@type": "Organization", "@id": "https://majhi.tech/#organization", name: "Majhi OS", url: "https://majhi.tech" },
      ],
      sameAs: [
        "https://www.linkedin.com/in/manasmajhi",
        "https://twitter.com/manasmajhi",
        "https://instagram.com/manas.majhi56",
        "https://majhigroup.com",
        "https://majhi.tech",
        "https://www.wikidata.org/wiki/Q140134809",
        "https://www.crunchbase.com/person/manas-majhi",
        "https://hackernoon.com/company/majhigroup",
        "https://www.candidately.com/directory/person/maanas-majhi",
        "https://www.candidately.com/blog/interview-with-manas-majhi",
        "https://www.candidately.com/worldstaffingsummit/awards/meet-all-staffing-leaders/maanas-majhi",
      ],
      knowsAbout: [
        "Executive Search",
        "Hiring Operations Infrastructure",
        "Opportunity and Human Potential",
        "India and Odisha",
        "Entrepreneurship",
        "Technology",
      ],
      award: [
        "Indian Achievers Award 2022 — Entrepreneur of the Year, Indian Achievers' Forum",
        "Top 100 Staffing Leaders 2024 Rank #18 — World Staffing Summit, World Staffing Leader",
        "Top 100 Staffing Leaders 2023 Rank #87 — World Staffing Summit, World Staffing Leader",
        "HackerNoon Startups of the Year 2023 — North America",
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://majhigroup.com/#organization",
    name: "Majhi Group",
    url: "https://majhigroup.com",
    founder: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Manas Majhi" },
    description:
      "Majhi Group is a retained executive search firm placing VP and C-suite leaders for high-growth organizations. Founded by Manas Majhi. Averaging 30–45 day placements versus 65–90 day industry median.",
    foundingLocation: "Odisha, India",
    sameAs: [
      "https://www.linkedin.com/company/majhi-group/",
      "https://hackernoon.com/company/majhigroup",
      "https://www.crunchbase.com/organization/majhi-group",
    ],
    knowsAbout: [
      "Executive Search",
      "VP and C-suite Hiring",
      "Retained Search",
      "Talent Acquisition",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://majhi.tech/#organization",
    name: "Majhi OS",
    url: "https://majhi.tech",
    founder: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: "Manas Majhi" },
    description:
      "Majhi OS is autonomous hiring operations infrastructure — the observability and recovery layer that detects, predicts, and recovers failing executive searches before they collapse. Think Datadog for hiring systems.",
    foundingLocation: "Odisha, India",
    knowsAbout: [
      "Hiring Operations Infrastructure",
      "Autonomous Execution",
      "Hiring System Observability",
      "Recruiting Operations",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="min-h-screen px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-16">
              <div className="flex-1">
                <p className="section-label mb-4">About</p>
                <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-4">
                  Talent is abundant.
                  <br />
                  <span className="text-muted-foreground">Opportunity is not.</span>
                </h1>
                <p className="text-sm text-muted-foreground mt-4">
                  <span className="font-medium text-foreground">Manas Majhi</span>
                  {" "}· Founder, Majhi Group & Majhi OS · Kalahandi, Odisha
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Also known as Manas Ranjan Majhi · Maanas Ranjan Majhi.
                </p>
              </div>
              <div className="relative flex items-center justify-center flex-shrink-0">
                <div
                  className="absolute bg-amber-300/50 dark:bg-amber-600/30 blur-3xl"
                  style={{ width: "240px", height: "320px" }}
                />
                <div className="relative w-[200px] h-[280px] lg:w-[280px] lg:h-[400px]">
                  <Image
                    src="/manas-majhi-3.png"
                    alt="Manas Majhi"
                    width={376}
                    height={550}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "center top",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 85% 88% at 50% 38%, black 48%, transparent 76%)",
                      maskImage:
                        "radial-gradient(ellipse 85% 88% at 50% 38%, black 48%, transparent 76%)",
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
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
                stat: "7K+",
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
        <div className="max-w-3xl">
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
            Writing is how I think. The articles on this site are not content
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
            Every article on this site orbits that belief. Opportunity is the
            lens I use to understand India, AI, entrepreneurship, hiring, and
            human potential.
          </p>

          <p>
            Talent is evenly distributed. Opportunity is not. That asymmetry is
            the most important problem of our time — and the most solvable one.
          </p>

          <hr className="border-border my-10" />

          <h2 className="font-serif text-3xl font-medium">Recognition.</h2>

          <p>
            The work has been recognised externally. In 2022, I received the{" "}
            <strong>Indian Achievers Award</strong> — Entrepreneur of the Year —
            from the Indian Achievers' Forum, covered by Business Standard, The
            Print, and ANI. In 2023 and again in 2024, I was named a{" "}
            <strong>World Staffing Leader</strong> by the World Staffing Summit,
            ranking #87 and then #18 in the global Top 100. Also in 2023,
            HackerNoon recognised Majhi Group as a{" "}
            <strong>Startup of the Year</strong> in North America — an outcome
            that matters not because of the award, but because of what it
            represents: a firm built from{" "}
            <strong>Kalahandi, Odisha</strong>, competing and winning on a
            global stage.
          </p>

          <p>
            I note these not for the recognition itself, but because they are
            proof of something I believe more strongly than any award could
            confirm: where you come from does not determine where you get to go.
          </p>

        </div>

        </div>{/* end max-w-3xl story wrapper */}

          {/* Links */}
          <div className="mt-16 flex flex-wrap gap-6 max-w-3xl">
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
            <Link
              href="/always-learning"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              Always Learning
            </Link>
            <Link
              href="/beyond-work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              Beyond Work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

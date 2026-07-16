import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Beyond Work",
  description:
    "Outdoor pursuits, travel, music, languages, and the causes that drive Manas Majhi beyond the desk.",
  alternates: { canonical: `${SITE_URL}/beyond-work` },
  openGraph: {
    title: "Beyond Work — Manas Majhi",
    description:
      "Outdoor pursuits, travel, music, languages, and the causes that drive Manas Majhi beyond the desk.",
    url: `${SITE_URL}/beyond-work`,
    images: [
      {
        url: `${SITE_URL}/api/og?title=Beyond+Work`,
        width: 1200,
        height: 630,
        alt: "Beyond Work — Manas Majhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Work — Manas Majhi",
    description:
      "Outdoor pursuits, travel, music, languages, and the causes that drive Manas Majhi beyond the desk.",
    images: [`${SITE_URL}/api/og?title=Beyond+Work`],
  },
};

export default function BeyondWorkPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Beyond Work</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Where I practice
            <br />
            <span className="text-muted-foreground">everything else.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most of what I care about professionally — hiring systems, opportunity,
            institution building — comes from watching what happens when people
            show up consistently over a long time.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            The things I do outside of work aren&apos;t separate from that.
            They&apos;re where I practice it.
          </p>
        </div>

        {/* Outdoor Pursuits */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-6 pb-4 border-b border-border">
            Outdoor Pursuits
          </h2>
          <p className="text-base leading-relaxed mb-6">
            I run long distances, hike, camp, kayak, and snorkel. These
            activities demand attention, preparation, and patience. Unlike many
            decisions in business, the feedback is immediate. You either adapt,
            or you don&apos;t.
          </p>
          <ul className="space-y-2">
            {[
              "Marathon & Distance Running",
              "Walkathons",
              "Hiking & Trekking",
              "Camping",
              "Kayaking",
              "Snorkeling",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Travel */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-6 pb-4 border-b border-border">
            Travel
          </h2>
          <p className="text-base leading-relaxed mb-4">
            I grew up in Kalahandi, Odisha. That experience shaped how I think
            about places, opportunity, and development.
          </p>
          <p className="text-base leading-relaxed mb-4">
            When I travel, I pay attention to why some regions thrive while
            others struggle, what geography demands of people, and how culture
            shapes institutions over generations.
          </p>
          <p className="text-base leading-relaxed">
            Kazakhstan, Thailand, Malaysia, Central Europe, and the Himalayas
            have each offered a different answer to that question.
          </p>
        </section>

        {/* Music */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-6 pb-4 border-b border-border">
            Music
          </h2>
          <p className="text-base leading-relaxed">
            Retro Bollywood, ghazals, instrumental compositions. They create the
            kind of quiet that makes deep thinking possible.
          </p>
        </section>

        {/* Languages */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-6 pb-4 border-b border-border">
            Languages
          </h2>
          <p className="text-base leading-relaxed mb-6">
            I think in Odia. I work in English and Hindi. I&apos;m learning
            German and Spanish — both early, both slower than I&apos;d like.
            Also picking up Punjabi and Haryanvi at a basic level.
          </p>
          <ul className="space-y-0">
            {[
              { lang: "Odia", level: "Native" },
              { lang: "English", level: "Professional" },
              { lang: "Hindi", level: "Professional" },
              { lang: "German", level: "Early" },
              { lang: "Spanish", level: "Early" },
              { lang: "Punjabi", level: "Basic" },
              { lang: "Haryanvi", level: "Basic" },
            ].map((item) => (
              <li
                key={item.lang}
                className="flex items-center justify-between text-sm border-b border-border/50 py-3 last:border-0"
              >
                <span className="font-medium">{item.lang}</span>
                <span className="text-muted-foreground">{item.level}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Causes */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-medium mb-6 pb-4 border-b border-border">
            Causes I Care About
          </h2>
          <p className="text-base leading-relaxed mb-6">
            Talent is evenly distributed. Opportunity is not. That single
            observation drives most of what I build and most of what I write.
          </p>
          <ul className="space-y-2">
            {[
              "Expanding access to quality opportunities",
              "Education and lifelong learning",
              "Technology for public good",
              "Leadership and institution building",
              "Elderly care and well-being",
              "Odisha's long-term development",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Closing */}
        <section className="border-t border-border pt-12">
          <p className="font-serif text-2xl font-medium leading-snug">
            Beyond work, I&apos;m curious about how people, places, and
            institutions shape one another over time.
          </p>
        </section>

      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description:
    "Manas Majhi (Manas Ranjan Majhi) — Indian Achievers Award 2022 Entrepreneur of the Year, World Staffing Leader Top 100 (2023 & 2024), HackerNoon Startup of the Year North America 2023.",
  keywords: [
    "Manas Majhi Indian Achievers Award",
    "Manas Majhi World Staffing Leader",
    "Manas Majhi HackerNoon Startup of the Year",
    "Manas Ranjan Majhi awards",
    "Indian Achievers Award 2022",
    "World Staffing Summit Top 100",
    "HackerNoon Startups of the Year 2023",
    "Manas Majhi recognition",
    "Manas Majhi Entrepreneur of the Year",
  ],
  alternates: { canonical: `${SITE_URL}/recognition` },
  openGraph: {
    title: "Awards & Recognition — Manas Majhi",
    description:
      "Manas Majhi — Indian Achievers Award 2022 Entrepreneur of the Year, World Staffing Leader Top 100 (2023 & 2024), HackerNoon Startup of the Year North America 2023.",
    url: `${SITE_URL}/recognition`,
    images: [{ url: `${SITE_URL}/api/og?title=Awards+%26+Recognition`, width: 1200, height: 630, alt: "Awards & Recognition — Manas Majhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards & Recognition — Manas Majhi",
    description:
      "Manas Majhi — Indian Achievers Award 2022 Entrepreneur of the Year, World Staffing Leader Top 100 (2023 & 2024), HackerNoon Startup of the Year North America 2023.",
    images: [`${SITE_URL}/api/og?title=Awards+%26+Recognition`],
  },
};

const recognitionSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/recognition`,
  name: "Awards & Recognition — Manas Majhi",
  description:
    "Manas Majhi (Manas Ranjan Majhi) — Indian Achievers Award 2022 Entrepreneur of the Year, World Staffing Leader Top 100 (2023 & 2024), HackerNoon Startup of the Year North America 2023.",
  url: `${SITE_URL}/recognition`,
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Manas Majhi",
    alternateName: ["Manas Ranjan Majhi", "Maanas Ranjan Majhi"],
    url: SITE_URL,
    award: [
      "Indian Achievers Award 2022 — Entrepreneur of the Year, Indian Achievers' Forum",
      "Top 100 Staffing Leaders 2024 Rank #18 — World Staffing Summit, World Staffing Leader",
      "Top 100 Staffing Leaders 2023 Rank #87 — World Staffing Summit, World Staffing Leader",
      "HackerNoon Startups of the Year 2023 — North America",
    ],
  },
};

const awardsListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Awards and Recognition — Manas Majhi",
  description:
    "Selected awards recognising Manas Majhi for entrepreneurship, staffing leadership, and technology innovation.",
  numberOfItems: 5,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Indian Achievers Award 2022 — Entrepreneur of the Year",
      description:
        "Manas Ranjan Majhi, Director of Majhi Group, honoured with the Indian Achievers Award 2022 for Entrepreneur of the Year by the Indian Achievers' Forum.",
      url: "https://www.business-standard.com/content/press-releases-ani/manas-ranjan-majhi-director-of-majhi-group-honoured-with-the-indian-achievers-award-2022-122062000539_1.html",
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}/awards/manas-majhi-indian-achievers-award-2022.jpg`,
        name: "Manas Ranjan Majhi Indian Achievers Award 2022 Certificate — Entrepreneur of the Year",
        description:
          "Official Indian Achievers Award 2022 certificate presented to Manas Ranjan Majhi, Executive Director of Majhi Group, by the Indian Achievers' Forum for Entrepreneur of the Year.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Top 100 Staffing Leaders 2024 — World Staffing Summit (Rank #18)",
      description:
        "Manas Majhi ranked #18 in the World Staffing Summit Top 100 Staffing Leaders 2024, recognising global leadership in executive search and hiring operations.",
      url: "https://www.candidately.com/directory/person/maanas-majhi",
      image: {
        "@type": "ImageObject",
        url: "https://cdn.sanity.io/images/hqw5c4pt/production/ce2f3cf969a30379922dd780d348a9e819ece0e5-1920x1080.png",
        name: "Manas Majhi World Staffing Leader 2024 — Top 100 Staffing Leaders to Watch, Rank #18",
        description:
          "World Staffing Awards 2024 banner recognising Manas Majhi (Maanas Majhi), Executive Director of Majhi Group, as a Top 100 Staffing Leader ranked #18 globally.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Top 100 Staffing Leaders 2023 — World Staffing Summit (Rank #87)",
      description:
        "Manas Majhi ranked #87 in the World Staffing Summit Top 100 Staffing Leaders 2023.",
      url: "https://www.candidately.com/worldstaffingsummit/awards/meet-all-staffing-leaders/maanas-majhi",
      image: {
        "@type": "ImageObject",
        url: "https://cdn.sanity.io/images/hqw5c4pt/production/864c9e134060a353b28048916e144c666720ac08-1920x1080.jpg",
        name: "Manas Majhi World Staffing Leader 2023 — Top 100 Staffing Leaders to Watch, Rank #87",
        description:
          "World Staffing Awards 2023 banner recognising Manas Majhi, Executive Director of Majhi Group, as a Top 100 Staffing Leader ranked #87 globally.",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "HackerNoon Startups of the Year 2023 — North America",
      description:
        "Majhi Group recognised by HackerNoon as a Startup of the Year 2023 in the North America category.",
      url: "https://hackernoon.com/startups-of-the-year-2023-winners-north-america",
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}/awards/manas-majhi-hackernoon-startup-of-the-year-2023.png`,
        name: "Manas Majhi HackerNoon Startup of the Year 2023 — North America, Majhi Group",
        description:
          "HackerNoon Startup of the Year 2023 certificate for Majhi Group, founded by Manas Majhi (Manas Ranjan Majhi) from Kalahandi, Odisha, India — North America category winner.",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Customer Experience Certificate Program Advisory Board — Ithaca College & Zschool (2022)",
      description:
        "Manas Majhi appointed Advisory Board Member for the Customer Experience Certificate Program at Ithaca College and Zschool, 2022.",
    },
  ],
};

const awards = [
  {
    year: "2024",
    rank: "Rank #18",
    title: "Top 100 Staffing Leaders",
    body: "World Staffing Summit",
    href: "https://www.candidately.com/directory/person/maanas-majhi",
    image: {
      src: "https://cdn.sanity.io/images/hqw5c4pt/production/ce2f3cf969a30379922dd780d348a9e819ece0e5-1920x1080.png",
      alt: "Manas Majhi — World Staffing Leader 2024, Top 100 Staffing Leaders to Watch, Rank #18, World Staffing Summit presented by Candidately",
      width: 1920,
      height: 1080,
    },
  },
  {
    year: "2023",
    rank: "Rank #87",
    title: "Top 100 Staffing Leaders",
    body: "World Staffing Summit",
    href: "https://www.candidately.com/worldstaffingsummit/awards/meet-all-staffing-leaders/maanas-majhi",
    image: {
      src: "https://cdn.sanity.io/images/hqw5c4pt/production/864c9e134060a353b28048916e144c666720ac08-1920x1080.jpg",
      alt: "Manas Majhi — World Staffing Leader 2023, Top 100 Staffing Leaders to Watch, Rank #87, World Staffing Summit presented by Candidately",
      width: 1920,
      height: 1080,
    },
  },
  {
    year: "2023",
    rank: "North America",
    title: "Startups of the Year",
    body: "HackerNoon",
    href: "https://hackernoon.com/startups-of-the-year-2023-winners-north-america",
    image: {
      src: "/awards/manas-majhi-hackernoon-startup-of-the-year-2023.png",
      alt: "HackerNoon Startup of the Year 2023 certificate — Majhi Group, founded by Manas Majhi (Manas Ranjan Majhi) from Kalahandi, Odisha, India — North America category winner",
      width: 800,
      height: 800,
    },
  },
  {
    year: "2022",
    rank: "Entrepreneur of the Year",
    title: "Indian Achievers Award",
    body: "Indian Achievers' Forum",
    href: "https://www.business-standard.com/content/press-releases-ani/manas-ranjan-majhi-director-of-majhi-group-honoured-with-the-indian-achievers-award-2022-122062000539_1.html",
    image: {
      src: "/awards/manas-majhi-indian-achievers-award-2022.jpg",
      alt: "Indian Achievers Award 2022 certificate presented to Manas Ranjan Majhi, Executive Director of Majhi Group — Entrepreneur of the Year, Indian Achievers' Forum",
      width: 1200,
      height: 1748,
    },
  },
  {
    year: "2022",
    rank: "Advisory Board Member",
    title: "Customer Experience Certificate Program Advisory Board",
    body: "Ithaca College · Zschool",
    href: null,
    image: null,
  },
];

const media = [
  {
    name: "Business Standard",
    href: "https://www.business-standard.com/content/press-releases-ani/manas-ranjan-majhi-director-of-majhi-group-honoured-with-the-indian-achievers-award-2022-122062000539_1.html",
  },
  {
    name: "The Print",
    href: "https://theprint.in/ani-press-releases/manas-ranjan-majhi-director-of-majhi-group-honoured-with-the-indian-achievers-award-2022/1004061/",
  },
  {
    name: "ANI",
    href: "https://www.aninews.in/news/business/business/manas-ranjan-majhi-director-of-majhi-group-honoured-with-the-indian-achievers-award-202220220620133831",
  },
  {
    name: "Zee5",
    href: null,
  },
  {
    name: "HackerNoon",
    href: "https://hackernoon.com/startups-of-the-year-2023-winners-north-america",
  },
  {
    name: "Candidately (Interview)",
    href: "https://www.candidately.com/blog/interview-with-manas-majhi",
  },
  {
    name: "Candidately (Directory)",
    href: "https://www.candidately.com/directory/person/maanas-majhi",
  },
  {
    name: "The Prameya",
    href: null,
  },
  {
    name: "Dainik Bhaskar",
    href: null,
  },
  {
    name: "Medium",
    href: "https://link.medium.com/kxrbjlv20qb",
  },
];

const pressClips = [
  {
    publication: "The Prameya",
    language: "Odia",
    year: "2022",
    headline: "Manas nominated to Advisory Board of a 190-year-old American University",
    image: {
      src: "/awards/manas-majhi-prameya-press.png",
      alt: "The Prameya newspaper coverage — Manas Ranjan Majhi nominated to Ithaca College Advisory Board",
      width: 1662,
      height: 1438,
    },
  },
  {
    publication: "Dainik Bhaskar",
    language: "Hindi",
    year: "2022",
    headline: "Manas nominated to Advisory Board of an American University",
    image: {
      src: "/awards/manas-majhi-dainik-bhaskar-press.png",
      alt: "Dainik Bhaskar newspaper coverage — Manas Ranjan Majhi nominated to Ithaca College Advisory Board",
      width: 1412,
      height: 1426,
    },
  },
  {
    publication: "The Prameya",
    language: "Odia",
    year: "2022",
    headline: "Junagarh's Manas Majhi honoured as Best Entrepreneur — Indian Achievers' Forum",
    image: {
      src: "/awards/manas-majhi-odia-newspaper-entrepreneur-award.jpg",
      alt: "Odia newspaper coverage — Manas Ranjan Majhi from Junagarh, Kalahandi honoured with Best Entrepreneur award by Indian Achievers' Forum 2022",
      width: 1169,
      height: 728,
    },
  },
];

export default function RecognitionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recognitionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(awardsListSchema) }}
      />
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="section-label mb-4">Recognition</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Awards &amp;
            <br />
            <span className="text-muted-foreground">Recognition.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Selected recognition for work in executive search, hiring
            infrastructure, and entrepreneurship.
          </p>
        </div>

        {/* As seen on */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            As seen on
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {media.map((outlet, i) => (
              <span key={outlet.name} className="flex items-center gap-8">
                {outlet.href ? (
                  <a
                    href={outlet.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {outlet.name}
                  </a>
                ) : (
                  <span className="font-serif text-lg font-medium text-foreground">
                    {outlet.name}
                  </span>
                )}
                {i < media.length - 1 && (
                  <span className="text-border text-lg select-none">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-border mb-20" />

        {/* Awards */}
        <div className="space-y-px">
          {awards.map((award) => {
            const inner = (
              <>
                <div className="flex items-start gap-6">
                  {/* Year */}
                  <span className="shrink-0 w-12 text-xs uppercase tracking-widest text-muted-foreground pt-1">
                    {award.year}
                  </span>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {award.rank}
                    </p>
                    <h2 className="font-serif text-2xl font-medium group-hover:text-muted-foreground transition-colors">
                      {award.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {award.body}
                    </p>
                    {/* Award image */}
                    {award.image && (
                      <div className="mt-6 rounded-lg overflow-hidden border border-border">
                        <Image
                          src={award.image.src}
                          alt={award.image.alt}
                          width={award.image.width}
                          height={award.image.height}
                          className="w-full h-auto"
                          loading="lazy"
                          unoptimized={award.image.src.startsWith("https://cdn.sanity.io")}
                        />
                      </div>
                    )}
                  </div>
                </div>
                {award.href && (
                  <span className="shrink-0 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-150 pt-2">
                    →
                  </span>
                )}
              </>
            );
            return award.href ? (
              <a
                key={`${award.year}-${award.title}`}
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-6 py-8 border-b border-border hover:border-foreground/20 transition-colors"
              >
                {inner}
              </a>
            ) : (
              <div
                key={`${award.year}-${award.title}`}
                className="group flex items-start justify-between gap-6 py-8 border-b border-border"
              >
                {inner}
              </div>
            );
          })}
        </div>

        {/* AI Recognition */}
        <div className="mt-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">
            AI Recognition
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-medium mb-3">
                Cited by Microsoft Copilot &amp; AI-powered search
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                As AI-powered search becomes an important way professionals discover
                information, original research and evidence-based writing are increasingly
                referenced alongside traditional search results.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Majhi Group&apos;s research, hiring frameworks, and long-form analysis are
                frequently cited by Microsoft Copilot and other AI-powered search
                experiences, reflecting a growing body of work on executive hiring,
                recruitment intelligence, and hiring systems.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-px border border-border rounded-lg overflow-hidden mt-6">
              <div className="bg-muted/30 px-6 py-5">
                <p className="font-serif text-3xl font-medium">937</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  AI citations
                </p>
              </div>
              <div className="bg-muted/30 px-6 py-5">
                <p className="font-serif text-3xl font-medium">30</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Days tracked
                </p>
              </div>
              <div className="bg-muted/30 px-6 py-5">
                <p className="font-serif text-3xl font-medium">5</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Avg. cited pages
                </p>
              </div>
            </div>

            {/* Screenshot */}
            <div className="rounded-lg overflow-hidden border border-border mt-2">
              <Image
                src="/awards/bing-webmaster-ai-citations.png"
                alt="Microsoft Bing Webmaster Tools — AI Performance dashboard showing 937 total citations and 5 average cited pages for majhigroup.com over the last 30 days, sourced from Microsoft Copilots and Partners"
                width={2600}
                height={1160}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed pt-1">
              Citation counts are monitored continuously and updated periodically. They
              represent instances where published work is surfaced or referenced in
              AI-powered search experiences, as reported by Microsoft Bing Webmaster Tools.
              Last updated: July 10, 2026.
            </p>
          </div>
        </div>

        {/* Interviews */}
        <div className="mt-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">
            Interviews
          </p>
          <a
            href="https://www.candidately.com/blog/interview-with-manas-majhi"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="rounded-lg overflow-hidden border border-border group-hover:border-foreground/20 transition-colors">
              <Image
                src="/awards/manas-majhi-world-staffing-summit-interview.jpg"
                alt="Manas Majhi interview card — World Staffing Summit by Candidately: 'Prioritizing client experience and investing in meeting their expectations is crucial for success in the staffing industry.'"
                width={981}
                height={525}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-serif text-lg font-medium group-hover:text-muted-foreground transition-colors">
                  World Staffing Summit — Candidately
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Interview · Executive Director, Majhi Group
                </p>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-150">
                →
              </span>
            </div>
          </a>
        </div>

        <hr className="border-border mt-20 mb-0" />

        {/* Press Clips */}
        <div className="mt-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">
            In the press
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pressClips.map((clip, i) => (
              <div key={`${clip.publication}-${i}`} className="space-y-3">
                <div>
                  <p className="font-serif text-base font-medium">{clip.publication}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">
                    {clip.language} · {clip.year}
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden border border-border">
                  <Image
                    src={clip.image.src}
                    alt={clip.image.alt}
                    width={clip.image.width}
                    height={clip.image.height}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="font-serif text-lg text-muted-foreground italic">
            "Recognition is a byproduct. The work comes first."
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

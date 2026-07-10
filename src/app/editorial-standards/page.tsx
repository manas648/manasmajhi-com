import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Editorial Standards",
  description:
    "How every article on manasmajhi.com is built — evidence, context, honesty, and corrections.",
  alternates: {
    canonical: `${SITE_URL}/editorial-standards`,
  },
  openGraph: {
    title: "Editorial Standards — Manas Majhi",
    description:
      "How every article on manasmajhi.com is built — evidence, context, honesty, and corrections.",
    url: `${SITE_URL}/editorial-standards`,
    images: [
      {
        url: `${SITE_URL}/api/og?title=Editorial+Standards`,
        width: 1200,
        height: 630,
        alt: "Editorial Standards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Standards — Manas Majhi",
    description:
      "How every article on manasmajhi.com is built — evidence, context, honesty, and corrections.",
    images: [`${SITE_URL}/api/og?title=Editorial+Standards`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/editorial-standards`,
  name: "Editorial Standards",
  description: "How every article on manasmajhi.com is built.",
  url: `${SITE_URL}/editorial-standards`,
  author: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Manas Majhi",
  },
};

const principles = [
  {
    n: "1",
    title: "Evidence Before Opinion",
    body: "The strongest ideas survive scrutiny. Whenever possible, our work is grounded in data, operational experience, public research, or transparent reasoning — not speculation.",
  },
  {
    n: "2",
    title: "Context Before Conclusions",
    body: "Events rarely happen in isolation. We look beyond headlines to understand the systems, incentives, history, and technology that shape outcomes.",
  },
  {
    n: "3",
    title: "Challenge Assumptions",
    body: "Progress begins with better questions. We examine accepted wisdom, test prevailing narratives, and encourage independent thinking.",
  },
  {
    n: "4",
    title: "Practical Thinking",
    body: "Ideas matter only when they improve decisions. Whenever possible, we connect theory to execution through frameworks, case studies, or operational insights.",
  },
  {
    n: "5",
    title: "Long-Term Perspective",
    body: "Many decisions are judged over years, not news cycles. We prioritize enduring principles over temporary trends.",
  },
];

export default function EditorialStandardsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-4">Site</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Editorial Standards
          </h1>
          <p className="text-muted-foreground mb-16">
            How every article on this site is built.
          </p>

          <div className="space-y-12 font-sans text-base leading-relaxed">
            {/* Principles */}
            <div className="space-y-8">
              {principles.map((p) => (
                <div key={p.n} className="flex gap-6">
                  <span className="font-serif text-3xl text-muted-foreground/30 font-medium leading-tight flex-shrink-0 w-6">
                    {p.n}
                  </span>
                  <div>
                    <h2 className="font-medium text-foreground mb-2">{p.title}</h2>
                    <p className="text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-border" />

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-medium">Editorial Integrity</h2>
              <p className="text-muted-foreground">
                We distinguish clearly between observation, evidence, and opinion. When we
                make factual claims, we identify their source. When we express an opinion,
                we label it as such. When new evidence emerges, we update our work.
              </p>
              <p className="text-muted-foreground">
                We do not accept payment in exchange for favorable coverage of any person,
                company, or product.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-medium">AI Use</h2>
              <p className="text-muted-foreground">
                Some articles on this site are researched or drafted with AI assistance.
                Where that is the case, all claims are verified, sources are confirmed,
                and final editorial judgment belongs to the author.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-medium">Conflicts of Interest</h2>
              <p className="text-muted-foreground">
                The author runs{" "}
                <Link
                  href="https://majhigroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  Majhi Group
                </Link>{" "}
                and{" "}
                <Link
                  href="https://majhi.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  Majhi OS
                </Link>
                . Neither relationship determines what is published here or how.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-medium">Corrections</h2>
              <p className="text-muted-foreground">
                If an error is identified in a published piece, we correct it and note
                the correction at the bottom of the article with the date it was made.
                We do not silently edit factual claims after publication.
              </p>
            </div>

            <hr className="border-border" />

            <p className="text-xs text-muted-foreground">Last reviewed: July 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}

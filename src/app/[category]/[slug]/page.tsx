import { notFound } from "next/navigation";
import { permanentRedirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getEssayBySlug,
  getAllEssays,
  getRelatedEssays,
  getAdjacentEssays,
} from "@/lib/essays";
import { CATEGORY_LABELS, CATEGORY_IMAGES, EssayCategory } from "@/types";
import { formatDate, SITE_URL, SITE_NAME } from "@/lib/utils";
import { EssayCard } from "@/components/essay/EssayCard";
import { AuthorCard } from "@/components/essay/AuthorCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

const VALID_CATEGORIES = new Set([
  "opportunity",
  "future-of-work",
  "india",
  "odisha",
  "kalahandi",
  "odia",
  "travel",
  "entrepreneurship",
  "philosophy",
  "hiring",
  "frameworks",
]);

export async function generateStaticParams() {
  const essays = getAllEssays();
  return essays.map((e) => ({ category: e.category, slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};
  if (essay.hidden) return { robots: { index: false, follow: false } };

  const ogUrl = `${SITE_URL}/api/og?title=${encodeURIComponent(essay.title)}&category=${encodeURIComponent(CATEGORY_LABELS[essay.category])}`;

  const ogImages = essay.coverImage
    ? [
        { url: essay.coverImage, width: 1200, height: 800, alt: essay.title },
        { url: ogUrl, width: 1200, height: 630, alt: essay.title },
      ]
    : [{ url: ogUrl, width: 1200, height: 630, alt: essay.title }];

  return {
    title: essay.title,
    description: metaDesc(essay.excerpt),
    openGraph: {
      title: `${essay.title} — ${SITE_NAME}`,
      description: essay.excerpt,
      type: "article",
      publishedTime: essay.date,
      authors: ["Manas Majhi"],
      tags: essay.tags,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: essay.title,
      description: essay.excerpt,
      images: [essay.coverImage || ogUrl],
    },
    alternates: {
      canonical: `${SITE_URL}/${essay.category}/${slug}`,
    },
  };
}

/** Truncates excerpt to ≤155 chars at a word boundary for use as HTML meta description. */
function metaDesc(text: string): string {
  if (text.length <= 155) return text;
  const cut = text.lastIndexOf(" ", 155);
  return text.slice(0, cut > 0 ? cut : 155) + "…";
}

function renderContent(content: string): string {
  return content
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^>> (.+)$/gm, '<p class="pull-quote">$1</p>')
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(/^---$/gm, "<hr>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|b|e|s|u|o|p|h])(.+)/gm, "<p>$1</p>");
}

export default async function EssayPage({ params }: Props) {
  const { category, slug } = await params;

  // Validate category segment
  if (!VALID_CATEGORIES.has(category)) notFound();

  const essay = getEssayBySlug(slug);
  if (!essay) notFound();

  // If category in URL doesn't match essay's actual category, redirect to correct URL
  if (essay.category !== category) {
    permanentRedirect(`/${essay.category}/${essay.slug}`);
  }

  const related = getRelatedEssays(essay, 3);
  const { prev, next } = getAdjacentEssays(slug);

  const ogImage = `${SITE_URL}/api/og?title=${encodeURIComponent(essay.title)}&category=${encodeURIComponent(CATEGORY_LABELS[essay.category])}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": ["Article", "OpinionNewsArticle"],
    "@id": `${SITE_URL}/${essay.category}/${slug}`,
    headline: essay.title,
    description: essay.excerpt,
    image: essay.coverImage || ogImage,
    inLanguage: essay.category === "odia" ? "or" : "en",
    keywords: essay.tags.join(", "),
    genre: "Opinion",
    articleSection: CATEGORY_LABELS[essay.category],
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Manas Majhi",
      alternateName: ["Manas Ranjan Majhi", "Maanas Ranjan Majhi"],
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/in/manasmajhi",
        "https://twitter.com/manasmajhi",
        "https://majhigroup.com",
        "https://majhi.tech",
        "https://www.wikidata.org/wiki/Q140134809",
        "https://www.crunchbase.com/person/manas-majhi",
      ],
    },
    datePublished: essay.date.includes("T") ? essay.date : `${essay.date}T00:00:00Z`,
    dateModified: (() => { const d = essay.dateModified || essay.date; return d.includes("T") ? d : `${d}T00:00:00Z`; })(),
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Manas Majhi",
      url: SITE_URL,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["article h1", "article header p"],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${essay.category}/${slug}`,
    },
    url: `${SITE_URL}/${essay.category}/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Manas Majhi",
      url: SITE_URL,
    },
  };

  const faqSchema = essay.faqs && essay.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: essay.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Writing",
        item: `${SITE_URL}/writing`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: CATEGORY_LABELS[essay.category],
        item: `${SITE_URL}/${essay.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: essay.title,
        item: `${SITE_URL}/${essay.category}/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="min-h-screen">
        {/* Essay header */}
        <header className="px-6 lg:px-8 pt-16 pb-12">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8">
              <Link
                href="/writing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Articles
              </Link>
              <span className="text-border">/</span>
              <Link
                href={`/${essay.category}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {CATEGORY_LABELS[essay.category]}
              </Link>
            </div>

            {/* Meta */}
            <div className="essay-meta flex flex-wrap items-center gap-2 mb-6">
              <span className="text-accent">{CATEGORY_LABELS[essay.category]}</span>
              <span className="text-border">·</span>
              <time dateTime={essay.date}>{formatDate(essay.date)}</time>
              <span className="text-border">·</span>
              <span>{essay.readingTime}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-balance">
              {essay.title}
            </h1>

            {/* Excerpt / deck */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {essay.excerpt}
            </p>

            {/* Tags */}
            {essay.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {essay.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <hr className="border-border" />
            <AuthorCard slug={slug} />
          </div>
        </header>

        {/* Hero image — falls back to category image if no coverImage set */}
        {(() => {
          const heroImage = essay.coverImage || CATEGORY_IMAGES[essay.category as EssayCategory];
          return heroImage ? (
            <div className="px-6 lg:px-8 pb-10">
              <div className="max-w-3xl mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroImage}
                  alt={essay.coverImageCaption || essay.title}
                  className="w-full rounded-2xl"
                  style={{ aspectRatio: "2/1", objectFit: "cover" }}
                />
                {(essay.coverImageCaption || essay.coverImageCredit) && (
                  <p className="mt-2 text-xs text-muted-foreground italic text-center">
                    {essay.coverImageCaption}
                    {essay.coverImageCaption && essay.coverImageCredit && " · "}
                    {essay.coverImageCredit}
                  </p>
                )}
              </div>
            </div>
          ) : null;
        })()}

        {/* Essay body */}
        <div className="px-6 lg:px-8 pb-16">
          <div
            className="prose-essay mx-auto"
            dangerouslySetInnerHTML={{ __html: renderContent(essay.content) }}
          />
        </div>

        {/* Hiring CTA */}
        {(essay.category === "hiring" ||
          (essay.category === "future-of-work" &&
            essay.tags.includes("Majhi OS"))) && (
          <div className="px-6 lg:px-8 pb-16">
            <div className="max-w-3xl mx-auto">
              {essay.tags.includes("Majhi OS") ? (
                <div className="rounded-2xl border border-border bg-muted/40 p-8">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Majhi OS
                  </p>
                  <h3 className="font-serif text-2xl font-medium mb-3">
                    Running a VP search that&apos;s stalling?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The research report documents why 68% of VP searches fail
                    past week 10 — and what a different architecture produces.
                    The Mission Walkthrough uses your actual mandate as working
                    context, not a demo.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/whitepaper"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
                    >
                      Download the research report
                    </a>
                    <a
                      href="https://majhi.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium hover:border-foreground/40 transition-colors"
                    >
                      Book a Mission Walkthrough →
                    </a>
                  </div>
                </div>
              ) : essay.tags.includes("Majhi Group") ? (
                <div className="rounded-2xl border border-border bg-muted/40 p-8">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Majhi Group
                  </p>
                  <h3 className="font-serif text-2xl font-medium mb-3">
                    Running a search that won&apos;t close?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Majhi Group runs retained VP and C-suite searches. 30–45
                    days against the 65–90 day industry median. 90-day
                    replacement guarantee.
                  </p>
                  <a
                    href="/work-with-me"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
                  >
                    Request a Search Assessment →
                  </a>
                </div>
              ) : (
                <div className="rounded-2xl border border-border bg-muted/40 p-8">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Majhi Group
                  </p>
                  <h3 className="font-serif text-2xl font-medium mb-3">
                    VP or C-suite search that won&apos;t close?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Majhi Group runs retained executive searches. 30–45 day
                    median against the 65–90 day industry norm. If the role
                    has been open 60+ days or you&apos;ve tried contingency
                    already, the assessment is worth 20 minutes.
                  </p>
                  <a
                    href="/work-with-me"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
                  >
                    Request a Search Assessment →
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Reply CTA */}
        <div className="px-6 lg:px-8 pb-10">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-border bg-muted/30 px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Did this land? Push back? Add something I missed?
              </p>
              <a
                href={`mailto:manas@majhigroup.com?subject=Re: ${essay.title}`}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-medium hover:border-foreground/40 hover:bg-muted transition-all"
              >
                Reply to Manas →
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-6 lg:px-8 pb-16">
          <div className="max-w-3xl mx-auto">
            <hr className="border-border mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {prev && (
                <Link href={`/${prev.category}/${prev.slug}`} className="group">
                  <div className="p-5 rounded-2xl border border-border hover:border-accent/40 transition-all">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Previous
                      {prev.category === "odia" && essay.category !== "odia" && (
                        <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-muted border border-border">ଓଡ଼ିଆ</span>
                      )}
                    </div>
                    <p className="font-serif text-base font-medium group-hover:text-accent transition-colors line-clamp-2">
                      {prev.title}
                    </p>
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  href={`/${next.category}/${next.slug}`}
                  className="group sm:ml-auto text-right"
                >
                  <div className="p-5 rounded-2xl border border-border hover:border-accent/40 transition-all">
                    <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mb-2">
                      Next
                      {next.category === "odia" && essay.category !== "odia" && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] bg-muted border border-border">ଓଡ଼ିଆ</span>
                      )}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-serif text-base font-medium group-hover:text-accent transition-colors line-clamp-2">
                      {next.title}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Related writing */}
        {related.length > 0 && (
          <section className="px-6 lg:px-8 pb-20 bg-muted/30">
            <div className="max-w-7xl mx-auto pt-16">
              <p className="section-label mb-3">Continue Reading</p>
              <h2 className="font-serif text-2xl font-medium mb-8">
                Related writing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((r) => (
                  <EssayCard key={r.slug} essay={r} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}

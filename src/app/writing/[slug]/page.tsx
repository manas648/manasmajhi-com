import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getEssayBySlug,
  getEssaySlugs,
  getRelatedEssays,
  getAdjacentEssays,
} from "@/lib/essays";
import { CATEGORY_LABELS } from "@/types";
import { formatDate, SITE_URL, SITE_NAME } from "@/lib/utils";
import { EssayCard } from "@/components/essay/EssayCard";
import { AuthorCard } from "@/components/essay/AuthorCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getEssaySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};

  const ogUrl = `${SITE_URL}/api/og?title=${encodeURIComponent(essay.title)}&category=${encodeURIComponent(CATEGORY_LABELS[essay.category])}`;

  return {
    title: essay.title,
    description: essay.excerpt,
    openGraph: {
      title: `${essay.title} — ${SITE_NAME}`,
      description: essay.excerpt,
      type: "article",
      publishedTime: essay.date,
      authors: ["Manas Majhi"],
      tags: essay.tags,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: essay.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: essay.title,
      description: essay.excerpt,
      images: [ogUrl],
    },
    alternates: {
      canonical: `${SITE_URL}/writing/${slug}`,
    },
  };
}

// Simple MDX renderer — converts raw markdown to HTML-safe content
// For full MDX, integrate @next/mdx or next-mdx-remote
function renderContent(content: string): string {
  // Basic markdown → HTML conversion
  return content
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(/^---$/gm, "<hr>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|b|e|s|u|o|p|h])(.+)/gm, "<p>$1</p>");
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) notFound();

  const related = getRelatedEssays(essay, 3);
  const { prev, next } = getAdjacentEssays(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: essay.title,
    description: essay.excerpt,
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
      ],
    },
    datePublished: essay.date,
    dateModified: essay.date,
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Manas Majhi",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/writing/${slug}`,
    },
    url: `${SITE_URL}/writing/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Manas Majhi",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                Essays
              </Link>
              <span className="text-border">/</span>
              <Link
                href={`/writing/${essay.category}`}
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

        {/* Essay body */}
        <div className="px-6 lg:px-8 pb-16">
          <div
            className="prose-essay mx-auto"
            dangerouslySetInnerHTML={{ __html: renderContent(essay.content) }}
          />
        </div>

        {/* Navigation */}
        <div className="px-6 lg:px-8 pb-16">
          <div className="max-w-3xl mx-auto">
            <hr className="border-border mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {prev && (
                <Link href={`/writing/${prev.slug}`} className="group">
                  <div className="p-5 rounded-2xl border border-border hover:border-accent/40 transition-all">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Previous
                    </div>
                    <p className="font-serif text-base font-medium group-hover:text-accent transition-colors line-clamp-2">
                      {prev.title}
                    </p>
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  href={`/writing/${next.slug}`}
                  className="group sm:ml-auto text-right"
                >
                  <div className="p-5 rounded-2xl border border-border hover:border-accent/40 transition-all">
                    <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground mb-2">
                      Next
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

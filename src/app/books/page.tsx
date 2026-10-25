import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Mail, FileText } from "lucide-react";
import { SITE_URL } from "@/lib/utils";

const bookTitle = "How to Design a Highly Converting Sales Funnel & Ads";
const orderEmail = "manas@majhigroup.com";
const emailSubject = encodeURIComponent(`Paperback enquiry — ${bookTitle}`);
const emailBody = encodeURIComponent(
  `Hello Manas,\n\nI would like to enquire about ordering a paperback copy of “${bookTitle}”.\n\nCould you please share the price, shipping options, payment instructions, and estimated delivery time?\n\nNumber of copies:\nShipping city and PIN code:\n\nThank you.`
);

export const metadata: Metadata = {
  title: "Books by Manas Majhi",
  description:
    "Books by Manas Majhi. Explore How to Design a Highly Converting Sales Funnel & Ads, a paperback with real-world campaigns and case studies. Order enquiries by email.",
  alternates: { canonical: `${SITE_URL}/books` },
  openGraph: {
    type: "website",
    title: "Books by Manas Majhi",
    description:
      "Books, ideas and practical lessons. Enquire by email about the paperback edition of How to Design a Highly Converting Sales Funnel & Ads.",
    url: `${SITE_URL}/books`,
    images: [
      {
        url: `${SITE_URL}/covers/high-converting-sales-funnel-ads.svg`,
        width: 1200,
        height: 1500,
        alt: bookTitle + " — book cover by Manas Majhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Books by Manas Majhi",
    description:
      "Books, ideas and practical lessons. Paperback orders by email.",
    images: [`${SITE_URL}/covers/high-converting-sales-funnel-ads.svg`],
  },
};

export default function BooksPage() {
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: bookTitle,
    author: {
      "@type": "Person",
      name: "Manas Majhi",
      url: SITE_URL,
    },
    bookFormat: "https://schema.org/Paperback",
    inLanguage: "en",
    url: `${SITE_URL}/books`,
    image: `${SITE_URL}/covers/high-converting-sales-funnel-ads.svg`,
    description:
      "Real-life lessons for entrepreneurs and start-ups, featuring real-world campaigns and case studies.",
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <section className="px-6 lg:px-8 pt-16 md:pt-24 pb-10 md:pb-14 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-4">Books</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight mb-5">
            Books by Manas Majhi
          </h1>
          <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Books, ideas and practical lessons.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-20 items-center">
          <div className="max-w-md mx-auto w-full">
            <div className="relative overflow-hidden rounded-sm border border-border/70 bg-[#ff7900] shadow-2xl shadow-black/10">
              <Image
                src="/covers/high-converting-sales-funnel-ads.svg"
                alt="Book cover: How to Design a Highly Converting Sales Funnel & Ads by Manas Majhi"
                width={800}
                height={1120}
                priority
                className="w-full h-auto"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Paperback edition
            </p>
          </div>

          <article className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Featured book
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-4">
              {bookTitle}
            </h2>
            <p className="font-serif text-lg md:text-xl italic text-muted-foreground leading-relaxed mb-6">
              Real-life lessons for entrepreneurs and start-ups
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                Paperback
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" aria-hidden="true" />
                Orders by email only
              </span>
            </div>

            <h3 className="font-serif text-xl md:text-2xl font-medium mb-3">
              Turn marketing ideas into practical action.
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Building an effective sales funnel and designing advertising
                campaigns require more than ideas. They require thoughtful
                execution, experimentation, and an understanding of what works
                in practice.
              </p>
              <p>
                Drawing on real-world campaigns and case studies, this book
                shares practical lessons for entrepreneurs and start-ups
                looking to improve their approach to advertising and sales
                funnels.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-start gap-4">
              <FileText className="w-7 h-7 mt-1 text-muted-foreground shrink-0" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">Paperback edition</p>
                <p className="text-sm text-muted-foreground">
                  Price available on enquiry.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={`mailto:${orderEmail}?subject=${emailSubject}&body=${emailBody}`}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-accent text-accent-foreground px-6 md:px-7 py-4 text-base font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition-opacity"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Enquire / Order by Email
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                Email:{" "}
                <a
                  href={`mailto:${orderEmail}`}
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  {orderEmail}
                </a>
              </p>
              <p className="mt-5 text-xs text-muted-foreground">
                Send an enquiry for pricing, shipping, payment instructions and
                estimated delivery. An email enquiry does not confirm an order.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

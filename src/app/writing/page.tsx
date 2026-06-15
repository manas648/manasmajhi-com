import Link from "next/link";
import { getAllEssayMeta } from "@/lib/essays";
import { EssayCard } from "@/components/essay/EssayCard";
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, EssayCategory } from "@/types";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Long-form thinking on opportunity, human potential, India, hiring, and the systems that shape lives.",
};

const categories: EssayCategory[] = [
  "opportunity",
  "india",
  "odisha",
  "kalahandi",
  "hiring",
  "future-of-work",
  "entrepreneurship",
  "philosophy",
  "travel",
];

const categoryDescriptions: Partial<Record<EssayCategory, string>> = {
  opportunity:
    "The central question. How it's created, distributed, recognised, and wasted.",
  india: "Not the version in headlines. The one being built quietly every day.",
  odisha: "The state that shaped me and continues to shape how I see the world.",
  kalahandi:
    "The place I understand most deeply and the place I return to most often.",
  hiring:
    "Years of watching people search for each other, evaluate each other, and sometimes overlook each other.",
  "future-of-work":
    "AI, automation, and what technological change means for people still climbing their first ladder.",
  entrepreneurship:
    "Building things from nothing and discovering that the hardest parts are usually invisible.",
  philosophy:
    "Questions about judgment, identity, learning, responsibility, and how to live thoughtfully.",
  travel:
    "Lessons hiding in airports, roads, conversations, and places that rarely make the news.",
};

export default function EssaysPage() {
  const essays = getAllEssayMeta();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="px-6 lg:px-8 pt-24 pb-16 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-4">Why I Write</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-8">
            Writing
          </h1>
        </div>
      </div>

      <div className="px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">

          {/* Opening */}
          <div className="prose-essay space-y-6 mb-20">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground">
              I grew up in Kalahandi.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you spend enough time in a place like that, you start noticing
              something that never leaves you.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The smartest person in the room isn&apos;t always the one who
              succeeds. The hardest-working person isn&apos;t always the one who
              gets the opportunity. And the distance between where someone starts
              and where they end up often has less to do with talent than access.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;ve spent most of my life trying to understand why. Writing
              is one way I explore that question.
            </p>
          </div>

          {/* The Question */}
          <div className="mb-20">
            <p className="section-label mb-4">The Question</p>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                For a long time, I thought I was interested in talent.
                I wasn&apos;t. I was interested in what happens to talent when
                it meets opportunity — or doesn&apos;t.
              </p>
              <p>
                Growing up, I saw people with remarkable ability whose worlds
                were defined by geography, circumstance, information, or a lack
                of connections. Later, I met people who had access to all of
                those things. The contrast stayed with me. It still does.
              </p>
              <p>
                My work has taken me into rooms I never imagined I&apos;d enter.
                I&apos;ve sat across founders building companies, executives
                making difficult decisions, candidates trying to change their
                lives, investors evaluating risk, and people searching for their
                next opportunity.
              </p>
              <p>
                The industries changed. The cities changed. The people changed.
                The question didn&apos;t.
              </p>
              <p className="font-medium text-foreground">
                Why do some people move forward while others remain stuck?
              </p>
              <p>
                This website is my attempt to think about that question in
                public. Some of the essays here are attempts at answers. Most
                are attempts at better questions.
              </p>
            </div>
          </div>

          {/* Core quote */}
          <div className="border-l-4 border-accent pl-8 mb-20">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed italic">
              &ldquo;Talent is abundant. Opportunity is not. The purpose of
              technology, institutions, leadership, and systems is to reduce that
              gap.&rdquo;
            </p>
            <p className="mt-4 text-sm text-muted-foreground">— Manas Majhi</p>
          </div>

          {/* What Makes This Different */}
          <div className="mb-20">
            <p className="section-label mb-4">What Makes This Different</p>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>There is no shortage of advice on the internet.</p>
              <p>
                How to build a career. How to build a company. How to build a
                personal brand. Most of it starts after the opportunity already
                exists. I&apos;m interested in what happens before that.
              </p>
              <p>
                This isn&apos;t career advice. It&apos;s an attempt to
                understand the forces that shape careers before anyone updates a
                résumé.
              </p>
              <p>
                This isn&apos;t blind optimism about India. It&apos;s an effort
                to observe what India is becoming, what it&apos;s getting right,
                and where it continues to leave people behind.
              </p>
              <p>
                And this isn&apos;t recruitment content. Recruitment is simply
                one lens through which I&apos;ve watched humans evaluate other
                humans. The real subject is opportunity — who gets it, who
                creates it, who misses it, and why.
              </p>
              <p className="font-medium text-foreground">
                Most of what I write today couldn&apos;t have been written five
                years ago. That&apos;s how I know it&apos;s worth writing now.
              </p>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="mb-20">
            <p className="section-label mb-4">Who This Is For</p>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                If you&apos;re building something — a company, a career, or a
                future that doesn&apos;t yet exist — some of this may feel
                familiar. I write about uncertainty, ambition, and the long
                distance between where you are and where you want to be.
              </p>
              <p>
                If you work with people — hiring them, leading them, investing
                in them, teaching them — some of this may help you see patterns
                that are easy to miss when you&apos;re focused only on outcomes.
              </p>
              <p>
                And if you come from somewhere like Kalahandi, this is
                especially for you.
              </p>
              <p>
                Not because our stories are identical. Because they rhyme.
                A smaller town. Fewer connections. Fewer shortcuts. But not
                smaller ambition.
              </p>
            </div>
          </div>

          {/* What I Write About */}
          <div className="mb-20">
            <p className="section-label mb-4">What I Write About</p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Everything on this website connects back to a single question:{" "}
              <span className="text-foreground font-medium">
                why do some people get opportunities and others don&apos;t?
              </span>
            </p>
            <div className="divide-y divide-border">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/${cat}`}
                  className="group flex items-start justify-between gap-6 py-5 hover:text-foreground transition-colors"
                >
                  <div>
                    <p className="font-medium text-foreground mb-1 group-hover:text-accent transition-colors">
                      {CATEGORY_LABELS[cat]}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {categoryDescriptions[cat] || CATEGORY_DESCRIPTIONS[cat]}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent shrink-0 mt-1 transition-colors" />
                </Link>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/all"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Browse everything I&apos;ve written <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Closing */}
          <div className="border-t border-border pt-16">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-6">
              I don&apos;t expect every essay to resonate with every reader.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But if something here helps you see an opportunity where you
              didn&apos;t see one before, understand a problem more clearly, or
              feel a little less alone in figuring things out — then it has done
              its job.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              That&apos;s why I write.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

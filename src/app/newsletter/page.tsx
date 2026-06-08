import { NewsletterForm } from "@/components/ui/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Essays on opportunity, India, technology, and human potential — delivered to your inbox.",
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Subscribe</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Newsletter
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            New essays delivered to your inbox. Written when there's something
            worth saying — not on a schedule.
          </p>
        </div>

        {/* What you get */}
        <div className="space-y-4 mb-12">
          {[
            {
              title: "Long-form essays",
              desc: "Not quick takes. Fully developed thinking on opportunity, India, technology, and human potential.",
            },
            {
              title: "No filler",
              desc: "Published when there's something worth saying. Not weekly. Not on a schedule. When it's ready.",
            },
            {
              title: "Free, forever",
              desc: "No paywall. No premium tier. The writing is the work — and the work should be accessible.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <div>
                <p className="font-medium mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <NewsletterForm />

        {/* Quote */}
        <div className="mt-16 pt-12 border-t border-border">
          <blockquote className="font-serif text-lg italic text-muted-foreground">
            "The goal is a growing library of long-form thinking that gets more
            useful over time. Not a blog. Not content. A body of work."
          </blockquote>
          <p className="mt-3 text-sm text-muted-foreground">— Manas Majhi</p>
        </div>
      </div>
    </div>
  );
}

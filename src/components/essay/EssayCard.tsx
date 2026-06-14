import Image from "next/image";
import Link from "next/link";
import { EssayMeta, CATEGORY_LABELS, CATEGORY_IMAGES } from "@/types";
import { formatDate, cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface EssayCardProps {
  essay: EssayMeta;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export function EssayCard({
  essay,
  variant = "default",
  className,
}: EssayCardProps) {
  const categoryImage = CATEGORY_IMAGES[essay.category];
  const cardImage = essay.coverImage || categoryImage;

  if (variant === "compact") {
    return (
      <Link href={`/${essay.category}/${essay.slug}`} className="group block">
        <article
          className={cn(
            "flex items-start gap-4 py-5 border-b border-border",
            "hover:border-border/80 transition-colors",
            className
          )}
        >
          {/* Small category thumbnail */}
          <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
            <Image
              src={cardImage}
              alt={CATEGORY_LABELS[essay.category]}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="essay-meta mb-1.5">
              {CATEGORY_LABELS[essay.category]} · {essay.readingTime}
            </div>
            <h3 className="font-serif text-lg font-medium leading-snug text-foreground group-hover:text-accent transition-colors">
              {essay.title}
            </h3>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all mt-1.5 shrink-0" />
        </article>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={`/${essay.category}/${essay.slug}`} className="group block h-full">
        <article className={cn("card-essay h-full flex flex-col overflow-hidden", className)}>
          {/* Category image header */}
          <div className="relative h-52 -mx-0 -mt-0 mb-5 rounded-t-2xl overflow-hidden">
            <Image
              src={cardImage}
              alt={CATEGORY_LABELS[essay.category]}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-4 text-xs uppercase tracking-widest text-white/80">
              {CATEGORY_LABELS[essay.category]}
            </span>
          </div>
          <div className="essay-meta mb-3">
            {formatDate(essay.date)} · {essay.readingTime}
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight mb-4 group-hover:text-accent transition-colors">
            {essay.title}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed flex-1">
            {essay.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent">
            Read essay
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </article>
      </Link>
    );
  }

  // default variant
  return (
    <Link href={`/${essay.category}/${essay.slug}`} className="group block h-full">
      <article className={cn("card-essay h-full flex flex-col overflow-hidden", className)}>
        {/* Category image header */}
        <div className="relative h-40 -mx-0 -mt-0 mb-4 rounded-t-2xl overflow-hidden">
          <Image
            src={cardImage}
            alt={CATEGORY_LABELS[essay.category]}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute bottom-2.5 left-3.5 text-xs uppercase tracking-widest text-white/80">
            {CATEGORY_LABELS[essay.category]}
          </span>
        </div>
        <div className="essay-meta mb-2">
          {formatDate(essay.date)} · {essay.readingTime}
        </div>
        <h3 className="font-serif text-xl font-medium leading-snug mb-3 group-hover:text-accent transition-colors">
          {essay.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
          {essay.excerpt}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {essay.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}

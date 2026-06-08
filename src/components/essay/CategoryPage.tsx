import Image from "next/image";
import { getEssaysByCategory } from "@/lib/essays";
import {
  CATEGORY_LABELS,
  CATEGORY_DESCRIPTIONS,
  CATEGORY_IMAGES,
  EssayCategory,
} from "@/types";
import { EssayCard } from "@/components/essay/EssayCard";

interface CategoryPageProps {
  category: EssayCategory;
}

export function CategoryPage({ category }: CategoryPageProps) {
  const essays = getEssaysByCategory(category);
  const image = CATEGORY_IMAGES[category];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[420px] md:h-[520px] w-full overflow-hidden">
        <Image
          src={image}
          alt={CATEGORY_LABELS[category]}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Text on image */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs uppercase tracking-widest text-white/60 mb-3">
              Collection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight text-white mb-4">
              {CATEGORY_LABELS[category]}
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              {CATEGORY_DESCRIPTIONS[category]}
            </p>
            <p className="mt-4 text-sm text-white/50">
              {essays.length} {essays.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
        </div>
      </div>

      {/* Essays grid */}
      <div className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {essays.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground">
              <p className="font-serif text-2xl mb-2">
                Nothing here yet.
              </p>
              <p className="text-sm">Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {essays.map((essay) => (
                <EssayCard key={essay.slug} essay={essay} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

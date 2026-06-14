import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Essay, EssayMeta, EssayCategory } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "content/essays");

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 238;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes === 1 ? "1 min read" : `${minutes} min read`;
}

export function getEssaySlugs(): string[] {
  try {
    return fs
      .readdirSync(CONTENT_DIR)
      .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
      .map((file) => file.replace(/\.(mdx|md)$/, ""));
  } catch {
    return [];
  }
}

export function getEssayBySlug(slug: string): Essay | null {
  try {
    const extensions = ["mdx", "md"];
    let filePath = "";
    for (const ext of extensions) {
      const candidate = path.join(CONTENT_DIR, `${slug}.${ext}`);
      if (fs.existsSync(candidate)) {
        filePath = candidate;
        break;
      }
    }
    if (!filePath) return null;

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
      category: (data.category as EssayCategory) || "philosophy",
      tags: data.tags || [],
      readingTime: calculateReadingTime(content),
      featured: data.featured || false,
      flagship: data.flagship || false,
      coverImage: data.coverImage || undefined,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllEssays(): Essay[] {
  const slugs = getEssaySlugs();
  return slugs
    .map((slug) => getEssayBySlug(slug))
    .filter((essay): essay is Essay => essay !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllEssayMeta(): EssayMeta[] {
  return getAllEssays().map(({ content: _content, ...meta }) => meta);
}

export function getFeaturedEssays(): EssayMeta[] {
  return getAllEssayMeta().filter((e) => e.featured);
}

export function getFlagshipEssays(): EssayMeta[] {
  return getAllEssayMeta().filter((e) => e.flagship);
}

export function getEssaysByCategory(category: EssayCategory): EssayMeta[] {
  return getAllEssayMeta().filter((e) => e.category === category);
}

export function getLatestEssays(count = 6): EssayMeta[] {
  return getAllEssayMeta().slice(0, count);
}

export function getRelatedEssays(
  essay: EssayMeta,
  count = 3
): EssayMeta[] {
  const all = getAllEssayMeta();
  const related = all
    .filter((e) => e.slug !== essay.slug)
    .map((e) => {
      let score = 0;
      if (e.category === essay.category) score += 3;
      const sharedTags = e.tags.filter((t) => essay.tags.includes(t));
      score += sharedTags.length * 2;
      return { essay: e, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((r) => r.essay);
  return related;
}

// Canonical URL for an essay — /{category}/{slug}
export function getEssayUrl(essay: Pick<EssayMeta, "category" | "slug">): string {
  return `/${essay.category}/${essay.slug}`;
}

// Navigation: prev/next within all essays (sorted by date)
export function getAdjacentEssays(slug: string): {
  prev: EssayMeta | null;
  next: EssayMeta | null;
} {
  const all = getAllEssayMeta();
  const idx = all.findIndex((e) => e.slug === slug);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}

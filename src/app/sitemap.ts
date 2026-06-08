import { MetadataRoute } from "next";
import { getAllEssayMeta } from "@/lib/essays";
import { SITE_URL } from "@/lib/utils";
import { EssayCategory } from "@/types";

const categories: EssayCategory[] = [
  "opportunity",
  "future-of-work",
  "india",
  "odisha",
  "travel",
  "entrepreneurship",
  "philosophy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const essays = getAllEssayMeta();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/start-here`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/writing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/frameworks`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/newsletter`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/timeline`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/elsewhere`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...categories.map((cat) => ({
      url: `${SITE_URL}/writing/${cat}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  const essayPages: MetadataRoute.Sitemap = essays.map((essay) => ({
    url: `${SITE_URL}/writing/${essay.slug}`,
    lastModified: new Date(essay.date),
    changeFrequency: "monthly" as const,
    priority: essay.featured ? 0.9 : 0.7,
  }));

  return [...staticPages, ...essayPages];
}

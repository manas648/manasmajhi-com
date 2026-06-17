import { MetadataRoute } from "next";
import { getAllEssayMeta } from "@/lib/essays";
import { SITE_URL } from "@/lib/utils";
import { EssayCategory } from "@/types";

const categories: EssayCategory[] = [
  "opportunity",
  "future-of-work",
  "india",
  "odisha",
  "kalahandi",
  "travel",
  "entrepreneurship",
  "philosophy",
  "hiring",
  "frameworks",
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
      images: [
        `${SITE_URL}/elsewhere/manas-majhi-odisha-lion.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-staircase.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-koh-phi-phi.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-odisha-temple.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-marble-elephant.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-phi-phi-sunset.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-kolsai-lake.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-kazakhstan-steppe.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-charyn-valley.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-shymbulak.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-charyn-canyon.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-almaty-cafe.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-medeu-arena.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-almaty-tv-tower.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-goa.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-startup-event.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-whiteboard.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-thailand-ferry.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-punjab-festival.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-city-from-plane.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-kaindy-lake-flag.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-beatles-almaty.jpg`,
        `${SITE_URL}/elsewhere/manas-majhi-jaypee-greens-golf.jpg`,
      ],
    },
    {
      url: `${SITE_URL}/recognition`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/library`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/all`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/work-with-me`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/whitepaper`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/the-map`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/now`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...categories.map((cat) => ({
      url: `${SITE_URL}/${cat}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  const essayPages: MetadataRoute.Sitemap = essays.map((essay) => ({
    url: `${SITE_URL}/${essay.category}/${essay.slug}`,
    lastModified: new Date(essay.date),
    changeFrequency: "monthly" as const,
    priority: essay.featured ? 0.9 : 0.7,
  }));

  return [...staticPages, ...essayPages];
}

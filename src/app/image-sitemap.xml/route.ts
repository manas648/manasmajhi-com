import { NextResponse } from "next/server";
import { getAllEssayMeta } from "@/lib/essays";
import { SITE_URL } from "@/lib/utils";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const elsewherePhotos = [
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-odisha-lion.jpg`,
    title: "Manas Majhi — Gold lion statue overlooking Bhubaneswar, Odisha",
    caption: "Bhubaneswar, from above.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-staircase.jpg`,
    title: "Manas Majhi in a Nehru jacket on a staircase",
    caption: "The pocket square was not an accident.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-koh-phi-phi.jpg`,
    title: "Manas Majhi overlooking Koh Phi Phi bay, Thailand",
    caption: "Koh Phi Phi. The view earns the climb.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-odisha-temple.jpg`,
    title: "Manas Majhi in white dhoti beside a red temple, Odisha",
    caption: "Odisha. Some things stay.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-marble-elephant.jpg`,
    title: "Manas Majhi beside a white marble elephant sculpture",
    caption: "Somewhere between one thing and the next.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-phi-phi-sunset.jpg`,
    title: "Manas Majhi — longtail boats at sunset, Phi Phi Islands",
    caption: "The last light over Phi Phi. The boats knew before we did.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-kolsai-lake.jpg`,
    title: "Manas Majhi — Kolsai Lake, Kazakhstan",
    caption: "The best operating system is no Wi-Fi.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-kazakhstan-steppe.jpg`,
    title: "Manas Majhi — horse rider on the Kazakhstan steppe",
    caption: "On the steppe, nobody asks what you do for a living.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-charyn-valley.jpg`,
    title: "Manas Majhi — Charyn Canyon Valley of Castles, Kazakhstan",
    caption: "Red rocks. Zero bandwidth. Peak clarity.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-shymbulak.jpg`,
    title: "Manas Majhi — Shymbulak ski resort above Almaty",
    caption: "The altitude makes everything feel achievable.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-charyn-canyon.jpg`,
    title: "Manas Majhi — Charyn Canyon, Kazakhstan",
    caption: "Standing at the edge helps with perspective. On most things.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-almaty-cafe.jpg`,
    title: "Manas Majhi — street café, Almaty",
    caption: "The meeting happened. The city carried on.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-medeu-arena.jpg`,
    title: "Manas Majhi — Medeu ice skating arena, Almaty",
    caption: "Soviet ambition carved in stone. Some ideas outlast the ideology.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-almaty-tv-tower.jpg`,
    title: "Manas Majhi — Almaty TV Tower panorama",
    caption: "Every city looks manageable from a distance.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-goa.jpg`,
    title: "Manas Majhi on a speedboat in Goa",
    caption: "White shirt, no agenda. Sometimes the best strategy is no strategy.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-startup-event.jpg`,
    title: "Manas Majhi at a startup event",
    caption: "The room had energy. The pocket square had opinions.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-whiteboard.jpg`,
    title: "Manas Majhi at a whiteboard, July 2022",
    caption: "July 2022. Five clients. One whiteboard. The whole thesis in one diagram.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-thailand-ferry.jpg`,
    title: "Manas Majhi on a ferry between Thai islands",
    caption: "Somewhere between islands, watching Thailand disappear behind us.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-punjab-festival.jpg`,
    title: "Manas Majhi at a Punjabi cultural festival",
    caption: "Front row. Bhangra happening behind. Priorities sorted.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-kaindy-lake-flag.jpg`,
    title: "Manas Majhi draped in the Indian flag at Kaindy submerged forest lake, Kazakhstan",
    caption: "Took it further than anyone asked me to.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-beatles-almaty.jpg`,
    title: "Manas Majhi with The Beatles bronze statues, Almaty",
    caption: "Found the fifth Beatle. He is Indian.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-jaypee-greens-golf.jpg`,
    title: "Manas Majhi at Jaypee Greens Golf Club, Greater Noida",
    caption: "Jaypee Greens. The game rewards patience. The business required it first.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-langkawi-eagle.jpg`,
    title: "Manas Majhi at Dataran Lang Eagle Square, Langkawi, Malaysia",
    caption: "Langkawi. The eagle has been here longer than the tourists.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-india-road-trip.jpg`,
    title: "Manas Majhi on an Indian highway road trip",
    caption: "Some of the best thinking happens between cities.",
  },
  {
    url: `${SITE_URL}/elsewhere/manas-majhi-tulips.jpg`,
    title: "Manas Majhi standing in a field of yellow tulips",
    caption: "Yellow and unavoidable.",
  },
];

export function GET() {
  const essays = getAllEssayMeta();

  const essayImages = essays.filter(
    (e) => e.coverImage && e.coverImage.startsWith("https://")
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Elsewhere photo gallery — 25 photos of Manas Majhi -->
  <url>
    <loc>${SITE_URL}/elsewhere</loc>
    ${elsewherePhotos
      .map(
        (p) => `<image:image>
      <image:loc>${p.url}</image:loc>
      <image:title>${escapeXml(p.title)}</image:title>
      <image:caption>${escapeXml(p.caption)}</image:caption>
    </image:image>`
      )
      .join("\n    ")}
  </url>

  <!-- Essay cover images — one per essay page -->
  ${essayImages
    .map(
      (e) => `<url>
    <loc>${SITE_URL}/${e.category}/${e.slug}</loc>
    <image:image>
      <image:loc>${escapeXml(e.coverImage!)}</image:loc>
      <image:title>${escapeXml(e.title)}</image:title>
      <image:caption>${escapeXml(e.excerpt)}</image:caption>
    </image:image>
  </url>`
    )
    .join("\n  ")}

</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

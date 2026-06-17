import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Elsewhere",
  description:
    "Dispatches from the road. Sea and sky — and wherever the work takes me next.",
  alternates: {
    canonical: `${SITE_URL}/elsewhere`,
  },
  openGraph: {
    title: "Elsewhere — Manas Majhi",
    description: "Dispatches from the road. Sea and sky — and wherever the work takes me next.",
    url: `${SITE_URL}/elsewhere`,
    images: [
      {
        url: `${SITE_URL}/elsewhere/manas-majhi-koh-phi-phi.jpg`,
        width: 1169,
        height: 877,
        alt: "Manas Majhi overlooking Koh Phi Phi bay, Thailand",
      },
    ],
  },
};

const photos = [
  {
    src: "/elsewhere/manas-majhi-odisha-lion.jpg",
    alt: "Manas Majhi — gold lion statue overlooking Bhubaneswar, Odisha",
    caption: "Bhubaneswar, from above.",
    width: 864,
    height: 1152,
  },
  {
    src: "/elsewhere/manas-majhi-staircase.jpg",
    alt: "Manas Majhi in a Nehru jacket on a staircase",
    caption: "The pocket square was not an accident.",
    width: 612,
    height: 918,
  },
  {
    src: "/elsewhere/manas-majhi-koh-phi-phi.jpg",
    alt: "Manas Majhi overlooking Koh Phi Phi bay, Thailand",
    caption: "Koh Phi Phi. The view earns the climb.",
    width: 1169,
    height: 877,
  },
  {
    src: "/elsewhere/manas-majhi-odisha-temple.jpg",
    alt: "Manas Majhi in white dhoti beside a red temple, Odisha",
    caption: "Odisha. Some things stay.",
    width: 1170,
    height: 1468,
  },
  {
    src: "/elsewhere/manas-majhi-marble-elephant.jpg",
    alt: "Manas Majhi beside a white marble elephant sculpture",
    caption: "Somewhere between one thing and the next.",
    width: 1170,
    height: 1167,
  },
  {
    src: "/elsewhere/manas-majhi-phi-phi-sunset.jpg",
    alt: "Manas Majhi — longtail boats at sunset, Phi Phi Islands",
    caption: "The last light over Phi Phi. The boats knew before we did.",
    width: 1170,
    height: 1170,
  },
  {
    src: "/elsewhere/manas-majhi-kolsai-lake.jpg",
    alt: "Manas Majhi — Kolsai Lake, Kazakhstan",
    caption: "The best operating system is no Wi-Fi.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/elsewhere/manas-majhi-kazakhstan-steppe.jpg",
    alt: "Manas Majhi — horse rider on the Kazakhstan steppe",
    caption: "On the steppe, nobody asks what you do for a living.",
    width: 3725,
    height: 3022,
  },
  {
    src: "/elsewhere/manas-majhi-charyn-valley.jpg",
    alt: "Manas Majhi — Charyn Canyon Valley of Castles, Kazakhstan",
    caption: "Red rocks. Zero bandwidth. Peak clarity.",
    width: 870,
    height: 645,
  },
  {
    src: "/elsewhere/manas-majhi-shymbulak.jpg",
    alt: "Manas Majhi — Shymbulak ski resort above Almaty",
    caption: "The altitude makes everything feel achievable.",
    width: 1237,
    height: 1280,
  },
  {
    src: "/elsewhere/manas-majhi-charyn-canyon.jpg",
    alt: "Manas Majhi — Charyn Canyon, Kazakhstan",
    caption: "Standing at the edge helps with perspective. On most things.",
    width: 1200,
    height: 1600,
  },
  {
    src: "/elsewhere/manas-majhi-almaty-cafe.jpg",
    alt: "Manas Majhi — street café, Almaty",
    caption: "The meeting happened. The city carried on.",
    width: 4032,
    height: 3024,
  },
  {
    src: "/elsewhere/manas-majhi-medeu-arena.jpg",
    alt: "Manas Majhi — Medeu ice skating arena, Almaty",
    caption: "Soviet ambition carved in stone. Some ideas outlast the ideology.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/elsewhere/manas-majhi-almaty-tv-tower.jpg",
    alt: "Manas Majhi — Almaty TV Tower panorama",
    caption: "Every city looks manageable from a distance.",
    width: 866,
    height: 649,
  },
  {
    src: "/elsewhere/manas-majhi-goa.jpg",
    alt: "Manas Majhi on a speedboat in Goa",
    caption: "White shirt, no agenda. Sometimes the best strategy is no strategy.",
    width: 1170,
    height: 780,
  },
  {
    src: "/elsewhere/manas-majhi-startup-event.jpg",
    alt: "Manas Majhi at a startup event",
    caption: "The room had energy. The pocket square had opinions.",
    width: 900,
    height: 1170,
  },
  {
    src: "/elsewhere/manas-majhi-whiteboard.jpg",
    alt: "Manas Majhi at a whiteboard, July 2022",
    caption: "July '22. Five clients. One whiteboard. The whole thesis in one diagram.",
    width: 960,
    height: 1280,
  },
  {
    src: "/elsewhere/manas-majhi-thailand-ferry.jpg",
    alt: "Manas Majhi on a ferry between Thai islands",
    caption: "Somewhere between islands, watching Thailand disappear behind us.",
    width: 1170,
    height: 920,
  },
  {
    src: "/elsewhere/manas-majhi-punjab-festival.jpg",
    alt: "Manas Majhi at a Punjabi cultural festival",
    caption: "Front row. Bhangra happening behind. Priorities sorted.",
    width: 1170,
    height: 1166,
  },
  {
    src: "/elsewhere/manas-majhi-city-from-plane.jpg",
    alt: "Aerial night view of a city from a plane window — Manas Majhi",
    caption: "Cities look like circuits from up here. Which is more or less what they are.",
    width: 1112,
    height: 1280,
  },
  {
    src: "/elsewhere/manas-majhi-kaindy-lake-flag.jpg",
    alt: "Manas Majhi draped in the Indian flag at a submerged forest lake",
    caption: "Took it further than anyone asked me to.",
    width: 1438,
    height: 921,
  },
  {
    src: "/elsewhere/manas-majhi-beatles-almaty.jpg",
    alt: "Manas Majhi with The Beatles bronze statues",
    caption: "Found the fifth Beatle. He's Indian.",
    width: 1086,
    height: 1280,
  },
];

const imageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Elsewhere — Manas Majhi",
  description: "Dispatches from the road. Sea and sky — and wherever the work takes me next.",
  url: `${SITE_URL}/elsewhere`,
  author: {
    "@type": "Person",
    name: "Manas Majhi",
    url: SITE_URL,
  },
  image: photos.map((photo) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${photo.src}`,
    url: `${SITE_URL}/elsewhere`,
    name: photo.alt,
    description: photo.caption,
    width: photo.width,
    height: photo.height,
    author: {
      "@type": "Person",
      name: "Manas Majhi",
    },
  })),
};

export default function ElsewherePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4">Travel</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Elsewhere
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Dispatches from the road. Sea and sky — and wherever the work takes me next.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {photos.map((photo, index) => (
            <div key={photo.src} className="break-inside-avoid mb-6">
              <div className="overflow-hidden rounded-2xl bg-muted group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.025]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>
              <div className="mt-3 px-0.5">
                <p className="text-sm leading-snug text-muted-foreground">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="font-serif text-lg text-muted-foreground italic">
            "The world rewards people who show up — to the meeting, to the
            mountain, to the unknown city with no plan."
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

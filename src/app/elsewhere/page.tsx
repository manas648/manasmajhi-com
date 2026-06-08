import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Elsewhere",
  description:
    "Dispatches from the road. Kazakhstan, Thailand, India, and wherever the work takes me next.",
};

const photos = [
  {
    src: "/elsewhere/kolsai-lake.jpg",
    alt: "Kolsai Lake, Kazakhstan",
    location: "Kolsai Lakes, Kazakhstan",
    caption: "The best operating system is no Wi-Fi.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/elsewhere/horse-rider.jpg",
    alt: "Horse rider on the Kazakhstan steppe",
    location: "Kazakhstan",
    caption: "On the steppe, nobody asks what you do for a living.",
    width: 3725,
    height: 3022,
  },
  {
    src: "/elsewhere/charyn-valley.jpg",
    alt: "Charyn Canyon Valley of Castles, Kazakhstan",
    location: "Charyn Canyon, Kazakhstan",
    caption: "Red rocks. Zero bandwidth. Peak clarity.",
    width: 870,
    height: 645,
  },
  {
    src: "/elsewhere/shymbulak-snow.jpg",
    alt: "Shymbulak ski resort above Almaty",
    location: "Shymbulak, Kazakhstan — 3,200m",
    caption: "The altitude makes everything feel achievable.",
    width: 1237,
    height: 1280,
  },
  {
    src: "/elsewhere/charyn-canyon.jpg",
    alt: "Charyn Canyon, Kazakhstan",
    location: "Charyn Canyon, Kazakhstan",
    caption: "Standing at the edge helps with perspective. On most things.",
    width: 1200,
    height: 1600,
  },
  {
    src: "/elsewhere/almaty-cafe.jpg",
    alt: "Street café, Almaty",
    location: "Almaty, Kazakhstan",
    caption: "The meeting happened. The city carried on.",
    width: 4032,
    height: 3024,
  },
  {
    src: "/elsewhere/medeu-arena.jpg",
    alt: "Medeu ice skating arena, Almaty",
    location: "Medeu, Almaty, Kazakhstan",
    caption: "Soviet ambition carved in stone. Some ideas outlast the ideology.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/elsewhere/almaty-tv-tower.jpg",
    alt: "Almaty TV Tower panorama",
    location: "Almaty, Kazakhstan",
    caption: "Every city looks manageable from a distance.",
    width: 866,
    height: 649,
  },
];

export default function ElsewherePage() {
  return (
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
          {photos.map((photo) => (
            <div key={photo.src} className="break-inside-avoid mb-6">
              <div className="overflow-hidden rounded-2xl bg-muted group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.025]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
  );
}

import Link from "next/link";

const AUTHOR_PHOTOS = [
  "/author/photo-1.jpg",
  "/author/photo-2.jpg",
  "/author/photo-3.jpg",
  "/author/photo-4.jpg",
];

// Deterministic per-post: same slug always picks same photo
function getPhotoIndex(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) & 0xffffffff;
  }
  return Math.abs(hash) % AUTHOR_PHOTOS.length;
}

export function AuthorCard({ slug }: { slug: string }) {
  const photoSrc = AUTHOR_PHOTOS[getPhotoIndex(slug)];

  return (
    <div className="flex items-center gap-3 py-5">
      <Link href="/about" className="shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt="Manas Majhi"
          width={44}
          height={44}
          className="rounded-full object-cover w-11 h-11 ring-2 ring-border"
        />
      </Link>
      <div>
        <Link
          href="/about"
          className="font-medium text-sm hover:text-accent transition-colors"
        >
          Manas Majhi
        </Link>
        <p className="text-xs text-muted-foreground mt-0.5">
          Founder, Majhi Group &amp; Majhi OS
        </p>
      </div>
    </div>
  );
}

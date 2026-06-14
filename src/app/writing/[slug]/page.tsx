import { notFound, permanentRedirect } from "next/navigation";
import { getEssayBySlug, getEssaySlugs } from "@/lib/essays";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }));
}

export default async function WritingSlugRedirect({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) notFound();
  permanentRedirect(`/${essay.category}/${essay.slug}`);
}

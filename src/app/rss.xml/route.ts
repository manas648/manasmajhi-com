import { getAllEssays } from "@/lib/essays";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  AUTHOR_NAME,
} from "@/lib/utils";
import { CATEGORY_LABELS } from "@/types";

export async function GET() {
  const essays = getAllEssays();

  const items = essays
    .slice(0, 20)
    .map((essay) => {
      const url = `${SITE_URL}/essays/${essay.slug}`;
      const pubDate = new Date(essay.date).toUTCString();
      const category = CATEGORY_LABELS[essay.category];

      return `    <item>
      <title><![CDATA[${essay.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${essay.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>manas@majhigroup.com (${AUTHOR_NAME})</author>
      <category>${category}</category>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-us</language>
    <managingEditor>manas@majhigroup.com (${AUTHOR_NAME})</managingEditor>
    <webMaster>manas@majhigroup.com (${AUTHOR_NAME})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/og.png</url>
      <title>${SITE_NAME}</title>
      <link>${SITE_URL}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}

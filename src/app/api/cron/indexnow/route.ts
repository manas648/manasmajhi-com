import { NextResponse } from "next/server";

const INDEXNOW_KEY = "0463c309f62647a89d1075955c121505";
const SITE_HOST = "www.manasmajhi.com";

export async function GET(req: Request) {
  // Vercel cron jobs send Authorization: Bearer <CRON_SECRET>
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch the live sitemap
  let sitemapXml: string;
  try {
    const res = await fetch(`https://${SITE_HOST}/sitemap.xml`, {
      next: { revalidate: 0 },
    });
    sitemapXml = await res.text();
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch sitemap", detail: String(err) },
      { status: 500 }
    );
  }

  // Parse <loc> URLs from the sitemap
  const urls = Array.from(sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g), (m) => m[1]);

  if (urls.length === 0) {
    return NextResponse.json({ error: "No URLs found in sitemap" }, { status: 400 });
  }

  // Submit to IndexNow (Bing)
  const body = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const indexNowRes = await fetch("https://www.bing.com/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return NextResponse.json({
    success: indexNowRes.ok,
    status: indexNowRes.status,
    urlCount: urls.length,
    submittedAt: new Date().toISOString(),
  });
}

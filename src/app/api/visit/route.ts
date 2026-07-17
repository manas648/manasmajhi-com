import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;
const SEED = 11111;
const KEY = "site:visits";

const NO_CACHE = {
  "Cache-Control": "no-store, no-cache, must-revalidate",
  "CDN-Cache-Control": "no-store",
  "Cloudflare-CDN-Cache-Control": "no-store",
};

// POST — never cached by Cloudflare or any CDN
export async function POST() {
  if (!KV_URL || !KV_TOKEN) {
    return NextResponse.json({ count: SEED }, { headers: NO_CACHE });
  }

  try {
    const res = await fetch(`${KV_URL}/incr/${KEY}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
      },
      cache: "no-store",
    });

    const data = await res.json();
    const count = typeof data.result === "number" ? data.result + SEED : SEED;
    return NextResponse.json({ count }, { headers: NO_CACHE });
  } catch {
    return NextResponse.json({ count: SEED }, { headers: NO_CACHE });
  }
}

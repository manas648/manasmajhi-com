import { NextResponse } from "next/server";

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;
const SEED = 11111;
const KEY = "site:visits";

const NO_CACHE = { "Cache-Control": "no-store, no-cache, must-revalidate" };

export async function GET() {
  // If KV isn't configured, return seed so the counter still shows
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

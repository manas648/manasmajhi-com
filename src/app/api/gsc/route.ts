/**
 * GET /api/gsc
 *
 * Fetches Google Search Console performance data for manasmajhi.com.
 * Returns top queries and top pages over the last 90 days.
 *
 * SETUP REQUIRED — Manas must do this once:
 * 1. Go to https://console.cloud.google.com and create a project (or use an existing one)
 * 2. Enable the "Google Search Console API" for that project
 * 3. Create a Service Account: IAM & Admin → Service Accounts → Create
 * 4. Generate a JSON key for the service account: Keys → Add Key → JSON
 * 5. In Google Search Console (search.google.com/search-console):
 *    - Open manasmajhi.com property → Settings → Users and permissions
 *    - Add the service account email (xxx@xxx.iam.gserviceaccount.com) as a Restricted user
 * 6. In Vercel project settings → Environment Variables, add:
 *    GOOGLE_SERVICE_ACCOUNT_JSON = (paste the entire contents of the JSON key file)
 *    GSC_SITE_URL = sc-domain:manasmajhi.com
 *
 * Once that's done, hitting /api/gsc returns live search performance data.
 */

import { NextResponse } from "next/server";

// Lazy-load to avoid build errors when package isn't installed yet
async function getSearchConsole() {
  const { google } = await import("googleapis");
  return google;
}

export async function GET() {
  const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const siteUrl = process.env.GSC_SITE_URL ?? "sc-domain:manasmajhi.com";

  if (!credentialsJson) {
    return NextResponse.json(
      {
        error: "GSC not configured",
        setup: "Set GOOGLE_SERVICE_ACCOUNT_JSON in Vercel environment variables. See /api/gsc/route.ts for full instructions.",
      },
      { status: 503 }
    );
  }

  try {
    const google = await getSearchConsole();
    const credentials = JSON.parse(credentialsJson);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
    });

    const searchconsole = google.searchconsole({ version: "v1", auth });

    const endDate = new Date().toISOString().split("T")[0];
    const startDate = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    const [queriesRes, pagesRes, summaryRes] = await Promise.all([
      // Top queries by clicks (GSC returns sorted by clicks descending by default)
      searchconsole.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: ["query"],
          rowLimit: 25,
        },
      }),
      // Top pages by clicks
      searchconsole.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: ["page"],
          rowLimit: 25,
        },
      }),
      // Overall totals (no dimension = site-wide aggregate)
      searchconsole.searchanalytics.query({
        siteUrl,
        requestBody: {
          startDate,
          endDate,
          dimensions: [],
          rowLimit: 1,
        },
      }),
    ]);

    const totals = summaryRes.data.rows?.[0] ?? null;

    return NextResponse.json({
      dateRange: { startDate, endDate },
      totals: totals
        ? {
            clicks: totals.clicks,
            impressions: totals.impressions,
            ctr: totals.ctr ? `${(totals.ctr * 100).toFixed(1)}%` : null,
            position: totals.position ? totals.position.toFixed(1) : null,
          }
        : null,
      topQueries: (queriesRes.data.rows ?? []).map((row) => ({
        query: row.keys?.[0],
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: row.ctr ? `${(row.ctr * 100).toFixed(1)}%` : null,
        position: row.position ? row.position.toFixed(1) : null,
      })),
      topPages: (pagesRes.data.rows ?? []).map((row) => ({
        page: row.keys?.[0],
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: row.ctr ? `${(row.ctr * 100).toFixed(1)}%` : null,
        position: row.position ? row.position.toFixed(1) : null,
      })),
    });
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}

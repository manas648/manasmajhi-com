import { NextResponse } from 'next/server'

const KEY = '0463c309f62647a89d1075955c121505'
const HOST = 'www.manasmajhi.com'
const BASE = 'https://www.manasmajhi.com'

const URLS = [
  `${BASE}/`,
  `${BASE}/about`,
  `${BASE}/writing`,
  `${BASE}/start-here`,
  `${BASE}/writing/entrepreneurship`,
  `${BASE}/writing/future-of-work`,
  `${BASE}/writing/hiring`,
  `${BASE}/writing/india`,
  `${BASE}/writing/odisha`,
  `${BASE}/writing/opportunity`,
  `${BASE}/writing/philosophy`,
  `${BASE}/writing/travel`,
  `${BASE}/writing/a-love-letter-to-odisha`,
  `${BASE}/writing/ai-and-human-potential`,
  `${BASE}/writing/beyond-gdp-what-a-developed-odisha-must-be-answerable-for`,
  `${BASE}/writing/building-a-global-business-from-odisha`,
  `${BASE}/writing/building-for-a-billion-people`,
  `${BASE}/writing/building-from-kalahandi`,
  `${BASE}/writing/building-through-uncertainty`,
  `${BASE}/writing/can-bhubaneswar-become-an-ai-city`,
  `${BASE}/writing/contentment-vs-success`,
  `${BASE}/writing/digital-public-infrastructure`,
  `${BASE}/writing/founder-lessons-from-the-frontline`,
  `${BASE}/writing/gen-ai-wont-replace-recruiters`,
  `${BASE}/writing/growing-up-in-an-odia-medium-school`,
  `${BASE}/writing/have-they-done-this-before`,
  `${BASE}/writing/how-4g-changed-india`,
  `${BASE}/writing/improving-lives-with-new-opportunities`,
  `${BASE}/writing/indias-ai-opportunity`,
  `${BASE}/writing/indias-greatest-asset-is-its-people`,
  `${BASE}/writing/intelligence-hiring-vs-traditional-hiring`,
  `${BASE}/writing/langkawi-the-day-everything-looked-perfect`,
  `${BASE}/writing/learning-from-people`,
  `${BASE}/writing/lessons-from-airports`,
  `${BASE}/writing/long-term-thinking-in-a-short-term-world`,
  `${BASE}/writing/midnight-calls-and-invisible-sacrifices`,
  `${BASE}/writing/odishas-untapped-potential`,
  `${BASE}/writing/one-year-later`,
  `${BASE}/writing/opportunity-and-mobility-in-modern-india`,
  `${BASE}/writing/opportunity-changes-lives`,
  `${BASE}/writing/people-are-more-similar-than-different`,
  `${BASE}/writing/showing-friends-around-odisha`,
  `${BASE}/writing/state-capacity-is-the-ultimate-competitive-advantage`,
  `${BASE}/writing/stories-from-the-road`,
  `${BASE}/writing/talent-is-evenly-distributed`,
  `${BASE}/writing/the-cost-of-hiring-the-wrong-leader`,
  `${BASE}/writing/the-evolution-of-my-thinking`,
  `${BASE}/writing/the-first-international-client`,
  `${BASE}/writing/the-future-belongs-to-operational-intelligence`,
  `${BASE}/writing/the-future-of-executive-search`,
  `${BASE}/writing/the-future-of-indian-cities`,
  `${BASE}/writing/the-future-of-odisha`,
  `${BASE}/writing/the-india-i-see`,
  `${BASE}/writing/the-joy-of-growing-something-from-scratch`,
  `${BASE}/writing/the-kalahandi-most-people-never-see`,
  `${BASE}/writing/the-most-underrated-innovation-in-india`,
  `${BASE}/writing/the-next-decade-of-work`,
  `${BASE}/writing/the-reality-behind-overnight-success`,
  `${BASE}/writing/the-rise-of-hiring-system-health`,
  `${BASE}/writing/tourism-as-an-economic-engine`,
  `${BASE}/writing/what-am-i-building`,
  `${BASE}/writing/what-am-i-learning`,
  `${BASE}/writing/what-automation-cannot-replace`,
  `${BASE}/writing/what-changed-my-mind-this-year`,
  `${BASE}/writing/what-good-policy-actually-looks-like`,
  `${BASE}/writing/what-odisha-gets-right`,
  `${BASE}/writing/what-travel-teaches-us-about-home`,
  `${BASE}/writing/what-was-i-wrong-about`,
  `${BASE}/writing/why-executive-hires-fail`,
  `${BASE}/writing/why-food-matters-more-than-we-think`,
  `${BASE}/writing/why-hiring-is-becoming-infrastructure`,
  `${BASE}/writing/why-i-build`,
  `${BASE}/writing/why-i-keep-talking-about-odisha`,
  `${BASE}/writing/why-indias-scale-matters`,
  `${BASE}/writing/why-infrastructure-matters-more-than-headlines`,
  `${BASE}/writing/why-most-founders-quit-too-early`,
]

export async function GET() {
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${BASE}/${KEY}.txt`,
        urlList: URLS,
      }),
    })

    return NextResponse.json({
      status: res.status,
      statusText: res.statusText,
      urlsSubmitted: URLS.length,
      message: res.ok ? 'IndexNow submission accepted' : 'IndexNow returned an error',
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

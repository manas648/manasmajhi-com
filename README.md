# ManasMajhi.com

A digital library of essays, ideas, frameworks, and long-form thinking by Manas Majhi.

**Design philosophy:** essay-first, reading-first, typography-first, minimal, timeless, fast, SEO-focused.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX (in `/content/essays/`)
- **Hosting:** Vercel
- **Themes:** Dark + light mode via `next-themes`

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding Essays

Essays live in `/content/essays/` as `.mdx` files.

### Frontmatter

```yaml
---
title: "Your Essay Title"
excerpt: "One paragraph that captures the essay — shown in cards and SEO."
date: "2024-01-15"
category: "opportunity"         # see categories below
tags: ["tag1", "tag2", "tag3"]
featured: true                  # shows in homepage hero rotation
flagship: true                  # appears in Start Here page
---
```

### Categories

| Category | Slug | Description |
|---|---|---|
| Opportunity | `opportunity` | The primary collection |
| Future of Work | `future-of-work` | AI, hiring, leadership |
| India | `india` | Infrastructure, tech, policy |
| Odisha | `odisha` | Development, culture, tourism |
| Travel | `travel` | Perspective, identity, people |
| Entrepreneurship | `entrepreneurship` | Building, execution, long-term |
| Philosophy | `philosophy` | Learning, identity, growth |

### File naming

Use lowercase, hyphenated slugs:
```
content/essays/my-essay-title.mdx
```

The filename becomes the URL: `/essays/my-essay-title`

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── start-here/page.tsx
│   ├── frameworks/page.tsx
│   ├── timeline/page.tsx
│   ├── work/page.tsx
│   ├── newsletter/page.tsx
│   ├── essays/
│   │   ├── page.tsx            # All essays
│   │   ├── [slug]/page.tsx     # Individual essay
│   │   ├── opportunity/page.tsx
│   │   ├── india/page.tsx
│   │   ├── odisha/page.tsx
│   │   ├── future-of-work/page.tsx
│   │   ├── travel/page.tsx
│   │   ├── entrepreneurship/page.tsx
│   │   └── philosophy/page.tsx
│   ├── api/og/route.tsx        # Dynamic OG images
│   ├── rss.xml/route.ts        # RSS feed
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts
├── components/
│   ├── layout/                 # Nav, Footer, ThemeToggle, Providers
│   ├── essay/                  # EssayCard, CategoryPage
│   ├── home/                   # Home-specific components
│   └── ui/                     # SectionHeader, NewsletterForm
├── lib/
│   ├── essays.ts               # Content loading utilities
│   └── utils.ts                # Helpers, constants
└── types/
    └── index.ts                # TypeScript types

content/
└── essays/                     # ← All your .mdx files go here
```

---

## Deploying to Vercel

### First deploy

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no config needed
4. Click **Deploy**

### Environment variables (optional)

None required for base functionality. Add if connecting newsletter provider:

```
CONVERTKIT_API_KEY=xxx
BEEHIIV_API_KEY=xxx
```

### Custom domain

In Vercel dashboard → Project → Settings → Domains → Add `manasmajhi.com`

---

## SEO Features

- ✅ Dynamic `sitemap.xml` at `/sitemap.xml`
- ✅ `robots.txt` at `/robots.txt`
- ✅ RSS feed at `/rss.xml`
- ✅ Dynamic Open Graph images at `/api/og`
- ✅ Full Twitter Card support
- ✅ JSON-LD schema on essay pages
- ✅ Canonical URLs on all pages
- ✅ Per-essay metadata (title, description, date, author)

---

## Newsletter

The `NewsletterForm` component is wired up but needs a backend. To connect:

1. Pick a provider (Beehiiv, ConvertKit, Resend)
2. Edit `src/components/ui/NewsletterForm.tsx`
3. Replace the fake `await` with a real API call

---

## Launch Checklist

### Before launch

- [ ] Replace `manasmajhi.com` in `src/lib/utils.ts` with actual domain
- [ ] Add `public/og.png` — 1200×630 fallback OG image
- [ ] Add `public/favicon.ico` and `public/apple-touch-icon.png`
- [ ] Add actual essays to `content/essays/`
- [ ] Connect newsletter provider in `NewsletterForm.tsx`
- [ ] Set up Google Analytics or Plausible (optional)
- [ ] Test dark mode on all pages
- [ ] Run Lighthouse audit — target > 95 on all scores
- [ ] Test RSS feed at `/rss.xml`
- [ ] Test sitemap at `/sitemap.xml`
- [ ] Submit sitemap to Google Search Console

### Content checklist

- [ ] At least 5 essays published before launch
- [ ] Featured essay set (`featured: true` in frontmatter)
- [ ] Flagship essays set for Start Here page
- [ ] About page reviewed and personalized
- [ ] Timeline accurate and complete

### Technical checklist

- [ ] `npm run build` succeeds with no errors
- [ ] All pages load correctly in production
- [ ] Dark/light mode works on all pages
- [ ] Mobile navigation works
- [ ] OG images generate correctly at `/api/og`
- [ ] No broken links in footer or nav

---

## Content Ingestion (Bulk Upload)

To add your existing essays:

1. Convert each essay to `.mdx` format
2. Add frontmatter (title, excerpt, date, category, tags)
3. Drop files in `content/essays/`
4. Run `npm run build` — essays are automatically picked up

No database. No CMS. No config changes. The file system is the CMS.

---

## Performance Notes

- All pages are statically generated at build time
- No client-side data fetching for content
- Images use `next/image` with WebP/AVIF optimization
- Fonts load from Google Fonts with `display=swap`
- Target: Lighthouse Performance > 95

---

*Built for a decade of writing.*

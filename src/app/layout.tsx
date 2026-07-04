import type { Metadata } from "next";
import { Providers } from "@/components/layout/Providers";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  SITE_URL,
  AUTHOR_NAME,
  AUTHOR_TWITTER,
} from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  keywords: [
    "Manas Majhi",
    "Manas Ranjan Majhi",
    "Maanas Ranjan Majhi",
    "Manas Majhi Majhi Group",
    "Manas Majhi Majhi OS",
    "Manas Majhi India",
    "Manas Majhi Odisha",
    "Manas Majhi Kalahandi",
    "Manas Majhi Indian Achievers Award",
    "Manas Majhi World Staffing Leader",
    "Manas Majhi HackerNoon Startup of the Year",
    "Manas Majhi manasmajhi.com",
    "Majhi Group",
    "Majhi OS",
    "executive search",
    "hiring infrastructure",
    "opportunity",
    "articles",
    "India",
    "Odisha",
    "Kalahandi",
    "Indian Achievers Award",
    "World Staffing Leader",
    "HackerNoon Startup of the Year",
    "human potential",
    "technology",
    "entrepreneurship",
    "philosophy",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/api/og?title=Opportunity+Shapes+Outcomes`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: AUTHOR_TWITTER,
    creator: AUTHOR_TWITTER,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/api/og?title=Opportunity+Shapes+Outcomes`],
  },
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}/rss.xml`,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Manas Majhi",
  alternateName: ["Manas Ranjan Majhi", "Maanas Ranjan Majhi"],
  url: SITE_URL,
  image: `${SITE_URL}/headshot.jpg`,
  jobTitle: "Founder",
  description:
    "Manas Majhi is the founder of Majhi Group (executive search) and Majhi OS (autonomous hiring operations infrastructure). Writer on opportunity, India, and systems that shape human potential.",
  worksFor: [
    {
      "@type": "Organization",
      name: "Majhi Group",
      url: "https://majhigroup.com",
    },
    {
      "@type": "Organization",
      name: "Majhi OS",
      url: "https://majhi.tech",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/manasmajhi",
    "https://twitter.com/manasmajhi",
    "https://instagram.com/manas.majhi56",
    "https://majhigroup.com",
    "https://majhi.tech",
    "https://www.wikidata.org/wiki/Q140134809",
    "https://www.crunchbase.com/person/manas-majhi",
    "https://hackernoon.com/company/majhigroup",
    "https://www.candidately.com/directory/person/maanas-majhi",
    "https://www.candidately.com/blog/interview-with-manas-majhi",
    "https://www.candidately.com/worldstaffingsummit/awards/meet-all-staffing-leaders/maanas-majhi",
  ],
  knowsAbout: [
    "Executive Search",
    "Hiring Operations",
    "Opportunity and Human Potential",
    "India and Odisha Development",
    "Entrepreneurship",
  ],
  birthPlace: {
    "@type": "Place",
    name: "Kalahandi, Odisha, India",
  },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Executive Search Consultant",
      description: "Retained executive search for VP and C-suite leaders",
      occupationLocation: { "@type": "Country", name: "India" },
    },
    {
      "@type": "Occupation",
      name: "Technology Entrepreneur",
      description: "Founder building autonomous hiring operations infrastructure",
      occupationLocation: { "@type": "Country", name: "India" },
    },
  ],
  award: [
    "Indian Achievers Award 2022 — Entrepreneur of the Year, Indian Achievers' Forum",
    "Top 100 Staffing Leaders 2024 Rank #18 — World Staffing Summit, World Staffing Leader",
    "Top 100 Staffing Leaders 2023 Rank #87 — World Staffing Summit, World Staffing Leader",
    "HackerNoon Startups of the Year 2023 — North America",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Manas Majhi",
  description: SITE_DESCRIPTION,
  author: { "@id": `${SITE_URL}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/writing?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Manas Majhi",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/headshot.jpg`,
    width: 376,
    height: 550,
  },
  founder: { "@id": `${SITE_URL}/#person` },
  description:
    "Articles on opportunity, hiring systems, India, and human potential. Founded by Manas Majhi, founder of Majhi Group and Majhi OS.",
  sameAs: [
    "https://www.linkedin.com/in/manasmajhi",
    "https://twitter.com/manasmajhi",
    "https://majhigroup.com",
    "https://majhi.tech",
    "https://www.wikidata.org/wiki/Q140134809",
    "https://www.crunchbase.com/person/manas-majhi",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${SITE_NAME} RSS Feed`}
          href="/rss.xml"
        />
        <link rel="me" href="https://www.linkedin.com/in/manasmajhi" />
        <link
          rel="alternate"
          type="text/plain"
          title="LLMs.txt — AI-readable site index"
          href="/llms.txt"
        />
        <script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Providers>
          <Nav />
          <main className="pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

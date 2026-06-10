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
    "Majhi Group",
    "Majhi OS",
    "executive search",
    "hiring infrastructure",
    "opportunity",
    "essays",
    "India",
    "Odisha",
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
    canonical: SITE_URL,
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
  ],
  knowsAbout: [
    "Executive Search",
    "Hiring Operations",
    "Opportunity and Human Potential",
    "India and Odisha Development",
    "Entrepreneurship",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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

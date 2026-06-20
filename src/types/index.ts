export interface FAQ {
  question: string;
  answer: string;
}

export interface Essay {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: EssayCategory;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  flagship?: boolean;
  coverImage?: string;
  coverImageCaption?: string;
  coverImageCredit?: string;
  faqs?: FAQ[];
  hidden?: boolean;
  content: string;
}

export interface EssayMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: EssayCategory;
  tags: string[];
  readingTime: string;
  featured?: boolean;
  flagship?: boolean;
  coverImage?: string;
  coverImageCaption?: string;
  coverImageCredit?: string;
  faqs?: FAQ[];
  hidden?: boolean;
}

export type EssayCategory =
  | "opportunity"
  | "future-of-work"
  | "india"
  | "odisha"
  | "kalahandi"
  | "travel"
  | "entrepreneurship"
  | "philosophy"
  | "hiring"
  | "frameworks";

export const CATEGORY_LABELS: Record<EssayCategory, string> = {
  opportunity: "Opportunity",
  "future-of-work": "Future of Work",
  india: "India",
  odisha: "Odisha",
  kalahandi: "Kalahandi",
  travel: "Travel",
  entrepreneurship: "Entrepreneurship",
  philosophy: "Philosophy",
  hiring: "Hiring",
  frameworks: "Frameworks",
};

export const CATEGORY_IMAGES: Record<EssayCategory, string> = {
  opportunity: "/categories/opportunity.jpg",
  "future-of-work": "/categories/future-of-work.jpg",
  india: "/categories/india.jpg",
  odisha: "/categories/odisha.jpg",
  kalahandi: "https://images.unsplash.com/photo-1474221550179-c492fb337327?auto=format&fit=crop&w=1200&q=80",
  travel: "/categories/travel.jpg",
  entrepreneurship: "/categories/entrepreneurship.jpg",
  philosophy: "/categories/philosophy.jpg",
  hiring: "/categories/hiring.jpg",
  frameworks: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=1200&q=80",
};

export const CATEGORY_DESCRIPTIONS: Record<EssayCategory, string> = {
  opportunity:
    "On how opportunity shapes lives, societies, and the arc of human progress.",
  "future-of-work":
    "AI, automation, and how the nature of work is being transformed.",
  india:
    "Infrastructure, technology, policy, and the making of a new India.",
  odisha:
    "Development, tourism, culture, and the untapped potential of a remarkable state.",
  kalahandi:
    "Where I come from, what it taught me, and why it still shapes how I think about everything.",
  travel:
    "What crossing borders teaches us about perspective, people, and identity.",
  entrepreneurship:
    "Building things, executing with conviction, and thinking long-term.",
  philosophy:
    "On learning, identity, perspective, and the examined life.",
  hiring:
    "Why executive hiring fails, what better looks like, and the infrastructure that fixes it.",
  frameworks:
    "Mental models for thinking about opportunity, hiring, and human potential.",
};

export interface Collection {
  id: string;
  title: string;
  description: string;
  essays: string[]; // slugs
  tags: string[];
}

export interface ReadingPath {
  id: string;
  title: string;
  description: string;
  essays: string[]; // slugs in order
}

export interface Framework {
  id: string;
  title: string;
  tagline: string;
  description: string;
  steps: string[];
  color: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  location?: string;
  type: "origin" | "education" | "career" | "company" | "milestone" | "writing";
}

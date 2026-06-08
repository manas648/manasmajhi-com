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
}

export type EssayCategory =
  | "opportunity"
  | "future-of-work"
  | "india"
  | "odisha"
  | "travel"
  | "entrepreneurship"
  | "philosophy";

export const CATEGORY_LABELS: Record<EssayCategory, string> = {
  opportunity: "Opportunity",
  "future-of-work": "Future of Work",
  india: "India",
  odisha: "Odisha",
  travel: "Travel",
  entrepreneurship: "Entrepreneurship",
  philosophy: "Philosophy",
};

export const CATEGORY_IMAGES: Record<EssayCategory, string> = {
  opportunity: "/categories/opportunity.jpg",
  "future-of-work": "/categories/future-of-work.jpg",
  india: "/categories/india.jpg",
  odisha: "/categories/odisha.jpg",
  travel: "/categories/travel.jpg",
  entrepreneurship: "/categories/entrepreneurship.jpg",
  philosophy: "/categories/philosophy.jpg",
};

export const CATEGORY_DESCRIPTIONS: Record<EssayCategory, string> = {
  opportunity:
    "On how opportunity shapes lives, societies, and the arc of human progress.",
  "future-of-work":
    "AI, hiring, leadership, and how the nature of work is being transformed.",
  india:
    "Infrastructure, technology, policy, and the making of a new India.",
  odisha:
    "Development, tourism, culture, and the untapped potential of a remarkable state.",
  travel:
    "What crossing borders teaches us about perspective, people, and identity.",
  entrepreneurship:
    "Building things, executing with conviction, and thinking long-term.",
  philosophy:
    "On learning, identity, perspective, and the examined life.",
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

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  try {
    const date = parseISO(dateString);
    return format(date, "MMMM d, yyyy");
  } catch {
    return dateString;
  }
}

export function formatDateShort(dateString: string): string {
  try {
    const date = parseISO(dateString);
    return format(date, "MMM yyyy");
  } catch {
    return dateString;
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "…";
}

export const SITE_URL = "https://manasmajhi.com";
export const SITE_NAME = "Manas Majhi";
export const SITE_TAGLINE = "Opportunity Shapes Outcomes";
export const SITE_DESCRIPTION =
  "Essays on opportunity, human potential, India, technology, and the systems that shape our lives. By Manas Majhi.";
export const AUTHOR_NAME = "Manas Majhi";
export const AUTHOR_TWITTER = "@manasmajhi";

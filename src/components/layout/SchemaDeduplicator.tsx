"use client";

import { useEffect } from "react";

/**
 * Removes duplicate global JSON-LD schema scripts inserted by Next.js RSC hydration.
 * The layout renders Person/WebSite/Organization schemas in <head> for SSR/SEO,
 * but the RSC client runtime re-inserts them during hydration — causing duplicates.
 * This component runs once after mount and removes the extras, keeping the first instance.
 */
export function SchemaDeduplicator() {
  useEffect(() => {
    ["schema-person", "schema-website", "schema-organization"].forEach((id) => {
      const elements = document.querySelectorAll(`script#${id}`);
      for (let i = 1; i < elements.length; i++) {
        elements[i].parentNode?.removeChild(elements[i]);
      }
    });
  }, []);

  return null;
}

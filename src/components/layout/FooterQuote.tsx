"use client";

import { useMemo } from "react";

const quotes = [
  "Talent is evenly distributed. Opportunity is not.",
  "Geography should not determine destiny.",
  "Opportunity changes lives more consistently than motivation.",
  "Access to opportunity compounds over time.",
  "Human potential is universal. Opportunity is not.",
  "Long-term thinking wins in a short-term world.",
  "The right leader compounds. The wrong leader compounds too.",
  "Development begins when opportunity reaches everyone.",
  "Building from Kalahandi. Thinking globally.",
  "Growth begins where familiarity ends.",
];

export function FooterQuote() {
  const quote = useMemo(
    () => quotes[Math.floor(Math.random() * quotes.length)],
    []
  );

  return (
    <p className="text-xs text-muted-foreground italic mt-3 max-w-xs leading-relaxed">
      "{quote}"
    </p>
  );
}

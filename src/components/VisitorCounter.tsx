"use client";

import { useEffect, useState } from "react";

const SEED = 11111;

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/manasmajhi/site-visits/up")
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.count === "number") {
          setCount(data.count + SEED);
        }
      })
      .catch(() => {
        // silent fail — counter just doesn't appear
      });
  }, []);

  if (count === null) return null;

  return (
    <div className="text-center py-10 px-6">
      <p className="text-xs text-muted-foreground/40 tabular-nums">
        {count.toLocaleString()} visitors
      </p>
    </div>
  );
}

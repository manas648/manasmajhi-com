"use client";

import { useEffect, useState } from "react";

// Module-level cache so both components share the same fetch result
// within a single browser session/navigation.
let _count: number | null = null;
let _fetching = false;
const _listeners: Array<(n: number) => void> = [];

function fetchAndCache() {
  if (_count !== null || _fetching) return;
  _fetching = true;
  fetch("/api/visit", { method: "POST" })
    .then((r) => r.json())
    .then((data) => {
      if (typeof data.count === "number") {
        _count = data.count;
        _listeners.forEach((fn) => fn(data.count));
        _listeners.length = 0;
      }
    })
    .catch(() => {
      _fetching = false;
    });
}

// Invisible — place in layout so every page view is counted.
export function VisitorTracker() {
  useEffect(() => {
    fetchAndCache();
  }, []);
  return null;
}

// Visible counter — place on homepage only.
export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(_count);

  useEffect(() => {
    if (_count !== null) {
      setCount(_count);
      return;
    }
    // Register listener if fetch is in-flight or not yet started
    _listeners.push(setCount);
    fetchAndCache();
    return () => {
      const i = _listeners.indexOf(setCount);
      if (i !== -1) _listeners.splice(i, 1);
    };
  }, []);

  if (count === null) return null;

  return (
    <div className="text-center py-10 px-6">
      <p className="text-xs font-bold tabular-nums">
        <span style={{ color: "#E97316" }}>{count.toLocaleString()}</span>
        <span className="text-muted-foreground/60"> visitors</span>
      </p>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useState, useTransition } from "react";

interface Props {
  initialQuery: string;
}

export default function SearchInput({ initialQuery }: Props) {
  const router = useRouter();
  const [value, setValue] = useState(initialQuery);
  const [isPending, startTransition] = useTransition();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    setValue(v);
    startTransition(() => {
      if (v.trim()) {
        router.push(`/search?q=${encodeURIComponent(v.trim())}`, );
      } else {
        router.push("/search");
      }
    });
  }

  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      <input
        type="search"
        autoFocus
        placeholder="Search essays…"
        value={value}
        onChange={handleChange}
        className={`w-full pl-11 pr-5 py-4 rounded-2xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all ${isPending ? "opacity-70" : ""}`}
      />
    </div>
  );
}

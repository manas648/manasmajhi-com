"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsletterFormProps {
  variant?: "default" | "inline";
  className?: string;
}

export function NewsletterForm({
  variant = "default",
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // TODO: Connect to email provider (ConvertKit, Beehiiv, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className={cn("text-sm text-muted-foreground", className)}>
        ✓ You're on the list. Welcome.
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={cn("flex gap-2", className)}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className={cn(
            "flex-1 px-4 py-2.5 rounded-xl text-sm",
            "bg-muted border border-border",
            "placeholder:text-muted-foreground/60",
            "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60",
            "transition-all"
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "px-4 py-2.5 rounded-xl text-sm font-medium",
            "bg-foreground text-background",
            "hover:bg-foreground/90 transition-colors",
            "disabled:opacity-60 flex items-center gap-2"
          )}
        >
          {status === "loading" ? "..." : "Subscribe"}
          {status !== "loading" && <ArrowRight className="w-3 h-3" />}
        </button>
      </form>
    );
  }

  return (
    <div className={cn("space-y-6", className)}>
      <blockquote className="border-l-2 border-accent/40 pl-4">
        <p className="text-muted-foreground leading-relaxed italic text-sm">
          "The man in my neighbourhood who repaired electrical equipment was genuinely skilled — people came from across town when the regular shops gave up. His shop was the size of a large wardrobe. He worked out of it his entire life."
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">— from a recent issue</p>
      </blockquote>
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={cn(
          "w-full px-5 py-3.5 rounded-xl",
          "bg-background border border-border",
          "placeholder:text-muted-foreground/60",
          "focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/60",
          "transition-all text-base"
        )}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "w-full px-5 py-3.5 rounded-xl font-medium",
          "bg-foreground text-background",
          "hover:bg-foreground/90 transition-colors",
          "disabled:opacity-60 flex items-center justify-center gap-2"
        )}
      >
        {status === "loading" ? "Subscribing..." : "Subscribe — it's free"}
        {status !== "loading" && <ArrowRight className="w-4 h-4" />}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        No spam. Unsubscribe any time.
      </p>
    </form>
    </div>
  );
}

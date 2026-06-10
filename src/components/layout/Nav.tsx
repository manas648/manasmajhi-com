"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/writing", label: "Writing" },
  { href: "/frameworks", label: "Frameworks" },
  { href: "/elsewhere", label: "Elsewhere" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 hover:opacity-75 transition-opacity"
          >
            {/* Mark */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect
                width="28"
                height="28"
                rx="6"
                style={{ fill: "hsl(var(--foreground))" }}
              />
              <path
                d="M7.5 20V9L14 16.5 20.5 9V20"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ stroke: "hsl(var(--background))" }}
              />
            </svg>
            {/* Wordmark */}
            <span className="font-serif text-sm font-bold tracking-[0.18em] uppercase">
              Manas Majhi
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                  "hover:text-foreground hover:bg-ink-100 dark:hover:bg-ink-800",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-foreground bg-ink-100 dark:bg-ink-800"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: theme + mobile toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className={cn(
                "md:hidden w-9 h-9 rounded-full flex items-center justify-center",
                "text-muted-foreground hover:text-foreground",
                "hover:bg-ink-100 dark:hover:bg-ink-800",
                "transition-all duration-200"
              )}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-border/60">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  pathname === link.href
                    ? "text-foreground bg-ink-100 dark:bg-ink-800"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

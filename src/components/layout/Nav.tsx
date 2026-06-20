"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const writingItems = [
  { href: "/all", label: "Index" },
  { href: "/the-map", label: "The Map" },
  { href: "/frameworks", label: "Frameworks" },
  { href: "/hiring", label: "Hiring" },
  { href: "/travel", label: "Places" },
  { href: "/now", label: "Now" },
];

const navLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/elsewhere", label: "Elsewhere" },
  { href: "/about", label: "About" },
  { href: "/work-with-me", label: "Work With Me" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [writingOpen, setWritingOpen] = useState(false);
  const writingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (writingRef.current && !writingRef.current.contains(e.target as Node)) {
        setWritingOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isWritingActive =
    pathname.startsWith("/all") ||
    pathname.startsWith("/the-map") ||
    pathname.startsWith("/frameworks") ||
    pathname.startsWith("/hiring") ||
    pathname.startsWith("/travel") ||
    pathname.startsWith("/now") ||
    pathname.startsWith("/writing") ||
    pathname.startsWith("/india") ||
    pathname.startsWith("/odisha") ||
    pathname.startsWith("/kalahandi") ||
    pathname.startsWith("/opportunity") ||
    pathname.startsWith("/future-of-work") ||
    pathname.startsWith("/entrepreneurship") ||
    pathname.startsWith("/philosophy");

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
            <span className="font-serif text-sm font-bold tracking-[0.18em] uppercase">
              Manas Majhi
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Start Here */}
            <Link
              href="/start-here"
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                "hover:text-foreground hover:bg-ink-100 dark:hover:bg-ink-300",
                pathname.startsWith("/start-here")
                  ? "text-foreground bg-ink-100 dark:bg-ink-300"
                  : "text-muted-foreground"
              )}
            >
              Start Here
            </Link>

            {/* Writing dropdown */}
            <div className="relative" ref={writingRef}>
              <button
                onClick={() => setWritingOpen((v) => !v)}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                  "hover:text-foreground hover:bg-ink-100 dark:hover:bg-ink-300",
                  isWritingActive
                    ? "text-foreground bg-ink-100 dark:bg-ink-300"
                    : "text-muted-foreground"
                )}
              >
                Writing
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    writingOpen && "rotate-180"
                  )}
                />
              </button>

              {writingOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-40 rounded-xl border border-border bg-background/95 backdrop-blur-sm shadow-lg py-1 z-50">
                  {writingItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setWritingOpen(false)}
                      className={cn(
                        "block px-4 py-2.5 text-sm font-medium transition-colors",
                        pathname.startsWith(item.href)
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Remaining top-level links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                  "hover:text-foreground hover:bg-ink-100 dark:hover:bg-ink-300",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-foreground bg-ink-100 dark:bg-ink-300"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: search + theme + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center",
                "text-muted-foreground hover:text-foreground",
                "hover:bg-ink-100 dark:hover:bg-ink-800",
                "transition-all duration-200"
              )}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </Link>
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
          <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-border/60 bg-background">
            <Link
              href="/start-here"
              className={cn(
                "block px-4 py-3 rounded-xl text-sm font-medium transition-all",
                pathname.startsWith("/start-here")
                  ? "text-foreground bg-ink-100 dark:bg-ink-300"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Start Here
            </Link>

            {/* Writing section in mobile */}
            <div className="px-4 pt-2 pb-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Writing
              </p>
            </div>
            {writingItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-6 py-2.5 rounded-xl text-sm font-medium transition-all",
                  pathname.startsWith(item.href)
                    ? "text-foreground bg-ink-100 dark:bg-ink-800"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  pathname === link.href
                    ? "text-foreground bg-ink-100 dark:bg-ink-300"
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

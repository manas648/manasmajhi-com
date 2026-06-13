import Link from "next/link";
import { FooterQuote } from "./FooterQuote";

const footerLinks = {
  Reading: [
    { href: "/start-here", label: "Start Here" },
    { href: "/writing", label: "All Writing" },
    { href: "/frameworks", label: "Frameworks" },
  ],
  Topics: [
    { href: "/writing/opportunity", label: "Opportunity" },
    { href: "/writing/india", label: "India" },
    { href: "/writing/odisha", label: "Odisha" },
    { href: "/writing/future-of-work", label: "Future of Work" },
    { href: "/writing/philosophy", label: "Philosophy" },
  ],
  Connect: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/elsewhere", label: "Elsewhere" },
    { href: "/recognition", label: "Recognition" },
    { href: "/timeline", label: "Timeline" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
            >
              Manas Majhi
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Improving Lives With New Opportunities.
            </p>
            <FooterQuote />
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Manas Majhi. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Also known as Manas Ranjan Majhi and Maanas Ranjan Majhi.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/rss.xml"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              RSS
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

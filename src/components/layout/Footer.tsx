import Link from "next/link";
import { FooterQuote } from "./FooterQuote";

const footerLinks = {
  Reading: [
    { href: "/start-here", label: "Start Here" },
    { href: "/writing", label: "All Writing" },
    { href: "/frameworks", label: "Frameworks" },
  ],
  Topics: [
    { href: "/opportunity", label: "Opportunity" },
    { href: "/india", label: "India" },
    { href: "/odisha", label: "Odisha" },
    { href: "/future-of-work", label: "Future of Work" },
    { href: "/philosophy", label: "Philosophy" },
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

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground/60">Disclaimer:</span>{" "}
            All views, opinions, and observations expressed on this website are solely my own and do not represent the views of any organisation, employer, client, or institution I am or have been associated with. The content here is written in a personal capacity for the purpose of sharing ideas, perspectives, and experiences. Nothing on this site constitutes professional legal, financial, investment, or policy advice. While I make every effort to ensure accuracy, some content reflects my personal interpretation of events, data, or situations and should be read as such. I am not responsible for how this content is interpreted, shared, or applied by others.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
      {/* Inner column matches the sitewide `max-w-3xl px-6` content container so
          the logo, page headings, and gutter labels all share one left edge */}
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        {/* Identity / home — a boxed RP monogram, not the photo avatar */}
        <Link
          href="/"
          className="focus-visible:ring-ring focus-visible:ring-offset-background group -mx-1 flex items-center gap-2.5 rounded-sm px-1 py-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <span className="border-border text-foreground flex size-7 items-center justify-center rounded-sm border font-mono text-[10px] font-bold tracking-tight">
            RP
          </span>
          <span className="text-muted-foreground group-hover:text-foreground font-mono text-sm tracking-wide transition-colors duration-200 ease-out">
            raul plascencia
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "focus-visible:ring-ring focus-visible:ring-offset-background rounded-sm border px-3 py-1.5 font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                    active
                      ? "border-border text-foreground"
                      : "text-muted-foreground hover:text-foreground border-transparent",
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

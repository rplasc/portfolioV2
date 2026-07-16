import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const baseLinkClass =
  "group focus-visible:ring-ring focus-visible:ring-offset-background -mx-1 -my-1.5 inline-flex items-center gap-1 rounded-sm px-1 py-1.5 font-mono text-xs tracking-wide uppercase transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";

// Primary discovery action — colored at rest (e.g. "Case study"). Internal
// navigation, so it points forward with a plain arrow.
export function PrimaryActionLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${baseLinkClass} text-link`}>
      <span className="decoration-link/40 group-hover:decoration-link underline underline-offset-2">
        {children}
      </span>
      <ArrowRight className="size-3" aria-hidden="true" />
    </Link>
  );
}

// Secondary/utility action — neutral at rest, picks up the accent only on
// interaction (e.g. "GitHub", "Demo"), so color keeps pointing at the one or
// two links that matter most instead of coloring every link on the page.
// Leaves the site, so it points up-and-out rather than forward.
export function SecondaryActionLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseLinkClass} text-muted-foreground hover:text-link`}
    >
      <span className="decoration-muted-foreground/30 group-hover:decoration-link underline underline-offset-2">
        {children}
      </span>
      <ArrowUpRight className="size-3" aria-hidden="true" />
    </a>
  );
}

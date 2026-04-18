import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border/60 px-4 py-5">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-6">
        <Link
          href="/"
          className="rounded-sm text-sm font-medium tracking-tight text-foreground transition-colors duration-200 ease-out hover:text-foreground/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Raul Plascencia
        </Link>
        <nav>
          <Link
            href="/contact"
            className="rounded-sm text-sm text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground focus-visible:outline-none focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

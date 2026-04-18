"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 px-4 py-4">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          &copy; {year} Raul Plascencia
        </p>
        <div className="flex items-center gap-1">
          <a
            href="https://linkedin.com/in/raul-plascencia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-11 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a
            href="https://github.com/rplasc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex size-11 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="p-2">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-center sm:text-left">
          &copy; {year} Raul Plascencia
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/raul-plascencia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center p-1 transition-colors hover:text-foreground"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedin}/>
          </a>
          <a
            href="https://github.com/rplasc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center p-1 transition-colors hover:text-foreground"
          >
            <FontAwesomeIcon size="lg" icon={faGithub}/>
          </a>
        </div>
      </div>
    </footer>
  )
}

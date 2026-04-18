"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { contact } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 border-t px-4 py-4">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-muted-foreground font-mono text-xs tracking-wide">
          &copy; {year} Raul Plascencia
        </p>
        <a
          className="text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-background font-mono text-xs tracking-wide transition-[color,background-color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          href={`mailto:${contact.email}`}
          aria-label="Email"
        >
          {contact.email}
        </a>
        <div className="flex items-center gap-1">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-background flex size-11 items-center justify-center rounded-sm transition-[color,background-color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-background flex size-11 items-center justify-center rounded-sm transition-[color,background-color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}

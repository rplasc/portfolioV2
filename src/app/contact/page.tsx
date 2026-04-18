import type { Metadata } from "next"
import { contact } from "@/data/contact"

export const metadata: Metadata = {
  title: "Contact — Raul Plascencia",
  description: "Email, LinkedIn, and GitHub links for Raul Plascencia.",
}

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col justify-center max-w-3xl mx-auto w-full px-6 py-24">
      <h1 className="text-[clamp(1.75rem,6vw,3.5rem)] font-semibold tracking-[-0.02em] leading-[1.05] text-foreground">
        <a
          href={`mailto:${contact.email}`}
          className="underline decoration-transparent underline-offset-[0.15em] transition-colors hover:decoration-foreground focus-visible:outline-none focus-visible:decoration-foreground break-all"
        >
          {contact.email}
        </a>
      </h1>
      <p className="mt-6 text-sm text-muted-foreground">
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
        >
          LinkedIn
        </a>
        <span aria-hidden="true" className="mx-2 text-muted-foreground/50">/</span>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
        >
          GitHub
        </a>
      </p>
    </main>
  )
}

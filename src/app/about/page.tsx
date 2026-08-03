import type { Metadata } from "next";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SecondaryActionLink } from "@/components/action-link";
import { previousEmployers } from "@/data/employers";
import { contact } from "@/data/contact";
import { bio, moreInfo } from "@/data/about";

export const metadata: Metadata = {
  title: "About — Raul Plascencia",
  description: "About Raul Plascencia, full-stack software engineer.",
};

const labelClass =
  "text-muted-foreground/70 font-mono text-xs font-semibold tracking-[0.2em] uppercase";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-20">
        <header className="flex flex-col gap-4">
          <p className={labelClass}>About</p>
          <div className="flex flex-col gap-2">
            <h1 className="text-foreground/95 text-5xl leading-[1.02] font-bold tracking-[-0.03em] md:text-6xl md:tracking-[-0.04em]">
              Raul Plascencia
            </h1>
            <p className="text-muted-foreground font-mono text-sm tracking-wide">
              Full-stack Software Engineer
            </p>
          </div>
        </header>

        <div className="mt-14 flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          {/* Identity rail — the human anchor and how to reach it, held in view
              as the bio is read */}
          <aside className="flex flex-col gap-8 md:sticky md:top-24 md:w-56 md:shrink-0">
            <Avatar className="size-36 shrink-0">
              <AvatarImage src="/raulplascencia.jpg" alt="Raul Plascencia" />
              <AvatarFallback className="text-3xl">RP</AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-4">
              <h2 className={labelClass}>Contact</h2>
              {/* Reach-me info as one tight group, profile links as another */}
              <div className="flex flex-col gap-1.5">
                <a
                  href={`mailto:${contact.email}`}
                  className="focus-visible:ring-ring focus-visible:ring-offset-background text-link decoration-link/40 hover:decoration-link -mx-1 w-fit rounded-sm px-1 text-sm underline underline-offset-2 transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  {contact.email}
                </a>
                <p className="text-muted-foreground text-sm">
                  {contact.location}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <SecondaryActionLink href={contact.linkedin}>
                  LinkedIn
                </SecondaryActionLink>
                <SecondaryActionLink href={contact.github}>
                  GitHub
                </SecondaryActionLink>
              </div>
            </div>
          </aside>

          {/* Prose column */}
          <div className="flex flex-1 flex-col gap-14">
            <section className="flex flex-col gap-4">
              <h2 className={labelClass}>Bio</h2>
              <p className="text-foreground/75 max-w-prose text-base leading-relaxed">
                {bio}
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className={labelClass}>Previously at</h2>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {previousEmployers.map((employer) => (
                  <div key={employer.name} className="flex items-center gap-2">
                    <Image
                      src={employer.logo}
                      alt={employer.name}
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                    <span className="text-muted-foreground text-sm">
                      {employer.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className={labelClass}>Off the clock</h2>
              <ul className="flex flex-col gap-4">
                {moreInfo.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="text-muted-foreground/50 mt-px shrink-0 font-mono text-xs"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span className="text-foreground/75 max-w-prose text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

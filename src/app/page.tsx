import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { previousEmployers } from "@/data/employers";
import {
  projects,
  featuredProjects,
  otherProjects,
  projectCategories,
} from "@/data/projects";
import { contact } from "@/data/contact";
import { FeaturedProjectCard } from "@/components/featured-project-card";
import { PrimaryActionLink } from "@/components/action-link";

// "web apps, games, and mobile" — Oxford-joined, for the teaser sentence.
function joinNatural(items: string[]) {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export default function Home() {
  // The home page only shows featured work; everything else lives on /projects.
  // Both the count and the type chips are derived from data so they stay honest
  // as categories fill in
  const moreCount = otherProjects.length;
  const presentCategories = projectCategories.filter((category) =>
    projects.some((project) => project.category === category),
  );
  const categoryPhrase = joinNatural(
    presentCategories.map((category) => category.toLowerCase()),
  );

  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-20">
        {/* Identity + CTA — asymmetric on md+ */}
        <section className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
          <Avatar className="mx-auto size-32 shrink-0 md:mx-0 md:size-36">
            <AvatarImage src="/raulplascencia.jpg" alt="Raul Plascencia" />
            <AvatarFallback className="text-3xl">RP</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <h1 className="text-foreground/95 text-5xl leading-[1.02] font-bold tracking-[-0.03em] md:text-6xl md:tracking-[-0.04em]">
                Raul Plascencia
              </h1>
              <p className="text-muted-foreground font-mono text-sm tracking-wide">
                Full-stack Software Engineer
              </p>
            </div>

            <div className="flex justify-center gap-3 md:justify-start">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-8"
                asChild
                size="lg"
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Social proof — inline row, no bordered strip */}
        <section className="mt-16 flex flex-col gap-4 md:flex-row md:items-center md:gap-12">
          <h2 className="text-muted-foreground/70 shrink-0 font-mono text-xs font-semibold tracking-[0.2em] uppercase md:w-40">
            Previously at
          </h2>
          <div className="flex flex-1 flex-wrap items-center gap-x-8 gap-y-3">
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

        {/* Featured — big beat */}
        <section className="mt-28 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <h2 className="text-muted-foreground/70 shrink-0 font-mono text-xs font-semibold tracking-[0.2em] uppercase md:w-40 md:pt-1">
            Featured
          </h2>
          <div className="flex flex-1 flex-col gap-10">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.name}
                project={project}
                bordered={index !== 0}
              />
            ))}
          </div>
        </section>

        {/* More projects — now a gateway into the dedicated Projects page */}
        <section className="mt-16 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <h2 className="text-muted-foreground/70 shrink-0 font-mono text-xs font-semibold tracking-[0.2em] uppercase md:w-40 md:pt-1">
            More projects
          </h2>
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-foreground/75 max-w-prose text-base leading-relaxed">
              {moreCount} more projects across {categoryPhrase} — organized by
              type.
            </p>
            <div className="mt-1">
              <PrimaryActionLink href="/projects">
                View all projects
              </PrimaryActionLink>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-28 flex flex-col gap-4 md:flex-row md:items-start md:gap-12">
          <h2 className="text-muted-foreground/70 shrink-0 font-mono text-xs font-semibold tracking-[0.2em] uppercase md:w-40">
            Contact
          </h2>
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${contact.email}`}
              className="focus-visible:ring-ring focus-visible:ring-offset-background text-link decoration-link/40 hover:decoration-link -mx-1 w-fit rounded-sm px-1 text-base underline underline-offset-2 transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {contact.email}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

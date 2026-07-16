import Link from "next/link";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { caseStudies } from "@/data/case-studies";
import { actionLinkClass } from "@/lib/link-styles";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return {
    title: `${study.title} — Raul Plascencia`,
    description: study.tagline,
  };
}

const sectionLabelClass =
  "text-muted-foreground/70 shrink-0 font-mono text-xs font-semibold tracking-[0.2em] uppercase md:w-40 md:pt-1";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  const hasLinks = Boolean(study.github || study.demo);
  const contextLine = [study.role, study.timeframe, study.location]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-20">
        {/* Identity strip — this page can arrive via a shared link with no
            other context, so credibility and a way back live here, together */}
        <Link
          href="/"
          className="focus-visible:ring-ring focus-visible:ring-offset-background group -mx-1 flex w-fit items-center gap-3 rounded-sm px-1 py-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <span
            aria-hidden="true"
            className="text-muted-foreground group-hover:text-link font-mono text-xs transition-colors duration-200 ease-out"
          >
            ←
          </span>
          <Avatar className="size-9 shrink-0">
            <AvatarImage src="/raulplascencia.jpg" alt="" />
            <AvatarFallback className="text-xs">RP</AvatarFallback>
          </Avatar>
          <span className="flex flex-col leading-tight">
            <span className="text-foreground/95 group-hover:text-link text-sm font-medium transition-colors duration-200 ease-out">
              Raul Plascencia
            </span>
            <span className="text-muted-foreground font-mono text-xs tracking-wide">
              Full-stack Software Engineer
            </span>
          </span>
        </Link>

        {/* Title block — identity first */}
        <section className="mt-12 flex flex-col gap-2">
          <h1 className="text-foreground/95 text-4xl leading-[1.05] font-semibold tracking-[-0.02em] md:text-5xl">
            {study.title}
          </h1>
          <p className="text-muted-foreground text-sm">{study.tagline}</p>
          <p className="text-muted-foreground/70 mt-1 font-mono text-xs tracking-wide">
            {contextLine}
          </p>
          <p className="text-muted-foreground/50 font-mono text-xs">
            {study.stack.join(" · ")}
          </p>
        </section>

        {/* Overview — the story, first and most important */}
        <section className="mt-16 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <h2 className={sectionLabelClass}>Overview</h2>
          <p className="text-foreground/75 max-w-prose flex-1 text-base leading-relaxed">
            {study.overview}
          </p>
        </section>

        {/* Highlights — supporting evidence */}
        <section className="mt-16 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <h2 className={sectionLabelClass}>Highlights</h2>
          <ul className="divide-border flex flex-1 flex-col divide-y">
            {study.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 py-4 first:pt-0 last:pb-0"
              >
                <span
                  className="text-muted-foreground/50 mt-px shrink-0 font-mono text-xs"
                  aria-hidden="true"
                >
                  —
                </span>
                <span className="text-foreground/75 text-sm leading-relaxed">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outcome — act break, the payoff */}
        {study.outcome && (
          <section className="mt-28 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
            <h2 className={sectionLabelClass}>Outcome</h2>
            <p className="text-foreground/90 max-w-prose flex-1 text-base font-medium leading-relaxed">
              {study.outcome}
            </p>
          </section>
        )}

        {/* Links — coda */}
        {hasLinks && (
          <section
            className={`${study.outcome ? "mt-16" : "mt-28"} flex flex-col gap-6 md:flex-row md:items-start md:gap-12`}
          >
            <h2 className={sectionLabelClass}>Links</h2>
            <div className="flex flex-1 flex-wrap gap-6">
              {study.github && (
                <a
                  href={study.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionLinkClass}
                >
                  GitHub →
                </a>
              )}
              {study.demo && (
                <a
                  href={study.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionLinkClass}
                >
                  Demo →
                </a>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

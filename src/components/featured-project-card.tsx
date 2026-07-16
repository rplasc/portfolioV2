import Link from "next/link";
import { Project } from "@/data/projects";
import { actionLinkClass } from "@/lib/link-styles";

export function FeaturedProjectCard({
  project,
  bordered,
}: {
  project: Project;
  bordered: boolean;
}) {
  const hasCaseStudy = project.slug !== "";

  return (
    <article
      className={
        bordered
          ? "border-border flex flex-col gap-3 border-t pt-10"
          : "flex flex-col gap-3"
      }
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-foreground/95 text-xl font-semibold tracking-tight">
          {hasCaseStudy ? (
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:ring-ring focus-visible:ring-offset-background decoration-foreground/25 hover:decoration-foreground/75 -mx-1 rounded-sm px-1 underline underline-offset-2 transition-colors duration-200 ease-out hover:text-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h3>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </div>

      <p className="text-foreground/75 max-w-prose text-base leading-relaxed">
        {project.details}
      </p>

      <p className="text-muted-foreground/70 font-mono text-xs">
        {project.stack.join(" · ")}
      </p>

      {(hasCaseStudy || project.github || project.demo) && (
        <div className="mt-1 flex flex-wrap gap-6">
          {hasCaseStudy && (
            <Link href={`/work/${project.slug}`} className={actionLinkClass}>
              Case study →
            </Link>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={actionLinkClass}
            >
              GitHub →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={actionLinkClass}
            >
              Demo →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

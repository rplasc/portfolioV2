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
          ? "flex flex-col gap-3 border-t border-white/10 pt-10"
          : "flex flex-col gap-3"
      }
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold tracking-tight text-white/95">
          {hasCaseStudy ? (
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:ring-ring focus-visible:ring-offset-background -mx-1 rounded-sm px-1 underline underline-offset-2 decoration-white/25 transition-colors duration-200 ease-out hover:text-white hover:decoration-white/75 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h3>
        <p className="text-sm text-white/65">{project.description}</p>
      </div>

      <p className="max-w-prose text-base leading-relaxed text-white/75">
        {project.details}
      </p>

      <p className="font-mono text-xs text-white/40">
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

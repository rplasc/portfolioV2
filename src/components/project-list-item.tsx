import Link from "next/link";
import { Project } from "@/data/projects";
import { actionLinkClass } from "@/lib/link-styles";

export function ProjectListItem({ project }: { project: Project }) {
  const hasCaseStudy = project.slug !== "";
  const hasActions = Boolean(project.github || project.demo);

  return (
    <li className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-foreground/95 text-base font-medium">
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
        {hasActions && (
          <div className="flex shrink-0 flex-wrap justify-end gap-4">
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
      </div>
      <p className="text-muted-foreground text-sm">{project.description}</p>
      <p className="text-foreground/75 mt-1 max-w-prose text-base leading-relaxed">
        {project.details}
      </p>
      <p className="text-muted-foreground/70 font-mono text-xs">
        {project.stack.join(" · ")}
      </p>
    </li>
  );
}

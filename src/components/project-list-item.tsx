import Link from "next/link";
import { Project } from "@/data/projects";
import { actionLinkClass } from "@/lib/link-styles";

export function ProjectListItem({ project }: { project: Project }) {
  const hasCaseStudy = project.slug !== "";
  const hasActions = Boolean(project.github || project.demo);

  return (
    <li className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base font-medium text-white/95">
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
      <p className="text-sm text-white/65">{project.description}</p>
      <p className="mt-1 max-w-prose text-base leading-relaxed text-white/75">
        {project.details}
      </p>
      <p className="font-mono text-xs text-white/40">
        {project.stack.join(" · ")}
      </p>
    </li>
  );
}

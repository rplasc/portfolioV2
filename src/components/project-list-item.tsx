import Link from "next/link";
import { Project } from "@/data/projects";
import { SecondaryActionLink } from "@/components/action-link";

export function ProjectListItem({ project }: { project: Project }) {
  const hasCaseStudy = project.slug !== "";
  const hasActions = Boolean(project.github || project.demo);

  return (
    <li className="flex flex-col gap-1.5 py-5 first:pt-0 last:pb-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-foreground/95 text-base font-medium">
          {hasCaseStudy ? (
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:ring-ring focus-visible:ring-offset-background text-link decoration-link/30 hover:decoration-link -mx-1 rounded-sm px-1 underline underline-offset-2 transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
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
              <SecondaryActionLink href={project.github}>
                GitHub
              </SecondaryActionLink>
            )}
            {project.demo && (
              <SecondaryActionLink href={project.demo}>
                Demo
              </SecondaryActionLink>
            )}
          </div>
        )}
      </div>
      {/* The index stays scannable — the full `details` paragraph lives on the
          case study (or the home featured card), not on every row here */}
      <p className="text-muted-foreground text-sm">{project.description}</p>
      <p className="text-muted-foreground font-mono text-xs">
        {project.stack.join(" · ")}
      </p>
    </li>
  );
}

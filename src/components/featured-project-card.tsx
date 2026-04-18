import { Project } from "@/data/projects";

const linkClass =
  "focus-visible:ring-ring focus-visible:ring-offset-background -mx-1 rounded-sm px-1 font-mono text-xs tracking-wide text-white/75 uppercase transition-colors hover:text-white/95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none";

export function FeaturedProjectCard({
  project,
  bordered,
}: {
  project: Project;
  bordered: boolean;
}) {
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
          {project.name}
        </h3>
        <p className="text-sm text-white/65">{project.description}</p>
      </div>

      <p className="max-w-prose text-sm leading-relaxed text-white/75">
        {project.details}
      </p>

      <p className="font-mono text-xs text-white/40">
        {project.stack.join(" · ")}
      </p>

      {(project.github || project.demo) && (
        <div className="mt-1 flex gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Demo →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

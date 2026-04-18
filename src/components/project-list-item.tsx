import { Project } from "@/data/projects";

export function ProjectListItem({ project }: { project: Project }) {
  return (
    <li className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base font-medium text-white/95">{project.name}</h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:ring-ring focus-visible:ring-offset-background -mx-1 shrink-0 rounded-sm px-1 font-mono text-xs tracking-wide text-white/65 uppercase transition-colors hover:text-white/95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            GitHub →
          </a>
        )}
      </div>
      <p className="text-sm text-white/65">{project.description}</p>
      <p className="font-mono text-xs text-white/40">
        {project.stack.join(" · ")}
      </p>
    </li>
  );
}

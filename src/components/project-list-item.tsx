"use client";

import { useState } from "react";
import { Project } from "@/data/projects";

export function ProjectListItem({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base font-medium text-white/95">{project.name}</h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-mono text-xs tracking-wide text-white/65 uppercase transition-colors hover:text-white/95"
          >
            GitHub →
          </a>
        )}
      </div>
      <p className="text-sm text-white/65">{project.description}</p>

      {expanded && (
        <p className="mt-1 max-w-prose text-sm leading-relaxed text-white/65">
          {project.details}
        </p>
      )}

      <div className="mt-1 flex items-center gap-6">
        <p className="font-mono text-xs text-white/40">
          {project.stack.join(" · ")}
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="font-mono text-xs tracking-wide text-white/40 uppercase transition-colors hover:text-white/65"
        >
          {expanded ? "Show less ↑" : "Read more →"}
        </button>
      </div>
    </li>
  );
}

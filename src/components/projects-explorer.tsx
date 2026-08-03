"use client";

import { useState } from "react";
import {
  type Project,
  type ProjectCategory,
  projectCategories,
} from "@/data/projects";
import { ProjectListItem } from "@/components/project-list-item";
import { chipClass } from "@/components/chip";

type Filter = ProjectCategory | "All";

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  // Only surface categories that actually have projects, in taxonomy order.
  const presentCategories = projectCategories.filter((category) =>
    projects.some((project) => project.category === category),
  );
  const visibleCategories =
    filter === "All" ? presentCategories : [filter];

  return (
    <div className="mt-10 flex flex-col gap-12">
      {/* Filter — one chip per populated category, plus All */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("All")}
          aria-pressed={filter === "All"}
          className={chipClass(filter === "All")}
        >
          All
        </button>
        {presentCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={chipClass(filter === category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grouped listing — one gutter-labelled section per category. Keyed by
          filter so the entrance animation replays each time the selection
          changes, giving the filter tactile feedback. */}
      <div key={filter} className="flex flex-col gap-16">
        {visibleCategories.map((category, index) => {
          const group = projects.filter((p) => p.category === category);

          return (
            <section
              key={category}
              style={{ animationDelay: `${index * 70}ms` }}
              className="animate-fade-rise flex flex-col gap-6 md:flex-row md:items-start md:gap-12"
            >
              <div className="shrink-0 md:w-40 md:pt-1">
                <h2 className="text-muted-foreground/70 font-mono text-xs font-semibold tracking-[0.2em] uppercase">
                  {category}
                </h2>
                <p className="text-muted-foreground/50 mt-1 font-mono text-xs">
                  {group.length} {group.length === 1 ? "project" : "projects"}
                </p>
              </div>

              <ul className="divide-border flex flex-1 flex-col divide-y">
                {group.map((project) => (
                  <ProjectListItem key={project.name} project={project} />
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

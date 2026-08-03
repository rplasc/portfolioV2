import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectsExplorer } from "@/components/projects-explorer";

export const metadata: Metadata = {
  title: "Projects — Raul Plascencia",
  description:
    "Stuff I've built — client work and experiments, grouped by type.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-20">
        <header className="flex flex-col gap-4">
          <p className="text-muted-foreground/70 font-mono text-xs font-semibold tracking-[0.2em] uppercase">
            Projects
          </p>
          <h1 className="text-foreground/95 text-5xl leading-[1.02] font-bold tracking-[-0.03em] md:text-6xl md:tracking-[-0.04em]">
            Stuff I’ve built
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Grouped by type. Some are client work, but most are projects I built
            for fun or to learn something new.
          </p>
        </header>

        <ProjectsExplorer projects={projects} />
      </main>
    </div>
  );
}

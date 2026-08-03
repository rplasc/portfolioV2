import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Raul Plascencia",
  description: "About Raul Plascencia, full-stack software engineer.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-20">
        <header className="flex flex-col gap-4">
          <p className="text-muted-foreground/70 font-mono text-xs font-semibold tracking-[0.2em] uppercase">
            About
          </p>
          <h1 className="text-foreground/95 text-5xl leading-[1.02] font-bold tracking-[-0.03em] md:text-6xl md:tracking-[-0.04em]">
            Raul Plascencia
          </h1>
        </header>

        <p className="text-muted-foreground mt-10 font-mono text-sm tracking-wide">
          More about me coming soon.
        </p>
      </main>
    </div>
  );
}

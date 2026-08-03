import { cn } from "@/lib/utils";

// Shared pill used for the project-category chips — as an interactive filter
// button on the Projects page and as a static label on the home teaser.
export function chipClass(active: boolean) {
  return cn(
    "focus-visible:ring-ring focus-visible:ring-offset-background rounded-full border px-3 py-1 font-mono text-xs tracking-wide transition-[color,background-color,border-color,transform] duration-200 ease-out active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
    active
      ? "border-foreground bg-foreground text-background"
      : "text-muted-foreground hover:border-foreground/40 hover:text-foreground border-border",
  );
}

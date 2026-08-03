import Image from "next/image";
import { cn } from "@/lib/utils";

// Profile photo served through next/image (modern format + correctly sized)
// instead of a raw <img>, while keeping the avatar's round shape and subtle ring.
// Pass `priority` when it's above the fold so it isn't lazy-loaded.
export function ProfilePhoto({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={cn(
        "bg-muted after:border-border relative block shrink-0 overflow-hidden rounded-full after:absolute after:inset-0 after:rounded-full after:border after:mix-blend-darken dark:after:mix-blend-lighten",
        className,
      )}
    >
      <Image
        src="/raulplascencia.jpg"
        alt="Raul Plascencia"
        fill
        sizes="(min-width: 768px) 144px, 128px"
        priority={priority}
        className="object-cover"
      />
    </span>
  );
}

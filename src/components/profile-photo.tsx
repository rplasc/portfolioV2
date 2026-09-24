import Image from "next/image";
import { cn } from "@/lib/utils";

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

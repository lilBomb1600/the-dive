import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue">
          <span className="h-px w-6 bg-blue" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-balance text-4xl tracking-wide text-cream sm:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-balance leading-relaxed text-muted">{description}</p>}
    </div>
  );
}

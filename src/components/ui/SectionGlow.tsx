import { cn } from "@/lib/utils";

export function SectionGlow({
  className,
  color = "blue",
}: {
  className?: string;
  color?: "blue" | "amber";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 h-[440px] w-[440px] rounded-full blur-[110px]",
        color === "blue" ? "bg-blue/[0.1]" : "bg-amber/[0.1]",
        className
      )}
    />
  );
}

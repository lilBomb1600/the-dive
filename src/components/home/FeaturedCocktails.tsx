import Link from "next/link";
import { ArrowRight, Martini } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { PouringBottle } from "@/components/ui/BarDecor";
import { cn } from "@/lib/utils";
import { cocktails } from "@/data/menu";

const flavors = [
  { text: "text-pink", neon: "neon-text-pink", iconBg: "from-pink/30 to-pink/5", iconShadow: "shadow-[0_0_20px_-4px_rgba(255,79,163,0.6)]" },
  { text: "text-lime", neon: "neon-text-lime", iconBg: "from-lime/30 to-lime/5", iconShadow: "shadow-[0_0_20px_-4px_rgba(158,224,83,0.6)]" },
  { text: "text-blue-light", neon: "neon-text", iconBg: "from-blue/30 to-blue/5", iconShadow: "shadow-[0_0_20px_-4px_rgba(61,123,255,0.6)]" },
];

export function FeaturedCocktails() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <SectionGlow className="-left-40 top-1/4" color="amber" />
      <PouringBottle className="pointer-events-none absolute -right-6 bottom-0 hidden h-64 w-64 opacity-[0.12] lg:block" />
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Signature Cocktails" title="Made with a little drama" />
          <Link href="/menu" className="group flex items-center gap-2 text-sm font-semibold text-blue">
            Full Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-3">
          {cocktails.map((c, i) => {
            const f = flavors[i % flavors.length];
            return (
              <RevealItem key={c.name}>
                <div
                  className={cn(
                    "glow-ring animate-neon-flicker group flex h-full flex-col rounded-3xl border border-white/5 bg-gradient-to-b from-surface to-surface-light p-7 transition-transform duration-300 hover:-translate-y-1.5",
                    f.text
                  )}
                  style={{ animationDelay: `${i * 0.8}s` }}
                >
                  <span className={cn("mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-110", f.iconBg, f.iconShadow, f.text)}>
                    <Martini className="h-5 w-5" />
                  </span>
                  <h3 className={cn("font-display text-3xl uppercase tracking-wide", f.neon, f.text)}>{c.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{c.description}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}

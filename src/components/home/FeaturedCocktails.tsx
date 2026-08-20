import Link from "next/link";
import { ArrowRight, Martini } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { cocktails } from "@/data/menu";

export function FeaturedCocktails() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <SectionGlow className="-left-40 top-1/4" color="amber" />
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Signature Cocktails" title="Made with a little drama" />
          <Link href="/menu" className="group flex items-center gap-2 text-sm font-semibold text-blue">
            Full Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-3">
          {cocktails.map((c) => (
            <RevealItem key={c.name}>
              <div className="glow-ring-blue group flex h-full flex-col rounded-3xl border border-white/5 bg-gradient-to-b from-surface to-surface-light p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-15px_rgba(61,123,255,0.35)]">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue/30 to-blue/5 text-blue shadow-[0_0_20px_-4px_rgba(61,123,255,0.6)] transition-transform duration-300 group-hover:scale-110">
                  <Martini className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl tracking-wide text-cream">{c.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{c.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

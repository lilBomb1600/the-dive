import Link from "next/link";
import { ArrowRight, Martini } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cocktails } from "@/data/menu";

export function FeaturedCocktails() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Signature Cocktails" title="Made with a little drama" />
          <Link href="/menu" className="group flex items-center gap-2 text-sm font-semibold text-blue">
            Full Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {cocktails.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-blue/40">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
                  <Martini className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl tracking-wide text-cream">{c.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

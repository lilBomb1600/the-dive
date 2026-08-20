import type { Metadata } from "next";
import { Martini, Beer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { CocktailGlass, PouringBottle } from "@/components/ui/BarDecor";
import { business } from "@/data/business";
import { cansBeer, nonAlcoholicBeer, draftBeer, cocktails, menuNote } from "@/data/menu";

export const metadata: Metadata = {
  title: `Menu | ${business.name}`,
  description: "Beer, draft, and signature cocktails at The Dive in Walnut Creek, CA.",
};

function BeerRow({ item }: { item: { name: string; style?: string; abv?: string } }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-border/60 py-3 text-sm">
      <span className="text-cream/90">
        {item.name}
        {item.style && <span className="text-muted"> — {item.style}</span>}
      </span>
      {item.abv && <span className="shrink-0 font-medium text-lime">{item.abv} ABV</span>}
    </li>
  );
}

export default function MenuPage() {
  return (
    <div className="bg-ink">
      <section className="border-b border-border/60 pb-16 pt-32 sm:pt-40">
        <Container className="text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-6 bg-blue" />
              Menu
            </span>
            <h1 className="neon-text font-display text-balance text-5xl tracking-wide text-blue-light sm:text-6xl">
              Beer, Draft &amp; Cocktails
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-balance leading-relaxed text-muted">{menuNote}</p>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20">
        <SectionGlow className="-right-32 top-0" color="amber" />
        <CocktailGlass className="pointer-events-none absolute -left-8 bottom-0 hidden h-64 w-64 opacity-[0.12] lg:block" />
        <Container>
          <Reveal className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pink/30 to-pink/5 text-pink shadow-[0_0_20px_-4px_rgba(255,79,163,0.6)]">
              <Martini className="h-5 w-5" />
            </span>
            <h2 className="font-display text-3xl tracking-wide text-cream">Signature Cocktails</h2>
          </Reveal>
          <RevealGroup className="grid gap-6 sm:grid-cols-3">
            {cocktails.map((c) => (
              <RevealItem key={c.name}>
                <div className="glow-ring-blue group flex h-full flex-col rounded-3xl border border-white/5 bg-gradient-to-b from-surface to-surface-light p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-15px_rgba(255,79,163,0.3)]">
                  <h3 className="font-display text-2xl tracking-wide text-cream">{c.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{c.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-border/60 bg-surface/40 py-20">
        <SectionGlow className="left-1/2 bottom-0 -translate-x-1/2" />
        <PouringBottle className="pointer-events-none absolute -right-8 top-4 hidden h-60 w-60 opacity-[0.12] lg:block" />
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue/30 to-blue/5 text-blue shadow-[0_0_20px_-4px_rgba(61,123,255,0.6)]">
                <Beer className="h-5 w-5" />
              </span>
              <h2 className="font-display text-3xl tracking-wide text-cream">Cans</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <ul>
                {cansBeer.map((b) => (
                  <BeerRow key={b.name} item={b} />
                ))}
              </ul>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted">Non-Alcoholic</p>
              <ul>
                {nonAlcoholicBeer.map((b) => (
                  <BeerRow key={b.name} item={b} />
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue/30 to-blue/5 text-blue shadow-[0_0_20px_-4px_rgba(61,123,255,0.6)]">
                <Beer className="h-5 w-5" />
              </span>
              <h2 className="font-display text-3xl tracking-wide text-cream">Draft</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <ul>
                {draftBeer.map((b) => (
                  <BeerRow key={b.name} item={b} />
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import { Martini, Beer } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
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
      {item.abv && <span className="shrink-0 font-medium text-blue">{item.abv} ABV</span>}
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
            <h1 className="font-display text-balance text-5xl tracking-wide text-cream sm:text-6xl">Beer, Draft & Cocktails</h1>
            <p className="mx-auto mt-4 max-w-lg text-balance leading-relaxed text-muted">{menuNote}</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal className="mb-6 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
              <Martini className="h-5 w-5" />
            </span>
            <h2 className="font-display text-3xl tracking-wide text-cream">Signature Cocktails</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {cocktails.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-7">
                  <h3 className="font-display text-2xl tracking-wide text-cream">{c.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border/60 bg-surface/40 py-20">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
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
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
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

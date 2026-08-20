import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { ChampagnePop } from "@/components/ui/BarDecor";
import { business } from "@/data/business";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 bg-blue/[0.1]" />
      <Container>
        <Reveal className="glow-ring-blue relative flex flex-col items-center overflow-hidden rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-surface to-surface-light p-10 text-center shadow-[0_40px_100px_-30px_rgba(61,123,255,0.35)] sm:p-16">
          <ChampagnePop className="pointer-events-none absolute -top-4 right-6 hidden h-56 w-56 opacity-[0.18] sm:block" />
          <ChampagnePop className="pointer-events-none absolute -top-4 left-6 hidden h-56 w-56 -scale-x-100 opacity-[0.18] sm:block" />
          <h2 className="font-display text-balance text-4xl tracking-wide text-cream sm:text-5xl">
            Come find your new local.
          </h2>
          <p className="mt-4 max-w-lg text-balance leading-relaxed text-muted">
            No reservations needed — just show up, grab a seat at the bar, and let us know what you&apos;re in the mood for.
          </p>
          <a
            href={business.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="shine-btn mt-8 flex items-center gap-2 rounded-full bg-gradient-to-b from-blue-light to-blue px-8 py-4 text-sm font-semibold text-ink shadow-[0_8px_30px_-6px_rgba(61,123,255,0.6)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_-6px_rgba(61,123,255,0.8)]"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";

export function CTASection() {
  return (
    <section className="border-t border-border/60 py-24 sm:py-28">
      <Container>
        <Reveal className="flex flex-col items-center overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-surface to-surface-light p-10 text-center sm:p-16">
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
            className="mt-8 flex items-center gap-2 rounded-full bg-blue px-8 py-4 text-sm font-semibold text-ink shadow-lg shadow-blue/25 transition-transform hover:-translate-y-0.5"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Clock, MapPin, ArrowUpRight, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { PouringBottle } from "@/components/ui/BarDecor";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: `Contact | ${business.name}`,
  description: "Find The Dive in Walnut Creek, CA — address, hours, and directions.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-ink pb-24">
      <SectionGlow className="left-1/2 top-0 -translate-x-1/2" />
      <PouringBottle className="pointer-events-none absolute right-4 top-24 hidden h-52 w-52 opacity-[0.12] lg:block" />
      <section className="pb-14 pt-32 text-center sm:pt-40">
        <Container>
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-6 bg-blue" />
              Contact
            </span>
            <h1 className="neon-text font-display text-balance text-5xl tracking-wide text-blue-light sm:text-6xl">Come find us</h1>
            <p className="mx-auto mt-4 max-w-md text-balance leading-relaxed text-muted">
              No reservations needed — just walk in, grab a seat, and let us know what you&apos;re in the mood for.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[2rem] border border-white/5 bg-gradient-to-b from-surface to-surface-light p-8 shadow-[0_20px_50px_-15px_rgba(61,123,255,0.2)] sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue/30 to-blue/5 text-blue shadow-[0_0_20px_-4px_rgba(61,123,255,0.6)]">
              <MapPin className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-display text-2xl tracking-wide text-cream">Address</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {business.address.line1}
              <br />
              {business.address.line2}
            </p>
            <div className="glow-ring-blue relative mt-6 overflow-hidden rounded-2xl border border-white/5">
              <iframe src={business.mapsEmbedSrc} title="The Dive location map" className="h-[280px] w-full border-0" loading="lazy" />
            </div>
            <a
              href={business.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="shine-btn group mt-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-blue-light to-blue px-6 py-3 text-sm font-semibold text-ink shadow-[0_6px_24px_-6px_rgba(61,123,255,0.6)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_32px_-6px_rgba(61,123,255,0.8)]"
            >
              Get Directions
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-[2rem] border border-white/5 bg-gradient-to-b from-surface to-surface-light p-8 shadow-[0_20px_50px_-15px_rgba(61,123,255,0.2)] sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue/30 to-blue/5 text-blue shadow-[0_0_20px_-4px_rgba(61,123,255,0.6)]">
              <Clock className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-display text-2xl tracking-wide text-cream">Hours</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {business.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between border-b border-border/60 pb-2.5 text-muted">
                  <span className="text-cream/90">{h.day}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-2.5 rounded-2xl bg-surface-light p-4 text-xs leading-relaxed text-muted">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
              <span>Cash gets a 4% discount. Best nights are Friday. Smoking is outside only.</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}

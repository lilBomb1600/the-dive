import type { Metadata } from "next";
import { Clock, MapPin, ArrowUpRight, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: `Contact | ${business.name}`,
  description: "Find The Dive in Walnut Creek, CA — address, hours, and directions.",
};

export default function ContactPage() {
  return (
    <div className="bg-ink pb-24">
      <section className="pb-14 pt-32 text-center sm:pt-40">
        <Container>
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-6 bg-blue" />
              Contact
            </span>
            <h1 className="font-display text-balance text-5xl tracking-wide text-cream sm:text-6xl">Come find us</h1>
            <p className="mx-auto mt-4 max-w-md text-balance leading-relaxed text-muted">
              No reservations needed — just walk in, grab a seat, and let us know what you&apos;re in the mood for.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[2rem] border border-border bg-surface p-8 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
              <MapPin className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-display text-2xl tracking-wide text-cream">Address</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {business.address.line1}
              <br />
              {business.address.line2}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe src={business.mapsEmbedSrc} title="The Dive location map" className="h-[280px] w-full border-0" loading="lazy" />
            </div>
            <a
              href={business.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 flex w-fit items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Get Directions
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-[2rem] border border-border bg-surface p-8 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
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

import { Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/business";

export function HoursLocation() {
  return (
    <section className="border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[2rem] border border-border bg-surface p-8 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
              <Clock className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-2xl tracking-wide text-cream">Hours</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {business.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between border-b border-border/60 pb-2.5 text-muted">
                  <span className="text-cream/90">{h.day}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-[2rem] border border-border bg-surface p-8 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue/10 text-blue">
              <MapPin className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-2xl tracking-wide text-cream">Location</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {business.address.line1}
              <br />
              {business.address.line2}
            </p>
            <div className="mt-6 flex-1 overflow-hidden rounded-2xl border border-border">
              <iframe
                src={business.mapsEmbedSrc}
                title="The Dive location map"
                className="h-full min-h-[220px] w-full border-0"
                loading="lazy"
              />
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
      </Container>
    </section>
  );
}

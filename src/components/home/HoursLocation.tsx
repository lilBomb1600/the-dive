import { Clock, MapPin, ArrowUpRight, Flame } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { cn } from "@/lib/utils";
import { business } from "@/data/business";

export function HoursLocation() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <SectionGlow className="left-1/2 top-0 -translate-x-1/2" color="amber" />
      <Container className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[2rem] border border-white/5 bg-gradient-to-b from-surface to-surface-light p-8 shadow-[0_20px_50px_-15px_rgba(61,123,255,0.2)] sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue/30 to-blue/5 text-blue shadow-[0_0_20px_-4px_rgba(61,123,255,0.6)]">
              <Clock className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-2xl tracking-wide text-cream">Hours</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {business.hours.map((h) => {
                const isBestNight = h.day === "Friday";
                return (
                  <li
                    key={h.day}
                    className={cn(
                      "flex items-center justify-between border-b border-border/60 pb-2.5 text-muted",
                      isBestNight && "text-cream"
                    )}
                  >
                    <span className="flex items-center gap-2 text-cream/90">
                      {h.day}
                      {isBestNight && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-light">
                          <Flame className="h-3 w-3" />
                          Best Night
                        </span>
                      )}
                    </span>
                    <span>{h.hours}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col rounded-[2rem] border border-white/5 bg-gradient-to-b from-surface to-surface-light p-8 shadow-[0_20px_50px_-15px_rgba(61,123,255,0.2)] sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue/30 to-blue/5 text-blue shadow-[0_0_20px_-4px_rgba(61,123,255,0.6)]">
              <MapPin className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-2xl tracking-wide text-cream">Location</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {business.address.line1}
              <br />
              {business.address.line2}
            </p>
            <div className="glow-ring-blue relative mt-6 flex-1 overflow-hidden rounded-2xl border border-white/5">
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
              className="shine-btn group mt-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-b from-blue-light to-blue px-6 py-3 text-sm font-semibold text-ink shadow-[0_6px_24px_-6px_rgba(61,123,255,0.6)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_32px_-6px_rgba(61,123,255,0.8)]"
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

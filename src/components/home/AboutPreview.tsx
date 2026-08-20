import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { galleryImages } from "@/data/gallery";

const image = galleryImages.find((g) => g.id === "interior-bar-counter")!;

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-surface/40 py-24 sm:py-28">
      <SectionGlow className="-right-32 top-1/3" color="amber" />
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="group glow-ring-blue relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/5 shadow-[0_20px_60px_-15px_rgba(61,123,255,0.3)]">
          <div className="h-full w-full overflow-hidden transition-transform duration-700 ease-out group-hover:scale-105">
            <SmartImage src={image.src} alt={image.alt} ready={image.ready} sizes="560px" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue">
            <span className="h-px w-6 bg-blue" />
            Our Story
          </span>
          <h2 className="font-display text-balance text-4xl tracking-wide text-cream sm:text-5xl">
            A hidden gem, built for the neighborhood
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            The Dive is a laid-back spot serving good drinks in a comfortable, welcoming space — friendly service, fair
            prices, and a place where everyone is treated like a regular from day one. Whether you&apos;re stopping in for a
            quick drink or staying all night, we&apos;re happy to have you.
          </p>
          <Link href="/about" className="group mt-7 flex w-fit items-center gap-2 text-sm font-semibold text-blue">
            Read Our Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

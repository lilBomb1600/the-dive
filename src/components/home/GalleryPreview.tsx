import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { SmartImage } from "@/components/ui/SmartImage";
import { galleryImages } from "@/data/gallery";

export function GalleryPreview() {
  const images = galleryImages.slice(0, 5);

  return (
    <section className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28">
      <SectionGlow className="left-1/2 bottom-0 -translate-x-1/2" />
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Inside The Dive" title="Come see for yourself" />
          <Link href="/gallery" className="group flex items-center gap-2 text-sm font-semibold text-blue">
            Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {images.map((img, i) => (
            <RevealItem
              key={img.id}
              className={
                i === 0
                  ? "group glow-ring-blue relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-3xl border border-white/5 shadow-[0_20px_50px_-15px_rgba(61,123,255,0.3)] transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(61,123,255,0.5)]"
                  : "group relative aspect-square overflow-hidden rounded-3xl border border-border transition-colors duration-300 hover:border-blue/40"
              }
            >
              <div className="h-full w-full overflow-hidden transition-transform duration-700 ease-out group-hover:scale-110">
                <SmartImage src={img.src} alt={img.alt} ready={img.ready} sizes="(min-width: 640px) 25vw, 50vw" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

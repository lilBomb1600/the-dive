import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { galleryImages } from "@/data/gallery";

export function GalleryPreview() {
  const images = galleryImages.slice(0, 5);

  return (
    <section className="border-t border-border/60 py-24 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Inside The Dive" title="Come see for yourself" />
          <Link href="/gallery" className="group flex items-center gap-2 text-sm font-semibold text-blue">
            Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {images.map((img, i) => (
            <Reveal
              key={img.id}
              delay={i * 0.05}
              className={i === 0 ? "relative col-span-2 row-span-2 aspect-square overflow-hidden rounded-3xl border border-border" : "relative aspect-square overflow-hidden rounded-3xl border border-border"}
            >
              <SmartImage src={img.src} alt={img.alt} ready={img.ready} sizes="(min-width: 640px) 25vw, 50vw" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MasonryGallery } from "@/components/gallery/MasonryGallery";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: `Gallery | ${business.name}`,
  description: "A look inside The Dive — bar, lounge, and neon.",
};

export default function GalleryPage() {
  return (
    <div className="bg-ink pb-24">
      <section className="pb-14 pt-32 text-center sm:pt-40">
        <Container>
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-6 bg-blue" />
              Gallery
            </span>
            <h1 className="font-display text-balance text-5xl tracking-wide text-cream sm:text-6xl">Inside The Dive</h1>
          </Reveal>
        </Container>
      </section>
      <Container>
        <MasonryGallery />
      </Container>
    </div>
  );
}

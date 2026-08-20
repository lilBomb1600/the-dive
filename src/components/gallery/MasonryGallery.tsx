"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SmartImage } from "@/components/ui/SmartImage";
import { galleryImages } from "@/data/gallery";

const ratios = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-square", "aspect-[3/4]"];

export function MasonryGallery() {
  const [index, setIndex] = useState(-1);
  const readyImages = galleryImages.filter((g) => g.ready);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((img, i) => (
          <button
            key={img.id}
            disabled={!img.ready}
            onClick={() => setIndex(readyImages.findIndex((r) => r.id === img.id))}
            className={`group relative overflow-hidden rounded-2xl border border-white/5 transition-shadow duration-300 hover:shadow-[0_20px_50px_-15px_rgba(61,123,255,0.4)] ${ratios[i % ratios.length]} ${!img.ready ? "cursor-default" : ""}`}
          >
            <SmartImage
              src={img.src}
              alt={img.alt}
              ready={img.ready}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/20" />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={readyImages.map((g) => ({ src: g.src, alt: g.alt }))}
      />
    </>
  );
}

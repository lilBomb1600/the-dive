export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  ready: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "interior-bar-counter",
    src: "/images/gallery/interior-bar-counter.jpg",
    alt: "The Dive's bar counter, lit with blue neon, with TVs behind the bar",
    ready: false,
  },
  {
    id: "interior-turtle-neon",
    src: "/images/gallery/interior-turtle-neon.jpg",
    alt: "The Dive's signature neon turtle sign glowing on the back wall",
    ready: false,
  },
  {
    id: "interior-lounge-seating",
    src: "/images/gallery/interior-lounge-seating.jpg",
    alt: "Lounge seating at The Dive, lit with ambient blue lighting",
    ready: false,
  },
  {
    id: "interior-highboy-seating",
    src: "/images/gallery/interior-highboy-seating.jpg",
    alt: "High-top wooden seating area at The Dive",
    ready: false,
  },
  {
    id: "interior-string-lights",
    src: "/images/gallery/interior-string-lights.jpg",
    alt: "Cozy seating area at The Dive strung with warm string lights",
    ready: false,
  },
];

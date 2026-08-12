import { Hero } from "@/components/home/Hero";
import { FeaturedCocktails } from "@/components/home/FeaturedCocktails";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutPreview } from "@/components/home/AboutPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HoursLocation } from "@/components/home/HoursLocation";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCocktails />
      <Testimonials />
      <AboutPreview />
      <GalleryPreview />
      <HoursLocation />
      <CTASection />
    </>
  );
}

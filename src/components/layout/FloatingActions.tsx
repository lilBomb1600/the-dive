import { MapPin } from "lucide-react";
import { business } from "@/data/business";

export function FloatingActions() {
  return (
    <a
      href={business.mapsHref}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-blue px-5 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-blue/30 transition-transform hover:-translate-y-0.5"
    >
      <MapPin className="h-4 w-4" />
      Get Directions
    </a>
  );
}

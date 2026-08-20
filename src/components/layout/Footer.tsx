import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { business } from "@/data/business";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <Container className="flex flex-col items-start justify-between gap-8 py-14 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <p className="neon-text font-script text-3xl text-blue-light">The Dive</p>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted">{business.tagline}</p>
          </div>
        </div>
        <a href={business.mapsHref} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-sm text-muted hover:text-cream">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
          <span>
            {business.address.line1}
            <br />
            {business.address.line2}
          </span>
        </a>
      </Container>
      <Container className="border-t border-border/60 py-6">
        <p className="text-xs text-muted">© {new Date().getFullYear()} The Dive. All rights reserved.</p>
      </Container>
    </footer>
  );
}

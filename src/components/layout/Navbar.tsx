"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const links = [
  { href: "/menu", label: "Menu", color: "text-pink hover:[text-shadow:0_0_16px_rgba(255,79,163,0.7)]" },
  { href: "/gallery", label: "Gallery", color: "text-lime hover:[text-shadow:0_0_16px_rgba(158,224,83,0.7)]" },
  { href: "/about", label: "About", color: "text-amber hover:[text-shadow:0_0_16px_rgba(224,152,74,0.7)]" },
  { href: "/contact", label: "Contact", color: "text-blue-light hover:[text-shadow:0_0_16px_rgba(122,164,255,0.7)]" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue/20 bg-ink/90 shadow-[0_4px_30px_-10px_rgba(61,123,255,0.4)] backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex items-center justify-center">
            <span className="absolute h-8 w-8 rounded-full bg-blue/40 blur-lg" />
            <Logo className="relative" />
          </span>
          <span className="neon-text font-script text-4xl text-blue-light">The Dive</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn("font-script text-2xl transition-all duration-200", l.color)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="shine-btn rounded-full bg-gradient-to-b from-blue-light to-blue px-6 py-2.5 font-script text-xl text-ink shadow-[0_4px_20px_-4px_rgba(61,123,255,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-4px_rgba(61,123,255,0.75)]"
          >
            Visit Us
          </Link>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="text-cream md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-blue/20 bg-ink md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn("rounded-lg px-3 py-3 font-script text-2xl transition-colors hover:bg-surface", l.color)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-b from-blue-light to-blue px-5 py-3 text-center font-script text-xl text-ink"
            >
              Visit Us
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

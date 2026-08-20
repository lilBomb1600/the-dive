import type { Metadata } from "next";
import { Music, HeartHandshake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { SectionGlow } from "@/components/ui/SectionGlow";
import { CocktailGlass, ChampagnePop } from "@/components/ui/BarDecor";
import { business } from "@/data/business";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: `About | ${business.name}`,
  description: business.description,
};

const heroImage = galleryImages.find((g) => g.id === "interior-turtle-neon")!;

const values = [
  {
    icon: HeartHandshake,
    title: "The owner knows your name",
    description: "Regulars say it themselves — the person behind the bar is often the owner, and he treats every seat like a friend's living room.",
    color: "blue" as const,
  },
  {
    icon: ShieldCheck,
    title: "A safe place for everyone",
    description: "The Dive is a welcoming space for all — friends, first-timers, and every community in between.",
    color: "pink" as const,
  },
  {
    icon: Music,
    title: "Good music, good nights",
    description: "Expect live music on select Saturdays, a full bar, and an atmosphere built for catching up with friends.",
    color: "lime" as const,
  },
];

const colorClasses = {
  blue: "from-blue/30 to-blue/5 text-blue shadow-[0_0_20px_-4px_rgba(61,123,255,0.6)]",
  pink: "from-pink/30 to-pink/5 text-pink shadow-[0_0_20px_-4px_rgba(255,79,163,0.6)]",
  lime: "from-lime/30 to-lime/5 text-lime shadow-[0_0_20px_-4px_rgba(158,224,83,0.6)]",
};

export default function AboutPage() {
  return (
    <div className="bg-ink">
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <SectionGlow className="-left-40 top-10" />
        <CocktailGlass className="pointer-events-none absolute -right-6 bottom-0 hidden h-56 w-56 opacity-[0.12] lg:block" />
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-6 bg-blue" />
              About Us
            </span>
            <h1 className="neon-text text-balance font-display text-5xl tracking-wide text-blue-light sm:text-6xl">
              A hidden gem in Walnut Creek
            </h1>
            <p className="mt-6 text-balance leading-relaxed text-muted">{business.description}</p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="glow-ring-blue relative aspect-[6/5] overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl"
          >
            <SmartImage src={heroImage.src} alt={heroImage.alt} ready={heroImage.ready} sizes="560px" priority />
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-border/60 bg-surface/40 py-20">
        <SectionGlow className="right-0 top-0" color="amber" />
        <ChampagnePop className="pointer-events-none absolute left-4 top-4 hidden h-48 w-48 opacity-[0.14] sm:block" />
        <Container className="text-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue">
              <span className="h-px w-6 bg-blue" />
              Our Mission
            </span>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl tracking-wide text-cream sm:text-5xl">
              Keep it simple: friendly service, fair prices, good company.
            </h2>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/5 bg-gradient-to-b from-surface to-surface-light p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-15px_rgba(61,123,255,0.25)]">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 ${colorClasses[v.color]}`}>
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl tracking-wide text-cream">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="border-t border-border/60 bg-surface/40 py-20">
        <Container>
          <Reveal className="flex flex-wrap justify-center gap-3">
            {["Veteran-Owned", "Latinx-Owned", "Wheelchair Accessible", "Private Lot Parking"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-cream/90 transition-colors hover:border-blue/40 hover:text-blue"
              >
                {badge}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>
    </div>
  );
}

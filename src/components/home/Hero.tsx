"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { business } from "@/data/business";
import { averageRating, reviewCount } from "@/data/reviews";

const tickerItems = ["Full Bar", "Happy Hour Specials", "Live Music Saturdays", "Outdoor Patio", "Walnut Creek's New Local"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pb-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(61,123,255,0.2),transparent_65%)]" />
        <motion.div
          animate={{ x: [0, 30, -10, 0], y: [0, -18, 12, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue/20 blur-3xl motion-reduce:animate-none"
        />
        <motion.div
          animate={{ x: [0, -20, 15, 0], y: [0, 15, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber/15 blur-3xl motion-reduce:animate-none"
        />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 h-32 w-44 sm:h-40 sm:w-56"
        >
          <div className="absolute inset-0 rounded-full bg-blue/25 blur-3xl" />
          <Image src="/images/logo/logo.png" alt="The Dive" fill sizes="220px" className="relative object-contain drop-shadow-[0_0_25px_rgba(61,123,255,0.6)]" priority />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue/30 bg-surface px-4 py-2 text-xs font-medium text-muted shadow-[0_0_20px_-6px_rgba(61,123,255,0.5)]"
        >
          <StarRating rating={averageRating} size={13} />
          <span>{averageRating.toFixed(1)} · {reviewCount} verified reviews</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="neon-text neon-power-on max-w-2xl text-balance font-display text-7xl leading-[0.95] tracking-wide text-blue-light sm:text-8xl"
        >
          Your new local.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
        >
          {business.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/menu"
            className="shine-btn group flex items-center gap-2 rounded-full bg-gradient-to-b from-blue-light to-blue px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_8px_30px_-6px_rgba(61,123,255,0.6)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_-6px_rgba(61,123,255,0.8)]"
          >
            View the Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={business.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur transition-all hover:-translate-y-1 hover:border-blue hover:text-blue"
          >
            <MapPin className="h-4 w-4" />
            {business.address.line2}
          </a>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="-rotate-1 mt-14 border-y border-blue/25 bg-gradient-to-r from-blue/10 via-amber/5 to-blue/10 py-3 shadow-[0_0_30px_-8px_rgba(61,123,255,0.4)]"
      >
        <div className="group flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {[0, 1].map((row) => (
            <div
              key={row}
              aria-hidden={row === 1}
              style={{ animationDuration: "26s" }}
              className="flex shrink-0 animate-marquee items-center gap-3 pr-3 motion-reduce:animate-none group-hover:[animation-play-state:paused]"
            >
              {tickerItems.map((t) => (
                <span key={t} className="flex shrink-0 items-center gap-3 px-4 text-sm font-bold uppercase tracking-widest text-blue">
                  {t}
                  <Sparkles className="h-3.5 w-3.5 text-amber" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

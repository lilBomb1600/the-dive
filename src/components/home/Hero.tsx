"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { StarRating } from "@/components/ui/StarRating";
import { business } from "@/data/business";
import { averageRating, reviewCount } from "@/data/reviews";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue/10 blur-3xl" />
      </div>

      <Container className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 h-32 w-44 sm:h-40 sm:w-56"
        >
          <Image src="/images/logo/logo.png" alt="The Dive" fill sizes="220px" className="object-contain" priority />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted"
        >
          <StarRating rating={averageRating} size={13} />
          <span>{averageRating.toFixed(1)} · {reviewCount} verified reviews</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl text-balance font-display text-6xl leading-[0.95] tracking-wide text-cream sm:text-7xl"
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
            className="group flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-blue/25 transition-all hover:-translate-y-0.5"
          >
            View the Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={business.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-blue hover:text-blue"
          >
            <MapPin className="h-4 w-4" />
            {business.address.line2}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

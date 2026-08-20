"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PouringBottle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 240"
      className={cn("drop-glow-amber text-amber", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* bottle, tilted */}
      <g transform="rotate(-32 70 70)">
        <rect x="52" y="20" width="36" height="90" rx="10" />
        <rect x="62" y="4" width="16" height="20" rx="4" />
        <path d="M56 50h28" opacity="0.5" />
      </g>
      {/* pour stream */}
      <motion.path
        d="M96 66 C 100 100, 108 120, 118 148"
        className="animate-pour text-amber-light"
        stroke="currentColor"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.9 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
      {/* droplets */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={112 + i * 3}
          cy="140"
          r="2.5"
          fill="currentColor"
          stroke="none"
          className="text-amber-light"
          style={{ animation: `drop-fall 0.9s ${i * 0.3}s infinite ease-in` }}
        />
      ))}
      {/* glass */}
      <path d="M100 150 L136 150 L128 210 L108 210 Z" />
      <motion.rect
        x="104"
        y="170"
        width="28"
        height="36"
        className="text-amber"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="none"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "bottom" }}
      />
    </svg>
  );
}

export function ChampagnePop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 240" className={cn("drop-glow-pink text-pink", className)} fill="none">
      {/* bottle */}
      <path
        d="M64 110 h40 a8 8 0 0 1 8 8 v70 a12 12 0 0 1 -12 12 h-32 a12 12 0 0 1 -12 -12 v-70 a8 8 0 0 1 8 -8 Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect x="78" y="70" width="12" height="42" stroke="currentColor" strokeWidth="3" />
      {/* cork, pops up */}
      <motion.g
        animate={{ y: [0, -46, -46, 0], opacity: [1, 1, 0, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.4, ease: ["easeOut", "linear", "linear"], times: [0, 0.25, 0.4, 1] }}
      >
        <rect x="76" y="52" width="16" height="18" rx="3" fill="currentColor" stroke="currentColor" strokeWidth="2" />
      </motion.g>
      {/* fizz burst lines */}
      {[[-24, -60], [0, -68], [24, -60], [-14, -50], [14, -50]].map(([dx, dy], i) => (
        <g
          key={i}
          style={{ transformOrigin: "84px 60px", animation: `fizz-ray 3.2s ${0.15 + i * 0.02}s infinite` }}
        >
          <line
            x1="84"
            y1="60"
            x2={84 + dx}
            y2={60 + dy}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={i % 2 === 0 ? "text-pink-light" : "text-lime"}
          />
        </g>
      ))}
      {/* confetti */}
      {[
        [-30, -70],
        [-10, -85],
        [16, -80],
        [32, -55],
        [-22, -50],
      ].map(([dx, dy], i) => (
        <g
          key={i}
          style={{ transformOrigin: "84px 60px", animation: `confetti-pop 3.2s ${0.2 + i * 0.03}s infinite` }}
        >
          <circle
            cx={84 + dx}
            cy={60 + dy}
            r="3"
            fill="currentColor"
            className={["text-pink", "text-lime", "text-amber-light", "text-pink-light", "text-lime-light"][i]}
          />
        </g>
      ))}
    </svg>
  );
}

export function CocktailGlass({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={cn("drop-glow-lime text-lime", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* glass */}
      <path d="M50 40 H150 L104 118 V180" />
      <path d="M78 200 H130" />
      <path d="M104 180 L104 200" />
      {/* liquid */}
      <path d="M60 50 H140 L106 112 H102 Z" fill="currentColor" fillOpacity="0.18" stroke="none" />
      {/* straw */}
      <path d="M128 30 L96 130" className="text-pink" stroke="currentColor" strokeWidth="4" />
      {/* lime wedge on rim */}
      <g transform="translate(146 34) rotate(20)">
        <path d="M0 0 A16 16 0 0 1 -16 16 Z" fill="currentColor" className="text-lime" stroke="currentColor" strokeWidth="2" />
        <path d="M-4 -1 L-13 8 M-7 3 L-12 8" strokeWidth="1.5" className="text-lime-light" />
      </g>
      {/* bubbles */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={92 + i * 8}
          cy="108"
          r="2"
          fill="currentColor"
          stroke="none"
          className="text-lime-light"
          style={{ animation: `bubble-rise 2.4s ${i * 0.6}s infinite ease-out` }}
        />
      ))}
    </svg>
  );
}

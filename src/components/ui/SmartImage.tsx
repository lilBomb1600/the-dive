"use client";

import Image from "next/image";
import { ImageIcon, Beer } from "lucide-react";

export function SmartImage({
  src,
  alt,
  ready,
  icon = "photo",
  sizes,
  priority,
  className,
}: {
  src: string;
  alt: string;
  ready: boolean;
  icon?: "photo" | "beer";
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  if (!ready) {
    const Icon = icon === "beer" ? Beer : ImageIcon;
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface to-surface-light">
        <Icon className="h-8 w-8 text-border" strokeWidth={1.5} />
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "100vw"}
      priority={priority}
      className={`object-cover ${className ?? ""}`}
    />
  );
}

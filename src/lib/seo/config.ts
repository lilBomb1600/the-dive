/**
 * ADAPT ME: the only kit file you edit per project.
 *
 * Map the project's data file (src/data/business.ts) onto the kit. Copy facts from that file; never type a new fact here.
 * If the data file doesn't have it (phone, more cities), leave the field out and ask the owner.
 */
import { business } from "@/data/business";
import type { BusinessFacts, BusinessType, DayOfWeek, Locale, OgImage, PageEntry, ServiceFact } from "./types";

/**
 * Origin used when NEXT_PUBLIC_SITE_URL isn't set: the *.vercel.app URL while it's a preview.
 * business.ts has no siteUrl, so this is the live preview host (the -mu one Vercel assigned).
 * On launch set NEXT_PUBLIC_SITE_URL=https://www.client.com in Vercel instead of editing this.
 */
export const FALLBACK_URL: string = "https://the-dive-mu.vercel.app";

/** Languages that have their OWN URL. This site is English only. */
export const LOCALES: Locale[] = ["en"];
export const DEFAULT_LOCALE: Locale = "en";

/**
 * 1200x630 JPG in public/. The gallery photos in data/gallery.ts are all marked ready: false (not shown on the site),
 * so the share card is the bar's own logo (public/images/logo/logo.png). Swap in a real photo once one is approved.
 */
export const OG_IMAGE: OgImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: `${business.name} logo: a blue sea turtle with the bar's name on its shell`,
};

// "Walnut Creek, CA 94597" -> locality, region, postal code (all from business.address.line2).
const [locality, regionZip] = business.address.line2.split(", ");
const [region, postalCode] = regionZip.split(" ");

/** "4:00 PM" -> "16:00", "12:00 AM" -> "00:00". */
function to24h(time: string): string {
  const [, h, m, ap] = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i) ?? [];
  if (!h) throw new Error(`[seo-kit] can't read the hours "${time}" in data/business.ts`);
  let hour = Number(h) % 12;
  if (ap.toUpperCase() === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${m}`;
}

/** One entry per day from business.hours ("4:00 PM – 12:00 AM"). Closing before opening means past midnight. */
const hours = business.hours.map(({ day, hours: span }) => {
  const [opens, closes] = span.split(/\s*[–-]\s*/);
  return { days: [day as DayOfWeek], opens: to24h(opens), closes: to24h(closes) };
});

export const facts: BusinessFacts = {
  name: business.name,
  // schema.org BarOrPub (a FoodEstablishment subtype) is the true type for a bar; the kit's union doesn't list it yet.
  type: "BarOrPub" as BusinessType,
  description: business.description,
  // business.ts has no phone number, so no telephone here.
  // Storefront: the full public address from business.ts.
  address: { street: business.address.line1, locality, region, postalCode },
  serviceArea: [`${locality}, ${region}`],
  image: [OG_IMAGE.url],
  logo: "/images/logo/logo.png",
  hasMap: business.mapsHref,
  hours,
  priceRange: business.priceRange,
  menu: "/menu",
};

/** A bar has no separate service pages, so no Service nodes. */
export const services: ServiceFact[] = [];

/** Every indexable URL. Leave out thank-you, invoice, handoff and preview-only pages. */
export const pages: PageEntry[] = [{ path: "/" }, { path: "/menu" }, { path: "/about" }, { path: "/gallery" }, { path: "/contact" }];

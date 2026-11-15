/**
 * Per-page titles and meta descriptions (LAUNCH-STANDARD.md section A): 50-60 character titles, 120-160 character
 * descriptions, real facts only (all from src/data/business.ts, menu.ts and gallery.ts).
 * pageMetadata() adds " | The Dive" to a title that doesn't already name the bar.
 */
import { localTitle } from "./metadata";

export const HOME_DESCRIPTION =
  "Laid-back neighborhood bar and lounge at 2580 N Main St in Walnut Creek, CA. Full bar, happy hour specials, covered patio and live music some Saturdays.";

export const pageCopy = {
  home: {
    title: localTitle("Neighborhood Bar & Lounge", "Walnut Creek"),
    description: HOME_DESCRIPTION,
    path: "/",
  },
  menu: {
    title: localTitle("Beer & Cocktail Menu", "Walnut Creek"),
    description:
      "Canned and draft beer, non-alcoholic beer and signature cocktails at The Dive, a neighborhood bar and lounge on N Main St in Walnut Creek, CA.",
    path: "/menu",
  },
  about: {
    title: "About The Dive, a Neighborhood Bar in Walnut Creek, CA",
    description:
      "The Dive is a veteran-owned, Latinx-owned neighborhood bar in Walnut Creek, CA: friendly service, fair prices, good music and a welcoming space for all.",
    path: "/about",
  },
  gallery: {
    title: localTitle("Bar & Lounge Gallery", "Walnut Creek"),
    description:
      "Inside The Dive, a neighborhood bar and lounge at 2580 N Main St in Walnut Creek, CA: blue neon, lounge seating, a full bar and a covered patio.",
    path: "/gallery",
  },
  contact: {
    title: "Hours & Directions to The Dive in Walnut Creek, CA",
    description:
      "Find The Dive at 2580 N Main St, Ste A in Walnut Creek, CA. Open daily from 4 PM (5 PM on weekends), no reservations needed, private lot parking.",
    path: "/contact",
  },
};

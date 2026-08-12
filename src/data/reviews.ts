export type Review = {
  name: string;
  badge?: string;
  rating: number;
  date: string;
  priceRange?: string;
  text: string;
  ownerReply?: string;
  featured?: boolean;
};

// Real customer reviews, sourced from Google. Do not invent or edit these.
export const reviews: Review[] = [
  {
    name: "KJL",
    badge: "Local Guide · 162 reviews",
    rating: 5,
    date: "2 months ago",
    priceRange: "$10–20",
    text: "There is a great new bar in Walnut Creek. The Dive. Super friendly staff, very reasonable prices, and great atmosphere. This is a true hidden gem of a speakeasy bar. You should definitely check this place out. This is your new local…",
    featured: true,
  },
  {
    name: "Marnie Perini",
    rating: 5,
    date: "6 months ago",
    text: "The drinks are very good quality and the service is even better. We had such a great time with the owner that we ended up booking a cocktail making class with him and about 12 friends. It was a wonderful experience! He is a really…",
    featured: true,
  },
  {
    name: "Walter Aguilar",
    badge: "Local Guide · 47 reviews",
    rating: 5,
    date: "Edited 2 months ago",
    priceRange: "$20–30",
    text: "I came here for the first time a few weeks ago. I popped in with some friends and like the place. Bartender was the owner and was very genuine. Came a second time the other week, and there was live music that Saturday!…",
  },
  {
    name: "Jason Stoddard",
    badge: "Local Guide · 86 reviews",
    rating: 5,
    date: "7 months ago",
    text: "Glad to see this place open. Excellent remodel and very nice staff.…",
  },
  {
    name: "Luis Garcia",
    badge: "14 reviews",
    rating: 5,
    date: "6 months ago",
    priceRange: "$30–40",
    text: "Friendly atmosphere where the owner knows everyone by name. They want to be a part of the community and ask what everyone wants to drink. Enjoyed my time there and will be back. Thank you Felix!…",
    ownerReply: "Thanks Luis, We loved having you.",
  },
  {
    name: "Sarah Muerte",
    rating: 5,
    date: "2 months ago",
    text: "ATTN: SHE/HER/THEY/THEM's Femmes and Queers alike!!! SAFE PLACE!…",
  },
];

export const averageRating = 5.0;
export const reviewCount = reviews.length;

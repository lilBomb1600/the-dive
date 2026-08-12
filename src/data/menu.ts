export type BeerItem = { name: string; style?: string; abv?: string };
export type CocktailItem = { name: string; description: string };

export const cansBeer: BeerItem[] = [
  { name: "Ghost Town 16oz" },
  { name: "War Ensemble", style: "West Coast IPA", abv: "7%" },
  { name: "Geisterfause", style: "Pilsner", abv: "5.1%" },
  { name: "Velvet Sacrament Imperial", style: "Chocolate Porter", abv: "8.1%" },
  { name: "Humble Sea — Unda da Sea", style: "Double Dry Hopped West Coast IPA", abv: "6.8%" },
  { name: "Humble Sea — Kookslayer", style: "American Amber Ale", abv: "5.3%" },
  { name: "Humble Sea — Humble Sea Helles", style: "Munich Helles", abv: "4.9%" },
  { name: "PBR" },
  { name: "Montucky Cold Snacks" },
  { name: "Miller Lite" },
  { name: "Coors Light" },
  { name: "Modelo" },
  { name: "Corona" },
];

export const nonAlcoholicBeer: BeerItem[] = [{ name: "Lagunitas Hop Water" }, { name: "Del Cielo Norale" }];

export const draftBeer: BeerItem[] = [
  { name: "Guinness" },
  { name: "Ghost Town Brewing — Inhume", style: "IPA", abv: "7%" },
  { name: "Humble Sea Brewing — Socks and Sandals", style: "Hazy", abv: "6.6%" },
  { name: "Cellarmaker — The Glow", style: "Hazy", abv: "6.2%" },
  { name: "Del Cielo — Orale", style: "Mexican Lager", abv: "5%" },
  { name: "Del Cielo — Morena Mia", style: "Amber", abv: "5%" },
  { name: "Lagunitas — Beast of Both Worlds", style: "IPA", abv: "8%" },
  { name: "Lagunitas", style: "IPA", abv: "6.2%" },
];

export const cocktails: CocktailItem[] = [
  {
    name: "Smoked Old Fashioned",
    description:
      "A bold classic with a little drama. Bourbon, dark cherry simple syrup, aromatic bitters, finished with a smoke and an expressed orange peel. Smooth. Strong. Smells like bad decisions done right.",
  },
  {
    name: "Spicy Paloma",
    description:
      "Bright, citrusy, and unapologetically fiery. Big Boy Tequila, grapefruit, lime, and soda — kicked up with sliced jalapeño. Refreshing at first… then it bites back.",
  },
  {
    name: "Canadian Tuxedo",
    description:
      "A smooth northern twist on a classic. Crown Royal whiskey gently sweetened with rich maple syrup for a warm, refined sip that says \"sorry… not sorry.\"",
  },
];

export const menuNote = "Cash gets a 4% discount.";

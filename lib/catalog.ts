// Catalogue data. Every product is a PLACEHOLDER until real photos,
// specifications and prices are supplied. Prices are deliberately null:
// no price is invented. Placeholder products are never given Offer or
// rating data in structured data.

import { photos, type Photo } from "./images";

export type FaqItem = { q: string; a: string };
export type Look = { title: string; body: string };

export type Category = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  paragraphs: string[];
  tips: string[];
  bestFor: string;
  looks: Look[];
  checklist: string[];
  materials: string;
  faqs: FaqItem[];
  sizing: "apparel" | "one-size";
  photos: Photo[];
};

// A colour the product comes in, with its own photos. The first is the default.
export type ColourVariant = {
  colour: string;
  photos: Photo[];
};

export type Product = {
  slug: string;
  name: string;
  category: Category["slug"];
  colour: string;
  summary: string;
  featured: boolean;
  placeholder: true;
  price: number | null;
  photos?: Photo[];
  variants?: ColourVariant[];
};

export const categories: Category[] = [
  {
    slug: "long-sleeve",
    name: "Long sleeve",
    title: "Long sleeve puffer jackets for women",
    intro:
      "Women's long sleeve puffer jackets for cold days and layering. Choose a hooded, cropped, belted, long or packable style.",
    paragraphs: [
      "A long sleeve puffer is the everyday answer to cold weather. The sleeves cover the wrists, and stitched channels hold the insulation in place, so the warmth stays where it belongs.",
      "Styles vary more than the name suggests. A hooded jacket helps in wind and drizzle, a cropped cut sits above the waist for a balanced line with high-waisted trousers, and a longer coat covers the hips on the coldest days.",
      "Check three things before you buy: the shell fabric, the fill and the closure. Then check the fit across the shoulders, and the sleeve length when you lift your arms.",
    ],
    tips: [
      "Pick a length: cropped for high waists, full length for the coldest days.",
      "Choose a hood if you walk in wind or rain.",
      "Try it on over the knit you will wear most often.",
    ],
    bestFor: "Cold days, wind, commuting and long walks",
    looks: [
      {
        title: "Over a fine knit and straight trousers",
        body: "A hooded puffer over a fine knit keeps the core warm without bulk. Straight trousers balance the length of a full-length jacket.",
      },
      {
        title: "Cropped, with high-waisted denim",
        body: "A cropped puffer sits above the waist, so pair it with high-waisted trousers or a skirt to keep the line balanced.",
      },
      {
        title: "A long coat over a dress",
        body: "A long puffer coat covers the hips. Worn over a dress or a wool skirt, it keeps the legs warmer than a short jacket would.",
      },
    ],
    checklist: [
      "Choose the length first: cropped, standard or long.",
      "Check the sleeve length with your arms raised.",
      "Look for a hood if you walk in wind or drizzle.",
      "Try it over the knit you wear most often.",
    ],
    materials:
      "Long sleeve puffers are usually made with a nylon or polyester shell. Nylon is smooth and light. Polyester dries quickly and keeps its shape. Check the label for the exact content, and follow the care instructions printed on the same label.",
    faqs: [
      {
        q: "Is a long sleeve puffer warm enough for snow?",
        a: "Warmth depends on the fill and the shell as much as the sleeve length. A heavier fill and a longer cut give more cover on snow days. A lighter jacket suits cool weather and layering.",
      },
      {
        q: "Should a puffer fit over a sweater?",
        a: "Yes. Choose a size that closes comfortably over a knit, without pulling at the shoulders or the arms.",
      },
      {
        q: "How long should the sleeves be?",
        a: "The sleeve should reach your wrist when your arms hang at your sides, and stay in place when you lift your arms.",
      },
      {
        q: "What is the difference between a cropped and a standard puffer?",
        a: "A cropped puffer ends above the waist and suits high-waisted bottoms. A standard length covers the waist and suits most trousers and skirts.",
      },
      {
        q: "Can I wear a long sleeve puffer for running?",
        a: "A puffer is built for warmth at rest and on slow walks. For running, choose a lighter layer that breathes.",
      },
    ],
    sizing: "apparel",
    photos: [
      photos.heroYellowPuffer,
      photos.whiteQuilted,
      photos.longSleeveTrench,
      photos.longSleevePark,
      photos.longSleeveWhite,
    ],
  },
  {
    slug: "sleeveless",
    name: "Sleeveless",
    title: "Sleeveless puffer vests for women",
    intro:
      "Puffer vests for women that layer over knitwear, shirts and jackets without adding bulk at the arms.",
    paragraphs: [
      "A sleeveless puffer keeps the core warm while your arms stay free. It is the simplest way to add warmth under a coat, over a shirt, or on top of a knit.",
      "Vests suit a layered wardrobe. Choose a classic quilted vest for a clean line, a hooded vest for wind, or a cropped vest that sits over high-waisted bottoms.",
      "Fit matters more than on a jacket. The armholes should sit close without pinching, and the body should skim the layer underneath.",
    ],
    tips: [
      "Layer over a shirt for everyday warmth.",
      "Wear under a tailored coat without adding bulk at the arms.",
      "Choose a hood if you want head cover in wind.",
    ],
    bestFor: "Layering over shirts and knits, and under coats",
    looks: [
      {
        title: "Over a crisp shirt and jeans",
        body: "A quilted vest over a shirt keeps the body warm while the arms stay free. It works with jeans or tailored trousers.",
      },
      {
        title: "Under a tailored wool coat",
        body: "A vest under a coat adds warmth without adding bulk at the arms, so the coat still sits well across the shoulders.",
      },
      {
        title: "Over a fitted knit on a cold day",
        body: "Stack a vest over a close-fitting knit for a warm core. Keep both layers slim so they lie flat under a coat.",
      },
    ],
    checklist: [
      "Pick a close armhole so the vest does not gap.",
      "Check the length against your waistband.",
      "Layer over a shirt or a fine knit, not a bulky sweater.",
      "Choose a hooded vest if you want head cover in wind.",
    ],
    materials:
      "Vests use the same shell and fill types as jackets, usually a nylon or polyester shell. The fill sits in quilted channels across the body. More channels keep the fill evenly spread, and fewer channels give a softer, less structured look.",
    faqs: [
      {
        q: "Can I wear a puffer vest under a coat?",
        a: "Yes. A sleeveless puffer adds warmth at the core without bulk at the arms, so it fits under a tailored coat.",
      },
      {
        q: "How should a vest fit?",
        a: "The armholes should sit close without pinching, and the hem should cover your waistband when you sit down.",
      },
      {
        q: "Is a vest enough on its own?",
        a: "On mild days, yes. On cold days, wear it over a knit or a shirt, or add a long layer over your arms.",
      },
      {
        q: "Is a vest warm enough for winter?",
        a: "A vest keeps the core warm. For winter, pair it with a long layer for the arms, such as a knit or a coat.",
      },
      {
        q: "Does a vest sit well under a backpack?",
        a: "A cropped or close-fitting vest sits flatter under a backpack strap. Choose a length that does not ride up when you wear a bag.",
      },
    ],
    sizing: "apparel",
    photos: [photos.longSleevePark, photos.longSleeveTrench, photos.longSleeveWhite],
  },
  {
    slug: "short-sleeve",
    name: "Short sleeve",
    title: "Short sleeve layers for women",
    intro:
      "Short sleeve quilted layers for women on mild days, indoors and under a coat.",
    paragraphs: [
      "A short sleeve layer works where a full puffer would be too much. It is light, easy to carry, and sits neatly under a jacket or a coat.",
      "These pieces suit changing weather: a cool morning that turns warm, or a heated room where you still want some cover. Choose a close fit to layer under outerwear, and a relaxed fit to wear on its own.",
      "Check the sleeve length and the hem. The sleeve should end above the elbow, and the hem should sit where your outer layer will not ride up.",
    ],
    tips: [
      "Use it as a base layer under a coat.",
      "Choose a close fit for layering, and a relaxed fit for wearing alone.",
      "Pair it with a vest for extra warmth without bulk.",
    ],
    bestFor: "Mild days, indoor warmth and layering under a coat",
    looks: [
      {
        title: "Under an open denim jacket",
        body: "A short sleeve layer under an open denim jacket adds quilted warmth without adding much weight.",
      },
      {
        title: "On its own with a midi skirt",
        body: "On a mild day, wear it with a midi skirt or relaxed trousers. The short sleeves keep the outfit light.",
      },
      {
        title: "Over a long-sleeve top",
        body: "Layer it over a long-sleeve top for a transitional look on cooler mornings, then take it off once the day warms up.",
      },
    ],
    checklist: [
      "Choose a close fit for layering, a relaxed fit for wearing alone.",
      "Check that the sleeve ends above the elbow.",
      "Check the hem so it does not ride up under a coat.",
      "Pick a neutral colour that works with what you already own.",
    ],
    materials:
      "Short sleeve layers are usually lighter than full puffers, with less fill or fewer channels. Lighter shells fold into a bag more easily, and heavier shells resist wind better. Check the fill and shell on the label before you buy.",
    faqs: [
      {
        q: "Is a short sleeve puffer warm enough on its own?",
        a: "It is best for mild weather. For cold weather, layer it under a coat or a long jacket.",
      },
      {
        q: "What do I wear with a short sleeve layer?",
        a: "Pair it with high-waisted trousers, a knit underneath, or a long coat over it.",
      },
      {
        q: "Can I wear it indoors?",
        a: "Yes. Short sleeve layers suit warm rooms, because you can take them off without fuss.",
      },
      {
        q: "Can I wear a short sleeve layer in summer?",
        a: "It suits cool evenings and air-conditioned rooms. In hot weather, a sleeveless top is more comfortable.",
      },
      {
        q: "Does a short sleeve layer fit under a coat?",
        a: "Choose a close fit so the coat sleeves sit over it without pulling. Try it on under the coat you plan to wear.",
      },
    ],
    sizing: "apparel",
    photos: [photos.shortSleeve],
  },
  {
    slug: "caps-hats",
    name: "Caps and hats",
    title: "Caps, beanies and hats for women",
    intro:
      "Knit beanies, quilted caps and bucket hats for women that finish a puffer outfit and keep your head warm.",
    paragraphs: [
      "Your head loses warmth quickly, so a beanie or cap makes a real difference on a cold walk. These pieces are small, but they finish the look and do practical work.",
      "Knit beanies are the warmest option for cold days, and pair well with any puffer. Quilted caps match the puffer collection and keep the wind off your face. Bucket hats add cover in drizzle and suit a relaxed outfit.",
      "Choose a size that sits snugly without leaving marks, and check the material on the label if you have sensitive skin.",
    ],
    tips: [
      "Choose a knit beanie for the warmest cover.",
      "Pick a quilted cap that matches your jacket.",
      "Use a bucket hat for drizzle and a relaxed look.",
    ],
    bestFor: "Cold mornings, wind on the face and finishing an outfit",
    looks: [
      {
        title: "A knit beanie with a long puffer",
        body: "A ribbed knit beanie covers the ears and suits a hooded or long puffer in cold weather.",
      },
      {
        title: "A quilted cap with a cropped jacket",
        body: "A quilted cap matches the puffer collection and keeps the wind off your face on a walk.",
      },
      {
        title: "A bucket hat with a casual layer",
        body: "A bucket hat adds cover in drizzle. It works well with a short sleeve layer and relaxed trousers.",
      },
    ],
    checklist: [
      "Measure around the head just above the ears.",
      "Choose a snug fit that does not leave marks.",
      "Pick a beanie for warmth, and a cap for shade and wind.",
      "Match the colour to your outerwear.",
    ],
    materials:
      "Knit hats are usually made from acrylic, cotton or wool blends. Acrylic is soft and easy to wash. Wool blends are warmer for their weight. Quilted caps have a padded shell, and a fleece lining adds warmth on cold mornings.",
    faqs: [
      {
        q: "Which hat keeps the most warmth?",
        a: "A close-fitting knit beanie covers the ears and holds heat well. A cap is better for shade and for wind on the face.",
      },
      {
        q: "How do I choose the right size?",
        a: "Measure around your head just above the ears, then choose the size that fits snugly without pinching. The size guide has more detail.",
      },
      {
        q: "Are caps and hats one size?",
        a: "Yes. Caps, beanies and hats are listed as one size unless a product page says otherwise.",
      },
      {
        q: "Do beanies stretch?",
        a: "Most knit beanies stretch slightly and recover. Choose a size that fits snugly when new, because a loose beanie loses warmth at the ears.",
      },
      {
        q: "Can I wear a cap with a hooded jacket?",
        a: "Caps sit more comfortably without a hood underneath. A beanie is easier to wear with a hooded jacket.",
      },
    ],
    sizing: "one-size",
    photos: [photos.capsPortrait, photos.snowCapScarf, photos.winterWoods, photos.capsWood, photos.capsHat],
  },
  {
    slug: "accessories",
    name: "Accessories",
    title: "Winter accessories for women",
    intro:
      "Scarves, gloves and bags for women that match the puffer collection and complete the outfit.",
    paragraphs: [
      "Accessories finish a winter outfit and add warmth at the neck and hands. A scarf, a pair of gloves and a practical bag make the collection work day to day.",
      "A thick knit scarf adds weight and warmth in cold weather. A printed silk scarf adds colour to a plain puffer. Gloves with touchscreen-friendly fingertips let you use a phone without taking them off.",
      "Choose colours that match your outerwear, and check the care label before you buy.",
    ],
    tips: [
      "Pick a knit scarf for warmth, and a printed scarf for colour.",
      "Choose gloves with touchscreen fingertips if you use a phone outdoors.",
      "Match the bag colour to your puffer.",
    ],
    bestFor: "Warmth at the neck and hands, and colour for plain outfits",
    looks: [
      {
        title: "A knit scarf over a puffer collar",
        body: "A thick knit scarf sits over a puffer collar and keeps the wind off the neck.",
      },
      {
        title: "A printed silk scarf with a black puffer",
        body: "A printed scarf adds colour to a plain black puffer without adding weight.",
      },
      {
        title: "Gloves that work with a phone",
        body: "Gloves with touchscreen-friendly fingertips let you use a phone outdoors without taking them off.",
      },
    ],
    checklist: [
      "Choose a thick knit scarf for warmth.",
      "Choose a printed scarf for colour and light cover.",
      "Check gloves for touchscreen-friendly fingertips.",
      "Match the bag size to what you carry every day.",
    ],
    materials:
      "Scarves come in knit, wool blend, cotton and silk. Thick knits hold the most warmth. Silk and fine printed scarves are lighter, and suit spring or mild days. Gloves may use synthetic or wool blend linings, so check the label for the exact materials.",
    faqs: [
      {
        q: "Which scarf is warmest?",
        a: "Thicker knit scarves hold the most warmth. Lightweight printed scarves add colour and a little cover.",
      },
      {
        q: "Do the gloves work with touchscreens?",
        a: "Some gloves have touchscreen-friendly fingertips. Check the product details on each listing.",
      },
      {
        q: "Is the bag suitable for everyday use?",
        a: "Padded totes carry laptops and daily items. Check the product details for the exact size.",
      },
      {
        q: "How do I wear a scarf with a puffer?",
        a: "Wrap a long scarf once so it sits over the collar. A knotted scarf can gap when you move, so keep the ends tucked in.",
      },
      {
        q: "How should I care for a knit scarf?",
        a: "Wash knits gently, lay them flat to dry, and avoid hanging a wet knit, which can stretch it.",
      },
    ],
    sizing: "one-size",
    photos: [photos.accessoriesKnit, photos.accessoriesSilk, photos.accessoriesFolded, photos.snowCapScarf],
  },
];

// The Aurora Luxe Puffer Jacket's own photos: front, back, side and three-quarter.
const auroraPhotos: Photo[] = [
  { src: "/products/aurora-luxe-puffer-jacket/1.webp", alt: "Aurora Luxe Puffer Jacket in black, front view", width: 1122, height: 1210 },
  { src: "/products/aurora-luxe-puffer-jacket/2.webp", alt: "Aurora Luxe Puffer Jacket in black, back view", width: 1122, height: 1210 },
  { src: "/products/aurora-luxe-puffer-jacket/3.webp", alt: "Aurora Luxe Puffer Jacket in black, side view", width: 1122, height: 1210 },
  { src: "/products/aurora-luxe-puffer-jacket/4.webp", alt: "Aurora Luxe Puffer Jacket in black, three-quarter view", width: 1122, height: 1210 },
];

// The Monarch Pearl Puffer Jacket's own photos: front, back, side and three-quarter.
const monarchPhotos: Photo[] = [
  { src: "/products/monarch-pearl-puffer-jacket/1.webp", alt: "Monarch Pearl Puffer Jacket in champagne, front view", width: 1122, height: 1140 },
  { src: "/products/monarch-pearl-puffer-jacket/2.webp", alt: "Monarch Pearl Puffer Jacket in champagne, three-quarter view", width: 1122, height: 1140 },
  { src: "/products/monarch-pearl-puffer-jacket/3.webp", alt: "Monarch Pearl Puffer Jacket in champagne, side view", width: 1122, height: 1140 },
  { src: "/products/monarch-pearl-puffer-jacket/4.webp", alt: "Monarch Pearl Puffer Jacket in champagne, back view", width: 1122, height: 1140 },
];

// The Celestine Burgundy Puffer's own photos: front, side, back and three-quarter.
const celestinePhotos: Photo[] = [
  { src: "/products/celestine-burgundy-puffer/1.webp", alt: "Celestine Burgundy Puffer in burgundy, front view", width: 1122, height: 1200 },
  { src: "/products/celestine-burgundy-puffer/2.webp", alt: "Celestine Burgundy Puffer in burgundy, back view", width: 1122, height: 1200 },
  { src: "/products/celestine-burgundy-puffer/3.webp", alt: "Celestine Burgundy Puffer in burgundy, side view", width: 1122, height: 1200 },
  { src: "/products/celestine-burgundy-puffer/4.webp", alt: "Celestine Burgundy Puffer in burgundy, three-quarter view", width: 1122, height: 1165 },
];

// The Sage Green Hooded Puffer Jacket's own photos: front, back, side and three-quarter.
const sagePhotos: Photo[] = [
  { src: "/products/sage-green-hooded-puffer-jacket/1.webp", alt: "Sage Green Hooded Puffer Jacket, front view", width: 1122, height: 1402 },
  { src: "/products/sage-green-hooded-puffer-jacket/2.webp", alt: "Sage Green Hooded Puffer Jacket, back view", width: 1122, height: 1402 },
  { src: "/products/sage-green-hooded-puffer-jacket/3.webp", alt: "Sage Green Hooded Puffer Jacket, side view", width: 1122, height: 1402 },
  { src: "/products/sage-green-hooded-puffer-jacket/4.webp", alt: "Sage Green Hooded Puffer Jacket, three-quarter view", width: 1122, height: 1402 },
];

// The Navy Quilted Puffer Vest's own photos: front, side and three-quarter.
const navyVestPhotos: Photo[] = [
  { src: "/products/navy-quilted-puffer-vest/1.webp", alt: "Navy Quilted Puffer Vest, front view", width: 1122, height: 1402 },
  { src: "/products/navy-quilted-puffer-vest/2.webp", alt: "Navy Quilted Puffer Vest, side view", width: 1122, height: 1402 },
  { src: "/products/navy-quilted-puffer-vest/3.webp", alt: "Navy Quilted Puffer Vest, three-quarter view", width: 1122, height: 1402 },
];

// The Teal Chevron Puffer Vest's own photos: front, back and side.
const tealVestPhotos: Photo[] = [
  { src: "/products/teal-chevron-puffer-vest/1.webp", alt: "Teal Chevron Puffer Vest, front view", width: 1086, height: 1448 },
  { src: "/products/teal-chevron-puffer-vest/2.webp", alt: "Teal Chevron Puffer Vest, back view", width: 1122, height: 1402 },
  { src: "/products/teal-chevron-puffer-vest/3.webp", alt: "Teal Chevron Puffer Vest, side view", width: 1122, height: 1402 },
];

// The Plum Quilted Puffer Vest's own photos: front, back and three-quarter.
const plumVestPhotos: Photo[] = [
  { src: "/products/plum-quilted-puffer-vest/1.webp", alt: "Plum Quilted Puffer Vest, front view", width: 1086, height: 1255 },
  { src: "/products/plum-quilted-puffer-vest/2.webp", alt: "Plum Quilted Puffer Vest, back view", width: 1063, height: 1307 },
  { src: "/products/plum-quilted-puffer-vest/3.webp", alt: "Plum Quilted Puffer Vest, three-quarter view", width: 1199, height: 1165 },
];

// The Emerald colour of the Plum Quilted Puffer Vest: front, back and three-quarter.
const emeraldVestPhotos: Photo[] = [
  { src: "/products/emerald-quilted-puffer-vest/1.webp", alt: "Emerald Quilted Puffer Vest, front view", width: 1086, height: 1448 },
  { src: "/products/emerald-quilted-puffer-vest/2.webp", alt: "Emerald Quilted Puffer Vest, back view", width: 1086, height: 1448 },
  { src: "/products/emerald-quilted-puffer-vest/3.webp", alt: "Emerald Quilted Puffer Vest, three-quarter view", width: 1086, height: 1448 },
];

export const products: Product[] = [
  { slug: "hooded-puffer-jacket", name: "Hooded Puffer Jacket", category: "long-sleeve", colour: "Black", summary: "A hooded long-sleeve puffer for everyday cold weather.", featured: true, placeholder: true, price: null },
  { slug: "cropped-puffer-jacket", name: "Cropped Puffer Jacket", category: "long-sleeve", colour: "Ivory", summary: "A cropped puffer that sits above the waist.", featured: false, placeholder: true, price: null },
  { slug: "long-puffer-coat", name: "Long Puffer Coat", category: "long-sleeve", colour: "Ink", summary: "A full-length puffer coat for the coldest days.", featured: false, placeholder: true, price: null },
  { slug: "belted-puffer-jacket", name: "Belted Puffer Jacket", category: "long-sleeve", colour: "Oxblood", summary: "A puffer with a self-tie belt at the waist.", featured: false, placeholder: true, price: null },
  { slug: "quilted-puffer-parka", name: "Quilted Puffer Parka", category: "long-sleeve", colour: "Stone", summary: "A quilted parka with a relaxed fit.", featured: false, placeholder: true, price: null },
  { slug: "packable-puffer-jacket", name: "Packable Puffer Jacket", category: "long-sleeve", colour: "Navy", summary: "A lightweight puffer that folds into its own pocket.", featured: false, placeholder: true, price: null },
  { slug: "aurora-luxe-puffer-jacket", name: "Aurora Luxe Puffer Jacket", category: "long-sleeve", colour: "Black", summary: "A glossy black puffer with a high funnel collar and silver zips, cut to the waist.", featured: false, placeholder: true, price: null, photos: auroraPhotos },
  { slug: "monarch-pearl-puffer-jacket", name: "Monarch Pearl Puffer Jacket", category: "long-sleeve", colour: "Champagne", summary: "A pearl-finish puffer with a high funnel collar and gold zips, cut to the waist.", featured: false, placeholder: true, price: null, photos: monarchPhotos },
  { slug: "celestine-burgundy-puffer", name: "Celestine Burgundy Puffer", category: "long-sleeve", colour: "Burgundy", summary: "A glossy burgundy puffer with a detachable hood and silver zips, cut to the waist.", featured: false, placeholder: true, price: null, photos: celestinePhotos },
  { slug: "sage-green-hooded-puffer-jacket", name: "Sage Green Hooded Puffer Jacket", category: "long-sleeve", colour: "Sage", summary: "A quilted sage-green puffer with a hood, drawcord ties and black cuffs, cut to the hip.", featured: false, placeholder: true, price: null, photos: sagePhotos },
  { slug: "quilted-puffer-vest", name: "Quilted Puffer Vest", category: "sleeveless", colour: "Black", summary: "A classic quilted vest for layering.", featured: true, placeholder: true, price: null },
  { slug: "hooded-puffer-vest", name: "Hooded Puffer Vest", category: "sleeveless", colour: "Olive", summary: "A hooded puffer vest with a close neck.", featured: false, placeholder: true, price: null },
  { slug: "cropped-puffer-vest", name: "Cropped Puffer Vest", category: "sleeveless", colour: "Ivory", summary: "A cropped vest that layers over a knit.", featured: false, placeholder: true, price: null },
  { slug: "navy-quilted-puffer-vest", name: "Navy Quilted Puffer Vest", category: "sleeveless", colour: "Navy", summary: "A quilted navy vest with a high collar and zip pockets, cut to the waist.", featured: false, placeholder: true, price: null, photos: navyVestPhotos },
  { slug: "teal-chevron-puffer-vest", name: "Teal Chevron Puffer Vest", category: "sleeveless", colour: "Teal", summary: "A chevron-quilted teal vest with a stand collar and snap front, cut to the waist.", featured: false, placeholder: true, price: null, photos: tealVestPhotos },
  { slug: "plum-quilted-puffer-vest", name: "Plum Quilted Puffer Vest", category: "sleeveless", colour: "Plum", summary: "A quilted plum vest with a high collar, zip front and zip pockets, cut to the waist.", featured: false, placeholder: true, price: null, photos: plumVestPhotos, variants: [
    { colour: "Plum", photos: plumVestPhotos },
    { colour: "Emerald", photos: emeraldVestPhotos },
  ] },
  { slug: "short-sleeve-puffer-layer", name: "Short Sleeve Puffer Layer", category: "short-sleeve", colour: "Black", summary: "A short-sleeve quilted layer for mild days.", featured: false, placeholder: true, price: null },
  { slug: "quilted-cropped-tee", name: "Quilted Cropped Tee", category: "short-sleeve", colour: "Stone", summary: "A cropped quilted top with short sleeves.", featured: false, placeholder: true, price: null },
  { slug: "ribbed-knit-beanie", name: "Ribbed Knit Beanie", category: "caps-hats", colour: "Black", summary: "A ribbed knit beanie that pairs with any puffer.", featured: true, placeholder: true, price: null },
  { slug: "quilted-baseball-cap", name: "Quilted Baseball Cap", category: "caps-hats", colour: "Navy", summary: "A quilted baseball cap with an adjustable strap.", featured: false, placeholder: true, price: null },
  { slug: "fleece-bucket-hat", name: "Fleece Bucket Hat", category: "caps-hats", colour: "Oat", summary: "A fleece-lined bucket hat for cold mornings.", featured: false, placeholder: true, price: null },
  { slug: "quilted-scarf", name: "Quilted Scarf", category: "accessories", colour: "Oxblood", summary: "A quilted scarf that matches the puffer collection.", featured: true, placeholder: true, price: null },
  { slug: "insulated-gloves", name: "Insulated Gloves", category: "accessories", colour: "Black", summary: "Insulated gloves with touchscreen-friendly fingertips.", featured: false, placeholder: true, price: null },
  { slug: "padded-tote-bag", name: "Padded Tote Bag", category: "accessories", colour: "Stone", summary: "A padded tote for everyday carry.", featured: false, placeholder: true, price: null },
];

export const apparelSizes = ["XS", "S", "M", "L", "XL"];
export const oneSize = ["One size"];

export function categoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function productsIn(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function sizesFor(categorySlug: string): string[] {
  const cat = categoryBySlug(categorySlug);
  return cat?.sizing === "one-size" ? oneSize : apparelSizes;
}

// A product with its own photos shows those first. Other products show a stock
// photo from their category, cycling through that category's photos.
export function photoForProduct(product: Product): Photo {
  if (product.photos?.length) return product.photos[0];
  const cat = categoryBySlug(product.category);
  const list = cat?.photos ?? [photos.heroYellowPuffer];
  const index = productsIn(product.category).findIndex((p) => p.slug === product.slug);
  return list[(index < 0 ? 0 : index) % list.length];
}

export function photoForCategory(category: Category): Photo {
  return category.photos[0];
}

// The product gallery: the product's own photos if it has them. Otherwise its
// stock photo first, then the other photos in its category, up to five views.
export function galleryForProduct(product: Product): Photo[] {
  if (product.photos?.length) return product.photos.slice(0, 5);
  const cat = categoryBySlug(product.category);
  const main = photoForProduct(product);
  const others = (cat?.photos ?? []).filter((p) => p.src !== main.src);
  return [main, ...others].slice(0, 5);
}

// The colours a product is sold in. A product without variants has one colour.
export function colourOptionsFor(product: Product): ColourVariant[] {
  return product.variants ?? [{ colour: product.colour, photos: galleryForProduct(product) }];
}

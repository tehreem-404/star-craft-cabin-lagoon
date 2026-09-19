export const site = {
  name: "Solara",
  tagline: "A house on the cliff",
  place: "Cala Solara, Campania",
  country: "Italy",
  email: "stay@solara.house",
  phone: "+39 089 184 7000",
  season: "12 April — 26 October",
  checkIn: "15:00",
  checkOut: "11:00",
  roomsCount: 16,
  address: "Via della Cala 12, Cala Solara, 84010 Campania",
} as const;

export type RoomView = "sea" | "garden" | "house";

export type Room = {
  slug: string;
  name: string;
  kind: string;
  view: RoomView;
  size: number;
  guests: number;
  beds: string;
  priceFrom: number;
  image: string;
  gallery: string[];
  blurb: string;
  description: string;
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "caldera",
    name: "The Caldera",
    kind: "Suite",
    view: "sea",
    size: 85,
    guests: 2,
    beds: "One king",
    priceFrom: 980,
    image: "/images/suite-caldera.jpg",
    gallery: ["/images/suite-caldera.jpg", "/images/pool.jpg", "/images/hero.jpg"],
    blurb:
      "The original belvedere. Lime, linen, a wrap of windows, and the whole cove below.",
    description:
      "The largest room in the house sits at the old lookout, where the cliff turns and the sea fills the frame. A long room of limewash and pale oak, a terrace that holds the afternoon, and a soaking tub cut from the same stone as the path down to the water. Evenings are for the shutters half-drawn and the sound of cicadas giving way to the tide.",
    amenities: [
      "Private sea terrace",
      "Deep stone tub",
      "Indoor–outdoor shower",
      "King bed",
      "Writing desk",
      "House linen and robes",
    ],
  },
  {
    slug: "olive",
    name: "Olive",
    kind: "Room",
    view: "garden",
    size: 42,
    guests: 2,
    beds: "One queen",
    priceFrom: 520,
    image: "/images/suite-olive.jpg",
    gallery: ["/images/suite-olive.jpg", "/images/path.jpg", "/images/spa.jpg"],
    blurb:
      "On the landward side, among the trees that give the room its name. Morning light, terracotta underfoot.",
    description:
      "Olive looks into the grove rather than the sea — silver leaves, dry-stone walls, the smell of crushed herb when the wind comes down the hill. Terracotta underfoot, limewashed walls, a terrace for coffee before the house is fully awake. A quieter room, for those who come to read and walk.",
    amenities: [
      "Garden terrace",
      "Queen bed",
      "Writing desk",
      "Rain shower",
      "House linen and robes",
      "Morning fruit from the grove",
    ],
  },
  {
    slug: "luna",
    name: "Luna House",
    kind: "House",
    view: "house",
    size: 120,
    guests: 3,
    beds: "King plus a daybed",
    priceFrom: 1640,
    image: "/images/suite-luna.jpg",
    gallery: ["/images/suite-luna.jpg", "/images/pool.jpg", "/images/dining.jpg"],
    blurb:
      "A small house of its own. Two floors, a plunge of still water, the coast at dusk.",
    description:
      "Luna is a house within the house: a sitting room that opens onto a private plunge, a bedroom above, and stone steps down to the shared path. Lamps go on at dusk and the water holds the last of the sky. For longer stays, or for two who want a door of their own.",
    amenities: [
      "Private plunge pool",
      "Two floors",
      "King bed and daybed",
      "Kitchenette",
      "Outdoor shower",
      "Separate entrance",
    ],
  },
  {
    slug: "cliff",
    name: "Cliff Studio",
    kind: "Studio",
    view: "sea",
    size: 36,
    guests: 2,
    beds: "One queen",
    priceFrom: 390,
    image: "/images/suite-cliff.jpg",
    gallery: ["/images/suite-cliff.jpg", "/images/hero.jpg", "/images/path.jpg"],
    blurb:
      "The original room. Narrow, white, a window the size of the sea. For those who come to swim.",
    description:
      "The first room we opened, and still the one guests ask for by the window. A compact studio of lime plaster and striped linen, a worn desk, and a single opening that frames deep water. Nothing extra. The path to the cove starts ten metres from the door.",
    amenities: [
      "Sea window",
      "Queen bed",
      "Writing desk",
      "Rain shower",
      "House linen and robes",
      "Closest to the cove path",
    ],
  },
];

export const viewLabels: Record<RoomView | "all", string> = {
  all: "All rooms",
  sea: "Sea",
  garden: "Garden",
  house: "House",
};

export type Experience = {
  slug: string;
  name: string;
  time: string;
  image: string;
  blurb: string;
  body: string;
};

export const experiences: Experience[] = [
  {
    slug: "chapel",
    name: "The chapel walk",
    time: "At first light, or late",
    image: "/images/path.jpg",
    blurb: "A limestone path, wild rosemary, and a white chapel on the headland.",
    body: "Forty minutes along the cliff, there and back. The house will pack water and a cloth for sitting. The chapel is unlocked in season. Come back for fruit and coffee on the terrace.",
  },
  {
    slug: "cove",
    name: "The cove",
    time: "Whenever the water is quiet",
    image: "/images/pool.jpg",
    blurb: "Stone steps, a ladder, and water that holds its colour until noon.",
    body: "The house path ends at a cut in the rock. Swim before breakfast, or at the end of the afternoon when the cliff throws shade. Towels wait on the landing. There is no beach — only stone and deep water.",
  },
  {
    slug: "baths",
    name: "The stone baths",
    time: "By appointment, two hours",
    image: "/images/spa.jpg",
    blurb: "A carved tub, late light from a high window, linen stacked in the warm.",
    body: "Two chambers in the old cistern. A soak, a quiet room, citrus in a bowl. Book the afternoon if you can — the light is better then. Treatments are simple: oil, salt, and time.",
  },
];

export const menu = {
  kitchen: "Mare",
  seating: "19:30 and 21:15",
  note: "Dinner is a single menu that follows the boats and the garden. Tell us in the morning if you do not eat fish, or if you eat only that.",
  courses: [
    {
      name: "To begin",
      dish: "Warm tomato, wild oregano, the house oil",
    },
    {
      name: "The catch",
      dish: "Whatever came in at dawn, fennel, lemon, a little chilli",
    },
    {
      name: "The land",
      dish: "Broad beans, mint, and ricotta from the next valley",
    },
    {
      name: "To finish",
      dish: "Stone fruit, almond, and honey from the grove",
    },
  ],
  wine: "Campanian whites by the glass, a short list of reds, and a cool dry vermouth before dinner.",
};

export const houseNotes = [
  {
    title: "Arriving",
    body: "Leave the car in the village. The last four hundred metres are on foot, or we will meet you with the house transfer. Bags go ahead.",
  },
  {
    title: "The season",
    body: "We open on 12 April and close on 26 October. August is the hottest month; June and September hold the light longest.",
  },
  {
    title: "At table",
    body: "Breakfast is on the terrace until 11:00. Dinner at Mare is for the house — two seatings, a single menu. Picnic lunches by request.",
  },
  {
    title: "The house",
    body: "Sixteen rooms, a pool that looks at the sea, and a path down to the cove. We ask that music stay indoors after 22:00.",
  },
];

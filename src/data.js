export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Why Us", href: "/#features" },
  { label: "Contact", href: "/contact" },
];

const assetBase = import.meta.env.BASE_URL;
export const heroPoster = {
  primary: `${assetBase}hero/hero-woman-cat.jpg`,
  secondary: `${assetBase}hero/hero-two-cats-chair.jpg`,
  tertiary: `${assetBase}hero/hero-cat-home.jpg`,
};

export const whatsappHref =
  "https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20litter%20box%20products.";

export const products = [
  {
    id: 1,
    slug: "litter-box-prime",
    name: "Self Cleaning Litter Box, Large Capacity Automatic Cat Litter Box Self Cleaning for Cats, App Control, Safety Protection, 2 Roll Garbage Bags, White & Grey",
    price: 599,
    category: "Automatic Series",
    image: `${assetBase}id1/litter-box-27.jpg`,
    gallery: [
      `${assetBase}id1/litter-box-27.jpg`,
      `${assetBase}id1/litter-box-28.jpg`,
      `${assetBase}id1/litter-box-29.jpg`,
      `${assetBase}id1/litter-box-30.jpg`,
      `${assetBase}id1/litter-box-31.jpg`,
      `${assetBase}id1/litter-box-32.jpg`,
    ],
    description:
      "This self cleaning litter box is built for cat owners who want less daily scooping and a cleaner home. Its generous 95L drum, 15L waste bin, quiet automatic cleaning, and built-in odor control make it well suited for single-cat or multi-cat homes.",
    intro:
      "Tuya Smart APP control adds remote cleaning, waste disposal, litter change support, and health tracking, while the advanced safety sensors help protect your cat during every cycle.",
    features: [
      "Cat safety priority with advanced presence sensors that pause cleaning cycles instantly.",
      "Large 95L drum and 15L waste bin suitable for cats from 2.2 to 33 lbs.",
      "Whisper-quiet operation for day and night use without disturbing rest.",
      "Deodorizing leak-resistant design keeps the litter area cleaner and fresher.",
      "Tuya Smart APP remote control with cleaning, disposal, litter change, and health tracking.",
    ],
    specs: {
      Capacity: "95L drum + 15L waste bin",
      WeightRange: "2.2 to 33 lbs cats",
      Connectivity: "Tuya Smart APP, 2.4G WiFi",
      Included: "2 roll garbage bags",
    },
  },
  {
    id: 2,
    slug: "litter-box-air",
    name: "Self Cleaning Litter Box, Open Top Automatic Litter Box with App Control for Multiple Cats, Safety Sensors Protection, Odor Control Includes 2 roll Liners, Large Waste Bin, Cream White",
    price: 599,
    category: "Automatic Series",
    image: `${assetBase}id2/litter-box-40.jpg`,
    gallery: [
      `${assetBase}id2/litter-box-40.jpg`,
      `${assetBase}id2/litter-box-41.jpg`,
      `${assetBase}id2/litter-box-42.jpg`,
      `${assetBase}id2/litter-box-43.jpg`,
      `${assetBase}id2/litter-box-44.jpg`,
      `${assetBase}id2/litter-box-45.jpg`,
      `${assetBase}id2/litter-box-46.jpg`,
      `${assetBase}id2/litter-box-47.jpg`,
    ],
    description:
      "This open-top self cleaning litter box is designed for cats that prefer a more open, less confining space while still giving owners the convenience of automatic cleaning.",
    intro:
      "Its roomy entrance, seven-sensor safety system, app control, sealed large waste bin, and odor-control design make it a strong fit for multiple-cat homes.",
    features: [
      "Open-top comfort with a spacious 16.5 x 16.5 inch entrance for easy access.",
      "Dual safety technology with 4 weight sensors and 3 infrared detectors.",
      "Smart APP control for remote cleaning, waste disposal scheduling, and full-bin alerts.",
      "10.5L sealed waste bin with odor-lock design for low-maintenance use.",
      "Leak-proof reusable liner system for easier cleanup and lower long-term cost.",
    ],
    specs: {
      Entrance: "16.5 x 16.5 in",
      WasteBin: "10.5L sealed compartment",
      Connectivity: "APP control, 2.4G WiFi",
      Included: "2 roll liners",
    },
  },
  {
    id: 3,
    slug: "litter-box-arc",
    name: "Automatic Cat Litter Box Self Cleaning - APP Control and Weight Monitoring - Ultra-Quiet, Suitable for Medium Cats and Kittens, Safe Anti-Pinch Litter Box (Assembly Required) - White",
    price: 599,
    category: "Semi-Automatic",
    image: `${assetBase}id3/litter-box-48.jpg`,
    gallery: [
      `${assetBase}id3/litter-box-48.jpg`,
      `${assetBase}id3/litter-box-49.jpg`,
      `${assetBase}id3/litter-box-50.jpg`,
      `${assetBase}id3/litter-box-51.jpg`,
      `${assetBase}id3/litter-box-52.jpg`,
      `${assetBase}id3/litter-box-53.jpg`,
      `${assetBase}id3/litter-box-54.jpg`,
    ],
    description:
      "This automatic cat litter box is designed for kittens and medium-sized cats that need a quieter, safer self-cleaning setup.",
    intro:
      "With app control, real-time weight and visit monitoring, low-noise operation under 35 dB, and an anti-pinch safety design, it helps simplify daily litter care without disrupting your home.",
    features: [
      "Ideal for kittens and medium-sized cats weighing from 3.5 lb to 15 lb.",
      "Low-noise performance below 35 dB for a quieter home environment.",
      "APP connectivity via 2.4GHz WiFi or Bluetooth with weight and visit tracking.",
      "Washable drum design for simpler daily maintenance and hygiene.",
      "Assembly required with guided manual and installation video support.",
    ],
    specs: {
      CatRange: "3.5 lb to 15 lb",
      Noise: "Below 35 dB",
      Connectivity: "2.4GHz WiFi or Bluetooth",
      Setup: "Assembly required",
    },
  },
  {
    id: 4,
    slug: "open-tray-studio",
    name: "Self Cleaning Cat Litter Box, Automatic Cat Litter Box with APP Control Odor Removal Safety Protection for Multiple Cats, with Garbage Bags",
    price: 599,
    category: "Essential Series",
    image: `${assetBase}id4/litter-box-55.jpg`,
    gallery: [
      `${assetBase}id4/litter-box-55.jpg`,
      `${assetBase}id4/litter-box-56.jpg`,
      `${assetBase}id4/litter-box-57.jpg`,
      `${assetBase}id4/litter-box-58.jpg`,
      `${assetBase}id4/litter-box-59.jpg`,
      `${assetBase}id4/litter-box-60.jpg`,
      `${assetBase}id4/litter-box-61.jpg`,
    ],
    description:
      "This self cleaning cat litter box is built to make everyday litter care easier, cleaner, and more convenient for multi-cat homes.",
    intro:
      "With automatic scooping, APP control, odor removal support, quiet operation, and built-in safety sensors, it helps keep the litter area fresh while reducing hands-on maintenance.",
    features: [
      "Effortless self-cleaning system for a fresher litter area with less manual scooping.",
      "Advanced odor control with separate aromatherapy box support.",
      "Eco-friendly and cost-effective design that reduces wasted litter over time.",
      "Quiet and discreet operation suited to daily home use.",
      "Built-in cat detection sensors and delayed cleaning cycle for safer operation.",
      "Easy setup and removable components for simpler maintenance.",
    ],
    specs: {
      UseCase: "Multiple cats",
      Connectivity: "APP control",
      Included: "Garbage bags",
      Safety: "Built-in cat presence sensors",
    },
  },
  {
    id: 5,
    slug: "odor-shield-refill-set",
    name: "Smart Self-Cleaning Litter Box with APP Control, Odor Exhaust System & 10L Waste Bin - White",
    price: 599,
    category: "Accessories",
    image: `${assetBase}id5/litter-box-21.jpg`,
    gallery: [
      `${assetBase}id5/litter-box-21.jpg`,
      `${assetBase}id5/litter-box-22.jpg`,
      `${assetBase}id5/litter-box-23.jpg`,
      `${assetBase}id5/litter-box-24.jpg`,
      `${assetBase}id5/litter-box-25.jpg`,
      `${assetBase}id5/litter-box-26.jpg`,
    ],
    description:
      "This smart self-cleaning litter box combines convenience and modern technology. With APP remote control, automatic waste separation, and an external odor exhaust system, it helps reduce daily litter box maintenance while keeping your home cleaner and fresher.",
    intro:
      "The generous 10L waste bin and easy-to-disassemble design make cleanup simple and hassle-free.",
    features: [
      "Large 68L litter chamber with 10L waste collection bin for single or multi-cat homes.",
      "Powerful odor exhaust system with extendable hose to vent smells outside.",
      "Smart APP control with remote use, weight sensing, and activity tracking.",
      "Fully automatic scooping with easy buckle disassembly for quick cleaning.",
      "User-friendly design with infrared entry sensor, interior lighting, and low-entry access.",
    ],
    specs: {
      Chamber: "68L litter chamber",
      WasteBin: "10L waste bin",
      ExhaustHose: "4.9 to 6.6 ft / 1.5 to 2 m",
      Color: "White",
    },
  },
  {
    id: 6,
    slug: "litter-mat-soft-grid",
    name: "Litter Mat Soft Grid",
    price: 49,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Double-layer trapping mat that reduces tracking and keeps modern spaces clean and polished.",
    intro:
      "A soft-touch floor accessory that pairs naturally with premium litter box product bundles.",
    features: [
      "Double-layer capture surface",
      "Soft paw-friendly texture",
      "Water-resistant bottom",
      "Easy shake-out cleaning",
    ],
    specs: {
      Size: "60 x 45 cm",
      Material: "EVA foam",
      Color: "Warm neutral gray",
      Use: "Indoor litter area protection",
    },
  },
  {
    id: 7,
    slug: "smart-waste-drawer",
    name: "Smart Waste Drawer",
    price: 89,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1493409137604-0901c55e4456?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493409137604-0901c55e4456?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Replacement sealed waste drawer for compatible automatic models.",
    intro:
      "A replacement component for maintenance sales and after-market orders.",
    features: [
      "Sealed odor-control lid",
      "Quick pull-out handle",
      "Easy liner fit",
      "OEM replacement support",
    ],
    specs: {
      Compatibility: "Prime series",
      Material: "ABS and silicone seal",
      Capacity: "Up to 7 days of waste",
      Finish: "Matte charcoal",
    },
  },
  {
    id: 8,
    slug: "carbon-filter-pack",
    name: "Carbon Filter Pack",
    price: 24,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Replacement carbon filter pack for long-term odor management.",
    intro:
      "A practical low-cost add-on for repeat orders and bundle promotions.",
    features: [
      "High-density odor filter",
      "Simple slot-in install",
      "Bulk order ready",
      "Long storage life",
    ],
    specs: {
      Quantity: "4 pieces",
      Compatibility: "Prime, Air",
      Material: "Activated carbon",
      Cycle: "2 to 4 weeks each",
    },
  },
  {
    id: 9,
    slug: "litter-scoop-pro",
    name: "Litter Scoop Pro",
    price: 19,
    category: "Essential Series",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Ergonomic scoop designed for simple daily cleaning and accessory bundles.",
    intro:
      "A lightweight accessory for entry-level catalog offers and add-on sales.",
    features: [
      "Wide mesh opening",
      "Comfort grip handle",
      "Easy wash finish",
      "Retail-ready packaging",
    ],
    specs: {
      Material: "ABS",
      Length: "29 cm",
      Weight: "160 g",
      Finish: "Smooth matte",
    },
  },
  {
    id: 10,
    slug: "travel-cat-box",
    name: "Travel Cat Box",
    price: 69,
    category: "Portable",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Portable foldable litter box for travel, short-term stays, and compact storage.",
    intro:
      "A flexible portable option for on-the-go pet owners and travel accessory lines.",
    features: [
      "Foldable transport format",
      "Water-resistant interior",
      "Lightweight carry design",
      "Fast setup structure",
    ],
    specs: {
      Size: "42 x 32 x 12 cm",
      Material: "Oxford fabric + PE board",
      Weight: "480 g",
      Use: "Travel and temporary placement",
    },
  },
  {
    id: 11,
    slug: "air-purify-module",
    name: "Air Purify Module",
    price: 59,
    category: "Automatic Series",
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Add-on odor treatment module for enhanced air freshness around automatic units.",
    intro:
      "An upgrade module designed to increase perceived premium value in smart litter product lines.",
    features: [
      "Plug-in deodorizing support",
      "Compact hidden housing",
      "Low-noise operation",
      "Premium upsell accessory",
    ],
    specs: {
      Compatibility: "Prime, Air",
      Power: "5V module",
      Noise: "<25 dB",
      Use: "Local air refresh support",
    },
  },
  {
    id: 12,
    slug: "replacement-liner-kit",
    name: "Replacement Liner Kit",
    price: 29,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A ready-to-order liner refill kit for routine maintenance and repeat purchases.",
    intro:
      "A simple accessory product that supports recurring revenue and easy bundle offers.",
    features: [
      "Durable leak-resistant liners",
      "Fast drawer installation",
      "Compact storage packaging",
      "Repeat-order friendly",
    ],
    specs: {
      Quantity: "20 liners",
      Compatibility: "Drawer-based models",
      Material: "Multi-layer PE film",
      Thickness: "Heavy duty",
    },
  },
];

export const stats = [
  { value: "12", label: "Curated products" },
  { value: "24h", label: "Seller response target" },
  { value: "99%", label: "Designed for odor control" },
];

export const features = [
  {
    icon: "01",
    title: "Minimal European visual language",
    text: "Large typography, neutral palettes, generous white space, and product-led storytelling inspired by your Figma Site.",
  },
  {
    icon: "02",
    title: "12-product direct inquiry flow",
    text: "The catalog is organized for fast browsing and direct seller communication instead of heavy checkout logic.",
  },
  {
    icon: "03",
    title: "Frontend only, ready to expand",
    text: "Everything is written in Vue and structured so we can add backend, CMS, or checkout later without redesigning.",
  },
];

export const faqItems = [
  {
    question: "Do these products support direct wholesale or private label inquiries?",
    answer:
      "Yes. This frontend is built around seller contact and can be adapted for wholesale, OEM, and distributor inquiry flows.",
  },
  {
    question: "Is online payment included right now?",
    answer:
      "Not yet. This version focuses on the full frontend presentation and inquiry flow only, as requested.",
  },
  {
    question: "Can product details be replaced later?",
    answer:
      "Yes. The product data is component-driven, so names, images, categories, and pricing can be swapped quickly.",
  },
];

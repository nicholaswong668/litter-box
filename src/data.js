export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Why Us", href: "/#features" },
  { label: "Contact", href: "/#contact" },
];

export const whatsappHref =
  "https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20litter%20box%20products.";

export const products = [
  {
    id: 1,
    slug: "litter-box-prime",
    name: "Litter Box Prime",
    price: 399,
    category: "Automatic Series",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80",
    description:
      "Self-cleaning litter box with odor-sealed waste drawer and low-noise motor for premium indoor living.",
    intro:
      "A flagship smart litter box designed for premium homes, export catalog presentation, and direct inquiry sales.",
    features: [
      "Automatic waste separation",
      "Quiet night mode",
      "Multi-point safety sensors",
      "Large sealed waste drawer",
    ],
    specs: {
      Size: "62 x 58 x 68 cm",
      Capacity: "Cats up to 10 kg",
      Material: "ABS shell and antimicrobial interior",
      Power: "100-240V adapter",
    },
  },
  {
    id: 2,
    slug: "litter-box-air",
    name: "Litter Box Air",
    price: 329,
    category: "Automatic Series",
    image:
      "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&w=1200&q=80",
    description:
      "Compact smart model designed for apartments, with safety sensors and one-touch cleaning cycles.",
    intro:
      "A space-conscious automatic unit with a soft rounded silhouette and simplified daily maintenance.",
    features: [
      "Compact apartment footprint",
      "One-touch cleaning cycle",
      "Anti-pinch sensor logic",
      "Easy-lift waste tray",
    ],
    specs: {
      Size: "54 x 52 x 61 cm",
      Capacity: "Cats up to 8 kg",
      Material: "Matte ABS housing",
      Power: "100-240V adapter",
    },
  },
  {
    id: 3,
    slug: "litter-box-arc",
    name: "Litter Box Arc",
    price: 289,
    category: "Semi-Automatic",
    image:
      "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?auto=format&fit=crop&w=1200&q=80",
    description:
      "Curved minimalist enclosure with anti-tracking step and concealed waste compartment.",
    intro:
      "A semi-automatic option with a cleaner silhouette for customers who want premium design at a lower entry point.",
    features: [
      "Curved shell enclosure",
      "Hidden waste compartment",
      "Anti-tracking front step",
      "Tool-free maintenance",
    ],
    specs: {
      Size: "60 x 45 x 50 cm",
      Capacity: "Cats up to 8 kg",
      Material: "ABS shell",
      Power: "Manual rotation system",
    },
  },
  {
    id: 4,
    slug: "open-tray-studio",
    name: "Open Tray Studio",
    price: 119,
    category: "Essential Series",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80",
    description:
      "Open-style litter tray with elevated walls, smooth shell finish, and easy-clean interior.",
    intro:
      "A clean and affordable tray design for customers who prefer simple daily cleaning and strong visual presentation.",
    features: [
      "High wall anti-splash design",
      "Open easy-access layout",
      "Quick-clean corners",
      "Lightweight body",
    ],
    specs: {
      Size: "53 x 41 x 25 cm",
      Capacity: "Cats up to 7 kg",
      Material: "PP plastic",
      Power: "No power required",
    },
  },
  {
    id: 5,
    slug: "odor-shield-refill-set",
    name: "Odor Shield Refill Set",
    price: 39,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1516727003284-a96541e51e9c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Carbon filter and liner set to keep the waste drawer fresh while extending maintenance intervals.",
    intro:
      "Consumable refill set built for recurring orders and accessory upsell opportunities.",
    features: [
      "Activated carbon filtration",
      "Custom-fit liner system",
      "Easy replacement cycle",
      "Accessory upsell ready",
    ],
    specs: {
      Pack: "6 filters + 12 liners",
      Compatibility: "Prime and Air series",
      Material: "Carbon fiber filter media",
      Cycle: "Approx. 30 days per filter",
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

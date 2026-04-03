<script setup>
const navigation = [
  { label: "Home", href: "#top" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#features" },
  { label: "Contact", href: "#contact" },
];

const featuredProducts = [
  {
    id: 1,
    name: "Litter Box Prime",
    price: 399,
    category: "Automatic Series",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80",
    description:
      "Self-cleaning litter box with odor-sealed waste drawer and low-noise motor for premium indoor living.",
  },
  {
    id: 2,
    name: "Litter Box Air",
    price: 329,
    category: "Automatic Series",
    image:
      "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&w=1200&q=80",
    description:
      "Compact smart model designed for apartments, with safety sensors and one-touch cleaning cycles.",
  },
  {
    id: 3,
    name: "Litter Box Arc",
    price: 289,
    category: "Semi-Automatic",
    image:
      "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?auto=format&fit=crop&w=1200&q=80",
    description:
      "Curved minimalist enclosure with anti-tracking step and concealed waste compartment.",
  },
  {
    id: 4,
    name: "Open Tray Studio",
    price: 119,
    category: "Essential Series",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80",
    description:
      "Open-style litter tray with elevated walls, smooth shell finish, and easy-clean interior.",
  },
  {
    id: 5,
    name: "Odor Shield Refill Set",
    price: 39,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1516727003284-a96541e51e9c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Carbon filter and liner set to keep the waste drawer fresh while extending maintenance intervals.",
  },
  {
    id: 6,
    name: "Litter Mat Soft Grid",
    price: 49,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    description:
      "Double-layer trapping mat that reduces tracking and keeps modern spaces clean and polished.",
  },
];

const catalogProducts = [
  {
    id: 7,
    name: "Smart Waste Drawer",
    price: 89,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1493409137604-0901c55e4456?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    name: "Carbon Filter Pack",
    price: 24,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    name: "Litter Scoop Pro",
    price: 19,
    category: "Essential Series",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    name: "Travel Cat Box",
    price: 69,
    category: "Portable",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 11,
    name: "Air Purify Module",
    price: 59,
    category: "Automatic Series",
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 12,
    name: "Replacement Liner Kit",
    price: 29,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
  },
];

const features = [
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

const stats = [
  { value: "12", label: "Curated products" },
  { value: "24h", label: "Seller response target" },
  { value: "99%", label: "Designed for odor control" },
];

const highlights = [
  "Self-cleaning options",
  "Apartment-friendly sizing",
  "Premium odor control",
  "Seller direct contact",
];

const faqItems = [
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

const whatsappHref =
  "https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20your%20litter%20box%20products.";
</script>

<template>
  <div id="top" class="site-shell">
    <header class="site-header">
      <div class="logo-block">
        <div class="logo-icon">LB</div>
        <div>
          <p class="logo-label">Modern Pet Living</p>
          <h1 class="logo-wordmark">Litter Box</h1>
        </div>
      </div>

      <nav class="site-nav" aria-label="Primary">
        <a v-for="item in navigation" :key="item.label" :href="item.href">
          {{ item.label }}
        </a>
      </nav>
    </header>

    <main>
      <section class="hero-section">
        <div class="hero-copy">
          <p class="section-kicker">Smart litter solutions for modern homes</p>
          <h2>
            Timeless cat care
            <br />
            <span>for elevated interiors</span>
          </h2>
          <p class="hero-text">
            A polished, European-style storefront for automatic and premium
            litter boxes. Built for direct seller contact, product browsing,
            and fast frontend launch.
          </p>

          <div class="hero-actions">
            <a class="button-primary" href="#products">Explore Collection</a>
            <a class="button-secondary" href="#contact">Contact Seller</a>
          </div>

          <ul class="pill-list">
            <li v-for="item in highlights" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="hero-card">
          <div class="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1400&q=80"
              alt="Premium litter box with cat lifestyle aesthetic"
            />
          </div>
          <div class="hero-card-meta">
            <div>
              <p class="card-kicker">Featured Model</p>
              <h3>Litter Box Prime</h3>
            </div>
            <strong>$399.00</strong>
          </div>
        </div>
      </section>

      <section class="stats-section">
        <article v-for="item in stats" :key="item.label" class="stat-card">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </article>
      </section>

      <section id="products" class="section-block">
        <div class="section-heading">
          <p class="section-kicker">Featured Products</p>
          <h3>Curated models for premium retail and direct inquiry</h3>
          <p>
            Built to mirror the clean product-first rhythm of your design while
            focusing the catalog around litter box solutions.
          </p>
        </div>

        <div class="product-grid featured-grid">
          <article
            v-for="product in featuredProducts"
            :key="product.id"
            class="product-card"
          >
            <div class="product-image">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="product-body">
              <p class="product-category">{{ product.category }}</p>
              <h4>{{ product.name }}</h4>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-footer">
                <strong>${{ product.price.toFixed(2) }}</strong>
                <a :href="whatsappHref" target="_blank" rel="noreferrer">
                  Inquire Now
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="features" class="section-block feature-band">
        <div class="section-heading narrow">
          <p class="section-kicker">Why Choose Us</p>
          <h3>Minimal, clear, and conversion-ready for export-oriented sales</h3>
        </div>

        <div class="feature-grid">
          <article v-for="item in features" :key="item.title" class="feature-card">
            <span>{{ item.icon }}</span>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="section-block">
        <div class="section-heading">
          <p class="section-kicker">Full Collection</p>
          <h3>12 products arranged in a clean catalog layout</h3>
        </div>

        <div class="product-grid catalog-grid">
          <article
            v-for="product in [...featuredProducts, ...catalogProducts]"
            :key="product.id"
            class="catalog-card"
          >
            <div class="catalog-image">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="catalog-meta">
              <p>{{ product.category }}</p>
              <h4>{{ product.name }}</h4>
              <strong>${{ product.price.toFixed(2) }}</strong>
            </div>
          </article>
        </div>
      </section>

      <section class="section-block newsletter-band">
        <div class="newsletter-card">
          <p class="section-kicker">Seller Contact</p>
          <h3>Request catalog, quote, or OEM details directly.</h3>
          <p>
            This page is optimized for direct communication, making it suitable
            for wholesale and international customer inquiries.
          </p>
          <div class="contact-actions">
            <a class="button-primary" :href="whatsappHref" target="_blank" rel="noreferrer">
              Contact on WhatsApp
            </a>
            <a class="button-secondary" href="mailto:sales@litterbox.com">
              sales@litterbox.com
            </a>
          </div>
        </div>
      </section>

      <section id="contact" class="section-block contact-section">
        <div class="section-heading">
          <p class="section-kicker">FAQ</p>
          <h3>Frontend delivery status</h3>
        </div>
        <div class="faq-grid">
          <article v-for="item in faqItems" :key="item.question" class="faq-card">
            <h4>{{ item.question }}</h4>
            <p>{{ item.answer }}</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <h3>Litter Box</h3>
        <p>
          Curated litter box solutions for modern households, distributors, and
          premium pet retailers.
        </p>
      </div>
      <div class="footer-links">
        <a v-for="item in navigation" :key="item.label" :href="item.href">
          {{ item.label }}
        </a>
      </div>
    </footer>

    <a
      class="whatsapp-float"
      :href="whatsappHref"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      WA
    </a>
  </div>
</template>

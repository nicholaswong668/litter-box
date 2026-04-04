<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";
import WhatsAppFloat from "../components/WhatsAppFloat.vue";
import { products, whatsappHref } from "../data";
import heroScene from "../../images/hero-scene.svg";

const email = ref("");
const subscribed = ref(false);

function toShortPoint(text) {
  return text
    .replace(/\s+/g, " ")
    .split(/[.,;:]/)[0]
    .replace(/^with\s+/i, "")
    .trim();
}

const showcaseProducts = computed(() =>
  products.slice(0, 5).map((product, index) => ({
    ...product,
    rating: [4.8, 4.6, 4.7, 4.5, 4.9][index] ?? 4.7,
    reviews: [1248, 892, 2156, 645, 978][index] ?? 860,
    points: product.features.slice(0, 3).map(toShortPoint),
  })),
);

const featureCards = [
  {
    icon: "OC",
    title: "Advanced Odor Control",
    description:
      "Multi-layer odor management helps keep the litter area cleaner and fresher for everyday home use.",
  },
  {
    icon: "PQ",
    title: "Premium Quality",
    description:
      "Carefully designed litter box products built for export presentation, long-term use, and safer pet care.",
  },
  {
    icon: "EF",
    title: "Eco-Friendly",
    description:
      "Efficient litter usage and reusable accessory options help reduce waste while improving daily maintenance.",
  },
  {
    icon: "EM",
    title: "Easy Maintenance",
    description:
      "From self-cleaning systems to washable components, each model is designed to simplify routine care.",
  },
];

function handleSubscribe() {
  if (!email.value) return;
  subscribed.value = true;
  email.value = "";
  window.setTimeout(() => {
    subscribed.value = false;
  }, 3000);
}
</script>

<template>
  <div id="top" class="site-shell">
    <SiteHeader />

    <main>
      <section class="home-hero">
        <div class="home-hero-inner">
          <div class="home-hero-copy">
            <h2>The Ultimate Litter Box for Your Cat</h2>
            <p>
              Experience the next generation of cat care with our premium,
              self-cleaning litter boxes. Keep your home fresh and your cat
              happy.
            </p>
            <div class="home-hero-actions">
              <a class="home-button home-button-primary" href="#products">
                Shop Now
              </a>
              <a class="home-button home-button-secondary" href="#contact">
                Learn More
              </a>
            </div>
          </div>

          <div class="home-hero-media">
            <img
              :src="heroScene"
              alt="Cat and litter box in a cozy home scene"
            />
          </div>
        </div>
      </section>

      <section id="products" class="home-products">
        <div class="home-section-heading">
          <h3>Our Premium Collection</h3>
          <p>
            Discover the perfect litter box solution for your feline friend. All
            products come with a 30-day satisfaction guarantee.
          </p>
        </div>

        <div class="home-product-grid home-product-grid-five">
          <RouterLink
            v-for="product in showcaseProducts"
            :key="product.id"
            class="home-product-card"
            :to="`/products/${product.slug}`"
          >
            <div class="home-product-image">
              <img :src="product.image" :alt="product.name" />
            </div>

            <div class="home-product-body">
              <h4 class="home-product-title">{{ product.name }}</h4>

              <div class="home-product-rating">
                <div class="home-stars" aria-hidden="true">
                  <span
                    v-for="star in 5"
                    :key="star"
                    :class="{ filled: star <= Math.floor(product.rating) }"
                  >
                    ★
                  </span>
                </div>
                <span>({{ product.reviews }})</span>
              </div>

              <ul class="home-product-points">
                <li v-for="point in product.points" :key="point">{{ point }}</li>
              </ul>

              <div class="home-product-footer">
                <strong>${{ product.price.toFixed(2) }}</strong>
                <span class="home-view-button">View</span>
              </div>
            </div>
          </RouterLink>
        </div>
      </section>

      <section id="features" class="home-features">
        <div class="home-section-heading">
          <h3>Why Choose PurrfectBox?</h3>
          <p>
            Trusted by thousands of cat owners worldwide. Experience the
            difference quality makes.
          </p>
        </div>

        <div class="home-feature-grid">
          <article
            v-for="item in featureCards"
            :key="item.title"
            class="home-feature-card"
          >
            <div class="home-feature-icon">{{ item.icon }}</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </article>
        </div>

        <div class="home-banner">
          <h4>Join 50,000+ Happy Cat Owners</h4>
          <p>
            “Best investment I've made for my cats. The odor control is
            incredible!”
          </p>
          <div class="home-banner-stats">
            <div>
              <strong>50K+</strong>
              <span>Happy Customers</span>
            </div>
            <div>
              <strong>4.8★</strong>
              <span>Average Rating</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Would Recommend</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="home-subscribe">
        <div class="newsletter-card newsletter-card-dark">
          <p class="section-kicker section-kicker-light">Stay Updated</p>
          <h3>Subscribe for catalog updates and new arrivals.</h3>
          <p>
            Get product updates, featured launches, and seller communication for
            premium cat care collections.
          </p>

          <div v-if="subscribed" class="subscribe-success">
            Thank you for subscribing!
          </div>
          <form v-else class="subscribe-form" @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              class="subscribe-input"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button class="subscribe-button" type="submit">Subscribe</button>
          </form>

          <div class="contact-actions contact-actions-center">
            <a
              class="button-secondary button-secondary-light"
              :href="whatsappHref"
              target="_blank"
              rel="noreferrer"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
    <WhatsAppFloat />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";
import WhatsAppFloat from "../components/WhatsAppFloat.vue";
import { heroPoster, products, features, whatsappHref } from "../data";

const featuredProducts = products.slice(0, 6);
const email = ref("");
const subscribed = ref(false);

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
      <section class="hero-section hero-section-reference">
        <div class="hero-copy">
          <p class="section-kicker">Smart litter solutions for modern homes</p>
          <h2>
            Timeless cat care
            <br />
            <span>for elevated interiors</span>
          </h2>
          <p class="hero-text">
            A polished, European-style storefront for automatic and premium
            litter boxes. Built for direct seller contact, product browsing, and
            fast frontend launch.
          </p>

          <div class="hero-actions">
            <RouterLink class="button-primary" to="/products">
              Explore Collection
            </RouterLink>
            <a
              class="button-secondary"
              :href="whatsappHref"
              target="_blank"
              rel="noreferrer"
            >
              Contact Seller
            </a>
          </div>
        </div>

        <div class="hero-card hero-card-reference">
          <div class="hero-collage hero-collage-reference">
            <div class="hero-collage-main">
              <img
                :src="heroPoster.primary"
                alt="Woman cuddling a cat in a warm modern home"
              />
            </div>
            <div class="hero-collage-side">
              <div class="hero-collage-top">
                <img
                  :src="heroPoster.secondary"
                  alt="Two cats relaxing together in a modern living room"
                />
              </div>
              <div class="hero-collage-bottom">
                <img
                  :src="heroPoster.tertiary"
                  alt="Cat enjoying a cozy indoor home scene"
                />
              </div>
            </div>
            <div class="hero-collage-overlay">
              <span>Warm Home Story</span>
              <p>
                Friendly cats, soft interiors, and a joyful family-home mood for
                modern pet living.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" class="section-block">
        <div class="section-heading centered-heading">
          <p class="section-kicker">Featured Products</p>
          <h3>A selection of our most popular pieces</h3>
          <p>Clean browsing, premium presentation, and direct inquiry flow.</p>
        </div>

        <div class="product-grid featured-grid">
          <RouterLink
            v-for="product in featuredProducts"
            :key="product.id"
            class="product-card product-link-card"
            :to="`/products/${product.slug}`"
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
                <span>View Details</span>
              </div>
            </div>
          </RouterLink>
        </div>

        <div class="section-cta">
          <RouterLink class="button-secondary" to="/products">
            View All Products
          </RouterLink>
        </div>
      </section>

      <section id="features" class="section-block values-section">
        <div class="feature-grid value-grid">
          <article v-for="item in features" :key="item.title" class="feature-card value-card">
            <div class="value-icon">{{ item.icon }}</div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section class="section-block newsletter-band">
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

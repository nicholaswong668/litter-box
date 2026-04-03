<script setup>
import { RouterLink } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";
import WhatsAppFloat from "../components/WhatsAppFloat.vue";
import {
  heroPoster,
  products,
  stats,
  features,
  faqItems,
  whatsappHref,
} from "../data";

const featuredProducts = products.slice(0, 6);
const highlights = [
  "Self-cleaning options",
  "Apartment-friendly sizing",
  "Premium odor control",
  "Seller direct contact",
];
</script>

<template>
  <div id="top" class="site-shell">
    <SiteHeader />

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
            <RouterLink class="button-primary" to="/products">
              Explore Collection
            </RouterLink>
            <a class="button-secondary" href="#contact">Contact Seller</a>
          </div>

          <ul class="pill-list">
            <li v-for="item in highlights" :key="item">{{ item }}</li>
          </ul>
        </div>

        <div class="hero-card">
          <div class="hero-image-wrap">
            <img
              :src="heroPoster"
              alt="Editorial cat poster for premium pet lifestyle storefront"
            />
          </div>
          <div class="hero-card-meta">
            <div>
              <p class="card-kicker">Editorial Poster</p>
              <h3>Modern Cat Living</h3>
            </div>
            <strong>Display Only</strong>
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
          <RouterLink
            v-for="product in products"
            :key="product.id"
            class="catalog-card product-link-card"
            :to="`/products/${product.slug}`"
          >
            <div class="catalog-image">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="catalog-meta">
              <p>{{ product.category }}</p>
              <h4>{{ product.name }}</h4>
              <strong>${{ product.price.toFixed(2) }}</strong>
            </div>
          </RouterLink>
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

    <SiteFooter />
    <WhatsAppFloat />
  </div>
</template>

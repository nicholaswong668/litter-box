<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";
import WhatsAppFloat from "../components/WhatsAppFloat.vue";
import ProductGallery from "../components/ProductGallery.vue";
import { products, whatsappHref } from "../data";

const route = useRoute();

const product = computed(() =>
  products.find((item) => item.slug === route.params.slug),
);

const relatedProducts = computed(() =>
  products
    .filter(
      (item) =>
        item.slug !== route.params.slug &&
        item.category === product.value?.category,
    )
    .slice(0, 3),
);
</script>

<template>
  <div v-if="product" class="site-shell">
    <SiteHeader />

    <main>
      <section class="detail-back-row">
        <RouterLink class="detail-back-link" to="/products">
          &larr; Back
        </RouterLink>
      </section>

      <section class="section-block detail-layout">
        <ProductGallery :images="product.gallery" :alt="product.name" />

        <div class="detail-copy">
          <p class="section-kicker">{{ product.category }}</p>
          <h2 class="detail-title">{{ product.name }}</h2>
          <p class="detail-inline-price">${{ product.price.toFixed(2) }}</p>
          <div class="detail-copy-block">
            <p class="amazon-description">{{ product.description }}</p>
          </div>

          <div class="detail-section">
            <h3>Specifications</h3>
            <div class="spec-grid spec-grid-compact">
              <div v-for="(value, key) in product.specs" :key="key" class="spec-row spec-row-plain">
                <span>{{ key }}:</span>
                <strong>{{ value }}</strong>
              </div>
            </div>
          </div>

          <div class="amazon-divider"></div>

          <div class="detail-section">
            <h3>Features</h3>
            <ul class="detail-list detail-check-list">
              <li v-for="item in product.features" :key="item">{{ item }}</li>
            </ul>
          </div>

          <div class="detail-actions detail-actions-wide">
            <a class="button-whatsapp" :href="whatsappHref" target="_blank" rel="noreferrer">
              Contact on WhatsApp
            </a>
            <a class="button-secondary detail-secondary-button" href="mailto:sales@litterbox.com">
              Inquire Now
            </a>
          </div>

          <div class="amazon-divider"></div>

          <div class="detail-trust-grid">
            <div class="detail-trust-item">
              <strong>Free Shipping</strong>
              <span>On orders over $100</span>
            </div>
            <div class="detail-trust-item">
              <strong>Easy Returns</strong>
              <span>30-day guarantee</span>
            </div>
            <div class="detail-trust-item">
              <strong>Secure Payment</strong>
              <span>100% protected</span>
            </div>
          </div>
        </div>
      </section>

      <section v-if="relatedProducts.length" class="section-block">
        <div class="section-heading">
          <p class="section-kicker">Related Products</p>
          <h3>More in this category</h3>
        </div>

        <div class="product-grid catalog-grid">
          <RouterLink
            v-for="item in relatedProducts"
            :key="item.id"
            class="catalog-card product-link-card"
            :to="`/products/${item.slug}`"
          >
            <div class="catalog-image">
              <img :src="item.image" :alt="item.name" />
            </div>
            <div class="catalog-meta">
              <p>{{ item.category }}</p>
              <h4>{{ item.name }}</h4>
              <strong>${{ item.price.toFixed(2) }}</strong>
            </div>
          </RouterLink>
        </div>
      </section>
    </main>

    <SiteFooter />
    <WhatsAppFloat />
  </div>

  <div v-else class="site-shell">
    <SiteHeader />
    <main class="section-block">
      <div class="newsletter-card">
        <p class="section-kicker">Product Not Found</p>
        <h3>This product page does not exist.</h3>
        <div class="contact-actions">
          <RouterLink class="button-primary" to="/products">
            Back to Products
          </RouterLink>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

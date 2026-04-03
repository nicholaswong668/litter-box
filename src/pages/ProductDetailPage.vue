<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";
import WhatsAppFloat from "../components/WhatsAppFloat.vue";
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
      <section class="section-block detail-layout">
        <div class="detail-image">
          <img :src="product.image" :alt="product.name" />
        </div>

        <div class="detail-copy">
          <p class="section-kicker">{{ product.category }}</p>
          <h2 class="detail-title">{{ product.name }}</h2>
          <p class="detail-intro">{{ product.intro }}</p>
          <strong class="detail-price">${{ product.price.toFixed(2) }}</strong>

          <div class="detail-actions">
            <a class="button-primary" :href="whatsappHref" target="_blank" rel="noreferrer">
              Inquire on WhatsApp
            </a>
            <RouterLink class="button-secondary" to="/products">
              Back to Products
            </RouterLink>
          </div>

          <div class="detail-panel">
            <h3>Overview</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </section>

      <section class="detail-sections">
        <article class="detail-panel">
          <h3>Key Features</h3>
          <ul class="detail-list">
            <li v-for="item in product.features" :key="item">{{ item }}</li>
          </ul>
        </article>

        <article class="detail-panel">
          <h3>Specifications</h3>
          <div class="spec-grid">
            <div v-for="(value, key) in product.specs" :key="key" class="spec-row">
              <span>{{ key }}</span>
              <strong>{{ value }}</strong>
            </div>
          </div>
        </article>
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

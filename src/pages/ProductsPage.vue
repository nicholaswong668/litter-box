<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";
import WhatsAppFloat from "../components/WhatsAppFloat.vue";
import { products } from "../data";

const activeCategory = ref("All");
const categories = ["All", ...new Set(products.map((item) => item.category))];
const filteredProducts = computed(() =>
  activeCategory.value === "All"
    ? products
    : products.filter((item) => item.category === activeCategory.value),
);
</script>

<template>
  <div class="site-shell">
    <SiteHeader />

    <main>
      <section class="section-block page-hero">
        <div class="section-heading">
          <p class="section-kicker">Our Collection</p>
          <h3>Browse the full litter box and accessory catalog</h3>
          <p>
            A product listing page designed for clear browsing, category
            filtering, and fast access to detailed product pages.
          </p>
        </div>
      </section>

      <section class="section-block products-toolbar">
        <div class="filter-list">
          <button
            v-for="category in categories"
            :key="category"
            class="filter-chip"
            :class="{ active: activeCategory === category }"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <div class="product-grid catalog-grid">
          <RouterLink
            v-for="product in filteredProducts"
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
    </main>

    <SiteFooter />
    <WhatsAppFloat />
  </div>
</template>

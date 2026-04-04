<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";
import WhatsAppFloat from "../components/WhatsAppFloat.vue";
import { products } from "../data";

const activeCategory = ref("All");
const categories = ["All", ...new Set(products.map((item) => item.category))];

function toShortPoint(text) {
  const shortened = text
    .replace(/\s+/g, " ")
    .split(/[.,;:]/)[0]
    .replace(/^with\s+/i, "")
    .trim();

  return shortened.length > 58 ? `${shortened.slice(0, 55).trim()}...` : shortened;
}

const filteredProducts = computed(() =>
  activeCategory.value === "All"
    ? products
    : products.filter((item) => item.category === activeCategory.value),
);

const displayProducts = computed(() =>
  filteredProducts.value.map((product) => ({
    ...product,
    displayTitle:
      product.name.length > 138
        ? `${product.name.slice(0, 135).trim()}...`
        : product.name,
    points: product.features.slice(0, 3).map(toShortPoint),
  })),
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
            v-for="product in displayProducts"
            :key="product.id"
            class="catalog-card product-link-card"
            :to="`/products/${product.slug}`"
          >
            <div class="catalog-image">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="catalog-meta">
              <p>{{ product.category }}</p>
              <h4 class="catalog-title">{{ product.displayTitle }}</h4>
              <ul class="catalog-points">
                <li v-for="point in product.points" :key="point">{{ point }}</li>
              </ul>
              <div class="catalog-footer">
                <strong>${{ product.price.toFixed(2) }}</strong>
                <span class="catalog-view-button">View</span>
              </div>
            </div>
          </RouterLink>
        </div>
      </section>
    </main>

    <SiteFooter />
    <WhatsAppFloat />
  </div>
</template>

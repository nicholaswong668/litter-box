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

function partitions(words, lineCount) {
  if (lineCount === 1) {
    return [[words.join(" ")]];
  }

  const results = [];

  function backtrack(start, remaining, current) {
    if (remaining === 1) {
      const tail = words.slice(start).join(" ");
      if (tail) results.push([...current, tail]);
      return;
    }

    for (let i = start + 1; i <= words.length - remaining + 1; i += 1) {
      const segment = words.slice(start, i).join(" ");
      if (!segment) continue;
      backtrack(i, remaining - 1, [...current, segment]);
    }
  }

  backtrack(0, lineCount, []);
  return results;
}

function splitTitle(title) {
  const words = title.split(" ").filter(Boolean);
  if (words.length <= 4) return [title];

  let best = [title];
  let bestScore = Number.POSITIVE_INFINITY;

  for (let count = 1; count <= Math.min(3, words.length); count += 1) {
    const candidateGroups = partitions(words, count);

    for (const lines of candidateGroups) {
      const lengths = lines.map((line) => line.length);
      const maxLen = Math.max(...lengths);
      const minLen = Math.min(...lengths);
      const imbalance = maxLen - minLen;
      const score = maxLen * 1.2 + imbalance * 0.45 + (count - 1) * 4;

      if (score < bestScore) {
        best = lines;
        bestScore = score;
      }
    }
  }

  return best;
}

const titleLines = computed(() =>
  product.value ? splitTitle(product.value.name) : [],
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
          <h2 class="detail-title">
            <span v-for="line in titleLines" :key="line" class="detail-title-line">
              {{ line }}
            </span>
          </h2>
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

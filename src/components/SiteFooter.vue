<script setup>
import { RouterLink } from "vue-router";
import { navigation } from "../data";
</script>

<template>
  <footer class="site-footer">
    <div>
      <h3>Anchongji（安宠吉）</h3>
      <p>
        Curated pet care solutions for modern households, distributors, and
        premium pet retailers.
      </p>
    </div>
    <div class="footer-links">
      <RouterLink v-for="item in navigation" :key="item.label" :to="item.href">
        {{ item.label }}
      </RouterLink>
    </div>
  </footer>
</template>

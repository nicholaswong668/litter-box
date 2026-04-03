<script setup>
import { RouterLink } from "vue-router";
import { navigation } from "../data";
</script>

<template>
  <footer class="site-footer">
    <div>
      <h3>Litter Box</h3>
      <p>
        Curated litter box solutions for modern households, distributors, and
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

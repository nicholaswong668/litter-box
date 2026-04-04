<script setup>
import { RouterLink } from "vue-router";
import { navigation } from "../data";
</script>

<template>
  <header class="site-header">
    <RouterLink class="logo-block" to="/">
      <div class="logo-icon">ACJ</div>
      <div>
        <h1 class="logo-wordmark">ANCHONGJI</h1>
      </div>
    </RouterLink>

    <nav class="site-nav" aria-label="Primary">
      <RouterLink v-for="item in navigation" :key="item.label" :to="item.href">
        {{ item.label }}
      </RouterLink>
    </nav>
  </header>
</template>

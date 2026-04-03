<script setup>
import { whatsappHref } from "../data";
</script>

<template>
  <a
    class="whatsapp-float"
    :href="whatsappHref"
    target="_blank"
    rel="noreferrer"
    aria-label="Contact us on WhatsApp"
  >
    WA
  </a>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});

const selectedIndex = ref(0);
const startIndex = ref(0);
const visibleCount = 5;

watch(
  () => props.images,
  () => {
    selectedIndex.value = 0;
    startIndex.value = 0;
  },
  { immediate: true },
);

const visibleImages = computed(() =>
  props.images.slice(startIndex.value, startIndex.value + visibleCount),
);

function selectImage(index) {
  selectedIndex.value = index;
  if (index < startIndex.value) {
    startIndex.value = index;
  }
  if (index >= startIndex.value + visibleCount) {
    startIndex.value = index - visibleCount + 1;
  }
}

function slideLeft() {
  if (startIndex.value > 0) {
    startIndex.value -= 1;
  }
}

function slideRight() {
  if (startIndex.value + visibleCount < props.images.length) {
    startIndex.value += 1;
  }
}
</script>

<template>
  <div class="gallery-shell">
    <div class="detail-image gallery-main">
      <button
        class="gallery-main-nav gallery-main-nav-left"
        type="button"
        :disabled="selectedIndex === 0"
        @click="selectImage(selectedIndex - 1)"
      >
        &lt;
      </button>

      <img :src="images[selectedIndex]" :alt="alt" />

      <button
        class="gallery-main-nav gallery-main-nav-right"
        type="button"
        :disabled="selectedIndex === images.length - 1"
        @click="selectImage(selectedIndex + 1)"
      >
        &gt;
      </button>
    </div>

    <div class="gallery-strip">
      <button class="gallery-nav" type="button" :disabled="startIndex === 0" @click="slideLeft">
        &lt;
      </button>

      <div class="gallery-track">
        <button
          v-for="(image, localIndex) in visibleImages"
          :key="image"
          class="gallery-thumb"
          :class="{ active: startIndex + localIndex === selectedIndex }"
          type="button"
          @click="selectImage(startIndex + localIndex)"
        >
          <img :src="image" :alt="`${alt} thumbnail ${startIndex + localIndex + 1}`" />
        </button>
      </div>

      <button class="gallery-nav" type="button" :disabled="startIndex + visibleCount >= images.length" @click="slideRight">
        &gt;
      </button>
    </div>
  </div>
</template>

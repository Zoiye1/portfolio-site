<template>
  <div class="h-48 bg-gray-200 overflow-hidden relative group">
    <!-- Image -->
    <img
      v-if="images && images.length > 0"
      :src="images[currentIndex]"
      :alt="`${title} - Image ${currentIndex + 1} of ${images.length}`"
      class="w-full h-full object-cover"
      loading="lazy"
      @error="handleImageError"
    />
    <div v-else class="h-full bg-gray-500 flex items-center justify-center">
      <span class="text-white text-2xl font-bold">{{ title }}</span>
    </div>

    <!-- Navigation arrows (only if multiple images) -->
    <template v-if="images && images.length > 1">
      <!-- Left Arrow -->
      <button
        @click="previousImage"
        aria-label="Previous image"
        class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110 text-xl font-bold"
      >
        ‹
      </button>

      <!-- Right Arrow -->
      <button
        @click="nextImage"
        aria-label="Next image"
        class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110 text-xl font-bold"
      >
        ›
      </button>

      <!-- Image indicators -->
      <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        <button
          v-for="(_, index) in images"
          :key="index"
          @click="currentIndex = index"
          :aria-label="`Go to image ${index + 1}`"
          class="w-2 h-2 rounded-full transition-all"
          :class="currentIndex === index ? 'bg-white w-4' : 'bg-white/50'"
        ></button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  images?: string[]
  title: string
}>()

const currentIndex = ref(0)

const nextImage = () => {
  if (props.images) {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  }
}

const previousImage = () => {
  if (props.images) {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
  }
}

const handleImageError = (event: Event) => {
  console.error('Failed to load image:', (event.target as HTMLImageElement).src)
}
</script>

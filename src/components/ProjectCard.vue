<template>
  <article
    class="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <ImageCarousel :images="project.images" :title="project.title" />

    <!-- Project Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>

      <!-- Award Badge -->
      <div v-if="project.award" class="mb-3">
        <span
          class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold"
        >
          {{ project.award }}
        </span>
      </div>

      <!-- Technologies -->
      <div class="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          role="listitem"
          class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects'
import ImageCarousel from './ImageCarousel.vue'

defineProps<{
  project: Project
}>()
</script>

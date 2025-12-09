<template>
  <section class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">My Projects</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

defineProps<{
  projects: Project[]
}>()
</script>

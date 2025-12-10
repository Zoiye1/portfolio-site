<template>
  <div class="min-h-screen relative">
    <!-- Solar System Background -->
    <SolarSystemBackground />

    <!-- Main Content -->
    <div class="relative z-10 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <AboutSection />
        <ProjectsSection :projects="projects" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '../data/projects'
import SolarSystemBackground from '../components/SolarSystemBackground.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
</script>

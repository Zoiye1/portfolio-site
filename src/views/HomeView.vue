<template>
  <div class="container mx-auto px-4 py-8">
    <!-- About Me Section -->
    <section class="max-w-4xl mx-auto mb-16">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Profile Picture -->
          <img
            src="../assets/profile.jpg"
            alt="Profile Picture"
            class="rounded-full object-cover shadow-lg"
            style="width: 112px; height: 112px"
          />

          <!-- About Me Text -->
          <div class="flex-1">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
            <p class="text-gray-600 text-lg">Hoi ik ben Zoiye! blablablabla</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">My Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Loop through projects dynamically -->
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <!-- Project Image -->
          <div class="h-48 bg-gray-200 overflow-hidden">
            <img
              :src="project.imageUrl"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Project Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>

            <!-- Award Badge -->
            <div v-if="project.award" class="mb-3">
              <span
                class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold"
              >
                {{ project.award }}
              </span>
            </div>

            <p class="text-gray-600 mb-4">{{ project.description }}</p>

            <!-- Languages -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.languages"
                :key="tech"
                class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { projects } from '../data/projects'
</script>

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
          <div class="h-48 bg-gray-200 overflow-hidden relative group">
            <!-- Images -->
            <img
              v-if="project.images && project.images.length > 0"
              :src="project.images[currentImageIndex[project.id] || 0]"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="h-full bg-gray-500 flex items-center justify-center"
            >
              <span class="text-white text-2xl font-bold">{{ project.title }}</span>
            </div>

            <!-- Arrows -->
            <template v-if="project.images && project.images.length > 1">
              <!-- Left Arrow -->
              <button
                @click="previousImage(project.id, project.images.length)"
                class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110 text-xl font-bold"
              >
                ‹
              </button>

              <!-- Right Arrow -->
              <button
                @click="nextImage(project.id, project.images.length)"
                class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110 text-xl font-bold"
              >
                ›
              </button>

              <!-- Image indicators -->
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                <div
                  v-for="(img, index) in project.images"
                  :key="index"
                  class="w-2 h-2 rounded-full transition-all"
                  :class="
                    (currentImageIndex[project.id] || 0) === index
                      ? 'bg-white w-4'
                      : 'bg-white/50'
                  "
                ></div>
              </div>
            </template>
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

            <!-- Technologies -->
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
import { reactive } from 'vue'
import { projects } from '../data/projects'

// Track current image index for each project
const currentImageIndex = reactive<Record<number, number>>({})

// Initialize indices
projects.forEach((project) => {
  currentImageIndex[project.id] = 0
})

// Navigate to next image
const nextImage = (projectId: number, totalImages: number) => {
  currentImageIndex[projectId] = (currentImageIndex[projectId] + 1) % totalImages
}

// Navigate to previous image
const previousImage = (projectId: number, totalImages: number) => {
  currentImageIndex[projectId] =
    (currentImageIndex[projectId] - 1 + totalImages) % totalImages
}
</script>

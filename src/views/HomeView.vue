<template>
  <div class="min-h-screen relative">
    <!-- Solar System Background -->
    <SolarSystemBackground />

    <!-- Main Content -->
      <div class="relative z-10 py-12 px-4">
        <div class="container mx-auto px-4 py-8">
          <!-- About Me Section -->
          <section class="max-w-4xl mx-auto mb-16">
            <div class="bg-transparent rounded-lg shadow-lg p-8">
              <div class="flex flex-col md:flex-row items-center gap-8">


                <!-- Profile Picture -->
                <img
                  src="../assets/profile.jpg"
                  alt="Profile Picture"
                  class="rounded-full object-cover shadow-lg"
                  style="width: 112px; height: 112px"
                />


                <!-- About Me Text -->
                <div class="flex-1 bg-transparent">
                  <h1 class="text-4xl font-bold text-white mb-4">Zoiye van Leeuwen</h1>
                  <h2 class="text-2xl font-bold text-purple-500 mb-4">Software Developer</h2>
                  <p class="text-white text-lg">My interest in IT started when I was just 11, through game development. What began as a hobby grew into successful projects, allowing me to discover the power of programming and creating products that people actually use. This experience motivated me to study HBO-ICT Software Development at the Amsterdam University of Applied Sciences, where I am professionalizing my knowledge to build software that delivers real value.</p>

                </div>

                <!-- Linkedin Button -->
                <div class="w-12 h-12 flex items-center justify-center bg-gray-100 cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-indigo-200" >
                  <button @click="goToLink">
                  <svg class="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-blue-200" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 92 93" fill="none">
                    <rect x="0.138672" y="1" width="91.5618" height="91.5618" rx="15" fill="#EEFAFF"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6975 21.5618C22.6561 21.5618 21 23.1674 21 25.1456V68.0091C21 69.9875 22.6563 71.5918 24.6975 71.5918H67.3325C69.3747 71.5918 71.03 69.9873 71.03 68.0086V25.1456C71.03 23.1674 69.3747 21.5618 67.3325 21.5618H24.6975ZM36.2032 40.9068V63.4304H28.7167V40.9068H36.2032ZM36.6967 33.9411C36.6967 36.1025 35.0717 37.8321 32.4615 37.8321L32.4609 37.8319H32.4124C29.8998 37.8319 28.2754 36.1023 28.2754 33.9409C28.2754 31.7304 29.9489 30.0491 32.5111 30.0491C35.0717 30.0491 36.6478 31.7304 36.6967 33.9411ZM47.833 63.4304H40.3471L40.3469 63.4312C40.3469 63.4312 40.4452 43.0205 40.3475 40.9075H47.8336V44.0957C48.8288 42.5613 50.6098 40.3787 54.5808 40.3787C59.5062 40.3787 63.1991 43.598 63.1991 50.516V63.4304H55.7133V51.3822C55.7133 48.354 54.6293 46.2887 51.921 46.2887C49.8524 46.2887 48.6206 47.6815 48.0796 49.0271C47.8819 49.5072 47.833 50.1813 47.833 50.8535V63.4304Z" fill="#006699"/>
                  </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <!-- Projects Section -->
          <section class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
              My Projects
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Loop through projects dynamically -->
              <div
                v-for="project in projects"
                :key="project.id"
                class="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div class="h-48 bg-gray-200 overflow-hidden relative group">
                  <!-- Images -->
                  <img
                    v-if="project.images && project.images.length > 0"
                    :src="project.images[currentImageIndex[project.id] || 0]"
                    :alt="project.title"
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="h-full bg-gray-500 flex items-center justify-center">
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
                  <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in project.technologies"
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
      </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { projects } from '../data/projects'
import SolarSystemBackground from '../components/SolarSystemBackground.vue'

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
  currentImageIndex[projectId] = (currentImageIndex[projectId] - 1 + totalImages) % totalImages
}

const goToLink = ()=> {
  window.open('https://www.linkedin.com/feed/zoiye-van-leeuwen-8640543a0/', '_blank')
}



</script>

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
            style="width: 112px; height: 112px;"
          />

          <!-- About Me Text -->
          <div class="flex-1">
            <h1 class="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
            <p class="text-gray-600 text-lg">
              Hoi ik ben Zoiye! blablablabla

            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">My Projects</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project Card Example -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div class="h-48 bg-gray-300 flex items-center justify-center">
            <span class="text-gray-600">Project Image</span>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2">Project Title</h3>
            <p class="text-gray-600 mb-4">
              A brief description of your project goes here.
            </p>
            <div class="flex gap-2">
              <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vue</span>
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

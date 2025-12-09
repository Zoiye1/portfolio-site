<template>
  <section class="max-w-4xl mx-auto mb-16">
    <div class="bg-transparent rounded-lg shadow-lg p-8">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- Profile Picture -->
        <img
          src="../assets/profile.jpg"
          alt="Profile Picture"
          class="rounded-full object-cover shadow-lg"
          style="width: 112px; height: 112px"
          loading="eager"
        />

        <!-- About Me Text -->
        <div class="flex-1 bg-transparent">
          <h1 class="text-4xl font-bold text-white mb-4">Zoiye van Leeuwen</h1>
          <h2 class="text-2xl font-bold text-purple-500 mb-4">Software Developer</h2>
          <p class="text-white text-lg">
            My interest in IT started when I was just 11, through game development. What began as a
            hobby grew into successful projects, allowing me to discover the power of programming
            and creating products that people actually use. This experience motivated me to study
            HBO-ICT Software Development at the Amsterdam University of Applied Sciences, where I am
            professionalizing my knowledge to build software that delivers real value.
          </p>
        </div>

        <!-- Linkedin Button -->
        <div
          class="w-12 h-12 flex items-center justify-center bg-gray-100 cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-indigo-200"
        >
          <button @click="goToLink">
            <svg
              class="cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-blue-200"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 92 93"
            >
              <rect x="0.138672" y="1" width="91.5618" height="91.5618" rx="15" fill="#EEFAFF" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.6975 21.5618C22.6561 21.5618 21 23.1674 21 25.1456V68.0091C21 69.9875 22.6563 71.5918 24.6975 71.5918H67.3325C69.3747 71.5918 71.03 69.9873 71.03 68.0086V25.1456C71.03 23.1674 69.3747 21.5618 67.3325 21.5618H24.6975ZM36.2032 40.9068V63.4304H28.7167V40.9068H36.2032ZM36.6967 33.9411C36.6967 36.1025 35.0717 37.8321 32.4615 37.8321L32.4609 37.8319H32.4124C29.8998 37.8319 28.2754 36.1023 28.2754 33.9409C28.2754 31.7304 29.9489 30.0491 32.5111 30.0491C35.0717 30.0491 36.6478 31.7304 36.6967 33.9411ZM47.833 63.4304H40.3471L40.3469 63.4312C40.3469 63.4312 40.4452 43.0205 40.3475 40.9075H47.8336V44.0957C48.8288 42.5613 50.6098 40.3787 54.5808 40.3787C59.5062 40.3787 63.1991 43.598 63.1991 50.516V63.4304H55.7133V51.3822C55.7133 48.354 54.6293 46.2887 51.921 46.2887C49.8524 46.2887 48.6206 47.6815 48.0796 49.0271C47.8819 49.5072 47.833 50.1813 47.833 50.8535V63.4304Z"
                fill="#006699"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const goToLink = () => {
  window.open('https://www.linkedin.com/feed/https://www.linkedin.com/in/zoiye-van-leeuwen-8640543a0/')
}
</script>

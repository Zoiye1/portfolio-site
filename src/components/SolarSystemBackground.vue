<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <!-- Starfield background -->
    <div class="fixed inset-0 pointer-events-none" id="particles">
      <div class="absolute inset-0 bg-slate-900">
        <div class="stars-layer-1"></div>
        <div class="stars-layer-2"></div>
        <div class="stars-layer-3"></div>
      </div>

      <!-- Solar System Container -->
      <div class="solar-system-container">
        <!-- Sun -->
        <div class="sun"></div>

        <!-- Mercury Orbit & Planet -->
        <div class="orbit orbit-mercury">
          <div class="planet planet-mercury"></div>
        </div>

        <!-- Venus Orbit & Planet -->
        <div class="orbit orbit-venus">
          <div class="planet planet-venus"></div>
        </div>

        <!-- Earth Orbit & Planet -->
        <div class="orbit orbit-earth">
          <div class="planet planet-earth"></div>
        </div>

        <!-- Mars Orbit & Planet -->
        <div class="orbit orbit-mars">
          <div class="planet planet-mars"></div>
        </div>

        <!-- Jupiter Orbit & Planet -->
        <div class="orbit orbit-jupiter">
          <div class="planet planet-jupiter"></div>
        </div>

        <!-- Saturn Orbit & Planet -->
        <div class="orbit orbit-saturn">
          <div class="planet planet-saturn">
            <div class="saturn-ring"></div>
          </div>
        </div>

        <!-- Uranus Orbit & Planet -->
        <div class="orbit orbit-uranus">
          <div class="planet planet-uranus"></div>
        </div>

        <!-- Neptune Orbit & Planet -->
        <div class="orbit orbit-neptune">
          <div class="planet planet-neptune"></div>
        </div>
      </div>

      <!-- Overlay gradient for content readability -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/60"
      ></div>
    </div>
  </div>
</template>

<style scoped>
/* Starfield layers */
.stars-layer-1,
.stars-layer-2,
.stars-layer-3 {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12) 1px, transparent 1px);
}

.stars-layer-1 {
  background-size:
    80px 80px,
    120px 120px,
    100px 100px;
  opacity: 0.4;
}

.stars-layer-2 {
  background-size:
    150px 150px,
    200px 200px,
    180px 180px;
  opacity: 0.3;
  animation: twinkle 8s ease-in-out infinite;
}

.stars-layer-3 {
  background-size:
    250px 250px,
    300px 300px,
    280px 280px;
  opacity: 0.2;
  animation: twinkle 12s ease-in-out infinite reverse;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

/* Solar System Container */
.solar-system-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Sun */
.sun {
  position: absolute;
  width: 80px;
  height: 80px;
  background: radial-gradient(circle at center, #fdb813, #f58220);
  border-radius: 50%;
  box-shadow:
    0 0 40px #fdb813,
    0 0 80px rgba(253, 184, 19, 0.4),
    0 0 120px rgba(253, 184, 19, 0.2);
  z-index: 1;
  animation: sunPulse 6s ease-in-out infinite;
}

@keyframes sunPulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow:
      0 0 40px #fdb813,
      0 0 80px rgba(253, 184, 19, 0.4),
      0 0 120px rgba(253, 184, 19, 0.2);
  }
  50% {
    transform: scale(1.08);
    box-shadow:
      0 0 50px #fdb813,
      0 0 100px rgba(253, 184, 19, 0.5),
      0 0 150px rgba(253, 184, 19, 0.3);
  }
}

/* Orbits */
.orbit {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 50%;
  animation: rotateOrbit linear infinite;
}

@keyframes rotateOrbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Orbit sizes and speeds */
.orbit-mercury {
  width: 140px;
  height: 140px;
  animation-duration: 22s;
}

.orbit-venus {
  width: 200px;
  height: 200px;
  animation-duration: 36s;
}

.orbit-earth {
  width: 280px;
  height: 280px;
  animation-duration: 50s;
}

.orbit-mars {
  width: 380px;
  height: 380px;
  animation-duration: 75s;
}

.orbit-jupiter {
  width: 520px;
  height: 520px;
  animation-duration: 120s;
}

.orbit-saturn {
  width: 660px;
  height: 660px;
  animation-duration: 160s;
}

.orbit-uranus {
  width: 780px;
  height: 780px;
  animation-duration: 200s;
}

.orbit-neptune {
  width: 900px;
  height: 900px;
  animation-duration: 240s;
}

/* Planets */
.planet {
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

/* Planet sizes */
.planet-mercury {
  width: 12px;
  height: 12px;
  background-color: #8c8c8c;
  top: -6px;
}

.planet-venus {
  width: 18px;
  height: 18px;
  background-color: #e6c229;
  top: -9px;
}

.planet-earth {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #4a90e2 0%, #2e5f8f 100%);
  top: -10px;
}

.planet-mars {
  width: 16px;
  height: 16px;
  background-color: #e27b58;
  top: -8px;
}

.planet-jupiter {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #c88b3a 0%, #a67030 100%);
  top: -20px;
}

.planet-saturn {
  width: 35px;
  height: 35px;
  background-color: #e4d191;
  top: -17.5px;
}

.planet-uranus {
  width: 24px;
  height: 24px;
  background-color: #a8d5d5;
  top: -12px;
}

.planet-neptune {
  width: 24px;
  height: 24px;
  background-color: #4a5fcf;
  top: -12px;
}

/* Saturn's rings */
.saturn-ring {
  position: absolute;
  width: 160%;
  height: 30%;
  background: rgba(228, 209, 145, 0.3);
  border: 1px solid rgba(228, 209, 145, 0.4);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(70deg) rotateZ(20deg);
  box-shadow: 0 0 10px rgba(228, 209, 145, 0.2);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .solar-system-container {
    transform: translate(-50%, -50%) scale(0.7);
  }
}

@media (max-width: 768px) {
  .solar-system-container {
    transform: translate(-50%, -50%) scale(0.5);
  }

  .sun {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 640px) {
  .solar-system-container {
    transform: translate(-50%, -50%) scale(0.4);
  }
}
</style>

<script setup lang="ts">
// Generate particles on mount
import { onMounted } from 'vue'

onMounted(() => {
  const particlesContainer = document.getElementById('particles')
  if (particlesContainer) {
    for (let i = 0; i < 500; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-white/30 rounded-full animate-float'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 6 + 's'
      particlesContainer.appendChild(particle)
    }
  }
})
</script>

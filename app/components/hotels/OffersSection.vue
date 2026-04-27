<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section with Background -->
      <div class="relative rounded-3xl overflow-hidden min-h-[750px]">
        
        <!-- Background Image -->
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: url('https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=1920&q=80')"
        >
          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-black/40"></div>
        </div>

        <!-- Content (PASTDA) -->
        <div
          class="relative z-10 px-6 md:px-12 py-16 md:py-24 min-h-[750px] flex flex-col justify-end"
        >
          <!-- Title -->
          <div class="mb-8 md:mb-12">
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-3 truncate">
              Eksklyuziv turar joy takliflari
            </h2>
            <p class="text-white/90 text-lg max-w-2xl">
              Tanlangan mehmonxonalarda maxsus narxlar va imtiyozlar
            </p>
          </div>

          <!-- Offers Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div
              v-for="offer in offers"
              :key="offer.id"
              class="backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 cursor-pointer"
              :style="offer.id === 3 
                ? 'background-color: white;' 
                : 'background-color: rgba(155,155,155,0.32);'"
            >
              <!-- Title -->
              <h3 class="text-xl font-bold text-gray-900 mb-1">
                {{ offer.location }}
              </h3>

              <!-- Subtitle -->
              <p class="text-gray-700 text-sm mb-3">
                {{ offer.hotel }}
              </p>

              <!-- Link -->
              <div class="flex items-center gap-2 mb-4">
                <span class="text-sm text-gray-600">
                  Turar joy ta'minlarini ko‘rish
                </span>
                <svg
                  class="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <!-- Date & Price -->
              <div class="flex items-center justify-between">
                <div
                  class="flex items-center gap-2 px-3 py-1.5 bg-white/60 rounded-lg border border-gray-300"
                >
                  <svg
                    class="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="text-sm text-gray-700">
                    {{ offer.duration }}
                  </span>
                </div>

                <div class="flex items-baseline gap-1">
                  <span class="text-2xl font-bold text-gray-900">
                    ${{ offer.price }}
                  </span>
                  <span class="text-xs text-gray-500">/kecha</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const offers = [
  {
    id: 1,
    location: 'Capella Bangkok',
    hotel: 'Capella Bangkok',
    duration: '6 kun 4 tun',
    price: 120
  },
  {
    id: 2,
    location: 'Capella Bangkok',
    hotel: 'Capella Bangkok',
    duration: '6 kun 4 tun',
    price: 1120
  },
  {
    id: 3,
    location: 'Capella Bangkok',
    hotel: 'Capella Bangkok',
    duration: '6 kun 4 tun',
    price: 120
  }
]
</script>

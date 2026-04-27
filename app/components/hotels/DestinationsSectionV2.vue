<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Mashhur yo'nalishlar
        </h2>
        <a href="#" class="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group">
          Barchasini ko'rish
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <!-- Destinations Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div
          v-for="destination in destinations"
          :key="destination.id"
          class="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <!-- Image -->
          <div class="relative h-[260px]">
            <img
              :src="destination.image"
              :alt="destination.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white text-2xl font-bold mb-2">
                {{ destination.name }}
              </h3>
              <p class="text-white/90 text-base">
                {{ destination.hotels }}+ turar joylar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const destinations = [
  {
    id: 1,
    name: 'Toshkent',
    hotels: 184,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80'
  },
  {
    id: 2,
    name: 'Samarqand',
    hotels: 488,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80'
  },
  {
    id: 3,
    name: 'Buxoro',
    hotels: 720,
    image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80'
  },
  {
    id: 4,
    name: 'Xiva',
    hotels: 520,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80'
  }
]
</script>

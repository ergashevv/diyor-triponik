<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <div class="mb-8 md:mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 truncate">
          Mashhur yo'nalishlar
        </h2>
      </div>

      <!-- Destinations Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div
          v-for="destination in destinations"
          :key="destination.id"
          class="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <!-- Image -->
          <div class="aspect-[4/5] relative">
            <img
              :src="destination.image"
              :alt="destination.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <!-- City Name -->
            <div class="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
              <div>
                <h3 class="text-white text-xl md:text-2xl font-bold">
                  {{ destination.name }}
                </h3>
                <p class="text-white/90 text-sm mt-1">
                  {{ destination.hotels }} ta mehmonxona
                </p>
              </div>
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
    hotels: 234,
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80'
  },
  {
    id: 2,
    name: 'Amsterdam',
    hotels: 542,
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80'
  },
  {
    id: 3,
    name: 'Boston',
    hotels: 321,
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80'
  },
  {
    id: 4,
    name: 'New York',
    hotels: 892,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80'
  }
]
</script>

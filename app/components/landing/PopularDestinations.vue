<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 truncate">
          Mashhur yo'nalishlar
        </h2>
        <p class="text-gray-600">
          Dunyoning eng go'zal va sayohat uchun yaxshi joylarga safar qiling
        </p>
      </div>

      <!-- Destinations Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          v-for="destination in destinations"
          :key="destination.id"
          class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
        >
          <!-- Image -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img
              :src="destination.image"
              :alt="destination.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            <!-- City Name & Months -->
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-white text-2xl font-bold mb-2">{{ destination.name }}</h3>
              <div class="flex items-center gap-2 text-white/90">
                <UIcon name="i-mdi-calendar" class="w-4 h-4" />
                <span class="text-sm">{{ destination.months }}</span>
              </div>
            </div>
          </div>

          <!-- Details -->
          <div class="p-5 space-y-4">
            <!-- Country & Duration -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-xl">{{ destination.flag }}</span>
                <span class="text-gray-700 font-medium">{{ destination.country }}</span>
              </div>
              <span class="text-gray-600 text-sm">{{ destination.duration }}</span>
            </div>

            <!-- Price -->
            <div>
              <div class="text-sm text-gray-500 mb-1">Narxi boshlanadi</div>
              <div class="text-2xl font-bold text-gray-900">
                {{ destination.price.toLocaleString() }} so'm
              </div>
            </div>

            <!-- Button -->
            <UButton color="primary" size="lg" block class="bg-blue-600 hover:bg-blue-700">
              Band qilish
            </UButton>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center">
        <UButton
          size="xl"
          color="secondary"
          class=" border border-blue-600 text-blue-700 bg-white hover:bg-blue-700  hover:text-white font-medium"
        >
          Barcha yo'nalishlarni ko'rish
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
const destinations = [
  {
    id: 1,
    name: 'Istanbul',
    country: 'Turkiya',
    flag: '🇹🇷',
    months: 'May - Sentabr',
    duration: '5 soat',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
    price: 4250000
  },
  {
    id: 2,
    name: 'Dubai',
    country: 'BAA',
    flag: '🇦🇪',
    months: 'Aprel - Oktyabr',
    duration: '4 soat',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    price: 6780000
  },
  {
    id: 3,
    name: 'Kabul',
    country: 'Afg\'aniston',
    flag: '🇦🇫',
    months: 'Mart - Noyabr',
    duration: '2 soat',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800',
    price: 2900000
  },
  {
    id: 4,
    name: 'Bangkok',
    country: 'Tailand',
    flag: '🇹🇭',
    months: 'Iyun - Avgust',
    duration: '7 soat',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
    price: 3780000
  }
]
</script>

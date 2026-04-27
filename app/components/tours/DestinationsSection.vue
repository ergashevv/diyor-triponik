<template>
  <section class="py-10 md:py-14 bg-[#EEF2FF]">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-6 md:mb-8">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Dunyoning Eng Go'zal Joylariga Sayohat Qiling
        </h2>
        <p class="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
          Yer sharining eng ajoyib hayvonlari va o'simliklari bilan tanishing. Har bir qit'aning noyob
          biologik xilma-xilligi va tabiat mo'jizalarini kashf eting.
        </p>
      </div>

      <!-- Filter Tags -->
      <div class="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-8">
        <button
          v-for="tag in tags"
          :key="tag.value"
          @click="activeTag = tag.value"
          class="px-4 py-1.5 rounded-xl text-sm font-medium transition-all"
          :class="activeTag === tag.value
            ? 'bg-blue-600 text-white'
            : 'bg-[#707495] text-white border border-gray-200 hover:border-gray-400'"
        >
          {{ tag.label }}
        </button>
      </div>

      <!-- Mobile/Tablet: 2-column grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 md:hidden">
        <div
          v-for="dest in filteredDestinations"
          :key="dest.id"
          class="overflow-hidden rounded-xl cursor-pointer group relative h-44"
        >
          <img
            :src="dest.src"
            :alt="dest.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-3 text-white">
            <p class="text-sm font-semibold">{{ dest.name }}</p>
            <p class="text-xs text-white/80">{{ dest.country }}</p>
          </div>
        </div>
      </div>

      <!-- Desktop: staggered horizontal row -->
      <div class="hidden md:flex items-center gap-3 pt-20">
        <div
          v-for="dest in filteredDestinations"
          :key="dest.id"
          class="flex-1 min-w-0 overflow-hidden cursor-pointer group relative"
          :style="{ height: dest.h + 'px', transform: dest.offsetY ? `translateY(${dest.offsetY}px)` : undefined }"
        >
          <img
            :src="dest.src"
            :alt="dest.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div class="absolute bottom-0 left-0 right-0 p-3 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p class="text-sm font-semibold">{{ dest.name }}</p>
            <p class="text-xs text-white/80">{{ dest.country }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tags = [
  { value: 'hiking', label: 'Hiking' },
  { value: 'hot', label: 'Qaynoq turlar 🔥' },
  { value: 'resort', label: 'Kurort' },
  { value: 'historical', label: 'Tarixiy shaharlar' },
]

const activeTag = ref('hot')

const destinations = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&q=80&fit=crop',
    name: 'Bosphorus',
    country: 'Turkiya',
    w: 200, h: 200 ,offsetY: 50,
    tags: ['hiking', 'hot'],
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=400&q=80&fit=crop',
    name: 'Sulaymoniya masjidi',
    country: 'Istanbul, Turkiya',
    w: 200, h: 300, offsetY: 50,
    tags: ['hiking', 'hot', 'historical'],
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=400&q=80&fit=crop',
    name: 'Kappadokiya',
    country: 'Turkiya',
    w: 200, h: 300, offsetY: -50,
    tags: ['hiking', 'hot'],
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=400&q=80&fit=crop',
    name: 'Eski shahar',
    country: 'Istanbul, Turkiya',
    w: 200, h: 200, offsetY: -100,
    tags: ['hiking', 'hot', 'historical'],
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&q=80&fit=crop',
    name: 'Safranbolu',
    country: 'Turkiya',
    w: 200, h: 300, offsetY: 50,
    tags: ['hiking', 'hot', 'historical'],
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=400&q=80&fit=crop',
    name: 'Bozor ko\'chasi',
    country: 'Turkiya',
    w: 200, h: 200,offsetY:50,
    tags: ['hiking', 'hot', 'historical'],
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80&fit=crop',
    name: 'Alp tog\'lari',
    country: 'Shveytsariya',
    w: 200, h: 300,
    tags: ['hiking', 'resort'],
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80&fit=crop',
    name: 'Maldiv orollari',
    country: 'Maldiv',
    w: 200, h: 300,
    tags: ['resort'],
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?w=400&q=80&fit=crop',
    name: 'Santorini',
    country: 'Gretsiya',
    w: 200, h: 300,
    tags: ['resort'],
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=400&q=80&fit=crop',
    name: 'Parij',
    country: 'Fransiya',
    w: 200, h: 200,
    tags: ['historical'],
  },
]

const filteredDestinations = computed(() => {
  return destinations.filter(d => d.tags.includes(activeTag.value))
})
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>

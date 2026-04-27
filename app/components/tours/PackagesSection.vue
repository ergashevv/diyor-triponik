<template>
  <section class="py-10 md:py-14 bg-[#EEF2FF]">
    <div class="container mx-auto px-4">

      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-1">
            Dunyoning eng ajoyib dam olish<br class="hidden sm:block" />
            joylarini kashf eting
          </h2>
          <p class="text-gray-500 text-sm md:text-base">Dunyo bo'ylab ajoyib manzillarni o'rganing</p>
        </div>
        <button
          @click="showAll = !showAll"
          class="shrink-0 self-start px-5 py-2.5 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold rounded-xl transition-colors flex items-center gap-2"
        >
          {{ showAll ? 'Yopish' : "Barcha manzillarni ko'rish" }}
          <svg
            class="w-4 h-4 transition-transform duration-300"
            :class="showAll ? 'rotate-180' : ''"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <!-- Filter Tabs -->
      <div class="flex items-center gap-2 flex-wrap mb-8">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          @click="selectTab(tab.value)"
          class="px-4 py-1.5 rounded-full text-sm font-medium transition-all border"
          :class="activeTab === tab.value
            ? 'bg-gray-900 text-white border-gray-900'
            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Cards Grid -->
      <TransitionGroup
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        name="card"
      >
        <div
          v-for="tour in visibleTours"
          :key="tour.id"
          class="bg-white rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- Image -->
          <div class="relative h-52 overflow-hidden">
            <img
              :src="tour.src"
              :alt="tour.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Info -->
          <div class="p-4">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-bold text-gray-900 text-base">{{ tour.name }}</h3>
              <div class="flex items-center gap-1 shrink-0">
                <svg class="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span class="text-sm font-semibold text-gray-700">{{ tour.rating }}</span>
              </div>
            </div>
            <p class="text-gray-500 text-sm mb-3">{{ tour.country }}</p>
            <div class="flex items-center justify-between">
              <p class="text-gray-900 font-bold">
                {{ tour.price }}$
                <span class="text-gray-400 font-normal text-sm">/kishi</span>
              </p>
              <span class="text-gray-400 text-sm">{{ tour.days }} kunlik tur</span>
            </div>
          </div>
        </div>
      </TransitionGroup>

    </div>
  </section>
</template>

<script setup>
const INITIAL_COUNT = 4

const tabs = [
  { value: 'all', label: 'Hammasi' },
  { value: 'beach', label: 'Plyaj' },
  { value: 'mountain', label: "Tog'" },
  { value: 'city', label: 'Shahar' },
  { value: 'nature', label: 'Tabiat' },
]

const activeTab = ref('all')
const showAll = ref(false)

const selectTab = (val) => {
  activeTab.value = val
  showAll.value = false
}

const tours = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop',
    name: 'Shveytsariya Alplari',
    country: 'Shveytsariya',
    rating: 4.8, price: 950, days: 7,
    tags: ['all', 'mountain', 'nature'],
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=600&q=80&fit=crop',
    name: 'Kappadokiya',
    country: 'Turkiya',
    rating: 4.9, price: 850, days: 5,
    tags: ['all', 'nature', 'city'],
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?w=600&q=80&fit=crop',
    name: 'Santorini',
    country: 'Gretsiya',
    rating: 4.7, price: 750, days: 6,
    tags: ['all', 'beach', 'city'],
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80&fit=crop',
    name: 'Bali oroli',
    country: 'Indoneziya',
    rating: 4.9, price: 780, days: 8,
    tags: ['all', 'beach', 'nature'],
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80&fit=crop',
    name: 'Istanbul',
    country: 'Turkiya',
    rating: 4.6, price: 620, days: 5,
    tags: ['all', 'city'],
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=600&q=80&fit=crop',
    name: 'Parij',
    country: 'Fransiya',
    rating: 4.8, price: 1100, days: 6,
    tags: ['all', 'city'],
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80&fit=crop',
    name: 'Maldiv',
    country: 'Maldiv',
    rating: 4.9, price: 1800, days: 7,
    tags: ['all', 'beach'],
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80&fit=crop',
    name: 'Norvegiya fyordlari',
    country: 'Norvegiya',
    rating: 4.7, price: 1350, days: 9,
    tags: ['all', 'nature', 'mountain'],
  },
]

const filteredTours = computed(() =>
  tours.filter(t => t.tags.includes(activeTab.value))
)

const visibleTours = computed(() =>
  showAll.value ? filteredTours.value : filteredTours.value.slice(0, INITIAL_COUNT)
)
</script>

<style scoped>
.card-enter-active {
  transition: all 0.4s ease;
}
.card-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.card-enter-to {
  opacity: 1;
  transform: translateY(0);
}
/* stagger effect */
.card-enter-active:nth-child(1) { transition-delay: 0ms; }
.card-enter-active:nth-child(2) { transition-delay: 60ms; }
.card-enter-active:nth-child(3) { transition-delay: 120ms; }
.card-enter-active:nth-child(4) { transition-delay: 180ms; }
.card-enter-active:nth-child(5) { transition-delay: 0ms; }
.card-enter-active:nth-child(6) { transition-delay: 60ms; }
.card-enter-active:nth-child(7) { transition-delay: 120ms; }
.card-enter-active:nth-child(8) { transition-delay: 180ms; }
</style>

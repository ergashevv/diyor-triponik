<template>
  <section class="py-10 md:py-14 bg-[#EEF2FF]">
    <div class="container mx-auto px-4">

      <!-- Header -->
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
          @click="selectTag(tag.value)"
          class="px-4 py-1.5 rounded-xl text-sm font-medium transition-all"
          :class="activeTag === tag.value
            ? 'bg-blue-600 text-white'
            : 'bg-[#707495] text-white border border-gray-200 hover:border-gray-400'"
        >
          {{ tag.label }}
        </button>
      </div>

      <!-- Slider -->
      <div class="relative overflow-hidden">

          <div
            class="flex gap-4 transition-transform duration-500 ease-in-out"
            :style="trackStyle"
          >
            <div
              v-for="city in filteredCities"
              :key="city.id"
              class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group shrink-0"
              :style="cardStyle"
            >
              <!-- Image with overlay -->
              <div class="relative h-52 overflow-hidden">
                <img
                  :src="city.src"
                  :alt="city.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div class="absolute bottom-0 left-0 p-4">
                  <h3 class="text-white font-bold text-xl leading-tight">{{ city.name }}</h3>
                  <div class="flex items-center gap-1.5 mt-1">
                    <svg class="w-3.5 h-3.5 text-white/80 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-white/90 text-sm">{{ city.season }}</span>
                  </div>
                </div>
              </div>

              <!-- Card Body -->
              <div class="p-4">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-1.5">
                    <span class="text-base">{{ city.flag }}</span>
                    <span class="text-sm text-gray-600">{{ city.country }}</span>
                  </div>
                  <span class="text-sm text-gray-500">{{ city.hours }} soat</span>
                </div>
                <p class="text-gray-400 text-xs mb-0.5">Narxi boshlanadi</p>
                <p class="text-gray-900 font-bold text-lg mb-4">
                  {{ city.price.toLocaleString('uz-UZ') }} so'm
                </p>
                <button class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors">
                  Band qilish
                </button>
              </div>
            </div>
          </div>
      </div>

      <!-- Dots -->
      <div class="flex items-center justify-center gap-2 mt-6">
        <button
          v-for="i in totalDots"
          :key="i"
          @click="currentIndex = i - 1"
          class="h-2 rounded-full transition-all duration-300"
          :class="currentIndex === i - 1 ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2'"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
const GAP = 16

// Ekran o'lchamiga qarab ko'rinadigan kartalar soni
const windowWidth = ref(1024)
const VISIBLE = computed(() => {
  if (windowWidth.value < 640) return 1
  if (windowWidth.value < 1024) return 2
  return 4
})

const trackStyle = computed(() => ({
  transform: `translateX(calc(-${currentIndex.value} * (100% / ${VISIBLE.value} + ${GAP}px / ${VISIBLE.value})))`
}))
const cardStyle = computed(() => ({
  width: `calc((100% - ${GAP * (VISIBLE.value - 1)}px) / ${VISIBLE.value})`
}))

const tags = [
  { value: 'hiking', label: 'Hiking' },
  { value: 'hot', label: 'Qaynoq turlar 🔥' },
  { value: 'resort', label: 'Kurort' },
  { value: 'historical', label: 'Tarixiy shaharlar' },
]

const activeTag = ref('hot')
const currentIndex = ref(0)

const filteredCities = computed(() =>
  cities.filter(c => c.tags.includes(activeTag.value))
)

const maxIndex = computed(() => Math.max(0, filteredCities.value.length - VISIBLE.value))
const totalDots = computed(() => maxIndex.value + 1)

const selectTag = (val) => {
  activeTag.value = val
  currentIndex.value = 0
  startAutoScroll()
}

let timer = null

const startAutoScroll = () => {
  stopAutoScroll()
  timer = setInterval(() => {
    currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
  }, 2500)
}

const stopAutoScroll = () => {
  if (timer) { clearInterval(timer); timer = null }
}

const onResize = () => {
  windowWidth.value = window.innerWidth
  currentIndex.value = 0
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', onResize)
  startAutoScroll()
})
onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  stopAutoScroll()
})


const cities = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=600&q=80&fit=crop',
    name: 'Istanbul',
    country: 'Turkiya', flag: '🇹🇷',
    season: 'May - Sentabr', hours: 5, price: 4250000,
    tags: ['hiking', 'hot', 'historical'],
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&fit=crop',
    name: 'Dubai',
    country: 'BAA', flag: '🇦🇪',
    season: 'Oktyabr - Mart', hours: 4, price: 5780000,
    tags: ['hot', 'resort'],
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop',
    name: 'Interlaken',
    country: 'Shveytsariya', flag: '🇨🇭',
    season: 'Iyun - Sentabr', hours: 7, price: 8500000,
    tags: ['hiking', 'resort'],
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1508009603885-50cf7c8dd0d5?w=600&q=80&fit=crop',
    name: 'Bangkok',
    country: 'Tayland', flag: '🇹🇭',
    season: 'Oktyabr - Mart', hours: 9, price: 5780000,
    tags: ['hot', 'resort'],
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?w=600&q=80&fit=crop',
    name: 'Santorini',
    country: 'Gretsiya', flag: '🇬🇷',
    season: 'Aprel - Oktyabr', hours: 5, price: 6900000,
    tags: ['resort', 'hot'],
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80&fit=crop',
    name: 'Antalya',
    country: 'Turkiya', flag: '🇹🇷',
    season: 'May - Oktyabr', hours: 4, price: 3200000,
    tags: ['hot', 'resort', 'hiking'],
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=600&q=80&fit=crop',
    name: 'Parij',
    country: 'Fransiya', flag: '🇫🇷',
    season: 'Aprel - Iyun', hours: 6, price: 9800000,
    tags: ['historical', 'hot'],
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80&fit=crop',
    name: 'Agra',
    country: 'Hindiston', flag: '🇮🇳',
    season: 'Oktyabr - Mart', hours: 6, price: 3750000,
    tags: ['historical', 'hiking'],
  },
]

</script>

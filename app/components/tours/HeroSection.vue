<template>
  <section class="relative bg-gray-900">
    <!-- Hero Area -->
    <div class="relative h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden">

      <!-- Background Image -->
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&fit=crop"
        class="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      <!-- Card Slider — o'ng yarimdan boshlanadi -->
      <div class="absolute top-0 bottom-0 right-0 w-1/2 flex items-center overflow-hidden py-6 sm:py-8">
        <div
          class="flex shrink-0"
          :style="{
            gap: GAP + 'px',
            transform: `translateX(${transformX}px)`,
            transition: animating ? 'transform 0.65s cubic-bezier(0.4,0,0.2,1)' : 'none',
          }"
        >
          <div
            v-for="(img, i) in loopedCards"
            :key="i"
            class="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/25"
            :style="{ width: CARD_W + 'px', height: CARD_H + 'px' }"
          >
            <img :src="img" class="w-full h-full object-cover" alt="" loading="lazy" />
          </div>
        </div>
      </div>

      <!-- Left gradient + Text overlay -->
      <div
        class="absolute inset-0 pointer-events-none z-10"
        style="background: linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 32%, rgba(0,0,0,0.05) 58%, transparent 75%);"
      />
      <div class="absolute inset-0 z-20 flex items-center px-6 md:px-10 lg:px-16">
        <div class="max-w-[240px] sm:max-w-xs md:max-w-sm">
          <h1 class="text-white text-2xl sm:text-3xl md:text-[2.25rem] font-bold leading-snug mb-2 drop-shadow-lg">
            Butun dunyo bo'ylab<br />unutilmas sayohatlar
          </h1>
          <p class="text-white/85 text-sm md:text-base drop-shadow">
            Eng arzon narxda tur paketlar.
          </p>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="absolute bottom-8 left-1/2 right-0 z-20">
        <div class="relative w-full h-0.5 bg-white/20">
          <div
            class="absolute left-0 top-0 h-full bg-white/80"
            :style="{
              width: progressWidth + '%',
              transition: animating ? 'width 3.5s linear' : 'none',
            }"
          />
        </div>
      </div>
    </div>

    <!-- Search Card -->
    <div class="bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="bg-white rounded-2xl shadow-xl p-4 md:p-6 -mt-6 relative z-30 mx-0 sm:mx-2">
          <p class="text-gray-800 font-semibold text-sm md:text-base mb-4">
            Hamyonbop narxlarda mehmonxonalar va kvartiralar
          </p>

          <div class="flex flex-col lg:flex-row gap-3 items-end">

            <!-- Davlat -->
            <div class="w-full lg:flex-1">
              <label class="block text-xs font-medium text-gray-500 mb-1">Davlat</label>
              <UPopover :content="{ side: 'bottom', align: 'start' }">
                <div class="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm text-gray-900 flex items-center justify-between cursor-pointer hover:border-blue-500 transition-colors">
                  <span :class="selectedCountry ? 'text-gray-900' : 'text-gray-400'">{{ selectedCountry || 'Qayerga' }}</span>
                  <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <template #content>
                  <div class="w-60 p-2">
                    <input
                      v-model="countrySearch"
                      type="text"
                      placeholder="Qidirish..."
                      class="w-full h-9 border border-gray-200 rounded-lg px-3 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div class="max-h-52 overflow-y-auto">
                      <button
                        v-for="c in filteredCountries"
                        :key="c.name"
                        @click="selectedCountry = c.name; countrySearch = ''"
                        class="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors text-left"
                        :class="selectedCountry === c.name ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'"
                      >
                        <span>{{ c.flag }}</span>
                        <span>{{ c.name }}</span>
                      </button>
                    </div>
                  </div>
                </template>
              </UPopover>
            </div>

            <!-- Parvoz sanasi -->
            <div class="w-full lg:flex-1">
              <label class="block text-xs font-medium text-gray-500 mb-1">Parvoz sanasi</label>
              <UPopover :content="{ side: 'bottom', align: 'start' }">
                <div class="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm text-gray-900 flex items-center justify-between cursor-pointer hover:border-blue-500 transition-colors">
                  <span :class="selectedDate ? 'text-gray-900' : 'text-gray-400'">{{ selectedDate ? formatDate(selectedDate) : 'Sana tanlang' }}</span>
                  <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <template #content>
                  <div class="p-2">
                    <UCalendar v-model="selectedDate" />
                  </div>
                </template>
              </UPopover>
            </div>

            <!-- Qanchaga? (tunlar) -->
            <div class="w-full lg:flex-1">
              <label class="block text-xs font-medium text-gray-500 mb-1">Qanchaga?</label>
              <UPopover :content="{ side: 'bottom', align: 'start' }">
                <div class="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm text-gray-900 flex items-center justify-between cursor-pointer hover:border-blue-500 transition-colors">
                  <span>{{ nightsCount }} tun</span>
                  <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <template #content>
                  <div class="w-56 p-4">
                    <p class="text-sm font-semibold text-gray-700 mb-4 text-center">Tunlar soni</p>
                    <div class="flex items-center justify-between gap-4">
                      <button
                        @click="nightsCount = Math.max(1, nightsCount - 1)"
                        class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors text-lg font-bold"
                      >−</button>
                      <span class="text-xl font-bold text-gray-900 min-w-[3rem] text-center">{{ nightsCount }}</span>
                      <button
                        @click="nightsCount = Math.min(30, nightsCount + 1)"
                        class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors text-lg font-bold"
                      >+</button>
                    </div>
                  </div>
                </template>
              </UPopover>
            </div>

            <!-- Sayohatchilar -->
            <div class="w-full lg:flex-1">
              <label class="block text-xs font-medium text-gray-500 mb-1">Sayohatchilar</label>
              <UPopover :content="{ side: 'bottom', align: 'start' }">
                <div class="w-full h-11 border border-gray-300 rounded-lg px-3 text-sm text-gray-900 flex items-center justify-between cursor-pointer hover:border-blue-500 transition-colors">
                  <span>{{ adults }} katta{{ children > 0 ? `, ${children} bola` : '' }}</span>
                  <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <template #content>
                  <div class="w-64 p-4 space-y-4">
                    <!-- Kattalar -->
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-sm font-semibold text-gray-800">Kattalar</p>
                        <p class="text-xs text-gray-400">12+ yosh</p>
                      </div>
                      <div class="flex items-center gap-3">
                        <button
                          @click="adults = Math.max(1, adults - 1)"
                          class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors font-bold"
                        >−</button>
                        <span class="w-5 text-center font-bold text-gray-900">{{ adults }}</span>
                        <button
                          @click="adults = Math.min(10, adults + 1)"
                          class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors font-bold"
                        >+</button>
                      </div>
                    </div>
                    <!-- Bolalar -->
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-sm font-semibold text-gray-800">Bolalar</p>
                        <p class="text-xs text-gray-400">2–11 yosh</p>
                      </div>
                      <div class="flex items-center gap-3">
                        <button
                          @click="children = Math.max(0, children - 1)"
                          class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors font-bold"
                        >−</button>
                        <span class="w-5 text-center font-bold text-gray-900">{{ children }}</span>
                        <button
                          @click="children = Math.min(6, children + 1)"
                          class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors font-bold"
                        >+</button>
                      </div>
                    </div>
                  </div>
                </template>
              </UPopover>
            </div>

            <!-- Topish Button -->
            <div class="w-full lg:w-auto">
              <button
                @click="handleSearch"
                class="w-full lg:w-auto h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Topish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Card dimensions
const CARD_W = 185
const CARD_H = 260
const GAP = 10
const STEP = CARD_W + GAP  // 195px per card

const cards = [
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80&fit=crop',  // mountain house
  'https://images.unsplash.com/photo-1546519638405-a2ed1c5bca33?w=500&q=80&fit=crop',  // waterfall
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&q=80&fit=crop',  // green meadow
  'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=500&q=80&fit=crop',  // sunset rocks
  'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=500&q=80&fit=crop',  // blue lake
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80&fit=crop',  // aerial nature
  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=500&q=80&fit=crop',  // forest
]

// Triple for seamless infinite loop
const loopedCards = [...cards, ...cards, ...cards]

// advance = how many steps we've moved from the start of 2nd copy
const advance = ref(0)
const animating = ref(true)

// Start at 2nd copy (index = cards.length), cards from left edge of right-half container
const transformX = computed(() => {
  const baseIdx = cards.length  // start from 2nd copy
  return -(baseIdx + advance.value) * STEP
})

// Progress bar: 0..100 over one full cycle (cards.length steps × 3.5s each)
const progressWidth = ref(0)

let timer = null

const startTimer = () => {
  timer = setInterval(() => {
    advance.value++
    progressWidth.value = ((advance.value % cards.length) / cards.length) * 100

    if (advance.value >= cards.length) {
      setTimeout(() => {
        animating.value = false
        advance.value = 0
        progressWidth.value = 0
        nextTick(() => {
          requestAnimationFrame(() => {
            animating.value = true
            // restart fill animation
            progressWidth.value = (1 / cards.length) * 100
          })
        })
      }, 680)
    }
  }, 3500)
}

onMounted(() => {
  startTimer()
  // progress darhol to'ldirila boshlaydi
  nextTick(() => {
    progressWidth.value = (1 / cards.length) * 100
  })
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

// Search form
const selectedCountry = ref('')
const countrySearch = ref('')
const selectedDate = ref(null)
const nightsCount = ref(7)
const adults = ref(2)
const children = ref(0)

const countries = [
  { name: 'Turkiya', flag: '🇹🇷' },
  { name: 'Misr', flag: '🇪🇬' },
  { name: 'BAA (Dubai)', flag: '🇦🇪' },
  { name: 'Tailand', flag: '🇹🇭' },
  { name: 'Gretsiya', flag: '🇬🇷' },
  { name: 'Ispaniya', flag: '🇪🇸' },
  { name: 'Italiya', flag: '🇮🇹' },
  { name: 'Fransiya', flag: '🇫🇷' },
  { name: 'Maldiv', flag: '🇲🇻' },
  { name: 'Bali (Indoneziya)', flag: '🇮🇩' },
  { name: 'Hindiston', flag: '🇮🇳' },
  { name: 'Xitoy', flag: '🇨🇳' },
  { name: 'Shveytsariya', flag: '🇨🇭' },
  { name: 'Avstriya', flag: '🇦🇹' },
  { name: 'Malayziya', flag: '🇲🇾' },
]

const filteredCountries = computed(() =>
  countries.filter(c => c.name.toLowerCase().includes(countrySearch.value.toLowerCase()))
)

const formatDate = (date) => {
  const d = new Date(date)
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`
}

const handleSearch = () => {
  navigateTo({
    path: '/tours/search',
    query: {
      country: selectedCountry.value,
      duration: nightsCount.value,
      travelers: adults.value + 'a' + (children.value ? children.value + 'c' : ''),
      date: selectedDate.value ? formatDate(selectedDate.value) : undefined,
    }
  })
}
</script>

<style scoped>
</style>

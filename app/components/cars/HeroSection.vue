<template>
  <section class="relative bg-white overflow-visible">
    <!-- Hero Background Section -->
    <div class="relative overflow-hidden h-[320px] sm:h-[380px] md:h-[440px] lg:h-[525px]"
         style="background: linear-gradient(to right, #2563EB, #3472F9);">
      <!-- Background Car BG Image -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="~/assets/images/carbg.svg"
          alt=""
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div class="relative z-10">
        <div class="max-w-7xl mx-auto px-4">
          <!-- Hero Text -->
          <div class="pt-8 sm:pt-10 md:pt-14 lg:pt-16 pb-4 md:pb-8 text-center">
            <h1 class="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-2 md:mb-4 tracking-tight uppercase">
              SHAHARDAN SHAHARGA - BIR ZUMDA
            </h1>
            <p class="text-white text-xs sm:text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed hidden sm:block">
              Haydovchisiz yoki haydovchi bilan birga istalgan muddatga ekonom, biznes yoki premium-klass avtomobillarni ijaraga oling
            </p>
          </div>
        </div>
      </div>

      <!-- Curved Bottom -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg class="relative block w-full h-32 md:h-48" fill="none"
          preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,120 L0,70 Q600,-40 1200,70 L1200,120 Z" fill="#ffffff"></path>
        </svg>
      </div>
    </div>

    <!-- Car Image - On Curved Section -->
    <div class="absolute left-1/2 -translate-x-1/2 z-30 top-[160px] sm:top-[150px] md:top-[120px] lg:top-[200px]">
      <img
        src="~/assets/images/car.svg"
        alt="Car"
        class="w-[75vw] sm:w-[70vw] md:w-[80vw] lg:w-full max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
      />
    </div>

    <!-- Search Card - Outside Background -->
    <div class="relative mt-4 md:mt-6 lg:mt-8 z-40">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <!-- Mobile: card layout, Desktop: unified row -->
          <div class="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-visible">

            <!-- Mobile layout (< lg): stacked fields inside card -->
            <div class="flex flex-col lg:hidden p-4 gap-3">
              <!-- Location -->
              <div class="relative" ref="locationWrapperMobileRef">
                <button
                  type="button"
                  @click="showLocationDropdown = !showLocationDropdown"
                  class="w-full h-14 px-4 border border-gray-200 rounded-xl text-left flex flex-col justify-center bg-gray-50"
                >
                  <span class="text-xs text-gray-400 leading-none mb-1">Olish/Qaytarish nuqtasi</span>
                  <span :class="locationQuery ? 'text-gray-900' : 'text-gray-400'" class="text-sm font-medium truncate">
                    {{ locationQuery || 'Shahar yoki aeroport' }}
                  </span>
                </button>
                <div
                  v-if="showLocationDropdown && filteredLocations.length"
                  class="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 mt-1 max-h-48 overflow-y-auto"
                >
                  <button
                    v-for="loc in filteredLocations"
                    :key="loc"
                    type="button"
                    @click="selectLocation(loc)"
                    class="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {{ loc }}
                  </button>
                </div>
              </div>

              <!-- Dates row -->
              <div class="flex gap-3">
                <!-- Pickup date -->
                <UPopover mode="click" class="flex-1" :ui="{ container: 'bg-white dark:bg-white border border-gray-200 dark:border-gray-200 shadow-lg' }">
                  <button type="button" class="w-full h-14 px-4 border border-gray-200 rounded-xl bg-gray-50 flex items-center justify-between gap-2">
                    <span :class="pickupDate ? 'text-gray-900' : 'text-gray-400'" class="text-sm font-medium">
                      {{ pickupDate ? formatCalendarDate(pickupDate) : 'Olinish sanasi' }}
                    </span>
                    <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <template #content="{ close }">
                    <UCalendar v-model="pickupDate" class="p-2" @update:modelValue="close" :ui="calendarUi" />
                  </template>
                </UPopover>

                <!-- Return date -->
                <UPopover mode="click" class="flex-1" :ui="{ container: 'bg-white dark:bg-white border border-gray-200 dark:border-gray-200 shadow-lg' }">
                  <button type="button" class="w-full h-14 px-4 border border-gray-200 rounded-xl bg-gray-50 flex items-center justify-between gap-2">
                    <span :class="returnDate ? 'text-gray-900' : 'text-gray-400'" class="text-sm font-medium flex-1 text-left">
                      {{ returnDate ? formatCalendarDate(returnDate) : 'Qaytarish sanasi' }}
                    </span>
                    <span v-if="returnDate" @click.stop="returnDate = null" class="text-gray-400 hover:text-gray-700 shrink-0 cursor-pointer">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <svg v-else class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <template #content="{ close }">
                    <UCalendar v-model="returnDate" class="p-2" @update:modelValue="close" :ui="calendarUi" />
                  </template>
                </UPopover>
              </div>

              <!-- Search button -->
              <button
                @click="handleSearch"
                :disabled="isSearchDisabled"
                class="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Mashinani topish</span>
              </button>
            </div>

            <!-- Desktop layout (>= lg): unified single row -->
            <div class="hidden lg:flex items-stretch border border-gray-200 rounded-2xl overflow-visible">

              <!-- Location -->
              <div class="relative flex-1 min-w-0" ref="locationWrapperRef">
                <button
                  type="button"
                  @click="showLocationDropdown = !showLocationDropdown"
                  class="w-full h-16 px-5 text-left flex flex-col justify-center hover:bg-gray-50 transition-colors rounded-l-2xl"
                >
                  <span class="text-xs text-gray-400 leading-none mb-1">Olish/Qaytarish nuqtasi</span>
                  <span :class="locationQuery ? 'text-gray-900' : 'text-gray-400'" class="text-sm font-medium truncate">
                    {{ locationQuery || 'Shahar yoki aeroport' }}
                  </span>
                </button>
                <div
                  v-if="showLocationDropdown && filteredLocations.length"
                  class="absolute top-full left-0 w-full min-w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50 mt-1 max-h-52 overflow-y-auto"
                >
                  <button
                    v-for="loc in filteredLocations"
                    :key="loc"
                    type="button"
                    @click="selectLocation(loc)"
                    class="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {{ loc }}
                  </button>
                </div>
              </div>

              <div class="w-px bg-gray-200 self-stretch"></div>

              <!-- Pickup date -->
              <UPopover mode="click" :ui="{ container: 'bg-white dark:bg-white border border-gray-200 dark:border-gray-200 shadow-lg' }">
                <button type="button" class="flex-1 h-16 px-5 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors min-w-44">
                  <span :class="pickupDate ? 'text-gray-900' : 'text-gray-400'" class="text-sm font-medium">
                    {{ pickupDate ? formatCalendarDate(pickupDate) : 'Olinish sanasi' }}
                  </span>
                  <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <template #content="{ close }">
                  <UCalendar v-model="pickupDate" class="p-2" @update:modelValue="close" :ui="calendarUi" />
                </template>
              </UPopover>

              <div class="w-px bg-gray-200 self-stretch"></div>

              <!-- Return date -->
              <UPopover mode="click" :ui="{ container: 'bg-white dark:bg-white border border-gray-200 dark:border-gray-200 shadow-lg' }">
                <button type="button" class="flex-1 h-16 px-5 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors min-w-44">
                  <span :class="returnDate ? 'text-gray-900' : 'text-gray-400'" class="text-sm font-medium flex-1 text-left">
                    {{ returnDate ? formatCalendarDate(returnDate) : 'Qaytarish sanasi' }}
                  </span>
                  <span v-if="returnDate" @click.stop="returnDate = null" class="text-gray-400 hover:text-gray-700 shrink-0 cursor-pointer">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  <svg v-else class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <template #content="{ close }">
                  <UCalendar v-model="returnDate" class="p-2" @update:modelValue="close" :ui="calendarUi" />
                </template>
              </UPopover>

              <!-- Search button -->
              <button
                @click="handleSearch"
                :disabled="isSearchDisabled"
                class="h-16 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-r-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Mashinani topish</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const locations = [
  'Toshkent shahri',
  'Domodedova aeroporti',
  'Toshkent aeroporti',
  'Samarqand shahri',
  'Buxoro shahri',
  'Namangan shahri',
  'Andijon shahri',
  'Farg\'ona shahri',
  'Nukus shahri',
  'Qarshi shahri',
]

const locationQuery = ref('')
const showLocationDropdown = ref(false)
const locationWrapperRef = ref(null)
const locationWrapperMobileRef = ref(null)

const filteredLocations = computed(() =>
  locationQuery.value
    ? locations.filter(l => l.toLowerCase().includes(locationQuery.value.toLowerCase()))
    : locations
)

const selectLocation = (loc) => {
  locationQuery.value = loc
  showLocationDropdown.value = false
}

const pickupDate = ref(null)
const returnDate = ref(null)

const calendarUi = {
  base: 'bg-white dark:bg-white',
  container: 'bg-white dark:bg-white',
  header: 'text-gray-900 dark:text-gray-900',
  months: 'bg-white dark:bg-white',
  cell: {
    base: 'text-gray-900 dark:text-gray-900',
    selected: 'bg-blue-600 dark:bg-blue-600 text-white dark:text-white hover:bg-blue-700 dark:hover:bg-blue-700',
    today: 'border-2 border-blue-600 dark:border-blue-600'
  }
}

const formatCalendarDate = (calendarDate) => {
  if (!calendarDate) return ''
  const day = calendarDate.day
  const month = calendarDate.month
  const year = calendarDate.year
  return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`
}

const calendarDateToString = (calendarDate) => {
  if (!calendarDate) return ''
  const year = calendarDate.year
  const month = String(calendarDate.month).padStart(2, '0')
  const day = String(calendarDate.day).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const handleClickOutside = (e) => {
  const inDesktop = locationWrapperRef.value?.contains(e.target)
  const inMobile = locationWrapperMobileRef.value?.contains(e.target)
  if (!inDesktop && !inMobile) {
    showLocationDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

const isSearchDisabled = computed(() => {
  return !locationQuery.value || !pickupDate.value
})

const router = useRouter()

const handleSearch = () => {
  if (isSearchDisabled.value) return
  router.push({
    path: '/cars/search',
    query: {
      location: locationQuery.value,
      pickupDate: calendarDateToString(pickupDate.value),
      returnDate: returnDate.value ? calendarDateToString(returnDate.value) : ''
    }
  })
}
</script>

<style scoped>
</style>

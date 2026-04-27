<template>
  <section class="relative bg-white overflow-visible">
    <!-- Hero Background Section -->
    <div class="relative overflow-hidden h-[450px] sm:h-[480px] md:h-[500px] lg:h-[525px]"
         style="background: linear-gradient(to right, #2563EB, #3472F9);">
      <!-- Background Train Image -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="~/assets/images/trainBg.png"
          alt=""
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div class="relative z-10">
        <div class="max-w-7xl mx-auto px-4">
          <!-- Hero Text -->
          <div class="pt-12 md:pt-16 pb-6 md:pb-8 text-center">
            <h1 class="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight uppercase">
              SHAHARDAN SHAHARGA - BIR ZUMDA
            </h1>
            <p class="text-white text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
              Dunyo bo'ylab poyezd biletlarini onlayn bron qiling. Eng sara narxlar, qulay joylar, xavfsiz to'lov.
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

    <!-- Train Image - On Curved Section -->
    <div class="absolute left-1/2 -translate-x-1/2 z-30 top-[280px] sm:top-[310px] md:top-[150px] lg:top-[100px]">
      <img
        src="~/assets/images/trains.png"
        alt="High Speed Train"
        class="w-[80%] mx-auto sm:w-[85%] md:w-[90%] lg:w-full max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-6xl h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
      />
    </div>

    <!-- Search Card - Outside Background -->
    <div class="relative mt-4 md:mt-6 lg:mt-8 z-40">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 md:p-8">
                <!-- Tab Navigation -->
                <div class="flex flex-wrap gap-4 md:gap-8 mb-6 md:mb-8 border-b border-gray-200">
                  <button
                    class="pb-3 md:pb-4 px-1 text-blue-600 font-semibold border-b-2 border-blue-600 flex items-center gap-2 transition-colors text-sm md:text-base"
                  >
                    <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span class="hidden sm:inline">Bilet qidirish</span>
                    <span class="sm:hidden">Qidirish</span>
                  </button>
                  <button
                    class="pb-3 md:pb-4 px-1 text-gray-500 hover:text-gray-700 font-medium flex items-center gap-2 transition-colors text-sm md:text-base"
                  >
                    <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="hidden sm:inline">Jadvalni tekshirish</span>
                    <span class="sm:hidden">Jadval</span>
                  </button>
                  <button
                    class="pb-3 md:pb-4 px-1 text-gray-500 hover:text-gray-700 font-medium flex items-center gap-2 transition-colors text-sm md:text-base"
                  >
                    <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="hidden sm:inline">Bilet mavjudligi</span>
                    <span class="sm:hidden">Mavjudlik</span>
                  </button>
                </div>

                <!-- Search Form -->
                <div class="flex flex-col lg:flex-row gap-4 items-end">
                  <!-- Qayerdan (From) -->
                  <div class="w-full lg:flex-1 relative" ref="fromWrapperRef">
                    <label class="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Qayerdan
                    </label>
                    <div class="relative">
                      <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <input
                        type="text"
                        v-model="fromQuery"
                        @focus="showFromDropdown = true"
                        @input="showFromDropdown = true"
                        placeholder="Shaharni tanlang"
                        class="w-full h-14 pl-12 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all cursor-pointer"
                      />
                      <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div
                      v-if="showFromDropdown && filteredFromCities.length"
                      class="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 mt-1 max-h-52 overflow-y-auto"
                    >
                      <button
                        v-for="city in filteredFromCities"
                        :key="city.code"
                        type="button"
                        @click="selectFrom(city)"
                        class="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {{ city.name }}
                      </button>
                    </div>
                  </div>

                  <!-- Qayerga (To) -->
                  <div class="w-full lg:flex-1 relative" ref="toWrapperRef">
                    <label class="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Qayerga
                    </label>
                    <div class="relative">
                      <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <input
                        type="text"
                        v-model="toQuery"
                        @focus="showToDropdown = true"
                        @input="showToDropdown = true"
                        placeholder="Shaharni tanlang"
                        class="w-full h-14 pl-12 pr-10 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all cursor-pointer"
                      />
                      <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div
                      v-if="showToDropdown && filteredToCities.length"
                      class="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 mt-1 max-h-52 overflow-y-auto"
                    >
                      <button
                        v-for="city in filteredToCities"
                        :key="city.code"
                        type="button"
                        @click="selectTo(city)"
                        class="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {{ city.name }}
                      </button>
                    </div>
                  </div>

                  <!-- Jo'nash sanasi (Departure Date) -->
                  <div class="w-full lg:flex-1">
                    <label class="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Jo'nash sanasi
                    </label>
                    <UPopover
                      mode="click"
                      :ui="{
                        container: 'bg-white dark:bg-white border border-gray-200 dark:border-gray-200 shadow-lg'
                      }"
                    >
                      <button type="button" class="w-full h-14 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none text-left flex items-center gap-2 transition-all">
                        <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span class="flex-1" :class="departureDate ? 'text-gray-900' : 'text-gray-400'">{{ departureDate ? formatCalendarDate(departureDate) : 'Sanani tanlang' }}</span>
                      </button>
                      <template #content="{ close }">
                        <UCalendar
                          v-model="departureDate"
                          class="p-2"
                          @update:modelValue="close"
                          :ui="{
                            base: 'bg-white dark:bg-white',
                            container: 'bg-white dark:bg-white',
                            header: 'text-gray-900 dark:text-gray-900',
                            months: 'bg-white dark:bg-white',
                            cell: {
                              base: 'text-gray-900 dark:text-gray-900',
                              selected: 'bg-blue-600 dark:bg-blue-600 text-white dark:text-white hover:bg-blue-700 dark:hover:bg-blue-700',
                              today: 'border-2 border-blue-600 dark:border-blue-600'
                            }
                          }"
                        />
                      </template>
                    </UPopover>
                  </div>

                  <!-- Yo'lovchilar (Passengers) -->
                  <div class="w-full lg:flex-1">
                    <label class="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Yo'lovchilar
                    </label>
                    <button
                      ref="passengersButtonRef"
                      @click="togglePassengersDropdown"
                      type="button"
                      class="w-full h-14 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none text-left flex items-center justify-between gap-2 transition-all"
                    >
                      <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span :class="passengersText ? 'text-gray-900' : 'text-gray-400'">{{ passengersText || 'Yo\'lovchilar soni' }}</span>
                      </div>
                      <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  <!-- Search Button -->
                  <div class="w-full lg:w-auto flex items-end">
                    <button
                      @click="handleSearch"
                      :disabled="isSearchDisabled"
                      class="w-full lg:px-12 h-14 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <span>Qidirish</span>
                    </button>
                  </div>
                </div>

            <!-- Faqat to'g'ridan-to'g'ri poyezdlar checkbox -->
            <div class="mt-4">
              <label class="flex items-center gap-2 cursor-pointer w-fit">
                <input
                  type="checkbox"
                  v-model="search.directOnly"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span class="text-sm text-gray-700">Faqat to'g'ridan-to'g'ri poyezdlar</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Teleport Dropdown to Body -->
  <Teleport to="body">
    <!-- Passengers Dropdown -->
    <div
      v-if="showPassengersDropdown"
      ref="passengersDropdownRef"
      :style="{
        position: 'absolute',
        top: `${passengersPosition.top}px`,
        left: `${passengersPosition.left}px`,
        width: `${passengersPosition.width}px`,
        zIndex: 9999
      }"
      class="bg-white border border-gray-300 rounded-lg shadow-lg p-6"
    >
      <!-- Adults -->
      <div class="flex items-center justify-between mb-6 gap-8">
        <span class="text-gray-900 font-medium whitespace-nowrap flex-1">Kattalar</span>
        <div class="flex items-center gap-3 shrink-0">
          <button
            @click="decrementAdults"
            type="button"
            class="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            :disabled="passengers.adults <= 1"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-gray-900 font-medium w-8 text-center">{{ passengers.adults }}</span>
          <button
            @click="incrementAdults"
            type="button"
            class="w-8 h-8 border border-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 text-blue-600"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Children -->
      <div class="flex items-center justify-between mb-6 gap-8">
        <span class="text-gray-900 font-medium whitespace-nowrap flex-1">Bolalar</span>
        <div class="flex items-center gap-3 shrink-0">
          <button
            @click="decrementChildren"
            type="button"
            class="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            :disabled="passengers.children <= 0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-gray-900 font-medium w-8 text-center">{{ passengers.children }}</span>
          <button
            @click="incrementChildren"
            type="button"
            class="w-8 h-8 border border-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 text-blue-600"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
// Static data from composable
const { uzbekistanCities } = useStaticData()

const search = ref({
  from: '',
  to: '',
  departureDate: '',
  directOnly: false
})

// Custom city dropdown state
const fromQuery = ref('')
const toQuery = ref('')
const showFromDropdown = ref(false)
const showToDropdown = ref(false)
const fromWrapperRef = ref(null)
const toWrapperRef = ref(null)

const filteredFromCities = computed(() =>
  fromQuery.value
    ? uzbekistanCities.filter(c => c.name.toLowerCase().includes(fromQuery.value.toLowerCase()))
    : uzbekistanCities
)

const filteredToCities = computed(() =>
  toQuery.value
    ? uzbekistanCities.filter(c => c.name.toLowerCase().includes(toQuery.value.toLowerCase()))
    : uzbekistanCities
)

const selectFrom = (city) => {
  search.value.from = city.name
  fromQuery.value = city.name
  showFromDropdown.value = false
}

const selectTo = (city) => {
  search.value.to = city.name
  toQuery.value = city.name
  showToDropdown.value = false
}

const handleCityClickOutside = (e) => {
  if (fromWrapperRef.value && !fromWrapperRef.value.contains(e.target)) {
    showFromDropdown.value = false
  }
  if (toWrapperRef.value && !toWrapperRef.value.contains(e.target)) {
    showToDropdown.value = false
  }
}

const passengers = ref({
  adults: 1,
  children: 0
})

// Calendar date
const departureDate = ref(null)

// Uzbek month names
const uzMonths = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr']

// Format calendar date to Uzbek format
const formatCalendarDate = (calendarDate) => {
  if (!calendarDate) return ''
  const day = calendarDate.day
  const month = uzMonths[calendarDate.month - 1]
  const year = calendarDate.year
  return `${day}-${month}, ${year}`
}

// Convert CalendarDate to string (YYYY-MM-DD)
const calendarDateToString = (calendarDate) => {
  if (!calendarDate) return ''
  const year = calendarDate.year
  const month = String(calendarDate.month).padStart(2, '0')
  const day = String(calendarDate.day).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Watch calendar date and update search object
watch(departureDate, (newDate) => {
  if (newDate) {
    search.value.departureDate = calendarDateToString(newDate)
  }
})

const showPassengersDropdown = ref(false)
const passengersButtonRef = ref(null)
const passengersDropdownRef = ref(null)

const passengersText = computed(() => {
  const parts = []
  if (passengers.value.adults > 0) parts.push(`${passengers.value.adults} yo'lovchi`)
  if (passengers.value.children > 0) parts.push(`${passengers.value.children} bola`)
  return parts.join(', ')
})

const incrementAdults = () => { passengers.value.adults++ }
const decrementAdults = () => { if (passengers.value.adults > 1) passengers.value.adults-- }
const incrementChildren = () => { passengers.value.children++ }
const decrementChildren = () => { if (passengers.value.children > 0) passengers.value.children-- }

// Dropdown position
const passengersPosition = ref({ top: 0, left: 0, width: 0 })

// Calculate passengers dropdown position
const updatePassengersPosition = () => {
  if (passengersButtonRef.value) {
    const rect = passengersButtonRef.value.getBoundingClientRect()
    passengersPosition.value = {
      top: rect.bottom + window.scrollY + 4,
      left: rect.left + window.scrollX,
      width: Math.max(rect.width, 300)
    }
  }
}

// Toggle passengers dropdown
const togglePassengersDropdown = () => {
  showPassengersDropdown.value = !showPassengersDropdown.value
  if (showPassengersDropdown.value) {
    updatePassengersPosition()
  }
}

// Click outside handler
const handleClickOutside = (event) => {
  if (passengersButtonRef.value && !passengersButtonRef.value.contains(event.target)) {
    if (passengersDropdownRef.value && !passengersDropdownRef.value.contains(event.target)) {
      showPassengersDropdown.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('mousedown', handleCityClickOutside)
  window.addEventListener('scroll', () => {
    if (showPassengersDropdown.value) updatePassengersPosition()
  })
  window.addEventListener('resize', () => {
    if (showPassengersDropdown.value) updatePassengersPosition()
  })
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  document.removeEventListener('mousedown', handleCityClickOutside)
})

// Search button disabled check
const isSearchDisabled = computed(() => {
  return !search.value.from ||
         !search.value.to ||
         !search.value.departureDate
})

const router = useRouter()

const handleSearch = async () => {
  if (isSearchDisabled.value) return

  // Navigate to search page with params
  router.push({
    path: '/trains/search',
    query: {
      from: search.value.from,
      to: search.value.to,
      departureDate: search.value.departureDate,
      adults: passengers.value.adults,
      children: passengers.value.children,
      directOnly: search.value.directOnly
    }
  })
}
</script>

<style scoped>
</style>

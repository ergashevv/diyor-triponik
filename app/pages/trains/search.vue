<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Search Header -->
    <div class="py-4 md:py-6 bg-[#0D0B68]"">
      <div class="container mx-auto px-3 md:px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Title -->
          <h2 class="text-white text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-center px-2">
            Hamyonbop narxlarda shaharlaro poyezdlar
          </h2>

          <!-- Search Form -->
          <div class="overflow-visible">
            <div class="flex flex-col lg:flex-row items-stretch gap-0">
              <!-- From Input -->
              <div class="flex-1 min-w-0">
                <div class="relative h-full" ref="fromInputRef">
                  <input
                    v-model="searchParams.from"
                    @input="handleFromChange"
                    @focus="handleFromFocus"
                    @blur="handleFromBlur"
                    type="text"
                    placeholder="Qayerdan"
                    autocomplete="off"
                    class="w-full h-12 md:h-14 px-3 md:px-4 bg-white border border-gray-300 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none border-b-0 lg:border-b lg:border-r-0 text-sm md:text-base text-gray-900 placeholder-gray-500 outline-none transition-all focus:z-10"
                  />

                  <!-- From Suggestions Dropdown -->
                  <div v-if="showFromSuggestions" class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 md:max-h-60 overflow-y-auto z-50">
                    <div v-if="loadingFromSuggestions" class="p-2 md:p-3 text-xs md:text-sm text-gray-500 text-center">
                      Qidirilmoqda...
                    </div>
                    <div v-else-if="fromSuggestions.length === 0" class="p-2 md:p-3 text-xs md:text-sm text-gray-500 text-center">
                      Natija topilmadi
                    </div>
                    <div v-else>
                      <button
                        v-for="(station, index) in fromSuggestions"
                        :key="station"
                        @click="selectFromStation(station)"
                        :class="[
                          'w-full text-left px-3 md:px-4 py-2 transition-colors',
                          index === activeFromIndex ? 'bg-blue-50' : 'hover:bg-gray-100'
                        ]"
                      >
                        <div class="text-xs md:text-sm font-medium text-gray-900">{{ station }}</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Swap Button -->
              <div class="hidden lg:flex items-center justify-center">
                <button
                  @click="swapStations"
                  type="button"
                  class="w-10 h-14 bg-white hover:bg-gray-50 flex items-center justify-center border border-gray-200 transition-all"
                >
                 
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M20 17H4M4 17L8 13M4 17L8 21M4 7H20M20 7L16 3M20 7L16 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
                </button>
              </div>

              <!-- To Input -->
              <div class="flex-1 min-w-0">
                <div class="relative h-full" ref="toInputRef">
                  <input
                    v-model="searchParams.to"
                    @input="handleToChange"
                    @focus="handleToFocus"
                    @blur="handleToBlur"
                    type="text"
                    placeholder="Qayerga"
                    autocomplete="off"
                    class="w-full h-12 md:h-14 px-3 md:px-4 bg-white border border-gray-300 border-b-0 lg:border-b lg:border-r-0 text-sm md:text-base text-gray-900 placeholder-gray-500 outline-none transition-all focus:z-10"
                  />

                  <!-- To Suggestions Dropdown -->
                  <div v-if="showToSuggestions" class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 md:max-h-60 overflow-y-auto z-50">
                    <div v-if="loadingToSuggestions" class="p-2 md:p-3 text-xs md:text-sm text-gray-500 text-center">
                      Qidirilmoqda...
                    </div>
                    <div v-else-if="toSuggestions.length === 0" class="p-2 md:p-3 text-xs md:text-sm text-gray-500 text-center">
                      Natija topilmadi
                    </div>
                    <div v-else>
                      <button
                        v-for="(station, index) in toSuggestions"
                        :key="station"
                        @click="selectToStation(station)"
                        :class="[
                          'w-full text-left px-3 md:px-4 py-2 transition-colors',
                          index === activeToIndex ? 'bg-blue-50' : 'hover:bg-gray-100'
                        ]"
                      >
                        <div class="text-xs md:text-sm font-medium text-gray-900">{{ station }}</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Date -->
              <div class="flex-1 min-w-0">
                <UPopover
                  mode="click"
                  :ui="{
                    container: 'bg-white dark:bg-white border border-gray-200 dark:border-gray-200 shadow-lg'
                  }"
                >
                  <button
                    type="button"
                    class="w-full h-12 md:h-14 px-3 md:px-4 bg-white border border-gray-300 border-b-0 lg:border-b lg:border-r-0 text-sm md:text-base text-gray-900 outline-none transition-all text-left flex items-center justify-between focus:z-10"
                  >
                    <span :class="departureDate ? 'text-gray-900' : 'text-gray-500'" class="text-xs md:text-sm lg:text-base">
                      {{ departureDate ? formatCalendarDate(departureDate) : "Jo'nash sanasi" }}
                    </span>
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>

                  <template #content="{ close }">
                    <UCalendar
                      v-model="departureDate"
                      class="p-2 custom-calendar"
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

              <!-- Passengers -->
              <div class="flex-1 min-w-0">
                <button
                  ref="passengersButtonRef"
                  @click="togglePassengersDropdown"
                  type="button"
                  class="w-full h-12 md:h-14 px-3 md:px-4 bg-white border border-gray-300 border-b-0 lg:border-b lg:border-r-0 text-sm md:text-base text-gray-900 outline-none transition-all text-left flex items-center justify-between focus:z-10"
                >
                  <span class="text-xs md:text-sm lg:text-base">{{ passengersText }}</span>
                  <svg class="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <!-- Search Button -->
              <div class="flex-1 min-w-0">
                <button
                  @click="handleSearch"
                  class="w-full h-12 md:h-14 px-6 md:px-8 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm md:text-base font-semibold rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center whitespace-nowrap"
                >
                  Poyezdni qidirish
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-3 md:px-4 py-4 md:py-6">
      <!-- Breadcrumb -->
      <div class="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
        <NuxtLink to="/" class="hover:text-blue-600">Bosh sahifa</NuxtLink>
        <span class="mx-1 md:mx-2">/</span>
        <NuxtLink to="/trains" class="hover:text-blue-600">Poyezdlar</NuxtLink>
        <span class="mx-1 md:mx-2">/</span>
        <span>{{ displayedSearch.from }} - {{ displayedSearch.to }}</span>
      </div>

      <!-- Mobile Filter Button -->
      <div class="lg:hidden mb-3 md:mb-4">
        <button
          @click="showFilterDrawer = true"
          class="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span>Filtrlar</span>
        </button>
      </div>

      <!-- Date Filter Tabs -->
      <div class="flex gap-2 md:gap-3 mb-4 md:mb-6 overflow-x-auto pb-2">
        <div class="flex items-center gap-2 bg-white p-1.5 md:p-2 rounded-lg shrink-0">
          <img src="../../assets/images/Container.png" alt="" class="w-5 h-5 md:w-6 md:h-6">
        </div>
        <button
          v-for="tab in dateTabs"
          :key="tab.id"
          :class="tab.active ? 'bg-[#2563EB] text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
          class="px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors whitespace-nowrap flex flex-col items-center min-w-[85px] md:min-w-[100px] shrink-0"
        >
          <div :class="tab.active ? 'text-white text-[10px] md:text-xs' : 'text-gray-600 text-[10px] md:text-xs'">{{ tab.label }}</div>
          <div :class="tab.active ? 'text-white font-semibold text-xs md:text-sm' : 'text-gray-900 font-semibold text-xs md:text-sm'">{{ tab.date }}</div>
        </button>
        <div class="ml-auto hidden lg:block shrink-0">
          <button class="bg-white text-blue-600 flex items-center gap-2 p-2 md:p-3 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap">
            <img src="../../assets/images/bell.png" alt="" class="w-4 h-4 md:w-5 md:h-5">
            <span class="text-sm">Narxlarni kuzatib borish</span>
          </button>
        </div>
      </div>

      <!-- Loading State with Skeleton -->
      <div v-if="loading" class="grid grid-cols-1 gap-3 md:gap-4 lg:gap-6 transition-all duration-300 lg:grid-cols-4">
        <!-- Skeleton Filters -->
        <div class="hidden lg:block">
          <div class="bg-white rounded-xl p-4 md:p-6 animate-pulse">
            <div class="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div class="space-y-3">
              <div class="h-4 bg-gray-200 rounded"></div>
              <div class="h-4 bg-gray-200 rounded"></div>
              <div class="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <!-- Skeleton Trains -->
        <div class="lg:col-span-3 space-y-3 md:space-y-4">
          <div v-for="i in 3" :key="i" class="bg-white rounded-xl p-4 md:p-6 animate-pulse">
            <div class="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div class="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12 md:py-20">
        <div class="text-red-600 text-base md:text-lg mb-3 md:mb-4 px-4">{{ error }}</div>
        <button @click="fetchTrains" class="px-4 md:px-6 py-2 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-700">
          Qayta urinish
        </button>
      </div>

      <!-- Empty State -->
      <div v-else-if="trains.length === 0" class="text-center py-12 md:py-20">
        <p class="text-gray-600 text-base md:text-lg px-4">Poyezdlar topilmadi</p>
      </div>

      <!-- Main Grid: Filters + Trains List -->
      <div v-else class="grid grid-cols-1 gap-3 md:gap-4 lg:gap-6 transition-all duration-300 lg:grid-cols-4">
        <!-- Filters Sidebar (Left) - Hidden on mobile -->
        <div class="hidden lg:block">
          <TrainsSearchFilterSidebar
            v-model:priceRange="filters.priceRange"
            v-model:departureTime="filters.departureTime"
            v-model:trainTypes="filters.trainTypes"
            v-model:wagonTypes="filters.wagonTypes"
            @update="applyFilters"
          />
        </div>

        <!-- Trains List (Right) -->
        <div class="lg:col-span-3 space-y-3 md:space-y-4">
          <TrainsSearchTrainCard
            v-for="train in filteredTrains"
            :key="train.id"
            :train="train"
          />
        </div>
      </div>
    </div>

    <!-- Filter Drawer (Mobile/Tablet) -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div
          v-if="showFilterDrawer"
          class="fixed inset-0 bg-black/50 z-[100] lg:hidden"
          @click="showFilterDrawer = false"
        ></div>
      </Transition>

      <Transition
        enter-active-class="transition-transform duration-300"
        leave-active-class="transition-transform duration-300"
        enter-from-class="translate-x-full"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="showFilterDrawer"
          class="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-[101] overflow-y-auto lg:hidden"
        >
          <!-- Drawer Header -->
          <div class="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between z-10">
            <h3 class="text-lg font-bold text-gray-900">Filtrlar</h3>
            <button
              @click="showFilterDrawer = false"
              class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Filter Content -->
          <div class="p-4">
            <TrainsSearchFilterSidebar
              v-model:priceRange="filters.priceRange"
              v-model:departureTime="filters.departureTime"
              v-model:trainTypes="filters.trainTypes"
              v-model:wagonTypes="filters.wagonTypes"
              @update="applyFilters"
            />
          </div>

          <!-- Drawer Footer -->
          <div class="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-3">
            <button
              @click="showFilterDrawer = false"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Natijalarni ko'rish
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>

  <!-- Teleport Passengers Dropdown -->
  <Teleport to="body">
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
      class="bg-white border border-gray-300 rounded-lg shadow-lg p-4 md:p-6"
    >
      <!-- Adults -->
      <div class="flex items-center justify-between mb-4 md:mb-6 gap-4 md:gap-8">
        <span class="text-gray-900 text-sm md:text-base font-medium whitespace-nowrap flex-1">Kattalar</span>
        <div class="flex items-center gap-2 md:gap-3 shrink-0">
          <button
            @click="decrementAdults"
            type="button"
            class="w-7 h-7 md:w-8 md:h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            :disabled="passengers.adults <= 1"
          >
            <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-gray-900 text-sm md:text-base font-medium w-6 md:w-8 text-center">{{ passengers.adults }}</span>
          <button
            @click="incrementAdults"
            type="button"
            class="w-7 h-7 md:w-8 md:h-8 border border-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 text-blue-600"
          >
            <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Children -->
      <div class="flex items-center justify-between gap-4 md:gap-8">
        <span class="text-gray-900 text-sm md:text-base font-medium whitespace-nowrap flex-1">Bolalar</span>
        <div class="flex items-center gap-2 md:gap-3 shrink-0">
          <button
            @click="decrementChildren"
            type="button"
            class="w-7 h-7 md:w-8 md:h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            :disabled="passengers.children <= 0"
          >
            <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-gray-900 text-sm md:text-base font-medium w-6 md:w-8 text-center">{{ passengers.children }}</span>
          <button
            @click="incrementChildren"
            type="button"
            class="w-7 h-7 md:w-8 md:h-8 border border-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 text-blue-600"
          >
            <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { parseDate, CalendarDate } from '@internationalized/date'

useSeoMeta({
  title: 'Poyezdlar qidiruvi - Triponik',
  description: 'Poyezd biletlarini qidiring va bron qiling',
})

const route = useRoute()
const router = useRouter()

// Static data from composable
const { uzbekistanCities, uzMonths: months } = useStaticData()

// O'zbek oy nomlari
const uzMonths = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr']

// Search params
const searchParams = ref({
  from: route.query.from || 'Toshkent',
  to: route.query.to || 'Samarqand',
  departureDate: route.query.departureDate || '',
  adults: parseInt(route.query.adults) || 1,
  children: parseInt(route.query.children) || 0,
  directOnly: route.query.directOnly === 'true'
})

// Displayed search (after search button click)
const displayedSearch = ref({
  from: route.query.from || 'Toshkent',
  to: route.query.to || 'Samarqand',
  departureDate: route.query.departureDate || '',
  adults: parseInt(route.query.adults) || 1,
  children: parseInt(route.query.children) || 0
})

// Initialize departure date
const initializeDepartureDate = () => {
  if (route.query.departureDate) {
    try {
      return parseDate(route.query.departureDate)
    } catch (e) {
      console.error('Error parsing date:', e)
    }
  }

  const today = new Date()
  return new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate())
}

const departureDate = ref(initializeDepartureDate())

// Watch calendar date and update search params
watch(departureDate, (newDate) => {
  if (newDate) {
    const year = newDate.year
    const month = String(newDate.month).padStart(2, '0')
    const day = String(newDate.day).padStart(2, '0')
    searchParams.value.departureDate = `${year}-${month}-${day}`
  }
})

// Format calendar date to Uzbek format
const formatCalendarDate = (calendarDate) => {
  if (!calendarDate) return ''
  const day = calendarDate.day
  const month = uzMonths[calendarDate.month - 1]
  return `${day} ${month}`
}

// Stations suggestions
const fromSuggestions = ref([])
const toSuggestions = ref([])
const showFromSuggestions = ref(false)
const showToSuggestions = ref(false)
const loadingFromSuggestions = ref(false)
const loadingToSuggestions = ref(false)
const activeFromIndex = ref(-1)
const activeToIndex = ref(-1)
const fromInputRef = ref(null)
const toInputRef = ref(null)
let fromSearchTimeout = null
let toSearchTimeout = null

// Get station suggestions from uzbekistanCities
const getStationSuggestions = (query) => {
  const cityNames = uzbekistanCities.map(city => city.name)
  if (!query) return cityNames
  return cityNames.filter(station =>
    station.toLowerCase().includes(query.toLowerCase())
  )
}

// Handle from input change
const handleFromChange = () => {
  const query = searchParams.value.from.trim()
  activeFromIndex.value = -1

  if (fromSearchTimeout) {
    clearTimeout(fromSearchTimeout)
  }

  fromSearchTimeout = setTimeout(() => {
    loadingFromSuggestions.value = true
    showFromSuggestions.value = true
    fromSuggestions.value = getStationSuggestions(query)
    loadingFromSuggestions.value = false
  }, 300)
}

// Handle to input change
const handleToChange = () => {
  const query = searchParams.value.to.trim()
  activeToIndex.value = -1

  if (toSearchTimeout) {
    clearTimeout(toSearchTimeout)
  }

  toSearchTimeout = setTimeout(() => {
    loadingToSuggestions.value = true
    showToSuggestions.value = true
    toSuggestions.value = getStationSuggestions(query)
    loadingToSuggestions.value = false
  }, 300)
}

// Handle from focus
const handleFromFocus = () => {
  showFromSuggestions.value = true
  if (fromSuggestions.value.length === 0) {
    fromSuggestions.value = getStationSuggestions('')
  }
}

// Handle to focus
const handleToFocus = () => {
  showToSuggestions.value = true
  if (toSuggestions.value.length === 0) {
    toSuggestions.value = getStationSuggestions('')
  }
}

// Handle from blur
const handleFromBlur = () => {
  setTimeout(() => {
    showFromSuggestions.value = false
    activeFromIndex.value = -1
  }, 200)
}

// Handle to blur
const handleToBlur = () => {
  setTimeout(() => {
    showToSuggestions.value = false
    activeToIndex.value = -1
  }, 200)
}

// Select from station
const selectFromStation = (station) => {
  searchParams.value.from = station
  showFromSuggestions.value = false
  activeFromIndex.value = -1
}

// Select to station
const selectToStation = (station) => {
  searchParams.value.to = station
  showToSuggestions.value = false
  activeToIndex.value = -1
}

// Keyboard navigation (reserved for future use)
// const handleKeyDown = (event) => {
//   // Handle keyboard for suggestions
// }

// Swap stations
const swapStations = () => {
  const temp = searchParams.value.from
  searchParams.value.from = searchParams.value.to
  searchParams.value.to = temp
}

// Passengers
const passengers = ref({
  adults: parseInt(route.query.adults) || 1,
  children: parseInt(route.query.children) || 0
})

const passengersText = computed(() => {
  const parts = []
  if (passengers.value.adults > 0) parts.push(`${passengers.value.adults} yo'lovchi`)
  if (passengers.value.children > 0) parts.push(`${passengers.value.children} bola`)
  return parts.join(', ')
})

// Passengers dropdown
const showPassengersDropdown = ref(false)
const passengersButtonRef = ref(null)
const passengersDropdownRef = ref(null)
const passengersPosition = ref({ top: 0, left: 0, width: 0 })

const togglePassengersDropdown = () => {
  showPassengersDropdown.value = !showPassengersDropdown.value
  if (showPassengersDropdown.value) {
    updatePassengersPosition()
  }
}

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

const incrementAdults = () => { passengers.value.adults++ }
const decrementAdults = () => { if (passengers.value.adults > 1) passengers.value.adults-- }
const incrementChildren = () => { passengers.value.children++ }
const decrementChildren = () => { if (passengers.value.children > 0) passengers.value.children-- }

// Recent searches from localStorage
const recentSearches = ref([])

const loadRecentSearches = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('recentTrainSearches')
    if (saved) {
      try {
        recentSearches.value = JSON.parse(saved).slice(0, 3)
      } catch (e) {
        console.error('Error loading recent searches:', e)
        recentSearches.value = []
      }
    }
  }
}

const saveSearchToHistory = () => {
  if (typeof window !== 'undefined' && searchParams.value.from && searchParams.value.to) {
    const newSearch = {
      from: searchParams.value.from,
      to: searchParams.value.to,
      departureDate: searchParams.value.departureDate,
      timestamp: Date.now()
    }

    let searches = recentSearches.value.filter(
      s => !(s.from === newSearch.from && s.to === newSearch.to)
    )
    searches.unshift(newSearch)
    searches = searches.slice(0, 3)

    recentSearches.value = searches
    localStorage.setItem('recentTrainSearches', JSON.stringify(searches))
  }
}

const selectRecentSearch = (search) => {
  searchParams.value.from = search.from
  searchParams.value.to = search.to
  searchParams.value.departureDate = search.departureDate

  if (search.departureDate) {
    try {
      departureDate.value = parseDate(search.departureDate)
    } catch (e) {
      console.error('Error parsing date:', e)
    }
  }
}

// Date tabs
const dateTabs = ref([
  { id: 1, label: '2 — 4 kun', date: '7 231 ₽', active: false },
  { id: 2, label: '31 avg — 4 sen', date: '8 730 ₽', active: false },
  { id: 3, label: '1 — 1.5 kun', date: '8 116 ₽', active: true },
  { id: 4, label: '1 — 3 sen', date: '6 975 ₽', active: false }
])

// Filters
const filters = ref({
  priceRange: [200000, 600000],
  departureTime: [],
  trainTypes: [],
  wagonTypes: []
})

// Filter drawer state
const showFilterDrawer = ref(false)

// Trains data
const trains = ref([])
const filteredTrains = ref([])
const loading = ref(false)
const error = ref(null)

// Dynamic train data generator - tanlangan shaharlar asosida
const generateTrainData = (from, to) => {
  if (!from || !to) return []

  // Poyezd turlari va ularning xususiyatlari
  const trainTypesData = [
    { type: 'afrosiyob', name: 'Afrosiyob', class: 'Tezkor', numbers: ['059A', '061'], wagonTypes: ['plaskart', 'kupe', 'vip'] },
    { type: 'sharq', name: 'Sharq', class: 'Tunik', numbers: ['761', '763'], wagonTypes: ['plaskart', 'kupe'] },
    { type: 'ozbekiston', name: 'O\'zbekiston', class: 'Yo\'lovchi', numbers: ['053', '067', '145'], wagonTypes: ['plaskart'] }
  ]

  // Vaqt oralig'i ma'lumotlari
  const timeSlotData = {
    night: ['01:15', '03:08', '04:45'],
    morning: ['07:15', '09:30', '11:20'],
    afternoon: ['13:10', '15:45', '17:00'],
    evening: ['19:20', '21:15', '22:45']
  }

  const durations = ['5 soat 22 daqiqa', '6 soat 10 daqiqa', '7 soat 45 daqiqa', '4 soat 30 daqiqa', '8 soat 15 daqiqa']

  // Vagon turlari uchun narx koeffitsientlari
  const wagonPriceMultipliers = {
    plaskart: 1,
    kupe: 1.8,
    vip: 3.5
  }

  // Har bir poyezd turi uchun
  const trains = []
  let trainId = 1

  trainTypesData.forEach((trainTypeData) => {
    // Har bir vaqt oralig'i uchun 1 ta poyezd
    Object.keys(timeSlotData).forEach((timeSlot) => {
      const times = timeSlotData[timeSlot]
      const depTime = times[Math.floor(Math.random() * times.length)]
      const duration = durations[Math.floor(Math.random() * durations.length)]

      // Arrival time hisoblash
      const [hours, minutes] = depTime.split(':').map(Number)
      const durationHours = parseInt(duration.split(' ')[0])
      const arrivalHours = (hours + durationHours) % 24
      const arrivalTime = `${String(arrivalHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`

      // Bazaviy narxlar
      const basePrice = 200000 + Math.random() * 150000

      // Har xil vagon turlari uchun joylar
      const availableSeats = {}

      trainTypeData.wagonTypes.forEach(wagonType => {
        const wagonPrice = basePrice * wagonPriceMultipliers[wagonType]
        const hasSeats = Math.random() > 0.2 // 80% ehtimol joy bor

        availableSeats[wagonType] = {
          available: hasSeats ? Math.floor(Math.random() * 35) + 5 : 'Joy yo\'q',
          price: Math.floor(wagonPrice),
          label: wagonType === 'plaskart' ? 'Plaskart' : wagonType === 'kupe' ? 'Kupe' : 'VIP',
          passengers: hasSeats ? `${Math.floor(Math.random() * 25) + 5} pasida` : ''
        }
      })

      // Har doim barcha vagon turlarini qo'shamiz (mavjud bo'lmasa ham)
      if (!availableSeats.plaskart) {
        availableSeats.plaskart = {
          available: 'Joy yo\'q',
          price: Math.floor(basePrice),
          label: 'Plaskart',
          passengers: ''
        }
      }
      if (!availableSeats.kupe) {
        availableSeats.kupe = {
          available: 'Joy yo\'q',
          price: Math.floor(basePrice * 1.8),
          label: 'Kupe',
          passengers: ''
        }
      }
      if (!availableSeats.vip) {
        availableSeats.vip = {
          available: 'Joy yo\'q',
          price: Math.floor(basePrice * 3.5),
          label: 'VIP',
          passengers: ''
        }
      }

      trains.push({
        id: trainId++,
        number: trainTypeData.numbers[Math.floor(Math.random() * trainTypeData.numbers.length)],
        name: trainTypeData.name,
        class: trainTypeData.class,
        type: trainTypeData.type, // Filter uchun
        timeSlot: timeSlot, // Filter uchun
        departureTime: depTime,
        arrivalTime: arrivalTime,
        duration: `${duration} yo'lda`,
        departureStation: `${from} vokzali`,
        arrivalStation: `${to} markazy`,
        departureCity: from,
        arrivalCity: to,
        departureDate: '17 okt, pay',
        arrivalDate: '17 okt, pay',
        availableSeats: availableSeats,
        wagonTypes: trainTypeData.wagonTypes, // Filter uchun
        amenities: ['wifi', 'food', 'power', 'ac', 'toilet', 'disabled']
      })
    })
  })

  return trains
}

// Fetch trains - tanlangan shaharlar asosida
const fetchTrains = async () => {
  loading.value = true
  error.value = null

  try {
    // TODO: Replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Tanlangan shaharlar asosida poyezdlar generatsiya qilamiz
    const generatedTrains = generateTrainData(
      displayedSearch.value.from || searchParams.value.from,
      displayedSearch.value.to || searchParams.value.to
    )

    trains.value = generatedTrains
    filteredTrains.value = generatedTrains
  } catch (err) {
    console.error('Search error:', err)
    error.value = 'Xatolik yuz berdi. Iltimos qayta urinib koring.'
    trains.value = []
    filteredTrains.value = []
  } finally {
    loading.value = false
  }
}

// Apply filters - filterlarni qo'llash
const applyFilters = () => {
  let filtered = [...trains.value]

  // 1. Narx filtri
  filtered = filtered.filter(train => {
    // Har qanday vagon turining narxi filtrdagi oraliqda bo'lsa
    const prices = Object.values(train.availableSeats)
      .filter(seat => seat.available !== 'Joy yo\'q')
      .map(seat => seat.price)

    if (prices.length === 0) return false

    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)

    return (minPrice <= filters.value.priceRange[1]) && (maxPrice >= filters.value.priceRange[0])
  })

  // 2. Jo'nash vaqti filtri
  if (filters.value.departureTime.length > 0) {
    filtered = filtered.filter(train => {
      return filters.value.departureTime.includes(train.timeSlot)
    })
  }

  // 3. Poyezd turlari filtri
  if (filters.value.trainTypes.length > 0) {
    filtered = filtered.filter(train => {
      return filters.value.trainTypes.includes(train.type)
    })
  }

  // 4. Vagon turlari filtri
  if (filters.value.wagonTypes.length > 0) {
    filtered = filtered.filter(train => {
      // Train'da filter qilingan vagon turlaridan kamida bittasi bor bo'lishi kerak
      return filters.value.wagonTypes.some(wagonType =>
        train.wagonTypes.includes(wagonType) &&
        train.availableSeats[wagonType]?.available !== 'Joy yo\'q'
      )
    })
  }

  filteredTrains.value = filtered
}

// Handle search
const handleSearch = () => {
  displayedSearch.value = {
    from: searchParams.value.from,
    to: searchParams.value.to,
    departureDate: searchParams.value.departureDate,
    adults: passengers.value.adults,
    children: passengers.value.children
  }

  saveSearchToHistory()

  router.push({
    path: '/trains/search',
    query: {
      from: searchParams.value.from,
      to: searchParams.value.to,
      departureDate: searchParams.value.departureDate,
      adults: passengers.value.adults,
      children: passengers.value.children,
      directOnly: searchParams.value.directOnly
    }
  })

  fetchTrains()
}

// Click outside handler
const handleClickOutside = (event) => {
  if (fromInputRef.value && !fromInputRef.value.contains(event.target)) {
    showFromSuggestions.value = false
    activeFromIndex.value = -1
  }

  if (toInputRef.value && !toInputRef.value.contains(event.target)) {
    showToSuggestions.value = false
    activeToIndex.value = -1
  }

  if (passengersButtonRef.value && !passengersButtonRef.value.contains(event.target)) {
    if (passengersDropdownRef.value && !passengersDropdownRef.value.contains(event.target)) {
      showPassengersDropdown.value = false
    }
  }
}

onMounted(() => {
  loadRecentSearches()

  if (route.query.adults) {
    passengers.value.adults = parseInt(route.query.adults) || 1
  }
  if (route.query.children) {
    passengers.value.children = parseInt(route.query.children) || 0
  }

  fetchTrains()
  document.addEventListener('mousedown', handleClickOutside)

  window.addEventListener('scroll', () => {
    if (showPassengersDropdown.value) updatePassengersPosition()
  })
  window.addEventListener('resize', () => {
    if (showPassengersDropdown.value) updatePassengersPosition()
  })
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  if (fromSearchTimeout) clearTimeout(fromSearchTimeout)
  if (toSearchTimeout) clearTimeout(toSearchTimeout)
})

// Watch route query changes
watch(() => route.query, () => {
  searchParams.value = {
    from: route.query.from || 'Toshkent',
    to: route.query.to || 'Samarqand',
    departureDate: route.query.departureDate || '',
    adults: parseInt(route.query.adults) || 1,
    children: parseInt(route.query.children) || 0,
    directOnly: route.query.directOnly === 'true'
  }

  displayedSearch.value = {
    from: route.query.from || 'Toshkent',
    to: route.query.to || 'Samarqand',
    departureDate: route.query.departureDate || '',
    adults: parseInt(route.query.adults) || 1,
    children: parseInt(route.query.children) || 0
  }

  if (route.query.departureDate) {
    try {
      departureDate.value = parseDate(route.query.departureDate)
    } catch (e) {
      console.error('Error parsing date:', e)
    }
  }

  passengers.value.adults = parseInt(route.query.adults) || 1
  passengers.value.children = parseInt(route.query.children) || 0

  fetchTrains()
}, { deep: true })
</script>

<style>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Calendar custom styling */
.custom-calendar :deep(button[data-selected="true"]),
.custom-calendar :deep(button[aria-selected="true"]),
.custom-calendar :deep(.bg-gray-900),
.custom-calendar :deep([data-state="selected"]) {
  background-color: #2563EB !important;
  color: white !important;
}

.custom-calendar :deep(button[data-today="true"]),
.custom-calendar :deep([data-state="today"]) {
  border: 2px solid #2563EB !important;
  font-weight: 600;
}
</style>

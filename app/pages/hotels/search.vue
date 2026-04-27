<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Search Header -->
    <div class="py-4 md:py-6" style="background-color: #001549;">
      <div class="container mx-auto px-3 md:px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Title -->
          <h2 class="text-white text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-center px-2">
            Hamyonbop narxlarda mehmonxonalar va kvartiralar
          </h2>

          <!-- Search Form -->
          <div class="overflow-visible">
            <div class="flex flex-col lg:flex-row items-stretch gap-0">
              <!-- Location Input -->
              <div class="flex-1 min-w-0">
                <div class="relative h-full" ref="inputRef">
                  <input
                    v-model="searchParams.location"
                    @input="handleDestinationChange"
                    @focus="handleInputFocus"
                    @blur="handleInputBlur"
                    @keydown="handleKeyDown"
                    type="text"
                    placeholder="Qayerga bormoqchisiz?"
                    autocomplete="off"
                    class="w-full h-12 md:h-14 px-3 md:px-4 bg-white border border-gray-300 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none border-b-0 lg:border-b lg:border-r-0 text-sm md:text-base text-gray-900 placeholder-gray-500 outline-none transition-all focus:z-10"
                  />

                  <!-- Suggestions Dropdown -->
                  <div v-if="showSuggestions" class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 md:max-h-60 overflow-y-auto z-50">
                    <div v-if="loadingSuggestions" class="p-2 md:p-3 text-xs md:text-sm text-gray-500 text-center">
                      Qidirilmoqda...
                    </div>
                    <div v-else-if="suggestions.length === 0" class="p-2 md:p-3 text-xs md:text-sm text-gray-500 text-center">
                      Natija topilmadi
                    </div>
                    <div v-else>
                      <button
                        v-for="(suggestion, index) in suggestions"
                        :key="suggestion.code"
                        @click="selectSuggestion(suggestion)"
                        :class="[
                          'w-full text-left px-3 md:px-4 py-2 transition-colors flex items-center gap-2',
                          index === activeSuggestionIndex ? 'bg-blue-50' : 'hover:bg-gray-100'
                        ]"
                      >
                        <svg class="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div class="min-w-0 flex-1">
                          <div class="text-xs md:text-sm font-medium text-gray-900 truncate">{{ suggestion.name }}</div>
                          <div class="text-[10px] md:text-xs text-gray-500 truncate">{{ suggestion.countryCode }}</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Date Range - Calendar -->
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
                    <span :class="dateRange.start ? 'text-gray-900' : 'text-gray-500'" class="text-xs md:text-sm lg:text-base">
                      <template v-if="dateRange.start">
                        <template v-if="dateRange.end">
                          {{ formatCalendarDate(dateRange.start) }} — {{ formatCalendarDate(dateRange.end) }}
                        </template>
                        <template v-else>
                          {{ formatCalendarDate(dateRange.start) }}
                        </template>
                      </template>
                      <template v-else>
                        Kirish — Chiqish
                      </template>
                    </span>
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>

                  <template #content="{ close }">
                    <UCalendar
                      v-model="dateRange"
                      class="p-2 custom-calendar"
                      :number-of-months="isMobile ? 1 : 2"
                      range
                      @update:modelValue="(value) => { if (value.end) close() }"
                      :ui="{
                        base: 'bg-white dark:bg-white',
                        container: 'bg-white dark:bg-white',
                        header: 'text-gray-900 dark:text-gray-900',
                        months: 'bg-white dark:bg-white',
                        cell: {
                          base: 'text-gray-900 dark:text-gray-900',
                          selected: 'bg-blue-600 dark:bg-blue-600 text-white dark:text-white hover:bg-blue-700 dark:hover:bg-blue-700',
                          inRange: 'bg-blue-100 dark:bg-blue-100 text-blue-900 dark:text-blue-900',
                          today: 'border-2 border-blue-600 dark:border-blue-600'
                        }
                      }"
                    />
                  </template>
                </UPopover>
              </div>

              <!-- Guests -->
              <div class="flex-1 min-w-0">
                <button
                  ref="guestsButtonRef"
                  @click="toggleGuestsDropdown"
                  type="button"
                  class="w-full h-12 md:h-14 px-3 md:px-4 bg-white border border-gray-300 border-b-0 lg:border-b lg:border-r-0 text-sm md:text-base text-gray-900 outline-none transition-all text-left flex items-center justify-between focus:z-10"
                >
                  <span class="text-xs md:text-sm lg:text-base">{{ guestsText }}</span>
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
                  Qidirish
                </button>
              </div>
            </div>

            <!-- Recent Locations and Date Ranges -->
            <div v-if="recentLocations.length > 0 || recentDateRanges.length > 0" class="mt-2 md:mt-3 flex flex-wrap gap-1.5 md:gap-2 items-center">
              <!-- Recent Locations -->
              <button
                v-for="location in recentLocations"
                :key="location.destinationCode"
                @click="selectRecentLocation(location)"
                class="px-2 md:px-3 py-1 md:py-1.5 bg-[#707495] hover:bg-gray-200 text-white text-[10px] md:text-[12px] rounded-lg transition-colors"
              >
                {{ location.location }}
              </button>

              <!-- Separator -->
              <div v-if="recentLocations.length > 0 && recentDateRanges.length > 0" class="h-4 md:h-6 w-px mx-1 md:mx-2"></div>

              <!-- Recent Date Ranges -->
              <button
                v-for="(dateRange, index) in recentDateRanges"
                :key="'date-' + index"
                @click="selectRecentDateRange(dateRange)"
                class="px-2 md:px-3 py-1 md:py-1.5 bg-[#707495] hover:bg-gray-200 text-white text-[10px] md:text-[12px] rounded-lg transition-colors"
              >
                {{ dateRange.label }}
              </button>
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
        <NuxtLink to="/hotels" class="hover:text-blue-600">Mehmonxonalar</NuxtLink>
        <span class="mx-1 md:mx-2">/</span>
       <span>{{ searchParams.location || 'Shahar' }}</span>
      </div>

      <!-- Results Header -->
      <h1 class="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
        {{ displayedSearch.location || 'Mehmonxonalar' }}: {{ hotels.length }} ta joylashtirish varianti mavjud
      </h1>
      <!-- <p class="text-gray-600 mb-6">
        {{ formatDateRange(displayedSearch.checkIn, displayedSearch.checkOut) }}, {{ displayedSearch.guests }} mehmon
      </p> -->

      <!-- Filter Tabs -->
      <div class="flex gap-2 md:gap-3 mb-4 md:mb-6 overflow-x-auto pb-2">
        <button
          v-for="tab in filterTabs"
          :key="tab.id"
          :class="tab.active ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'"
          class="px-4 md:px-6 py-1.5 md:py-2 rounded-lg text-sm md:text-base font-medium transition-colors whitespace-nowrap"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Loading State with Skeleton -->
      <div v-if="loading" class="grid grid-cols-1 gap-3 md:gap-4 lg:gap-6 transition-all duration-300 lg:grid-cols-3">
        <!-- Skeleton Hotels List -->
        <div class="lg:col-span-2 space-y-3 md:space-y-4">
          <HotelsSearchHotelCardSkeleton
            v-for="i in 6"
            :key="i"
            :compact="false"
          />
        </div>

        <!-- Skeleton Map -->
        <div class="lg:col-span-1 hidden lg:block">
          <div class="sticky top-6 bg-gray-200 rounded-xl h-[400px] md:h-[600px] animate-pulse"></div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12 md:py-20">
        <div class="text-red-600 text-base md:text-lg mb-3 md:mb-4 px-4">{{ error }}</div>
        <button @click="fetchHotels" class="px-4 md:px-6 py-2 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-700">
          Qayta urinish
        </button>
      </div>

      <!-- Empty State -->
      <div v-else-if="hotels.length === 0" class="text-center py-12 md:py-20">
        <p class="text-gray-600 text-base md:text-lg px-4">Hech qanday mehmonxona topilmadi</p>
      </div>

      <!-- Main Grid: List + Map -->
      <div v-else class="grid grid-cols-1 gap-3 md:gap-4 lg:gap-6 transition-all duration-300" :class="isMapExpanded ? 'lg:grid-cols-[30%_70%]' : 'lg:grid-cols-3'">
        <!-- Hotels List (Left - 2 cols or 30%) -->
        <div :class="isMapExpanded ? '' : 'lg:col-span-2'" class="space-y-3 md:space-y-4" ref="hotelListContainer">
          <template v-for="(hotel, index) in hotels" :key="hotel.id">
            <HotelsSearchHotelCard
              :ref="el => setHotelRef(el, hotel.id)"
              :hotel="hotel"
              :compact="isMapExpanded"
            />

            <!-- Ad Banner after first hotel -->
            <HotelsSearchAdBanner v-if="index === 0" :compact="isMapExpanded" />
          </template>
        </div>

        <!-- Map (Right - 1 col or 70%) - Hidden on mobile -->
        <div :class="isMapExpanded ? '' : 'lg:col-span-1'" class="hidden lg:block">
          <div class="sticky top-6">
            <HotelsSearchMap
              :hotels="hotels"
              @hotelSelected="scrollToHotel"
              @expandToggled="handleMapExpand"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Teleport Guests Dropdown -->
  <Teleport to="body">
    <div
      v-if="showGuestsDropdown"
      ref="guestsDropdownRef"
      :style="{
        position: 'absolute',
        top: `${guestsPosition.top}px`,
        left: `${guestsPosition.left}px`,
        width: `${guestsPosition.width}px`,
        zIndex: 9999
      }"
      class="bg-white border border-gray-300 rounded-lg shadow-lg p-4 md:p-6"
    >
      <!-- Adults -->
      <div class="flex items-center justify-between mb-4 md:mb-6 gap-4 md:gap-8">
        <span class="text-gray-900 text-sm md:text-base font-medium whitespace-nowrap flex-1">Kattalar</span>
        <div class="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <button
            @click="decrementAdults"
            type="button"
            class="w-7 h-7 md:w-8 md:h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            :disabled="guests.adults <= 1"
          >
            <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-gray-900 text-sm md:text-base font-medium w-6 md:w-8 text-center">{{ guests.adults }}</span>
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
      <div class="flex items-center justify-between mb-4 md:mb-6 gap-4 md:gap-8">
        <span class="text-gray-900 text-sm md:text-base font-medium whitespace-nowrap flex-1">Bolalar</span>
        <div class="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <button
            @click="decrementChildren"
            type="button"
            class="w-7 h-7 md:w-8 md:h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            :disabled="guests.children <= 0"
          >
            <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-gray-900 text-sm md:text-base font-medium w-6 md:w-8 text-center">{{ guests.children }}</span>
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

      <!-- Rooms -->
      <div class="flex items-center justify-between gap-4 md:gap-8">
        <span class="text-gray-900 text-sm md:text-base font-medium whitespace-nowrap flex-1">Xonalar</span>
        <div class="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <button
            @click="decrementRooms"
            type="button"
            class="w-7 h-7 md:w-8 md:h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            :disabled="guests.rooms <= 1"
          >
            <svg class="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-gray-900 text-sm md:text-base font-medium w-6 md:w-8 text-center">{{ guests.rooms }}</span>
          <button
            @click="incrementRooms"
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
import { CalendarDate, DateFormatter, getLocalTimeZone, parseDate } from '@internationalized/date'

useSeoMeta({
  title: 'Mehmonxonalar qidiruvi - Triponik',
  description: 'Eng yaxshi mehmonxonalarni toping va bron qiling',
})

const route = useRoute()
const router = useRouter()
const { searchHotels, searchDestinations } = useHotelAPI()

// Date formatter
const df = new DateFormatter('uz-UZ', {
  day: 'numeric',
  month: 'short'
})

// O'zbek oy nomlari
const uzMonths = [
  'yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun',
  'iyul', 'avgust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'
]

const searchParams = ref({
  location: route.query.destination || '',
  destinationCode: route.query.destinationCode || '',
  checkIn: route.query.checkIn || '',
  checkOut: route.query.checkOut || '',
  guests: route.query.guests || route.query.adults || ''
})

// Initialize dateRange from query params or set default
const initializeDateRange = () => {
  if (route.query.checkIn && route.query.checkOut) {
    try {
      return {
        start: parseDate(route.query.checkIn),
        end: parseDate(route.query.checkOut)
      }
    } catch (e) {
      console.error('Error parsing dates:', e)
    }
  }

  // Default: today and tomorrow
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  return {
    start: new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate()),
    end: new CalendarDate(tomorrow.getFullYear(), tomorrow.getMonth() + 1, tomorrow.getDate())
  }
}

const dateRange = ref(initializeDateRange())

// Faqat search bosilganda ko'rsatiladigan ma'lumotlar
const displayedSearch = ref({
  location: route.query.destination || '',
  checkIn: route.query.checkIn || '',
  checkOut: route.query.checkOut || '',
  guests: route.query.guests || route.query.adults || ''
})

// Suggestions state
const suggestions = ref([])
const showSuggestions = ref(false)
const loadingSuggestions = ref(false)
const activeSuggestionIndex = ref(-1)
const inputRef = ref(null)
const guestsButtonRef = ref(null)
const guestsDropdownRef = ref(null)
const showGuestsDropdown = ref(false)
let searchTimeout = null

// Guests data
const guests = ref({
  adults: 1,
  children: 0,
  rooms: 1
})

// Guests position for dropdown
const guestsPosition = ref({ top: 0, left: 0, width: 0 })

// Format calendar date for display in Uzbek format (1-yanvar)
const formatCalendarDate = (calendarDate) => {
  if (!calendarDate) return ''
  const day = calendarDate.day
  const month = uzMonths[calendarDate.month - 1]
  return `${day}-${month}`
}

// Convert CalendarDate to YYYY-MM-DD format
const calendarDateToString = (calendarDate) => {
  if (!calendarDate) return ''
  const year = calendarDate.year
  const month = String(calendarDate.month).padStart(2, '0')
  const day = String(calendarDate.day).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Watch dateRange and update searchParams
watch(dateRange, (newRange) => {
  if (newRange.start) {
    searchParams.value.checkIn = calendarDateToString(newRange.start)
  }
  if (newRange.end) {
    searchParams.value.checkOut = calendarDateToString(newRange.end)
  }
}, { deep: true })

// Recent searches from localStorage
const recentSearches = ref([])

// Load recent searches from localStorage
const loadRecentSearches = () => {
  if (process.client) {
    const saved = localStorage.getItem('recentHotelSearches')
    if (saved) {
      try {
        recentSearches.value = JSON.parse(saved)
      } catch (e) {
        console.error('Error loading recent searches:', e)
        recentSearches.value = []
      }
    }
  }
}

// Save search to localStorage
const saveSearchToHistory = () => {
  if (process.client && searchParams.value.location && searchParams.value.destinationCode) {
    const newSearch = {
      location: searchParams.value.location,
      destinationCode: searchParams.value.destinationCode,
      checkIn: searchParams.value.checkIn,
      checkOut: searchParams.value.checkOut,
      timestamp: Date.now()
    }

    // Remove duplicates and add new search to beginning
    let searches = recentSearches.value.filter(
      s => s.destinationCode !== newSearch.destinationCode
    )
    searches.unshift(newSearch)

    // Keep only last 3 searches
    searches = searches.slice(0, 3)

    recentSearches.value = searches
    localStorage.setItem('recentHotelSearches', JSON.stringify(searches))
  }
}

// Check if mobile
const isMobile = computed(() => {
  if (process.client) {
    return window.innerWidth < 768
  }
  return false
})

// Guests text
const guestsText = computed(() => {
  const parts = []
  if (guests.value.adults > 0) parts.push(`${guests.value.adults} katta`)
  if (guests.value.children > 0) parts.push(`${guests.value.children} bola`)
  parts.push(`${guests.value.rooms} xona`)
  return parts.join(', ')
})

// Watch guests changes and update searchParams
watch(guests, (newGuests) => {
  searchParams.value.guests = newGuests.adults + newGuests.children
}, { deep: true })

// Get unique recent locations (last 3)
const recentLocations = computed(() => {
  const seen = new Set()
  const unique = []

  for (const search of recentSearches.value) {
    if (!seen.has(search.destinationCode) && unique.length < 3) {
      seen.add(search.destinationCode)
      unique.push({
        location: search.location,
        destinationCode: search.destinationCode
      })
    }
  }

  return unique
})

// Get unique recent date ranges (last 2)
const recentDateRanges = computed(() => {
  const seen = new Set()
  const unique = []

  for (const search of recentSearches.value) {
    if (search.checkIn && search.checkOut) {
      const key = `${search.checkIn}-${search.checkOut}`
      if (!seen.has(key) && unique.length < 2) {
        seen.add(key)
        unique.push({
          checkIn: search.checkIn,
          checkOut: search.checkOut,
          label: `${formatDateShort(search.checkIn)} — ${formatDateShort(search.checkOut)}`
        })
      }
    }
  }

  return unique
})

const filterTabs = ref([
  { id: 1, label: 'Barchasi', active: true, type: 'all' },
  { id: 2, label: 'Mehmonxona', active: false, type: 'hotel' },
  { id: 3, label: 'Kvartira', active: false, type: 'apartment' },
  { id: 4, label: 'Yotoqxona', active: false, type: 'hostel' }
])

const hotels = ref([])
const allHotels = ref([]) // Barcha mehmonxonalar (filter uchun)
const loading = ref(false)
const error = ref(null)

// Hotel card refs
const hotelRefs = ref({})
const hotelListContainer = ref(null)

// Map expand state
const isMapExpanded = ref(false)

// Mehmonxonalarni qidirish
const fetchHotels = async () => {
  if (!searchParams.value.location || !searchParams.value.checkIn || !searchParams.value.checkOut) {
    return
  }

  loading.value = true
  error.value = null

  try {
    const result = await searchHotels({
      stay: {
        checkIn: searchParams.value.checkIn,
        checkOut: searchParams.value.checkOut
      },
      occupancies: [{
        rooms: guests.value.rooms,
        adults: guests.value.adults,
        children: guests.value.children
      }],
      filter: {
        destination: {
          code: searchParams.value.destinationCode,
          name: searchParams.value.location
        }
      }
    })

    // Backend dan kelgan hotellarni format qilish
    if (result && result.hotels) {
      const formattedHotels = result.hotels.map(hotel => ({
        id: hotel.code,
        code: hotel.code,
        name: hotel.name,
        image: hotel.image || (hotel.images && hotel.images.length > 0
          ? (hotel.images[0].path.startsWith('http') ? hotel.images[0].path : `https://api.triponik.uz${hotel.images[0].path}`)
          : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'),
        imageCount: hotel.images?.length || 1,
        rating: hotel.rating || parseInt(hotel.categoryCode) || 4,
        categoryName: hotel.categoryName || 'HOTEL',
        score: hotel.score || 8.5,
        reviews: hotel.reviewCount || 120,
        isTop: hotel.isTop || false,
        location: hotel.address || hotel.city || '',
        distance: 'Markazga yaqin',
        metroDistance: '5 daqiqa piyoda',
        roomType: hotel.roomType || (hotel.rooms && hotel.rooms.length > 0 ? hotel.rooms[0].name : 'Standart xona'),
        roomBeds: '2 kishilik krovat',
        roomSize: 25,
        viewType: 'Shahar ko\'rinishi',
        amenities: ['Wi-Fi', 'Konditsioner', 'Televizor'],
        nights: calculateNights(searchParams.value.checkIn, searchParams.value.checkOut),
        guests: parseInt(searchParams.value.guests),
        price: hotel.price || hotel.minRate || 0,
        currency: hotel.currency || result.currency || 'USD',
        coordinates: [hotel.latitude || 41.2995, hotel.longitude || 69.2401],
        rooms: hotel.rooms || []
      }))

      allHotels.value = formattedHotels
      hotels.value = formattedHotels
    }
  } catch (err) {
    console.error('Search error:', err)
    error.value = 'Xatolik yuz berdi. Iltimos qayta urinib ko\'ring.'
    allHotels.value = []
    hotels.value = []
  } finally {
    loading.value = false
  }
}

// Destination input o'zgarganda
const handleDestinationChange = async () => {
  const query = searchParams.value.location.trim()

  // Input o'zgarsa, eski codeni o'chiramiz (noto'g'ri code bilan ketib qolmasligi uchun)
  searchParams.value.destinationCode = ''
  
  // Active suggestion indexni reset qilish
  activeSuggestionIndex.value = -1

  // Clear previous timeout
  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }

  // Bo'sh bo'lsa mashhur shaharlarni ko'rsat
  if (query.length === 0) {
    getSuggestions('')
    return
  }

  // Minimum 1 harf kerak
  if (query.length < 1) {
    suggestions.value = []
    showSuggestions.value = false
    return
  }

  // Debounce - 300ms kutish (SearchBar.tsx bilan bir xil)
  searchTimeout = setTimeout(async () => {
    getSuggestions(query)
  }, 300)
}

// API dan suggest olish
const getSuggestions = async (query) => {
  loadingSuggestions.value = true
  showSuggestions.value = true
  try {
    const result = await searchDestinations(query)
    suggestions.value = result || []
  } catch (error) {
    console.error('Suggest error:', error)
    suggestions.value = []
  } finally {
    loadingSuggestions.value = false
  }
}

// Suggestion tanlaganda
const selectSuggestion = (suggestion) => {
  searchParams.value.location = suggestion.name
  searchParams.value.destinationCode = suggestion.code
  showSuggestions.value = false
  activeSuggestionIndex.value = -1
}

// Input focus bo'lganda
const handleInputFocus = async () => {
  const query = searchParams.value.location.trim()

  if (query.length === 0) {
    // Bo'sh bo'lsa mashhur shaharlarni ko'rsat
    getSuggestions('')
  } else if (query.length >= 1) {
    // Yozilgan bo'lsa qidirishni boshlash
    showSuggestions.value = true
    if (suggestions.value.length === 0) {
      getSuggestions(query)
    }
  }
}

// Input blur bo'lganda
const handleInputBlur = () => {
  setTimeout(() => {
    showSuggestions.value = false
    activeSuggestionIndex.value = -1
  }, 200)
}

// Keyboard navigation
const handleKeyDown = (event) => {
  if (!showSuggestions.value || suggestions.value.length === 0) return

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      activeSuggestionIndex.value = Math.min(
        activeSuggestionIndex.value + 1,
        suggestions.value.length - 1
      )
      break

    case 'ArrowUp':
      event.preventDefault()
      activeSuggestionIndex.value = Math.max(activeSuggestionIndex.value - 1, 0)
      break

    case 'Enter':
      event.preventDefault()
      if (activeSuggestionIndex.value >= 0 && activeSuggestionIndex.value < suggestions.value.length) {
        selectSuggestion(suggestions.value[activeSuggestionIndex.value])
      }
      break

    case 'Escape':
      event.preventDefault()
      showSuggestions.value = false
      activeSuggestionIndex.value = -1
      break
  }
}

// Click outside handler
const handleClickOutside = (event) => {
  if (inputRef.value && !inputRef.value.contains(event.target)) {
    showSuggestions.value = false
    activeSuggestionIndex.value = -1
  }

  // Check guests dropdown
  if (guestsButtonRef.value && !guestsButtonRef.value.contains(event.target)) {
    if (guestsDropdownRef.value && !guestsDropdownRef.value.contains(event.target)) {
      showGuestsDropdown.value = false
    }
  }
}

// Guests increment/decrement functions
const incrementAdults = () => { guests.value.adults++ }
const decrementAdults = () => { if (guests.value.adults > 1) guests.value.adults-- }
const incrementChildren = () => { guests.value.children++ }
const decrementChildren = () => { if (guests.value.children > 0) guests.value.children-- }
const incrementRooms = () => { guests.value.rooms++ }
const decrementRooms = () => { if (guests.value.rooms > 1) guests.value.rooms-- }

// Toggle guests dropdown
const toggleGuestsDropdown = () => {
  showGuestsDropdown.value = !showGuestsDropdown.value
  if (showGuestsDropdown.value) {
    updateGuestsPosition()
  }
}

// Calculate guests dropdown position
const updateGuestsPosition = () => {
  if (guestsButtonRef.value) {
    const rect = guestsButtonRef.value.getBoundingClientRect()
    guestsPosition.value = {
      top: rect.bottom + window.scrollY + 4,
      left: rect.left + window.scrollX,
      width: Math.max(rect.width, 300)
    }
  }
}

// Select recent location
const selectRecentLocation = (location) => {
  searchParams.value.location = location.location
  searchParams.value.destinationCode = location.destinationCode
}

// Select recent date range
const selectRecentDateRange = (dateRangeData) => {
  searchParams.value.checkIn = dateRangeData.checkIn
  searchParams.value.checkOut = dateRangeData.checkOut

  // Update dateRange too
  try {
    dateRange.value = {
      start: parseDate(dateRangeData.checkIn),
      end: parseDate(dateRangeData.checkOut)
    }
  } catch (e) {
    console.error('Error parsing dates:', e)
  }
}

// Format date for display (short format like "12 iyul")
const formatDateShort = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  const months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr']
  return `${date.getDate()} ${months[date.getMonth()]}`
}

// Format date for input (YYYY-MM-DD)
const formatDateForInput = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Search button bosilganda
const handleSearch = async () => {
  // Agar code bo'sh bo'lsa yoki stale bo'lsa, birinchi suggestionni olishga harakat qilamiz
  if (searchParams.value.location && suggestions.value.length > 0 && !searchParams.value.destinationCode) {
    const bestMatch = suggestions.value[0]
    searchParams.value.destinationCode = bestMatch.code
    searchParams.value.location = bestMatch.name
  }

  // Ko'rsatiladigan ma'lumotlarni yangilash
  displayedSearch.value = {
    location: searchParams.value.location,
    checkIn: searchParams.value.checkIn,
    checkOut: searchParams.value.checkOut,
    guests: searchParams.value.guests
  }

  // Save search to history
  saveSearchToHistory()

  // URL query parametrlarini yangilash
  router.push({
    path: '/hotels/search',
    query: {
      destination: searchParams.value.location,
      destinationCode: searchParams.value.destinationCode,
      checkIn: searchParams.value.checkIn,
      checkOut: searchParams.value.checkOut,
      guests: searchParams.value.guests,
      adults: guests.value.adults,
      children: guests.value.children,
      rooms: guests.value.rooms
    }
  })

  // Qidirishni bajarish
  fetchHotels()
}

// Filter tab tanlanganda
const selectFilterTab = (tabId) => {
  filterTabs.value.forEach(tab => {
    tab.active = tab.id === tabId
  })

  // Filter qo'llash
  const activeTab = filterTabs.value.find(tab => tab.id === tabId)
  if (activeTab.type === 'all') {
    hotels.value = allHotels.value
  } else {
    // Kategoriya bo'yicha filter (API'dan kelgan categoryName'ga qarab)
    hotels.value = allHotels.value.filter(hotel => {
      if (activeTab.type === 'hotel') {
        return !hotel.categoryName || hotel.categoryName.includes('HOTEL') || hotel.categoryName.includes('EST')
      } else if (activeTab.type === 'apartment') {
        return hotel.categoryName && hotel.categoryName.includes('APARTMENT')
      } else if (activeTab.type === 'hostel') {
        return hotel.categoryName && hotel.categoryName.includes('HOSTEL')
      }
      return true
    })
  }
}

// Filter count olish
const getFilterCount = (tabId) => {
  const tab = filterTabs.value.find(t => t.id === tabId)
  if (!tab || tab.type === 'all') {
    return allHotels.value.length
  }

  return allHotels.value.filter(hotel => {
    if (tab.type === 'hotel') {
      return !hotel.categoryName || hotel.categoryName.includes('HOTEL') || hotel.categoryName.includes('EST')
    } else if (tab.type === 'apartment') {
      return hotel.categoryName && hotel.categoryName.includes('APARTMENT')
    } else if (tab.type === 'hostel') {
      return hotel.categoryName && hotel.categoryName.includes('HOSTEL')
    }
    return true
  }).length
}

// Date range format
const formatDateRange = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return ''

  const months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr']

  const startDate = new Date(checkIn)
  const endDate = new Date(checkOut)

  const startMonth = months[startDate.getMonth()]
  const endMonth = months[endDate.getMonth()]
  const startDay = startDate.getDate()
  const endDay = endDate.getDate()

  if (startMonth === endMonth) {
    return `${startDay} ${startMonth} — ${endDay} ${startMonth}`
  } else {
    return `${startDay} ${startMonth} — ${endDay} ${endMonth}`
  }
}

// Calculate nights
const calculateNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 1
  const start = new Date(checkIn)
  const end = new Date(checkOut)
  const diffTime = Math.abs(end - start)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays || 1
}

// Set hotel card ref
const setHotelRef = (el, hotelId) => {
  if (el) {
    hotelRefs.value[hotelId] = el
  }
}

// Scroll to hotel card when selected from map
const scrollToHotel = (hotelId) => {
  const hotelElement = hotelRefs.value[hotelId]
  if (hotelElement) {
    // Get the actual DOM element (could be component or element)
    const element = hotelElement.$el || hotelElement

    // Smooth scroll to element
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })

    // Add highlight effect
    element.classList.add('ring-4', 'ring-blue-500', 'ring-opacity-50')
    setTimeout(() => {
      element.classList.remove('ring-4', 'ring-blue-500', 'ring-opacity-50')
    }, 2000)
  }
}

// Handle map expand/collapse
const handleMapExpand = (expanded) => {
  isMapExpanded.value = expanded
}

// Component mount bo'lganda qidirish
onMounted(() => {
  // Load recent searches
  loadRecentSearches()

  // Initialize guests from route params if exist
  if (route.query.adults) {
    guests.value.adults = parseInt(route.query.adults) || 1
  }
  if (route.query.children) {
    guests.value.children = parseInt(route.query.children) || 0
  }
  if (route.query.rooms) {
    guests.value.rooms = parseInt(route.query.rooms) || 1
  }

  fetchHotels()
  document.addEventListener('mousedown', handleClickOutside)

  // Add scroll and resize listeners for dropdown positioning
  window.addEventListener('scroll', () => {
    if (showGuestsDropdown.value) updateGuestsPosition()
  })
  window.addEventListener('resize', () => {
    if (showGuestsDropdown.value) updateGuestsPosition()
  })
})

// Component unmount bo'lganda tozalash
onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }
})

// Query parametrlari o'zgarganda qayta qidirish
watch(() => route.query, () => {
  searchParams.value = {
    location: route.query.destination || '',
    destinationCode: route.query.destinationCode || '',
    checkIn: route.query.checkIn || '',
    checkOut: route.query.checkOut || '',
    guests: route.query.guests || route.query.adults || ''
  }

  displayedSearch.value = {
    location: route.query.destination || '',
    checkIn: route.query.checkIn || '',
    checkOut: route.query.checkOut || '',
    guests: route.query.guests || route.query.adults || ''
  }

  // Update dateRange from query params
  if (route.query.checkIn && route.query.checkOut) {
    try {
      dateRange.value = {
        start: parseDate(route.query.checkIn),
        end: parseDate(route.query.checkOut)
      }
    } catch (e) {
      console.error('Error parsing dates:', e)
    }
  }

  // Update guests data from query
  if (route.query.adults) {
    guests.value.adults = parseInt(route.query.adults) || 1
  }
  if (route.query.children) {
    guests.value.children = parseInt(route.query.children) || 0
  }
  if (route.query.rooms) {
    guests.value.rooms = parseInt(route.query.rooms) || 1
  }

  fetchHotels()
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

/* Calendar custom styling - trying all possible selectors */
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

.custom-calendar :deep(button[data-selection-start="true"]),
.custom-calendar :deep(button[data-selection-end="true"]),
.custom-calendar :deep([data-state="range-start"]),
.custom-calendar :deep([data-state="range-end"]) {
  background-color: #1d4ed8 !important;
  color: white !important;
  font-weight: 700;
}

.custom-calendar :deep(button[data-in-range="true"]),
.custom-calendar :deep([data-state="in-range"]),
.custom-calendar :deep(.bg-gray-100) {
  background-color: #dbeafe !important;
  color: #1e40af !important;
}

/* Force all calendar buttons to have proper hover states */
.custom-calendar :deep(button:hover:not([data-disabled])) {
  background-color: #3b82f6 !important;
  color: white !important;
}
</style>

<template>
  <section class="py-6 md:py-12 bg-white">
    <div class="container mx-auto px-4">
      <div class="relative py-12 md:py-20 overflow-hidden rounded-2xl md:rounded-3xl" style="background-color: #2563EB;">
        <!-- Decorative Background Ellipses -->
        <div class="absolute inset-0 pointer-events-none">
          <!-- Ellipse 655 -->
          <img
            src="~/assets/images/Ellipse 655.png"
            alt=""
            class="absolute top-0 right-0 w-auto h-full object-contain opacity-40"
            style="transform: translateX(5%);"
          />
          <!-- Ellipse 656 -->
          <img
            src="~/assets/images/Ellipse 656.png"
            alt=""
            class="absolute top-0 right-0 w-auto h-full object-contain opacity-50"
            style="transform: translateX(10%);"
          />
        </div>

        <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Hero Text -->
        <div class="mb-8 md:mb-12">
          <h1 class="text-white text-2xl md:text-[36px] font-bold mb-4">
            Sayohatingiz uchun eng yaxshi turar joyni toping
          </h1>
          <p class="text-white/90 text-sm md:text-[16px] max-w-3xl">
            Dunyoning istalgan nuqtasidagi 2 million dan ortiq mehmonxonalar, xostellar, apartamentlar va boshqa turar joylar.
          </p>
        </div>

        <!-- Search Card -->
        <div class="relative">
        <div class="bg-white rounded-2xl shadow-2xl p-4 md:p-8">
          <!-- Search Form -->
          <div class="flex flex-col lg:flex-row gap-3 lg:gap-2 items-end">
            <!-- Location -->
            <div class="w-full lg:flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                JOYLASHTIRISH
              </label>
              <div class="relative" ref="inputRef">
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  v-model="search.destination"
                  @input="handleDestinationChange"
                  @focus="handleInputFocus"
                  @blur="handleInputBlur"
                  @keydown="handleKeyDown"
                  type="text"
                  placeholder="Qayerdan qidirsiz ?"
                  autocomplete="off"
                  class="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>

            <!-- Check In -->
            <div class="w-full lg:flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                KIRISH VAQTI
              </label>
              <UPopover
                mode="click"
                :ui="{
                  container: 'bg-white dark:bg-white border border-gray-200 dark:border-gray-200 shadow-lg'
                }"
              >
                <button type="button" class="w-full h-12 px-4 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-left flex items-center gap-2">
                  <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span class="flex-1">{{ checkInDate ? formatCalendarDate(checkInDate) : 'Tanlang' }}</span>
                </button>
                <template #content="{ close }">
                  <UCalendar
                    v-model="checkInDate"
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

            <!-- Check Out -->
            <div class="w-full lg:flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                CHIQISH VAQTI
              </label>
              <UPopover
                mode="click"
                :ui="{
                  container: 'bg-white dark:bg-white border border-gray-200 dark:border-gray-200 shadow-lg'
                }"
              >
                <button type="button" class="w-full h-12 px-4 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-left flex items-center gap-2">
                  <svg class="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span class="flex-1">{{ checkOutDate ? formatCalendarDate(checkOutDate) : 'Tanlang' }}</span>
                </button>
                <template #content="{ close }">
                  <UCalendar
                    v-model="checkOutDate"
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

            <!-- Guests -->
            <div class="w-full lg:flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                MEHMONLAR
              </label>
              <button
                ref="guestsButtonRef"
                @click="toggleGuestsDropdown"
                type="button"
                class="w-full h-12 px-4 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-left flex items-center justify-between"
              >
                <span>{{ guestsText }}</span>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- Search Button -->
            <div class="w-full lg:w-auto flex items-end">
              <button
                @click="handleSearch"
                :disabled="isSearchDisabled"
                class="w-full lg:w-20 h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
              >
                <svg v-if="!isSearching" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <svg v-else class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Teleport Dropdowns to Body -->
  <Teleport to="body">
    <!-- Suggestions Dropdown -->
    <div
      v-if="showSuggestions"
      ref="suggestionsDropdownRef"
      :style="{
        position: 'absolute',
        top: `${suggestionsPosition.top}px`,
        left: `${suggestionsPosition.left}px`,
        width: `${suggestionsPosition.width}px`,
        zIndex: 9999
      }"
      class="bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
    >
      <div v-if="loadingSuggestions" class="p-3 text-sm text-gray-500 text-center">
        Qidirilmoqda...
      </div>
      <div v-else-if="suggestions.length === 0" class="p-3 text-sm text-gray-500 text-center">
        Natija topilmadi
      </div>
      <div v-else>
        <button
          v-for="(suggestion, index) in suggestions"
          :key="suggestion.code"
          @click="selectSuggestion(suggestion)"
          :class="[
            'w-full text-left px-4 py-2 transition-colors flex items-center gap-2',
            index === activeSuggestionIndex ? 'bg-blue-50' : 'hover:bg-gray-100'
          ]"
        >
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <div class="text-sm font-medium text-gray-900">{{ suggestion.name }}</div>
            <div class="text-xs text-gray-500">{{ suggestion.countryCode }}</div>
          </div>
        </button>
      </div>
    </div>

    <!-- Guests Dropdown -->
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
      class="bg-white border border-gray-300 rounded-lg shadow-lg p-6"
    >
      <!-- Adults -->
      <div class="flex items-center justify-between mb-6 gap-8">
        <span class="text-gray-900 font-medium whitespace-nowrap flex-1">Kattalar</span>
        <div class="flex items-center gap-3 flex-shrink-0">
          <button
            @click="decrementAdults"
            type="button"
            class="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            :disabled="guests.adults <= 1"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-gray-900 font-medium w-8 text-center">{{ guests.adults }}</span>
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
        <div class="flex items-center gap-3 flex-shrink-0">
          <button
            @click="decrementChildren"
            type="button"
            class="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            :disabled="guests.children <= 0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-gray-900 font-medium w-8 text-center">{{ guests.children }}</span>
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

      <!-- Rooms -->
      <div class="flex items-center justify-between mb-6 gap-8">
        <span class="text-gray-900 font-medium whitespace-nowrap flex-1">Xonalar</span>
        <div class="flex items-center gap-3 flex-shrink-0">
          <button
            @click="decrementRooms"
            type="button"
            class="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
            :disabled="guests.rooms <= 1"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
          <span class="text-gray-900 font-medium w-8 text-center">{{ guests.rooms }}</span>
          <button
            @click="incrementRooms"
            type="button"
            class="w-8 h-8 border border-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-50 text-blue-600"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Done Button -->
      <!-- <button
        @click="showGuestsDropdown = false"
        type="button"
        class="w-full py-3 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
      >
        Tayyor
      </button> -->
    </div>
  </Teleport>
</template>

<script setup>
import { CalendarDate, getLocalTimeZone, parseDate } from '@internationalized/date'

const { searchDestinations, searchHotels } = useHotelAPI()
const toast = useToast()

const search = ref({
  destination: '',
  destinationCode: '',
  checkIn: '',
  checkOut: '',
  guests: 1
})

const guests = ref({
  adults: 1,
  children: 0,
  rooms: 1
})

// Calendar dates
const checkInDate = ref(null)
const checkOutDate = ref(null)

// Uzbek month names
const uzMonths = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr']

// Format calendar date to Uzbek format
const formatCalendarDate = (calendarDate) => {
  if (!calendarDate) return ''
  const day = calendarDate.day
  const month = uzMonths[calendarDate.month - 1]
  return `${day}-${month}`
}

// Convert CalendarDate to string (YYYY-MM-DD)
const calendarDateToString = (calendarDate) => {
  if (!calendarDate) return ''
  const year = calendarDate.year
  const month = String(calendarDate.month).padStart(2, '0')
  const day = String(calendarDate.day).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Watch calendar dates and update search object
watch(checkInDate, (newDate) => {
  if (newDate) {
    search.value.checkIn = calendarDateToString(newDate)
  }
})

watch(checkOutDate, (newDate) => {
  if (newDate) {
    search.value.checkOut = calendarDateToString(newDate)
  }
})

const showGuestsDropdown = ref(false)
const guestsButtonRef = ref(null)
const guestsDropdownRef = ref(null)
const isSearching = ref(false)

const guestsText = computed(() => {
  const parts = []
  if (guests.value.adults > 0) parts.push(`${guests.value.adults} katta`)
  if (guests.value.children > 0) parts.push(`${guests.value.children} bola`)
  parts.push(`${guests.value.rooms} xona`)
  return parts.join(', ')
})

const incrementAdults = () => { guests.value.adults++ }
const decrementAdults = () => { if (guests.value.adults > 1) guests.value.adults-- }
const incrementChildren = () => { guests.value.children++ }
const decrementChildren = () => { if (guests.value.children > 0) guests.value.children-- }
const incrementRooms = () => { guests.value.rooms++ }
const decrementRooms = () => { if (guests.value.rooms > 1) guests.value.rooms-- }

const suggestions = ref([])
const showSuggestions = ref(false)
const loadingSuggestions = ref(false)
const activeSuggestionIndex = ref(-1)
const inputRef = ref(null)
const suggestionsDropdownRef = ref(null)
let searchTimeout = null

// Dropdown positions
const suggestionsPosition = ref({ top: 0, left: 0, width: 0 })
const guestsPosition = ref({ top: 0, left: 0, width: 0 })

// Calculate suggestions dropdown position
const updateSuggestionsPosition = () => {
  if (inputRef.value) {
    const rect = inputRef.value.getBoundingClientRect()
    suggestionsPosition.value = {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: Math.max(rect.width, 300)
    }
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

// Destination input o'zgarganda
const handleDestinationChange = async () => {
  const query = search.value.destination.trim()
  activeSuggestionIndex.value = -1

  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }

  if (query.length === 0) {
    getSuggestions('')
    return
  }

  if (query.length < 1) {
    suggestions.value = []
    showSuggestions.value = false
    return
  }

  searchTimeout = setTimeout(async () => {
    getSuggestions(query)
  }, 300)
}

// API dan suggest olish
const getSuggestions = async (query) => {
  loadingSuggestions.value = true
  showSuggestions.value = true
  updateSuggestionsPosition()
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
  search.value.destination = suggestion.name
  search.value.destinationCode = suggestion.code
  showSuggestions.value = false
  activeSuggestionIndex.value = -1
}

// Input focus bo'lganda
const handleInputFocus = async () => {
  const query = search.value.destination.trim()
  updateSuggestionsPosition()

  if (query.length === 0) {
    getSuggestions('')
  } else if (query.length >= 1) {
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
  // Check suggestions dropdown
  if (inputRef.value && !inputRef.value.contains(event.target)) {
    if (suggestionsDropdownRef.value && !suggestionsDropdownRef.value.contains(event.target)) {
      showSuggestions.value = false
      activeSuggestionIndex.value = -1
    }
  }

  // Check guests dropdown
  if (guestsButtonRef.value && !guestsButtonRef.value.contains(event.target)) {
    if (guestsDropdownRef.value && !guestsDropdownRef.value.contains(event.target)) {
      showGuestsDropdown.value = false
    }
  }
}

// Toggle guests dropdown
const toggleGuestsDropdown = () => {
  showGuestsDropdown.value = !showGuestsDropdown.value
  if (showGuestsDropdown.value) {
    updateGuestsPosition()
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
  window.addEventListener('scroll', () => {
    if (showSuggestions.value) updateSuggestionsPosition()
    if (showGuestsDropdown.value) updateGuestsPosition()
  })
  window.addEventListener('resize', () => {
    if (showSuggestions.value) updateSuggestionsPosition()
    if (showGuestsDropdown.value) updateGuestsPosition()
  })
})

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside)
  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }
})

// Search tugmasi disabled bo'ladimi tekshirish
const isSearchDisabled = computed(() => {
  return !search.value.destination ||
         !search.value.checkIn ||
         !search.value.checkOut ||
         isSearching.value
})

const handleSearch = async () => {
  // Prevent multiple searches
  if (isSearching.value) return

  // Validate destination code
  if (!search.value.destinationCode) {
    toast.add({
      title: 'Xatolik',
      description: 'Iltimos, ro\'yxatdan joyni tanlang',
      color: 'red',
      timeout: 3000
    })
    return
  }

  // Check availability API first
  isSearching.value = true
  try {
    const availabilityParams = {
      stay: {
        checkIn: search.value.checkIn,
        checkOut: search.value.checkOut
      },
      occupancies: [{
        rooms: guests.value.rooms,
        adults: guests.value.adults,
        children: guests.value.children
      }],
      filter: {
        destination: {
          code: search.value.destinationCode
        }
      }
    }

    // Call availability API
    await searchHotels(availabilityParams)

    // If success (no error thrown), navigate to search page
    const query = {}
    if (search.value.destination) query.destination = search.value.destination
    if (search.value.destinationCode) query.destinationCode = search.value.destinationCode
    if (search.value.checkIn) query.checkIn = search.value.checkIn
    if (search.value.checkOut) query.checkOut = search.value.checkOut

    // Guests info
    query.adults = guests.value.adults
    query.children = guests.value.children
    query.rooms = guests.value.rooms

    navigateTo({
      path: '/hotels/search',
      query
    })
  } catch (error) {
    // Log full error for debugging
    console.error('[HeroSection] Search error:', error.data)
    // console.error('[HeroSection] Error data:', error?.data)

    // Show error in toast - only use data.error.message
    const errorMessage = error?.data?.data?.error?.message || 'Qidirishda xatolik yuz berdi'

    toast.add({
      title: 'Xatolik',
      description: errorMessage,
      color: 'red',
      timeout: 5000
    })
  } finally {
    isSearching.value = false
  }
}
</script>

<style scoped>
</style>

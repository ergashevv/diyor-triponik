<template>
  <section class="relative bg-gray-50">
    <!-- Background Image Section -->
    <div class="relative h-[400px] md:h-[500px]">
      <img
        src="~/assets/images/hotel.jpg"
        alt="Hotel Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/20"></div>

      <!-- Hero Text -->
      <div class="absolute inset-0 flex items-center">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Sayohatingiz uchun eng<br class="hidden md:block" />yaxshi turar joyni toping
            </h1>
            <p class="text-white text-sm md:text-base max-w-2xl">
              Dunyoning istalgan nuqtasidagi 2 million dan ortiq mehmonxonalar, xostellar, apartamentlar va boshqa turar joylar.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Card - Overlapping -->
    <div class="relative -mt-20 pb-10">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="bg-white rounded-2xl shadow-2xl p-4 md:p-6 overflow-visible">
          <!-- Search Title -->
          <h3 class="text-base md:text-lg font-semibold text-gray-800 mb-4">
            Hamyonbop narxlarda mehmonxonalar va kvartiralar
          </h3>

          <!-- Search Form -->
          <div class="space-y-3">
            <!-- Main Search Row with Button -->
            <div class="flex flex-col lg:flex-row gap-3">
              <!-- Location Input -->
              <div class="flex-1 lg:w-[30%] min-w-0">
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
                    placeholder="Qayerga bormoqchisiz ?"
                    autocomplete="off"
                    class="w-full h-12 pl-10 pr-4 bg-white border border-gray-300 rounded-lg text-base text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all"
                  />

                  <!-- Suggestions Dropdown -->
                  <div v-if="showSuggestions" class="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
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
                </div>
              </div>

              <!-- Date Range -->
              <div class="flex-1 lg:w-[20%] min-w-0">
                <div class="relative">
                  <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    v-model="search.checkIn"
                    type="date"
                    placeholder="Kirish"
                    class="w-full h-12 pl-10 pr-2 bg-white border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all"
                  />
                </div>
              </div>

              <div class="flex-1 lg:w-[20%] min-w-0">
                <div class="relative">
                  <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    v-model="search.checkOut"
                    type="date"
                    placeholder="Chiqish"
                    class="w-full h-12 pl-10 pr-2 bg-white border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all"
                  />
                </div>
              </div>

              <!-- Guests -->
              <div class="flex-1 lg:w-[15%] min-w-0">
                <div class="relative">
                  <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <input
                    v-model="search.guests"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="Mehmonlar"
                    class="w-full h-12 pl-10 pr-4 bg-white border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all"
                  />
                </div>
              </div>

              <!-- Search Button -->
              <div class="lg:w-auto">
                <button
                  @click="handleSearch"
                  :disabled="isSearchDisabled"
                  class="w-full lg:w-auto h-12 px-8 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400 disabled:shadow-none"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Qidirish
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Searches Section -->
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 truncate">
          Sizning eng oxirgi qidiruvlaringiz
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="search in recentSearches"
            :key="search.id"
            class="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
          >
            <h3 class="font-semibold text-gray-900 mb-2">
              {{ search.destination }}
            </h3>
            <p class="text-sm text-blue-600">
              {{ search.dates }}, {{ search.guests }} mehmon
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { searchDestinations } = useHotelAPI()

const search = ref({
  destination: '',
  destinationCode: '',
  checkIn: '',
  checkOut: '',
  guests: ''
})

const suggestions = ref([])
const showSuggestions = ref(false)
const loadingSuggestions = ref(false)
const activeSuggestionIndex = ref(-1)
const inputRef = ref(null)
let searchTimeout = null

const recentSearches = ref([
  {
    id: 1,
    destination: 'Buxoro',
    dates: '12 iyul — 13 iyul',
    guests: 2
  },
  {
    id: 2,
    destination: 'Samarqand',
    dates: '15 iyul — 17 iyul',
    guests: 3
  },
  {
    id: 3,
    destination: 'Toshkent',
    dates: '20 iyul — 22 iyul',
    guests: 2
  },
  {
    id: 4,
    destination: 'Xiva',
    dates: '25 iyul — 27 iyul',
    guests: 4
  }
])

// Destination input o'zgarganda
const handleDestinationChange = async () => {
  const query = search.value.destination.trim()

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
  search.value.destination = suggestion.name
  search.value.destinationCode = suggestion.code // Code'ni ham saqlash
  showSuggestions.value = false
  activeSuggestionIndex.value = -1
}

// Input focus bo'lganda
const handleInputFocus = async () => {
  const query = search.value.destination.trim()

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

// Input blur bo'lganda (biroz kechiktirib yopish kerak, chunki suggestion'ga bosish uchun vaqt kerak)
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
}

// Mount va Unmount
onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
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
         !search.value.guests
})

const handleSearch = () => {
  const query = {}

  if (search.value.destination) query.destination = search.value.destination
  if (search.value.destinationCode) query.destinationCode = search.value.destinationCode
  if (search.value.checkIn) query.checkIn = search.value.checkIn
  if (search.value.checkOut) query.checkOut = search.value.checkOut
  if (search.value.guests) query.guests = search.value.guests

  navigateTo({
    path: '/hotels/search',
    query
  })
}
</script>

<style scoped>
/* Ensure background image loads properly */
@media (max-width: 640px) {
  section {
    min-height: 500px;
  }
}
</style>

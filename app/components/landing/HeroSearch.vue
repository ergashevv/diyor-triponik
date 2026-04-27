<template>
  <section class="relative pt-20 md:pt-32 overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="~/assets/images/Landing.jpg"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-slate-900/50"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10 pb-20 md:pb-32">
      <div class="max-w-5xl mx-auto">
        <!-- Hero Text -->
        <div class="text-center mb-10">
          <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
           Sayohatingizni biz bilan rejalashtiring
          </h1>
          <p class="text-gray-300 text-lg md:text-xl">
           Dunyoning eng go'zal joylariga yaxshi narxlarda sayohat qiling
          </p>
        </div>

        <!-- Search Card -->
        <div class="bg-white rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden">
          <!-- Tabs -->
          <div class="flex flex-wrap gap-2 mb-6">
            <button
              v-for="tab in searchTabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'px-5 py-2.5 rounded-full font-medium transition-all text-base flex items-center gap-2',
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              <UIcon :name="tab.icon" class="w-5 h-5" />
              {{ tab.label }}
            </button>
          </div>

          <!-- Search Form -->
          <div class="space-y-5">
            <!-- Main Search Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <!-- Qayerdan (From) -->
              <div>
                <label class="block text-base font-medium text-gray-700 mb-2">
                  Qayerdan
                </label>
                <div class="relative">
                  <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <select
                    v-model="searchForm.from"
                    class="w-full h-11 pl-10 pr-4 bg-white border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all cursor-pointer appearance-none"
                  >
                    <option value="">Shahar tanlang</option>
                    <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                  </select>
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <!-- Qayerga (To) -->
              <div>
                <label class="block text-base font-medium text-gray-700 mb-2">
                  Qayerga
                </label>
                <div class="relative">
                  <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <select
                    v-model="searchForm.to"
                    class="w-full h-11 pl-10 pr-4 bg-white border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all cursor-pointer appearance-none"
                  >
                    <option value="">Shahar tanlang</option>
                    <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                  </select>
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <!-- Qachon (When) -->
              <div>
                <label class="block text-base font-medium text-gray-700 mb-2">
                  Qachon
                </label>
                <div class="relative">
                  <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    v-model="searchForm.date"
                    type="date"
                    placeholder="dd/mm/yyyy"
                    class="w-full h-11 pl-10 pr-2 bg-white border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all"
                  />
                </div>
              </div>

              <!-- Yo'lovchilar (Passengers) -->
              <div>
                <label class="block text-base font-medium text-gray-700 mb-2">
                  Yo'lovchilar
                </label>
                <div class="relative">
                  <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <select
                    v-model="searchForm.passengers"
                    class="w-full h-11 pl-10 pr-4 bg-white border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all cursor-pointer appearance-none"
                  >
                    <option v-for="option in passengerOptions" :key="option" :value="option">{{ option }}</option>
                  </select>
                  <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <!-- Qidiruv Button -->
              <div class="flex items-end min-w-0">
                <button
                  @click="handleSearch"
                  class="w-full h-11 px-6 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Qidiruv
                </button>
              </div>
            </div>

            <!-- Additional Options -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <!-- Ish safari checkbox -->
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  v-model="searchForm.isBusinessTrip"
                  type="checkbox"
                  class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span class="text-base font-medium text-gray-700">Ish safari</span>
              </label>

              <!-- Tarkibiy marshrut text -->
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="text-base font-medium text-gray-700">Tarkibiy marshrut</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeTab = ref('flights')

const searchTabs = [
  { id: 'flights', label: 'Aviabilet', icon: 'i-mdi-airplane' },
  { id: 'train', label: 'Poyezd', icon: 'i-mdi-train' },
  { id: 'cars', label: 'Avtoijara', icon: 'i-mdi-car' },
  { id: 'hotels', label: 'Mehmonxonalar', icon: 'i-mdi-hotel' },
  { id: 'excursions', label: 'Ekskursiyalar', icon: 'i-mdi-map-marker-path' },
  { id: 'packages', label: 'Tur paketlar', icon: 'i-mdi-package-variant' }
]

const cities = [
  'Toshkent',
  'Samarqand',
  'Buxoro',
  'Xiva',
  'Farg\'ona',
  'Andijon',
  'Namangan',
  'Qo\'qon',
  'Istanbul',
  'Dubai',
  'Moskva',
  'Sankt-Peterburg',
  'Almati',
  'Bishkek'
]

const passengerOptions = [
  '1 yo\'lovchi',
  '2 yo\'lovchi',
  '3 yo\'lovchi',
  '4 yo\'lovchi',
  '5 yo\'lovchi',
  '6+ yo\'lovchi'
]

const searchForm = ref({
  from: '',
  to: '',
  date: '',
  passengers: '1 yo\'lovchi',
  isBusinessTrip: false
})

const router = useRouter()

const handleSearch = () => {
  console.log('Search:', searchForm.value)
  
  if (activeTab.value === 'flights') {
    router.push({
      path: '/flights/search',
      query: {
        origin: searchForm.value.from || 'TAS',
        destination: searchForm.value.to || 'DXB',
        date: searchForm.value.date || '2026-06-01',
        adults: searchForm.value.passengers.split(' ')[0] || '1'
      }
    })
  } else if (activeTab.value === 'hotels') {
    router.push({
      path: '/hotels/search',
      query: {
        location: searchForm.value.to || searchForm.value.from || 'Dubai',
      }
    })
  } else {
    // For other tabs, navigate to a general search or specific subpage
    router.push(`/${activeTab.value}/search`)
  }
}
</script>

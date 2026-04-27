<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Search Header -->
    <div class="py-4 md:py-6" style="background-color: #001549;">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-white text-xl font-bold mb-4 text-center">
            Aviabiletlar qidiruvi
          </h2>
          
          <!-- Search Form (Simplified for now) -->
          <div class="bg-white p-4 rounded-xl shadow-lg">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="relative">
                <label class="block text-xs font-medium text-gray-500 mb-1">Qayerdan</label>
                <input v-model="searchParams.origin" class="w-full h-10 px-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Masalan: TAS" />
              </div>
              <div class="relative">
                <label class="block text-xs font-medium text-gray-500 mb-1">Qayerga</label>
                <input v-model="searchParams.destination" class="w-full h-10 px-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Masalan: DXB" />
              </div>
              <div class="relative">
                <label class="block text-xs font-medium text-gray-500 mb-1">Uchish sanasi</label>
                <input v-model="searchParams.date" type="date" class="w-full h-10 px-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div class="flex items-end">
                <button @click="handleSearch" :disabled="loading" class="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all flex items-center justify-center">
                  <span v-if="loading">Yuklanmoqda...</span>
                  <span v-else>Qidirish</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Filters -->
        <div class="w-full lg:w-1/4">
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
            <h3 class="font-bold text-lg mb-4">Filtrlar</h3>
            
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Narx (maksimal)</label>
                <input type="range" min="0" max="2000" step="50" class="w-full" />
                <div class="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0$</span>
                  <span>2000$</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Aviakompaniyalar</label>
                <div class="space-y-2">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked class="rounded text-blue-600" />
                    <span class="text-sm">Uzbekistan Airways</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked class="rounded text-blue-600" />
                    <span class="text-sm">Turkish Airlines</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked class="rounded text-blue-600" />
                    <span class="text-sm">Emirates</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Flights List -->
        <div class="w-full lg:w-3/4">
          <div v-if="loading" class="space-y-4">
             <div v-for="i in 3" :key="i" class="bg-white h-48 rounded-xl animate-pulse border border-gray-100"></div>
          </div>
          
          <div v-else-if="flights.length === 0" class="text-center py-20 bg-white rounded-xl shadow-sm">
            <UIcon name="i-mdi-airplane-off" class="w-16 h-16 text-gray-300 mb-4 mx-auto" />
            <h3 class="text-xl font-bold text-gray-900">Parvozlar topilmadi</h3>
            <p class="text-gray-500">Boshqa sana yoki yo'nalishni tanlab ko'ring</p>
          </div>

          <div v-else class="space-y-4">
            <!-- Results Header -->
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold flex items-center gap-2">
                Topilgan natijalar: {{ flights.length }} 
                <span v-if="source === 'mock'" class="text-xs font-normal bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Mock Data Mode</span>
                <span v-else class="text-xs font-normal bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Real API Mode</span>
              </h2>
              <div class="flex gap-2">
                <button class="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-all">Eng arzoni</button>
                <button class="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-all">Eng tezi</button>
              </div>
            </div>

            <!-- Flight Cards -->
            <div 
              v-for="flight in flights" 
              :key="flight.id" 
              class="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all overflow-hidden group"
            >
              <div class="p-6">
                <!-- Top Row: Airline -->
                <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                      <UIcon :name="getAirlineIcon(flight.carrierCode)" class="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900">{{ flight.carrierName || flight.carrierCode }}</h4>
                      <p class="text-xs text-gray-500">Parvoz #{{ flight.itineraries[0].segments[0].number }} • {{ flight.itineraries[0].segments[0].aircraftName || 'B-737' }}</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-6">
                     <span class="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                       {{ flight.itineraries[0].segments.length > 1 ? (flight.itineraries[0].segments.length - 1) + ' ta transfer' : 'To\'g\'ridan-to\'g\'ri' }}
                     </span>
                  </div>
                </div>

                <!-- Middle Row: Times & Path -->
                <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-6">
                  <!-- Departure -->
                  <div class="text-center md:text-right">
                    <div class="text-2xl font-bold text-gray-900">{{ formatTime(flight.itineraries[0].segments[0].departure.at) }}</div>
                    <div class="text-sm font-medium text-gray-600">{{ flight.itineraries[0].segments[0].departure.iataCode }}</div>
                    <div class="text-xs text-gray-500">{{ formatDate(flight.itineraries[0].segments[0].departure.at) }}</div>
                  </div>

                  <!-- Path/Duration -->
                  <div class="relative flex flex-col items-center">
                    <div class="text-xs text-gray-400 mb-1">{{ formatDuration(flight.itineraries[0].duration) }}</div>
                    <div class="w-full flex items-center gap-2">
                       <div class="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]"></div>
                       <div class="flex-1 h-0.5 bg-gradient-to-r from-blue-600 to-blue-200 relative">
                         <UIcon name="i-mdi-airplane" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-blue-600" />
                       </div>
                       <div class="w-2 h-2 rounded-full border-2 border-gray-300"></div>
                    </div>
                    <div class="text-xs text-gray-400 mt-1">Davomiyligi</div>
                  </div>

                  <!-- Arrival -->
                  <div class="text-center md:text-left">
                    <div class="text-2xl font-bold text-gray-900">
                      {{ formatTime(flight.itineraries[0].segments[flight.itineraries[0].segments.length-1].arrival.at) }}
                    </div>
                    <div class="text-sm font-medium text-gray-600">
                      {{ flight.itineraries[0].segments[flight.itineraries[0].segments.length-1].arrival.iataCode }}
                    </div>
                    <div class="text-xs text-gray-500">
                      {{ formatDate(flight.itineraries[0].segments[flight.itineraries[0].segments.length-1].arrival.at) }}
                    </div>
                  </div>
                </div>

                <!-- Bottom Row: Price & Action -->
                <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-50">
                  <div class="flex items-center gap-4">
                     <span class="text-xs text-gray-500">Ekonom klass • Bagaj bilan</span>
                  </div>
                  
                  <div class="flex items-center gap-6">
                    <div class="text-right">
                      <div class="text-2xl font-black text-blue-600">{{ formatPrice(flight.price.total, flight.price.currency) }}</div>
                      <div class="text-[10px] text-gray-400">1 yo'lovchi uchun to'liq narx</div>
                    </div>
                    <button class="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-blue-100 hover:shadow-blue-200 transition-all">
                      Tanlash
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const searchParams = ref({
  origin: route.query.origin || 'TAS',
  destination: route.query.destination || 'DXB',
  date: route.query.date || '2026-06-01',
  adults: route.query.adults || '1'
})

const flights = ref([])
const source = ref('api')
const loading = ref(true)

const fetchFlights = async () => {
  loading.value = true
  try {
    const data = await $fetch('/api/flights/search', {
      params: searchParams.value
    })
    flights.value = data.flights
    source.value = data.source
  } catch (err) {
    console.error('Flight fetch error:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchFlights()
})

const handleSearch = () => {
  fetchFlights()
}

// Helpers
const formatTime = (isoString) => {
  if (!isoString) return '--:--'
  const date = new Date(isoString)
  return date.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })
}

const formatDate = (isoString) => {
  if (!isoString) return ''
  const date = new Date(isoString)
  return date.toLocaleDateString('uz-UZ', { day: 'numeric', month: 'short' })
}

const formatDuration = (pt) => {
  if (!pt) return 'N/A'
  // PT3H30M -> 3s 30d
  return pt.replace('PT', '').replace('H', 's ').replace('M', 'd')
}

const formatPrice = (amount, currency) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'USD',
    maximumFractionDigits: 0
  }).format(amount)
}

const getAirlineIcon = (code) => {
  const icons = {
    'HY': 'i-mdi-airplane-takeoff',
    'TK': 'i-mdi-airplane-takeoff',
    'EK': 'i-mdi-airplane-takeoff',
    'FZ': 'i-mdi-airplane-takeoff',
    'QR': 'i-mdi-airplane-takeoff'
  }
  return icons[code] || 'i-mdi-airplane'
}

useSeoMeta({
  title: 'Aviabiletlar qidiruvi - Triponik',
  description: 'Arzon aviabiletlarni qidiring va band qiling.'
})
</script>

<style scoped>
.group:hover .w-2.h-2.rounded-full.bg-blue-600 {
  transform: scale(1.2);
}
</style>

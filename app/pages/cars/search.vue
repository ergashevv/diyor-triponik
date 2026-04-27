<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- Blue background with curve at bottom -->
    <div class="relative bg-[#0D1B4C] h-[580px] sm:h-[420px] lg:h-[360px] overflow-hidden shrink-0">
      <div class="absolute bottom-0 left-0 w-full">
        <svg class="block w-full h-20 md:h-28" fill="none" preserveAspectRatio="none"
             viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,120 L0,60 Q600,-40 1200,60 L1200,120 Z" fill="#f9fafb"></path>
        </svg>
      </div>
    </div>

    <!-- All content overlapping the blue -->
    <div class="relative z-10 -mt-[540px] sm:-mt-[380px] lg:-mt-80">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Search bar -->
          <div class="flex flex-col lg:flex-row items-stretch gap-0 bg-white rounded-xl shadow-md overflow-visible">

            <!-- Qayerdan -->
            <div class="relative flex-1 min-w-0" ref="fromRef">
              <div class="flex flex-col justify-center h-14 px-4 cursor-pointer hover:bg-gray-50 transition-colors rounded-l-xl"
                   @click="showFromDrop = !showFromDrop">
                <span class="text-[10px] text-gray-400 leading-none mb-0.5">Qayerdan</span>
                <span :class="fromQuery ? 'text-gray-900' : 'text-gray-400'" class="text-sm font-medium truncate">
                  {{ fromQuery || 'Shahar yoki aeroport' }}
                </span>
              </div>
              <div v-if="showFromDrop && filteredFrom.length"
                   class="absolute top-full left-0 w-full min-w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 mt-1 max-h-48 overflow-y-auto">
                <button v-for="loc in filteredFrom" :key="loc" type="button"
                        @click="fromQuery = loc; showFromDrop = false"
                        class="w-full text-left px-4 py-2.5 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  {{ loc }}
                </button>
              </div>
            </div>

            <!-- Swap icon -->
            <div class="hidden lg:flex items-center justify-center w-10 border-l border-r border-gray-200 shrink-0">
              <button @click="swapLocations" type="button" class="text-gray-400 hover:text-blue-600 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                </svg>
              </button>
            </div>

            <!-- Qayerga -->
            <div class="relative flex-1 min-w-0" ref="toRef">
              <div class="flex flex-col justify-center h-14 px-4 cursor-pointer hover:bg-gray-50 transition-colors border-t lg:border-t-0 border-gray-200"
                   @click="showToDrop = !showToDrop">
                <span class="text-[10px] text-gray-400 leading-none mb-0.5">Qayerga</span>
                <span :class="toQuery ? 'text-gray-900' : 'text-gray-400'" class="text-sm font-medium truncate">
                  {{ toQuery || 'Shahar yoki aeroport' }}
                </span>
              </div>
              <div v-if="showToDrop && filteredTo.length"
                   class="absolute top-full left-0 w-full min-w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 mt-1 max-h-48 overflow-y-auto">
                <button v-for="loc in filteredTo" :key="loc" type="button"
                        @click="toQuery = loc; showToDrop = false"
                        class="w-full text-left px-4 py-2.5 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  {{ loc }}
                </button>
              </div>
            </div>

            <!-- Divider -->
            <div class="hidden lg:block w-px bg-gray-200 self-stretch"></div>

            <!-- Pickup date -->
            <div class="w-full lg:flex-1 border-t lg:border-t-0 border-gray-200">
              <UPopover mode="click" :ui="{ container: 'bg-white dark:bg-white border border-gray-200 shadow-lg' }">
                <button type="button" class="w-full h-14 px-4 flex items-center justify-between gap-2 hover:bg-gray-50 transition-colors">
                  <span :class="pickupDate ? 'text-gray-900' : 'text-gray-400'" class="text-sm font-medium flex-1 text-left">
                    {{ pickupDate ? formatDate(pickupDate) : 'Olinish sanasi' }}
                  </span>
                  <span v-if="pickupDate" @click="pickupDate = null" class="text-gray-400 hover:text-gray-700 cursor-pointer shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </span>
                  <svg v-else class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </button>
                <template #content="{ close }">
                  <UCalendar v-model="pickupDate" class="p-2" @update:modelValue="close" :ui="calUi"/>
                </template>
              </UPopover>
            </div>

            <!-- Divider -->
            <div class="hidden lg:block w-px bg-gray-200 self-stretch"></div>

            <!-- Return date -->
            <div class="w-full lg:flex-1 border-t lg:border-t-0 border-gray-200">
              <UPopover mode="click" :ui="{ container: 'bg-white dark:bg-white border border-gray-200 shadow-lg' }">
                <button type="button" class="w-full h-14 px-4 flex items-center justify-between gap-2 hover:bg-gray-50 transition-colors">
                  <span :class="returnDate ? 'text-gray-900' : 'text-gray-400'" class="text-sm font-medium flex-1 text-left">
                    {{ returnDate ? formatDate(returnDate) : 'Qaytarish sanasi' }}
                  </span>
                  <span v-if="returnDate" @click="returnDate = null" class="text-gray-400 hover:text-gray-700 cursor-pointer shrink-0">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </span>
                  <svg v-else class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </button>
                <template #content="{ close }">
                  <UCalendar v-model="returnDate" class="p-2" @update:modelValue="close" :ui="calUi"/>
                </template>
              </UPopover>
            </div>

            <!-- Search Button -->
            <button
              @click="handleSearch"
              class="h-14 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-b-xl lg:rounded-b-none lg:rounded-r-xl transition-all flex items-center justify-center gap-2 shrink-0 border-t lg:border-t-0 border-gray-200"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <span class="whitespace-nowrap">Transferlarni topish</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="max-w-6xl mx-auto mt-6 px-4">

        <h2 class="text-xl md:text-2xl font-bold text-white mb-6">
          Avtomobil sinfini tanlang
        </h2>

        <!-- Car Class Cards -->
        <div class="flex flex-col gap-3">
          <div
            v-for="car in carClasses"
            :key="car.id"
            class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4 md:p-5"
          >
            <div class="flex items-start md:items-center gap-3 md:gap-6">

              <!-- Car Image -->
              <div class="w-24 h-16 md:w-40 md:h-24 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  :src="car.image"
                  :alt="car.name"
                  class="w-full h-full object-contain p-2"
                />
              </div>

              <!-- Mobile layout: name + info + price in flex-1 -->
              <div class="flex-1 min-w-0 md:contents">

                <!-- Name + Models -->
                <div class="mb-2 md:mb-0 md:w-44 md:shrink-0">
                  <h3 class="text-base md:text-[18px] font-bold text-gray-900 mb-0.5">{{ car.name }}</h3>
                  <p class="text-gray-400 text-xs md:text-sm leading-snug">{{ car.models }}</p>
                </div>

                <!-- Capacity + Notice (mobile: inline, desktop: separate column) -->
                <div class="flex flex-col gap-1.5 mb-3 md:mb-0 md:flex-1 md:min-w-0 md:gap-2">
                  <div class="flex items-center gap-2 text-gray-600">
                    <div class="border border-gray-400 p-0.5 md:p-1 rounded shrink-0">
                      <svg class="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <span class="text-[#27344B] text-sm md:text-[16px] font-bold">{{ car.capacity }} ta yo'lovchigacha</span>
                  </div>
                  <div class="flex items-center gap-2 text-orange-500">
                    <svg class="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="text-xs md:text-sm">{{ car.notice }} soat yoki undan oldin buyurtma bering</span>
                  </div>
                </div>

                <!-- Price + Button -->
                <div class="flex items-center justify-between md:flex-col md:items-end md:gap-2 md:shrink-0">
                  <span class="text-base md:text-xl font-bold text-gray-900 whitespace-nowrap">{{ car.price }} $</span>
                  <button
                    @click="selectCar(car)"
                    class="px-5 py-2 md:px-6 md:py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all text-sm whitespace-nowrap"
                  >
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
</template>

<script setup>
import carSvg from '~/assets/images/car.svg'

const route = useRoute()
const router = useRouter()

const locations = [
  'Toshkent shahri', 'Domodedova aeroporti', 'Toshkent aeroporti',
  'Samarqand shahri', 'Buxoro shahri', 'Namangan shahri',
  'Andijon shahri', "Farg'ona shahri", 'Nukus shahri', 'Qarshi shahri',
  'Qizil Maydon, 1', 'Amir Temur xiyoboni',
]

const fromQuery = ref(route.query.location || '')
const toQuery = ref(route.query.to || '')
const showFromDrop = ref(false)
const showToDrop = ref(false)
const fromRef = ref(null)
const toRef = ref(null)

const filteredFrom = computed(() =>
  fromQuery.value ? locations.filter(l => l.toLowerCase().includes(fromQuery.value.toLowerCase())) : locations
)
const filteredTo = computed(() =>
  toQuery.value ? locations.filter(l => l.toLowerCase().includes(toQuery.value.toLowerCase())) : locations
)

const swapLocations = () => {
  const tmp = fromQuery.value
  fromQuery.value = toQuery.value
  toQuery.value = tmp
}

// Parse dates from query
const parseQueryDate = (str) => {
  if (!str) return null
  const [y, m, d] = str.split('-').map(Number)
  if (!y || !m || !d) return null
  return { year: y, month: m, day: d }
}

const pickupDate = ref(parseQueryDate(route.query.pickupDate))
const returnDate = ref(parseQueryDate(route.query.returnDate))

const formatDate = (d) => {
  if (!d) return ''
  return `${String(d.day).padStart(2, '0')}.${String(d.month).padStart(2, '0')}.${d.year}`
}

const calUi = {
  base: 'bg-white dark:bg-white',
  container: 'bg-white dark:bg-white',
  header: 'text-gray-900 dark:text-gray-900',
  months: 'bg-white dark:bg-white',
  cell: {
    base: 'text-gray-900 dark:text-gray-900',
    selected: 'bg-blue-600 dark:bg-blue-600 text-white dark:text-white',
    today: 'border-2 border-blue-600 dark:border-blue-600'
  }
}

const toDateStr = (d) => d ? `${d.year}-${String(d.month).padStart(2,'0')}-${String(d.day).padStart(2,'0')}` : ''

const handleSearch = () => {
  router.push({
    path: '/cars/search',
    query: {
      location: fromQuery.value,
      to: toQuery.value,
      pickupDate: toDateStr(pickupDate.value),
      returnDate: toDateStr(returnDate.value)
    }
  })
}

// Click outside
const handleOutside = (e) => {
  if (fromRef.value && !fromRef.value.contains(e.target)) showFromDrop.value = false
  if (toRef.value && !toRef.value.contains(e.target)) showToDrop.value = false
}
onMounted(() => document.addEventListener('mousedown', handleOutside))
onUnmounted(() => document.removeEventListener('mousedown', handleOutside))

// Car classes data
const carClasses = [
  {
    id: 1,
    name: 'Standart',
    models: "KIA Cerato, Chery Tiggo yoki shunga o'xshash",
    capacity: 3,
    notice: 6,
    price: '82.90',
    image: carSvg,
    dark: false,
  },
  {
    id: 2,
    name: 'Komfort',
    models: "Toyota Camry, KIA K5 yoki shunga o'xshash",
    capacity: 3,
    notice: 6,
    price: '98.95',
    image: carSvg,
    dark: true,
  },
  {
    id: 3,
    name: 'Premium',
    models: "BMW 5, Mercedes E-klass yoki shunga o'xshash",
    capacity: 3,
    notice: 12,
    price: '149.00',
    image: carSvg,
    dark: false,
  },
  {
    id: 4,
    name: 'Miniven',
    models: "Mercedes Vito, Volkswagen Caravelle yoki shunga o'xshash",
    capacity: 7,
    notice: 6,
    price: '115.00',
    image: carSvg,
    dark: true,
  },
]

const selectCar = (car) => {
  router.push({
    path: '/cars/booking',
    query: {
      carId: car.id,
      carName: car.name,
      price: car.price,
      from: fromQuery.value,
      to: toQuery.value,
      pickupDate: toDateStr(pickupDate.value),
      returnDate: toDateStr(returnDate.value)
    }
  })
}

useSeoMeta({
  title: 'Avtomobil qidirish - Triponik',
})
</script>

<style scoped>
</style>

<template>
  <div class="bg-[#F8F9FB] min-h-screen">
    <!-- Header Summary -->
    <div class="bg-[#0D0B68] py-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4 text-white/80 text-sm">
             <div class="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
               <span class="font-bold text-white">Domodedova aeroporti</span>
             </div>
             <div class="hidden md:block w-4 h-px bg-white/30"></div>
             <div class="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
               <span class="font-bold text-white">23.07.2025</span>
             </div>
             <div class="hidden md:block w-4 h-px bg-white/30"></div>
             <div class="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
               <span class="font-bold text-white">25.07.2025</span>
             </div>
          </div>
          <button class="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-lg text-sm font-bold border border-white/20 transition-all">
            O'zgartirish
          </button>
        </div>
      </div>
    </div>

    <!-- Page Title -->
    <div class="bg-white border-b border-gray-200 py-6 mb-8">
      <div class="container mx-auto px-4">
        <h1 class="text-xl md:text-2xl font-black text-gray-900 text-center uppercase tracking-tight">
          Mos avtomobilni tanlang
        </h1>
      </div>
    </div>

    <div class="container mx-auto px-4 pb-20">
      <div class="flex flex-col lg:flex-row gap-8">
        
        <!-- Sidebar Filters -->
        <aside class="w-full lg:w-72 shrink-0 space-y-6">
          <!-- Favorites Toggle -->
          <div class="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-center justify-between">
            <div class="flex items-center gap-2">
              <UIcon name="i-heroicons-heart" class="text-red-500" />
              <span class="text-sm font-bold text-gray-700">Saqlanganlar</span>
            </div>
            <UToggle v-model="showOnlyFavorites" color="red" />
          </div>

          <!-- Sorting -->
          <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Saralash</h3>
            <USelect 
              v-model="sortBy" 
              :options="['Mashhurlik bo\'yicha', 'Narx (arzonroq)', 'Narx (qimmatroq)', 'Reyting']"
              class="w-full"
              size="md"
            />
          </div>

          <!-- Price Range -->
          <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Narx</h3>
            <div class="flex items-center gap-3 mb-6">
               <div class="flex-1 bg-gray-50 border border-gray-100 rounded-lg p-2 text-center text-xs font-bold text-gray-900">
                 USD 220
               </div>
               <div class="flex-1 bg-gray-50 border border-gray-100 rounded-lg p-2 text-center text-xs font-bold text-gray-900">
                 USD 700
               </div>
            </div>
            <URange v-model="priceRange" :min="0" :max="1000" color="blue" />
          </div>

          <!-- Stars -->
          <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Yulduzlar</h3>
            <div class="space-y-3">
              <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="flex items-center gap-3">
                <UCheckbox color="blue" />
                <div class="flex gap-0.5">
                  <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-solid" :class="i <= star ? 'text-yellow-400' : 'text-gray-200'" class="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <!-- Amenities -->
          <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Qulaylik</h3>
            <div class="space-y-3">
               <div v-for="amenity in amenities" :key="amenity.id" class="flex items-center justify-between">
                 <div class="flex items-center gap-3">
                    <UCheckbox color="blue" />
                    <span class="text-sm font-semibold text-gray-700">{{ amenity.name }}</span>
                 </div>
                 <span class="text-xs font-bold text-gray-400">{{ amenity.count }}</span>
               </div>
            </div>
          </div>
        </aside>

        <!-- Results List -->
        <main class="flex-1 space-y-4">
          <div v-if="loading" class="space-y-4">
            <div v-for="i in 5" :key="i" class="bg-white h-48 rounded-2xl animate-pulse border"></div>
          </div>
          
          <div v-else class="space-y-4">
            <!-- Car Card -->
            <div 
              v-for="car in cars" 
              :key="car.id"
              class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-stretch overflow-hidden group h-auto md:h-[168px]"
            >
              <!-- Car Image -->
              <div class="w-full md:w-64 bg-gray-50/50 p-4 flex items-center justify-center shrink-0 border-r border-gray-50">
                <img 
                  :src="car.image" 
                  :alt="car.name" 
                  class="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              <!-- Content -->
              <div class="flex-1 py-4 px-6 flex flex-col md:flex-row justify-between gap-4">
                <div class="flex-1 flex flex-col justify-center">
                   <div class="flex items-center gap-3 mb-1">
                     <h3 class="text-lg font-black text-gray-900 uppercase tracking-tight">{{ car.name }}</h3>
                     <div class="flex items-center gap-1.5 text-gray-400">
                        <UIcon name="i-heroicons-user" class="w-3.5 h-3.5" />
                        <span class="text-[10px] font-bold">3 ta yo'lovchigacha</span>
                     </div>
                   </div>
                   <p class="text-[11px] text-gray-400 font-bold mb-3">{{ car.description }}</p>
                   
                   <!-- Icons row -->
                   <div class="flex flex-wrap gap-2">
                      <div class="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                        <UIcon name="i-heroicons-view-columns" class="w-3.5 h-3.5 text-blue-600" />
                        <span class="text-[10px] font-bold text-gray-700">4</span>
                      </div>
                      <div class="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                        <UIcon name="i-heroicons-briefcase" class="w-3.5 h-3.5 text-blue-600" />
                        <span class="text-[10px] font-bold text-gray-700">1</span>
                      </div>
                      <div class="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">
                        <UIcon name="i-heroicons-shield-check" class="w-3.5 h-3.5 text-blue-600" />
                        <span class="text-[10px] font-bold text-gray-700">4</span>
                      </div>
                   </div>
                </div>

                <!-- Price and Action -->
                <div class="flex flex-col items-center md:items-end justify-center shrink-0 border-t md:border-t-0 md:border-l border-gray-50 md:pl-6 pt-4 md:pt-0 min-w-32">
                   <div class="text-center md:text-right mb-3">
                      <p class="text-xl font-black text-gray-900 tracking-tight">{{ car.price }}$</p>
                      <p class="text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center">3 kun uchun</p>
                   </div>
                   <button 
                     @click="selectCar(car)"
                     class="w-full md:w-auto px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-50 transition-all text-[11px] uppercase tracking-wider"
                   >
                     Tanlash
                   </button>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  </div>
</template>

<script setup>
const showOnlyFavorites = ref(false)
const sortBy = ref('Mashhurlik bo\'yicha')
const priceRange = ref(500)

const amenities = [
  { id: 1, name: 'Konditsioner', count: 508 },
  { id: 2, name: 'Bolalar uchun o\'rindiq', count: 44 },
  { id: 3, name: 'Bagaj', count: 44 }
]

const cars = ref([])
const loading = ref(true)

const fetchCars = async () => {
  loading.value = true
  try {
    const data = await $fetch('/api/cars/search')
    cars.value = data
  } catch (err) {
    console.error('Cars fetch error:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCars()
})

const router = useRouter()
const selectCar = (car) => {
  router.push({
    path: '/cars/booking',
    query: {
      carName: car.name,
      price: car.price,
      from: 'Domodedova aeroporti',
      to: 'Qizil maydon, 1',
      pickupDate: '2025-07-23',
      time: '01:00'
    }
  })
}

useSeoMeta({
  title: 'Mos avtomobilni tanlang - Triponik',
  description: 'Sayohatlaringiz uchun eng yaxshi avtomobillarni tanlang.'
})
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="bg-slate-900 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-black text-white text-center mb-4">Avtomobillar ijarasi</h1>
        <p class="text-slate-400 text-center max-w-2xl mx-auto">Sayohatlaringiz uchun ishonchli va qulay avtomobillarni ijaraga oling.</p>
      </div>
    </div>

    <div class="container mx-auto px-4 -mt-8">
      <div class="bg-white p-6 rounded-2xl shadow-xl max-w-5xl mx-auto mb-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-xs font-bold text-gray-400 uppercase mb-2">Qabul qilish punkti</label>
            <div class="relative">
               <UIcon name="i-mdi-map-marker" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
               <input type="text" value="Toshkent Aeroporti" class="w-full h-12 pl-10 pr-4 border rounded-xl bg-gray-50 focus:bg-white transition-all font-bold" />
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-gray-400 uppercase mb-2">Sana va vaqt</label>
            <div class="relative">
               <UIcon name="i-mdi-calendar" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
               <input type="text" value="01.06.2026 - 08.06.2026" class="w-full h-12 pl-10 pr-4 border rounded-xl bg-gray-50 focus:bg-white transition-all font-bold" />
            </div>
          </div>
          <div class="flex items-end">
            <button class="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all shadow-lg shadow-blue-200">
               QIDIRUV
            </button>
          </div>
        </div>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="i in 8" :key="i" class="bg-white h-80 rounded-2xl animate-pulse border"></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
        <div 
          v-for="car in cars" 
          :key="car.id"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
        >
          <div class="p-4 flex-1">
             <div class="flex justify-between items-start mb-4">
                <div>
                   <h3 class="font-black text-lg text-gray-900">{{ car.name }}</h3>
                   <p class="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{{ car.models.split(',')[0] }}</p>
                </div>
                <span class="bg-gray-100 p-2 rounded-lg">
                   <UIcon name="i-mdi-car" class="w-6 h-6 text-gray-400" />
                </span>
             </div>

             <div class="relative h-32 my-4 group-hover:scale-105 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400" class="w-full h-full object-contain" />
             </div>

             <div class="flex items-center gap-4 py-4 border-t border-gray-50">
                <div class="flex items-center gap-1">
                   <UIcon name="i-mdi-account-multiple" class="w-4 h-4 text-gray-400" />
                   <span class="text-xs font-bold text-gray-600">{{ car.capacity }}</span>
                </div>
                <div class="flex items-center gap-1">
                   <UIcon name="i-mdi-gas-station" class="w-4 h-4 text-gray-400" />
                   <span class="text-xs font-bold text-gray-600">A-95</span>
                </div>
                <div class="flex items-center gap-1">
                   <UIcon name="i-mdi-cog" class="w-4 h-4 text-gray-400" />
                   <span class="text-xs font-bold text-gray-600">Avto</span>
                </div>
             </div>
          </div>

          <div class="p-4 bg-gray-50 flex items-center justify-between mt-auto">
             <div>
                <p class="text-[10px] text-gray-400 font-bold uppercase">Kuniga</p>
                <p class="text-xl font-black text-gray-900">${{ car.price }}</p>
             </div>
             <button class="bg-slate-900 hover:bg-black text-white px-5 py-2 rounded-xl text-xs font-bold transition-all">
                IJARA
             </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cars = ref([])
const loading = ref(true)

const fetchCars = async () => {
  loading.value = true
  try {
    const data = await $fetch('/api/cars/search', {
      params: { location: 'TAS', to: 'ALL' }
    })
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

useSeoMeta({
  title: 'Avtoijara - Triponik',
  description: 'Sayohatlaringiz uchun eng yaxshi avtomobillarni ijaraga oling.'
})
</script>

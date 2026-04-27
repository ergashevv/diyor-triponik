<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <div class="bg-red-800 py-10">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-white text-center mb-6">Poyezd chiptalari</h1>
        
        <!-- Search Bar (Placeholder UI) -->
        <div class="max-w-4xl mx-auto bg-white p-4 rounded-xl shadow-xl flex flex-wrap md:flex-nowrap gap-4 items-end">
          <div class="flex-1 min-w-[200px]">
            <label class="block text-xs font-bold text-gray-400 mb-1 uppercase">Qayerdan</label>
            <input type="text" value="Toshkent" class="w-full h-12 px-4 border rounded-lg bg-gray-50 font-bold" readonly />
          </div>
          <div class="flex-1 min-w-[200px]">
             <label class="block text-xs font-bold text-gray-400 mb-1 uppercase">Qayerga</label>
             <input type="text" value="Samarqand" class="w-full h-12 px-4 border rounded-lg bg-gray-50 font-bold" readonly />
          </div>
          <div class="flex-1 min-w-[150px]">
             <label class="block text-xs font-bold text-gray-400 mb-1 uppercase">Sana</label>
             <input type="date" class="w-full h-12 px-4 border rounded-lg bg-gray-50" />
          </div>
          <button class="bg-red-600 text-white h-12 px-8 rounded-lg font-bold hover:bg-red-700 transition-all flex items-center gap-2">
            <UIcon name="i-mdi-magnify" class="w-5 h-5" />
            Izlash
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div v-if="loading" class="space-y-4 max-w-4xl mx-auto">
        <div v-for="i in 3" :key="i" class="bg-white h-32 rounded-xl animate-pulse border"></div>
      </div>

      <div v-else class="max-w-4xl mx-auto space-y-4">
        <div 
          v-for="train in trains" 
          :key="train.id"
          class="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all overflow-hidden flex flex-col md:flex-row items-stretch"
        >
          <!-- Left side: Train Info -->
          <div class="p-6 flex-1 flex flex-col md:flex-row items-center gap-8 border-r border-gray-50">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                <UIcon name="i-mdi-train" class="w-10 h-10 text-red-600" />
              </div>
              <div>
                <h4 class="font-black text-gray-900">{{ train.name }}</h4>
                <p class="text-xs font-bold text-red-600 tracking-tighter uppercase">{{ train.type }}</p>
              </div>
            </div>

            <div class="flex-1 flex items-center justify-between w-full md:w-auto gap-4">
              <div class="text-center">
                <p class="text-2xl font-black text-gray-900">{{ train.departureTime }}</p>
                <p class="text-xs font-bold text-gray-400 uppercase">Toshkent</p>
              </div>
              
              <div class="flex-1 flex flex-col items-center">
                <span class="text-[10px] font-bold text-gray-400 mb-1">{{ train.duration }}</span>
                <div class="w-full h-px bg-dashed bg-gray-200 relative">
                  <div class="absolute inset-0 border-t-2 border-dashed border-gray-200"></div>
                  <UIcon name="i-mdi-train-variant" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-red-300" />
                </div>
              </div>

              <div class="text-center">
                <p class="text-2xl font-black text-gray-900">{{ train.arrivalTime }}</p>
                <p class="text-xs font-bold text-gray-400 uppercase">Samarqand</p>
              </div>
            </div>
          </div>

          <!-- Right side: Price & Booking -->
          <div class="p-6 bg-gray-50/50 w-full md:w-48 flex flex-col items-center justify-center gap-2">
             <p class="text-xs text-gray-500 font-bold uppercase tracking-widest text-center">Boshlanish narxi</p>
             <p class="text-2xl font-black text-gray-900">{{ formatPrice(train.price) }}</p>
             <button class="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-bold shadow-lg shadow-red-100 transition-all">
                Sotib olish
             </button>
             <p class="text-[10px] text-gray-400 font-medium">{{ train.freeSeats }} ta joy qoldi</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const trains = ref([])
const loading = ref(true)

const fetchTrains = async () => {
  loading.value = true
  try {
    const data = await $fetch('/api/trains/search')
    trains.value = data
  } catch (err) {
    console.error('Trains fetch error:', err)
  } finally {
    loading.value = false
  }
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('uz-UZ', {
    style: 'currency',
    currency: 'UZS',
    maximumFractionDigits: 0
  }).format(price)
}

onMounted(() => {
  fetchTrains()
})

useSeoMeta({
  title: 'Poyezd biletlari - Triponik',
  description: 'O\'zbekiston bo\'ylab poyezd biletlarini band qiling.'
})
</script>

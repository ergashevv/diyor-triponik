<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <div class="bg-blue-900 py-8">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-3xl font-bold text-white mb-2">Unutilmas turlar va sayohatlar</h1>
        <p class="text-blue-100 italic">Dunyoning eng go'zal go'shalarini biz bilan kashf eting</p>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <!-- Filters -->
      <div class="flex flex-wrap gap-2 mb-8 justify-center">
        <button 
          v-for="tag in tags" 
          :key="tag.id"
          @click="activeTag = tag.id"
          :class="activeTag === tag.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'"
          class="px-6 py-2 rounded-full font-medium transition-all"
        >
          {{ tag.label }}
        </button>
      </div>

      <!-- Results -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="bg-white h-96 rounded-2xl animate-pulse border"></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="tour in filteredTours" 
          :key="tour.id"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
        >
          <!-- Image -->
          <div class="relative h-64 overflow-hidden">
            <img :src="tour.image" :alt="tour.name" class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
            <div class="absolute top-4 left-4">
              <span class="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-900 border border-blue-50 shadow-sm">{{ tour.country }}</span>
            </div>
            <div class="absolute top-4 right-4 bg-yellow-400 text-white px-2 py-1 rounded-lg text-xs font-black flex items-center gap-1 shadow-md">
              <UIcon name="i-mdi-star" class="w-3 h-3" />
              {{ tour.score }}
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute bottom-4 left-4 right-4 text-white translate-y-4 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
               <p class="text-sm line-clamp-2">{{ tour.description }}</p>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{{ tour.name }}</h3>
            
            <div class="flex items-center gap-4 text-sm text-gray-500 mb-4 font-medium">
               <span class="flex items-center gap-1">
                 <UIcon name="i-mdi-calendar-clock" class="w-4 h-4 text-blue-500" />
                 {{ tour.days }} kun
               </span>
               <span class="flex items-center gap-1">
                 <UIcon name="i-mdi-map-marker" class="w-4 h-4 text-red-500" />
                 {{ tour.distanceBeach }}
               </span>
            </div>

            <div class="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
              <div>
                <p class="text-xs text-gray-400 uppercase font-bold tracking-wider">Narxi</p>
                <p class="text-2xl font-black text-blue-600">${{ tour.price }}</p>
              </div>
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-md hover:shadow-lg transition-all">
                Band qilish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTag = ref('all')
const tags = [
  { id: 'all', label: 'Barchasi' },
  { id: 'beach', label: 'Plyaj' },
  { id: 'nature', label: 'Tabiat' },
  { id: 'city', label: 'Shahar' },
  { id: 'mountain', label: 'Tog\'lar' }
]

const tours = ref([])
const loading = ref(true)

const fetchTours = async () => {
  loading.value = true
  try {
    const data = await $fetch('/api/tours/search')
    tours.value = data
  } catch (err) {
    console.error('Tours fetch error:', err)
  } finally {
    loading.value = false
  }
}

const filteredTours = computed(() => {
  if (activeTag.value === 'all') return tours.value
  return tours.value.filter(t => t.tags.includes(activeTag.value))
})

onMounted(() => {
  fetchTours()
})

useSeoMeta({
  title: 'Turlar - Triponik',
  description: 'Unutilmas sayohatlarni biz bilan rejalashtiring.'
})
</script>

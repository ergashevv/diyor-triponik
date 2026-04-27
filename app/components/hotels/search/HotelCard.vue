<template>
  <div class="relative bg-white rounded-lg p-4 shadow-md mb-4 cursor-pointer hover:shadow-lg transition-shadow"
       :class="compact ? 'flex flex-col gap-4' : 'flex flex-col md:flex-row gap-4'"
       @click="goToDetail">
    <!-- Score Badge - Top Right of Card -->
    <div class="absolute top-0 right-0 text-white text-base sm:text-xl font-bold score-badge flex items-center justify-center z-20">
      <img src="/assets/logos/Vector.png" alt="badge" class="absolute inset-0 w-full h-full object-contain" />
      <span class="relative z-10">{{ hotel.score }}</span>
    </div>

    <!-- Image Carousel -->
    <div class="relative rounded-lg overflow-hidden"
         :class="compact ? 'w-full h-[200px]' : 'w-full md:w-[250px] h-[200px] md:h-auto md:self-stretch md:shrink-0'">
      <button @click.stop class="absolute top-3 left-3 z-10 bg-white/90 hover:bg-white border-none rounded-full w-9 h-9 flex items-center justify-center cursor-pointer text-gray-600 hover:text-blue-600 transition-all">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>

      <div class="w-full h-full">
        <img :src="currentImage" :alt="hotel.name" class="w-full h-full object-cover" />
      </div>

      <button @click.stop="prevImage" class="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-white transition-all">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <button @click.stop="nextImage" class="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-white transition-all">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      <div class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-xl text-xs font-medium">
        {{ currentImageIndex + 1 }} / {{ hotel.imageCount }}
      </div>
    </div>

    <!-- Hotel Details - Dynamic Layout -->
    <div v-if="compact" class="flex flex-col gap-2">
      <!-- Compact Layout (30% width) -->
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <div class="flex gap-0.5">
          <svg v-for="i in 5" :key="i" width="12" height="12" viewBox="0 0 24 24"
               :fill="i <= hotel.rating ? '#FFC107' : 'none'"
               :stroke="i <= hotel.rating ? '#FFC107' : '#DDD'"
               stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>

        <div class="flex items-center gap-2">
          <h3 class="m-0 text-sm font-semibold text-gray-900 line-clamp-1">{{ hotel.name }}</h3>
          <span v-if="hotel.isTop" class="bg-blue-600 text-white px-1.5 py-0.5 rounded text-[9px] font-semibold shrink-0">TOP</span>
        </div>
      </div>

      <!-- Location -->
      <p class="m-0 text-[11px] text-gray-600 line-clamp-1">
        {{ hotel.location }}
      </p>

      <!-- Room Type -->
      <div v-if="hotel.roomType">
        <p class="m-0 text-[11px] font-medium text-gray-900 line-clamp-1">{{ hotel.roomType }}</p>
      </div>

      <!-- Amenity Icons - Compact -->
      <div class="flex gap-1.5 items-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <circle cx="12" cy="20" r="1"/>
        </svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
          <rect x="3" y="11" width="18" height="10" rx="2"/>
        </svg>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
          <rect x="2" y="7" width="20" height="14" rx="2"/>
        </svg>
      </div>

      <!-- Amenities List - Compact -->
      <div v-if="hotel.amenities && hotel.amenities.length > 0" class="flex flex-col gap-0.5">
        <div v-for="(amenity, index) in hotel.amenities.slice(0, 2)" :key="index" class="flex items-center gap-1 text-[10px] text-green-600 font-medium">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span class="line-clamp-1">{{ amenity }}</span>
        </div>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-2">
        <div class="flex gap-0.5">
          <span v-for="i in 5" :key="i" class="w-1.5 h-1.5 rounded-full" :class="i <= Math.floor(hotel.score / 2) ? 'bg-green-600' : 'bg-gray-200'"></span>
        </div>
        <span class="text-[10px] text-gray-600">{{ hotel.reviews }} sharh</span>
      </div>

      <!-- Booking Info -->
      <div class="mt-1 pt-2 border-t border-gray-200">
        <p class="m-0 mb-1 text-[10px] text-gray-600">{{ hotel.nights }} kecha, {{ hotel.guests }} kishi</p>
        <div class="flex items-center justify-between gap-2">
          <span class="text-base font-bold text-gray-900 whitespace-nowrap">{{ hotel.price?.toFixed(2) }} {{ hotel.currency || 'EUR' }}</span>
          <button class="bg-blue-600 hover:bg-blue-700 text-white border-none px-2 py-1 rounded text-[10px] font-semibold cursor-pointer transition-colors shrink-0">
            Ko'rish
          </button>
        </div>
      </div>
    </div>

    <!-- Normal/Full Layout (66% width) -->
    <div v-else class="flex-1 flex flex-col md:flex-row gap-4">
      <!-- Left: Hotel Details -->
      <div class="flex-1 flex flex-col gap-3">
        <!-- Header -->
        <div class="flex flex-col gap-1">
          <div class="flex gap-0.5">
            <svg v-for="i in 5" :key="i" width="16" height="16" viewBox="0 0 24 24"
                 :fill="i <= hotel.rating ? '#FFC107' : 'none'"
                 :stroke="i <= hotel.rating ? '#FFC107' : '#DDD'"
                 stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>

          <div class="flex items-center gap-2">
            <h3 class="m-0 text-lg font-semibold text-gray-900">{{ hotel.name }}</h3>
            <span v-if="hotel.isTop" class="bg-blue-600 text-white px-2 py-0.5 rounded text-[11px] font-semibold">TOP</span>
          </div>
        </div>

        <!-- Location -->
        <p class="m-0 text-[13px] text-gray-600 leading-relaxed">
          {{ hotel.location }}
        </p>

        <!-- Room Type -->
        <div v-if="hotel.roomType">
          <h4 class="m-0 mb-1 text-[15px] font-semibold text-gray-900">{{ hotel.roomType }}</h4>
          <p v-if="hotel.roomBeds" class="m-0 text-[13px] text-gray-600">{{ hotel.roomBeds }}</p>
        </div>

        <!-- Amenities -->
        <div v-if="hotel.amenities && hotel.amenities.length > 0" class="flex flex-col gap-1.5">
          <div v-for="(amenity, index) in hotel.amenities" :key="index" class="flex items-center gap-1.5 text-[13px] text-green-600 font-medium">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>{{ amenity }}</span>
          </div>
        </div>

        <!-- Rating Indicator -->
        <div class="flex items-center gap-3">
          <div class="flex gap-1">
            <span v-for="i in 5" :key="i" class="w-2 h-2 rounded-full" :class="i <= Math.floor(hotel.score / 2) ? 'bg-green-600' : 'bg-gray-200'"></span>
          </div>
          <span class="text-[13px] text-gray-600">{{ hotel.reviews }} ta sharh</span>
        </div>

        <!-- Amenity Icons -->
        <div class="flex gap-2 items-center mt-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
            <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
            <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
            <circle cx="12" cy="20" r="1"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
            <rect x="3" y="11" width="18" height="10" rx="2"/>
            <circle cx="12" cy="16" r="1"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      </div>

      <!-- Right: Price and Action -->
      <div class="flex flex-col items-start md:items-end gap-3 w-full md:w-[200px] md:shrink-0">
        <!-- Booking Info -->
        <div class="mt-auto text-left md:text-right w-full">
          <p class="m-0 mb-2 text-[13px] text-gray-600">{{ hotel.nights }} kecha uchun {{ hotel.guests }} kishiga</p>
          <div class="flex flex-col items-start md:items-end gap-2 w-full">
            <span class="text-2xl font-bold text-gray-900">{{ hotel.price?.toFixed(2) }} {{ hotel.currency || 'EUR' }}</span>
            <button class="bg-blue-600 hover:bg-blue-700 text-white border-none px-4 py-2 rounded-md text-xs font-semibold cursor-pointer transition-colors w-full md:w-auto">
              Barcha xonalar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Hotel {
  id: number
  name: string
  image: string
  imageCount: number
  rating: number
  score: number
  reviews: number
  isTop: boolean
  location: string
  distance: string
  metroDistance: string
  roomType: string
  roomBeds: string
  roomSize: number
  viewType: string
  amenities: string[]
  nights: number
  guests: number
  price: number
  currency?: string
  coordinates: number[]
  rooms?: any[]
  code?: string
}

const props = defineProps<{
  hotel: Hotel
  compact?: boolean
}>()

const currentImageIndex = ref(0)

// Generate array of images (for demo purposes, using the same image)
const images = computed(() => {
  return Array(props.hotel.imageCount).fill(props.hotel.image)
})

const currentImage = computed(() => {
  return images.value[currentImageIndex.value] || props.hotel.image
})

const nextImage = () => {
  if (currentImageIndex.value < images.value.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0
  }
}

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = images.value.length - 1
  }
}

const goToDetail = () => {
  const route = useRoute()

  // Get first room's first rate's rateKey
  const rateKey = props.hotel.rooms?.[0]?.rates?.[0]?.rateKey

  if (!rateKey) {
    console.error('No rateKey found for hotel')
    return
  }

  navigateTo({
    path: `/hotels/${props.hotel.code || props.hotel.id}`,
    query: {
      rateKey,
      checkIn: route.query.checkIn,
      checkOut: route.query.checkOut,
      adults: route.query.adults || '2',
      children: route.query.children || '0',
      rooms: route.query.rooms || '1'
    }
  })
}
</script>

<style scoped>
.score-badge {
  min-height: 40px;
  min-width: 40px;
}

@media (min-width: 640px) {
  .score-badge {
    min-height: 50px;
    min-width: 50px;
  }
}
</style>

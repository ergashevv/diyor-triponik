<template>
  <div class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 sticky top-6">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-bold text-gray-900">Filtrlar</h2>
      <button
        @click="resetFilters"
        class="text-blue-600 hover:text-blue-700 text-sm font-medium"
      >
        Tozalash
      </button>
    </div>

    <!-- Price Range Filter -->
    <div class="mb-8">
      <h3 class="text-base font-semibold text-gray-900 mb-4">Narx, so'm</h3>
      <div class="space-y-4">
        <!-- Price Range Display -->
        <div class="flex items-center justify-between text-gray-600 text-sm">
          <span>{{ formatPrice(localPriceRange[0]) }}</span>
          <span>{{ formatPrice(localPriceRange[1]) }}</span>
        </div>

        <!-- Dual Range Slider -->
        <div class="relative h-6 flex items-center">
          <!-- Track background -->
          <div class="absolute w-full h-2 bg-gray-200 rounded-full"></div>
          <!-- Active track -->
          <div
            class="absolute h-2 bg-blue-600 rounded-full"
            :style="{
              left: `${((localPriceRange[0] - MIN) / RANGE) * 100}%`,
              width: `${((localPriceRange[1] - localPriceRange[0]) / RANGE) * 100}%`
            }"
          ></div>
          <!-- Min handle -->
          <input
            type="range"
            :min="MIN"
            :max="MAX"
            :step="STEP"
            :value="localPriceRange[0]"
            @input="setMin"
            class="range-input absolute w-full"
          />
          <!-- Max handle -->
          <input
            type="range"
            :min="MIN"
            :max="MAX"
            :step="STEP"
            :value="localPriceRange[1]"
            @input="setMax"
            class="range-input absolute w-full"
          />
        </div>
      </div>
    </div>

    <!-- Departure Time Filter -->
    <div class="mb-8">
      <h3 class="text-base font-semibold text-gray-900 mb-4">Jo'nash vaqti</h3>
      <div class="grid grid-cols-2 gap-3">
        <button
          v-for="timeSlot in timeSlots"
          :key="timeSlot.value"
          @click="toggleDepartureTime(timeSlot.value)"
          :class="[
            'px-4 py-3 rounded-lg border transition-all text-sm font-medium',
            localDepartureTime.includes(timeSlot.value)
              ? 'bg-blue-50 text-blue-600 border-blue-600'
              : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
          ]"
        >
          {{ timeSlot.label }}
        </button>
      </div>
    </div>

    <!-- Train Types Filter -->
    <div class="mb-8">
      <h3 class="text-base font-semibold text-gray-900 mb-4">Poyezd turlari</h3>
      <div class="space-y-3">
        <label
          v-for="trainType in trainTypeOptions"
          :key="trainType.value"
          class="flex items-center gap-3 cursor-pointer group"
        >
          <div class="relative">
            <input
              v-model="localTrainTypes"
              :value="trainType.value"
              type="checkbox"
              class="w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
            />
            <svg
              v-if="localTrainTypes.includes(trainType.value)"
              class="absolute top-0 left-0 w-5 h-5 text-white pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-sm text-gray-700">{{ trainType.label }}</span>
        </label>
      </div>
    </div>

    <!-- Wagon Types Filter -->
    <div class="mb-6">
      <h3 class="text-base font-semibold text-gray-900 mb-4">Vagon turlari</h3>
      <div class="space-y-3">
        <label
          v-for="wagonType in wagonTypeOptions"
          :key="wagonType.value"
          class="flex items-center gap-3 cursor-pointer group"
        >
          <div class="relative">
            <input
              v-model="localWagonTypes"
              :value="wagonType.value"
              type="checkbox"
              class="w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-blue-600 checked:border-blue-600 transition-all cursor-pointer"
            />
            <svg
              v-if="localWagonTypes.includes(wagonType.value)"
              class="absolute top-0 left-0 w-5 h-5 text-white pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-sm text-gray-700">{{ wagonType.label }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  priceRange: {
    type: Array,
    default: () => [200000, 600000]
  },
  departureTime: {
    type: Array,
    default: () => []
  },
  trainTypes: {
    type: Array,
    default: () => []
  },
  wagonTypes: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:priceRange', 'update:departureTime', 'update:trainTypes', 'update:wagonTypes', 'update'])

// Local state
const localPriceRange = ref([...props.priceRange])
const localDepartureTime = ref([...props.departureTime])
const localTrainTypes = ref([...props.trainTypes])
const localWagonTypes = ref([...props.wagonTypes])

const MIN = 200000
const MAX = 600000
const RANGE = MAX - MIN
const STEP = 10000

// Format price
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const setMin = (e) => {
  const val = Number(e.target.value)
  if (val >= localPriceRange.value[1]) return
  localPriceRange.value = [val, localPriceRange.value[1]]
  applyFilters()
}

const setMax = (e) => {
  const val = Number(e.target.value)
  if (val <= localPriceRange.value[0]) return
  localPriceRange.value = [localPriceRange.value[0], val]
  applyFilters()
}

// Time slots - vaqt oraliq filtrlari
const timeSlots = [
  { label: '00:00 - 06:00', value: 'night', icon: '🌙' },
  { label: '06:00 - 12:00', value: 'morning', icon: '🌅' },
  { label: '12:00 - 18:00', value: 'afternoon', icon: '☀️' },
  { label: '18:00 - 24:00', value: 'evening', icon: '🌆' }
]

// Train type options - poyezd turlari
const trainTypeOptions = [
  { label: 'Afrosiyob (Tezkor)', value: 'afrosiyob', description: 'Yuqori tezlikdagi poyezd' },
  { label: 'Sharq (Tunik)', value: 'sharq', description: 'Tunik kunduzgi poyezd' },
  { label: "O'zbekiston (Yo'lovchi)", value: 'ozbekiston', description: 'Oddiy yo\'lovchi poyezdi' }
]

// Wagon type options - vagon turlari
const wagonTypeOptions = [
  { label: 'Plaskart', value: 'plaskart', description: 'Ochiq vagon' },
  { label: 'Kupe', value: 'kupe', description: 'To\'rt kishilik kabin' },
  { label: 'VIP', value: 'vip', description: 'Maxsus kabinalar' }
]

// Toggle departure time
const toggleDepartureTime = (value) => {
  const index = localDepartureTime.value.indexOf(value)
  if (index > -1) {
    localDepartureTime.value.splice(index, 1)
  } else {
    localDepartureTime.value.push(value)
  }
  applyFilters()
}

// Apply filters
const applyFilters = () => {
  emit('update:priceRange', localPriceRange.value)
  emit('update:departureTime', localDepartureTime.value)
  emit('update:trainTypes', localTrainTypes.value)
  emit('update:wagonTypes', localWagonTypes.value)
  emit('update')
}

// Reset filters
const resetFilters = () => {
  localPriceRange.value = [200000, 600000]
  localDepartureTime.value = []
  localTrainTypes.value = []
  localWagonTypes.value = []
  applyFilters()
}

// Watch props changes
watch(() => props.priceRange, (newVal) => {
  localPriceRange.value = [...newVal]
})

watch(() => props.departureTime, (newVal) => {
  localDepartureTime.value = [...newVal]
})

watch(() => props.trainTypes, (newVal) => {
  localTrainTypes.value = [...newVal]
})

watch(() => props.wagonTypes, (newVal) => {
  localWagonTypes.value = [...newVal]
})

// Watch local changes and auto-apply
watch(localTrainTypes, () => {
  applyFilters()
}, { deep: true })

watch(localWagonTypes, () => {
  applyFilters()
}, { deep: true })
</script>

<style scoped>
/* Custom checkbox styles */
input[type="checkbox"]:checked {
  background-image: none;
}

/* Dual range slider */
.range-input {
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  pointer-events: none;
  height: 6px;
}
.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 2px solid #2563eb;
  cursor: pointer;
  pointer-events: all;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
}
.range-input::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  border: 2px solid #2563eb;
  cursor: pointer;
  pointer-events: all;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
}
</style>

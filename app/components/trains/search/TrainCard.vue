<template>
  <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-4 md:p-5 lg:p-6 mb-4 md:mb-6 lg:mb-10">
    <!-- Main Grid: Left 70% + Right 30% -->
    <div class="grid grid-cols-1 md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] gap-4 md:gap-5 lg:gap-6">
      <!-- Left Column (70%) -->
      <div class="md:border-r border-gray-200 md:pr-4 lg:pr-6 md:pb-0">
        <!-- Firma Badge -->
        <div class="mb-3 -mt-2 md:-mt-3 lg:-mt-10">
          <button class="px-3 md:px-4 py-1 md:py-1.5 bg-blue-50 text-blue-600 text-xs md:text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors">
            Firma
          </button>
        </div>

        <!-- Train Info -->
        <div class="flex items-center gap-2 md:gap-3 mb-4 md:mb-5 lg:mb-6 flex-wrap">
          <div class="bg-gray-100 text-gray-900 font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm">
            {{ train.number }} {{ train.name }}
          </div>
          <div class="bg-gray-100 text-gray-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm">
            {{ train.class }}
          </div>
        </div>

        <!-- Schedule -->
        <div class="mb-4 md:mb-5 lg:mb-6">
          <div class="flex items-start justify-between mb-2">
            <!-- Departure Time -->
            <div class="text-2xl md:text-3xl font-bold text-gray-900">{{ train.departureTime }}</div>
            <!-- Duration -->
            <div class="text-[10px] md:text-xs text-gray-500 pt-1 md:pt-2 px-1">{{ train.duration }}</div>
            <!-- Arrival Time -->
            <div class="text-2xl md:text-3xl font-bold text-gray-900">{{ train.arrivalTime }}</div>
          </div>

          <!-- Progress Bar -->
          <div class="relative mb-2">
            <div class="flex items-center">
              <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div class="flex-1 h-0.5 bg-blue-600"></div>
              <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
          </div>

          <!-- Dates & Stations -->
          <div class="flex items-start justify-between text-xs md:text-sm">
            <div>
              <div class="text-gray-600 mb-0.5 md:mb-1">{{ train.departureDate }}</div>
              <div class="text-gray-900 font-medium mb-0.5">{{ train.departureStation }}</div>
              <div class="text-gray-500 text-[11px] md:text-xs">{{ train.departureCity }}</div>
            </div>
            <div class="text-right">
              <div class="text-gray-600 mb-0.5 md:mb-1">{{ train.arrivalDate }}</div>
              <div class="text-gray-900 font-medium mb-0.5">{{ train.arrivalStation }}</div>
              <div class="text-gray-500 text-[11px] md:text-xs">{{ train.arrivalCity }}</div>
            </div>
          </div>
        </div>

        <!-- Amenities -->
        <div class="flex items-center justify-between mt-4 md:mt-8 lg:mt-20">
          <div class="flex items-center gap-2 md:gap-3 lg:gap-4 flex-wrap">
            <!-- Icons -->
            <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
            <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <button class="text-blue-600 text-xs md:text-sm font-medium hover:text-blue-700 whitespace-nowrap">
            Marshrut
          </button>
        </div>
      </div>

      <!-- Right Column (30%) -->
      <div class="flex flex-col md:pr-3 lg:pr-4 pt-4 md:pt-0 border-t md:border-t-0 border-gray-200">
        <!-- Reviews & Rating -->
        <div class="flex items-center justify-between md:justify-end gap-2 mb-3 md:mb-4">
          <span class="text-blue-600 font-medium text-xs md:text-[13px]">{{ train.reviewCount || '1.2K' }} sharh</span>
          <div class="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
            {{ train.score || '9.0' }}
          </div>
        </div>

        <!-- Seats & Prices -->
        <div class="space-y-2 md:space-y-2 mb-3 md:mb-4">
          <!-- Plaskart -->
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="font-semibold text-gray-900 mb-0.5 md:mb-1 text-xs md:text-sm lg:text-[14px]">Plaskart</div>
              <div class="text-gray-500 text-[10px] md:text-[11px] lg:text-[12px]">{{ train.availableSeats.plaskart.passengers }}</div>
            </div>
            <div class="text-right">
              <div class="font-bold text-blue-600 text-xs md:text-[13px] whitespace-nowrap">{{ formatPrice(train.availableSeats.plaskart.price) }} so'm dan</div>
            </div>
          </div>

          <!-- Kupe -->
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="font-semibold text-gray-900 mb-0.5 md:mb-1 text-xs md:text-sm lg:text-[14px]">Kupe</div>
              <div class="text-gray-500 text-[10px] md:text-[11px] lg:text-[12px]">{{ train.availableSeats.kupe.passengers }}</div>
            </div>
            <div class="text-right">
              <div class="font-bold text-blue-600 text-xs md:text-[13px] whitespace-nowrap">{{ formatPrice(train.availableSeats.kupe.price) }} so'm dan</div>
            </div>
          </div>

          <!-- VIP -->
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="font-semibold text-gray-900 mb-0.5 md:mb-1 text-xs md:text-sm lg:text-[14px]">VIP</div>
              <div class="text-gray-500 text-[10px] md:text-[11px] lg:text-[12px]">{{ train.availableSeats.vip.passengers || "Joy yo'q" }}</div>
            </div>
            <div class="text-right">
              <div class="font-bold text-blue-600 text-xs md:text-[13px] whitespace-nowrap">
                {{ isVipUnavailable ? '~ ' : '' }}{{ formatPrice(train.availableSeats.vip.price) }} dan
              </div>
            </div>
          </div>
        </div>

        <!-- Total Price & Button (Side by Side) -->
        <div class="mt-auto flex flex-col xl:flex-row items-stretch xl:items-center gap-3 md:gap-4">
          <!-- Price -->
          <div class="shrink-0">
            <div class="font-bold text-gray-900 mb-0.5 text-lg md:text-xl lg:text-[21px]">
              {{ formatPrice(train.availableSeats.plaskart.price) }} so'm dan
            </div>
            <div class="text-gray-500 text-[11px] md:text-[12px]">bir kishi uchun</div>
          </div>
          <!-- Button -->
          <button
            @click="showSeatModal = true"
            class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 lg:py-3.5 px-4 md:px-5 lg:px-6 rounded-xl transition-colors text-xs md:text-[13px]"
          >
            O'rindiq tanlash
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Seat Selection Modal -->
  <TrainsSearchSeatSelectionModal
    v-model="showSeatModal"
    :train="train"
    wagon-type="Kupe"
    @confirm="handleSeatConfirmation"
  />
</template>

<script setup>
const props = defineProps({
  train: {
    type: Object,
    required: true
  }
})

// Show seat selection modal
const showSeatModal = ref(false)

// Check if VIP is unavailable
const isVipUnavailable = computed(() => {
  return props.train.availableSeats?.vip?.available === 'Joy yoq'
})

// Format price with spaces
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// Handle seat confirmation
const handleSeatConfirmation = (selection) => {
  console.log('Selected seats:', selection)

  // Navigate to seat-selection page with query params
  navigateTo({
    path: '/trains/seat-selection',
    query: {
      trainId: props.train.id,
      trainNumber: props.train.number,
      trainName: props.train.name,
      from: props.train.departureCity,
      to: props.train.arrivalCity,
      departureTime: props.train.departureTime,
      arrivalTime: props.train.arrivalTime,
      wagon: selection.wagon,
      wagonType: selection.wagonType,
      seats: JSON.stringify(selection.seats),
      totalPrice: selection.totalPrice
    }
  })
}
</script>

<style scoped>
</style>

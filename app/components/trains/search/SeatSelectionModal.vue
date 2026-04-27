<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
          <!-- Modal Header -->
          <div class="relative px-6 py-5 border-b border-gray-100">
            <button
              @click="closeModal"
              class="absolute right-6 top-5 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 class="text-xl font-bold text-gray-900">{{ wagonType }}, {{ selectedSeats.length }} ta o'rin</h2>
            <p class="text-sm text-gray-500 mt-1">
              {{ selectedSeats.length > 0 ? `${selectedSeats[0]} yuqori, ` : '' }}{{ currentWagon }}-vagon • с бельём
            </p>
          </div>

          <!-- Modal Body -->
          <div class="overflow-y-auto max-h-[calc(90vh-200px)]">
            <div class="px-6 py-6">
              <!-- Seat Map -->
              <div class="mb-6">
                <div class="relative bg-gray-50 rounded-2xl p-6">
                  <!-- Seats Row 1 (Upper) -->
                  <div class="mb-3">
                    <div class="flex items-start gap-2 mb-2">
                      <!-- Emergency exit labels -->
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="flex-1">
                        <div class="text-[10px] text-gray-400 text-center">favqulotda. chiqish</div>
                      </div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="flex-1">
                        <div class="text-[10px] text-gray-400 text-center">favqulotda. chiqish</div>
                      </div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="w-10"></div>
                      <div class="flex items-center justify-center w-10 h-8">
                        <span class="text-[10px] font-semibold text-gray-500">WC</span>
                      </div>
                      <div class="flex items-center justify-center w-10 h-8">
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <TrainsSearchSeatButton :number="2" :state="getSeatState(2)" @click="toggleSeat(2)" size="sm" />
                      <TrainsSearchSeatButton :number="4" :state="getSeatState(4)" @click="toggleSeat(4)" size="sm" />
                      <TrainsSearchSeatButton :number="6" :state="getSeatState(6)" @click="toggleSeat(6)" size="sm" />
                      <TrainsSearchSeatButton :number="8" :state="getSeatState(8)" @click="toggleSeat(8)" size="sm" />
                      <TrainsSearchSeatButton :number="10" :state="getSeatState(10)" @click="toggleSeat(10)" size="sm" />
                      <TrainsSearchSeatButton :number="12" :state="getSeatState(12)" @click="toggleSeat(12)" size="sm" />
                      <TrainsSearchSeatButton :number="14" :state="getSeatState(14)" @click="toggleSeat(14)" size="sm" />
                      <TrainsSearchSeatButton :number="16" :state="getSeatState(16)" @click="toggleSeat(16)" size="sm" />
                      <TrainsSearchSeatButton :number="18" :state="getSeatState(18)" @click="toggleSeat(18)" size="sm" />
                      <TrainsSearchSeatButton :number="20" :state="getSeatState(20)" @click="toggleSeat(20)" size="sm" />
                      <TrainsSearchSeatButton :number="22" :state="getSeatState(22)" @click="toggleSeat(22)" size="sm" />
                      <TrainsSearchSeatButton :number="24" :state="getSeatState(24)" @click="toggleSeat(24)" size="sm" />
                      <TrainsSearchSeatButton :number="26" :state="getSeatState(26)" @click="toggleSeat(26)" size="sm" />
                      <TrainsSearchSeatButton :number="28" :state="getSeatState(28)" @click="toggleSeat(28)" size="sm" />
                      <TrainsSearchSeatButton :number="30" :state="getSeatState(30)" @click="toggleSeat(30)" size="sm" />
                      <TrainsSearchSeatButton :number="32" :state="getSeatState(32)" @click="toggleSeat(32)" size="sm" />
                      <TrainsSearchSeatButton :number="34" :state="getSeatState(34)" @click="toggleSeat(34)" size="sm" />
                      <TrainsSearchSeatButton :number="36" :state="getSeatState(36)" @click="toggleSeat(36)" size="sm" />
                    </div>
                  </div>

                  <!-- Seats Row 2 (Lower) -->
                  <div>
                    <div class="flex items-center gap-2">
                      <TrainsSearchSeatButton :number="1" :state="getSeatState(1)" @click="toggleSeat(1)" size="sm" />
                      <TrainsSearchSeatButton :number="3" :state="getSeatState(3)" @click="toggleSeat(3)" size="sm" />
                      <TrainsSearchSeatButton :number="5" :state="getSeatState(5)" @click="toggleSeat(5)" size="sm" />
                      <TrainsSearchSeatButton :number="7" :state="getSeatState(7)" @click="toggleSeat(7)" size="sm" />
                      <TrainsSearchSeatButton :number="9" :state="getSeatState(9)" @click="toggleSeat(9)" size="sm" />
                      <TrainsSearchSeatButton :number="11" :state="getSeatState(11)" @click="toggleSeat(11)" size="sm" />
                      <TrainsSearchSeatButton :number="13" :state="getSeatState(13)" @click="toggleSeat(13)" size="sm" />
                      <TrainsSearchSeatButton :number="15" :state="getSeatState(15)" @click="toggleSeat(15)" size="sm" />
                      <TrainsSearchSeatButton :number="17" :state="getSeatState(17)" @click="toggleSeat(17)" size="sm" />
                      <TrainsSearchSeatButton :number="19" :state="getSeatState(19)" @click="toggleSeat(19)" size="sm" />
                      <TrainsSearchSeatButton :number="21" :state="getSeatState(21)" @click="toggleSeat(21)" size="sm" />
                      <TrainsSearchSeatButton :number="23" :state="getSeatState(23)" @click="toggleSeat(23)" size="sm" />
                      <TrainsSearchSeatButton :number="25" :state="getSeatState(25)" @click="toggleSeat(25)" size="sm" />
                      <TrainsSearchSeatButton :number="27" :state="getSeatState(27)" @click="toggleSeat(27)" size="sm" />
                      <TrainsSearchSeatButton :number="29" :state="getSeatState(29)" @click="toggleSeat(29)" size="sm" />
                      <TrainsSearchSeatButton :number="31" :state="getSeatState(31)" @click="toggleSeat(31)" size="sm" />
                      <TrainsSearchSeatButton :number="33" :state="getSeatState(33)" @click="toggleSeat(33)" size="sm" />
                      <TrainsSearchSeatButton :number="35" :state="getSeatState(35)" @click="toggleSeat(35)" size="sm" />
                    </div>
                  </div>
                </div>

                <!-- Amenities Icons -->
                <div class="flex items-center gap-2 mt-4 px-2">
                  <div class="flex items-center gap-2 text-gray-600">
                    <span class="text-sm">Yuqori o'rin • Hojatxonaga yaqin</span>
                  </div>
                </div>

                <div class="flex items-center gap-3 mt-3 px-2">
                  <div class="w-6 h-6 flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
                    </svg>
                  </div>
                  <div class="w-6 h-6 flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div class="w-6 h-6 flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 21h19v-3H2v3zM20 8H4V4h16v4zM21 2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM5 16h14c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1z"/>
                    </svg>
                  </div>
                  <div class="w-6 h-6 flex items-center justify-center">
                    <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Wagon Tabs -->
              <div class="flex items-center gap-3 mb-6">
                <button
                  v-for="wagon in wagons"
                  :key="wagon.number"
                  @click="currentWagon = wagon.number"
                  :class="[
                    'px-6 py-3 rounded-lg font-medium transition-all',
                    currentWagon === wagon.number
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  ]"
                >
                  <div class="text-sm font-semibold">VAGON {{ wagon.number }}</div>
                  <div class="text-xs opacity-80">{{ wagon.seats }} o'rin</div>
                </button>
              </div>

              <!-- Legend -->
              <div class="flex flex-wrap items-center gap-4 text-sm">
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 bg-gray-100 border border-gray-300 rounded"></div>
                  <span class="text-gray-600">Bo'sh</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 bg-blue-50 border border-blue-200 rounded"></div>
                  <span class="text-gray-600">Talabga javob bermaydi</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 bg-blue-600 rounded"></div>
                  <span class="text-gray-600">Tanlangan</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 bg-gray-400 rounded"></div>
                  <span class="text-gray-600">Band</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-5 h-5 border-2 border-dashed border-orange-400 rounded"></div>
                  <span class="text-gray-600">Imtiyozli</span>
                </div>
                <button class="ml-auto text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Barcha belgilar
                </button>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="border-t border-gray-100 px-6 py-4 flex items-center justify-between">
            <div class="text-3xl font-bold text-gray-900">
              {{ formatPrice(totalPrice) }} ₽
            </div>
            <button
              @click="confirmSelection"
              :disabled="selectedSeats.length === 0"
              :class="[
                'px-8 py-3 rounded-xl font-semibold text-white transition-all',
                selectedSeats.length > 0
                  ? 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200'
                  : 'bg-gray-300 cursor-not-allowed'
              ]"
            >
              Davom etish
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  train: {
    type: Object,
    required: true
  },
  wagonType: {
    type: String,
    default: 'Kupe'
  }
})

const emit = defineEmits(['update:modelValue', 'confirm'])

// State
const selectedSeats = ref([])
const currentWagon = ref('02')

const wagons = [
  { number: '02', seats: 36 },
  { number: '03', seats: 54 },
  { number: '04', seats: 36 }
]

// Reserved seats (mock data)
const reservedSeats = [2, 4, 6, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36]
const privilegedSeats = []

// Computed
const totalPrice = computed(() => {
  const basePrice = 5762
  return basePrice * selectedSeats.value.length
})

// Methods
const closeModal = () => {
  emit('update:modelValue', false)
}

const getSeatState = (seatNumber) => {
  if (selectedSeats.value.includes(seatNumber)) return 'selected'
  if (reservedSeats.includes(seatNumber)) return 'reserved'
  if (privilegedSeats.includes(seatNumber)) return 'privileged'
  return 'available'
}

const toggleSeat = (seatNumber) => {
  const state = getSeatState(seatNumber)
  if (state === 'reserved') return

  const index = selectedSeats.value.indexOf(seatNumber)
  if (index > -1) {
    selectedSeats.value.splice(index, 1)
  } else {
    selectedSeats.value.push(seatNumber)
  }
}

const confirmSelection = () => {
  if (selectedSeats.value.length === 0) return

  emit('confirm', {
    seats: selectedSeats.value,
    wagon: currentWagon.value,
    wagonType: props.wagonType,
    totalPrice: totalPrice.value
  })
  closeModal()
}

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
}
</style>

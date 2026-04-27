<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-3 md:px-4 py-2 md:py-3">
        <div class="flex items-center gap-1 md:gap-2 text-[11px] md:text-sm overflow-x-auto">
          <NuxtLink to="/trains/search" class="text-blue-600 hover:underline whitespace-nowrap">Qidirish</NuxtLink>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <NuxtLink to="/trains/seat-selection" class="text-blue-600 hover:underline flex items-center gap-1 md:gap-1.5 whitespace-nowrap">
            <svg class="w-3 h-3 md:w-4 md:h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            <span class="hidden sm:inline">O'rindig tanlash</span>
            <span class="sm:hidden">O'rindiq</span>
          </NuxtLink>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <NuxtLink to="/trains/passengers" class="text-blue-600 hover:underline whitespace-nowrap">Yo'lovchilar</NuxtLink>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-900 font-medium whitespace-nowrap">Tekshirish</span>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-400 whitespace-nowrap">To'lov</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-3 md:px-4 py-4 md:py-6 max-w-4xl">
      <!-- Xotirjamlik va qulaylik qo'shing -->
      <div class="mb-4 md:mb-6">
        <h1 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Xotirjamlik va qulaylik qo'shing</h1>

        <!-- Qo'l yukiga qo'yiladigan talablar -->
        <button
          @click="toggleSection('luggage')"
          class="w-full bg-yellow-100 border border-yellow-300 rounded-lg md:rounded-xl p-3 md:p-4 flex items-center justify-between hover:bg-yellow-50 transition-colors mb-2 md:mb-3"
        >
          <span class="text-xs md:text-sm font-medium text-gray-900">Qo'l yukiga qo'yiladigan talablar</span>
          <svg
            :class="['w-4 h-4 md:w-5 md:h-5 text-gray-600 transition-transform shrink-0', expandedSections.luggage && 'rotate-180']"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Alohida chiptalar -->
        <div class="bg-yellow-100 border border-yellow-300 rounded-lg md:rounded-xl p-3 md:p-4 mb-2 md:mb-3">
          <button
            @click="toggleSection('tickets')"
            class="w-full flex items-center justify-between mb-2"
          >
            <span class="text-xs md:text-sm font-semibold text-gray-900">Alohida chiptalar</span>
            <svg
              :class="['w-5 h-5 text-gray-600 transition-transform', expandedSections.tickets && 'rotate-180']"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-if="expandedSections.tickets" class="text-sm text-gray-700">
            <p>Buyurtmada bir xil yoki boshliq aviakomplaniyalaming bir nechta chiptalarini mavjud. Ulami alohida qaytarish yoki almashtirish mumkin. Agar reysladan biri kechiktirilsa yoki bekor qilinsa, qolgan chiptalar faqat tanlangan tarif qoidalariga muvofiq qaytarilishi yoki almashtrilishi mumkin.</p>
          </div>
        </div>
      </div>

      <!-- Poyezd va joyni tekshiring -->
      <div class="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
        <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Poyezd va joyni tekshiring</h2>

        <!-- Train Details -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4 text-xs md:text-sm">
          <div>
            <p class="text-gray-500 mb-1">Jo'nash vaqti, mahalliy vaqt</p>
            <p class="font-bold text-gray-900">→ 3:08, 17 okt, pay</p>
            <p class="text-gray-600">Moskva BK Vostochnyy</p>
            <p class="text-gray-500 text-xs">(Sharqiy vokzal)</p>
          </div>
          <div>
            <p class="text-gray-500 mb-1">Yetib kelish, mahalliy vaqt</p>
            <p class="font-bold text-gray-900">8:30, 17 okt, pay</p>
            <p class="text-gray-600">Nizhniy Novgorod Mosk.</p>
            <p class="text-gray-500 text-xs">(Moskovskiy vokzal)</p>
          </div>
          <div>
            <p class="text-gray-500 mb-1">Poyezd</p>
            <p class="font-bold text-gray-900">059A «Волга»</p>
            <p class="text-gray-600">Moskva — Nizhniy Novgorod</p>
          </div>
        </div>

        <!-- Seat Info -->
        <div class="mb-4">
          <p class="text-gray-500 text-sm mb-1">Joylashuv</p>
          <p class="font-bold text-gray-900">03 vagon, plaskart</p>
          <p class="text-gray-600 text-sm">24-o'rin</p>
        </div>

        <!-- Seat Map -->
        <div class="bg-gray-50 rounded-xl p-4 mb-4 overflow-x-auto">
          <div class="flex items-center justify-between mb-3 text-xs text-gray-500">
            <span>Elektron yo'xatga olish</span>
            <span>Perevozchik: ФПК</span>
          </div>

          <!-- Seat Map - compact version -->
          <div class="space-y-2 min-w-[700px]">
            <!-- Upper Row -->
            <div class="mb-2">
              <div class="flex items-start gap-1 mb-1.5">
                <!-- Emergency exit labels -->
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="flex-1 min-w-[60px]">
                  <div class="text-[9px] text-gray-400 text-center">favqulotda. chiqish</div>
                </div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="flex-1 min-w-[60px]">
                  <div class="text-[9px] text-gray-400 text-center">favqulotda. chiqish</div>
                </div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="w-8"></div>
                <div class="flex items-center justify-center w-8 h-6">
                  <span class="text-[9px] font-semibold text-gray-500">WC</span>
                </div>
                <div class="flex items-center justify-center w-8 h-6">
                  <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <TrainsSearchSeatButton
                  v-for="seat in [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36]"
                  :key="seat"
                  :number="seat"
                  :state="getSeatState(seat)"
                  size="xs"
                />
              </div>
            </div>

            <!-- Lower Row -->
            <div>
              <div class="flex items-center gap-1">
                <TrainsSearchSeatButton
                  v-for="seat in [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]"
                  :key="seat"
                  :number="seat"
                  :state="getSeatState(seat)"
                  size="xs"
                />
              </div>
            </div>
          </div>

          <!-- Amenities -->
          <div class="flex items-center gap-2 mt-3">
            <div class="w-5 h-5 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
              </svg>
            </div>
            <div class="w-5 h-5 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div class="w-5 h-5 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21h19v-3H2v3zM20 8H4V4h16v4zM21 2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM5 16h14c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1z"/>
              </svg>
            </div>
            <div class="w-5 h-5 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Ma'lumotlarni tekshiring -->
      <div class="mb-4 md:mb-6">
        <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Ma'lumotlarni tekshiring</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <!-- Yo'lovchi Card -->
          <div class="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6">
            <div class="flex items-center justify-between mb-3 md:mb-4">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="text-sm md:text-base font-semibold text-gray-900">Yo'lovchi</span>
              </div>
              <button class="text-xs md:text-sm text-blue-600 hover:underline">O'zgartirish</button>
            </div>
            <div class="space-y-1 text-xs md:text-sm">
              <p class="font-bold text-gray-900">FARRUX ABDULLAYEV</p>
              <p class="text-gray-600">08.02.1999</p>
              <p class="text-gray-600">O'zbekiston passporti: AB5441433</p>
              <p class="text-gray-600">Amal qilish muddati: 19.12.2026</p>
            </div>
          </div>

          <!-- Xaridor Card -->
          <div class="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6">
            <div class="flex items-center justify-between mb-3 md:mb-4">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="text-sm md:text-base font-semibold text-gray-900">Xaridor</span>
              </div>
              <button class="text-xs md:text-sm text-blue-600 hover:underline">O'zgartirish</button>
            </div>
            <div class="space-y-1 text-xs md:text-sm">
              <p class="font-bold text-gray-900">Abdullayev Farruxbek</p>
              <p class="text-gray-600">farruxbekabdullayev@gmail.com</p>
              <p class="text-gray-600">+7 799 610-18-88</p>
            </div>
          </div>
        </div>
      </div>

      <!-- To'lov usulini tanlang - Services -->
      <div class="mb-4 md:mb-6">
        <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">To'lov usulini tanlang</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <!-- Uy hayvonlarini tashlish -->
          <div class="bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 p-4 md:p-6">
            <div class="mb-3 md:mb-4">
              <img src="../../assets//images/cat family-rafiki 1.png" alt="Pets" class="w-full h-32 md:h-40 object-contain" />
            </div>
            <h3 class="text-sm md:text-base font-bold text-gray-900 mb-2">Uy hayvonlarini tashlish</h3>
            <p class="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">Uy hayvonini parvozingizga qo'shing</p>
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold py-2.5 md:py-3 rounded-lg md:rounded-xl transition-colors">
              Qo'shish
            </button>
          </div>

          <!-- Salomatlik sug'urtasi -->
          <div class="bg-white rounded-xl md:rounded-2xl border-2 border-blue-500 p-4 md:p-6">
            <div class="mb-3 md:mb-4">
              <img src="../../assets//images/Public health-bro (1) 1.png" alt="Insurance" class="w-full h-32 md:h-40 object-contain" />
            </div>
            <h3 class="text-sm md:text-base font-bold text-gray-900 mb-2">Salomatlik sug'urtasi</h3>
            <p class="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">Ovqatingizni buyurtma qiling va biz uni parvoz davomida xizmat qilamiz</p>
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold py-2.5 md:py-3 rounded-lg md:rounded-xl transition-colors">
              Qo'shish
            </button>
          </div>
        </div>
      </div>

      <!-- To'lov usulini tanlang - Payment Methods -->
      <div class="mb-4 md:mb-6">
        <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">To'lov usulini tanlang</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 md:mb-6">
          <!-- O'zbekiston kartalari -->
          <label :class="[
            'flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 bg-white border-2 rounded-lg md:rounded-xl cursor-pointer transition-all',
            paymentMethod === 'uzcard' ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
          ]">
            <input
              v-model="paymentMethod"
              type="radio"
              value="uzcard"
              class="w-4 h-4 md:w-5 md:h-5 text-blue-600"
            />
            <div class="text-center">
              <span class="font-medium text-gray-900 text-xs md:text-sm">O'zbekiston kartalari</span>
            </div>
            <div class="flex items-center justify-center gap-2">
              <img src="../../assets//images/sps.png" alt="c6n" class="h-5 md:h-6" />
            </div>
          </label>

          <!-- Xalqaro bank kartasi -->
          <label :class="[
            'flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 bg-white border-2 rounded-lg md:rounded-xl cursor-pointer transition-all',
            paymentMethod === 'international' ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
          ]">
            <input
              v-model="paymentMethod"
              type="radio"
              value="international"
              class="w-4 h-4 md:w-5 md:h-5 text-blue-600"
            />
            <div class="text-center">
              <span class="font-medium text-gray-900 text-xs md:text-sm">Xalqaro bank kartasi</span>
            </div>
            <div class="flex items-center justify-center gap-2">
              <img src="../../assets//images/mastercard.png" alt="Mastercard" class="h-4 md:h-5" />
              <img src="../../assets//images/visa.png" alt="Visa" class="h-4 md:h-5" />
              <img src="../../assets//images/mir.svg.png" alt="Mir" class="h-4 md:h-5" />
            </div>
          </label>

          <!-- O'zbekiston to'lov tizimlari -->
          <label :class="[
            'flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 bg-white border-2 rounded-lg md:rounded-xl cursor-pointer transition-all',
            paymentMethod === 'uzbek_payment' ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
          ]">
            <input
              v-model="paymentMethod"
              type="radio"
              value="uzbek_payment"
              class="w-4 h-4 md:w-5 md:h-5 text-blue-600"
            />
            <div class="text-center">
              <span class="font-medium text-gray-900 text-xs md:text-sm">O'zbekiston to'lov tizimlari</span>
            </div>
            <div class="flex items-center justify-center gap-2">
              <img src="../../assets//images/mastercard.png" alt="Mastercard" class="h-4 md:h-5" />
              <img src="../../assets//images/visa.png" alt="Visa" class="h-4 md:h-5" />
              <img src="../../assets//images/mir.svg.png" alt="Mir" class="h-4 md:h-5" />
            </div>
          </label>
        </div>
      </div>

      <!-- To'lov qilish Button -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <button
          @click="handlePayment"
          class="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg md:rounded-xl transition-colors shadow-lg shadow-blue-200 order-2 md:order-1"
        >
          To'lov qilish
        </button>
        <div class="flex flex-col items-end justify-center order-1 md:order-2">
          <div class="flex items-center gap-2 mb-1">
            <p class="text-xl md:text-2xl font-bold text-gray-900">2 922,90 ₽</p>
            <svg class="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="text-xs md:text-sm text-gray-500">1qadam qoldi</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Tekshirish va to'lov - Triponik",
  description: "Buyurtmangizni tekshiring va to'lovni amalga oshiring"
})

const route = useRoute()

// Get query params (tanlangan o'rindiqlar)
const initializeSelectedSeats = () => {
  if (route.query.seats) {
    try {
      return JSON.parse(route.query.seats)
    } catch (e) {
      console.error('Error parsing seats:', e)
      return [24] // default
    }
  }
  return [24] // default
}

const selectedSeats = ref(initializeSelectedSeats())

// Expanded sections
const expandedSections = ref({
  luggage: false,
  tickets: true
})

// Payment method
const paymentMethod = ref('uzcard')

// Get seat state - tanlangan o'rindiqlarni ko'k rangda ko'rsatish
const getSeatState = (seatNumber) => {
  if (selectedSeats.value.includes(seatNumber)) return 'selected'
  // Band o'rindiqlar (boshqalar tomonidan)
  if ([2, 4, 6, 8].includes(seatNumber)) return 'reserved'
  return 'available'
}

// Toggle section
const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section]
}

// Handle payment
const handlePayment = () => {
  console.log('Processing payment with method:', paymentMethod.value)
  console.log('Selected seats:', selectedSeats.value)

  // TODO: To'lov APIsi bilan integratsiya
  alert('To\'lov amalga oshirilmoqda...')
}
</script>

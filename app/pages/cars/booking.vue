<template>
  <div class="bg-gray-50">
    <!-- Blue top section with curve -->
    <div class="relative bg-[#0D1B4C] h-72 overflow-hidden">
      <div class="absolute bottom-0 left-0 w-full">
        <svg class="block w-full h-16 md:h-24" fill="none" preserveAspectRatio="none"
             viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,120 L0,60 Q600,-30 1200,60 L1200,120 Z" fill="#f9fafb"></path>
        </svg>
      </div>
    </div>

    <!-- Card overlapping the curve -->
    <div class="max-w-3xl mx-auto px-4 -mt-44 relative z-10 pb-12">
      <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">

        <!-- Title -->
        <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-6">
          Transfer paytidagi parametrlarni kiriting
        </h2>

        <!-- Row 1: Date | Time | Airline | Flight -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <!-- Date -->
          <UPopover mode="click" :ui="{ container: 'bg-white dark:bg-white border border-gray-200 shadow-lg' }">
            <button type="button" class="w-full h-12 px-3 border border-gray-200 rounded-xl flex items-center justify-between gap-2 text-sm hover:bg-gray-50 transition-colors">
              <span :class="date ? 'text-gray-900' : 'text-gray-400'">
                {{ date ? formatDate(date) : 'Sana' }}
              </span>
              <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </button>
            <template #content="{ close }">
              <UCalendar v-model="date" class="p-2" @update:modelValue="close" :ui="calUi"/>
            </template>
          </UPopover>

          <!-- Time -->
          <button type="button" class="w-full h-12 px-3 border border-gray-200 rounded-xl flex items-center justify-between gap-2 text-sm hover:bg-gray-50 transition-colors">
            <input
              v-model="flightTime"
              type="time"
              placeholder="Qo'nish vaqti"
              class="flex-1 outline-none bg-transparent text-gray-700 placeholder:text-gray-400 text-sm"
            />
            <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </button>

          <!-- Airline -->
          <div class="relative">
            <select
              v-model="airline"
              class="w-full h-12 px-3 pr-8 border border-gray-200 rounded-xl text-sm text-gray-700 appearance-none outline-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="" disabled>Aviakompaniya</option>
              <option>Uzbekistan Airways</option>
              <option>Aeroflot</option>
              <option>Turkish Airlines</option>
              <option>Emirates</option>
              <option>Air Astana</option>
              <option>FlyDubai</option>
            </select>
            <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>

          <!-- Flight number -->
          <input
            v-model="flightNumber"
            type="text"
            placeholder="Reys raqami"
            class="w-full h-12 px-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <!-- Row 2: Toggle + Tablichka yozuv -->
        <div class="flex flex-col sm:flex-row gap-3 mb-4">
          <div class="flex items-center gap-3 shrink-0">
            <USwitch v-model="withSign" color="blue" />
            <span class="text-sm text-gray-700 whitespace-nowrap">Tablichka bilan kutib olish</span>
            <span class="text-sm text-blue-600 font-medium whitespace-nowrap">+ 1 105 P</span>
          </div>
          <input
            v-if="withSign"
            v-model="signText"
            type="text"
            placeholder="Tablichkadagi yozuv"
            class="w-full sm:flex-1 h-12 px-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <!-- Row 3: Comment -->
        <input
          v-model="comment"
          type="text"
          placeholder="Sayohat haqida izoh"
          class="w-full h-12 px-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors mb-6"
        />

        <!-- Yo'lovchi soni -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
          <span class="text-base font-bold text-gray-900">Yo'lovchi soni:</span>
          <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <!-- Adults -->
            <div class="flex items-center gap-3">
              <span class="text-sm text-gray-600 w-16 sm:w-auto">Kattalar</span>
              <button @click="adults > 1 && adults--" type="button"
                class="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                </svg>
              </button>
              <span class="w-4 text-center font-semibold text-gray-900">{{ adults }}</span>
              <button @click="adults++" type="button"
                class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </button>
            </div>
            <!-- Children -->
            <div class="flex items-center gap-3">
              <span class="text-sm text-gray-600 w-16 sm:w-auto">Bolalar</span>
              <button @click="children > 0 && children--" type="button"
                class="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                </svg>
              </button>
              <span class="w-4 text-center font-semibold text-gray-900">{{ children }}</span>
              <button @click="children++" type="button"
                class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Qaytishga transfer -->
        <div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 py-4 border-t border-b border-gray-100">
          <span class="text-base font-bold text-gray-900 shrink-0">Qaytishga transfer:</span>
          <span class="text-sm text-gray-500 sm:flex-1">Esdan chiqarmaslik uchun hoziroq buyurtma bering.</span>
          <button type="button"
            class="self-start sm:self-auto flex items-center gap-1.5 px-4 py-2 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shrink-0">
            Buyurtma qilish
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </button>
        </div>

        <!-- Kontakt ma'lumotlari -->
        <h3 class="text-base font-bold text-gray-900 mb-4">Kontakt ma'lumotlari</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <input
            v-model="firstName"
            type="text"
            placeholder="Ism"
            class="h-12 px-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          <input
            v-model="lastName"
            type="text"
            placeholder="Familiya"
            class="h-12 px-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <!-- Phone -->
          <div class="flex h-12 border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-colors">
            <div class="flex items-center gap-1 px-3 border-r border-gray-200 bg-gray-50 shrink-0">
              <span class="text-base">🇺🇿</span>
              <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
            <input
              v-model="phone"
              type="tel"
              placeholder="Bog'lanish uchun telefon"
              class="flex-1 px-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
            />
          </div>
          <input
            v-model="email"
            type="email"
            placeholder="Email (Tasdiqlash xabarini jo'natamiz)"
            class="h-12 px-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <!-- Footer: Total + Continue -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gray-100 gap-3">
          <div>
            <span class="text-sm text-gray-500 mr-2">Jami:</span>
            <span class="text-xl font-bold text-gray-900">{{ totalPrice }} $</span>
          </div>
          <button
            @click="handleContinue"
            class="w-full sm:w-auto px-8 h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
          >
            Davom etish
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const date = ref(null)
const flightTime = ref('')
const airline = ref('')
const flightNumber = ref('')
const withSign = ref(false)
const signText = ref('')
const comment = ref('')
const adults = ref(1)
const children = ref(0)
const firstName = ref('')
const lastName = ref('')
const phone = ref('+998')
const email = ref('')

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

const basePrice = Number(route.query.price) || 82.90
const signExtra = 1105

const totalPrice = computed(() => {
  let total = basePrice * (adults.value + children.value * 0.5)
  if (withSign.value) total += signExtra / 100
  return total.toFixed(2)
})

const handleContinue = () => {
  router.push({
    path: '/cars/checkout',
    query: {
      carName: route.query.carName,
      price: route.query.price,
      from: route.query.from,
      to: route.query.to,
      pickupDate: route.query.pickupDate,
      time: flightTime.value
    }
  })
}

useSeoMeta({ title: 'Transfer buyurtma - Triponik' })
</script>

<style scoped>
</style>

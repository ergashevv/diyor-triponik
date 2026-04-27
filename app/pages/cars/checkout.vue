<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Blue top section with curve -->
    <div class="relative bg-[#0D1B4C] h-72 overflow-hidden">
      <div class="absolute bottom-0 left-0 w-full">
        <svg class="block w-full h-16 md:h-24" fill="none" preserveAspectRatio="none"
             viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,120 L0,60 Q600,-30 1200,60 L1200,120 Z" fill="#f3f4f6"></path>
        </svg>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-5xl mx-auto px-4 -mt-44 relative z-10 pb-12">
      <div class="flex flex-col lg:flex-row gap-5 items-start">

        <!-- LEFT COLUMN -->
        <div class="flex-1 min-w-0 flex flex-col gap-4">

          <!-- Car Info Card -->
          <div class="bg-white rounded-2xl shadow-sm p-5 flex flex-col sm:flex-row gap-4">
            <!-- Left: name + image -->
            <div class="sm:w-52 shrink-0">
              <h3 class="text-lg font-bold text-gray-900 mb-0.5">{{ carName }}</h3>
              <p class="text-gray-500 text-xs mb-2">KIA Cerato, Chery Tiggo yoki shunga o'xshash</p>
              <div class="flex items-center gap-1 text-gray-500 text-xs mb-3">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <span>3 tagacha yo'lovchi</span>
              </div>
              <img src="~/assets/images/car.svg" alt="Car" class="w-full object-contain" />
            </div>

            <!-- Divider -->
            <div class="hidden sm:block w-px bg-gray-100 self-stretch"></div>

            <!-- Right: transfer details -->
            <div class="flex-1">
              <div class="flex items-center justify-between mb-4">
                <span class="font-bold text-gray-900">Transfer</span>
                <span class="text-gray-600 text-sm">{{ formattedDate }}, {{ bookingTime }}</span>
              </div>
              <div class="mb-3">
                <p class="text-sm font-semibold text-gray-900 mb-1">Jo'nash</p>
                <p class="text-sm text-gray-600 leading-snug">{{ fromLocation }}</p>
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-900 mb-1">Kelish</p>
                <p class="text-sm text-gray-600 leading-snug">{{ toLocation }}</p>
              </div>
            </div>
          </div>

          <!-- Payment Section -->
          <div class="rounded-2xl shadow-sm p-5">
            <h3 class="text-base font-bold text-gray-900 mb-4">To'lov usulini tanlang</h3>

            <!-- Card payment -->
            <div class="border border-gray-200 rounded-xl mb-3 overflow-hidden">
              <label class="flex items-center justify-between px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors">
                <div class="flex items-center gap-3">
                  <input type="radio" v-model="paymentMethod" value="card"
                         class="w-4 h-4 accent-blue-600" />
                  <span class="text-sm font-medium text-gray-900">Kredit/Debit karta</span>
                </div>
                <div class="flex items-center gap-1">
                  <img src="~/assets/images/mastercard.png" alt="Visa" class="h-5 w-auto object-contain" />
                  <img src="~/assets/images/visa.png" alt="Mastercard" class="h-5 w-auto object-contain" />
                </div>
              </label>

              <!-- Card inputs -->
              <div v-if="paymentMethod === 'card'" class="px-4 pb-4 flex flex-col gap-3 border-t border-gray-100">
                <input
                  v-model="cardNumber"
                  type="text"
                  placeholder="Karta raqami"
                  maxlength="19"
                  class="w-full h-11 px-3 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <input
                  v-model="cardHolder"
                  type="text"
                  placeholder="Karta egasi"
                  class="w-full h-11 px-3 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <div class="grid grid-cols-2 gap-3">
                  <input
                    v-model="cardExpiry"
                    type="text"
                    placeholder="Amal qilish muddati"
                    class="h-11 px-3 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  <input
                    v-model="cardCvv"
                    type="text"
                    placeholder="CVV/CVC"
                    maxlength="3"
                    class="h-11 px-3 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <!-- Other payment methods -->
            <div class="border border-gray-200 rounded-xl px-4 py-3.5">
              <label class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 cursor-pointer" @click="paymentMethod = 'other'">
                <div>
                  <p class="text-sm font-medium text-gray-900">Boshqa to'lov usullari</p>
                  <p class="text-xs text-gray-400 mt-0.5">Boshqa to'lov usulini tanlang</p>
                </div>
                <div class="flex items-center flex-wrap gap-2">
                  <img src="~/assets/images/uzcard.png" alt="UzCard" class="h-5 w-auto object-contain" />
                  <img src="~/assets/images/humo.png" alt="HUMO" class="h-5 w-auto object-contain" />
                  <img src="~/assets/images/payme.png" alt="Payme" class="h-5 w-auto object-contain" />
                  <img src="~/assets/images/click.png" alt="Click" class="h-5 w-auto object-contain" />
                  <img src="~/assets/images/stripe.png" alt="Stripe" class="h-5 w-auto object-contain" />
                </div>
              </label>
            </div>

            <!-- Terms -->
            <p class="text-xs text-gray-500 mt-5 leading-relaxed">
              Ushbu bronni yuborish orqali men Triponik.com
              <a href="#" class="text-blue-600 hover:underline">Foydalanish shartlari</a>
              va
              <a href="#" class="text-blue-600 hover:underline">Maxfiylik siyosatini</a>
              o'qib chiqqanimni va ularga roziligimni tasdiqlayman.
            </p>
          </div>

        </div>

        <!-- RIGHT COLUMN: Summary -->
        <div class="w-full lg:w-72 shrink-0">
          <div class="bg-white rounded-2xl shadow-sm p-5 lg:sticky lg:top-6">

            <!-- Transfer row -->
            <div class="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
                <span class="text-sm font-medium text-gray-900">Transfer</span>
              </div>
              <span class="text-sm font-bold text-gray-900">{{ totalPrice }} $</span>
            </div>

            <!-- Total -->
            <div class="flex items-center justify-between mb-5">
              <span class="text-base font-bold text-gray-900">Jami:</span>
              <span class="text-base font-bold text-gray-900">{{ totalPrice }} $</span>
            </div>

            <!-- Checkboxes -->
            <div class="flex flex-col gap-3 mb-5">
              <label class="flex items-start gap-2.5 cursor-pointer">
                <input type="checkbox" v-model="agreeTerms"
                       class="w-4 h-4 mt-0.5 rounded accent-blue-600 shrink-0" />
                <span class="text-xs text-gray-600 leading-relaxed">
                  Tugmani bosish orqali men barcha shartlarga rozilik bildiraman
                  <a href="#" class="text-blue-600 hover:underline">hamda...</a>
                </span>
              </label>
              <label class="flex items-start gap-2.5 cursor-pointer">
                <input type="checkbox" v-model="agreeMarketing"
                       class="w-4 h-4 mt-0.5 rounded accent-blue-600 shrink-0" />
                <span class="text-xs text-gray-600 leading-relaxed">
                  Men Triponikdan yangiliklar, maxsus takliflarni olishni xohlayman va shu bilan shaxsiy ma'lumotlarimni qayta ishlashga roziligimni tasdiqlayman.
                </span>
              </label>
            </div>

            <!-- Pay button -->
            <button
              @click="handlePay"
              :disabled="!agreeTerms"
              class="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              To'lash
            </button>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const carName = computed(() => route.query.carName || 'Standart')
const fromLocation = computed(() => route.query.from || 'M.V nomidagi Domodedovo aeroporti. Lomonova, 1')
const toLocation = computed(() => route.query.to || 'Qizil maydon, 1')
const totalPrice = computed(() => route.query.price || '82.90')

const bookingTime = ref(route.query.time || '01:00')

const formattedDate = computed(() => {
  const d = route.query.pickupDate
  if (!d) return '23 iyul 2025'
  const uzMonths = ['yanvar','fevral','mart','aprel','may','iyun','iyul','avgust','sentyabr','oktyabr','noyabr','dekabr']
  const [y, m, day] = d.split('-')
  return `${parseInt(day)} ${uzMonths[parseInt(m) - 1]} ${y}`
})

const paymentMethod = ref('card')
const cardNumber = ref('')
const cardHolder = ref('')
const cardExpiry = ref('')
const cardCvv = ref('')
const agreeTerms = ref(true)
const agreeMarketing = ref(false)

const handlePay = () => {
  if (!agreeTerms.value) return
  router.push('/cars')
}

useSeoMeta({ title: 'To\'lov - Triponik' })
</script>

<style scoped>
</style>

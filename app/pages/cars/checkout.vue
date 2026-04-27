<template>
  <div class="bg-[#F8F9FB] min-h-screen relative overflow-hidden">
    <img src="~/assets/images/car-bg.png" class="h-[300px] w-full absolute top-0 left-0 z-0 object-cover object-center" />

    <div class="container mx-auto px-4 relative z-10 pt-16 pb-24">
      <div class="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-start">
        <main class="w-full lg:flex-1 bg-white rounded-[24px] p-6 sm:p-10 shadow-lg border border-gray-100">
          <div class="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 class="text-2xl font-black text-gray-900">Transfer paytidagi parametrlarni kiriting</h1>
              <p class="text-sm text-gray-500 mt-2">
                {{ carName }}
              </p>
            </div>
            <div class="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <UIcon name="i-heroicons-calendar-days" class="h-4 w-4" />
              <span>{{ formattedDate }}</span>
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <input v-model="form.firstName" placeholder="Ism" class="field-input" />
            <input v-model="form.lastName" placeholder="Familiya" class="field-input" />

            <div class="overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.08)]">
              <div class="flex h-[60px] items-stretch">
                <button type="button" class="flex w-[72px] items-center justify-center gap-2 border-r border-slate-200 bg-white px-3 text-slate-700">
                  <img src="https://flagcdn.com/w40/uz.png" alt="UZ" class="h-4 w-6 rounded-[2px] object-cover" />
                  <UIcon name="i-heroicons-chevron-down" class="h-4 w-4 text-slate-400" />
                </button>
                <label class="flex flex-1 flex-col justify-center px-4 text-left">
                  <span class="text-[11px] font-medium leading-none text-slate-500">Bog'lanish uchun telefon</span>
                  <div class="mt-1 flex items-center gap-2">
                    <span class="text-[16px] font-semibold text-slate-800">+998</span>
                    <input v-model="form.phone" placeholder="" class="w-full bg-transparent text-[16px] font-medium outline-none placeholder:text-slate-300" />
                  </div>
                </label>
              </div>
            </div>

            <input v-model="form.email" placeholder="Email (Tasdiqlash xabarini jo'natamiz)" class="field-input" />
          </div>

          <div class="mt-8 border-t border-slate-100 pt-7">
            <h2 class="text-[22px] font-extrabold text-slate-800">Haydovchilik guvohnamasi</h2>

            <div class="mt-5 grid gap-4 md:grid-cols-2">
              <input v-model="license.number" placeholder="Guvohnama raqami" class="field-input" />
              <div class="relative">
                <input v-model="license.date" type="date" class="field-input pr-12" />
                <UIcon name="i-heroicons-calendar-days" class="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
          </div>

          <div class="mt-8 border-t border-slate-100 pt-7">
            <h2 class="text-[22px] font-extrabold text-slate-800">To'lov usulini tanlang</h2>

            <div class="mt-5 rounded-[16px] border border-slate-200 bg-white p-4">
              <label class="flex items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <input v-model="paymentMethod" type="radio" value="card" />
                  <span class="font-medium text-slate-800">Kredit/Debit karta</span>
                </div>
                <div class="flex items-center gap-2">
                  <img src="~/assets/images/mastercard.png" alt="Mastercard" class="h-5" />
                  <img src="~/assets/images/visa.png" alt="Visa" class="h-5" />
                </div>
              </label>

              <div class="mt-4 grid gap-3">
                <input v-model="card.number" placeholder="Karta raqami" class="field-input" />
                <input v-model="card.name" placeholder="Karta egasi" class="field-input" />
                <div class="grid gap-3 md:grid-cols-2">
                  <input v-model="card.expiry" placeholder="Amal qilish muddati" class="field-input" />
                  <input v-model="card.cvv" placeholder="CVV/CVC" class="field-input" />
                </div>
              </div>
            </div>

            <div class="mt-4 rounded-[16px] border border-slate-200 bg-white p-4">
              <p class="text-sm font-medium text-slate-800">Boshqa to'lov usullari</p>
              <div class="mt-3 flex flex-wrap items-center gap-3">
                <img src="~/assets/images/uzcard.png" alt="UzCard" class="h-5" />
                <img src="~/assets/images/humo.png" alt="HUMO" class="h-5" />
                <img src="~/assets/images/payme.png" alt="Payme" class="h-5" />
                <img src="~/assets/images/click.png" alt="Click" class="h-5" />
                <img src="~/assets/images/stripe.png" alt="Stripe" class="h-5" />
              </div>
            </div>

            <p class="mt-5 text-xs text-gray-500 leading-relaxed">
              Ushbu bronni yuborish orqali men Triponik.com
              <a href="#" class="text-blue-600 hover:underline">Foydalanish shartlari</a>
              va
              <a href="#" class="text-blue-600 hover:underline">Maxfiylik siyosatini</a>
              o'qib chiqqanimni va ularga roziligimni tasdiqlayman.
            </p>
          </div>
        </main>

        <aside class="w-full lg:w-[380px] shrink-0 bg-white rounded-[24px] p-8 shadow-lg border border-gray-100">
          <h2 class="text-xl font-black text-gray-900 mb-8">Buyurtma tafsilotlari</h2>

          <div class="space-y-8">
            <div class="space-y-5">
              <p class="text-[14px] font-black text-gray-900 leading-none">{{ tripTitle }}</p>
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <div class="w-2.5 h-2.5 rounded-full bg-[#10B981] mt-1 shrink-0"></div>
                  <div>
                    <p class="text-[13px] font-black text-gray-900 leading-tight">{{ fromLocation }}</p>
                    <p class="text-[11px] font-bold text-gray-400 mt-1">{{ dateLabel }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-2.5 h-2.5 rounded-full bg-[#10B981] mt-1 shrink-0"></div>
                  <div>
                    <p class="text-[13px] font-black text-gray-900 leading-tight">{{ toLocation }}</p>
                    <p class="text-[11px] font-bold text-gray-400 mt-1">{{ timeLabel }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-[14px] font-black text-gray-900">Avtomobil</p>
              <div class="bg-[#F8F9FB] rounded-[16px] p-5 border border-gray-50">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-black text-[#1F2937] text-[14px]">{{ carName }}</h4>
                  <p class="font-black text-[#1F2937] text-[14px]">{{ priceLabel }}</p>
                </div>
                <p class="text-[11px] font-bold text-gray-400 mb-4">yoki shunga o'xshash</p>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-[11px] font-bold text-gray-400">Kiritilgan</span>
                  <span class="text-[13px] font-black text-[#1F2937]">750 km</span>
                </div>
                <div class="flex justify-center py-2">
                  <img src="/images/cars/car-image.png" class="w-[180px] h-auto object-contain" />
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-[14px] font-black text-gray-900">Qo'shimcha xizmatlar</p>
              <div class="flex items-center justify-between">
                <span class="text-[13px] font-medium text-gray-500">Oyna va shinalar himoyasi</span>
                <span class="text-[13px] font-black text-gray-900">3,600 so'm</span>
              </div>
            </div>

            <div class="bg-[#1F2937] rounded-[16px] p-6 flex items-center justify-between">
              <span class="text-white font-bold text-[14px]">Ijara summasi:</span>
              <span class="text-white font-black text-[18px]">{{ priceLabel }}</span>
            </div>

            <button
              @click="handlePay"
              :disabled="!agreeTerms"
              class="w-full py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-[16px] transition-all text-[15px] shadow-lg shadow-blue-100 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              To'lash
            </button>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const carName = computed(() => route.query.carName || 'Standart')
const tripTitle = computed(() => route.query.tripTitle || '3 kunga ijara')
const fromLocation = computed(() => route.query.from || 'Moskva, Baumanskaya, Rossiya')
const toLocation = computed(() => route.query.to || 'Moskva, Baumanskaya, Rossiya')
const priceLabel = computed(() => `${route.query.price || '4 360'} $`)
const dateLabel = computed(() => route.query.pickupDate || '25 iyul 2025, 15:00')
const timeLabel = computed(() => route.query.time || '28 iyul 2025, 15:00')
const formattedDate = computed(() => route.query.pickupDate || '23 iyul 2025, 01:00')

const form = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
})

const license = ref({
  number: '',
  date: ''
})

const card = ref({
  number: '',
  name: '',
  expiry: '',
  cvv: ''
})

const paymentMethod = ref('card')
const agreeTerms = ref(true)

const handlePay = () => {
  if (!agreeTerms.value) return
  router.push('/profile/bookings')
}

useSeoMeta({
  title: 'To\'lov - Triponik',
  description: 'Avtomobil ijarasi uchun to\'lov sahifasi.'
})
</script>

<style scoped>
.field-input {
  height: 60px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgb(226 232 240);
  background: #ffffff;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 500;
  color: rgb(30 41 59);
  outline: none;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field-input:focus {
  border-color: #2f66f0;
  box-shadow: 0 0 0 4px rgba(47, 102, 240, 0.1);
}

.field-input::placeholder {
  color: rgb(148 163 184);
}
</style>

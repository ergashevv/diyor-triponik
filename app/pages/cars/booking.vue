<template>
  <div class="bg-[#F8F9FB] min-h-screen relative overflow-hidden font-sans">
    <!-- Background Image -->
    <img src="~/assets/images/car-bg.png" class="h-[340px] w-full absolute top-0 left-0 z-0 object-cover object-center" />

    <div class="container mx-auto px-4 relative z-10 pt-16 pb-24">
      <div class="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-start">
        
        <!-- Main Content -->
        <main class="flex-1 space-y-12">
          
          <!-- Top Info Card (Unified from Figma) -->
          <div class="bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row overflow-hidden">
             <!-- Left: Car Details -->
             <div class="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-100/50">
                <h3 class="text-[24px] font-black text-gray-900 mb-1 leading-none tracking-tight">{{ carName }}</h3>
                <p class="text-[12px] font-bold text-gray-400 mb-2 leading-tight">Chery Tiggo yoki shunga o'xshash</p>
                <div class="flex items-center gap-2 text-gray-900 font-bold text-[13px] mb-8">
                   <UIcon name="i-heroicons-user" class="w-4 h-4 text-gray-400" />
                   <span>3 tagacha yo'lovchi</span>
                </div>
                <div class="flex justify-start">
                   <img src="/images/cars/car-image.png" class="w-[240px] h-auto object-contain" />
                </div>
             </div>
             <!-- Right: Trip Info Timeline -->
             <div class="flex-1 p-8 bg-white flex flex-col justify-between">
                <div>
                  <div class="flex justify-between items-start mb-8">
                     <h3 class="text-[20px] font-black text-gray-900 leading-none">{{ tripTitle }}</h3>
                     <span class="text-[13px] font-bold text-gray-400">{{ formattedDate }}</span>
                  </div>
                  <!-- Vertical Timeline -->
                  <div class="space-y-6 mb-10 pl-1">
                     <div class="flex items-start gap-4">
                        <div class="w-2.5 h-2.5 rounded-full bg-[#10B981] mt-1.5 shrink-0"></div>
                        <div class="space-y-1">
                           <p class="text-[14px] font-black text-gray-900 leading-none">{{ fromLocation }}</p>
                           <p class="text-[11px] font-bold text-gray-400">{{ pickupDate }}</p>
                        </div>
                     </div>
                     <div class="flex items-start gap-4">
                        <div class="w-2.5 h-2.5 rounded-full bg-[#10B981] mt-1.5 shrink-0"></div>
                        <div class="space-y-1">
                           <p class="text-[14px] font-black text-gray-900 leading-none">{{ toLocation }}</p>
                           <p class="text-[11px] font-bold text-gray-400">{{ pickupTime }}</p>
                        </div>
                     </div>
                  </div>
                </div>
                <!-- Premium Specs Icons -->
                <div class="flex items-center gap-3">
                   <div class="flex items-center gap-2 bg-[#2563EB] text-white px-4 py-3 rounded-[12px] shadow-lg shadow-blue-100">
                      <UIcon name="i-heroicons-view-columns" class="w-5 h-5" />
                      <span class="text-[15px] font-black">4</span>
                   </div>
                   <div class="flex items-center gap-2 bg-[#2563EB] text-white px-4 py-3 rounded-[12px] shadow-lg shadow-blue-100">
                      <UIcon name="i-heroicons-briefcase" class="w-5 h-5" />
                      <span class="text-[15px] font-black">1</span>
                   </div>
                   <div class="flex items-center gap-2 bg-[#2563EB] text-white px-4 py-3 rounded-[12px] shadow-lg shadow-blue-100">
                      <UIcon name="i-heroicons-shield-check" class="w-5 h-5" />
                      <span class="text-[15px] font-black">4</span>
                   </div>
                </div>
             </div>
          </div>

          <!-- Kontakt ma'lumotlari -->
          <div class="space-y-6">
             <h2 class="text-[20px] font-black text-gray-900 tracking-tight">Kontakt ma'lumotlari</h2>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 rounded-[16px] h-[64px] px-6 flex items-center focus-within:border-blue-400 transition-colors">
                  <input v-model="form.firstName" placeholder="Ism" class="w-full bg-transparent font-black text-gray-900 text-[15px] outline-none placeholder:text-gray-300 placeholder:font-bold" />
                </div>
                <div class="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 rounded-[16px] h-[64px] px-6 flex items-center focus-within:border-blue-400 transition-colors">
                  <input v-model="form.lastName" placeholder="Familiya" class="w-full bg-transparent font-black text-gray-900 text-[15px] outline-none placeholder:text-gray-300 placeholder:font-bold" />
                </div>
                
                <div class="flex gap-4">
                   <!-- Country Select -->
                   <div class="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 rounded-[16px] px-5 flex items-center gap-3 shrink-0 cursor-pointer hover:border-gray-200 transition-all">
                      <img src="https://flagcdn.com/w20/uz.png" class="w-[22px] h-auto rounded-sm" />
                      <UIcon name="i-heroicons-chevron-down" class="w-4 h-4 text-gray-400" />
                   </div>
                   <!-- Phone Input (Figma Style) -->
                   <div class="flex-1 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 rounded-[16px] px-6 py-3 flex flex-col justify-center focus-within:border-blue-400 transition-colors">
                      <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Bog'lanish uchun telefon</span>
                      <div class="flex items-center gap-2">
                         <span class="font-black text-gray-900 text-[16px]">+998</span>
                         <input v-model="form.phone" class="w-full bg-transparent font-black text-gray-900 outline-none text-[16px]" placeholder="00 000 00 00" />
                      </div>
                   </div>
                </div>

                <div class="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 rounded-[16px] h-[64px] px-6 flex items-center focus-within:border-blue-400 transition-colors">
                  <input v-model="form.email" placeholder="Email (Tasdiqlash xabarini jo'natamiz)" class="w-full bg-transparent font-black text-gray-900 text-[15px] outline-none placeholder:text-gray-300 placeholder:font-bold" />
                </div>
             </div>
          </div>

          <!-- Haydovchilik guvohnamasi -->
          <div class="space-y-6">
             <h2 class="text-[20px] font-black text-gray-900 tracking-tight">Haydovchilik guvohnamasi</h2>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="bg-white shadow-[0_4px_25_rgba(0,0,0,0.03)] border border-gray-100 rounded-[16px] h-[64px] px-6 flex items-center focus-within:border-blue-400 transition-colors">
                   <input v-model="license.number" placeholder="Guvohnama raqami" class="w-full bg-transparent font-black text-gray-900 text-[15px] outline-none placeholder:text-gray-300 placeholder:font-bold" />
                </div>
                <div class="bg-white shadow-[0_4px_25_rgba(0,0,0,0.03)] border border-gray-100 rounded-[16px] h-[64px] px-6 flex items-center justify-between focus-within:border-blue-400 transition-colors">
                   <input v-model="license.date" type="text" placeholder="Berilgan sana" class="flex-1 bg-transparent font-black text-gray-900 text-[15px] outline-none placeholder:text-gray-300 placeholder:font-bold" />
                   <UIcon name="i-heroicons-calendar" class="w-6 h-6 text-gray-300" />
                </div>
             </div>
          </div>

          <!-- To'lov usuli -->
          <div class="space-y-6">
              <h2 class="text-[20px] font-black text-gray-900 tracking-tight">To'lov usulini tanlang</h2>
              
              <div class="bg-white rounded-[24px] p-10 shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-100">
                 <div class="flex items-center justify-between mb-10">
                    <div class="flex items-center gap-4">
                       <div class="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                          <div class="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                       </div>
                       <span class="font-black text-[18px] text-gray-900">Kredit/Debit karta</span>
                    </div>
                    <div class="flex gap-3">
                       <img src="~/assets/images/mastercard.png" class="h-6 object-contain" />
                       <img src="~/assets/images/visa.png" class="h-6 object-contain" />
                    </div>
                 </div>

                 <!-- Inner Card Form -->
                 <div class="bg-[#F9FAFB] rounded-[20px] border border-gray-100 p-8 space-y-6">
                    <div class="space-y-1 border-b border-gray-200/60 pb-2">
                       <label class="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">Karta raqami</label>
                       <input v-model="card.number" placeholder="0000 0000 0000 0000" class="w-full bg-transparent font-black text-gray-900 text-[16px] outline-none" />
                    </div>
                    <div class="space-y-1 border-b border-gray-200/60 pb-2">
                       <label class="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">Karta egasi</label>
                       <input v-model="card.name" placeholder="ISM FAMILIYA" class="w-full bg-transparent font-black text-gray-900 text-[16px] outline-none" />
                    </div>
                    <div class="grid grid-cols-2 gap-10">
                       <div class="space-y-1 border-b border-gray-200/60 pb-2">
                          <label class="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">Amal qilish muddati</label>
                          <input v-model="card.expiry" placeholder="00 / 00" class="w-full bg-transparent font-black text-gray-900 text-[16px] outline-none" />
                       </div>
                       <div class="space-y-1 border-b border-gray-200/60 pb-2">
                          <label class="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">CVV / CVC</label>
                          <input v-model="card.cvv" placeholder="000" class="w-full bg-transparent font-black text-gray-900 text-[16px] outline-none" />
                       </div>
                    </div>
                 </div>

                 <!-- Payment Partners -->
                 <div class="mt-12 pt-8 border-t border-gray-50">
                    <div class="flex items-center justify-between mb-8">
                       <div>
                          <p class="text-[16px] font-black text-gray-900">Boshqa to'lov usullari</p>
                          <p class="text-[11px] font-bold text-gray-400">Boshqa to'lov usulini tanlang</p>
                       </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-10 opacity-40 grayscale group hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                       <img src="~/assets/images/uzcard.png" class="h-6 object-contain" />
                       <img src="~/assets/images/humo.png" class="h-6 object-contain" />
                       <img src="~/assets/images/payme.png" class="h-6 object-contain" />
                       <img src="~/assets/images/click.png" class="h-6 object-contain" />
                       <img src="~/assets/images/stripe.png" class="h-6 object-contain" />
                    </div>
                 </div>
              </div>
          </div>
          
          <div class="text-[13px] text-gray-400 font-bold leading-relaxed pt-2 max-w-4xl">
            Ushbu bronni yuborish orqali men Triponik.com <span class="text-blue-600 underline cursor-pointer">Foydalanish shartlari</span> va <span class="text-blue-600 underline cursor-pointer">Maxfiylik siyosatlarini</span> qabul qilganimni va ularga roziligimni tasdiqlayman.
          </div>
        </main>

        <!-- Sidebar Summary -->
        <aside class="w-full lg:w-[400px] shrink-0 sticky top-24">
           <div class="bg-white rounded-[24px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden">
              <div class="p-10">
                 <h2 class="text-xl font-black text-gray-900 mb-10">Buyurtma tafsilotlari</h2>
                 <div class="space-y-10">
                    
                    <div class="space-y-6">
                       <div class="flex items-center justify-between border-b border-gray-50 pb-5">
                          <div class="flex items-center gap-4">
                             <UIcon name="i-heroicons-chevron-down" class="w-5 h-5 text-gray-400" />
                             <span class="font-black text-[15px] text-gray-900 uppercase tracking-widest">Transfer</span>
                          </div>
                          <span class="font-black text-[15px] text-gray-900 uppercase tracking-widest">{{ priceLabel }}</span>
                       </div>

                       <!-- Inner Trip Card -->
                       <div class="bg-[#F8F9FB] rounded-[20px] p-6 border border-gray-50 space-y-6">
                          <div class="flex items-center justify-between">
                             <span class="text-[14px] font-black text-gray-900">{{ carName }}</span>
                             <span class="text-[14px] font-black text-gray-900">{{ priceLabel }}</span>
                          </div>
                          <div class="space-y-4">
                             <div class="flex items-start gap-3">
                                <div class="w-2.5 h-2.5 rounded-full bg-[#10B981] mt-1 shrink-0"></div>
                                <div class="space-y-0.5">
                                   <p class="text-[13px] font-black text-gray-900">{{ fromLocation }}</p>
                                   <p class="text-[11px] font-bold text-gray-400">{{ pickupDate }}</p>
                                </div>
                             </div>
                             <div class="flex items-start gap-3">
                                <div class="w-2.5 h-2.5 rounded-full bg-[#10B981] mt-1 shrink-0"></div>
                                <div class="space-y-0.5">
                                   <p class="text-[13px] font-black text-gray-900">{{ toLocation }}</p>
                                   <p class="text-[11px] font-bold text-gray-400">{{ pickupTime }}</p>
                                </div>
                             </div>
                          </div>
                          <div class="flex justify-center pt-2">
                             <img src="/images/cars/car-image.png" class="w-[180px] h-auto object-contain" />
                          </div>
                       </div>
                    </div>

                    <div class="pt-4 space-y-8">
                       <div class="flex items-center justify-between">
                          <span class="text-[18px] font-black text-gray-900 uppercase tracking-wider">Jami:</span>
                          <span class="text-[20px] font-black text-gray-900">{{ priceLabel }}</span>
                       </div>
                       
                       <div class="space-y-5">
                          <div class="flex items-start gap-3">
                             <input type="checkbox" v-model="agreeTerms" class="w-5 h-5 mt-0.5 rounded-lg border-gray-300 text-blue-600 focus:ring-blue-500 shadow-sm" />
                             <p class="text-[11px] font-bold text-gray-400 leading-tight">
                               Tugmani bosish orqali men barcha shartlarga rozilik bildiraman hamda barcha ma'lumotlarni tasdiqlayman.
                             </p>
                          </div>
                       </div>

                       <button @click="handlePay" :disabled="!agreeTerms" class="w-full py-5 bg-[#2563EB] hover:bg-blue-700 text-white font-black rounded-[20px] shadow-xl shadow-blue-100 transition-all text-[18px] uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed">
                          To'lash
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </aside>

      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

// Data mapping from Query Params (matching user logic)
const carName = computed(() => route.query.carName || 'Standart')
const tripTitle = computed(() => route.query.tripTitle || '3 kunga ijara')
const fromLocation = computed(() => route.query.from || 'Moskva, Baumanskaya, Rossiya')
const toLocation = computed(() => route.query.to || 'Moskva, Baumanskaya, Rossiya')
const priceLabel = computed(() => `${route.query.price || '4 360'} $`)
const pickupDate = computed(() => route.query.pickupDate || '25 iyul 2025, 15:00')
const pickupTime = computed(() => route.query.time || '28 iyul 2025, 15:00')
const formattedDate = computed(() => '23 iyul 2025, 01:00')

const form = ref({
  firstName: '',
  lastName: '',
  phone: '', // Fixed: Added missing phone field to avoid runtime errors
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

const agreeTerms = ref(true)

const handlePay = () => {
  if (!agreeTerms.value) return
  router.push({
    path: '/cars/checkout',
    query: { ...route.query }
  })
}

useSeoMeta({
  title: 'To\'lov - Triponik',
  description: 'Xavfsiz to\'lov va band qilish sahifasi.'
})
</script>

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
            <svg class="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            <span class="hidden sm:inline">O'rindiq</span>
          </NuxtLink>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-900 font-medium whitespace-nowrap">Yo'lovchilar</span>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-400 whitespace-nowrap hidden lg:inline">Tekshirish</span>
          <span class="text-gray-400 whitespace-nowrap lg:hidden">Teksh.</span>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-400 whitespace-nowrap">To'lov</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-3 md:px-4 py-4 md:py-6 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <!-- Left Column - Forms -->

        <div class="lg:col-span-2 space-y-4 md:space-y-6">
          <!-- Passenger Section -->
          <div class="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6">
            <div class="mb-4 md:mb-6">
              <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-1">Yo'lovchi</h2>
              <p class="text-xs md:text-sm text-gray-600">12 yoshdan katta, Katta yoshli</p>
            </div>

            <!-- Passenger Form -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
              <!-- Familiya -->
              <div>
                <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Familiya</label>
                <input
                  v-model="passenger.lastName"
                  type="text"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                />
              </div>

              <!-- Ismi -->
              <div>
                <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Ismi</label>
                <input
                  v-model="passenger.firstName"
                  type="text"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                />
              </div>

              <!-- Jins -->
              <div>
                <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Jins</label>
                <select
                  v-model="passenger.gender"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                >
                  <option
                    v-for="option in genderOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <!-- Tug'ilgan kuni -->
              <div>
                <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Tug'ilgan kuni</label>
                <input
                  v-model="passenger.birthDate"
                  type="date"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                />
              </div>

              <!-- Hujjat -->
              <div>
                <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Hujjat</label>
                <select
                  v-model="passenger.documentType"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                >
                  <option
                    v-for="option in documentTypes"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <!-- Seriya va raqami -->
              <div>
                <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Seriya va raqami</label>
                <input
                  v-model="passenger.documentNumber"
                  type="text"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                />
              </div>
            </div>

            <!-- Add Passenger Button -->
            <button class="w-full py-2.5 md:py-3 border-2 border-dashed border-blue-400 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="text-sm md:text-base font-medium">Yo'lovchi qo'shish</span>
            </button>
          </div>

          <!-- Buyer (Xaridor) Section -->
          <div class="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6">
            <div class="mb-4 md:mb-6">
              <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-1">Xaridor</h2>
              <p class="text-xs md:text-sm text-gray-600">Biletni yuboramiz va o'zgarishlar haqida xabar beramiz</p>
            </div>

            <!-- Buyer Form -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
              <!-- Familiya -->
              <div>
                <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Familiya</label>
                <input
                  v-model="buyer.lastName"
                  type="text"
                  placeholder="Familiya kiriting"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                />
              </div>

              <!-- Ismi -->
              <div>
                <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Ismi</label>
                <input
                  v-model="buyer.firstName"
                  type="text"
                  placeholder="Ism kiriting"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                />
              </div>

              <!-- Elektron pochta -->
              <div>
                <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Elektron pochta</label>
                <input
                  v-model="buyer.email"
                  type="email"
                  placeholder="email@example.com"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                />
              </div>

              <!-- Telefon -->
              <div>
                <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Telefon</label>
                <input
                  v-model="buyer.phone"
                  type="tel"
                  placeholder="+998 XX XXX-XX-XX"
                  class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                />
              </div>
            </div>

            <!-- Collapsible Sections -->
            <div class="space-y-2 md:space-y-3">
              <!-- Imtiyozli tarif -->
              <button
                @click="toggleSection('benefits')"
                class="w-full flex items-center justify-between py-2.5 md:py-3 border-t border-gray-200"
              >
                <span class="text-xs md:text-sm font-medium text-gray-900">Imtiyozli tarif va transport talablari</span>
                <svg
                  :class="['w-4 h-4 md:w-5 md:h-5 text-gray-400 transition-transform shrink-0', expandedSections.benefits && 'rotate-180']"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Temir yo'llar soddilik dasturi -->
              <button
                @click="toggleSection('railway')"
                class="w-full flex items-center justify-between py-3 border-t border-gray-200"
              >
                <span class="text-sm font-medium text-gray-900">Temir yo'llar soddilik dasturi</span>
                <svg
                  :class="['w-5 h-5 text-gray-400 transition-transform', expandedSections.railway && 'rotate-180']"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Agar yo'lovchi paramedik bo'lsa -->
              <button
                @click="toggleSection('paramedic')"
                class="w-full flex items-center justify-between py-3 border-t border-gray-200"
              >
                <span class="text-sm font-medium text-gray-900">Agar yo'lovchi paramedik bo'lsa</span>
                <svg
                  :class="['w-5 h-5 text-gray-400 transition-transform', expandedSections.paramedic && 'rotate-180']"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Aloqa ma'lumotlari -->
              <button
                @click="toggleSection('contact')"
                class="w-full flex items-center justify-between py-3 border-t border-b border-gray-200"
              >
                <span class="text-sm font-medium text-gray-900">Aloqa ma'lumotlari</span>
                <svg
                  :class="['w-5 h-5 text-gray-400 transition-transform', expandedSections.contact && 'rotate-180']"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Contact Details (Expanded) -->
              <div v-if="expandedSections.contact" class="pb-3 md:pb-4">
                <div class="space-y-3 md:space-y-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Telefon <span class="text-red-500">*</span></label>
                      <input
                        v-model="contactInfo.phone"
                        type="tel"
                        placeholder="+998 XX XXX-XX-XX"
                        class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label class="block text-xs md:text-sm text-gray-700 mb-1.5 md:mb-2">Elektron pochta</label>
                      <input
                        v-model="contactInfo.email"
                        type="email"
                        placeholder="email@example.com"
                        class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                      />
                    </div>
                  </div>
                  <p class="text-[10px] md:text-xs text-gray-600">
                    Telefon va elektron pochta transportdagi o'zgarishlar haqida xabar berish uchun va favqulodda xakatlar uchun.
                    Kompaniya ma'lumotlarni shaxsiy Kaliningrad shahrga sayohat uchun suodalashtirilgan poyezd chiptalarini rasmiylashtirish paylida ma'lumot berish uchun ishlatiladi.
                  </p>
                  <div class="flex flex-col sm:flex-row gap-2 md:gap-3">
                    <a href="#" class="text-xs md:text-sm text-blue-600 hover:underline">Shaxsiy ma'lumotlarim qayta ishlanishi siyosati</a>
                    <a href="#" class="text-xs md:text-sm text-blue-600 hover:underline">Yuridik ma'lumotlar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6 lg:sticky lg:top-6">
            <!-- Route Info -->
            <div class="mb-4 md:mb-6">
              <button class="text-xs md:text-sm text-blue-600 hover:underline mb-2">Tanlash</button>
              <div class="flex items-center gap-2 mb-1">
                <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4z"/>
                </svg>
                <span class="text-sm md:text-base font-medium text-gray-900">Sankt-Peterburg ⇄ Moskva</span>
              </div>
              <p class="text-xs md:text-sm text-gray-600">1-4 sent • 1 yo'lovchi • ekonom</p>
            </div>

            <!-- Price -->
            <div class="mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200">
              <div class="flex items-baseline gap-2 mb-1">
                <span class="text-2xl md:text-3xl font-bold text-gray-900">6 715 ₽</span>
                <svg class="w-4 h-4 md:w-5 md:h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-xs md:text-sm text-gray-600">1ta yo'lovchi uchun</p>
            </div>

            <!-- Terms Checkboxes -->
            <div class="space-y-2.5 md:space-y-3 mb-4 md:mb-6">
              <label class="flex items-start gap-2.5 md:gap-3 cursor-pointer">
                <input
                  v-model="terms.privacy"
                  type="checkbox"
                  class="w-4 h-4 md:w-5 md:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5 shrink-0"
                />
                <span class="text-xs md:text-sm text-gray-700">Ma'lumotlarim qayta ishlanishiga rozilik bildiraman</span>
              </label>
              <label class="flex items-start gap-2.5 md:gap-3 cursor-pointer">
                <input
                  v-model="terms.advertisement"
                  type="checkbox"
                  class="w-4 h-4 md:w-5 md:h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5 shrink-0"
                />
                <span class="text-xs md:text-sm text-gray-700">Ma'lumotlarimdan reklama maqsadlarida aksiya va elonlar uchun foydalanishga <a href="#" class="text-blue-600 hover:underline">ruxsat beraman</a></span>
              </label>
            </div>

            <!-- Continue Button -->
            <button
              @click="handleContinue"
              :disabled="!isFormValid"
              :class="[
                'w-full py-3 md:py-3.5 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all',
                isFormValid
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              ]"
            >
              Davom etish
            </button>

            <!-- Note -->
            <p class="text-[10px] md:text-xs text-gray-500 mt-3 md:mt-4 text-center">
              "Davom etish" tugmasini bosish orqali siz <a href="#" class="text-blue-600 hover:underline">ommaviy oferta shartlari</a>, biletlarni xarid qilish va bron qilish qoidalari, Narxga qaytarish qaysi hogi kiradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Yo'lovchilar ma'lumotlari - Triponik",
  description: "Yo'lovchilar ma'lumotlarini kiriting"
})

// Static data from composable
const { genderOptions, documentTypes, phoneCountryCodes, countries } = useStaticData()

// Passenger data
const passenger = ref({
  lastName: '',
  firstName: '',
  gender: '',
  birthDate: '',
  documentType: '',
  documentNumber: ''
})

// Buyer data
const buyer = ref({
  lastName: '',
  firstName: '',
  email: '',
  phone: ''
})

// Contact info
const contactInfo = ref({
  phone: '',
  email: ''
})

// Terms acceptance
const terms = ref({
  privacy: false,
  advertisement: false
})

// Expanded sections
const expandedSections = ref({
  benefits: false,
  railway: false,
  paramedic: false,
  contact: true
})

// Toggle section
const toggleSection = (section) => {
  expandedSections.value[section] = !expandedSections.value[section]
}

// Check if form is valid
const isFormValid = computed(() => {
  return passenger.value.lastName &&
         passenger.value.firstName &&
         passenger.value.gender &&
         passenger.value.birthDate &&
         passenger.value.documentType &&
         passenger.value.documentNumber &&
         buyer.value.lastName &&
         buyer.value.firstName &&
         buyer.value.email &&
         buyer.value.phone &&
         contactInfo.value.phone &&
         terms.value.privacy
})

// Handle continue
const handleContinue = () => {
  if (!isFormValid.value) return

  console.log('Passenger:', passenger.value)
  console.log('Buyer:', buyer.value)
  console.log('Contact:', contactInfo.value)

  // Navigate to checkout page
  navigateTo('/trains/checkout')
}
</script>

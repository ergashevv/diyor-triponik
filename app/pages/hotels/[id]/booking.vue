<template>
  <!-- Loading State -->
  <HotelsBookingSkeleton v-if="loading" />

  <!-- Main Content -->
  <div v-else class="bg-gray-50 min-h-screen">
    <!-- Breadcrumb -->
    <div class="bg-white border-b">
      <div class="container mx-auto px-3 md:px-4 py-2 md:py-3">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center gap-1.5 md:gap-2 flex-wrap text-xs md:text-sm text-gray-600">
            <NuxtLink to="/" class="hover:text-blue-600">Bosh sahifa</NuxtLink>
            <span>›</span>
            <NuxtLink to="/hotels" class="hover:text-blue-600">Mehmonxonalar</NuxtLink>
            <span v-if="hotelDetails">›</span>
            <NuxtLink
              v-if="hotelDetails"
              :to="{
                path: '/hotels/search',
                query: {
                  destination: hotelDetails.destinationName,
                  destinationCode: hotelDetails.destinationCode,
                  checkIn: hotelDetails.checkIn?.split('T')[0],
                  checkOut: hotelDetails.checkOut?.split('T')[0],
                  adults: adults,
                  children: children,
                  rooms: rooms
                }
              }"
              class="hover:text-blue-600"
            >
              {{ hotelDetails.destinationName }}
            </NuxtLink>
            <span v-if="hotelDetails">›</span>
            <NuxtLink
              v-if="hotelDetails"
              :to="{
                path: `/hotels/${hotelId}`,
                query: {
                  rateKey: route.query.rateKey,
                  checkIn: hotelDetails.checkIn?.split('T')[0],
                  checkOut: hotelDetails.checkOut?.split('T')[0],
                  adults: adults,
                  children: children,
                  rooms: rooms
                }
              }"
              class="hover:text-blue-600"
            >
              {{ hotelDetails.name }}
            </NuxtLink>
            <span>›</span>
            <span class="text-gray-900 font-semibold">Bron qilish</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-3 md:px-4 py-4 md:py-6">
      <div class="max-w-6xl mx-auto">
        <!-- Hotel Summary (Full Width) -->
            <div v-if="hotelDetails" class="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm">
              <div class="flex flex-col md:flex-row gap-4 md:gap-6">
                <!-- Hotel Image -->
                <div class="shrink-0 w-full md:w-64">
                  <img
                    :src="hotelDetails.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200'"
                    :alt="hotelDetails.name"
                    class="w-full md:w-64 h-48 md:h-40 rounded-lg object-cover"
                  />
                </div>

                <!-- Hotel Details -->
                <div class="flex-1 min-w-0">
                  <h1 class="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-1">{{ hotelDetails.name }}</h1>
                  <div class="flex items-center gap-2 mb-2 flex-wrap">
                    <div class="flex">
                      <Icon v-for="i in parseInt(hotelDetails.categoryCode?.replace(/[^0-9]/g, '') || 3)" :key="i" name="mdi:star" class="text-yellow-500 text-xs md:text-sm" />
                    </div>
                    <span class="text-xs text-gray-600">{{ hotelDetails.categoryName }}</span>
                  </div>
                  <p class="text-xs md:text-sm text-gray-600 mb-3">{{ hotelDetails.destinationName }}, {{ hotelDetails.zoneName }}</p>
                  <div v-if="hotelDetails.rooms && hotelDetails.rooms.length > 0">
                    <p class="text-sm font-semibold text-gray-900 mb-1">{{ hotelDetails.rooms[0].name }}</p>
                    <p class="text-xs text-gray-500 mb-1">{{ hotelDetails.rooms[0].code }}</p>
                  </div>

                  <!-- Amenities -->
                  <div class="flex flex-wrap gap-2 md:gap-3 text-xs mt-4 md:mt-9">
                    <div v-if="hotelDetails.rooms && hotelDetails.rooms[0]?.rates && hotelDetails.rooms[0].rates[0]?.boardName" class="flex items-center gap-1.5">
                      <Icon name="mdi:silverware-fork-knife" class="text-gray-600 text-sm md:text-base" />
                      <span class="text-gray-700 text-xs">{{ hotelDetails.rooms[0].rates[0].boardName }}</span>
                    </div>
                    <div v-if="hotelDetails.modificationPolicies?.cancellation" class="flex items-center gap-1.5">
                      <Icon name="mdi:check-circle" class="text-green-600 text-sm md:text-base" />
                      <span class="text-green-600 text-xs">Bekor qilish mumkin</span>
                    </div>
                    <div v-else class="flex items-center gap-1.5">
                      <Icon name="mdi:close-circle" class="text-red-600 text-sm md:text-base" />
                      <span class="text-red-600 text-xs">Bekor qilish mumkin emas</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <Icon :name="hotelDetails.paymentDataRequired ? 'mdi:credit-card' : 'mdi:credit-card-off'" class="text-gray-600 text-sm md:text-base" />
                      <span class="text-gray-700 text-xs">{{ hotelDetails.paymentDataRequired ? 'Oldindan to\'lash' : 'Joyida to\'lash' }}</span>
                    </div>
                  </div>
                </div>

                <!-- Right Column: Dates -->
                <div class="shrink-0 flex flex-row md:flex-col gap-4 md:gap-0 md:text-right border-t md:border-t-0 pt-4 md:pt-0 bg-[#F8FAFC] rounded-lg p-3 md:p-2 mt-4 md:mt-0 w-full md:w-auto">
                  <div class="flex-1 md:mb-4">
                    <p class="text-xs text-gray-600 mb-1">Kirish:</p>
                    <p class="text-sm md:text-base font-semibold text-gray-900">{{ formatDate(hotelDetails.checkIn) }}</p>
                  </div>
                  <div class="flex-1">
                    <p class="text-xs text-gray-600 mb-1">Chiqish:</p>
                    <p class="text-sm md:text-base font-semibold text-gray-900">{{ formatDate(hotelDetails.checkOut) }}</p>
                  </div>
                </div>
              </div>
            </div>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <!-- Left Column - Booking Form -->
          <div class="lg:col-span-2 space-y-4">
            <!-- Quick Login -->
            <div class="bg-white rounded-lg md:rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm">
              <button class="w-full flex items-center justify-between text-left" @click="quickLoginOpen = !quickLoginOpen">
                <span class="text-xs md:text-sm font-medium text-blue-600">Tezroq bron qilish uchun tizimga kiring</span>
                <Icon :name="quickLoginOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-blue-600 text-lg md:text-xl" />
              </button>
            </div>

            <!-- Guest Information -->
            <div class="bg-white rounded-lg md:rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm">
              <div class="flex items-start gap-2 md:gap-3 mb-4">
                <div class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm md:text-base font-semibold shrink-0">
                  1
                </div>
                <div class="flex-1">
                  <h2 class="text-base md:text-lg font-bold text-gray-900">Mehmon ma'lumotlari</h2>
                  <p class="text-xs md:text-sm text-gray-600">Iltimos, barcha maydonlarni to'ldiring</p>
                </div>
              </div>

              <div class="space-y-4">
                <!-- Email -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    E-mail*
                  </label>
                  <input
                    v-model="guestForm.email"
                    @blur="formErrors.email = validateEmail(guestForm.email)"
                    @input="formErrors.email && (formErrors.email = '')"
                    type="email"
                    required
                    placeholder="example@gmail.com"
                    :class="[
                      'w-full px-3 md:px-4 py-2.5 md:py-3 border rounded-lg focus:ring-2 focus:border-blue-500 outline-none text-sm md:text-base text-gray-900',
                      formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                    ]"
                  />
                  <p v-if="formErrors.email" class="text-red-600 text-sm mt-1">{{ formErrors.email }}</p>
                </div>

                <!-- Name Fields -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Familiya*
                    </label>
                    <input
                      v-model="guestForm.surname"
                      @blur="formErrors.surname = validateName(guestForm.surname, 'Familiya')"
                      @input="handleNameInput($event, 'surname')"
                      type="text"
                      required
                      minlength="2"
                      placeholder="Doe"
                      :class="[
                        'w-full px-3 md:px-4 py-2.5 md:py-3 border rounded-lg focus:ring-2 focus:border-blue-500 outline-none text-sm md:text-base text-gray-900',
                        formErrors.surname ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      ]"
                    />
                    <p v-if="formErrors.surname" class="text-red-600 text-sm mt-1">{{ formErrors.surname }}</p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Ism*
                    </label>
                    <input
                      v-model="guestForm.name"
                      @blur="formErrors.name = validateName(guestForm.name, 'Ism')"
                      @input="handleNameInput($event, 'name')"
                      type="text"
                      required
                      minlength="2"
                      placeholder="John"
                      :class="[
                        'w-full px-3 md:px-4 py-2.5 md:py-3 border rounded-lg focus:ring-2 focus:border-blue-500 outline-none text-sm md:text-base text-gray-900',
                        formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      ]"
                    />
                    <p v-if="formErrors.name" class="text-red-600 text-sm mt-1">{{ formErrors.name }}</p>
                  </div>
                </div>

                <!-- Phone -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Telefon*
                  </label>
                  <input
                    v-model="guestForm.phone"
                    @blur="formErrors.phone = validatePhone(guestForm.phone)"
                    @input="handlePhoneInput"
                    type="tel"
                    inputmode="numeric"
                    required
                    maxlength="13"
                    pattern="\+998[0-9]{9}"
                    placeholder="+998901234567"
                    :class="[
                      'w-full px-3 md:px-4 py-2.5 md:py-3 border rounded-lg focus:ring-2 focus:border-blue-500 outline-none text-sm md:text-base text-gray-900',
                      formErrors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                    ]"
                  />
                  <p v-if="formErrors.phone" class="text-red-600 text-sm mt-1">{{ formErrors.phone }}</p>
                </div>

                <!-- Country -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Fuqarolik*
                  </label>
                  <USelect
                    v-model="guestForm.country"
                    value-key="id"
                    :items="countries"
                    class="w-full"
                    :ui="{
                      base: 'py-3 md:py-3.5 px-3 md:px-4 text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none',
                      container: 'bg-white dark:bg-white',
                      option: {
                        base: 'text-gray-900 dark:text-gray-900',
                        selected: 'bg-blue-50 dark:bg-blue-50',
                        active: 'bg-gray-100 dark:bg-gray-100'
                      }
                    }"
                  />
                </div>
              </div>

              <!-- Second Guest Collapsible Section -->
              <div class="mt-6 pt-6 border-t border-gray-200">
                <button
                  @click="secondGuestOpen = !secondGuestOpen"
                  class="w-full flex items-center justify-between text-left group"
                >
                  <span class="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Ikkinchi mehmon qo'shish (ixtiyoriy)</span>
                  <div class="transition-transform duration-300 ease-in-out" :style="{ transform: secondGuestOpen ? 'rotate(180deg)' : 'rotate(0deg)' }">
                    <Icon
                      name="mdi:chevron-down"
                      class="text-gray-600 group-hover:text-blue-600 text-lg md:text-xl"
                    />
                  </div>
                </button>

                <div
                  class="transition-all duration-300 ease-in-out overflow-hidden"
                  :style="{ maxHeight: secondGuestOpen ? '500px' : '0', opacity: secondGuestOpen ? '1' : '0' }"
                >
                  <div class="mt-4 space-y-4">
                    <p class="text-xs md:text-sm text-gray-600">Ikkinchi mehmon ma'lumotlarini kiriting</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                          Familiya
                        </label>
                        <input
                          v-model="secondGuest.surname"
                          type="text"
                          minlength="2"
                          placeholder="Doe"
                          class="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm md:text-base text-gray-900"
                        />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                          Ism
                        </label>
                        <input
                          v-model="secondGuest.name"
                          type="text"
                          minlength="2"
                          placeholder="John"
                          class="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm md:text-base text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Payment Method Section -->
              <div class="mt-6 pt-6  border-gray-200">
                <h3 class="text-sm md:text-base font-semibold text-gray-900 mb-4">To'lov usulini tanlang</h3>

                <div class="space-y-3 md:space-y-4">
                  <!-- Credit/Debit Card -->
                  <div class="border border-gray-300 rounded-lg p-3 md:p-4">
                    <div class="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 flex-wrap">
                      <input type="radio" name="payment" checked class="w-4 h-4 text-blue-600" />
                      <label class="text-xs md:text-sm font-medium text-gray-900">Kredit/Debit karta</label>
                      <div class="flex gap-2 ml-auto">
                        <img src="/assets/images/mastercard.png" alt="Mastercard" class="h-4 md:h-5 w-auto object-contain" />
                        <img src="/assets/images/visa.png" alt="Visa" class="h-4 md:h-5 w-auto object-contain" />
                      </div>
                    </div>

                    <div class="space-y-2 md:space-y-3">
                      <input
                        type="number"
                        @input="handleCardNumberInput"
                        pattern="[0-9]{16}"
                        placeholder="1234567890123456"
                        class="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm text-gray-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <input
                        type="text"
                        placeholder="Karta egasi (to'liq ism)"
                        minlength="3"
                        class="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm text-gray-900"
                      />
                      <div class="grid grid-cols-2 gap-2 md:gap-3">
                        <input
                          type="text"
                          inputmode="numeric"
                          @input="handleExpiryInput"
                          placeholder="MM/YY"
                          maxlength="5"
                          class="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm text-gray-900"
                        />
                        <input
                          type="number"
                          @input="handleCVVInput"
                          min="100"
                          max="999"
                          placeholder="CVV"
                          class="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm text-gray-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Other Payment Methods -->
                  <div class="border border-gray-300 rounded-lg p-3 md:p-4">
                    <div class="flex items-center justify-between gap-3 md:gap-4 flex-wrap">
                      <!-- Left: Title and subtitle -->
                      <div>
                        <h4 class="text-xs md:text-sm font-medium text-gray-900 mb-1">Boshqa to'lov usullari</h4>
                        <p class="text-xs text-gray-600">Qo'llab-quvvatlanadigan:</p>
                      </div>

                      <!-- Right: Payment logos -->
                      <div class="flex items-center gap-1.5 md:gap-2 flex-wrap">
                        <img src="/assets/images/uzcard.png" alt="Uzcard" class="h-4 md:h-5 w-auto object-contain" />
                        <img src="/assets/images/humo.png" alt="Humo" class="h-4 md:h-5 w-auto object-contain" />
                        <img src="/assets/images/payme.png" alt="Payme" class="h-4 md:h-5 w-auto object-contain" />
                        <img src="/assets/images/click.png" alt="Click" class="h-4 md:h-5 w-auto object-contain" />
                        <img src="/assets/images/stripe.png" alt="Stripe" class="h-4 md:h-5 w-auto object-contain" />
                      </div>
                    </div>
                  </div>

                  <div class="text-xs text-gray-600">
                    Ushbu broni yuborib olish men Triponik.com
                    <a href="#" class="text-blue-600 hover:underline">Foydalanish shartlari</a> va
                    <a href="#" class="text-blue-600 hover:underline">Maxfiylik siyosati</a>
                    qoidalariga va ulanga rozilgimni tasdiqlayaman.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Price Summary -->
          <div class="lg:col-span-1">
            <div v-if="hotelDetails" class="bg-white rounded-lg p-4 md:p-5 border border-gray-200 shadow-sm lg:sticky lg:top-20">
              <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-5">Xona narxi</h2>

              <div class="mb-4 md:mb-5 pb-4 md:pb-5 border-b border-gray-200">
                <div class="flex justify-between items-start gap-2 mb-2">
                  <span class="text-xs md:text-sm text-gray-700">{{ calculateNights() }} kecha, {{ adults }} kattalar{{ children > 0 ? `, ${children} bolalar` : '' }} uchun</span>
                  <span class="text-sm md:text-base font-bold text-gray-900 text-right">1 × {{ hotelDetails.currency }} {{ formatPrice(hotelDetails.totalNet) }}</span>
                </div>
                <div class="flex justify-between items-start gap-2">
                  <span class="text-xs md:text-sm text-gray-600">Narx tafsillotlari</span>
                  <span class="text-xs md:text-sm text-gray-900 text-right">Muhim, qarang</span>
                </div>
              </div>

              <div class="mb-4 md:mb-5">
                <div class="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <input type="radio" v-model="promoCodeSelected" :value="false" name="price-option" class="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <span class="text-sm md:text-base text-gray-900">Chegirma yo'q</span>
                </div>
                <div class="flex items-center gap-2 md:gap-3 mb-2">
                  <input type="radio" v-model="promoCodeSelected" :value="true" name="price-option" class="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <span class="text-sm md:text-base text-gray-900">Promo kod kiritish</span>
                </div>

                <!-- Promo Code Input -->
                <div v-if="promoCodeSelected" class="mt-3 ml-6 md:ml-8 transition-all duration-300">
                  <input
                    v-model="promoCode"
                    type="text"
                    placeholder="Promo kodni kiriting"
                    class="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm text-gray-900"
                  />
                </div>

                <p class="text-xs md:text-sm text-gray-500 ml-6 md:ml-8 mt-2">Promo kodlarni faqat to'lo'v qilganda yoki veb-saytda oldindan to'lov qilganda qo'llash mumkin</p>
              </div>

              <div class="mb-5 md:mb-6">
                <h3 class="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">{{ hotelDetails.paymentDataRequired ? 'Jami narx' : 'Mehmonxonada to\'lanadi' }}</h3>
                <div class="flex flex-col sm:flex-row items-start sm:items-baseline sm:justify-between gap-2 mb-3">
                  <div class="flex items-baseline gap-1">
                    <span class="text-3xl md:text-4xl font-bold text-gray-900">₽</span>
                    <span class="text-3xl md:text-4xl font-bold text-gray-900">{{ formatPrice(hotelDetails.totalNet).replace('.', ',') }}</span>
                  </div>
                  <div class="flex items-baseline gap-1">
                    <span class="text-sm md:text-base text-gray-500">≈</span>
                    <span class="text-sm md:text-base text-gray-500">{{ hotelDetails.currency }}</span>
                    <span class="text-sm md:text-base text-gray-500">{{ formatPrice(hotelDetails.totalNet) }}</span>
                  </div>
                </div>
                <p class="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">USD kursi taxminiy (to'lov vaqtida o'zgarishi mumkin)</p>
                <p class="text-xs md:text-sm text-gray-600">Eslatma: Soliq va yig'imlarni mahalliy valyutada (RUB) to'lashingiz kerak</p>
              </div>

              <!-- Error Message -->
              <div v-if="error" class="bg-red-50 border border-red-200 text-red-700 px-3 md:px-4 py-2.5 md:py-3 rounded-lg mb-4 text-xs md:text-sm">
                {{ error }}
              </div>

              <button
                @click="handleBooking"
                :disabled="bookingInProgress || loading"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="bookingInProgress">Bron qilinmoqda...</span>
                <span v-else-if="loading">Yuklanmoqda...</span>
                <span v-else>Bron qilish</span>
              </button>

              <div class="flex gap-2 md:gap-3 justify-center items-center flex-wrap">
                <img src="/assets/images/visa.svg.png" alt="Visa" class="h-[18px] w-auto object-contain" />
                <img src="/assets/images/mastercard.svg.png" alt="Mastercard" class="h-[18px] w-auto object-contain" />
                <img src="/assets/images/mir.svg.png" alt="Mir" class="h-[18px] w-auto object-contain" />
                <img src="/assets/images/dss.svg.png" alt="DSS" class="h-[18px] w-auto object-contain" />
                <img src="/assets/images/Margin.png" alt="Margin" class="h-[18px] w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
const hotelId = route.params.id
const { checkRate, createBooking } = useHotelAPI()

const quickLoginOpen = ref(false)
const secondGuestOpen = ref(false)
const promoCodeSelected = ref(false)
const promoCode = ref('')

// State
const loading = ref(true)
const error = ref(null)
const hotelDetails = ref(null)
const bookingInProgress = ref(false)

// Countries list
const countries = ref([
  { label: "O'zbekiston", id: "O'zbekiston" },
  { label: 'Rossiya', id: 'Rossiya' },
  { label: 'AQSH', id: 'AQSH' },
  { label: "Qozog'iston", id: "Qozog'iston" },
  { label: 'Tojikiston', id: 'Tojikiston' },
  { label: "Qirg'iziston", id: "Qirg'iziston" },
  { label: 'Turkmaniston', id: 'Turkmaniston' },
  { label: 'Turkiya', id: 'Turkiya' },
  { label: 'Birlashgan Arab Amirliklari', id: 'Birlashgan Arab Amirliklari' },
  { label: 'Saudiya Arabistoni', id: 'Saudiya Arabistoni' },
  { label: 'Koreya', id: 'Koreya' },
  { label: 'Yaponiya', id: 'Yaponiya' },
  { label: 'Xitoy', id: 'Xitoy' },
  { label: 'Hindiston', id: 'Hindiston' },
  { label: 'Germaniya', id: 'Germaniya' },
  { label: 'Buyuk Britaniya', id: 'Buyuk Britaniya' },
  { label: 'Fransiya', id: 'Fransiya' },
  { label: 'Italiya', id: 'Italiya' },
  { label: 'Ispaniya', id: 'Ispaniya' },
  { label: 'Kanada', id: 'Kanada' },
  { label: 'Avstraliya', id: 'Avstraliya' },
  { label: 'Pokiston', id: 'Pokiston' },
  { label: 'Indoneziya', id: 'Indoneziya' },
  { label: 'Misr', id: 'Misr' },
  { label: 'Eron', id: 'Eron' },
  { label: "Afg'oniston", id: "Afg'oniston" }
])

// Form data
const guestForm = ref({
  email: '',
  surname: '',
  name: '',
  phone: '+998',
  country: "O'zbekiston"
})

const secondGuest = ref({
  surname: '',
  name: ''
})

// Validation errors
const formErrors = ref({
  email: '',
  surname: '',
  name: '',
  phone: ''
})

// Validation functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) {
    return 'Email kiritish majburiy'
  }
  if (!emailRegex.test(email)) {
    return 'Noto\'g\'ri email formati'
  }
  return ''
}

const validateName = (name, fieldName) => {
  const nameRegex = /^[a-zA-Zа-яА-ЯўўғҒқҚҳҲ\s'-]+$/
  if (!name) {
    return `${fieldName} kiritish majburiy`
  }
  if (name.length < 2) {
    return `${fieldName} kamida 2 ta belgidan iborat bo'lishi kerak`
  }
  if (!nameRegex.test(name)) {
    return `${fieldName} faqat harflardan iborat bo'lishi kerak`
  }
  return ''
}

const validatePhone = (phone) => {
  const phoneRegex = /^\+998[0-9]{9}$/
  if (!phone || phone === '+998') {
    return 'Telefon raqami kiritish majburiy'
  }
  if (!phoneRegex.test(phone)) {
    return 'Telefon raqami 9 ta raqamdan iborat bo\'lishi kerak'
  }
  return ''
}

// Telefon inputida faqat raqamlar kiritish
const handlePhoneInput = (event) => {
  let value = event.target.value
  // Faqat + va raqamlarni qoldirish
  value = value.replace(/[^\d+]/g, '')

  // +998 prefiksini doim saqlab qolish
  if (!value.startsWith('+998')) {
    if (value.startsWith('+99')) {
      value = '+998' + value.substring(3)
    } else if (value.startsWith('+9')) {
      value = '+998' + value.substring(2)
    } else if (value.startsWith('+')) {
      value = '+998' + value.substring(1).replace(/\+/g, '')
    } else {
      value = '+998' + value.replace(/\+/g, '')
    }
  } else {
    // Birinchi + dan keyin boshqa + larni olib tashlash
    value = '+998' + value.substring(4).replace(/\+/g, '')
  }

  // Maksimal uzunlik: +998XXXXXXXXX = 13 belgi
  if (value.length > 13) {
    value = value.substring(0, 13)
  }

  guestForm.value.phone = value

  // Xatolikni tozalash
  if (formErrors.value.phone) {
    formErrors.value.phone = ''
  }
}

// Ism va familiya inputlarida faqat harflar
const handleNameInput = (event, field) => {
  let value = event.target.value
  // Faqat harflar, bo'sh joy, apostrof va tire
  value = value.replace(/[^a-zA-Zа-яА-ЯўўғҒқҚҳҲ\s'-]/g, '')

  guestForm.value[field] = value

  // Xatolikni tozalash
  if (formErrors.value[field]) {
    formErrors.value[field] = ''
  }
}

// Karta raqami, MMYY, CVV uchun maksimal uzunlik
const handleCardNumberInput = (event) => {
  let value = event.target.value
  // Maksimal 16 raqam
  if (value.length > 16) {
    event.target.value = value.slice(0, 16)
  }
}

const handleExpiryInput = (event) => {
  let value = event.target.value
  // Faqat raqamlar va /
  value = value.replace(/[^\d/]/g, '')

  // / dan keyin boshqa / qo'shmaslik
  const slashCount = (value.match(/\//g) || []).length
  if (slashCount > 1) {
    value = value.slice(0, value.lastIndexOf('/'))
  }

  // Avtomatik / qo'shish MM dan keyin
  if (value.length === 2 && !value.includes('/')) {
    value = value + '/'
  }

  // Maksimal uzunlik MM/YY = 5
  if (value.length > 5) {
    value = value.slice(0, 5)
  }

  event.target.value = value
}

const handleCVVInput = (event) => {
  let value = event.target.value
  // Maksimal 3 raqam
  if (value.length > 3) {
    event.target.value = value.slice(0, 3)
  }
}

const validateForm = () => {
  formErrors.value.email = validateEmail(guestForm.value.email)
  formErrors.value.surname = validateName(guestForm.value.surname, 'Familiya')
  formErrors.value.name = validateName(guestForm.value.name, 'Ism')
  formErrors.value.phone = validatePhone(guestForm.value.phone)

  return !formErrors.value.email && !formErrors.value.surname && !formErrors.value.name && !formErrors.value.phone
}

// URL query parametrlaridan ma'lumot olish
const rateKey = route.query.rateKey
const adults = parseInt(route.query.adults || '2')
const children = parseInt(route.query.children || '0')
const rooms = parseInt(route.query.rooms || '1')

// Helper functions
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr']
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

const formatPrice = (price) => {
  if (!price) return '0'
  return parseFloat(price).toFixed(2)
}

const calculateNights = () => {
  if (!hotelDetails.value?.checkIn || !hotelDetails.value?.checkOut) return 1
  const checkIn = new Date(hotelDetails.value.checkIn)
  const checkOut = new Date(hotelDetails.value.checkOut)
  const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))
  return nights > 0 ? nights : 1
}

useSeoMeta({
  title: 'Bron qilish - Triponik',
  description: 'Mehmonxonani bron qilish',
})

// Check rate - narxni tasdiqlash
const fetchRateDetails = async () => {
  if (!rateKey) {
    error.value = 'Rate key topilmadi'
    loading.value = false
    return
  }

  loading.value = true
  error.value = null

  try {
    const result = await checkRate(rateKey)

    if (result && result.hotel) {
      hotelDetails.value = {
        code: result.hotel.code,
        name: result.hotel.name,
        categoryCode: result.hotel.categoryCode,
        categoryName: result.hotel.categoryName,
        destinationCode: result.hotel.destinationCode,
        destinationName: result.hotel.destinationName,
        zoneCode: result.hotel.zoneCode,
        zoneName: result.hotel.zoneName,
        latitude: result.hotel.latitude,
        longitude: result.hotel.longitude,
        checkIn: result.hotel.checkIn,
        checkOut: result.hotel.checkOut,
        rooms: result.hotel.rooms,
        totalNet: result.hotel.totalNet,
        currency: result.hotel.currency,
        modificationPolicies: result.hotel.modificationPolicies,
        paymentDataRequired: result.hotel.paymentDataRequired,
        image: result.hotel.images && result.hotel.images.length > 0
          ? `https://api.triponik.uz${result.hotel.images[0].path}`
          : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
      }
    }
  } catch (err) {
    console.error('Check rate error:', err)
    error.value = 'Narxni tekshirib bo\'lmadi'
  } finally {
    loading.value = false
  }
}

// Bron qilish
const handleBooking = async () => {
  // Validation
  if (!validateForm()) {
    error.value = 'Iltimos, barcha maydonlarni to\'g\'ri to\'ldiring'
    return
  }

  bookingInProgress.value = true
  error.value = null

  try {
    // Generate unique client reference (max 20 chars)
    const clientReference = `${Date.now()}-${Math.floor(Math.random() * 1000)}`

    const bookingData = {
      clientReference: clientReference,
      holder: {
        name: guestForm.value.name,
        surname: guestForm.value.surname,
        email: guestForm.value.email,
        phone: guestForm.value.phone
      },
      rooms: [{
        rateKey: rateKey,
        paxes: [
          {
            roomId: 1,
            type: 'AD',
            name: guestForm.value.name,
            surname: guestForm.value.surname
          }
        ]
      }]
    }

    // Ikkinchi mehmon qo'shilgan bo'lsa
    if (secondGuestOpen.value && secondGuest.value.name && secondGuest.value.surname) {
      bookingData.rooms[0].paxes.push({
        roomId: 1,
        type: 'AD',
        name: secondGuest.value.name,
        surname: secondGuest.value.surname
      })
    }

    // Bolalarni qo'shish
    for (let i = 0; i < children; i++) {
      bookingData.rooms[0].paxes.push({
        roomId: 1,
        type: 'CH',
        age: 10, // Default age for children
        name: guestForm.value.name,
        surname: guestForm.value.surname
      })
    }

    const result = await createBooking(bookingData)

    console.log('Booking result:', result)
    console.log('Booking reference:', result?.booking?.reference || result?.reference)

    // Check if booking was successful
    if (result && (result.booking?.reference || result.reference)) {
      // Booking success - bronlarim sahifasiga o'tish
      router.push('/profile/bookings')
    } else {
      error.value = 'Bron yaratildi, lekin reference topilmadi.'
      // Still redirect after 2 seconds
      setTimeout(() => {
        router.push('/profile/bookings')
      }, 2000)
    }
  } catch (err) {
    console.error('Booking error:', err)
    error.value = err?.data?.error?.message || 'Bron qilishda xatolik yuz berdi. Iltimos qayta urinib ko\'ring.'
  } finally {
    bookingInProgress.value = false
  }
}

onMounted(() => {
  fetchRateDetails()
})
</script>

<template>
  <section class="py-12 md:py-16 mt-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Top Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          <!-- Yordam xizmati -->
          <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 flex items-center justify-between gap-4 overflow-hidden h-32 md:h-40">
            <div class="flex-1">
              <h3 class="text-base md:text-lg font-bold text-gray-900 mb-2">
                24/7 Yordam xizmati
              </h3>
              <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                Istalgan vaqt qo'llab-quvvatlash<br />
                Tez javob va yechim
              </p>
            </div>
            <div class="flex-shrink-0 w-32 h-32 md:w-44 md:h-44 flex items-center justify-center">
              <svg class="w-16 h-16 text-blue-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
          </div>

          <!-- Mening ijaralarim -->
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 flex items-center justify-between gap-4 overflow-hidden h-32 md:h-40">
            <div class="flex-1">
              <h3 class="text-base md:text-lg font-bold text-white mb-2">
                Mening ijaralarim
              </h3>
              <p class="text-white/90 text-xs md:text-sm leading-relaxed">
                Barcha buyurtmalar bir joyda<br />
                Oson boshqarish
              </p>
            </div>
            <div class="flex-shrink-0 w-32 h-32 md:w-44 md:h-44 flex items-center justify-center">
              <svg class="w-16 h-16 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
          </div>

          <!-- Sug'urta va xavfsizlik -->
          <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 flex items-center justify-between gap-4 overflow-hidden h-32 md:h-40">
            <div class="flex-1">
              <h3 class="text-base md:text-lg font-bold text-gray-900 mb-2">
                Sug'urta va xavfsizlik
              </h3>
              <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                To'liq sug'urta xizmati<br />
                Xavfsiz haydovchilik
              </p>
            </div>
            <div class="flex-shrink-0 w-32 h-32 md:w-44 md:h-44 flex items-center justify-center">
              <svg class="w-16 h-16 text-blue-100" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93C9.33 17.79 7 14.5 7 11V7.18L12 5z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Bottom Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 my-24">
          <!-- Buyurtmadan oldin -->
          <div class="relative pt-6 h-[300px]">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#F7F7F7] border-4 border-white rounded-full shadow-lg flex items-center justify-center z-10">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 17L17 7m0 0H10m7 0v7" />
              </svg>
            </div>
            <div class="bg-[#F7F7F7] rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 h-full">
              <h3 class="text-base md:text-lg font-bold text-gray-900 mb-4">
                Buyurtmadan oldin
              </h3>
              <div class="space-y-1 text-gray-600 text-xs md:text-sm">
                <p>Avtomobil tanlash va narxlar</p>
                <p class="font-semibold text-gray-900">800-15-20</p>
                <p>Telefon orqali maslahat</p>
                <p class="font-semibold text-gray-900">8 250-15-20</p>
              </div>
            </div>
          </div>

          <!-- Sayohat davomida -->
          <div class="relative pt-6 h-[300px]">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-600 border-4 border-white rounded-full shadow-lg flex items-center justify-center z-10">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 17L17 7m0 0H10m7 0v7" />
              </svg>
            </div>
            <div class="bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 h-full">
              <h3 class="text-base md:text-lg font-bold text-white mb-4">
                Sayohat davomida
              </h3>
              <p class="text-white/90 text-xs md:text-sm leading-relaxed">
                GPS navigatsiya, yo'l yordami, 24/7 qo'ng'iroq markazi, tezkor texnik xizmat
              </p>
            </div>
          </div>

          <!-- Qaytarishdan keyin -->
          <div class="relative pt-6 h-[300px]">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#F7F7F7] border-4 border-white rounded-full shadow-lg flex items-center justify-center z-10">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 17L17 7m0 0H10m7 0v7" />
              </svg>
            </div>
            <div class="bg-[#F7F7F7] rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 h-full">
              <h3 class="text-base md:text-lg font-bold text-gray-900 mb-4">
                Qaytarishdan keyin
              </h3>
              <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                Hisob-kitob va qaytarishdan keyingi xizmatlar, unutilgan narsalarni qidirish
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>

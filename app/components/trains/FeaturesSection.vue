<template>
  <section class="py-12 md:py-16 mt-20 bg-white" >
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Top Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
          <!-- Yordam xizmati -->
          <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 flex items-center justify-between gap-4 overflow-hidden h-32 md:h-40">
            <div class="flex-1">
              <h3 class="text-base md:text-lg font-bold text-gray-900 mb-2">
                Yordam xizmati
              </h3>
              <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                Sharayli kabinet<br />
                Premial bilet xarid qilish
              </p>
            </div>
            <div class="flex-shrink-0">
              <img src="~/assets/images/headphones.png" alt="Headphones" class="w-32 h-32 md:w-44 md:h-44 object-contain" />
            </div>
          </div>

          <!-- Mening biletlarim -->
          <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 flex items-center justify-between gap-4 overflow-hidden h-32 md:h-40">
            <div class="flex-1">
              <h3 class="text-base md:text-lg font-bold text-white mb-2">
                Mening biletlarim
              </h3>
              <p class="text-white/90 text-xs md:text-sm leading-relaxed">
                Sharayli kabinet<br />
                Premial bilet xarid qilish
              </p>
            </div>
            <div class="flex-shrink-0">
              <img src="~/assets/images/ticket.png" alt="Ticket" class="w-32 h-32 md:w-48 md:h-48 object-contain" />
            </div>
          </div>

          <!-- Imkoniyat cheklangan yo'lovchilar -->
          <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 md:p-6 flex items-center justify-between gap-4 overflow-hidden h-32 md:h-40">
            <div class="flex-1">
              <h3 class="text-base md:text-lg font-bold text-gray-900 mb-2">
                Imkoniyat cheklangan yo'lovchilar
              </h3>
              <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                Mobility yordam markazi<br />
                Chiqtalarni rasmiylashtirish
              </p>
            </div>
            <div class="flex-shrink-0">
              <img src="~/assets/images/invalids.png" alt="Wheelchair" class="w-32 h-32 md:w-44 md:h-44 object-contain" />
            </div>
          </div>
        </div>
        <!-- Bottom Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 my-24">
          <!-- Sayohatdan oldin -->
          <div class="relative pt-6 h-[300px]">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#F7F7F7] border-4 border-white rounded-full shadow-lg flex items-center justify-center z-10">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 17L17 7m0 0H10m7 0v7" />
              </svg>
            </div>
            <div class="bg-[#F7F7F7] rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 h-full">
              <h3 class="text-base md:text-lg font-bold text-gray-900 mb-4">
                Sayohatdan oldin
              </h3>
              <div class="space-y-1 text-gray-600 text-xs md:text-sm">
                <p>Yo'lga chiqish ma'lumotlari</p>
                <p class="font-semibold text-gray-900">800-15-20</p>
                <p>Telefon orqali bilet buyurtmasi</p>
                <p class="font-semibold text-gray-900">8 250-15-20</p>
              </div>
            </div>
          </div>

          <!-- Poyezdda -->
          <div class="relative pt-6 h-[300px]">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-600 border-4 border-white rounded-full shadow-lg flex items-center justify-center z-10">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 17L17 7m0 0H10m7 0v7" />
              </svg>
            </div>
            <div class="bg-linear-to-br from-blue-500 to-blue-600 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 h-full">
              <h3 class="text-base md:text-lg font-bold text-white mb-4">
                Poyezdda
              </h3>
              <p class="text-white/90 text-xs md:text-sm leading-relaxed">
                Poyezddagi xizmatlar, poyezdga ovqat yetkazib berish, poyezd toilari, vagon turlari
              </p>
            </div>
          </div>

          <!-- Sayohatdan keyin -->
          <div class="relative pt-6 h-[300px]">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#F7F7F7] border-4 border-white rounded-full shadow-lg flex items-center justify-center z-10">
              <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 17L17 7m0 0H10m7 0v7" />
              </svg>
            </div>
            <div class="bg-[#F7F7F7] rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 h-full">
              <h3 class="text-base md:text-lg font-bold text-gray-900 mb-4">
                Sayohatdan keyin
              </h3>
              <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                Sayohatdan keyingi xizmatlar, unutilgan narsalarni qidirish
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

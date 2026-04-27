<template>
  <section class="pb-12 md:pb-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="mb-8 md:mb-12">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Sayohatlar Olami
          </h2>
          <p class="text-gray-600 text-base md:text-lg">
            Dunyo bo'ylab ajoyib sayohat tajribalariga tayyormisiz?
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <!-- Left Side - Large Samarqand Card (50% width, full height) -->
          <div class="md:row-span-2">
            <div class="relative bg-gradient-to-br from-gray-400 to-gray-500 rounded-2xl overflow-hidden h-[500px] md:h-[600px] p-6 md:p-8 flex flex-col justify-between text-white">
              <div>
                <span class="inline-block bg-blue-600 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Tarixiy joylar
                </span>
                <h3 class="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  Samarqandning go'zal obidlari: Registon majmuasi
                </h3>
                <p class="text-white/90 text-sm md:text-base leading-relaxed">
                  O'rta Osiiyodagi eng mashhur tarixiy joylarga sayohat qiling va ming yillik madaniyatimizni kashf eting
                </p>
              </div>
              <div class="flex items-center justify-between text-xs md:text-sm text-white/80">
                <span>5 kun oldin</span>
                <span>6 daqiqa o'qish</span>
              </div>
            </div>
          </div>

          <!-- Right Side Top - Toshkent Card (50% width, 50% height) -->
          <div>
            <div class="relative bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl overflow-hidden h-[240px] md:h-[295px] p-6 md:p-8 flex flex-col justify-between text-white">
              <div>
                <span class="inline-block bg-blue-600 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Shaharlar
                </span>
                <h3 class="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  Toshkent: Zamonaviy va an'anaviy
                </h3>
              </div>
              <div class="flex items-center justify-between text-xs md:text-sm text-white/80">
                <span>2 hafta oldin</span>
                <span>4 daqiqa o'qish</span>
              </div>
            </div>
          </div>

          <!-- Right Side Bottom - Two Cards Side by Side -->
          <div class="grid grid-cols-2 gap-4 md:gap-5">
            <!-- Orange Card - Stats -->
            <div class="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl h-[240px] md:h-[285px] p-6 md:p-8 flex flex-col items-center justify-center text-white">
              <div class="text-center">
                <h3 class="text-5xl md:text-6xl font-bold mb-3">50+</h3>
                <p class="text-sm md:text-base font-medium">
                  Mamlakatlar bo'ylab<br />sayohatlar
                </p>
              </div>
            </div>

            <!-- Blue Card - Tips -->
            <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl h-[240px] md:h-[285px] p-6 md:p-8 flex flex-col justify-center text-white">
              <h3 class="text-xl md:text-2xl font-bold mb-3 leading-tight">
                Sayohatchilar uchun maslahatlar
              </h3>
              <p class="text-white/90 text-xs md:text-sm leading-relaxed">
                Tajribali sayohatchilardan eng yaxshi maslahatlar va ko'rsatmalar
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

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 truncate">
          Sayohatlar Olami
        </h2>
        <p class="text-gray-600">
          Mamunlik va raxat baxshida sayohat tajribasingiz
        </p>
      </div>

      <!-- Featured Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Large Featured Card (Left 50%) -->
        <div class="lg:row-span-2">
          <div class="group relative h-full min-h-[400px] rounded-2xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200"
              alt="Featured destination"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <!-- Badge -->
            <div class="absolute top-6 left-6">
              <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Tavsiya joylari
              </span>
            </div>

            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <h3 class="text-white text-3xl font-bold mb-3">
                Samarqandning go'zal obidlari: Registon majmuasi
              </h3>
              <p class="text-white/90 mb-4">
                Orta Osiyodagi eng mashhur tarixiy joylardan biri. Uchta ulkan madrasadan iborat bo'lgan bu majmua sayohat qiling va ming yillik madaniyatimizni kashf eting
              </p>
              <div class="flex items-center gap-4 text-white text-sm">
                <span>5 kun oldin</span>
                <span>6 daqiqa o'qish</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side Container -->
        <div class="space-y-6">
          <!-- Another Featured Card (Top Right) -->
          <div class="group relative h-[250px] rounded-2xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
              alt="Tashkent"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            <!-- Badge -->
            <div class="absolute top-6 left-6">
              <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Shaharlar
              </span>
            </div>

            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-white text-2xl font-bold mb-2">
                Toshkent: Zamonaviy va an'anaviy
              </h3>
              <div class="flex items-center gap-4 text-white text-sm">
                <span>2 hafta oldin</span>
                <span>4 daqiqa o'qish</span>
              </div>
            </div>
          </div>

          <!-- Bottom Cards Grid (Stats and Info side by side) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Stats Card -->
            <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center">
              <div class="text-6xl font-bold mb-2">50+</div>
              <div class="text-xl font-medium">Mamlakatlar bo'yicha</div>
              <div class="text-xl font-medium">sayohatlar</div>
            </div>

            <!-- Info Card -->
            <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 class="text-2xl font-bold mb-3">
                Sayohatchilar uchun maslahalar
              </h3>
              <p class="text-blue-100">
                Tajribali sayohatchilardan eng yaxshi maslahatar va yo'riqnomalar
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

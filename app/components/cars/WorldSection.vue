<template>
  <section class="pb-12 md:pb-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="mb-8 md:mb-12">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Avtomobil Ijarasi
          </h2>
          <p class="text-gray-600 text-base md:text-lg">
            O'zbekiston bo'ylab qulay va ishonchli avtomobil ijarasi xizmati
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <!-- Left Side - Large Card -->
          <div class="md:row-span-2">
            <div class="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden h-[500px] md:h-[600px] p-6 md:p-8 flex flex-col justify-between text-white">
              <div>
                <span class="inline-block bg-white/20 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Premium sinf
                </span>
                <h3 class="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  Biznes sayohat uchun premium avtomobillar
                </h3>
                <p class="text-white/90 text-sm md:text-base leading-relaxed">
                  Haydovchi bilan yoki mustaqil ravishda eng zamonaviy va qulay avtomobillardan foydalaning
                </p>
              </div>
              <div class="flex items-center justify-between text-xs md:text-sm text-white/80">
                <span>BMW, Mercedes, Audi va boshqalar</span>
                <span>Premium narxlar</span>
              </div>
            </div>
          </div>

          <!-- Right Side Top -->
          <div>
            <div class="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden h-[240px] md:h-[295px] p-6 md:p-8 flex flex-col justify-between text-white">
              <div>
                <span class="inline-block bg-blue-600 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Ekonom sinf
                </span>
                <h3 class="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  Qulay narxda sifatli xizmat
                </h3>
              </div>
              <div class="flex items-center justify-between text-xs md:text-sm text-white/80">
                <span>Kunlik ijara</span>
                <span>Arzon narxlar</span>
              </div>
            </div>
          </div>

          <!-- Right Side Bottom - Two Cards Side by Side -->
          <div class="grid grid-cols-2 gap-4 md:gap-5">
            <!-- Orange Card - Stats -->
            <div class="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl h-[240px] md:h-[285px] p-6 md:p-8 flex flex-col items-center justify-center text-white">
              <div class="text-center">
                <h3 class="text-5xl md:text-6xl font-bold mb-3">200+</h3>
                <p class="text-sm md:text-base font-medium">
                  Avtomobil<br />turlari
                </p>
              </div>
            </div>

            <!-- Blue Card -->
            <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl h-[240px] md:h-[285px] p-6 md:p-8 flex flex-col justify-center text-white">
              <h3 class="text-xl md:text-2xl font-bold mb-3 leading-tight">
                Haydovchilar uchun maslahatlar
              </h3>
              <p class="text-white/90 text-xs md:text-sm leading-relaxed">
                Xavfsiz haydovchilik va yo'l qoidalari bo'yicha foydali ma'lumotlar
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

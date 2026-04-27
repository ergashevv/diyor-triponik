<template>
  <section class="py-16 bg-white overflow-hidden relative">
    <div class="container mx-auto px-4">
      <div class="relative rounded-xl overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img
            src="~/assets/images/discount.png"
            alt="Discount Banner"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Ellipse Decorative -->

        <div class="relative z-10 p-8 md:p-12">
          <!-- Content -->
          <div class="text-white max-w-2xl">
            <div class="inline-block bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              MAXSUS AKSIYA
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4 truncate">
              Yozgi chegirmalar - 25% gacha
            </h2>
            <p class="text-blue-100 mb-6 text-base">
              Iyun oyida aviabiletlar, mehmonxonalar va turlar uchun maxsus chegirmalar. Barcha yo'nalishlar bo'ylab eng qulay narxlar!
            </p>
            <div class="flex flex-wrap gap-3 mb-4">
              <UButton
                size="lg"
                class="bg-white text-blue-600 hover:bg-gray-100 font-medium"
              >
                Batafsil
              </UButton>
              <UButton
                size="lg"
                class="border-2 border-white text-white bg-transparent hover:bg-white/10 font-medium"
              >
                Bron qilish
              </UButton>
            </div>
            <p class="text-blue-200 text-sm">
              *Chegirmalar 30-iyungacha amal qiladi
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

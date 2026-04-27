<template>
 <section class="py-16 md:py-20 bg-gradient-to-br ">
    <div class="container mx-auto px-4">
      <div class="bg-[#DBEAFE] rounded-3xl shadow-xl overflow-hidden relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Left Content -->
          <div class="p-8 md:p-12 lg:p-16">
            <!-- Badge -->
            <div class="inline-block mb-6">
              <span class="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                Mobil ilova
              </span>
            </div>

            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Triponik mobil ilovasini o'rnating
            </h2>

            <!-- Features List -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 bg-[#c4e2ff] rounded-full flex items-center justify-center mt-0.5">
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Har doim sayftimizdan ham arzonroq narxlar faqat ilova foydalanuvchilari uchun
                </p>
              </div>

              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 bg-[#c4e2ff] rounded-full flex items-center justify-center mt-0.5">
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Internet aloqasi bo'lmasa ham o'zimasa barcha ma'lumotlar
                </p>
              </div>

              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 w-6 h-6 bg-[#c4e2ff] rounded-full flex items-center justify-center mt-0.5">
                  <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Tezkor javob va yordam - muammolar yuzaga kelsa, go'llab-quvvatlash xizmati doim yoringizda
                </p>
              </div>
            </div>

            <!-- Download Buttons -->
            <div class="flex flex-wrap gap-4">
              <a
                href="#"
                class="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div class="text-left">
                  <div class="text-xs text-white/80">Yuklab olib</div>
                  <div class="font-semibold text-base">App Store</div>
                </div>
              </a>

              <a
                href="#"
                class="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div class="text-left">
                  <div class="text-xs text-white/80">Yuklab olib</div>
                  <div class="font-semibold text-base">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          <!-- Right Phone Image -->
          <div class="hidden lg:block absolute bottom-0 right-0 w-1/2 h-full">
            <div class="absolute bottom-0 right-8 w-full max-w-md">
              <img
                src="~/assets/images/phone.png"
                alt="Triponik Mobile App"
                class="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

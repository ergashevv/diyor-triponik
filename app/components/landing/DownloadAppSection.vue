<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- Left Content -->
          <div class="p-8 md:p-12 text-white">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">
              Triponik ilovasini yuklab oling
            </h2>
            <p class="text-blue-100 mb-8 leading-relaxed">
              Barcha sayohat rejalaringiz endi cho'ntagingizda! Aviabiletlar va mehmonxonalarni istalgan joyda qidiring, chegirmalardan xabardor bo'ling va bronlaringizni boshqaring.
            </p>

            <!-- Download Buttons -->
            <div class="flex flex-wrap gap-4 mb-8">
              <a
                href="#"
                class="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-colors"
              >
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div class="text-left">
                  <div class="text-xs">Yuklab olib</div>
                  <div class="font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                class="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-colors"
              >
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div class="text-left">
                  <div class="text-xs">Yuklab olib</div>
                  <div class="font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            <!-- Rating -->
            <div class="flex items-center gap-4">
              <div class="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="User"
                  class="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="User"
                  class="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="User"
                  class="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <div>
                <div class="flex items-center gap-1 mb-1">
                  <span v-for="i in 5" :key="i" class="text-yellow-400 text-lg">⭐</span>
                  <span class="ml-1 font-bold">4.8/5</span>
                </div>
                <div class="text-blue-100 text-sm">50,000+ yuklanishlar</div>
              </div>
            </div>
          </div>

          <!-- Right Phone Mockup -->
          <div class="hidden lg:flex items-center justify-center p-8">
            <div class="relative">
              <!-- Phone Frame -->
              <div class="relative w-64 h-[520px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <!-- Screen -->
                <div class="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <!-- You can add a screenshot here -->
                  <div class="w-full h-full bg-gradient-to-br from-blue-50 to-white"></div>
                </div>
                <!-- Notch -->
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              </div>
              <!-- Decorative elements -->
              <div class="absolute -right-4 top-20 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
              <div class="absolute -left-4 bottom-20 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<template>
  <footer class="bg-[#1F2937] text-gray-400 py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        <!-- Logo & Social -->
        <div class="space-y-6">
          <img src="~/assets/logos/triponik.png" alt="Triponik" class="h-8 brightness-0 invert" />
          <p class="text-[14px] font-medium leading-relaxed max-w-[240px]">
            Siz uchun eng yaxshi sayohat tajribasi
          </p>
          <div class="flex items-center gap-4">
            <a href="#" class="text-white hover:text-blue-500 transition-colors"><UIcon name="i-mdi-facebook" class="w-5 h-5" /></a>
            <a href="#" class="text-white hover:text-blue-500 transition-colors"><UIcon name="i-mdi-instagram" class="w-5 h-5" /></a>
            <a href="#" class="text-white hover:text-blue-500 transition-colors"><UIcon name="i-mdi-telegram" class="w-5 h-5" /></a>
            <a href="#" class="text-white hover:text-blue-500 transition-colors"><UIcon name="i-mdi-youtube" class="w-5 h-5" /></a>
          </div>
        </div>

        <!-- Kompaniya -->
        <div>
          <h3 class="text-white font-black text-[16px] mb-6 tracking-tight">Kompaniya</h3>
          <ul class="space-y-4 text-[14px] font-medium">
            <li><NuxtLink to="/about" class="hover:text-white transition-all">Biz haqimizda</NuxtLink></li>
            <li><NuxtLink to="/team" class="hover:text-white transition-all">Bizning jamoa</NuxtLink></li>
            <li><NuxtLink to="/partnership" class="hover:text-white transition-all">Hamkorlik</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white transition-all">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition-all">Kontaktlar</NuxtLink></li>
          </ul>
        </div>

        <!-- Yo'nalishlar -->
        <div>
          <h3 class="text-white font-black text-[16px] mb-6 tracking-tight">Yo'nalishlar</h3>
          <ul class="space-y-4 text-[14px] font-medium">
            <li><NuxtLink to="/turkey" class="hover:text-white transition-all">Turkiya</NuxtLink></li>
            <li><NuxtLink to="/dubai" class="hover:text-white transition-all">Dubay</NuxtLink></li>
            <li><NuxtLink to="/egypt" class="hover:text-white transition-all">Misr</NuxtLink></li>
            <li><NuxtLink to="/malaysia" class="hover:text-white transition-all">Malayziya</NuxtLink></li>
            <li><NuxtLink to="/thailand" class="hover:text-white transition-all">Tailand</NuxtLink></li>
          </ul>
        </div>

        <!-- Bog'lanish -->
        <div>
          <h3 class="text-white font-black text-[16px] mb-6 tracking-tight">Bog'lanish</h3>
          <ul class="space-y-4 text-[14px] font-medium">
            <li class="flex items-start gap-3">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-blue-500 shrink-0" />
              <span>Toshkent sh., Amir Temur ko'chasi, 105-uy</span>
            </li>
            <li class="flex items-center gap-3">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 text-blue-500 shrink-0" />
              <a href="tel:+998901234567" class="hover:text-white transition-all">+998 90 123 45 67</a>
            </li>
            <li class="flex items-center gap-3">
              <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-blue-500 shrink-0" />
              <a href="mailto:info@triponik.uz" class="hover:text-white transition-all">info@triponik.uz</a>
            </li>
            <li class="flex items-center gap-3">
              <UIcon name="i-heroicons-clock" class="w-5 h-5 text-blue-500 shrink-0" />
              <span>Du-Sha: 9:00 - 18:00</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-medium">
        <p>© 2025 Triponik. Barcha huquqlar himoyalangan.</p>
        <div class="flex items-center gap-6">
          <NuxtLink to="/privacy" class="hover:text-white">Maxfiylik siyosati</NuxtLink>
          <NuxtLink to="/terms" class="hover:text-white">Foydalanish shartlari</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

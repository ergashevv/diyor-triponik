<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container mx-auto px-4 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-white font-bold text-xl mb-4">TRIPONIK</h3>
          <p class="text-sm mb-4">
            Biz sizga eng yaxshi sayohat tajribasini taqdim etamiz. Dunyo bo'ylab mehmonxonalar va turar joylar.
          </p>
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <span>f</span>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <span>t</span>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <span>in</span>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <span>ig</span>
            </a>
          </div>
        </div>

        <!-- Company Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Kompaniya</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">Biz haqimizda</NuxtLink></li>
            <li><NuxtLink to="/careers" class="hover:text-white transition-colors">Karyera</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-white transition-colors">Blog</NuxtLink></li>
            <li><NuxtLink to="/press" class="hover:text-white transition-colors">Matbuot</NuxtLink></li>
          </ul>
        </div>

        <!-- Services Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Xizmatlar</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/hotels" class="hover:text-white transition-colors">Mehmonxonalar</NuxtLink></li>
            <li><NuxtLink to="/flights" class="hover:text-white transition-colors">Parvozlar</NuxtLink></li>
            <li><NuxtLink to="/apartments" class="hover:text-white transition-colors">Turar joylar</NuxtLink></li>
            <li><NuxtLink to="/cars" class="hover:text-white transition-colors">Avtomobillar</NuxtLink></li>
          </ul>
        </div>

        <!-- Support Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Qo'llab-quvvatlash</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/help" class="hover:text-white transition-colors">Yordam markazi</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Biz bilan bog'lanish</NuxtLink></li>
            <li><a href="tel:+998901234567" class="hover:text-white transition-colors">+998 90 123 45 67</a></li>
            <li><a href="mailto:info@triponik.uz" class="hover:text-white transition-colors">info@triponik.uz</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm">
            © 2025 Triponik. Barcha huquqlar himoyalangan.
          </p>
          <div class="flex gap-6 text-sm">
            <NuxtLink to="/privacy" class="hover:text-white transition-colors">
              Maxfiylik siyosati
            </NuxtLink>
            <NuxtLink to="/terms" class="hover:text-white transition-colors">
              Foydalanish shartlari
            </NuxtLink>
            <NuxtLink to="/cookies" class="hover:text-white transition-colors">
              Cookie siyosati
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

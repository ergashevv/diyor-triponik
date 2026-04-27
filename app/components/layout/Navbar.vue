<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-200">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img
            src="~/assets/logos/triponik.png"
            alt="Triponik"
            class="h-8 md:h-10 w-auto"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-6">
          <NuxtLink
            to="/"
            class="text-gray-700 hover:text-blue-600 transition-colors pb-1 border-b-2 border-transparent"
            active-class="!text-blue-600 !border-blue-600"
            exact
          >
            Bosh sahifa
          </NuxtLink>
          <NuxtLink
            to="/flights"
            class="text-gray-700 hover:text-blue-600 transition-colors pb-1 border-b-2 border-transparent"
            active-class="!text-blue-600 !border-blue-600"
          >
            Aviabiletlar
          </NuxtLink>
          <NuxtLink
            to="/hotels"
            class="text-gray-700 hover:text-blue-600 transition-colors pb-1 border-b-2 border-transparent"
            active-class="!text-blue-600 !border-blue-600"
          >
            Mehmonxonalar
          </NuxtLink>
          <NuxtLink
            to="/trains"
            class="text-gray-700 hover:text-blue-600 transition-colors pb-1 border-b-2 border-transparent"
            active-class="!text-blue-600 !border-blue-600"
          >
            Poyezdlar
          </NuxtLink>
          <NuxtLink
            to="/cars"
            class="text-gray-700 hover:text-blue-600 transition-colors pb-1 border-b-2 border-transparent"
            active-class="!text-blue-600 !border-blue-600"
          >
            Avtomobil ijarasi
          </NuxtLink>
          <NuxtLink
            to="/tours"
            class="text-gray-700 hover:text-blue-600 transition-colors pb-1 border-b-2 border-transparent"
            active-class="!text-blue-600 !border-blue-600"
          >
            Turlar
          </NuxtLink>
          <NuxtLink
            to="/discounts"
            class="text-gray-700 hover:text-blue-600 transition-colors pb-1 border-b-2 border-transparent"
            active-class="!text-blue-600 !border-blue-600"
          >
            Chegirmalar
          </NuxtLink>
        </nav>

        <!-- Desktop Auth Buttons -->
        <div class="hidden lg:flex items-center space-x-3">
          <UButton
            variant="ghost"
            color="blue"
            size="md"
            class="w-full lg:w-auto h-12 px-8 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            Kirish
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <UButton
          class="lg:hidden"
          variant="ghost"
          color="gray"
          icon="i-heroicons-bars-3"
          @click="mobileMenuOpen = !mobileMenuOpen"
        />
      </div>

    </div>

    <!-- Mobile Menu Backdrop -->
    <div
      v-if="mobileMenuOpen"
      class="fixed inset-0 backdrop-blur-sm bg-white/30 z-40 lg:hidden"
      @click="mobileMenuOpen = false"
    ></div>

    <!-- Mobile Navigation Drawer -->
    <div
      :class="[
        'fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto',
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <!-- Close Button -->
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-900">Menu</h2>
        <UButton
          variant="ghost"
          color="gray"
          icon="i-heroicons-x-mark"
          @click="mobileMenuOpen = false"
        />
      </div>

      <div class="p-4">
        <nav class="flex flex-col space-y-3">
          <NuxtLink
            to="/"
            class="text-gray-700 hover:text-blue-600 transition-colors py-2 border-l-4 border-transparent pl-4"
            active-class="!text-blue-600 !border-blue-600"
            @click="mobileMenuOpen = false"
            exact
          >
            Bosh sahifa
          </NuxtLink>
          <NuxtLink
            to="/flights"
            class="text-gray-700 hover:text-blue-600 transition-colors py-2 border-l-4 border-transparent pl-4"
            active-class="!text-blue-600 !border-blue-600"
            @click="mobileMenuOpen = false"
          >
            Aviabiletlar
          </NuxtLink>
          <NuxtLink
            to="/hotels"
            class="text-gray-700 hover:text-blue-600 transition-colors py-2 border-l-4 border-transparent pl-4"
            active-class="!text-blue-600 !border-blue-600"
            @click="mobileMenuOpen = false"
          >
            Mehmonxonalar
          </NuxtLink>
          <NuxtLink
            to="/trains"
            class="text-gray-700 hover:text-blue-600 transition-colors py-2 border-l-4 border-transparent pl-4"
            active-class="!text-blue-600 !border-blue-600"
            @click="mobileMenuOpen = false"
          >
            Poyezdlar
          </NuxtLink>
          <NuxtLink
            to="/cars"
            class="text-gray-700 hover:text-blue-600 transition-colors py-2 border-l-4 border-transparent pl-4"
            active-class="!text-blue-600 !border-blue-600"
            @click="mobileMenuOpen = false"
          >
            Avtomobil ijarasi
          </NuxtLink>
          <NuxtLink
            to="/tours"
            class="text-gray-700 hover:text-blue-600 transition-colors py-2 border-l-4 border-transparent pl-4"
            active-class="!text-blue-600 !border-blue-600"
            @click="mobileMenuOpen = false"
          >
            Turlar
          </NuxtLink>
          <NuxtLink
            to="/discounts"
            class="text-gray-700 hover:text-blue-600 transition-colors py-2 border-l-4 border-transparent pl-4"
            active-class="!text-blue-600 !border-blue-600"
            @click="mobileMenuOpen = false"
          >
            Chegirmalar
          </NuxtLink>
        </nav>
        <div class="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-200">
          <UButton
            variant="ghost"
            color="gray"
            block
          >
            Kirish
          </UButton>
          <UButton
            color="primary"
            block
          >
            Ro'yxatdan o'tish
          </UButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>

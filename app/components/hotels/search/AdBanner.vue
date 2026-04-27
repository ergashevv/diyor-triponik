<template>
  <div class="bg-gradient-to-r from-blue-50 to-white rounded-lg md:rounded-xl mb-4 shadow-md hover:shadow-lg transition-all duration-300"
       :class="compact ? 'p-3' : 'p-4 md:p-6'">
    <div class="flex items-center justify-between gap-2"
         :class="compact ? 'flex-col' : 'flex-col sm:flex-row gap-3 sm:gap-4'">
      <!-- Left: Logo and Text -->
      <div class="flex items-center flex-1 w-full"
           :class="compact ? 'gap-2' : 'gap-3 sm:gap-4 md:gap-6 sm:w-auto'">
        <!-- Alfa Miles Logo -->
        <div class="shrink-0">
          <div class="font-bold"
               :class="compact ? 'text-xl' : 'text-2xl sm:text-3xl md:text-4xl'">
            <span class="text-blue-600">Alfa</span>
            <span class="text-green-500">Miles</span>
          </div>
        </div>

        <!-- Text Content -->
        <div class="flex flex-col"
             :class="compact ? 'gap-0.5' : 'gap-1 sm:gap-2'">
          <h3 class="font-bold text-gray-900 m-0 leading-tight"
              :class="compact ? 'text-xs' : 'text-sm sm:text-base md:text-[18px]'">
            <template v-if="compact">
              Alfa Travel bonuslari
            </template>
            <template v-else>
              Alfa Travel bonuslari<br class="hidden sm:inline" /><span class="sm:hidden"> </span>mehmonxona bron qilish uchun
            </template>
          </h3>
          <p class="text-gray-600 m-0"
             :class="compact ? 'text-[10px]' : 'text-xs sm:text-sm md:text-[14px]'">
            Har 20,000 UZS uchun 2 ball<template v-if="!compact"> olasiz</template>
          </p>
        </div>
      </div>

      <!-- Right: CTA Button -->
      <div class="shrink-0 w-full sm:w-auto">
        <button class="text-blue-600 border-none rounded-lg font-semibold cursor-pointer transition-colors flex items-center justify-center gap-2 hover:bg-blue-50"
                :class="compact ? 'w-full px-3 py-1.5 text-xs' : 'w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base'">
          Batafsil
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               :class="compact ? 'w-3 h-3' : 'w-4 h-4 sm:w-5 sm:h-5'">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Accept compact prop for when map is expanded
defineProps<{
  compact?: boolean
}>()
</script>

<style scoped>
/* Additional styles if needed */
</style>

<template>
  <div class="relative bg-white rounded-lg p-4 shadow-md mb-4"
       :class="compact ? 'flex flex-col gap-4' : 'flex flex-col md:flex-row gap-4'">

    <!-- Image Skeleton -->
    <div class="relative rounded-lg overflow-hidden bg-gray-200 animate-pulse"
         :class="compact ? 'w-full h-[200px]' : 'w-full md:w-[250px] h-[200px] md:h-auto md:self-stretch md:shrink-0'">
    </div>

    <!-- Content Skeleton -->
    <div v-if="compact" class="flex flex-col gap-2 flex-1">
      <!-- Stars -->
      <div class="flex gap-0.5">
        <div v-for="i in 5" :key="i" class="w-3 h-3 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <!-- Title -->
      <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>

      <!-- Location -->
      <div class="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>

      <!-- Room Type -->
      <div class="h-3 bg-gray-200 rounded animate-pulse w-2/3"></div>

      <!-- Icons -->
      <div class="flex gap-1.5">
        <div v-for="i in 3" :key="i" class="w-3.5 h-3.5 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <!-- Amenities -->
      <div class="flex flex-col gap-1">
        <div v-for="i in 2" :key="i" class="h-2.5 bg-gray-200 rounded animate-pulse w-3/4"></div>
      </div>

      <!-- Rating -->
      <div class="flex gap-1">
        <div v-for="i in 5" :key="i" class="w-1.5 h-1.5 bg-gray-200 rounded-full animate-pulse"></div>
      </div>

      <!-- Price Section -->
      <div class="mt-1 pt-2 border-t border-gray-200">
        <div class="h-2.5 bg-gray-200 rounded animate-pulse w-1/2 mb-2"></div>
        <div class="flex items-center justify-between gap-2">
          <div class="h-5 bg-gray-200 rounded animate-pulse w-24"></div>
          <div class="h-6 bg-gray-200 rounded animate-pulse w-16"></div>
        </div>
      </div>
    </div>

    <!-- Normal/Full Layout -->
    <div v-else class="flex-1 flex flex-col md:flex-row gap-4">
      <!-- Left: Hotel Details -->
      <div class="flex-1 flex flex-col gap-3">
        <!-- Stars -->
        <div class="flex gap-0.5">
          <div v-for="i in 5" :key="i" class="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <!-- Title -->
        <div class="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>

        <!-- Location -->
        <div class="h-3.5 bg-gray-200 rounded animate-pulse w-full"></div>

        <!-- Room Type -->
        <div class="space-y-1">
          <div class="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
          <div class="h-3.5 bg-gray-200 rounded animate-pulse w-2/3"></div>
        </div>

        <!-- Amenities -->
        <div class="flex flex-col gap-1.5">
          <div v-for="i in 3" :key="i" class="h-3.5 bg-gray-200 rounded animate-pulse w-3/4"></div>
        </div>

        <!-- Rating -->
        <div class="flex gap-1">
          <div v-for="i in 5" :key="i" class="w-2 h-2 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        <!-- Icons -->
        <div class="flex gap-2">
          <div v-for="i in 5" :key="i" class="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <!-- Right: Price and Action -->
      <div class="flex flex-col items-start md:items-end gap-3 w-full md:w-[200px] md:shrink-0">
        <div class="mt-auto text-left md:text-right w-full space-y-2">
          <div class="h-3.5 bg-gray-200 rounded animate-pulse w-full"></div>
          <div class="h-7 bg-gray-200 rounded animate-pulse w-32 ml-auto"></div>
          <div class="h-9 bg-gray-200 rounded animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  compact?: boolean
}>()
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

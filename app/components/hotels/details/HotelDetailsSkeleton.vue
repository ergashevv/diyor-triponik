<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Breadcrumb Skeleton -->
    <div class="bg-white border-b">
      <div class="container mx-auto px-4 py-3">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center gap-2">
            <div class="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
            <span>/</span>
            <div class="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
            <span>/</span>
            <div class="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hotel Header Skeleton -->
    <div class="bg-white">
      <div class="container mx-auto px-4 py-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div class="flex-1">
              <div class="h-8 bg-gray-200 rounded animate-pulse w-3/4 mb-3"></div>
              <div class="h-4 bg-gray-200 rounded animate-pulse w-1/2 mb-2"></div>
            </div>
            <div class="md:text-right">
              <div class="h-4 bg-gray-200 rounded animate-pulse w-24 mb-2 ml-auto"></div>
              <div class="h-9 bg-gray-200 rounded animate-pulse w-32 ml-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Gallery Skeleton -->
    <div class="bg-white pb-12 lg:pb-8">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex flex-col md:flex-row gap-2">
            <!-- Large image skeleton -->
            <div class="w-full md:flex-1">
              <div class="w-full h-64 md:h-[400px] bg-gray-200 rounded-lg animate-pulse"></div>
            </div>

            <!-- Small images skeleton -->
            <div class="w-full md:flex-1">
              <div class="grid grid-cols-2 gap-2 h-64 md:h-[400px]">
                <div class="bg-gray-200 rounded-lg animate-pulse"></div>
                <div class="bg-gray-200 rounded-lg animate-pulse"></div>
                <div class="bg-gray-200 rounded-lg animate-pulse"></div>
                <div class="bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>

          <!-- Gallery actions skeleton -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
            <div class="flex gap-2">
              <div class="h-10 bg-gray-200 rounded-lg animate-pulse w-32"></div>
              <div class="h-10 bg-gray-200 rounded-lg animate-pulse w-32"></div>
            </div>
            <div class="h-10 bg-gray-200 rounded-lg animate-pulse w-40"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Check-in/Check-out Skeleton -->
    <div class="bg-white py-4 border-t">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div>
                <div class="h-3 bg-gray-200 rounded animate-pulse w-20 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded animate-pulse w-32"></div>
              </div>
              <div>
                <div class="h-3 bg-gray-200 rounded animate-pulse w-20 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded animate-pulse w-32"></div>
              </div>
            </div>
            <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-32"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Room Cards Skeleton -->
    <div class="bg-white py-8">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="h-7 bg-gray-200 rounded animate-pulse w-64 mb-2"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-48 mb-6"></div>

          <!-- Room Card Skeletons -->
          <div v-for="i in 3" :key="i" class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <!-- Room details skeleton -->
            <div class="rounded-xl shadow-sm border border-gray-200 bg-gray-50">
              <div class="w-full h-48 bg-gray-200 rounded-t-xl animate-pulse"></div>
              <div class="p-4 md:p-6">
                <div class="h-5 bg-gray-200 rounded animate-pulse w-3/4 mb-4"></div>
                <div class="space-y-2">
                  <div class="h-3 bg-gray-200 rounded animate-pulse w-full"></div>
                  <div class="h-3 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  <div class="h-3 bg-gray-200 rounded animate-pulse w-4/5"></div>
                </div>
              </div>
            </div>

            <!-- Booking options skeletons -->
            <div v-for="j in 2" :key="j" class="rounded-xl p-6 shadow-sm bg-gray-50">
              <div class="h-5 bg-gray-200 rounded animate-pulse w-32 mb-4"></div>
              <div class="space-y-3 mb-6">
                <div class="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
                <div class="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                <div class="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
              </div>
              <div class="border-t pt-4 mt-auto">
                <div class="h-8 bg-gray-200 rounded animate-pulse w-28 mb-4"></div>
                <div class="h-10 bg-gray-200 rounded-lg animate-pulse w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Facilities Skeleton -->
    <div class="bg-white py-8 border-t">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="h-6 bg-gray-200 rounded animate-pulse w-48 mb-6"></div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div v-for="i in 8" :key="i" class="flex items-center gap-2">
              <div class="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
              <div class="h-4 bg-gray-200 rounded animate-pulse flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Skeleton -->
    <div class="bg-white py-8 border-t">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="h-6 bg-gray-200 rounded animate-pulse w-32 mb-6"></div>
          <div class="w-full h-[400px] bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

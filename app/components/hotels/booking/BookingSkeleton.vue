<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Breadcrumb Skeleton -->
    <div class="bg-white border-b">
      <div class="container mx-auto px-4 py-3">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center gap-2 flex-wrap">
            <div class="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
            <span>›</span>
            <div class="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
            <span>›</span>
            <div class="h-4 bg-gray-200 rounded animate-pulse w-28"></div>
            <span>›</span>
            <div class="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
            <span>›</span>
            <div class="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-6">
      <div class="max-w-6xl mx-auto">
        <!-- Hotel Summary Skeleton -->
        <div class="bg-white rounded-xl p-4 md:p-6 border border-gray-200 shadow-sm mb-6">
          <div class="flex flex-col md:flex-row gap-4 md:gap-6">
            <!-- Image Skeleton -->
            <div class="shrink-0 w-full md:w-40">
              <div class="w-full md:w-40 h-40 md:h-32 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>

            <!-- Details Skeleton -->
            <div class="flex-1 min-w-0">
              <div class="h-6 bg-gray-200 rounded animate-pulse w-3/4 mb-2"></div>
              <div class="flex items-center gap-2 mb-2">
                <div class="flex gap-1">
                  <div v-for="i in 5" :key="i" class="w-3 h-3 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div class="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
              </div>
              <div class="h-3 bg-gray-200 rounded animate-pulse w-1/2 mb-3"></div>
              <div class="h-4 bg-gray-200 rounded animate-pulse w-2/3 mb-1"></div>
              <div class="h-3 bg-gray-200 rounded animate-pulse w-1/3"></div>
            </div>

            <!-- Dates Skeleton -->
            <div class="shrink-0 flex md:flex-col gap-4 md:gap-0 border-t md:border-t-0 pt-4 md:pt-0">
              <div class="flex-1 md:mb-4">
                <div class="h-3 bg-gray-200 rounded animate-pulse w-12 mb-1"></div>
                <div class="h-5 bg-gray-200 rounded animate-pulse w-28 mb-1"></div>
                <div class="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
              </div>
              <div class="flex-1">
                <div class="h-3 bg-gray-200 rounded animate-pulse w-12 mb-1"></div>
                <div class="h-5 bg-gray-200 rounded animate-pulse w-28 mb-1"></div>
                <div class="h-3 bg-gray-200 rounded animate-pulse w-16"></div>
              </div>
            </div>
          </div>

          <!-- Amenities Skeleton -->
          <div class="mt-4 pt-4 border-t border-gray-200 flex flex-wrap gap-4">
            <div v-for="i in 3" :key="i" class="flex items-center gap-2">
              <div class="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div class="h-3 bg-gray-200 rounded animate-pulse w-24"></div>
            </div>
          </div>
        </div>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Left Column - Form Skeleton -->
          <div class="lg:col-span-2 space-y-4">
            <!-- Quick Login Skeleton -->
            <div class="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div class="h-4 bg-gray-200 rounded animate-pulse w-64"></div>
            </div>

            <!-- Guest Information Skeleton -->
            <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div class="flex items-start gap-3 mb-4">
                <div class="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                <div class="flex-1">
                  <div class="h-5 bg-gray-200 rounded animate-pulse w-48 mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded animate-pulse w-56"></div>
                </div>
              </div>

              <div class="space-y-4">
                <!-- Email -->
                <div>
                  <div class="h-4 bg-gray-200 rounded animate-pulse w-16 mb-2"></div>
                  <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                </div>

                <!-- Name Fields -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div class="h-4 bg-gray-200 rounded animate-pulse w-16 mb-2"></div>
                    <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                  </div>
                  <div>
                    <div class="h-4 bg-gray-200 rounded animate-pulse w-16 mb-2"></div>
                    <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                  </div>
                </div>

                <!-- Phone -->
                <div>
                  <div class="h-4 bg-gray-200 rounded animate-pulse w-16 mb-2"></div>
                  <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                </div>

                <!-- Country -->
                <div>
                  <div class="h-4 bg-gray-200 rounded animate-pulse w-20 mb-2"></div>
                  <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                </div>
              </div>

              <!-- Second Guest Section Skeleton -->
              <div class="mt-6 pt-6 border-t border-gray-200">
                <div class="h-4 bg-gray-200 rounded animate-pulse w-48"></div>
              </div>

              <!-- Payment Method Skeleton -->
              <div class="mt-6 pt-6 border-t border-gray-200">
                <div class="h-4 bg-gray-200 rounded animate-pulse w-48 mb-4"></div>

                <div class="space-y-4">
                  <!-- Card Option -->
                  <div class="border border-gray-300 rounded-lg p-4">
                    <div class="h-4 bg-gray-200 rounded animate-pulse w-40 mb-4"></div>
                    <div class="space-y-3">
                      <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                      <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                      <div class="grid grid-cols-2 gap-3">
                        <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                        <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-full"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Other Options -->
                  <div class="border border-gray-300 rounded-lg p-4">
                    <div class="h-4 bg-gray-200 rounded animate-pulse w-40 mb-2"></div>
                    <div class="h-3 bg-gray-200 rounded animate-pulse w-56 mb-3"></div>
                    <div class="flex gap-3 flex-wrap">
                      <div v-for="i in 5" :key="i" class="h-5 bg-gray-200 rounded animate-pulse w-16"></div>
                    </div>
                  </div>
                </div>

                <div class="mt-4">
                  <div class="h-3 bg-gray-200 rounded animate-pulse w-full mb-2"></div>
                  <div class="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Price Summary Skeleton -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm sticky top-20">
              <div class="h-5 bg-gray-200 rounded animate-pulse w-32 mb-4"></div>

              <div class="space-y-2 mb-4 pb-4 border-b">
                <div class="flex justify-between">
                  <div class="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                  <div class="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
                </div>
                <div class="flex justify-between">
                  <div class="h-3 bg-gray-200 rounded animate-pulse w-24"></div>
                  <div class="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
                </div>
              </div>

              <div class="mb-4 space-y-2">
                <div class="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                <div class="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
                <div class="h-3 bg-gray-200 rounded animate-pulse w-full"></div>
              </div>

              <div class="border-t pt-4 mb-6">
                <div class="h-4 bg-gray-200 rounded animate-pulse w-24 mb-2"></div>
                <div class="h-9 bg-gray-200 rounded animate-pulse w-32 mb-1"></div>
                <div class="h-3 bg-gray-200 rounded animate-pulse w-40 mb-2"></div>
                <div class="h-3 bg-gray-200 rounded animate-pulse w-full"></div>
              </div>

              <div class="h-12 bg-gray-200 rounded-lg animate-pulse w-full mb-4"></div>

              <div class="flex gap-2 justify-center flex-wrap opacity-50">
                <div v-for="i in 3" :key="i" class="w-8 h-5 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
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

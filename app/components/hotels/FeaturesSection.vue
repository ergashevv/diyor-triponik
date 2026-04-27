<template>
  <section class="py-12 md:py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="bg-[#2563EB] rounded-2xl p-6 text-white cursor-pointer flex flex-col"
        >
          <!-- Title at Top -->
          <h3 class="font-bold text-lg mb-6 leading-tight">
            {{ feature.title }}
          </h3>

          <!-- Image at Bottom -->
          <div class="mt-auto flex items-end justify-center gap-2">
            <!-- If has background image, show side by side -->
            <template v-if="feature.backgroundImage">
              <!-- Train Image (left) -->
              <img
                :src="feature.image"
                :alt="feature.title"
                class="w-1/2 h-32 object-contain"
              />
              <!-- City Image (right) -->
              <img
                :src="feature.backgroundImage"
                alt="Background"
                class="w-1/2 h-32 object-contain"
              />
            </template>
            <!-- Single image for other cards -->
            <img
              v-else
              :src="feature.image"
              :alt="feature.title"
              class="w-full h-40 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: 1,
    title: 'Mehmonxonalarni solishtiring va eng yaxshisini tanlang',
    icon: '🏨'
  },
  {
    id: 2,
    title: 'Bepul bekor qilish imkoniyati',
    icon: '✅'
  },
  {
    id: 3,
    title: 'Eng yaxshi narxlarga kafolat',
    icon: '💰'
  },
  {
    id: 4,
    title: '24/7 mijozlarni qo\'llab-quvvatlash',
    icon: '💬'
  },
  {
    id: 5,
    title: 'Millionlab mehmonxonalar dunyo bo\'ylab',
    icon: '🌍'
  }
]
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3 truncate">
          Mamnun mijozlar bizning eng yaxshi reklamalarimizdir
        </h2>
        <p class="text-gray-600">
          Mijozlarimiz biz haqimizda nima deyishadi
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
        >
          <!-- Quote Icon -->
          <div class="mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <!-- Review Text -->
          <p class="text-gray-700 mb-6 leading-relaxed">
            {{ testimonial.review }}
          </p>

          <!-- Author Info -->
          <div class="flex items-center gap-4">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div class="font-bold text-gray-900">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-500">{{ testimonial.location }}</div>
            </div>
          </div>

          <!-- Rating -->
          <div class="flex gap-1 mt-4 text-yellow-500">
            <span v-for="i in 5" :key="i">⭐</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    name: 'Aziz Karimov',
    location: 'Toshkent',
    avatar: 'https://i.pravatar.cc/150?img=12',
    review: 'Triponik xizmati ajoyib! Mehmonxonani tezda topdim va narxi ham qulay edi. Xizmat sifati juda yaxshi va yordam markazi doimo tayyor.'
  },
  {
    id: 2,
    name: 'Madina Umarova',
    location: 'Samarqand',
    avatar: 'https://i.pravatar.cc/150?img=45',
    review: 'Dubayga sayohatni Triponik orqali rejalashtirdim. Hamma narsa mukammal bo\'ldi. Tavsiya qilaman! Juda qulay interfeys va professional xizmat.'
  },
  {
    id: 3,
    name: 'Bobur Ismoilov',
    location: 'Buxoro',
    avatar: 'https://i.pravatar.cc/150?img=33',
    review: 'Eng yaxshi sayohat platformasi! Parvozlar, mehmonxonalar hammasini bir joydan topish mumkin. Juda qulay va tezkor xizmat ko\'rsatiladi.'
  }
]
</script>

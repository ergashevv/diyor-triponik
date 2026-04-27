<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Main Content -->
    <div class="container mx-auto px-3 md:px-4 py-4 md:py-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg p-4 md:p-5 lg:p-6">
              <div class="mb-4 md:mb-5 lg:mb-6">
                <p class="text-xs text-gray-500 mb-1">E-mail</p>
                <p class="text-sm font-medium text-gray-900 break-all">{{ userEmail }}</p>
                <NuxtLink to="/profile/settings" class="text-sm text-blue-600 hover:underline mt-1.5 inline-block">
                  Profil sozlamalari
                </NuxtLink>
              </div>

              <nav class="space-y-0 overflow-x-auto lg:overflow-visible">
                <div class="flex lg:flex-col gap-2 lg:gap-0 pb-2 lg:pb-0">
                  <NuxtLink
                    to="/profile/bookings"
                    class="whitespace-nowrap lg:whitespace-normal block py-2 px-3 lg:px-0 text-xs md:text-sm font-medium text-blue-600"
                  >
                    Mening bronlarim
                  </NuxtLink>
                  <NuxtLink
                    to="/profile/flights"
                    class="whitespace-nowrap lg:whitespace-normal block py-2 px-3 lg:px-0 text-xs md:text-sm text-blue-600"
                  >
                    Aviachiptalar
                  </NuxtLink>
                  <NuxtLink
                    to="/profile/trains"
                    class="whitespace-nowrap lg:whitespace-normal block py-2 px-3 lg:px-0 text-xs md:text-sm text-blue-600"
                  >
                    Poyezd biletlari
                  </NuxtLink>
                  <NuxtLink
                    to="/profile/hotels"
                    class="whitespace-nowrap lg:whitespace-normal block py-2 px-3 lg:px-0 text-xs md:text-sm text-blue-600"
                  >
                    Mehmonxonalar
                  </NuxtLink>
                  <NuxtLink
                    to="/profile/transfers"
                    class="whitespace-nowrap lg:whitespace-normal block py-2 px-3 lg:px-0 text-xs md:text-sm text-blue-600"
                  >
                    Mening transferlarim
                  </NuxtLink>
                  <NuxtLink
                    to="/profile/cars"
                    class="whitespace-nowrap lg:whitespace-normal block py-2 px-3 lg:px-0 text-xs md:text-sm text-blue-600"
                  >
                    Avtoijaralar
                  </NuxtLink>
                  <NuxtLink
                    to="/profile/promo"
                    class="whitespace-nowrap lg:whitespace-normal block py-2 px-3 lg:px-0 text-xs md:text-sm text-blue-600"
                  >
                    Mening promo kodlarim
                  </NuxtLink>
                </div>
              </nav>
            </div>
          </div>

          <!-- Main Content -->
          <div class="lg:col-span-3">
            <div class="rounded-lg">
              <!-- Header -->
              <div class="p-4 md:p-5 lg:p-6">
                <h1 class="text-xl md:text-2xl font-bold text-gray-900">Mening bronlarim</h1>
              </div>

              <!-- Tabs -->
              <div class="border-b overflow-x-auto">
                <div class="flex px-4 md:px-5 lg:px-6 min-w-max">
                  <button
                    @click="activeTab = 'all'"
                    :class="[
                      'px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                      activeTab === 'all'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    ]"
                  >
                    Barcha
                  </button>
                  <button
                    @click="activeTab = 'favorite'"
                    :class="[
                      'px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                      activeTab === 'favorite'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    ]"
                  >
                    Sevimli
                  </button>
                  <button
                    @click="activeTab = 'cancelled'"
                    :class="[
                      'px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                      activeTab === 'cancelled'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    ]"
                  >
                    Bekor qilingan
                  </button>
                </div>
              </div>

              <!-- Bookings List -->
              <div class="p-4 md:p-5 lg:p-6">
                <!-- Subtitle for cancelled tab -->
                <h2 v-if="activeTab === 'cancelled'" class="text-lg md:text-xl font-semibold text-gray-900 mb-4">Bekor qilingan bronlar</h2>

                <div v-if="loading" class="text-center py-8 md:py-12">
                  <Icon name="mdi:loading" class="animate-spin text-3xl md:text-4xl text-blue-600 mb-2" />
                  <p class="text-sm md:text-base text-gray-600">Yuklanmoqda...</p>
                </div>

                <div v-else-if="filteredBookings.length === 0" class="text-center py-8 md:py-12">
                  <Icon name="mdi:calendar-blank" class="text-4xl md:text-6xl text-gray-300 mb-3 md:mb-4" />
                  <p class="text-sm md:text-base text-gray-600">Bronlar topilmadi</p>
                </div>

                <div v-else class="space-y-3 md:space-y-4">
                  <div
                    v-for="booking in filteredBookings"
                    :key="booking.reference"
                    class="bg-white rounded-lg md:rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 overflow-hidden"
                  >
                    <!-- Hotel Image Carousel -->
                    <div class="w-full md:w-64 lg:w-80 md:shrink-0 relative">
                      <div class="relative h-48 md:h-56">
                        <img
                          :src="booking.images[currentImageIndex[booking.reference] || 0]"
                          :alt="booking.hotelName"
                          class="w-full h-full object-cover rounded-2xl"
                        />

                        <!-- Image Navigation -->
                        <button
                          v-if="booking.images.length > 1"
                          @click="previousImage(booking.reference, booking.images.length)"
                          class="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                        >
                          <Icon name="mdi:chevron-left" class="text-gray-800 text-lg md:text-xl" />
                        </button>
                        <button
                          v-if="booking.images.length > 1"
                          @click="nextImage(booking.reference, booking.images.length)"
                          class="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                        >
                          <Icon name="mdi:chevron-right" class="text-gray-800 text-lg md:text-xl" />
                        </button>

                        <!-- Image Counter -->
                        <div class="absolute bottom-2 md:bottom-3 right-2 md:right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {{ (currentImageIndex[booking.reference] || 0) + 1 }}/{{ booking.images.length }}
                        </div>
                      </div>
                    </div>

                    <!-- Booking Details -->
                    <div class="flex-1 flex flex-col p-3 md:p-4">
                      <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4 gap-3 md:gap-0">
                        <div class="flex-1">
                          <p class="text-xs md:text-sm text-gray-600 mb-1">{{ booking.location }}</p>
                          <h3 class="text-base md:text-lg lg:text-xl font-semibold text-blue-600 mb-1 md:mb-2">{{ booking.hotelName }}</h3>
                          <p class="text-xs md:text-sm text-gray-800 mb-0.5 md:mb-1">{{ booking.phone }}</p>
                          <p class="text-xs md:text-sm text-gray-800 mb-1 md:mb-2">{{ booking.address }}</p>
                          <p class="text-xs md:text-sm text-gray-800">{{ booking.rooms }} xona, {{ booking.guests }} kishi uchun</p>
                        </div>

                        <div class="text-left md:text-right md:ml-8">
                          <p class="text-xs text-gray-500 mb-0.5">Bron raqami: {{ booking.reference }}</p>
                          <p class="text-xs text-gray-500 mb-2 md:mb-4">Kod: {{ booking.code }}</p>
                          <p class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{{ booking.currency }} {{ formatPrice(booking.price) }}</p>
                          <p
                            :class="[
                              'text-xs md:text-sm font-medium',
                              booking.status === 'cancelled' ? 'text-red-600' : 'text-green-600'
                            ]"
                          >
                            {{ getStatusText(booking.status) }}
                          </p>
                        </div>
                      </div>

                      <div class="flex flex-col md:flex-row md:justify-between md:items-end gap-3">
                        <!-- Left: Check-in/out -->
                        <div class="text-xs md:text-sm">
                          <div class="flex gap-4 md:gap-8 text-gray-600 mb-1">
                            <span>Kirish: {{ booking.checkIn }}</span>
                            <span>Chiqish: {{ booking.checkOut }}</span>
                          </div>
                          <div class="flex gap-4 md:gap-8 font-semibold text-gray-900">
                            <span>{{ formatDate(booking.checkInDate) }}</span>
                            <span>{{ formatDate(booking.checkOutDate) }}</span>
                          </div>
                        </div>

                        <!-- Right: Button -->
                        <button
                          v-if="booking.status === 'cancelled'"
                          class="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium rounded-lg transition-colors"
                        >
                          Qayta bron qilish
                        </button>
                        <div v-else class="flex flex-col md:flex-row gap-2 md:gap-3 w-full md:w-auto">
                          <button class="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium rounded-lg transition-colors">
                            Batafsil
                          </button>
                          <button class="w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 border border-red-600 text-red-600 hover:bg-red-50 text-sm md:text-base font-medium rounded-lg transition-colors">
                            Bekor qilish
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('cancelled')
const loading = ref(false)
const currentImageIndex = ref({})

// Mock user email - bu keyinchalik auth dan olinadi
const userEmail = ref('farrux.abdullayev@list.ru')

// Mock bookings data - bu keyinchalik API dan olinadi
const bookings = ref([
  {
    reference: '955288909',
    code: '588670936',
    hotelName: 'Hotel Winterfell Tverskaya',
    phone: '+7 495 545 41 61',
    address: 'Staropimenovskij pereulok, 6, Moskva',
    location: 'Moskva, Rossiya',
    rooms: 1,
    guests: 2,
    checkIn: '14:00',
    checkOut: '12:00',
    checkInDate: '2025-05-17',
    checkOutDate: '2025-05-18',
    price: 4090,
    currency: '₽',
    status: 'cancelled',
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
      'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800',
      'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800',
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800',
      'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=800',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800'
    ]
  }
])

const filteredBookings = computed(() => {
  if (activeTab.value === 'all') return bookings.value
  if (activeTab.value === 'favourite') return bookings.value.filter(b => b.favourite)
  if (activeTab.value === 'cancelled') return bookings.value.filter(b => b.status === 'cancelled')
  return bookings.value
})

const formatPrice = (price) => {
  return parseFloat(price).toLocaleString('ru-RU').replace(/,/g, ' ')
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr']
  const month = months[date.getMonth()]
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

const getStatusText = (status) => {
  if (status === 'cancelled') return 'Bron bekor qilingan'
  if (status === 'confirmed') return 'Tasdiqlangan'
  if (status === 'pending') return 'Kutilmoqda'
  return status
}

const previousImage = (reference, totalImages) => {
  if (!currentImageIndex.value[reference]) {
    currentImageIndex.value[reference] = 0
  }
  currentImageIndex.value[reference] =
    (currentImageIndex.value[reference] - 1 + totalImages) % totalImages
}

const nextImage = (reference, totalImages) => {
  if (!currentImageIndex.value[reference]) {
    currentImageIndex.value[reference] = 0
  }
  currentImageIndex.value[reference] =
    (currentImageIndex.value[reference] + 1) % totalImages
}

useSeoMeta({
  title: 'Mening bronlarim - Triponik',
  description: 'Bronlangan mehmonxonalar ro\'yxati',
})
</script>

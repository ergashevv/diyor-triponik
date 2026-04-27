<template>
  <div class='bg-gray-50'>
    <!-- Loading State -->
    <HotelsDetailsHotelDetailsSkeleton v-if="loading" />

    <!-- Error State -->
    <div v-else-if="error" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <p class="text-red-600 mb-4">Xatolik: {{ error }}</p>
        <button @click="fetchHotelDetails" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
          Qayta urinish
        </button>
      </div>
    </div>

    <!-- Hotel Content -->
    <div v-else-if="hotel">
      <div class="container mx-auto px-4 py-6">
        <div class="max-w-6xl mx-auto  rounded-xl overflow-visible">
          <!-- Breadcrumb -->
          <div class="px-4 py-3">
            <div class="flex items-center gap-2 flex-wrap text-xs md:text-sm text-gray-600">
            <Icon name="mdi:magnify" class="text-gray-600 hidden md:block" />
            <NuxtLink to="/" class="hover:text-blue-600 whitespace-nowrap">
              Bosh sahifa
            </NuxtLink>
            <span>/</span>
            <NuxtLink
              :to="{
                path: '/hotels/search',
                query: {
                  destination: hotel.destinationName,
                  destinationCode: hotel.destinationCode,
                  checkIn: hotel.checkIn?.split('T')[0],
                  checkOut: hotel.checkOut?.split('T')[0],
                  adults: currentAdults,
                  children: currentChildren,
                  rooms: currentRooms
                }
              }"
              class="hover:text-blue-600 whitespace-nowrap font-medium"
            >
              {{ hotel.destinationName }}
            </NuxtLink>
            <span>/</span>
            <span class="whitespace-nowrap truncate">{{ formatDateShort(hotel.checkIn) }} — {{ formatDateShort(hotel.checkOut) }}</span>
            </div>
          </div>

          <!-- Hotel Header -->
          <div class="px-4 py-4 bg-white">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-2 mb-2">
                  <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{{ hotel?.name }}</h1>
                  <span v-if="hotel?.categoryName" class="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold"> Arzon </span>
                </div>

                <div class="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-600 mb-1">
                  <span>{{ hotel?.location }}</span>
                  <button
                    @click="scrollToMap"
                    class="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    <Icon name="mdi:map-marker" class="text-base" />
                    Xaritada ko'rsatish
                  </button>
                </div>
              </div>

              <div class="md:text-right">
                <p class="text-sm text-black mb-1 text-[18px] font-bold">Narxlar:</p>
                <p class="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{{ hotel.totalNet }} {{ hotel.currency }}</p>
              </div>
            </div>
          </div>

          <!-- Image Gallery -->
          <div class="px-4 pb-12 lg:pb-8 bg-white">
            <div class="flex flex-col md:flex-row gap-2">
              <!-- Left: Large image -->
              <div class="w-full md:flex-1">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800" alt="Hotel" class="w-full h-64 md:h-[400px] object-cover rounded-lg" />
              </div>

              <!-- Right: 4 small images in 2x2 grid -->
              <div class="w-full md:flex-1">
                <div class="grid grid-cols-2 gap-2 h-64 md:h-[400px]">
                  <div>
                    <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" alt="Hotel Room" class="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400" alt="Hotel Interior" class="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400" alt="Hotel Bed" class="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div>
                    <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" alt="Hotel View" class="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hotel Info Summary -->
          <div class="px-4 py-6 bg-white">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Asosiy qulayliklar -->
              <div class="rounded-xl p-6 bg-white border border-gray-200 flex flex-col">
                <h2 class="text-lg font-bold text-gray-900 mb-4">Asosiy qulayliklar</h2>
                <div class="space-y-4 flex-1">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <Icon name="mdi:wifi" class="text-gray-900 text-2xl" />
                      <span class="text-sm text-gray-900">Tekin Internet</span>
                    </div>
                    <span class="text-sm text-gray-600">330 m</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <Icon name="mdi:car" class="text-gray-900 text-2xl" />
                      <span class="text-sm text-gray-900">Transfer</span>
                    </div>
                    <span class="text-sm text-gray-600">470 m</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <Icon name="mdi:parking" class="text-gray-900 text-2xl" />
                      <span class="text-sm text-gray-900">Parking</span>
                    </div>
                    <span class="text-sm text-gray-600">360 m</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <img src="/assets/images/mealBlack.png" alt="meal" class="w-6 h-6" />
                      <span class="text-sm text-gray-900">Nonushta</span>
                    </div>
                    <span class="text-sm text-gray-600">530 m</span>
                  </div>
                </div>
                <button @click="scrollToMap" class="w-full mt-6 py-3 text-blue-600 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Xaritada ko'rish • 30
                </button>
              </div>

              <!-- Yaqin atrofdagi joylar -->
              <div class="rounded-xl p-6 bg-white border border-gray-200 flex flex-col">
                <h2 class="text-lg font-bold text-gray-900 mb-4">Yaqin atrofdagi joylar</h2>
                <div class="space-y-4 flex-1">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                        <Icon name="mdi:map-marker" class="text-red-500 text-xl" />
                      </div>
                      <span class="text-sm text-gray-900">Mayakovskaya</span>
                    </div>
                    <span class="text-sm text-gray-600">330 m</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon name="mdi:office-building" class="text-blue-500 text-xl" />
                      </div>
                      <span class="text-sm text-gray-900">Pushkinskaya maydoni</span>
                    </div>
                    <span class="text-sm text-gray-600">470 m</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon name="mdi:office-building" class="text-blue-500 text-xl" />
                      </div>
                      <span class="text-sm text-gray-900">Triumfalnaya maydoni</span>
                    </div>
                    <span class="text-sm text-gray-600">360 m</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                        <Icon name="mdi:map-marker" class="text-red-500 text-xl" />
                      </div>
                      <span class="text-sm text-gray-900">Tverskaya</span>
                    </div>
                    <span class="text-sm text-gray-600">530 m</span>
                  </div>
                </div>
                <button @click="scrollToMap" class="w-full mt-6 py-3 text-blue-600 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Xaritada ko'rish • 30
                </button>
              </div>

              <!-- Baho va sharhlar -->
              <div class="rounded-xl p-6 bg-white border border-gray-200 relative flex flex-col">
                <div class="absolute top-0 right-4 w-14 h-14 flex items-center justify-center">
                  <img src="/assets/logos/Vector.png" alt="rating" class="absolute w-full h-full" />
                  <span class="relative text-white font-bold text-lg">9.3</span>
                </div>
                <h2 class="text-lg font-bold text-gray-900 mb-4">Baho va sharhlar</h2>
                <div class="space-y-4 mt-8 flex-1">
                  <div class="flex items-center gap-3">
                    <Icon name="mdi:car" class="text-blue-600 text-2xl" />
                    <span class="text-sm text-gray-900">Transfer xizmati</span>
                  </div>
                </div>
                <div class="flex items-center gap-2 mt-6">
                  <button class="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50">
                    <Icon name="mdi:chevron-left" class="text-gray-600" />
                  </button>
                  <button class="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50">
                    <Icon name="mdi:chevron-right" class="text-gray-600" />
                  </button>
                  <button class="flex-1 py-3 text-blue-600 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Barcha sharhlar - 27
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Check-in/Check-out Dates -->
          <div class="px-4 py-4 border-t border-gray-100 bg-white overflow-visible">
            <div class="flex items-center justify-between flex-wrap gap-4 overflow-visible">
              <div v-if="!isEditingDates" class="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div>
                  <p class="text-xs md:text-sm text-gray-600 mb-1">Kelish sanasi</p>
                  <p class="text-sm md:text-base font-semibold text-gray-900">{{ formatDate(hotel.checkIn) }}</p>
                </div>
                <div>
                  <p class="text-xs md:text-sm text-gray-600 mb-1">Ketish sanasi</p>
                  <p class="text-sm md:text-base font-semibold text-gray-900">{{ formatDate(hotel.checkOut) }}</p>
                </div>
              </div>

              <!-- Edit Mode -->
              <div v-else class="w-full space-y-4 overflow-visible">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-visible">
                  <div class="w-full min-w-0">
                    <label class="text-xs md:text-sm text-gray-600 block mb-2">Kelish sanasi</label>
                    <div class="relative">
                      <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <input
                        v-model="editCheckIn"
                        type="date"
                        placeholder="Kirish"
                        class="w-full h-12 pl-10 pr-2 bg-white border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div class="w-full min-w-0">
                    <label class="text-xs md:text-sm text-gray-600 block mb-2">Ketish sanasi</label>
                    <div class="relative">
                      <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <input
                        v-model="editCheckOut"
                        type="date"
                        placeholder="Chiqish"
                        class="w-full h-12 pl-10 pr-2 bg-white border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div class="w-full min-w-0">
                    <label class="text-xs md:text-sm text-gray-600 block mb-2">Mehmonlar</label>
                    <div ref="guestsDropdownRef" class="relative">
                      <button
                        type="button"
                        @click="toggleGuestsDropdown"
                        class="w-full h-12 px-4 bg-white border border-gray-300 rounded-lg text-base text-gray-900 focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none transition-all text-left flex items-center justify-between"
                      >
                        <div class="flex items-center gap-2">
                          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>{{ editAdults }} kattalar{{ editChildren > 0 ? `, ${editChildren} bolalar` : '' }}, {{ editRooms }} xona</span>
                        </div>
                        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <!-- Dropdown -->
                      <div v-if="showGuestsDropdown" class="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 space-y-4">
                        <!-- Kattalar -->
                        <div class="flex items-center justify-between">
                          <span class="text-sm text-gray-900">Kattalar</span>
                          <div class="flex items-center gap-3">
                            <button
                              type="button"
                              @click="decrementAdults"
                              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              :disabled="editAdults <= 1"
                              :class="{ 'opacity-50 cursor-not-allowed': editAdults <= 1 }"
                            >
                              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                              </svg>
                            </button>
                            <span class="text-base font-semibold text-gray-900 w-8 text-center">{{ editAdults }}</span>
                            <button
                              type="button"
                              @click="incrementAdults"
                              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              :disabled="editAdults >= 10"
                              :class="{ 'opacity-50 cursor-not-allowed': editAdults >= 10 }"
                            >
                              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <!-- Bolalar -->
                        <div class="flex items-center justify-between">
                          <span class="text-sm text-gray-900">Bolalar</span>
                          <div class="flex items-center gap-3">
                            <button
                              type="button"
                              @click="decrementChildren"
                              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              :disabled="editChildren <= 0"
                              :class="{ 'opacity-50 cursor-not-allowed': editChildren <= 0 }"
                            >
                              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                              </svg>
                            </button>
                            <span class="text-base font-semibold text-gray-900 w-8 text-center">{{ editChildren }}</span>
                            <button
                              type="button"
                              @click="incrementChildren"
                              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              :disabled="editChildren >= 10"
                              :class="{ 'opacity-50 cursor-not-allowed': editChildren >= 10 }"
                            >
                              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <!-- Xonalar -->
                        <div class="flex items-center justify-between">
                          <span class="text-sm text-gray-900">Xonalar</span>
                          <div class="flex items-center gap-3">
                            <button
                              type="button"
                              @click="decrementRooms"
                              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              :disabled="editRooms <= 1"
                              :class="{ 'opacity-50 cursor-not-allowed': editRooms <= 1 }"
                            >
                              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                              </svg>
                            </button>
                            <span class="text-base font-semibold text-gray-900 w-8 text-center">{{ editRooms }}</span>
                            <button
                              type="button"
                              @click="incrementRooms"
                              class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              :disabled="editRooms >= 10"
                              :class="{ 'opacity-50 cursor-not-allowed': editRooms >= 10 }"
                            >
                              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-2 sm:justify-end">
                  <button
                    @click="cancelEditDates"
                    class="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 h-12 rounded-lg text-sm font-medium transition-colors"
                  >
                    Bekor qilish
                  </button>
                  <button
                    @click="saveDateChanges"
                    class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 h-12 rounded-lg text-sm font-medium transition-colors"
                  >
                    Saqlash
                  </button>
                </div>
              </div>

              <button
                v-if="!isEditingDates"
                @click="startEditDates"
                class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-600 border border-gray-300 px-6 py-3 h-12 rounded-lg text-sm font-medium transition-colors"
              >
                <Icon name="mdi:pencil" />
                O'zgartirish
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mavjud xona variantlari -->
      <div class="bg-gray-50 py-8">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Mavjud xona variantlari</h2>
            <p class="text-xs md:text-sm text-gray-600 mb-6">{{ numberOfNights }} kecha uchun, {{ currentAdults }} kattalar{{ currentChildren > 0 ? `, ${currentChildren} bolalar` : '' }}</p>

            <!-- Filters -->
            <!-- <div class="flex flex-wrap gap-3 mb-6">
              <button class="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-900 transition-colors">
                <span>Yotoqlar</span>
                <Icon name="mdi:chevron-down" class="text-gray-600" />
              </button>
              <button class="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-900 transition-colors">
                <span>Ovqatlar</span>
                <Icon name="mdi:chevron-down" class="text-gray-600" />
              </button>
              <button class="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-900 transition-colors">
                <span>To'lov</span>
                <Icon name="mdi:chevron-down" class="text-gray-600" />
              </button>
              <button class="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-900 transition-colors">
                <span>Bekor qilish siyosati</span>
                <Icon name="mdi:chevron-down" class="text-gray-600" />
              </button>
            </div> -->

            <!-- Room Cards - Dynamic from API -->
            <div v-if="rooms.length === 0" class="text-center py-8 text-gray-600">
              Hozircha xonalar topilmadi
            </div>

            <template v-for="(room, roomIndex) in rooms" :key="roomIndex">
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <!-- Left: Room Details Card -->
                <div class="rounded-2xl shadow-md hover:shadow-lg border border-gray-100 overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1">
                  <!-- Room Image -->
                  <div class="relative w-full h-52 overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600"
                         :alt="room.name"
                         class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <!-- Room Info -->
                  <div class="p-5 md:p-6">
                    <h3 class="font-bold text-lg md:text-xl text-gray-900 mb-2 leading-tight">{{ room.name }}</h3>

                    <!-- Room Capacity and Bed Info -->
                    <div class="mb-4 space-y-1">
                      <p class="text-gray-700" style="font-size: 16px;">{{ currentAdults }} kishilik xona </p>
                      <p class="text-gray-600" style="font-size: 14px;">To'liq {{ currentAdults }} kishilik yotoq (hammabop hojatxona)</p>
                    </div>

                    <!-- Room Facilities -->
                    <div v-if="room.roomFacilities && room.roomFacilities.length > 0" class="space-y-3">
                      <div v-for="(facility, idx) in room.roomFacilities?.slice(0, 5)" :key="idx" class="flex items-start gap-3 text-sm text-gray-700 group/item">
                        <Icon name="mdi:check-circle" class="text-lg text-green-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span class="leading-relaxed">{{ facility.description }}</span>
                      </div>
                      <div v-if="room.roomFacilities.length > 5" class="pt-2">
                        <button class="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 transition-colors">
                          <span>Barchasini ko'rish</span>
                          <Icon name="mdi:chevron-right" class="text-base" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Right: Booking Options - Loop through rates -->
                <template v-for="(rate, rateIndex) in room.rates?.slice(0, 2)" :key="rateIndex">
                  <div class="rounded-xl p-6 shadow-md border border-gray-100 flex flex-col bg-white">
                    <!-- Room Type with Icon -->
                    <div class="flex items-center gap-2 mb-4 pb-3 border-gray-100">
                      <Icon name="mdi:bed" class="text-xl text-gray-900" />
                      <span class="font-bold text-gray-900 text-base">{{ currentAdults }} kishilik yotoq</span>
                    </div>

                    <div class="space-y-3 mb-6 flex-1">
                      <!-- Food/Board Info -->
                      <div class="flex items-start gap-2 text-sm">
                        <img
                             src="/assets/images/meal.png"
                             alt="meal"
                             class="mt-0.5 shrink-0"
                             style="width: 14px; height: 14px;" />
                        <!-- <Icon v-else name="mdi:close-circle" class="text-red-600 text-lg mt-0.5 shrink-0" /> -->
                        <span :class="rate.boardName?.toLowerCase().includes('breakfast') || rate.boardName?.toLowerCase().includes('meal') ? 'text-green-600' : 'text-red-600'">
                          {{ rate.boardName?.toLowerCase().includes('breakfast') || rate.boardName?.toLowerCase().includes('meal') ? 'Taomlar kiritilgan' : 'Taomlar kiritilmagan' }}
                        </span>
                      </div>

                      <!-- Cancellation Policy -->
                      <div v-if="rate.cancellationPolicies?.length > 0" class="flex items-start gap-2 text-sm">
                        <div class="w-4 h-4 rounded-full bg-white border-2 border-green-600 flex items-center justify-center mt-0.5 shrink-0">
                          <Icon name="mdi:check" class="text-green-600 text-xs" />
                        </div>
                        <span class="text-green-600">{{ formatDateShort(rate.cancellationPolicies[0].from) }} gacha bepul bekor qilish</span>
                      </div>
                      <div v-else class="flex items-start gap-2 text-sm">
                        <Icon name="mdi:close-circle" class="text-red-600 text-lg mt-0.5 shrink-0" />
                        <span class="text-red-600">Qaytarilmaydigan</span>
                      </div>

                      <!-- Payment Type -->
                      <div class="flex items-start gap-2 text-sm">
                        <img src="/assets/images/paynow.png" alt="payment" class="mt-0.5 shrink-0" style="width: 20px; height: 20px;" />
                        <span class="text-gray-900">{{ rate.paymentType === 'AT_WEB' ? 'Hozir to\'lang' : 'Joyida to\'lang' }}</span>
                      </div>

                      <!-- Additional Room Features (placeholder) -->
                      <div class="flex items-start gap-2 text-sm ">
                        <img src="/assets/images/nowindow.png" alt="payment" class="mt-0.5 shrink-0" style="width: 20px; height: 20px;" />
                        <span class="text-red-600">Derazasiz</span>
                      </div>

                      <div class="flex items-start gap-2 text-sm border-b border-gray-200 pb-3">
                        <Icon name="mdi:smoking-off" class="text-gray-900 text-lg mt-0.5 shrink-0" />
                        <span class="text-gray-900">Chekish mumkin emas</span>
                      </div>
                    </div>

                    <!-- Price Section -->
                    <div class="mt-auto">
                      <span v-if="rateIndex === 0" class="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded mb-3">Eng yaxshi narx</span>
                      <p class="text-3xl font-bold text-blue-600 mb-2">
                        {{ rate.price?.net || 0 }}
                        <span class="text-2xl">{{ rate.price?.currency || 'UZS' }}</span>
                      </p>
                      <p class="text-sm text-gray-600 mb-1">{{ rate.price?.taxesIncluded ? 'Barcha soliqlar kiritilgan' : 'Qo\'shimcha soliqlar joyida to\'lanadi' }}</p>
                      <p class="text-sm text-gray-600 mb-4">{{ numberOfNights }} kecha uchun {{ currentAdults }} mehmon</p>

                      <!-- Booking Button -->
                      <NuxtLink
                        :to="{
                          path: `/hotels/${hotelId}/booking`,
                          query: {
                            rateKey: rate.rateKey,
                            checkIn: route.query.checkIn,
                            checkOut: route.query.checkOut
                          }
                        }"
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors text-center block">
                        Bron qilish
                      </NuxtLink>
                    </div>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- Joylashuv Section -->
      <div class="bg-gray-50 py-8">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto bg-white rounded-xl p-6">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">Joylashuv</h2>
            <p class="text-xs md:text-sm text-gray-600 mb-6">{{ hotel.location }}</p>
            <div class="flex items-center gap-4 mb-6 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <Icon name="mdi:map-marker-radius" class="text-blue-600" />
                <span>Kenglik: {{ hotel.latitude?.toFixed(6) }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="mdi:map-marker-radius" class="text-blue-600" />
                <span>Uzunlik: {{ hotel.longitude?.toFixed(6) }}</span>
              </div>
            </div>

            <!-- Map -->
            <ClientOnly>
              <div class="relative rounded-xl overflow-hidden border border-gray-200">
                <div class="p-3 border-b border-gray-200 flex items-center justify-between bg-white">
                  <h3 class="font-semibold text-gray-900 text-sm md:text-base">Xaritada ko'rish</h3>
                </div>
                <div id="hotel-map" style="height: 400px; width: 100%;" v-if="mapLoaded || !mapLoaded"></div>
                <div v-if="!mapLoaded" class="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-500">
                  <div class="text-center">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                    <p>Xarita yuklanmoqda...</p>
                  </div>
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>

    </div>
    <!-- End Hotel Content -->
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const hotelId = route.params.id
const { getHotelDetails } = useHotelAPI()

useSeoMeta({
  title: 'Mehmonxona tafsilotlari - Triponik',
  description: 'Mehmonxona haqida batafsil ma\'lumot',
})

useHead({
  script: [
    {
      src: 'https://api-maps.yandex.ru/2.1/?apikey=e772db7d-5a82-4e11-9b30-2d89cd901619&lang=ru_RU',
      defer: true,
    }
  ]
})

// Fetch hotel data from API
const hotel = ref<any>(null)
const loading = ref(true)
const error = ref<string | null>(null)
const rooms = ref<any[]>([])

// Sanalarni tahrirlash holati
const isEditingDates = ref(false)
const editCheckIn = ref('')
const editCheckOut = ref('')
const editAdults = ref(2)
const editChildren = ref(0)
const editRooms = ref(1)
const showGuestsDropdown = ref(false)
const guestsDropdownRef = ref<HTMLElement | null>(null)

// Computed values from URL query
const currentAdults = computed(() => {
  // If adults param exists, use it. Otherwise fall back to guests param or default to 2
  if (route.query.adults) {
    return parseInt(route.query.adults as string)
  } else if (route.query.guests) {
    return parseInt(route.query.guests as string)
  }
  return 2
})
const currentChildren = computed(() => parseInt(route.query.children as string || '0'))
const currentRooms = computed(() => parseInt(route.query.rooms as string || '1'))

const toggleGuestsDropdown = () => {
  showGuestsDropdown.value = !showGuestsDropdown.value
}

const incrementAdults = () => {
  if (editAdults.value < 10) {
    editAdults.value++
  }
}

const decrementAdults = () => {
  if (editAdults.value > 1) {
    editAdults.value--
  }
}

const incrementChildren = () => {
  if (editChildren.value < 10) {
    editChildren.value++
  }
}

const decrementChildren = () => {
  if (editChildren.value > 0) {
    editChildren.value--
  }
}

const incrementRooms = () => {
  if (editRooms.value < 10) {
    editRooms.value++
  }
}

const decrementRooms = () => {
  if (editRooms.value > 1) {
    editRooms.value--
  }
}

const startEditDates = () => {
  // Mehmonxona sanalarini YYYY-MM-DD formatiga o'tkazish
  editCheckIn.value = hotel.value?.checkIn ? hotel.value.checkIn.split('T')[0] : ''
  editCheckOut.value = hotel.value?.checkOut ? hotel.value.checkOut.split('T')[0] : ''
  editAdults.value = currentAdults.value
  editChildren.value = currentChildren.value
  editRooms.value = currentRooms.value
  isEditingDates.value = true
}

const cancelEditDates = () => {
  isEditingDates.value = false
  showGuestsDropdown.value = false
}

const saveDateChanges = async () => {
  if (!editCheckIn.value || !editCheckOut.value) {
    alert('Iltimos, sanalarni tanlang')
    return
  }

  showGuestsDropdown.value = false

  // Yangi sanalar bilan qidiruv sahifasiga o'tish
  navigateTo({
    path: '/hotels/search',
    query: {
      destination: hotel.value?.destinationName,
      destinationCode: hotel.value?.destinationCode,
      checkIn: editCheckIn.value,
      checkOut: editCheckOut.value,
      adults: editAdults.value,
      children: editChildren.value,
      rooms: editRooms.value
    }
  })
}

const scrollToMap = () => {
  const mapElement = document.getElementById('hotel-map')
  if (mapElement) {
    mapElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const fetchHotelDetails = async () => {
  try {
    loading.value = true
    const rateKey = Array.isArray(route.query.rateKey)
      ? route.query.rateKey[0]
      : route.query.rateKey

    if (!rateKey || typeof rateKey !== 'string') {
      throw new Error('URL da narx kaliti topilmadi')
    }

    // Xonalar payloadi bilan detail API ni chaqirish
    const response: any = await getHotelDetails([{ rateKey }])

    console.log('[Detail Page] Response:', response)

    // Responsdan mehmonxona ma'lumotlarini ajratish
    // Support both formats: { hotel: {...} } and direct {...}
    const hotelData = response?.hotel || response

    if (hotelData) {
      hotel.value = {
        id: hotelId,
        code: hotelData.code,
        name: hotelData.name,
        categoryCode: hotelData.categoryCode,
        categoryName: hotelData.categoryName,
        stars: hotelData.stars,
        checkIn: hotelData.checkIn || route.query.checkIn,
        checkOut: hotelData.checkOut || route.query.checkOut,
        destinationCode: hotelData.destinationCode,
        destinationName: hotelData.destinationName,
        zoneCode: hotelData.zoneCode,
        zoneName: hotelData.zoneName,
        latitude: parseFloat(hotelData.latitude) || 0,
        longitude: parseFloat(hotelData.longitude) || 0,
        currency: hotelData.currency || 'USD',
        totalNet: hotelData.minRate || hotelData.totalNet,
        modificationPolicies: hotelData.modificationPolicies,
        paymentDataRequired: hotelData.paymentDataRequired,
        location: hotelData.destinationName ? `${hotelData.destinationName}${hotelData.zoneName ? ', ' + hotelData.zoneName : ''}` : '',
        coordinates: [parseFloat(hotelData.latitude) || 51.5074, parseFloat(hotelData.longitude) || -0.1278],
        images: hotelData.images || [],
        facilities: hotelData.facilities || []
      }

      // Xonalar ma'lumotlarini saqlash
      rooms.value = hotelData.rooms || []

      console.log('[Detail Page] Hotel loaded:', hotel.value.name)
      console.log('[Detail Page] Rooms count:', rooms.value.length)
    } else {
      throw new Error('Hotel data not found in response')
    }

    loading.value = false

    // Mehmonxona ma'lumotlari yuklangandan keyin xaritani ishga tushirish
    if (hotel.value) {
      setTimeout(() => {
        waitForYandexMaps()
      }, 1500)
    }
  } catch (err: any) {
    console.error('Mehmonxona ma\'lumotlarini yuklashda xatolik:', err)
    error.value = err?.message || 'Xatolik yuz berdi'
    loading.value = false
  }
}

// Hafta kuni bilan sanani formatlash
const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr']
  const days = ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan']

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}, ${days[date.getDay()]}`
}

// Hafta kunisiz sanani formatlash
const formatDateShort = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr']

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

// Kechalar sonini hisoblash
const numberOfNights = computed(() => {
  if (!hotel.value?.checkIn || !hotel.value?.checkOut) return 1
  const checkIn = new Date(hotel.value.checkIn)
  const checkOut = new Date(hotel.value.checkOut)
  const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
})

let map: any = null
const mapLoaded = ref(false)

const waitForYandexMaps = () => {
  const checkYmaps = setInterval(() => {
    if (typeof window !== 'undefined' && (window as any).ymaps) {
      clearInterval(checkYmaps)
      initMap()
    }
  }, 100)

  // 10 soniyadan keyin timeout
  setTimeout(() => {
    clearInterval(checkYmaps)
    if (!mapLoaded.value) {
      console.error('Yandex Maps yuklanmadi')
    }
  }, 10000)
}

// Click outside handler
const handleClickOutside = (event: MouseEvent) => {
  if (guestsDropdownRef.value && !guestsDropdownRef.value.contains(event.target as Node)) {
    showGuestsDropdown.value = false
  }
}

onMounted(() => {
  fetchHotelDetails()
  document.addEventListener('click', handleClickOutside)
})


function initMap() {
  if (typeof window === 'undefined' || typeof (window as any).ymaps === 'undefined') {
    console.log('ymaps mavjud emas')
    return
  }

  const mapElement = document.getElementById('hotel-map')
  if (!mapElement) {
    console.error('Xarita elementi topilmadi')
    return
  }

  if (!hotel.value) {
    console.error('Mehmonxona ma\'lumotlari mavjud emas')
    return
  }

  console.log('Yandex Maps ishga tushirilmoqda...')

  const ymaps = (window as any).ymaps

  ymaps.ready(() => {
    try {
      console.log('ymaps.ready chaqirildi')

      // Xaritani mehmonxona joylashuvida markazlash
      map = new ymaps.Map('hotel-map', {
        center: hotel.value?.coordinates || [55.7558, 37.6173],
        zoom: 15,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
      })

      console.log('Xarita muvaffaqiyatli yaratildi')

      // Mehmonxona uchun marker qo'shish
      const placemark = new ymaps.Placemark(
        hotel.value?.coordinates || [55.7558, 37.6173],
        {
          balloonContentHeader: `<div class="font-bold text-lg">${hotel.value?.name || ''}</div>`,
          balloonContentBody: `
            <div class="p-2">
              <p class="text-sm text-gray-600 mb-2">${hotel.value?.location || ''}</p>
              <div class="text-xl font-bold">${hotel.value?.totalNet || 0} ${hotel.value?.currency || 'EUR'}</div>
            </div>
          `,
          hintContent: hotel.value?.name || ''
        },
        {
          preset: 'islands#blueIcon',
          iconColor: '#2563eb'
        }
      )

      map.geoObjects.add(placemark)
      mapLoaded.value = true
      console.log('Xarita va marker muvaffaqiyatli qo\'shildi')
    } catch (error) {
      console.error('Xaritani ishga tushirishda xatolik:', error)
    }
  })
}

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  if (map) {
    map.destroy()
    map = null
  }
})
</script>

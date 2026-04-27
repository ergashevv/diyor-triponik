<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumb -->
    <div class="bg-white border-b border-gray-200">
      <div class="container mx-auto px-3 md:px-4 py-2 md:py-3">
        <div class="flex items-center gap-1 md:gap-2 text-[11px] md:text-sm overflow-x-auto">
          <NuxtLink to="/trains/search" class="text-blue-600 hover:underline whitespace-nowrap">Qidirish</NuxtLink>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <div class="flex items-center gap-1 md:gap-1.5">
            <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            <span class="text-gray-900 font-medium whitespace-nowrap">O'rindiq</span>
          </div>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-400 whitespace-nowrap hidden sm:inline">Yo'lovchilar</span>
          <span class="text-gray-400 whitespace-nowrap sm:hidden">Yo'lov.</span>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-400 whitespace-nowrap hidden lg:inline">Tekshirish</span>
          <span class="text-gray-400 whitespace-nowrap lg:hidden">Teksh.</span>
          <svg class="w-3 h-3 md:w-4 md:h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-gray-400 whitespace-nowrap">To'lov</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-3 md:px-4 py-4 md:py-6 max-w-7xl">
      <!-- Page Title -->
      <h1 class="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
        9 ta o'rindiqqacha tanlang yoki parametrlarni belgilang
      </h1>

      <!-- Train Info Card -->
      <div class="bg-gray-100 rounded-lg md:rounded-xl px-3 md:px-6 py-3 md:py-4 mb-4 md:mb-6 flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3">
        <span class="text-sm md:text-base lg:text-lg font-semibold text-gray-900">{{ trainInfo.trainNumber }} «{{ trainInfo.trainName }}»</span>
        <span class="text-xs md:text-sm lg:text-base text-gray-600">{{ trainInfo.from }} → {{ trainInfo.to }}, {{ trainInfo.departureTime }} - {{ trainInfo.arrivalTime }}</span>
      </div>

      <!-- Wagon Selection Card -->
      <div class="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
        <!-- Card Header -->
        <div class="flex items-start justify-between mb-4 md:mb-6">
          <div>
            <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-1">Vagon {{ currentWagon }}</h2>
            <p class="text-xs md:text-sm text-gray-600">{{ wagonType }} vagon • sostav o'rtasida</p>
          </div>
          <div class="hidden md:flex items-center gap-2">
            <!-- View Toggle Buttons -->
            <button class="p-2.5 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
              <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
              </svg>
            </button>
            <button class="p-2.5 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
              <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 4h18v3H3V4zm0 7h18v3H3v-3zm0 7h18v3H3v-3z"/>
              </svg>
            </button>
            <button class="p-2.5 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Seat Map -->
        <div class="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-6 mb-4 md:mb-6 overflow-x-auto">
          <div class="relative">
            <!-- Seats Row 1 (Upper) -->
            <div class="mb-3">
              <div class="flex items-start gap-2 mb-2">
                <!-- Emergency exit labels -->
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="flex-1">
                  <div class="text-[10px] text-gray-400 text-center">favqulotda. chiqish</div>
                </div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="flex-1">
                  <div class="text-[10px] text-gray-400 text-center">favqulotda. chiqish</div>
                </div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="w-10"></div>
                <div class="flex items-center justify-center w-10 h-8">
                  <span class="text-[10px] font-semibold text-gray-500">WC</span>
                </div>
                <div class="flex items-center justify-center w-10 h-8">
                  <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <TrainsSearchSeatButton :number="2" :state="getSeatState(2)" @click="toggleSeat(2)" size="sm" />
                <TrainsSearchSeatButton :number="4" :state="getSeatState(4)" @click="toggleSeat(4)" size="sm" />
                <TrainsSearchSeatButton :number="6" :state="getSeatState(6)" @click="toggleSeat(6)" size="sm" />
                <TrainsSearchSeatButton :number="8" :state="getSeatState(8)" @click="toggleSeat(8)" size="sm" />
                <TrainsSearchSeatButton :number="10" :state="getSeatState(10)" @click="toggleSeat(10)" size="sm" />
                <TrainsSearchSeatButton :number="12" :state="getSeatState(12)" @click="toggleSeat(12)" size="sm" />
                <TrainsSearchSeatButton :number="14" :state="getSeatState(14)" @click="toggleSeat(14)" size="sm" />
                <TrainsSearchSeatButton :number="16" :state="getSeatState(16)" @click="toggleSeat(16)" size="sm" />
                <TrainsSearchSeatButton :number="18" :state="getSeatState(18)" @click="toggleSeat(18)" size="sm" />
                <TrainsSearchSeatButton :number="20" :state="getSeatState(20)" @click="toggleSeat(20)" size="sm" />
                <TrainsSearchSeatButton :number="22" :state="getSeatState(22)" @click="toggleSeat(22)" size="sm" />
                <TrainsSearchSeatButton :number="24" :state="getSeatState(24)" @click="toggleSeat(24)" size="sm" />
                <TrainsSearchSeatButton :number="26" :state="getSeatState(26)" @click="toggleSeat(26)" size="sm" />
                <TrainsSearchSeatButton :number="28" :state="getSeatState(28)" @click="toggleSeat(28)" size="sm" />
                <TrainsSearchSeatButton :number="30" :state="getSeatState(30)" @click="toggleSeat(30)" size="sm" />
                <TrainsSearchSeatButton :number="32" :state="getSeatState(32)" @click="toggleSeat(32)" size="sm" />
                <TrainsSearchSeatButton :number="34" :state="getSeatState(34)" @click="toggleSeat(34)" size="sm" />
                <TrainsSearchSeatButton :number="36" :state="getSeatState(36)" @click="toggleSeat(36)" size="sm" />
              </div>
            </div>

            <!-- Seats Row 2 (Lower) -->
            <div>
              <div class="flex items-center gap-2">
                <TrainsSearchSeatButton :number="1" :state="getSeatState(1)" @click="toggleSeat(1)" size="sm" />
                <TrainsSearchSeatButton :number="3" :state="getSeatState(3)" @click="toggleSeat(3)" size="sm" />
                <TrainsSearchSeatButton :number="5" :state="getSeatState(5)" @click="toggleSeat(5)" size="sm" />
                <TrainsSearchSeatButton :number="7" :state="getSeatState(7)" @click="toggleSeat(7)" size="sm" />
                <TrainsSearchSeatButton :number="9" :state="getSeatState(9)" @click="toggleSeat(9)" size="sm" />
                <TrainsSearchSeatButton :number="11" :state="getSeatState(11)" @click="toggleSeat(11)" size="sm" />
                <TrainsSearchSeatButton :number="13" :state="getSeatState(13)" @click="toggleSeat(13)" size="sm" />
                <TrainsSearchSeatButton :number="15" :state="getSeatState(15)" @click="toggleSeat(15)" size="sm" />
                <TrainsSearchSeatButton :number="17" :state="getSeatState(17)" @click="toggleSeat(17)" size="sm" />
                <TrainsSearchSeatButton :number="19" :state="getSeatState(19)" @click="toggleSeat(19)" size="sm" />
                <TrainsSearchSeatButton :number="21" :state="getSeatState(21)" @click="toggleSeat(21)" size="sm" />
                <TrainsSearchSeatButton :number="23" :state="getSeatState(23)" @click="toggleSeat(23)" size="sm" />
                <TrainsSearchSeatButton :number="25" :state="getSeatState(25)" @click="toggleSeat(25)" size="sm" />
                <TrainsSearchSeatButton :number="27" :state="getSeatState(27)" @click="toggleSeat(27)" size="sm" />
                <TrainsSearchSeatButton :number="29" :state="getSeatState(29)" @click="toggleSeat(29)" size="sm" />
                <TrainsSearchSeatButton :number="31" :state="getSeatState(31)" @click="toggleSeat(31)" size="sm" />
                <TrainsSearchSeatButton :number="33" :state="getSeatState(33)" @click="toggleSeat(33)" size="sm" />
                <TrainsSearchSeatButton :number="35" :state="getSeatState(35)" @click="toggleSeat(35)" size="sm" />
              </div>
            </div>
          </div>
        </div>

        <!-- Wagon Tabs -->
        <div class="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 overflow-x-auto pb-2">
          <button
            v-for="wagon in wagons"
            :key="wagon.number"
            @click="currentWagon = wagon.number"
            :class="[
              'px-3 md:px-5 py-2 md:py-3 rounded-lg font-medium transition-all shrink-0',
              currentWagon === wagon.number
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            <div class="text-xs md:text-sm font-bold uppercase">VAGON {{ wagon.number }}</div>
            <div class="text-[10px] md:text-xs opacity-90">{{ wagon.seats }} o'rin</div>
          </button>
        </div>

        <!-- Legend -->
        <div class="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm">
          <div class="flex items-center gap-1.5 md:gap-2">
            <div class="w-5 h-5 md:w-6 md:h-6 bg-white border border-gray-300 rounded shrink-0"></div>
            <span class="text-gray-700">Bo'sh</span>
          </div>
          <div class="flex items-center gap-1.5 md:gap-2">
            <div class="w-5 h-5 md:w-6 md:h-6 bg-blue-50 border border-blue-200 rounded shrink-0"></div>
            <span class="text-gray-700 hidden sm:inline">Talabga javob bermaydi</span>
            <span class="text-gray-700 sm:hidden">Talab yo'q</span>
          </div>
          <div class="flex items-center gap-1.5 md:gap-2">
            <div class="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded shrink-0"></div>
            <span class="text-gray-700">Tanlangan</span>
          </div>
          <div class="flex items-center gap-1.5 md:gap-2">
            <div class="w-5 h-5 md:w-6 md:h-6 bg-gray-400 rounded shrink-0"></div>
            <span class="text-gray-700">Band</span>
          </div>
          <div class="flex items-center gap-1.5 md:gap-2">
            <div class="w-5 h-5 md:w-6 md:h-6 border-2 border-dashed border-orange-400 rounded shrink-0"></div>
            <span class="text-gray-700">Imtiyozli</span>
          </div>
          <button class="ml-auto text-blue-600 hover:text-blue-700 font-medium hidden lg:block">
            Barcha belgilar
          </button>
        </div>
      </div>

      <!-- Wagon Details Section -->
      <div class="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6 mb-4 md:mb-6">
        <h3 class="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6">Vagon {{ currentWagon }} • {{ wagonType }} • {{ trainInfo.to.toUpperCase() }}</h3>

        <!-- Amenities Icons -->
        <div class="grid grid-cols-5 sm:grid-cols-6 md:flex md:flex-wrap items-center justify-start gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200">
          <!-- Yotoq (Bed) -->
          <div class="flex flex-col items-center gap-1 md:gap-2">
            <svg class="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H4z"/>
            </svg>
            <span class="text-[10px] md:text-xs text-gray-600">Yotoq</span>
          </div>

          <!-- Konditsioner (AC) -->
          <div class="flex flex-col items-center gap-1 md:gap-2">
            <svg class="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span class="text-[10px] md:text-xs text-gray-600">Kondit.</span>
          </div>

          <!-- Wi-Fi -->
          <div class="flex flex-col items-center gap-1 md:gap-2">
            <svg class="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
            <span class="text-[10px] md:text-xs text-gray-600">Wi-Fi</span>
          </div>

          <!-- Rozetka (Power) -->
          <div class="flex flex-col items-center gap-1 md:gap-2">
            <svg class="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 7h-2v5.414l-3.707 3.707 1.414 1.414L12 14.242l3.293 3.293 1.414-1.414L13 12.414V7z"/>
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
            </svg>
            <span class="text-[10px] md:text-xs text-gray-600">Rozetka</span>
          </div>

          <!-- TV -->
          <div class="flex flex-col items-center gap-1 md:gap-2">
            <svg class="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
            </svg>
            <span class="text-[10px] md:text-xs text-gray-600">TV</span>
          </div>

          <!-- Ovqat (Food) -->
          <div class="flex flex-col items-center gap-1 md:gap-2">
            <svg class="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="text-[10px] md:text-xs text-gray-600">Ovqat</span>
          </div>

          <!-- Bagaj (Luggage) -->
          <div class="flex flex-col items-center gap-1 md:gap-2">
            <svg class="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span class="text-[10px] md:text-xs text-gray-600">Bagaj</span>
          </div>

          <!-- Gazeta (Newspaper) -->
          <div class="flex flex-col items-center gap-1 md:gap-2">
            <svg class="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span class="text-[10px] md:text-xs text-gray-600">Gazeta</span>
          </div>

          <!-- Choy (Tea) -->
          <div class="flex flex-col items-center gap-1 md:gap-2">
            <svg class="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="text-[10px] md:text-xs text-gray-600">Choy</span>
          </div>

          <!-- Tualet (Toilet) -->
          <div class="flex flex-col items-center gap-1 md:gap-2">
            <svg class="w-6 h-6 md:w-8 md:h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 2v2H7v2h2v1.5c0 1.93 1.57 3.5 3.5 3.5h1c1.93 0 3.5-1.57 3.5-3.5V6h2V4h-2V2h-2v2h-5V2H9zm3 4h1.5c.83 0 1.5.67 1.5 1.5V9h-4.5V7.5C10.5 6.67 11.17 6 12 6zM3 14v8h2v-8H3zm4 0v8h2v-8H7zm4 0v8h2v-8h-2zm4 0v8h2v-8h-2zm4 0v8h2v-8h-2z"/>
            </svg>
            <span class="text-[10px] md:text-xs text-gray-600">Tualet</span>
          </div>
        </div>

        <!-- Info Message -->
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
          <div class="flex gap-2 md:gap-3">
            <svg class="w-4 h-4 md:w-5 md:h-5 text-blue-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            <div class="text-xs md:text-sm text-gray-700 leading-relaxed">
              <p class="mb-2">Vagon ichidagi rasm va jihozlar tasviri maqsadda berilgan bo'lib, haqiqiy holatdan farq qilishi mumkin.</p>
              <p>Imtiyozli o'rinlarni tanlash va joylashtirish bilan bog'liq qo'shimcha ma'lumotlar uchun <a href="#" class="text-blue-600 hover:underline">yo'riqnoma bilan tanishing</a>.</p>
            </div>
          </div>
        </div>

        <!-- Wagon Section Header -->
        <h4 class="text-sm md:text-base font-bold text-gray-900 mb-3 md:mb-4">Vagon</h4>


        <!-- Photo Gallery -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
          <div class="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop" alt="Wagon interior dining" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop" alt="Food service" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
            <img src="https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=400&h=300&fit=crop" alt="Cabin curtains" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop" alt="Controls panel" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
            <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop" alt="Seating area" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
       <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 md:gap-4">
      <!-- Jami narx -->
      <div class="text-left sm:text-right">
        <div class="text-xs md:text-sm text-gray-600 mb-1">Jami narx</div>
        <div class="text-xl md:text-2xl font-bold text-gray-900">{{ totalPrice.toLocaleString() }} ₽</div>
        <div class="text-[10px] md:text-xs text-gray-500">{{ selectedSeats.length }} ta o'rindiq</div>
      </div>

      <!-- Davom etish button -->
      <NuxtLink
        :to="{
          path: '/trains/passengers',
          query: {
            trainNumber: trainInfo.trainNumber,
            trainName: trainInfo.trainName,
            from: trainInfo.from,
            to: trainInfo.to,
            wagon: currentWagon,
            wagonType: wagonType,
            seats: JSON.stringify(selectedSeats),
            totalPrice: totalPrice
          }
        }"
        :class="[
          'px-6 md:px-8 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-colors text-center',
          selectedSeats.length > 0
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
        ]"
      >
        Davom etish
      </NuxtLink>
    </div>
    </div>


   
  </div>
</template>

<script setup>
useSeoMeta({
  title: "O'rindig tanlash - Triponik",
  description: "Poyezd o'rindigini tanlang"
})

const route = useRoute()

// Query params dan ma'lumotlarni olish
const trainInfo = ref({
  trainNumber: route.query.trainNumber || '022A',
  trainName: route.query.trainName || 'Afrosiyob Tezkor',
  from: route.query.from || 'Toshkent',
  to: route.query.to || 'Samarqand',
  departureTime: route.query.departureTime || '',
  arrivalTime: route.query.arrivalTime || '',
  totalPrice: route.query.totalPrice || 0
})

// Current wagon - query params dan yoki default
const currentWagon = ref(route.query.wagon || '02')
const wagonType = ref(route.query.wagonType || 'Kupe')

// Wagons data
const wagons = [
  { number: '02', seats: 36 },
  { number: '03', seats: 54 },
  { number: '04', seats: 36 }
]

// Selected seats - query params dan yoki bo'sh
const initializeSelectedSeats = () => {
  if (route.query.seats) {
    try {
      return JSON.parse(route.query.seats)
    } catch (e) {
      console.error('Error parsing seats:', e)
      return []
    }
  }
  return []
}

const selectedSeats = ref(initializeSelectedSeats())

// Reserved seats - gray seats (boshqa odamlar tomonidan band qilingan)
const reservedSeats = ref([2, 4, 6, 8, 14, 16, 18, 26])

// Get seat state
const getSeatState = (seatNumber) => {
  if (selectedSeats.value.includes(seatNumber)) return 'selected'
  if (reservedSeats.value.includes(seatNumber)) return 'reserved'
  return 'available'
}

// Toggle seat selection
const toggleSeat = (seatNumber) => {
  const state = getSeatState(seatNumber)
  if (state === 'reserved') return

  const index = selectedSeats.value.indexOf(seatNumber)
  if (index > -1) {
    selectedSeats.value.splice(index, 1)
  } else {
    if (selectedSeats.value.length < 9) {
      selectedSeats.value.push(seatNumber)
    }
  }
}

// Computed - jami narx
const totalPrice = computed(() => {
  const basePrice = trainInfo.value.totalPrice || 5762
  return selectedSeats.value.length > 0
    ? Math.floor(basePrice / selectedSeats.value.length) * selectedSeats.value.length
    : basePrice
})
</script>

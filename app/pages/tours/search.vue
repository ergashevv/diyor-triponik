<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- Dark Blue Header: search + info bar -->
    <div class="pt-5 pb-8" style="background-color: #001549;">
      <div class="container mx-auto px-4">

        <!-- Tab pill -->
        <div class="flex justify-center">
          <div class="bg-white rounded-t-md px-6 py-2 text-sm font-medium text-gray-700 flex items-center gap-1 shadow-sm">
            Parvoz shahri
            <span class="text-blue-600 font-semibold underline underline-offset-2 ml-1">{{ searchParams.from || 'Toshkent' }}</span>
          </div>
        </div>

        <!-- Search Form -->
        <div class="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg">
          <!-- Davlat -->
          <UPopover :content="{ side: 'bottom', align: 'start' }">
            <div class="flex-1 bg-white border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Davlat, kurort yoki mehmonxona</p>
              <p class="text-sm text-gray-900 font-semibold">{{ searchParams.country || 'Tanlang' }}</p>
            </div>
            <template #content>
              <div class="w-64 p-2">
                <div class="relative mb-2">
                  <input
                    v-model="countrySearch"
                    type="text"
                    placeholder="Qidirish..."
                    class="w-full h-9 pl-8 pr-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500"
                    @click.stop
                  />
                  <UIcon name="i-mdi-magnify" class="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div class="max-h-52 overflow-y-auto">
                  <button
                    v-for="c in filteredCountries"
                    :key="c.name"
                    @click="searchParams.country = c.name; countrySearch = ''"
                    class="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    :class="searchParams.country === c.name ? 'bg-blue-50 text-blue-600' : 'text-gray-700'"
                  >
                    <span class="text-base">{{ c.flag }}</span>
                    <span class="text-sm font-medium">{{ c.name }}</span>
                  </button>
                </div>
              </div>
            </template>
          </UPopover>

          <!-- Parvoz sanasi -->
          <UPopover :content="{ side: 'bottom', align: 'start' }">
            <div class="flex-1 bg-white border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Parvoz sanasi</p>
                <p class="text-sm text-gray-900 font-semibold">
                  {{ selectedDate ? formatDate(selectedDate) : 'Sana tanlang' }}
                </p>
              </div>
            </div>
            <template #content>
              <UCalendar v-model="selectedDate" class="p-2" />
            </template>
          </UPopover>

          <!-- Tunlar soni -->
          <UPopover :content="{ side: 'bottom', align: 'start' }">
            <div class="flex-1 bg-white border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tunlar soni</p>
                <p class="text-sm text-gray-900 font-semibold">{{ nightsCount }} tunga</p>
              </div>
            </div>
            <template #content>
              <div class="p-4 w-52">
                <p class="text-sm font-semibold text-gray-700 mb-3 text-center">Tunlar soni</p>
                <div class="flex items-center justify-between gap-4">
                  <button @click="nightsCount > 1 && nightsCount--" class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg font-bold transition-colors">−</button>
                  <span class="text-xl font-bold text-gray-900 w-8 text-center">{{ nightsCount }}</span>
                  <button @click="nightsCount < 30 && nightsCount++" class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg font-bold transition-colors">+</button>
                </div>
              </div>
            </template>
          </UPopover>

          <!-- Turistlar soni -->
          <UPopover :content="{ side: 'bottom', align: 'start' }">
            <div class="flex-1 bg-white border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Turistlar soni</p>
                <p class="text-sm text-gray-900 font-semibold">{{ adults }} katta{{ children ? ', ' + children + ' bola' : '' }}</p>
              </div>
            </div>
            <template #content>
              <div class="p-4 w-60">
                <p class="text-sm font-semibold text-gray-700 mb-4 text-center">Turistlar soni</p>
                <!-- Adults -->
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <p class="text-sm font-medium text-gray-800">Kattalar</p>
                    <p class="text-xs text-gray-400">18+ yosh</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <button @click="adults > 1 && adults--" class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition-colors">−</button>
                    <span class="w-5 text-center font-bold text-gray-900">{{ adults }}</span>
                    <button @click="adults < 10 && adults++" class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition-colors">+</button>
                  </div>
                </div>
                <!-- Children -->
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm font-medium text-gray-800">Bolalar</p>
                    <p class="text-xs text-gray-400">0–17 yosh</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <button @click="children > 0 && children--" class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition-colors">−</button>
                    <span class="w-5 text-center font-bold text-gray-900">{{ children }}</span>
                    <button @click="children < 6 && children++" class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition-colors">+</button>
                  </div>
                </div>
              </div>
            </template>
          </UPopover>

          <!-- Button -->
          <button @click="handleSearch" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-4 md:py-0 flex items-center justify-center gap-2 transition-colors shrink-0 text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Turlarni topish
          </button>
        </div>

        <!-- Info Cards (same dark bg) -->
        <div class="flex flex-col md:flex-row gap-4 mt-4">
          <!-- Left info card -->
          <div class="w-full md:w-72 md:shrink-0 bg-white rounded-xl p-4">
            <p class="font-bold text-gray-900 text-sm">{{ searchParams.from || 'Toshkent' }}, O'zbekiston</p>
            <p class="text-gray-500 text-xs mt-1">10 May 2025 — 12 May 2025</p>
            <p class="text-gray-500 text-xs">1 xona, 2 mehmon</p>
            <div class="relative  mt-4">
              <input
                type="text"
                placeholder="Mehmonxona qidirish..."
                class="w-full h-9 pl-4 pr-9 border border-gray-200 rounded-lg text-xs text-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <!-- Price calendar -->
          <div class="flex-1 bg-white rounded-xl px-4 pt-4 pb-3">
            <p class="text-center text-sm font-bold text-gray-900 mb-0.5">Arzon narxlar kalendari</p>
            <p class="text-center text-xs text-gray-400 mb-3">Barcha narxlar 2 kattalar uchun 7 kechaga asoslangan</p>
            <!-- Dashed separator -->
            <div class="border-t border-dashed border-gray-300 mb-3" />
            <!-- Bars -->
            <div class="flex items-end gap-1">
              <div v-for="(bar, i) in calendarBars" :key="i" class="flex flex-col items-center gap-1 flex-1">
                <div
                  class="w-full rounded-sm transition-all cursor-pointer"
                  :style="{ height: bar.h + 'px', backgroundColor: bar.active ? '#999999' : '' }"
                  :class="!bar.active && 'bg-gray-200 hover:bg-gray-300'"
                />
                <span
                  class="text-[9px] whitespace-nowrap"
                  :class="bar.weekend ? 'text-red-500' : 'text-gray-400'"
                >{{ bar.label }}</span>
              </div>
            </div>
            <!-- Month label -->
            <div class="flex items-center gap-2 mt-3">
              <div class="flex-1 h-px bg-gray-200" />
              <span class="text-[11px] text-gray-400">iyul</span>
              <div class="flex-1 h-px bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Layout -->
    <div class="container mx-auto px-4 py-6">

      <!-- Mobile: USlideover trigger (lg dan katta ekranlarda yashirilgan) -->
      <USlideover v-model:open="filterOpen" side="left" class="lg:hidden">
        <button class="flex items-center gap-2 mb-4 border border-gray-300 bg-white rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm">
          <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18M6 8h12M10 12h4"/>
          </svg>
          Filtrlar
        </button>
        <template #content>
          <div class="p-4 overflow-y-auto h-full flex flex-col gap-3">
            <div class="flex items-center justify-between mb-1">
              <p class="text-base font-bold text-gray-900">Filtrlar</p>
              <button @click="filterOpen = false" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <!-- Saqlanganlar -->
            <div class="bg-gray-50 rounded-2xl px-4 py-3 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-red-500 fill-red-500" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                <span class="text-sm font-medium text-gray-700">Saqlanganlar</span>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" />
                <div class="w-9 h-5 bg-gray-200 peer-checked:bg-blue-600 rounded-full transition-colors" />
                <div class="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4" />
              </label>
            </div>
            <!-- Saralash -->
            <div class="bg-gray-50 rounded-2xl px-4 py-3">
              <p class="text-sm font-semibold text-gray-900 mb-2">Saralash</p>
              <div class="relative">
                <select class="w-full h-10 border border-gray-200 rounded-xl px-3 pr-8 text-sm text-gray-700 bg-white appearance-none outline-none">
                  <option>Mashhurlik bo'yicha</option>
                  <option>Narx: arzondan qimmatga</option>
                  <option>Narx: qimmatdan arzonga</option>
                  <option>Reyting bo'yicha</option>
                </select>
                <svg class="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <!-- Narx -->
            <div class="bg-gray-50 rounded-2xl px-4 py-3">
              <p class="text-sm font-semibold text-gray-900 mb-3">Bir kecha uchun narx (UZS)</p>
              <div class="flex gap-2 mb-4">
                <input v-model="filters.minPrice" type="text" class="w-0 flex-1 h-9 border border-gray-200 rounded-xl px-2 text-xs text-gray-700 outline-none focus:border-blue-500 min-w-0" placeholder="USD 220" />
                <input v-model="filters.maxPrice" type="text" class="w-0 flex-1 h-9 border border-gray-200 rounded-xl px-2 text-xs text-gray-700 outline-none focus:border-blue-500 min-w-0" placeholder="USD 700" />
              </div>
              <div class="relative h-1.5 bg-gray-200 rounded-full mx-2">
                <div class="absolute left-[20%] right-[30%] h-full bg-blue-600 rounded-full" />
                <div class="absolute left-[20%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full cursor-pointer shadow" />
                <div class="absolute right-[30%] translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full cursor-pointer shadow" />
              </div>
            </div>
            <!-- Yulduzlar -->
            <div class="bg-gray-50 rounded-2xl px-4 py-3">
              <p class="text-sm font-semibold text-gray-900 mb-3">Yulduzlar</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="star in [5,4,3,2,1]" :key="star" class="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                  <div class="flex gap-0.5">
                    <svg v-for="i in star" :key="i" class="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </label>
              </div>
            </div>
            <!-- Taomlar -->
            <div class="bg-gray-50 rounded-2xl px-4 py-3">
              <p class="text-sm font-semibold text-gray-900 mb-3">Taomlar</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="meal in meals" :key="meal.id" class="flex items-center justify-between cursor-pointer">
                  <div class="flex items-center gap-2.5">
                    <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                    <span class="text-xs text-gray-700 leading-snug">{{ meal.name }}</span>
                  </div>
                  <span class="text-xs text-gray-400 shrink-0 ml-2">{{ meal.count }}</span>
                </label>
              </div>
            </div>
            <!-- Qulaylik -->
            <div class="bg-gray-50 rounded-2xl px-4 py-3">
              <p class="text-sm font-semibold text-gray-900 mb-3">Qulaylik</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="item in amenities" :key="item.id" class="flex items-center justify-between cursor-pointer">
                  <div class="flex items-center gap-2.5">
                    <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                    <span class="text-xs text-gray-700">{{ item.name }}</span>
                  </div>
                  <span class="text-xs text-gray-400 shrink-0 ml-2">{{ item.count }}</span>
                </label>
              </div>
            </div>
            <!-- Plyaj turi -->
            <div class="bg-gray-50 rounded-2xl px-4 py-3">
              <p class="text-sm font-semibold text-gray-900 mb-3">Plyaj turi</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="item in beachTypes" :key="item" class="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                  <span class="text-xs text-gray-700">{{ item }}</span>
                </label>
              </div>
            </div>
            <!-- Suvli mashg'ulotlar -->
            <div class="bg-gray-50 rounded-2xl px-4 py-3">
              <p class="text-sm font-semibold text-gray-900 mb-3">Suvli mashg'ulotlar</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="item in waterActivities" :key="item" class="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                  <span class="text-xs text-gray-700">{{ item }}</span>
                </label>
              </div>
            </div>
          </div>
        </template>
      </USlideover>

      <div class="flex flex-col lg:flex-row gap-5 items-start">

        <!-- Sidebar Filters (desktop only) -->
        <aside class="w-64 shrink-0 hidden lg:block">
          <div class="flex flex-col gap-3">

            <!-- Saqlanganlar -->
            <div class="bg-white rounded-2xl px-4 py-3 shadow-sm flex items-center justify-between">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-red-500 fill-red-500" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                <span class="text-sm font-medium text-gray-700">Saqlanganlar</span>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" />
                <div class="w-9 h-5 bg-gray-200 peer-checked:bg-blue-600 rounded-full transition-colors" />
                <div class="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4" />
              </label>
              
            </div>

            <!-- Saralash -->
            <div class="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <p class="text-sm font-semibold text-gray-900 mb-2">Saralash</p>
              <div class="relative">
                <select class="w-full h-10 border border-gray-200 rounded-xl px-3 pr-8 text-sm text-gray-700 bg-white appearance-none outline-none">
                  <option>Mashhurlik bo'yicha</option>
                  <option>Narx: arzondan qimmatga</option>
                  <option>Narx: qimmatdan arzonga</option>
                  <option>Reyting bo'yicha</option>
                </select>
                <svg class="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <!-- Narx -->
            <div class="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <p class="text-sm font-semibold text-gray-900 mb-3">Bir kecha uchun narx (UZS)</p>
              <div class="flex gap-2 mb-4">
                <input v-model="filters.minPrice" type="text" class="w-0 flex-1 h-9 border border-gray-200 rounded-xl px-2 text-xs text-gray-700 outline-none focus:border-blue-500 min-w-0" placeholder="USD 220" />
                <input v-model="filters.maxPrice" type="text" class="w-0 flex-1 h-9 border border-gray-200 rounded-xl px-2 text-xs text-gray-700 outline-none focus:border-blue-500 min-w-0" placeholder="USD 700" />
              </div>
              <div class="relative h-1.5 bg-gray-200 rounded-full mx-2">
                <div class="absolute left-[20%] right-[30%] h-full bg-blue-600 rounded-full" />
                <div class="absolute left-[20%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full cursor-pointer shadow" />
                <div class="absolute right-[30%] translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full cursor-pointer shadow" />
              </div>
            </div>

            <!-- Yulduzlar -->
            <div class="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <p class="text-sm font-semibold text-gray-900 mb-3">Yulduzlar</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="star in [5,4,3,2,1]" :key="star" class="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                  <div class="flex gap-0.5">
                    <svg v-for="i in star" :key="i" class="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </label>
              </div>
            </div>

            <!-- Taomlar (ovqatlanish turi) -->
            <div class="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <p class="text-sm font-semibold text-gray-900 mb-3">Taomlar</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="meal in meals" :key="meal.id" class="flex items-center justify-between cursor-pointer">
                  <div class="flex items-center gap-2.5">
                    <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                    <span class="text-xs text-gray-700 leading-snug">{{ meal.name }}</span>
                  </div>
                  <span class="text-xs text-gray-400 shrink-0 ml-2">{{ meal.count }}</span>
                </label>
              </div>
              <button class="text-blue-600 text-xs font-medium mt-3 flex items-center gap-1">
                Ko'proq ko'rsatish
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- Qulaylik -->
            <div class="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <p class="text-sm font-semibold text-gray-900 mb-3">Qulaylik</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="item in amenities" :key="item.id" class="flex items-center justify-between cursor-pointer">
                  <div class="flex items-center gap-2.5">
                    <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                    <span class="text-xs text-gray-700">{{ item.name }}</span>
                  </div>
                  <span class="text-xs text-gray-400 shrink-0 ml-2">{{ item.count }}</span>
                </label>
              </div>
            </div>

            <!-- Taomlar (ichiga kiritilgani) -->
            <div class="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <p class="text-sm font-semibold text-gray-900 mb-3">Taomlar</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="item in mealIncludes" :key="item.id" class="flex items-center justify-between cursor-pointer">
                  <div class="flex items-center gap-2.5">
                    <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                    <span class="text-xs text-gray-700 leading-snug">{{ item.name }}</span>
                  </div>
                  <span class="text-xs text-gray-400 shrink-0 ml-2">{{ item.count }}</span>
                </label>
              </div>
            </div>

            <!-- Plyaj turi -->
            <div class="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <p class="text-sm font-semibold text-gray-900 mb-3">Plyaj turi</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="item in beachTypes" :key="item" class="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                  <span class="text-xs text-gray-700">{{ item }}</span>
                </label>
              </div>
            </div>

            <!-- Suvli mashg'ulotlar -->
            <div class="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <p class="text-sm font-semibold text-gray-900 mb-3">Suvli mashg'ulotlar</p>
              <div class="flex flex-col gap-2.5">
                <label v-for="item in waterActivities" :key="item" class="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
                  <span class="text-xs text-gray-700">{{ item }}</span>
                </label>
              </div>
              <button class="text-blue-600 text-xs font-medium mt-3 flex items-center gap-1">
                Ko'proq ko'rsatish
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

          </div>
        </aside>

        <!-- Results -->
        <div class="flex-1 min-w-0">

          <!-- Results header -->
          <div class="mb-4">
            <h2 class="text-xl font-bold text-gray-900">
              {{ searchParams.country || 'Turkiya' }} bo'ylab:
              <span class="text-gray-700">{{ tours.length }} ta turlar</span>
            </h2>
            <div class="flex items-center gap-2 mt-1 flex-wrap">
              <span class="text-sm text-gray-500">Qo'llanilgan filtrlar:</span>
              <span v-for="tag in activeTags" :key="tag" class="flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                {{ tag }}
                <button @click="removeTag(tag)" class="hover:text-blue-900">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            </div>
          </div>

          <!-- Tour Cards -->
          <div class="flex flex-col gap-4">
            <template v-for="(tour, idx) in tours" :key="tour.id">
              <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row relative">

                <!-- Score badge: card top edge overlapping (desktop only) -->
                <div class="hidden sm:flex absolute top-0 z-10 w-11 h-14 items-center justify-center ml-5" style="left: calc(13rem + 4px)">
                  <img src="~/assets/logos/Vector.png" class="absolute inset-0 w-full h-full object-contain" />
                  <span class="relative z-10 text-white font-bold text-sm leading-none">{{ tour.score }}</span>
                </div>

                <!-- Image -->
                <div class="relative w-full sm:w-52 sm:shrink-0 overflow-hidden rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl">
                  <img :src="tour.src" :alt="tour.name" class="w-full h-52 sm:w-[280px] sm:h-[261px] object-cover" />
                  <!-- Distance badges -->
                  <div class="absolute bottom-3 left-3 flex flex-col gap-1.5">
                    <span class="bg-black/65 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">{{ tour.distanceAirport }}</span>
                    <span class="bg-black/65 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">{{ tour.distanceBeach }}</span>
                  </div>
                  <!-- Heart -->
                  <button class="absolute top-3 left-3">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <!-- Middle: Info -->
                <div class="flex-1 min-w-0 px-5 py-4 flex flex-col justify-between">
                  <div>
                    <!-- Stars + discount -->
                    <div class="flex items-center gap-2 mb-2 mt-2 sm:mt-12">
                      <div class="flex gap-0.5">
                        <svg v-for="i in tour.stars" :key="i" class="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <svg v-for="i in (5 - tour.stars)" :key="'e'+i" class="w-4 h-4 text-gray-200 fill-gray-200" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <span v-if="tour.discount" class="bg-blue-100 text-blue-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {{ tour.discount }}% chegirma
                      </span>
                    </div>

                    <!-- Name + badge -->
                    <div class="flex items-center gap-2 mb-1.5">
                      <h3 class="font-bold text-gray-900 text-base leading-snug">{{ tour.name }}</h3>
                      <span v-if="tour.badge" class="shrink-0 bg-red-500 text-white text-[11px] font-semibold px-2 py-0.5 rounded">{{ tour.badge }}</span>
                    </div>

                    <!-- Location -->
                    <div class="flex items-center gap-1 mb-4">
                      <svg class="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      </svg>
                      <span class="text-sm text-gray-500">{{ tour.location }}</span>
                    </div>
                  </div>

                  <!-- Amenities: 2 per row -->
                  <div class="grid grid-cols-2 gap-x-6 gap-y-2">
                    <div v-for="amenity in tour.amenities" :key="amenity.label" class="flex items-center gap-1.5">
                      <UIcon :name="amenity.icon" class="w-4 h-4 text-gray-400 shrink-0" />
                      <span class="text-xs text-gray-600">{{ amenity.label }}</span>
                    </div>
                  </div>
                </div>

                <!-- Right: Price -->
                <div class="w-full sm:w-48 sm:shrink-0 px-4 py-4 flex flex-col sm:items-end justify-between border-t sm:border-t-0 sm:border-l border-gray-100">
                  <div class="text-right">
                    <p class="text-orange-500 text-xs font-bold leading-snug mb-3">{{ tour.bookings }}</p>
                    <div class="flex items-baseline justify-end gap-1">
                      <span class="text-3xl font-bold text-gray-900 leading-none">{{ tour.price }}$</span>
                      <span class="text-sm text-gray-500 font-medium">dan</span>
                    </div>
                    <div class="flex items-center justify-end gap-1 mt-1.5">
                      <span class="text-xs text-gray-400">{{ tour.updatedAt }}</span>
                      <svg class="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <p class="text-xs text-gray-500 mt-0.5">{{ tour.nights }}</p>
                  </div>
                  <NuxtLink
                    :to="`/tours/${tour.id}?from=${searchParams.from}&country=${searchParams.country}&duration=${nightsCount}&travelers=${adults}a${children ? children + 'c' : ''}`"
                    class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors text-center block"
                  >
                    Turlarni ko'rish
                  </NuxtLink>
                </div>
              </div>

              <!-- "Tur odatda o'z ichiga oladi" block after 3rd card -->
              <div v-if="idx === 2" class="bg-white rounded-2xl px-8 py-6 shadow-sm relative">
                <!-- X button -->
                <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
                <!-- Title -->
                <p class="text-center text-xl font-bold text-gray-900 mb-6">Tur odatda o'z ichiga oladi</p>
                <!-- Icons row -->
                <div class="flex flex-wrap items-start justify-center gap-6 sm:gap-10">
                  <div v-for="item in tourIncludes" :key="item.label" class="flex flex-col items-center gap-2.5">
                    <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <UIcon :name="item.icon" class="w-7 h-7 text-white" />
                    </div>
                    <span class="text-sm text-gray-700 text-center leading-snug">{{ item.label }}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const route = useRoute()
const filterOpen = ref(false)

const searchParams = ref({
  from: route.query.from || 'Toshkent',
  country: route.query.country || 'Turkiya',
  duration: route.query.duration || '7',
  travelers: route.query.travelers || '2a',
  date: route.query.date || '',
})

const handleSearch = () => {
  navigateTo({
    path: '/tours/search',
    query: {
      from: searchParams.value.from,
      country: searchParams.value.country,
      duration: nightsCount.value,
      travelers: adults.value + 'a' + (children.value ? children.value + 'c' : ''),
      date: selectedDate.value ? formatDate(selectedDate.value) : undefined,
    }
  })
}

const countrySearch = ref('')

const countries = [
  { name: 'Turkiya',     flag: '🇹🇷' },
  { name: 'Tayland',     flag: '🇹🇭' },
  { name: 'BAA (Dubai)', flag: '🇦🇪' },
  { name: 'Gretsiya',    flag: '🇬🇷' },
  { name: 'Misr',        flag: '🇪🇬' },
  { name: 'Indoneziya',  flag: '🇮🇩' },
  { name: 'Maldiv',      flag: '🇲🇻' },
  { name: 'Fransiya',    flag: '🇫🇷' },
  { name: 'Shveytsariya',flag: '🇨🇭' },
  { name: 'Italiya',     flag: '🇮🇹' },
  { name: 'Ispaniya',    flag: '🇪🇸' },
  { name: 'Malayziya',   flag: '🇲🇾' },
  { name: 'Hindiston',   flag: '🇮🇳' },
  { name: 'Xitoy',       flag: '🇨🇳' },
  { name: 'Yaponiya',    flag: '🇯🇵' },
]

const filteredCountries = computed(() =>
  countries.filter(c => c.name.toLowerCase().includes(countrySearch.value.toLowerCase()))
)

const selectedDate = ref(null)
const nightsCount = ref(Number(route.query.duration) || 7)

// parse travelers e.g. "2a1c" → adults=2, children=1
const _travelers = (route.query.travelers || '2a').toString()
const adults = ref(Number(_travelers.match(/(\d+)a/)?.[1]) || 2)
const children = ref(Number(_travelers.match(/(\d+)c/)?.[1]) || 0)

const formatDate = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.${d.getFullYear()}`
}

const filters = ref({
  saved: false,
  minPrice: '',
  maxPrice: '',
})

const activeTags = ref(['Internet'])
const removeTag = (tag) => {
  activeTags.value = activeTags.value.filter(t => t !== tag)
}

const calendarBars = [
  { label: '18, ju',   h: 14, active: false, weekend: false },
  { label: '19, shan', h: 40, active: true,  weekend: true  },
  { label: '20, yak',  h: 30, active: true,  weekend: true  },
  { label: '21, du',   h: 14, active: false, weekend: false },
  { label: '22, se',   h: 20, active: false, weekend: false },
  { label: '23, chor', h: 12, active: false, weekend: false },
  { label: '24, pay',  h: 24, active: false, weekend: false },
  { label: '25, ju',   h: 18, active: false, weekend: false },
  { label: '26, shan', h: 36, active: false, weekend: true  },
  { label: '27, yak',  h: 30, active: false, weekend: true  },
  { label: '28, du',   h: 14, active: false, weekend: false },
  { label: '29, se',   h: 22, active: false, weekend: false },
  { label: '30, chor', h: 10, active: false, weekend: false },
]

const meals = [
  { id: 1, name: 'UAI - barchasi kiritilgan', count: 508 },
  { id: 2, name: 'AI - barchasi kiritilgan', count: 44 },
  { id: 3, name: 'AI (noAlc) - barchasi kiritilgan (alkogolsiz)', count: 44 },
  { id: 4, name: 'FB - nonushta, tushlik, kechlik', count: 44 },
  { id: 5, name: 'HB - nonushta + kechlik', count: 44 },
  { id: 6, name: 'RO - taomlar yo\'q', count: 44 },
]

const amenities = [
  { id: 1, name: 'Shaharga yaqin', count: 508 },
  { id: 2, name: 'Bolalar bilan dam olish', count: 44 },
  { id: 3, name: 'Juftliklar uchun ideal', count: 44 },
  { id: 4, name: 'Internet', count: 44 },
  { id: 5, name: 'Konditsioner', count: 44 },
  { id: 6, name: "Sog'lomlashtiruvchi turlar", count: 44 },
]

const mealIncludes = [
  { id: 1, name: 'Taomlar kiritilmagan', count: 508 },
  { id: 2, name: 'Nonushta kiritilgan', count: 44 },
  { id: 3, name: 'Tushlik yoki kechlik kiritilgan', count: 44 },
  { id: 4, name: 'Hammasi ichida', count: 44 },
]

const beachTypes = ['Barcha', 'Qumli', 'Toshli']

const waterActivities = ['Ochiq basseyn', 'Issiq basseyn', 'Basseyn dengiz suvi bilan']

const tourIncludes = [
  { icon: 'i-mdi-airplane',              label: 'Parvoz' },
  { icon: 'i-mdi-bus',                   label: 'Transfer' },
  { icon: 'i-mdi-key-variant',           label: 'Turar-joy' },
  { icon: 'i-mdi-silverware-fork-knife', label: 'Ovqatlanish tanlovga mos' },
  { icon: 'i-mdi-shield-check-outline',  label: "Sug'urta" },
]

const defaultAmenities = [
  { icon: 'i-mdi-bed-outline',     label: '1-qator' },
  { icon: 'i-mdi-air-conditioner', label: 'konditsioner' },
  { icon: 'i-mdi-beach',           label: 'qum plyaj' },
  { icon: 'i-mdi-wifi',            label: 'Wi-Fi' },
]

const tourBase = {
  name: 'Coastal Escape Natai',
  location: 'Kao Lak, Tailand',
  score: 9.2, stars: 4,
  badge: 'Joy kam qoldi',
  discount: null,
  price: 256,
  nights: '19 iyuldan 7 kechaga',
  bookings: 'Oyda 2 marta bron qilingan',
  updatedAt: '10 daqiqa oldin',
  distanceAirport: '30 km aeroportgacha',
  distanceBeach: '50 m plyajgacha',
  amenities: defaultAmenities,
}

const tours = [
  { id: 1, src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80&fit=crop', ...tourBase },
  { id: 2, src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80&fit=crop', ...tourBase },
  { id: 3, src: 'https://images.unsplash.com/photo-1508009603885-50cf7c8dd0d5?w=600&q=80&fit=crop', ...tourBase },
  { id: 4, src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80&fit=crop', ...tourBase },
]

useSeoMeta({
  title: 'Turlar qidirish - Triponik',
})
</script>

<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- Dark Blue Header -->
    <div class="pt-5 pb-8 md:pb-60" style="background-color: #001549;">
      <div class="container mx-auto px-4">

        <!-- Tab pill -->
        <div class="hidden md:flex justify-center">
          <div class="bg-white rounded-t-md px-6 py-2 text-sm font-medium text-gray-700 flex items-center gap-1 shadow-sm">
            Parvoz shahri
            <span class="text-blue-600 font-semibold underline underline-offset-2 ml-1">{{ searchParams.from }}</span>
          </div>
        </div>

        <!-- Search Form -->
        <div class="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg">

          <UPopover :content="{ side: 'bottom', align: 'start' }">
            <div class="flex-1 bg-white border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Davlat, kurort yoki mehmonxona</p>
              <p class="text-sm text-gray-900 font-semibold">{{ searchParams.country }}</p>
            </div>
            <template #content>
              <div class="w-64 p-2">
                <div class="relative mb-2">
                  <input v-model="countrySearch" type="text" placeholder="Qidirish..."
                    class="w-full h-9 pl-8 pr-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500"
                    @click.stop />
                  <UIcon name="i-mdi-magnify" class="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div class="max-h-52 overflow-y-auto">
                  <button
                    v-for="c in filteredCountries" :key="c.name"
                    class="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    :class="searchParams.country === c.name ? 'bg-blue-50 text-blue-600' : 'text-gray-700'"
                    @click="searchParams.country = c.name; countrySearch = ''">
                    <span class="text-base">{{ c.flag }}</span>
                    <span class="text-sm font-medium">{{ c.name }}</span>
                  </button>
                </div>
              </div>
            </template>
          </UPopover>

          <UPopover :content="{ side: 'bottom', align: 'start' }">
            <div class="flex-1 bg-white border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Parvoz sanasi</p>
                <p class="text-sm text-gray-900 font-semibold">{{ selectedDate ? formatDate(selectedDate) : 'c 19.07.2025' }}</p>
              </div>
            </div>
            <template #content>
              <UCalendar v-model="selectedDate" class="p-2" />
            </template>
          </UPopover>

          <UPopover :content="{ side: 'bottom', align: 'start' }">
            <div class="flex-1 bg-white border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
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
                  <button class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg font-bold" @click="nightsCount > 1 && nightsCount--">−</button>
                  <span class="text-xl font-bold text-gray-900 w-8 text-center">{{ nightsCount }}</span>
                  <button class="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-lg font-bold" @click="nightsCount < 30 && nightsCount++">+</button>
                </div>
              </div>
            </template>
          </UPopover>

          <UPopover :content="{ side: 'bottom', align: 'start' }">
            <div class="flex-1 bg-white border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
              <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Turistlar soni</p>
                <p class="text-sm text-gray-900 font-semibold">{{ adults }} yoshi katta{{ children ? ', ' + children + ' bola' : '' }}</p>
              </div>
            </div>
            <template #content>
              <div class="p-4 w-60">
                <p class="text-sm font-semibold text-gray-700 mb-4 text-center">Turistlar soni</p>
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <p class="text-sm font-medium text-gray-800">Kattalar</p>
                    <p class="text-xs text-gray-400">18+ yosh</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <button class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold" @click="adults > 1 && adults--">−</button>
                    <span class="w-5 text-center font-bold text-gray-900">{{ adults }}</span>
                    <button class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold" @click="adults < 10 && adults++">+</button>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm font-medium text-gray-800">Bolalar</p>
                    <p class="text-xs text-gray-400">0–17 yosh</p>
                  </div>
                  <div class="flex items-center gap-3">
                    <button class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold" @click="children > 0 && children--">−</button>
                    <span class="w-5 text-center font-bold text-gray-900">{{ children }}</span>
                    <button class="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold" @click="children < 6 && children++">+</button>
                  </div>
                </div>
              </div>
            </template>
          </UPopover>

          <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 md:py-0 flex items-center justify-center gap-2 transition-colors shrink-0 text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Turlarni topish
          </button>

        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="container mx-auto px-4 py-6">

      <!-- ONE card: image row + dates section -->
      <div class="bg-white shadow-sm overflow-hidden mb-6 md:-mt-52">

        <!-- Top row: image | info | price -->
        <div class="flex flex-col md:flex-row">

          <!-- LEFT: Image -->
          <div class="w-full md:w-[370px] md:shrink-0 flex flex-col">

            <!-- Main image -->
            <div class="relative overflow-hidden h-56 md:h-[300px]">
              <img :src="tour.images[activeImage]" :alt="tour.name" class="w-full h-full object-cover" />

              <!-- Heart -->
              <button class="absolute top-3 left-3 z-10">
                <svg class="w-6 h-6 text-white" style="filter:drop-shadow(0 1px 2px rgba(0,0,0,.5))" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              <!-- Prev -->
              <button
                class="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/75 hover:bg-white flex items-center justify-center shadow-sm"
                @click="activeImage = activeImage > 0 ? activeImage - 1 : tour.images.length - 1">
                <svg class="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <!-- Next -->
              <button
                class="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/75 hover:bg-white flex items-center justify-center shadow-sm"
                @click="activeImage = activeImage < tour.images.length - 1 ? activeImage + 1 : 0">
                <svg class="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <!-- Thumbnails -->
            <div class="flex h-20 md:h-[87px]" style="gap: 2px;">
              <button
                v-for="(img, i) in tour.images" :key="i"
                class="flex-1 overflow-hidden relative"
                @click="activeImage = i">
                <img :src="img" :alt="tour.name" class="w-full h-full object-cover"
                  :class="activeImage === i ? '' : 'brightness-75 hover:brightness-90'" />
                <div v-if="activeImage === i" class="absolute inset-0 ring-2 ring-inset ring-blue-500 pointer-events-none"></div>
              </button>
            </div>

          </div>
          <!-- end LEFT -->

          <!-- CENTER: Info -->
          <div class="flex-1 min-w-0 px-4 md:px-6 py-4 flex flex-col border-b md:border-b-0 md:border-r border-gray-100">

            <!-- Score + badge -->
            <div class="flex items-start gap-2 mb-3 ">
              <div class="relative w-10 h-[50px] shrink-0 flex items-center justify-center -top-4">
                <img src="~/assets/logos/Vector.png" class="absolute inset-0 w-full h-full object-contain" />
                <span class="relative z-10 text-white font-bold text-sm leading-none">{{ tour.score }}</span>
              </div>
              <span class="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded">{{ tour.badge }}</span>
            </div>

            <!-- Stars -->
            <div class="flex gap-0.5 mb-2">
              <svg v-for="i in tour.stars" :key="'s'+i" class="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg v-for="i in (5 - tour.stars)" :key="'e'+i" class="w-5 h-5 text-gray-200 fill-gray-200" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            <!-- Name -->
            <h1 class="text-lg md:text-2xl font-bold text-gray-900 leading-snug mb-2">{{ tour.name }}</h1>

            <!-- Location -->
            <div class="flex items-center gap-1 mb-1">
              <svg class="w-3.5 h-3.5 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-sm text-gray-600">{{ tour.location }}</span>
            </div>
            <button class="text-blue-600 text-sm font-medium hover:underline text-left mb-5">
              Mehmonxonani xaritada ko'rsatish
            </button>

            <!-- Divider -->
            <div class="border-t border-gray-200 mb-5"></div>

            <!-- Amenities 3-col -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-5">
              <div v-for="(amenity, i) in tour.amenities" :key="i" class="flex flex-col items-center gap-1.5">
                <div class="w-9 h-9 flex items-center justify-center text-gray-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="w-8 h-8" v-html="amenity.path"></svg>
                </div>
                <span class="text-[11px] text-gray-600 text-center leading-tight">{{ amenity.label }}</span>
              </div>
            </div>

          </div>
          <!-- end CENTER -->

          <!-- RIGHT: Price panel -->
          <div class="w-full md:w-[168px] md:shrink-0 flex md:flex-col">

            <!-- Price block (blue) -->
            <div class="flex-1 md:flex-none flex flex-col items-center justify-center px-5 py-4 md:py-5" style="background-color: #2563EB;">
              <div class="flex items-baseline gap-0.5">
                <span class="text-2xl md:text-[28px] font-bold text-white leading-none">{{ tour.price }}$</span>
                <span class="text-white text-sm md:text-base font-bold ml-0.5">dan.</span>
              </div>
              <p class="text-white/75 text-[11px] text-center mt-1 leading-tight">вкл. топл. сбор 0 руб.</p>
            </div>

            <!-- Info block -->
            <div class="flex-1 flex flex-col items-center justify-center gap-1 px-4 py-3 md:py-4 bg-gray-50">
              <p class="text-xs text-center text-gray-600">{{ adults }} yoshi katta</p>
              <p class="text-xs text-center text-gray-600">{{ tour.dateLabel }}</p>
            </div>

          </div>
          <!-- end RIGHT -->

        </div>
        <!-- end top row -->

        <!-- Dates section (inside same card) -->
        <div class="px-4 md:px-6 pt-6 md:pt-10 pb-4 md:pb-6">

          <h2 class="text-lg md:text-2xl font-bold text-gray-900">{{ tour.name }} {{ tour.stars }} dagi turlar</h2>
          <p class="text-sm text-gray-500 mb-6 md:mb-10">
            Parvoz shahri:<span class="font-medium text-gray-800 ml-1">{{ searchParams.from }}</span>
          </p>

          <!-- Date cards row: pt-7 gives space for floating badge -->
          <div class="flex items-end pb-1 overflow-x-auto" style="padding-top: 28px;">

            <div
              v-for="(date, i) in tourDates" :key="i"
              class="flex-1 min-w-[110px] cursor-pointer relative"
              @click="setActiveDate(i)">

              <!-- Floating badge above active card -->
              <div
                v-if="date.bestPrice && date.active"
                class="absolute left-1/2 -translate-x-1/2 flex items-center gap-0.5 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap z-10 "
                style="top: -10px;">
                Eng yaxshi narx 🔥
              </div>

              <!-- ACTIVE card: blue rounded box -->
              <div v-if="date.active" class="bg-blue-600 rounded-xl px-4 py-3">
                <p class="text-white text-xs font-medium mb-1">{{ date.label }}</p>
                <p class="text-white text-[22px] font-bold leading-none">
                  {{ date.price }}$ <span class="text-sm font-normal text-blue-100">dan</span>
                </p>
              </div>

              <!-- NON-ACTIVE: plain text, no background -->
              <div v-else class="px-4 py-3">
                <p class="text-gray-600 text-xs mb-1">{{ date.label }}</p>
                <template v-if="date.rubPrice">
                  <p class="text-gray-500 text-xs">от {{ date.rubPrice }} руб.</p>
                </template>
                <template v-else>
                  <p class="text-blue-600 text-xs">Narxlarni bilish</p>
                </template>
              </div>

            </div>

            <!-- Arrow button -->
            <button class="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors ml-1 mb-2">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
          <!-- end date cards row -->

        </div>
        <!-- end dates section -->

      </div>
      <!-- end ONE card -->

      <div class="bg-white flex flex-wrap items-center gap-2 px-4 md:px-6 py-3 md:py-4 border-b border-gray-100">
          <button class="flex shrink-0 items-center gap-2 border border-gray-300 rounded-lg px-3 md:px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            Barcha turdagi
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button class="flex shrink-0 items-center gap-2 border border-gray-300 rounded-lg px-3 md:px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            Qo'shimcha parametrlar
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      <!-- Tour variants section -->
      <div class="bg-white shadow-sm overflow-visible mb-6">

        <!-- Filter bar -->
       

        <!-- Tour variant rows -->
        <div v-for="(variant, i) in tourVariants.slice(0, 3)" :key="'v'+i"
          class="flex flex-col md:flex-row md:items-center px-4 md:px-6 py-4 border-b border-gray-100 gap-4 md:gap-6">

          <!-- LEFT: room name + meal + 2 images -->
          <div class="shrink-0">
            <p class="text-blue-600 text-sm font-medium mb-1"
              style="text-decoration: underline; text-decoration-style: dashed; text-underline-offset: 3px;">
              {{ variant.roomName }}
            </p>
            <div class="flex items-center gap-1 mb-2">
              <!-- Camera icon -->
              <UIcon name="i-mdi-silverware-fork-knife" class="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <span class="text-xs text-gray-500">{{ variant.meal }}</span>
            </div>
            <!-- 2 images -->
            <div class="hidden md:flex gap-1">
              <img v-for="(img, j) in variant.images.slice(0, 2)" :key="j"
                :src="img" :alt="variant.roomName"
                class="object-cover" style="width: 120px; height: 80px;" />
            </div>
          </div>

          <!-- CENTER: departure / return + flight info -->
          <div class="flex-1 flex flex-col md:items-center justify-start gap-1">
            <div class="flex items-start gap-4">
              <!-- Departure -->
              <div class="flex items-center gap-1.5">
                <UIcon name="i-mdi-airplane-takeoff" class="w-5 h-5 text-gray-400 shrink-0" />
                <span class="text-base lg:text-2xl" style="color: #45464A; font-weight: 400;">{{ variant.departure }}</span>
              </div>
              <!-- Return -->
              <div class="flex items-center gap-1.5">
                <UIcon name="i-mdi-airplane-landing" class="w-5 h-5 text-gray-400 shrink-0" />
                <span class="text-base lg:text-2xl" style="color: #45464A; font-weight: 400;">{{ variant.returnDate }}</span>
              </div>
            </div>
            <p class="text-green-600 text-xs">muntazam reyslar mavjud</p>
          </div>

          <!-- RIGHT: nights info + price button -->
          <div class="flex items-center justify-between md:justify-end gap-4 md:shrink-0 pr-6">
            <div class="text-left md:text-right">
              <p class="text-gray-400 text-xs mb-0.5">{{ variant.nights }} kunga</p>
              <p class="text-orange-500 text-xs font-medium leading-tight">ulardan {{ variant.hotelNights }} tasi<br>mehmonxonada</p>
            </div>
            <!-- Price button: border box + half-outside checkmark -->
            <div class="relative inline-block" style="margin-right: 14px;">
              <button class="border-2 border-blue-700 rounded-sm hover:bg-blue-50 transition-colors flex items-center justify-center px-5 md:px-7 py-3"
                @click="navigateTo(`/tours/${$route.params.id}/booking`)">
                <span class="text-blue-900 font-bold whitespace-nowrap text-base md:text-lg">{{ variant.price }}$ dan.</span>
              </button>
              <div class="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center" style="right: -14px;">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        <!-- Extra variant rows (collapsible) -->
        <div
          class="overflow-hidden transition-all duration-500 ease-in-out"
          :style="variantsOpen ? 'max-height:2000px;opacity:1' : 'max-height:0;opacity:0'">
          <div v-for="(variant, i) in tourVariants.slice(3)" :key="'ve'+i"
            class="flex flex-col md:flex-row md:items-center px-4 md:px-6 py-4 border-b border-gray-100 gap-4 md:gap-6">

            <div class="shrink-0">
              <p class="text-blue-600 text-sm font-medium mb-1"
                style="text-decoration: underline; text-decoration-style: dashed; text-underline-offset: 3px;">
                {{ variant.roomName }}
              </p>
              <div class="flex items-center gap-1 mb-2">
                <UIcon name="i-mdi-silverware-fork-knife" class="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span class="text-xs text-gray-500">{{ variant.meal }}</span>
              </div>
              <div class="hidden md:flex gap-1">
                <img v-for="(img, j) in variant.images.slice(0, 2)" :key="j"
                  :src="img" :alt="variant.roomName"
                  class="object-cover" style="width: 120px; height: 80px;" />
              </div>
            </div>

            <div class="flex-1 flex flex-col md:items-center justify-start gap-1">
              <div class="flex items-start gap-4">
                <div class="flex items-center gap-1.5">
                  <UIcon name="i-mdi-airplane-takeoff" class="w-5 h-5 text-gray-400 shrink-0" />
                  <span class="text-base lg:text-2xl" style="color: #45464A; font-weight: 400;">{{ variant.departure }}</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <UIcon name="i-mdi-airplane-landing" class="w-5 h-5 text-gray-400 shrink-0" />
                  <span class="text-base lg:text-2xl" style="color: #45464A; font-weight: 400;">{{ variant.returnDate }}</span>
                </div>
              </div>
              <p class="text-green-600 text-xs">muntazam reyslar mavjud</p>
            </div>

            <div class="flex items-center justify-between md:justify-end gap-4 md:shrink-0 pr-5">
              <div class="text-left md:text-right">
                <p class="text-gray-400 text-xs mb-0.5">{{ variant.nights }} kunga</p>
                <p class="text-orange-500 text-xs font-medium leading-tight">ulardan {{ variant.hotelNights }} tasi<br>mehmonxonada</p>
              </div>
              <div class="relative inline-block" style="margin-right: 14px;">
                <button class="border-2 border-blue-700 rounded-sm hover:bg-blue-50 transition-colors flex items-center justify-center" style="padding: 12px 28px; min-width: 140px;">
                  <span class="text-blue-900 font-bold whitespace-nowrap" style="font-size: 18px;">{{ variant.price }}$ dan.</span>
                </button>
                <div class="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center" style="right: -14px;">
                  <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Show more toggle -->
        <div class="flex items-center justify-center py-4">
          <button
            class="flex items-center gap-2 text-blue-600 text-sm font-medium"
            style="border-bottom: 1px dashed #2563EB;"
            @click="variantsOpen = !variantsOpen">
            {{ variantsOpen ? 'Yopish' : `Ko'proq ko'rsatish 3/${tourVariants.length}` }}
            <svg class="w-4 h-4 transition-transform duration-300" :class="variantsOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
      <!-- end tour variants -->

      <!-- Hotel description section -->
      <div class="bg-white shadow-sm overflow-hidden mb-6 px-4 md:px-8 py-6 md:py-8">

        <!-- Title -->
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-5">Rayong Rim Pae Resort haqida</h2>

        <!-- Main description -->
        <p class="text-sm text-gray-700 leading-relaxed mb-5">
          Novotel Rayong Rim Pae Resort Rayong shahrining Klaeng tumanida joylashgan. Mehmonxona 1990 yilda qurilgan, oxirgi ta'mirlash 2014 yilda amalga oshirilgan. Jami <span class="font-bold">189 ta xona</span> mavjud.
        </p>

        <!-- Restaurants -->
        <div class="mb-5">
          <p class="text-sm font-bold text-gray-900 mb-1">Mehmonxona hududida 3 ta restoran, kafe va bar ishlaydi:</p>
          <p class="text-sm text-gray-700 leading-relaxed">Agora restorani (Nonushta 6:30 dan 10:30 gacha).</p>
          <p class="text-sm text-gray-700 leading-relaxed">The Garden restorani (Tay va xalqaro oshxonalari).</p>
          <p class="text-sm text-gray-700 leading-relaxed">The Shore restorani (Italyan oshxonasi).</p>
          <p class="text-sm text-gray-700 leading-relaxed">Biscuit Tea Room kafesi (Pishiriqlar, choy, qahva).</p>
          <p class="text-sm text-gray-700 leading-relaxed">Basseyn yonidagi bar - ekzotik kokteyl, tetiklovchi mevali ichimliklar, muzqaymoq yoki gazaklar buyurtma qilish mumkin.</p>
        </div>

        <!-- Extra info -->
        <div class="mb-8">
          <p class="text-sm text-gray-700 leading-relaxed">Mehmonlar uchun fitnes markaz, SPA salon va uchrashuv hamda tadbirlar o'tkazish uchun 6 ta konferens zali ishlaydi.</p>
          <p class="text-sm text-gray-700 leading-relaxed">Bolalar uchun: o'yin xonasi, o'yin maydonchasi, enaga xizmatlari (pullik).</p>
        </div>

        <!-- 3 info cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

          <!-- Card 1: Basseynlar -->
          <div class="bg-gray-100 rounded-2xl p-6">
            <h3 class="text-base font-bold text-gray-900 mb-5">Basseynlar</h3>
            <div class="space-y-5">
              <div class="flex items-start gap-4">
                <UIcon name="i-mdi-pool" class="w-8 h-8 text-blue-500 shrink-0" />
                <span class="text-sm text-gray-700 leading-snug">Sirpanchiqli bolalar basseyni - 1</span>
              </div>
              <div class="flex items-start gap-4">
                <UIcon name="i-mdi-pool" class="w-8 h-8 text-blue-500 shrink-0" />
                <span class="text-sm text-gray-700 leading-snug">2 ta umumiy basseyn</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Mehmonxonaning xususiyatlari -->
          <div class="bg-gray-100 rounded-2xl p-6">
            <h3 class="text-base font-bold text-gray-900 mb-5">Mehmonxonaning xususiyatlari:</h3>
            <div class="space-y-5">
              <div class="flex items-start gap-4">
                <UIcon name="i-mdi-paw-off" class="w-8 h-8 text-blue-500 shrink-0" />
                <span class="text-sm text-gray-700 leading-snug">Uy hayvonlarini joylashtirish taqiqlanadi.</span>
              </div>
              <div class="flex items-start gap-4">
                <UIcon name="i-mdi-wheelchair-accessibility" class="w-8 h-8 text-blue-500 shrink-0" />
                <span class="text-sm text-gray-700 leading-snug">Harakat qobiliyati cheklangan mehmonlar uchun xonalar - 104</span>
              </div>
              <div class="flex items-start gap-4">
                <UIcon name="i-mdi-baby-carriage" class="w-8 h-8 text-blue-500 shrink-0" />
                <span class="text-sm text-gray-700 leading-snug">Bolalar kravati - Bepul</span>
              </div>
              <div class="flex items-start gap-4">
                <UIcon name="i-mdi-door-open" class="w-8 h-8 text-blue-500 shrink-0" />
                <span class="text-sm text-gray-700 leading-snug">Qo'shni xonalar: 20 ta.</span>
              </div>
              <div class="flex items-start gap-4">
                <UIcon name="i-mdi-smoking-off" class="w-8 h-8 text-blue-500 shrink-0" />
                <span class="text-sm text-gray-700 leading-snug">Chekmaydigan mehmonlar uchun xonalar: 125 ta.</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Joylashuv -->
          <div class="bg-gray-100 rounded-2xl p-6">
            <h3 class="text-base font-bold text-gray-900 mb-5">Joylashuv</h3>
            <div class="space-y-5">
              <div class="flex items-start gap-4">
                <UIcon name="i-mdi-airplane" class="w-8 h-8 text-blue-500 shrink-0" />
                <span class="text-sm text-gray-700 leading-snug">U-Tapao-Pattaya xalqaro aeroportigacha - <span class="font-bold">74 km</span></span>
              </div>
              <div class="flex items-start gap-4">
                <UIcon name="i-mdi-map-marker-account" class="w-8 h-8 text-blue-500 shrink-0" />
                <span class="text-sm text-gray-700 leading-snug">Shahar markazigacha - <span class="font-bold">4,4 km</span>.</span>
              </div>
            </div>
          </div>

        </div>
        <!-- end 3 info cards -->

      </div>
      <!-- end hotel description -->

      <!-- Services section -->
      <div class="bg-white shadow-sm overflow-hidden mb-6 px-4 md:px-8 py-6 md:py-8">

        <h2 class="text-lg md:text-xl font-bold text-gray-900 mb-7">Novotel Rayong Rim Pae Resort mehmonxonasi tomonidan taklif etiladigan xizmatlar</h2>

        <!-- First 6 always visible -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
          <div v-for="(service, i) in hotelServices.slice(0, 6)" :key="'a'+i" class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style="background-color: #2d3748;">
              <UIcon :name="service.icon" class="w-7 h-7 text-white" />
            </div>
            <div class="min-w-0">
              <p class="text-sm font-bold text-gray-900 mb-1">{{ service.title }}</p>
              <p class="text-sm text-gray-500 leading-relaxed">{{ service.description }}</p>
            </div>
          </div>
        </div>

      

     

      </div>
      <!-- end services -->

    </div>
    <!-- end container -->

  </div>
</template>

<script setup>
const route = useRoute()

const searchParams = ref({
  from: route.query.from || 'Toshkent',
  country: route.query.country || 'Tayland',
})

const countrySearch = ref('')
const selectedDate = ref(null)
const nightsCount = ref(Number(route.query.duration) || 7)
const adults = ref(Number((route.query.travelers || '2a').match(/(\d+)a/)?.[1]) || 2)
const children = ref(Number((route.query.travelers || '').match(/(\d+)c/)?.[1]) || 0)
const activeImage = ref(0)
const servicesOpen = ref(false)

const countries = [
  { name: 'Turkiya',      flag: '🇹🇷' },
  { name: 'Tayland',      flag: '🇹🇭' },
  { name: 'BAA (Dubai)',  flag: '🇦🇪' },
  { name: 'Gretsiya',     flag: '🇬🇷' },
  { name: 'Misr',         flag: '🇪🇬' },
  { name: 'Indoneziya',   flag: '🇮🇩' },
  { name: 'Maldiv',       flag: '🇲🇻' },
  { name: 'Fransiya',     flag: '🇫🇷' },
  { name: 'Shveytsariya', flag: '🇨🇭' },
  { name: 'Italiya',      flag: '🇮🇹' },
  { name: 'Ispaniya',     flag: '🇪🇸' },
  { name: 'Malayziya',    flag: '🇲🇾' },
]

const filteredCountries = computed(() =>
  countries.filter(c => c.name.toLowerCase().includes(countrySearch.value.toLowerCase()))
)

const formatDate = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`
}

const tour = {
  name: 'Novotel Rayong Rim Pae Resort',
  location: 'Kao Lak, Tailand',
  score: 9.2,
  stars: 4,
  badge: 'Joylar kam qoldi',
  price: 273,
  dateLabel: '19 iyuldan 7 tun',
  images: [
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80&fit=crop',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80&fit=crop',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80&fit=crop',
  ],
  amenities: [
    { label: '30 M\nplyajgacha',        path: '<path stroke-linecap="round" stroke-linejoin="round" d="M13 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11.5 8l-1.5 4h3l-1 5M9 9l-1.5 2.5M15 9l1.5 2.5"/>' },
    { label: 'plyajga yaqin',           path: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 17c2-2.5 4-3.5 6-3.5s4 1 6 1 4-1 6-3.5M3 12c2-2 4-3 6-3s4 1 6 1 4-1 6-3"/>' },
    { label: "bolalar bilan ta'til",    path: '<circle cx="8" cy="5" r="2"/><circle cx="16" cy="5" r="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 22v-5a2 2 0 012-2h4a2 2 0 012 2v5M8 15v7m4-7v7"/>' },
    { label: 'juftliklar\nuchun ideal', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>' },
    { label: 'konditsioner',            path: '<rect x="2" y="7" width="20" height="7" rx="2"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 14v3m4-3v3m4-3v3m4-3v3"/>' },
    { label: 'qumli plyaj',             path: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3C8.5 3 6 7 6 12h12c0-5-2.5-9-6-9zm0 0v18M6 12h12"/>' },
  ],
}

const tourDates = ref([
  { label: '17 iyul, pay',  price: null, rubPrice: null,      bestPrice: false, active: false },
  { label: '18 iyul, ju',   price: null, rubPrice: '199 463', bestPrice: false, active: false },
  { label: '19 iyul, shan', price: 245,  rubPrice: null,      bestPrice: true,  active: true  },
  { label: '20 iyul, yak',  price: null, rubPrice: '186 543', bestPrice: false, active: false },
  { label: '21 iyul, пн',   price: null, rubPrice: null,      bestPrice: false, active: false },
  { label: '22 iyul, вт',   price: null, rubPrice: null,      bestPrice: false, active: false },
  { label: '23 iyul, chor', price: null, rubPrice: null,      bestPrice: false, active: false },
])

const setActiveDate = (idx) => {
  tourDates.value.forEach((d, i) => { d.active = i === idx })
}

const roomImages = [
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&q=80&fit=crop',
  'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=200&q=80&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=200&q=80&fit=crop',
]

const variantsOpen = ref(false)

const tourVariants = [
  { roomName: "Bog' ko'rinishli yaxshilangan xona",       meal: 'AI - Barchasi kiritilgan, 2 yoshi katta', images: roomImages, departure: '19 iyul, shan', returnDate: '26 iyul, shan', nights: 7, hotelNights: 6, price: 247 },
  { roomName: "Dengiz ko'rinishli standart xona",          meal: 'BB - Nonushta kiritilgan, 2 yoshi katta',  images: roomImages, departure: '19 iyul, shan', returnDate: '26 iyul, shan', nights: 7, hotelNights: 6, price: 289 },
  { roomName: "Deluxe xona, ochiq basseyn ko'rinishi",     meal: 'HB - Yarim pansion, 2 yoshi katta',       images: roomImages, departure: '19 iyul, shan', returnDate: '27 iyul, yak', nights: 8, hotelNights: 7, price: 315 },
  { roomName: "Superior xona, bog' ko'rinishi",            meal: 'AI - Barchasi kiritilgan, 2 yoshi katta', images: roomImages, departure: '20 iyul, yak',  returnDate: '27 iyul, yak', nights: 7, hotelNights: 6, price: 263 },
  { roomName: "Junior Suite, dengiz panoramasi",           meal: 'BB - Nonushta kiritilgan, 2 yoshi katta',  images: roomImages, departure: '20 iyul, yak',  returnDate: '27 iyul, yak', nights: 7, hotelNights: 6, price: 374 },
  { roomName: "Family xona, ikki yotoq",                   meal: 'FB - To\'liq pansion, 2 yoshi katta',     images: roomImages, departure: '21 iyul, du',   returnDate: '28 iyul, du',  nights: 7, hotelNights: 6, price: 412 },
  { roomName: "Bog' ko'rinishli yaxshilangan xona",       meal: 'HB - Yarim pansion, 2 yoshi katta',       images: roomImages, departure: '21 iyul, du',   returnDate: '28 iyul, du',  nights: 7, hotelNights: 6, price: 258 },
]

const hotelServices = [
  {
    icon: 'i-mdi-map-marker',
    title: 'Mehmonxona infratuzilmasi',
    description: "Lift, Esdalik buyumlari do'koni, Valyuta almashtirish punkti, Bog', Banket zali, Bar, Restoran, Ochiq basseyn, Jakuzi, Bagaj saqlash kamerasi, Avtoturargoh, Kafe, Basseyn yonidagi bar, Resepshn xavfsizlik qutisi (narxi haqida ma'lumot yo'q), Teras",
  },
  {
    icon: 'i-mdi-briefcase',
    title: 'Biznes xizmatlar',
    description: 'Kseroks, Faks, Konferens-zal, Muzokara xonasi, Biznes markaz',
  },
  {
    icon: 'i-mdi-human-handsup',
    title: 'Xonalardagi qulayliklar',
    description: "Balkon, Dush, Mini-bar (pullik), Televizor, Telefon, Fen, Teras, Muzlatgich, Bide, Xonada internet (bepul), Konditsioner (narxi haqida ma'lumot yo'q), Seyf",
  },
  {
    icon: 'i-mdi-bell-ring',
    title: 'Mehmonxonadagi xizmatlar',
    description: "Kecha-kunduz ro'yxatdan o'tish punkti, Bagaj saqlash kamerasi, Konsyerj, Xonada xizmat ko'rsatish, Avtomobil ijarasi, Velosiped ijarasi, Transfer, Kir yuvish, Kimyoviy tozalash, Kiyim dazmollash, Basseyn yonida shezlong va soyabonlar, Yangi turmush qurganlar uchun xizmatlar, Hududda Internet/Wi-Fi (bepul)",
  },
  {
    icon: 'i-mdi-swim',
    title: 'Plyaj',
    description: 'Plyajda shezlong va soyabonlar (pullik), Plyaj sochiqlar (pullik), Shaxsiy plyaj, Qumli',
  },
  {
    icon: 'i-mdi-baby-face',
    title: 'Bolalar uchun xizmatlar',
    description: 'Bolalar maydonchasi, O\'yin xonasi, Bolalarni parvarish qilish, Bolalar basseyn, Bolalar klubi, Enaga (pullik), Bolalar kravati (bepul)',
  },
  {
    icon: 'i-mdi-soccer',
    title: 'Sport',
    description: 'Velosport, Vindserfing, Suv sporti turlari, Voleybol, Mini-golf, Stol tennisi, Baliq ovlash, Fitnes markaz, Futbol, Mashq zali',
  },
  {
    icon: 'i-mdi-spa',
    title: "Go'zallik va salomatlik",
    description: 'Massaj, Spa va salomatlik markazi, Sauna, Gidromassaj vannasi, Quyoshda qoralish terasasi',
  },
  {
    icon: 'i-mdi-balloon',
    title: "Ko'ngil ochish",
    description: 'Darts, Bilyard (pullik)',
  },
  {
    icon: 'i-mdi-food-fork-drink',
    title: 'Maxsus menyu',
    description: 'Shvedcha stol',
  },
  {
    icon: 'i-mdi-wheelchair-accessibility',
    title: 'Maxsus nomerlar',
    description: 'Imkoniyati cheklangan mehmonlar uchun, Chekmaydiganlar uchun',
  },
  {
    icon: 'i-mdi-office-building',
    title: "Mehmonxona yaqinidagi ob'ektlar",
    description: 'Golf maydonchasi',
  },
]

useSeoMeta({
  title: `${tour.name} - Triponik`,
  description: `${tour.name} haqida batafsil ma'lumot`,
})
</script>

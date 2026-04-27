<template>
  <div class="bg-gray-100 min-h-screen">

    <!-- Breadcrumbs -->
    <div class="mx-auto px-4 py-3 text-sm text-gray-500 items-center flex gap-1 justify-center bg-white mb-4 p-2">
      <span>
        08:11 dan keyin ekskursiya narxi o'zgarishi mumkin
      </span>
    </div>
    <!-- Card -->
    <div class="max-w-5xl mx-auto px-4">
      <div class="bg-white rounded-sm overflow-hidden flex flex-col md:flex-row" style="box-shadow: 0 1px 4px rgba(0,0,0,0.10);">

        <!-- LEFT: Images -->
        <div class="w-full md:w-[290px] md:shrink-0 flex flex-col relative">
          <!-- Main image with arrow -->
          <div class="relative flex-1 overflow-hidden h-56 md:h-[280px]">
            <img :src="images[activeImage]" alt="Thavorn Beach Village & Spa" class="w-full h-full object-cover" />
            <!-- Next arrow -->
            <button
              class="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow"
              @click="activeImage = activeImage < images.length - 1 ? activeImage + 1 : 0">
              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- Thumbnails -->
          <div class="flex" style="gap: 2px; height: 88px;">
            <button v-for="(img, i) in images" :key="i" class="flex-1 overflow-hidden" @click="activeImage = i">
              <img :src="img" alt="" class="w-full h-full object-cover"
                :class="activeImage === i ? '' : 'brightness-75 hover:brightness-90'" />
            </button>
          </div>

          <!-- Bottom link -->
          <div class="bg-white px-3 py-2">
            <button class="text-blue-600 text-sm hover:underline">Mehmonxona haqida batafsil</button>
          </div>
        </div>

        <!-- CENTER: Info -->
        <div class="flex-1 min-w-0 px-6 py-5 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">

          <!-- Score badge -->
          <div class="mb-3 -mt-5">
            <div class="relative inline-flex items-center justify-center w-11 h-11">
              <img src="/assets/logos/Vector.png" alt="badge" class="absolute inset-0 w-full h-full object-contain" />
              <span class="relative z-10 text-white font-bold text-base">4.2</span>
            </div>
          </div>

          <!-- Stars -->
          <div class="flex gap-0.5 mb-2">
            <svg v-for="i in 4" :key="'s'+i" class="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-5 h-5 text-gray-200 fill-gray-200" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <!-- Name -->
          <h1 class="text-xl font-bold text-gray-900 mb-1.5">Thavorn Beach Village &amp; Spa</h1>

          <!-- Location -->
          <div class="flex items-center gap-1 mb-4">
            <svg class="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="text-sm text-gray-500">Kao Lak, Tailand</span>
          </div>

          <!-- Room -->
          <p class="text-sm text-gray-700 mb-5">Terassa va bog' manzarali standart xona</p>

          <!-- Divider -->
          <div class="border-t border-gray-200 mb-4"></div>

          <!-- Nomer link -->
          <button class="text-blue-600 text-sm text-left w-fit mt-auto"
            style="text-decoration: underline; text-decoration-style: dashed; text-underline-offset: 3px;">
            Nomer haqida batafsil
          </button>

        </div>

        <!-- RIGHT: Details -->
        <div class="w-full md:w-[260px] md:shrink-0 px-5 py-5 flex flex-col bg-[#f9f9f9]">

          <!-- Dates -->
          <p class="text-base font-bold text-gray-900 mb-0.5">19 iyul - 26 iyul</p>
          <p class="text-sm text-gray-400 mb-4">2 katta</p>

          <div class="border-t border-gray-200 mb-4"></div>

          <!-- OVQATLANISH -->
          <div class="mb-4">
            <p class="text-[12px] font-bold uppercase tracking-widest text-[#8099A2] mb-1">Ovqatlanish</p>
            <div class="flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              <p class="text-sm text-gray-800">BB — nonushta</p>
            </div>
          </div>

          <!-- TRANSFER -->
          <div class="mb-4">
            <p class="text-[12px] font-bold uppercase tracking-widest text-[#8099A2] mb-1">Transfer</p>
            <p class="text-xs  leading-snug">Transferni aniqlash uchun parvozlarni tanlang</p>
          </div>

          <!-- SUG'URTA -->
          <div class="mb-4">
            <p class="text-[12px] font-bold uppercase tracking-widest text-[#8099A2] mb-1">Sug'urta</p>
            <p class="text-xs leading-snug">Sug'urtani tekshirish uchun reyslarni tanlang</p>
          </div>

          <!-- VIZA -->
          <div class="mb-4">
            <p class="text-[12px] font-bold uppercase tracking-widest text-[#8099A2] mb-1">Viza uchun ariza berish xizmati</p>
            <div class="flex items-center gap-1.5">
              <span class="text-sm">Kiritilmagan</span>
              <svg class="w-3.5 h-3.5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
          </div>

          <!-- Price -->
          <div class="mt-auto pt-4 border-t border-gray-200">
            <p class="text-2xl font-bold text-blue-600">227$ <span class="text-base font-semibold">dan</span></p>
          </div>

        </div>

      </div>
    </div>

    <!-- Flight Selection -->
    <div class="max-w-5xl mx-auto mt-6 pb-8  bg-[#f9f9f9]">

      <!-- Title + Filters -->
      <h2 class="text-base font-semibold text-gray-900 mb-3 pt-2 pl-4">Qulay reyslar bilan turni tanlang</h2>
      <div class="flex flex-wrap items-center gap-2 mb-3 px-4">
        <button class="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1.5 text-sm text-blue-600 bg-white hover:bg-gray-50">
          <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18M6 8h12M10 12h4"/>
          </svg>
          Filterlar
        </button>
        <button class="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 bg-white hover:bg-gray-50">To'gridan-to'g'ri</button>
        <button class="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 bg-white hover:bg-gray-50">Transfer xizmati kiritilgan</button>
        <button class="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 bg-white hover:bg-gray-50">Bagaj</button>
      </div>

      <!-- Flight option cards -->
      <div class="space-y-3">
        <div v-for="(opt, i) in flightOptions" :key="i"
          class="overflow-hidden transition-all duration-500 ease-in-out"
          :style="i >= 2 && !showAllFlights ? 'max-height:0;margin-bottom:0' : 'max-height:800px'">
        <div class="bg-white overflow-hidden flex flex-col md:flex-row" style="box-shadow: 0 1px 4px rgba(0,0,0,0.10);">

          <!-- Left: Two flight rows -->
          <div class="flex-1 min-w-0 py-5">

            <!-- Platform badges -->
            <div class="flex items-center gap-2 px-5 pt-3 pb-3 border-b border-gray-100">
              <span v-for="p in opt.platforms" :key="p"
                class="flex items-center gap-1 text-[11px] text-green-600 border border-green-200 rounded-md px-2.5 py-0.5 bg-[#DCFCE7]">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                {{ p }}
              </span>
            </div>

            <!-- MANZILGA -->
            <div class="border-b border-gray-100">
              <div class="flex items-center gap-1.5 px-5 pt-3 pb-0">
                <UIcon name="i-mdi-airplane-takeoff" class="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <p class="text-[14px] font-bold uppercase tracking-widest text-[#333333]">Manzilga</p>
              </div>
              <div class="flex items-center gap-2 md:gap-5 px-3 md:px-5">
                <div class="hidden sm:block w-[130px] shrink-0">
                  <img src="~/assets/logos/container.svg" alt="Airline Logo" class="w-15 h-15 object-contain mb-1">
                  <span class="inline-block text-[10px] font-medium bg-gray-100 text-gray-500 px-2 py-0.5 rounded-sm mb-1">{{ opt.out.class }}</span>
                  <p class="text-[11px] text-gray-500 mb-4">{{ opt.out.flightNo }}</p>
                </div>
                <div class="flex-1 flex items-center justify-center gap-3 max-w-md ml-0 md:ml-10">
                  <div class="shrink-0">
                    <p class="text-[15px] font-bold text-gray-900 leading-tight">{{ opt.out.from.city }}</p>
                    <p class="text-xs text-gray-500 mt-0.5">{{ opt.out.from.time }} {{ opt.out.from.date }}</p>
                    <p class="text-xs text-blue-500 font-medium">{{ opt.out.from.code }}</p>
                  </div>
                  <div class="flex-1 flex flex-col items-center min-w-0">
                    <p class="text-[11px] text-gray-400 mb-1">{{ opt.out.duration }} parvozda</p>
                    <div class="relative w-full" style="height:28px;">
                      <div class="absolute left-0 right-0 bg-gray-300" style="top:13px;height:1px;"></div>
                      <div class="absolute z-10 w-2.5 h-2.5 rounded-full border-2 border-blue-500 bg-white" style="left:0;top:8px;"></div>
                      <div class="absolute z-10 w-2.5 h-2.5 rounded-full border-2 border-blue-500 bg-white" style="right:0;top:8px;"></div>
                    </div>
                    <div class="flex items-center justify-center gap-0.5 mt-1">
                      <img src="~/assets/logos/Background.png" class="w-5 h-5 object-contain">
                      <img src="~/assets/logos/xluggage.png" class="w-5 h-5 object-contain">
                    </div>
                    <p class="text-[11px] mt-1" :class="opt.out.direct ? 'text-gray-500' : 'text-orange-500'">
                      {{ opt.out.direct ? "To'g'ridan-to'g'ri" : opt.out.stops + " to'xtash" }}
                    </p>
                  </div>
                  <div class="shrink-0 text-right">
                    <p class="text-[15px] font-bold text-gray-900 leading-tight">{{ opt.out.to.city }}</p>
                    <p class="text-xs text-gray-500 mt-0.5">{{ opt.out.to.time }} {{ opt.out.to.date }}</p>
                    <p class="text-xs text-blue-500 font-medium">{{ opt.out.to.code }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- QAYTISH -->
            <div>
              <div class="flex items-center gap-1.5 px-5 pt-3 pb-0">
                <UIcon name="i-mdi-airplane-landing" class="w-3.5 h-3.5 text-gray-500 shrink-0" style="transform:scaleX(-1);" />
                <p class="text-[14px] font-bold uppercase tracking-widest text-[#333333]">Qaytish</p>
              </div>
              <div class="flex items-center gap-2 md:gap-5 px-3 md:px-5">
                <div class="hidden sm:block w-[130px] shrink-0">
                  <img src="~/assets/logos/container.svg" alt="Airline Logo" class="w-15 h-15 object-contain mb-1">
                  <span class="inline-block text-[10px] font-medium bg-gray-100 text-gray-500 px-2 py-0.5 rounded-sm mb-1">{{ opt.ret.class }}</span>
                  <p class="text-[11px] text-gray-500 mt-0.5">{{ opt.ret.flightNo }}</p>
                </div>
                <div class="flex-1 flex items-center justify-center gap-3 max-w-md ml-0 md:ml-10">
                  <div class="shrink-0">
                    <p class="text-[15px] font-bold text-gray-900 leading-tight">{{ opt.ret.from.city }}</p>
                    <p class="text-xs text-gray-500 mt-0.5">{{ opt.ret.from.time }} {{ opt.ret.from.date }}</p>
                    <p class="text-xs text-blue-500 font-medium">{{ opt.ret.from.code }}</p>
                  </div>
                  <div class="flex-1 flex flex-col items-center min-w-0">
                    <p class="text-[11px] text-gray-400 mb-1">{{ opt.ret.duration }} parvozda</p>
                    <div class="relative w-full" style="height:28px;">
                      <div class="absolute left-0 right-0 bg-gray-300" style="top:13px;height:1px;"></div>
                      <div class="absolute z-10 w-2.5 h-2.5 rounded-full border-2 border-blue-500 bg-white" style="left:0;top:8px;"></div>
                     
                      <div class="absolute z-10 w-2.5 h-2.5 rounded-full border-2 border-blue-500 bg-white" style="right:0;top:8px;"></div>
                    </div>
                     <div class="z-10 bg-white px-1 flex items-center gap-1" style="top:2px;">
                        <img src="~/assets/logos/Background.png" alt="Baggage Icon" class="w-5 h-5">
                        <img src="~/assets/logos/Background (1).svg" alt="Baggage Icon" class="w-5 h-5">
                      </div>
                    <p class="text-[11px] mt-1" :class="opt.ret.direct ? 'text-gray-500' : 'text-teal-500'"
                      :style="!opt.ret.direct ? 'text-decoration:underline;text-decoration-style:dashed;text-underline-offset:2px' : ''">
                      {{ opt.ret.direct ? "To'g'ridan-to'g'ri" : opt.ret.stops + ' pересадка' }}
                    </p>
                  </div>
                  <div class="shrink-0 text-right">
                    <p class="text-[15px] font-bold text-gray-900 leading-tight">{{ opt.ret.to.city }}</p>
                    <p class="text-xs text-gray-500 mt-0.5">{{ opt.ret.to.time }} {{ opt.ret.to.date }}</p>
                    <p class="text-xs text-blue-500 font-medium">{{ opt.ret.to.code }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Right: features + CTA -->
          <div class="flex w-full md:w-[210px] md:shrink-0 px-4 py-5 flex-col justify-between">
            <div class="border-t md:border-t-0 md:border-l border-dotted border-gray-300 pt-4 md:pt-0 pl-0 md:pl-4 mt-0 md:mt-12">
              <div class="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-0 md:space-y-3">
                <div class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                  </svg>
                  <p class="text-[11px] leading-snug text-gray-700">{{ opt.nights }} tunga, <span class="text-orange-500 font-medium">ulardan {{ opt.hotelNights }} tasi mehmonxonada</span></p>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 shrink-0" :class="opt.fullPayment ? 'text-gray-400' : 'text-green-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" stroke-width="1.5"/>
                    <path v-if="opt.fullPayment" stroke-linecap="round" stroke-width="1.5" d="M4.93 4.93l14.14 14.14"/>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <p class="text-[11px] text-gray-700">{{ opt.fullPayment ? "100% to'lov" : "Bo'lib to'lash" }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <UIcon name="i-mdi-bus" class="w-4 h-4 text-green-500 shrink-0" />
                  <p class="text-[11px] text-gray-700">{{ opt.transfer }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <p class="text-[11px] text-gray-700">Tibbiy sug'urta kiritilgan</p>
                </div>
              </div>
              <button class="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 rounded-sm mt-4 md:mt-24"
                @click="navigateTo(`/tours/${$route.params.id}/checkout`)">
                {{ opt.price }}$ ga turni tanlash
              </button>
            </div>
          </div>

        </div>
        </div>

        <!-- Show more button -->
        <div v-if="flightOptions.length > 2" class="flex justify-center py-3">
          <button
            class="border border-blue-500 text-blue-600 text-sm font-semibold px-10 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            @click="showAllFlights = !showAllFlights">
            {{ showAllFlights ? 'Yopish' : 'Ko\'proq ko\'rsatish' }}
          </button>
        </div>

      </div>
    </div>

    <!-- How booking works -->
    <div class="max-w-5xl mx-auto px-4 py-12">
      <h2 class="text-2xl font-bold text-gray-900 text-center mb-12">Bronlash qanday amalga oshiriladi?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">

        <!-- Step 1 -->
        <div class="flex flex-col items-center text-center">
          <div class="relative mb-6">
            <img src="~/assets/logos/Background.svg" alt="Turni tanlash" class="w-44 h-44 object-contain mx-auto" />
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-3">Turni tanlash</h3>
          <p class="text-sm text-gray-500 leading-relaxed mb-3">Sizni qiziqtirgan turni tanlang.</p>
          <p class="text-sm text-orange-500 font-medium leading-relaxed">Turoperator narxni o'zgartirishdan oldin shoshiling!</p>
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col items-center text-center">
          <div class="mb-6">
            <img src="~/assets/logos/infoBlock__iconPaymentCard fill.svg" alt="To'lov ma'lumotlari" class="w-30 h-44 object-contain mx-auto" />
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-3">Turistik ma'lumotlar va to'lov ma'lumotlari</h3>
          <p class="text-sm text-gray-500 leading-relaxed">Kontakt ma'lumotlarini, sayyohlarning ismlarini va bronni tasdiqlash uchun zarur bo'lgan bank kartasi ma'lumotlarini ko'rsating</p>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col items-center text-center">
          <div class="mb-6">
            <img src="~/assets/logos/Image.svg" alt="Bronlashni yakunlash" class="w-44 h-44 object-contain mx-auto" />
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-3">Bronlashni yakunlash va hujjatlarni qabul qilish</h3>
          <p class="text-sm text-gray-500 leading-relaxed">Turoperator bronni tasdiqlaydi, to'lov sizning kartangizdan yechib olinadi va siz shartnoma va sayohat paketlarini elektron pochtangizga olasiz.</p>
        </div>

      </div>
    </div>

    </div>
</template>

<script setup>
const activeImage = ref(0)
const showAllFlights = ref(false)

const images = [
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80&fit=crop',
]

const flightOptions = [
  {
    platforms: ['Space Travel', 'Travelata', "Let's Fly"],
    price: 227, nights: 7, hotelNights: 6,
    fullPayment: true, transfer: 'Jamoaviy transfer',
    out: {
      class: 'EKONOM', flightNo: 'SU284',
      from: { city: 'Toshkent', time: '19:10', date: '19 iyul, shan', code: 'TAS' },
      to:   { city: 'Pxuket',   time: '08:30', date: '20-iyul, yak',  code: 'HKT' },
      duration: '9s 20d', direct: true,
    },
    ret: {
      class: 'EKONOM', flightNo: 'SU285',
      from: { city: 'Pxuket',   time: '21:40', date: '26 iyul, shan', code: 'HKT' },
      to:   { city: 'Toshkent', time: '18:05', date: '27-iyul, yak',  code: 'TAS' },
      duration: '24s 25d', direct: false, stops: 1, baggage: [10, 23],
    },
  },
  {
    platforms: ['Travelata', "Let's Fly"],
    price: 249, nights: 7, hotelNights: 6,
    fullPayment: false, transfer: 'Individual transfer',
    out: {
      class: 'BIZNES', flightNo: 'HY701',
      from: { city: 'Toshkent', time: '06:55', date: '19 iyul, shan', code: 'TAS' },
      to:   { city: 'Pxuket',   time: '16:20', date: '19-iyul, shan', code: 'HKT' },
      duration: '9s 25d', direct: true,
    },
    ret: {
      class: 'BIZNES', flightNo: 'HY702',
      from: { city: 'Pxuket',   time: '17:30', date: '26 iyul, shan', code: 'HKT' },
      to:   { city: 'Toshkent', time: '23:55', date: '26-iyul, shan', code: 'TAS' },
      duration: '6s 25d', direct: true, stops: 0, baggage: [20, 30],
    },
  },
  {
    platforms: ['Space Travel'],
    price: 198, nights: 8, hotelNights: 7,
    fullPayment: true, transfer: 'Jamoaviy transfer',
    out: {
      class: 'EKONOM', flightNo: 'FZ512',
      from: { city: 'Toshkent', time: '22:40', date: '19 iyul, shan', code: 'TAS' },
      to:   { city: 'Pxuket',   time: '14:55', date: '20-iyul, yak',  code: 'HKT' },
      duration: '11s 15d', direct: false, stops: 1,
    },
    ret: {
      class: 'EKONOM', flightNo: 'FZ513',
      from: { city: 'Pxuket',   time: '10:15', date: '27 iyul, yak',  code: 'HKT' },
      to:   { city: 'Toshkent', time: '06:30', date: '28-iyul, du',   code: 'TAS' },
      duration: '20s 15d', direct: false, stops: 2, baggage: [10],
    },
  },
]

useSeoMeta({ title: 'Thavorn Beach Village & Spa - Bron qilish | Triponik' })
</script>

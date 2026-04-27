<template>
  <div class="bg-gray-100 min-h-screen pb-24">

    <!-- Top banner -->
    <div class="flex items-center justify-center bg-white px-4 py-3 text-sm text-gray-500 mb-4">
      08:11 dan keyin ekskursiya narxi o'zgarishi mumkin
    </div>

    <!-- Hotel card -->
    <div class="max-w-5xl mx-auto">
      <div class="bg-white rounded-sm overflow-hidden flex flex-col md:flex-row" style="box-shadow: 0 1px 4px rgba(0,0,0,0.10);">

        <!-- LEFT: Images -->
        <div class="w-full md:w-[290px] md:shrink-0 flex flex-col">
          <div class="relative overflow-hidden h-56 md:h-[280px]">
            <img :src="images[activeImage]" alt="Hotel" class="w-full h-full object-cover" />
            <button
              class="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow"
              @click="activeImage = activeImage < images.length - 1 ? activeImage + 1 : 0">
              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div class="flex" style="gap: 2px; height: 88px;">
            <button v-for="(img, i) in images" :key="i" class="flex-1 overflow-hidden" @click="activeImage = i">
              <img :src="img" alt="" class="w-full h-full object-cover"
                :class="activeImage === i ? '' : 'brightness-75 hover:brightness-90'" />
            </button>
          </div>
          <div class="bg-white px-3 py-2">
            <button class="text-blue-600 text-sm hover:underline">Mehmonxona haqida batafsil</button>
          </div>
        </div>

        <!-- CENTER: Info -->
        <div class="flex-1 min-w-0 px-6 py-5 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
          <div class="mb-3 -mt-5">
            <div class="relative inline-flex items-center justify-center w-11 h-11">
              <img src="/assets/logos/Vector.png" alt="badge" class="absolute inset-0 w-full h-full object-contain" />
              <span class="relative z-10 text-white font-bold text-base">4.2</span>
            </div>
          </div>
          <div class="flex gap-0.5 mb-2">
            <svg v-for="i in 4" :key="'s'+i" class="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg class="w-5 h-5 text-gray-200 fill-gray-200" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h1 class="text-xl font-bold text-gray-900 mb-1.5">Thavorn Beach Village &amp; Spa</h1>
          <div class="flex items-center gap-1 mb-4">
            <svg class="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="text-sm text-gray-500">Kao Lak, Tailand</span>
          </div>
          <p class="text-sm text-gray-700 mb-5">Terassa va bog' manzarali standart xona</p>
          <div class="border-t border-gray-200 mb-4"></div>
          <button class="text-blue-600 text-sm text-left w-fit mt-40"
            style="text-decoration: underline; text-decoration-style: dashed; text-underline-offset: 3px;">
            Nomer haqida batafsil
          </button>
        </div>

        <!-- RIGHT: Details -->
        <div class="w-full md:w-[260px] md:shrink-0 px-5 py-5 flex flex-col bg-[#f9f9f9]">
          <p class="text-base font-bold text-gray-900 mb-0.5">19 iyul - 26 iyul</p>
          <p class="text-sm text-gray-400 mb-4">2 katta</p>
          <div class="border-t border-gray-200 mb-4"></div>
          <div class="mb-4">
            <p class="text-[12px] font-bold uppercase tracking-widest text-[#8099A2] mb-1">Ovqatlanish</p>
            <div class="flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              <p class="text-sm text-gray-800">BB — nonushta</p>
            </div>
          </div>
          <div class="mb-4">
            <p class="text-[12px] font-bold uppercase tracking-widest text-[#8099A2] mb-1">Transfer</p>
            <p class="text-xs leading-snug">Transferni aniqlash uchun parvozlarni tanlang</p>
          </div>
          <div class="mb-4">
            <p class="text-[12px] font-bold uppercase tracking-widest text-[#8099A2] mb-1">Sug'urta</p>
            <p class="text-xs leading-snug">Sug'urtani tekshirish uchun reyslarni tanlang</p>
          </div>
          <div class="mb-4">
            <p class="text-[12px] font-bold uppercase tracking-widest text-[#8099A2] mb-1">Viza uchun ariza berish xizmati</p>
            <div class="flex items-center gap-1.5">
              <span class="text-sm">Kiritilmagan</span>
              <svg class="w-3.5 h-3.5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
          </div>
          <div class="mt-auto pt-4 border-t border-gray-200">
            <p class="text-2xl font-bold text-blue-600">227$ <span class="text-base font-semibold">dan</span></p>
          </div>
        </div>

      </div>
    </div>

    <!-- Flight selection -->
    <div class="max-w-5xl mx-auto mt-6 bg-[#f9f9f9]">
      <h2 class="text-base font-semibold text-gray-900 mb-3 pt-2 px-4">Qulay reyslar bilan turni tanlang</h2>
      <div class="flex items-center justify-between mb-3 px-4">
        <button class="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1.5 text-sm text-blue-600 bg-white hover:bg-gray-50">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18M6 8h12M10 12h4"/>
          </svg>
          Filterlar
        </button>
        <div class="flex flex-wrap items-center gap-2 px-4">
          <button class="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 bg-white hover:bg-gray-50">To'gridan-to'g'ri</button>
          <button class="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 bg-white hover:bg-gray-50">Transfer xizmati kiritilgan</button>
          <button class="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 bg-white hover:bg-gray-50">Bagaj</button>
        </div>
      </div>

      <div class="space-y-3">
        <div>
          <div class="bg-white overflow-hidden flex flex-col md:flex-row" style="box-shadow: 0 1px 4px rgba(0,0,0,0.10);">
            <div class="flex-1 min-w-0 py-5">
              <div class="flex items-center gap-2 px-5 pt-3 pb-3 border-b border-gray-100">
                <span v-for="p in ['Space Travel', 'Travelata', 'Let\'s Fly']" :key="p"
                  class="flex items-center gap-1 text-[11px] text-green-600 border border-green-200 rounded-md px-2.5 py-0.5 bg-[#DCFCE7]">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
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
                    <img src="~/assets/logos/Container.svg" alt="Airline" class="w-15 h-15 object-contain mb-1">
                    <span class="inline-block text-[10px] font-medium bg-gray-100 text-gray-500 px-2 py-0.5 rounded-sm mb-1">EKONOM</span>
                    <p class="text-[11px] text-gray-500 mb-4">SU284</p>
                  </div>
                  <div class="flex-1 flex items-center justify-center gap-3 max-w-md ml-0 md:ml-10">
                    <div class="shrink-0">
                      <p class="text-[15px] font-bold text-gray-900 leading-tight">Toshkent</p>
                      <p class="text-xs text-gray-500 mt-0.5">19:10 19 iyul, shan</p>
                      <p class="text-xs text-blue-500 font-medium">SVQ</p>
                    </div>
                    <div class="flex-1 flex flex-col items-center min-w-0">
                      <p class="text-[11px] text-gray-400 mb-1">9s 20d parvozda</p>
                      <div class="relative w-full" style="height:28px;">
                        <div class="absolute left-0 right-0 bg-gray-300" style="top:13px;height:1px;"></div>
                        <div class="absolute z-10 w-2.5 h-2.5 rounded-full border-2 border-blue-500 bg-white" style="left:0;top:8px;"></div>
                        <div class="absolute z-10 w-2.5 h-2.5 rounded-full border-2 border-blue-500 bg-white" style="right:0;top:8px;"></div>
                      </div>
                      <div class="flex items-center justify-center gap-0.5 mt-1">
                        <img src="~/assets/logos/Background.png" class="w-5 h-5 object-contain">
                        <img src="~/assets/logos/xluggage.png" class="w-5 h-5 object-contain">
                      </div>
                      <p class="text-[11px] mt-1 text-gray-500">To'g'ridan-to'g'ri</p>
                    </div>
                    <div class="shrink-0 text-right">
                      <p class="text-[15px] font-bold text-gray-900 leading-tight">Pxuket</p>
                      <p class="text-xs text-gray-500 mt-0.5">08:30 20-iyul, yak</p>
                      <p class="text-xs text-blue-500 font-medium">HKT</p>
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
                    <img src="~/assets/logos/Container.svg" alt="Airline" class="w-15 h-15 object-contain mb-1">
                    <span class="inline-block text-[10px] font-medium bg-gray-100 text-gray-500 px-2 py-0.5 rounded-sm mb-1">EKONOM</span>
                    <p class="text-[11px] text-gray-500 mt-0.5">SU285</p>
                  </div>
                  <div class="flex-1 flex items-center justify-center gap-3 max-w-md ml-0 md:ml-10">
                    <div class="shrink-0">
                      <p class="text-[15px] font-bold text-gray-900 leading-tight">Pxuket</p>
                      <p class="text-xs text-gray-500 mt-0.5">21:40 26 iyul, shan</p>
                      <p class="text-xs text-blue-500 font-medium">HKT</p>
                    </div>
                    <div class="flex-1 flex flex-col items-center min-w-0">
                      <p class="text-[11px] text-gray-400 mb-1">24s 25d parvozda</p>
                      <div class="relative w-full" style="height:28px;">
                        <div class="absolute left-0 right-0 bg-gray-300" style="top:13px;height:1px;"></div>
                        <div class="absolute z-10 w-2.5 h-2.5 rounded-full border-2 border-blue-500 bg-white" style="left:0;top:8px;"></div>
                        <div class="absolute z-10 w-2.5 h-2.5 rounded-full border-2 border-blue-500 bg-white" style="right:0;top:8px;"></div>
                      </div>
                      <div class="flex items-center justify-center gap-0.5 mt-1">
                        <img src="~/assets/logos/Background.png" class="w-5 h-5 object-contain">
                        <img src="~/assets/logos/Background (1).svg" class="w-5 h-5 object-contain">
                      </div>
                      <p class="text-[11px] mt-1 text-teal-500"
                        style="text-decoration:underline;text-decoration-style:dashed;text-underline-offset:2px">
                        1 pересадка
                      </p>
                    </div>
                    <div class="shrink-0 text-right">
                      <p class="text-[15px] font-bold text-gray-900 leading-tight">Toshkent</p>
                      <p class="text-xs text-gray-500 mt-0.5">18:05 27-iyul, yak</p>
                      <p class="text-xs text-blue-500 font-medium">SVQ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right panel -->
            <div class="flex w-full md:w-[210px] md:shrink-0 px-4 py-5 flex-col justify-between">
              <div class="border-t md:border-t-0 md:border-l border-dotted border-gray-300 pt-4 md:pt-0 pl-0 md:pl-4 mt-0 md:mt-12">
                <div class="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-0 md:space-y-3">
                  <div class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>
                    <p class="text-[11px] leading-snug text-gray-700">7 tunga, <span class="text-orange-500 font-medium">ulardan 6 tasi mehmonxonada</span></p>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" stroke-width="1.5"/>
                      <path stroke-linecap="round" stroke-width="1.5" d="M4.93 4.93l14.14 14.14"/>
                    </svg>
                    <p class="text-[11px] text-gray-700">100% to'lov</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <UIcon name="i-mdi-bus" class="w-4 h-4 text-green-500 shrink-0" />
                    <p class="text-[11px] text-gray-700">Jamoaviy transfer</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    <p class="text-[11px] text-gray-700">Tibbiy sug'urta kiritilgan</p>
                  </div>
                </div>
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-3 rounded-sm mt-4 md:mt-24">
                  227$ ga turni tanlash
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Passajirlar -->
    <div class="max-w-5xl mx-auto  mt-6">
      <div class="bg-white rounded-sm px-6 py-6" style="box-shadow: 0 1px 4px rgba(0,0,0,0.10);">
        <h2 class="text-base font-semibold text-gray-900 mb-1">Passajirlar</h2>
        <p class="text-sm text-gray-400 mb-5">Eslatma: ayrim kategoriyalar uchun alohida cheklovlar mavjud</p>
<div class="border-b border-gray-200 mb-5"></div>
        <!-- Kattalar -->
        <div class="flex items-center gap-3 mb-4">
          <p class="text-xl font-bold text-gray-900">Kattalar</p>
          <div class="flex items-center gap-2">
            <!-- 1-passajir -->
            <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <UIcon name="i-mdi-account" class="text-white w-5 h-5" />
            </div>
            <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <UIcon name="material-symbols:person-2" class="text-black w-5 h-5" />
            </div>
          </div>
        </div>
        

        <!-- Passenger forms -->
        <div v-for="p in passengerCount" :key="p" :class="p > 1 ? 'mt-6 pt-6 border-t border-gray-100' : ''">
          <p v-if="passengerCount > 1" class="text-sm font-semibold text-gray-600 mb-4">{{ p }}-passajir</p>

          <!-- Muddatsiz hujjat -->
          <label class="flex items-center gap-2 mb-1 cursor-pointer">
            <input type="checkbox" class="w-4 h-4 rounded border-gray-300 accent-blue-600" />
            <span class="text-sm text-gray-700">Muddatsiz hujjat</span>
          </label>
          <p class="text-xs text-gray-400 mb-4 ml-6">Iltimos, pasportdagi familiya va ismni to'g'ri yozing</p>

          <!-- Fuqarolik -->
          <div class="mb-4">
            <label class="block text-sm mb-1">Fuqarolik *</label>
            <input type="text"
              class="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400" />
          </div>

          <!-- Ism + Hujjat turi -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm mb-1">Ism (pasportda ko'rsatilganidek) *</label>
              <input type="text"
                class="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label class="block text-sm mb-1">Hujjat turi *</label>
              <input type="text"
                class="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400" />
            </div>
          </div>

          <!-- Familiya + Hujjat raqami -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm mb-1">Familiya (pasportda ko'rsatilganidek) *</label>
              <input type="text"
                class="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label class="block text-sm mb-1">Hujjat raqami *</label>
              <input type="text"
                class="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400" />
            </div>
          </div>

          <!-- Tug'ilgan sana + Amal qilish muddati -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm mb-1">Tug'ilgan sana *</label>
              <input type="date"
                class="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label class="block text-sm mb-1">Amal qilish muddati * </label>
              <input type="date"
                class="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Aloqa Ma'lumotlari -->
    <div class="max-w-5xl mx-auto mt-6">
      <div class="bg-white rounded-sm px-6 py-6" style="box-shadow: 0 1px 4px rgba(0,0,0,0.10);">
        <h2 class="text-base font-semibold text-gray-900 mb-5">Aloqa Ma'lumotlari</h2>

        <!-- Email + Telefon -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div>
            <label class="block text-sm  mb-1">Email *</label>
            <input type="email" placeholder="example@email.com"
              class="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-400" />
          </div>
          <div>
            <label class="block text-sm  mb-1">Telefon raqami *</label>
            <div class="flex items-stretch">
              <div class="flex items-center gap-1.5 border border-r-0 border-gray-200 rounded-l px-3 bg-gray-50 select-none shrink-0">
                <span class="text-base leading-none">🇺🇿</span>
                <span class="text-sm text-gray-600">+998</span>
                <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
              <input type="tel" placeholder="90 123 45 67"
                class="flex-1 border border-gray-200 rounded-r px-3 py-2.5 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-400" />
            </div>
          </div>
        </div>

        <!-- SMS checkbox -->
         <div class="flex items-center justify-between">
        <label class="gap-2 mb-3 cursor-pointer">
          <input type="checkbox" class="mt-0.5 w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
          <span class="text-sm text-gray-600">
            Men reys holati haqida SMS orqali xabar olishni istayman - <span class="font-semibold">360 so'm</span>
            <button class="text-blue-500 underline ml-1">Batafsil</button>
          </span>
        </label>
        <button
            class="shrink-0 w-10 h-6 rounded-full relative transition-colors"
            :class="smsToggle ? 'bg-blue-500' : 'bg-gray-200'"
            @click="smsToggle = !smsToggle">
            <span
              class="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200"
              :class="smsToggle ? 'left-5' : 'left-1'">
            </span>
          </button>
        </div>

        <!-- Offers checkbox + toggle -->
        <div class="flex items-start  gap-4">
          <label class="flex items-start gap-2 cursor-pointer flex-1">
            <input type="checkbox" class="mt-0.5 w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
            <span class="text-sm text-gray-600">Men aksiyalar va sayohat takliflari haqida pochta orqali olishga va shaxsiy ma'lumotlarini qayta ishlashga rozilik beraman.</span>
          </label>          
        </div>
      </div>
      <div class="flex items-center justify-between mt-6"> 
        <NuxtLink :to="`/tours/${$route.params.id}/booking`" class="border rounded border-gray-200 text-sm text-gray-600 px-4 py-2 hover:bg-gray-50 flex items-center gap-1">
          <UIcon name="material-symbols-light:keyboard-backspace" class="w-4 h-4 inline-block" />
          Parvoz tanloviga qaytish
        </NuxtLink>
        <NuxtLink :to="`/tours/${$route.params.id}/payment`" class="ml-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded">
          To'lovga o'tish
        </NuxtLink>
      </div>
    </div>



  </div>
</template>

<script setup>
const activeImage = ref(0)
const smsToggle = ref(false)
const passengerCount = ref(1)

const images = [
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80&fit=crop',
]

useSeoMeta({ title: 'Bron qilish - Ma\'lumotlar | Triponik' })
</script>

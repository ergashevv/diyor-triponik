<template>
  <div class="bg-gray-100 min-h-screen pb-10">

    <!-- Top banner -->
    <div class="flex items-center justify-center bg-white px-4 py-3 text-sm text-gray-500 mb-4">
      <span class="font-semibold text-gray-800 mr-1">08:11</span> dan keyin ekskursiya narxi o'zgarishi mumkin
    </div>

    <!-- Hotel card -->
    <div class="max-w-5xl mx-auto ">
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
      <div class="flex flex-wrap items-center gap-2 mb-3 px-4">
        <button class="flex items-center gap-1.5 border border-gray-300 rounded px-3 py-1.5 text-sm text-blue-600 bg-white hover:bg-gray-50">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18M6 8h12M10 12h4"/>
          </svg>
          Filterlar
        </button>
        <button class="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 bg-white hover:bg-gray-50">To'gridan-to'g'ri</button>
        <button class="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 bg-white hover:bg-gray-50">Transfer xizmati kiritilgan</button>
        <button class="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 bg-white hover:bg-gray-50">Bagaj</button>
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

    <!-- To'lov bo'limi -->
    <div class="max-w-5xl mx-auto mt-6">
      <h2 class="text-base font-semibold text-gray-900 mb-3">To'lov usulini tanlang</h2>
      <div class="flex flex-col md:flex-row gap-5 items-start">

        <!-- Chap: To'lov forma -->
        <div class="flex-1 min-w-0 space-y-3">

          <!-- Kredit/Debit karta -->
          <div class="rounded-sm px-5 py-4" style="box-shadow: 0 1px 4px rgba(0,0,0,0.10);">
            <label class="flex items-center justify-between cursor-pointer mb-4">
              <div class="flex items-center gap-2">
                <input type="radio" name="payMethod" checked class="accent-blue-600 w-4 h-4" />
                <span class="text-sm font-semibold text-gray-800">Kredit/Debit karta</span>
              </div>
              <div class="flex items-center gap-2">
                <img src="~/assets/images/mastercard.png" alt="Mastercard" class="h-5 object-contain" />
                <img src="~/assets/images/visa.png" alt="Visa" class="h-5 object-contain" />
              </div>
            </label>

            <div class="space-y-3">
              <input type="text" placeholder="Karta raqami"
                class="w-full border border-gray-200 bg-white rounded px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400" />
              <input type="text" placeholder="Karta egasi"
                class="w-full border border-gray-200 bg-white rounded px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400" />
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" placeholder="Amal qilish muddati"
                  class="w-full border border-gray-200 bg-white rounded px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400" />
                <input type="text" placeholder="CVV/CVC"
                  class="w-full border border-gray-200 bg-white rounded px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400" />
              </div>
            </div>
          </div>

          <!-- Boshqa to'lov usullari -->
          <div class="rounded-sm px-5 py-4" style="box-shadow: 0 1px 4px rgba(0,0,0,0.10);">
            <label class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 cursor-pointer">
              <div class="flex items-center gap-2">
                <input type="radio" name="payMethod" class="accent-blue-600 w-4 h-4 shrink-0" />
                <div>
                  <p class="text-sm font-semibold text-gray-800">Boshqa to'lov usullari</p>
                  <p class="text-xs text-gray-400">Boshqa to'lov usulini tanlang</p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2 pl-6 sm:pl-0">
                <img src="~/assets/images/uzcard.png" alt="Uzcard" class="h-5 object-contain" />
                <img src="~/assets/images/humo.png" alt="Humo" class="h-5 object-contain" />
                <img src="~/assets/images/payme.png" alt="Payme" class="h-5 object-contain" />
                <img src="~/assets/images/click.png" alt="Click" class="h-5 object-contain" />
                <img src="~/assets/images/stripe.png" alt="Stripe" class="h-5 object-contain" />
              </div>
            </label>
          </div>

          <!-- Disclaimer -->
          <p class="text-xs text-gray-500 leading-relaxed px-1">
            Ushbu bronni yuborish orqali men Triponik.com
            <button class="text-blue-500 underline">Foydalanish shartlari</button>
            va
            <button class="text-blue-500 underline">Maxfiylik siyosati</button>ni
            o'qib chiqqanimni va ularga roziligimni tasdiqlayman.
          </p>
        </div>

        <!-- O'ng: Xulosa panel -->
        <div class="w-full md:w-[300px] md:shrink-0 space-y-3">

          <!-- Sertifikat + Promokod -->
          <div class="bg-white rounded-xl p-3 space-y-2" style="box-shadow: 0 1px 4px rgba(0,0,0,0.10);">
            <button class="w-full flex items-center justify-between px-4 py-3.5 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              <span class="text-sm text-gray-700">Sertifikat qo'shish</span>
              <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14M5 12h14"/>
              </svg>
            </button>
            <button class="w-full flex items-center justify-between px-4 py-3.5 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              @click="promoOpen = !promoOpen">
              <span class="text-sm text-gray-700">Promokod qo'shish</span>
              <svg class="w-4 h-4 text-blue-500 transition-transform duration-200" :class="promoOpen ? 'rotate-45' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14M5 12h14"/>
              </svg>
            </button>
            <div v-if="promoOpen" class="flex gap-2 px-1">
              <input type="text" v-model="promoCode" placeholder="Promokodni kiriting"
                class="flex-1 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400" />
              <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 rounded-lg transition-colors">
                Qo'llash
              </button>
            </div>
          </div>

          <!-- Jami -->
          <div class="bg-white rounded-sm px-5 py-4" style="box-shadow: 0 1px 4px rgba(0,0,0,0.10);">
            <div class="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
              <span class="text-sm text-gray-500">Chiptalar (Odatiy):</span>
              <span class="text-sm text-gray-800">0 so'm</span>
            </div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-semibold text-gray-900">Jami:</span>
              <span class="text-lg font-bold text-gray-900">227$</span>
            </div>

            <label class="flex items-start gap-2 mb-2 cursor-pointer">
              <input type="checkbox" class="mt-0.5 w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
              <span class="text-xs text-gray-500 leading-snug">Sotish shartlari, saqlash va 63 FZ ko'rsatmalarni qabul qilaman</span>
            </label>
            <label class="flex items-start gap-2 mb-4 cursor-pointer">
              <input type="checkbox" class="mt-0.5 w-4 h-4 rounded border-gray-300 accent-blue-600 shrink-0" />
              <span class="text-xs text-gray-500 leading-snug">Shaxsiy ma'lumotlarni qayta ishlash</span>
            </label>

            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-sm transition-colors">
              To'lash
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Bottom nav -->
    <!-- <div class="max-w-5xl mx-auto px-4 py-4 mt-2 flex flex-col sm:flex-row items-center gap-3">
      <button class="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-300 text-sm px-10 py-3 rounded-md text-gray-600 hover:text-gray-900 transition-colors"
        @click="navigateTo(`/tours/${$route.params.id}/checkout`)">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        Orqaga qaytish
      </button> 
    </div> -->

  </div>
</template>

<script setup>
const activeImage = ref(0)
const promoOpen = ref(false)
const promoCode = ref('')

const images = [
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80&fit=crop',
]

useSeoMeta({ title: 'To\'lov | Triponik' })
</script>

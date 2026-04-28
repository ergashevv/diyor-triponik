<template>
  <div class="min-h-screen bg-[#f4f6fb]">
    <section class="bg-[#001549] pb-8 md:pb-10">
      <div class="mx-auto max-w-[1180px] px-4 pt-4 md:pt-6">
        <div class="hidden md:flex justify-center">
          <div class="rounded-t-md bg-white px-6 py-2 text-sm shadow-sm">
            Parvoz shahri
            <span class="ml-1 font-semibold text-[#2563EB] underline underline-offset-2">{{ searchHero.departureCity }}</span>
          </div>
        </div>

        <div class="overflow-hidden rounded-xl shadow-2xl shadow-black/20">
          <div class="grid bg-white md:grid-cols-[1.4fr_1fr_1fr_1fr_auto]">
            <button class="border-b border-gray-200 px-4 py-3 text-left md:border-b-0 md:border-r">
              <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">Davlat, kurort yoki mehmonxona</p>
              <p class="text-sm font-semibold text-gray-900">{{ searchHero.destination }}</p>
            </button>
            <button class="border-b border-gray-200 px-4 py-3 text-left md:border-b-0 md:border-r">
              <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">Parvoz sanasi</p>
              <p class="text-sm font-semibold text-gray-900">c {{ searchHero.departureDate }}</p>
            </button>
            <button class="border-b border-gray-200 px-4 py-3 text-left md:border-b-0 md:border-r">
              <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">Tunlar soni</p>
              <p class="text-sm font-semibold text-gray-900">{{ searchHero.nights }} tunga</p>
            </button>
            <button class="border-b border-gray-200 px-4 py-3 text-left md:border-b-0 md:border-r">
              <p class="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">Turistlar soni</p>
              <p class="text-sm font-semibold text-gray-900">{{ searchHero.adults }} yoshi katta</p>
            </button>
            <button class="flex items-center justify-center gap-2 bg-[#2563EB] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]">
              <UIcon name="i-mdi-magnify" class="h-4 w-4" />
              Turlarni topish
            </button>
          </div>
        </div>
      </div>
    </section>

    <main class="mx-auto max-w-[1180px] px-4 py-6 md:py-8">
      <div class="mb-6 grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
          <p class="text-sm font-semibold text-gray-900">Toshkent, O'zbekiston</p>
          <p class="mt-2 text-sm text-gray-500">10 May 2025 — 12 May 2025</p>
          <p class="mt-1 text-sm text-gray-500">1 xona, 2 mehmon</p>

          <label class="mt-5 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Mehmonxona qidirish..."
              class="w-full border-0 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <UIcon name="i-mdi-magnify" class="h-4 w-4 text-[#2563EB]" />
          </label>
        </div>

        <div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
          <h2 class="text-center text-lg font-semibold text-gray-900">Arzon narxlar kalendari</h2>
          <p class="mt-1 text-center text-xs text-gray-400">
            Barcha narxlar 2 kattalar uchun 7 kechaga asoslangan
          </p>

          <div class="mt-6 flex h-24 items-end gap-2 border-b border-dashed border-gray-200 pb-4">
            <div
              v-for="bar in calendarBars"
              :key="bar.label"
              class="flex-1 rounded-t-md"
              :class="bar.active ? 'bg-[#a8a8a8]' : 'bg-gray-200'"
              :style="{ height: `${bar.height}px` }"
            />
          </div>

          <div class="mt-3 grid grid-cols-10 gap-1 text-center text-[10px] text-gray-400">
            <span v-for="bar in calendarBars" :key="`${bar.label}-label`">{{ bar.label }}</span>
          </div>
        </div>
      </div>

      <div class="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside class="space-y-3">
          <div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <UIcon name="i-mdi-heart" class="h-4 w-4 text-[#ef4444]" />
                <span class="font-medium text-gray-900">Saqlanganlar</span>
              </div>
              <div class="h-6 w-10 rounded-full bg-gray-200 p-1">
                <div class="h-4 w-4 rounded-full bg-white shadow"></div>
              </div>
            </div>
          </div>

          <div
            v-for="block in sidebarBlocks"
            :key="block.title"
            class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100"
          >
            <p class="mb-4 text-sm font-semibold text-gray-900">{{ block.title }}</p>

            <div v-if="block.title === 'Saralash'">
              <button class="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-left text-sm text-gray-700">
                <span>{{ block.items[0] }}</span>
                <UIcon name="i-mdi-chevron-down" class="h-4 w-4 text-gray-500" />
              </button>
            </div>

            <div v-else-if="block.title === 'Bir kecha uchun narx (UZS)'" class="space-y-3">
              <div class="flex gap-2">
                <div class="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700">{{ block.items[0] }}</div>
                <div class="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700">{{ block.items[1] }}</div>
              </div>
              <div class="relative h-6">
                <div class="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gray-200"></div>
                <div class="absolute left-[12%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#2563EB] bg-white"></div>
                <div class="absolute left-[68%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#2563EB] bg-white"></div>
              </div>
            </div>

            <div v-else-if="block.title === 'Yulduzlar'" class="space-y-2">
              <label v-for="star in block.items" :key="star" class="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" class="h-4 w-4 rounded border-gray-300 accent-[#2563EB]" />
                <span class="text-[#f5b301]">{{ star }}</span>
              </label>
            </div>

            <div v-else class="space-y-2">
              <label
                v-for="item in block.items"
                :key="item"
                class="flex items-start gap-2 text-sm text-gray-700"
              >
                <input type="checkbox" class="mt-1 h-4 w-4 rounded border-gray-300 accent-[#2563EB]" />
                <span>{{ item }}</span>
                <span v-if="showCountBadge(block.title)" class="ml-auto text-xs text-gray-400">44</span>
              </label>
              <button v-if="showMoreLink(block.title)" class="pt-1 text-xs text-[#2563EB]">
                Ko'proq ko'rsatish
              </button>
            </div>
          </div>
        </aside>

        <section class="space-y-4">
          <div class="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
            <h1 class="text-lg font-bold text-gray-900">{{ searchSummary.title }}</h1>
            <div class="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <span>{{ searchSummary.subtitle }}</span>
              <span class="rounded-full bg-[#eff6ff] px-3 py-1 font-medium text-[#2563EB]">{{ searchSummary.activeFilter }}</span>
            </div>
          </div>

          <article
            v-for="(tour, index) in searchResults"
            :key="tour.id"
            class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100"
          >
            <div class="grid gap-0 md:grid-cols-[200px_minmax(0,1fr)_240px]">
              <div class="relative h-48 md:h-full md:min-h-[190px]">
                <img :src="tour.image" :alt="tour.title" class="h-full w-full object-cover" />
                <button class="absolute left-3 top-3 rounded-full bg-white/10 p-1 text-white backdrop-blur-sm">
                  <UIcon name="i-mdi-heart-outline" class="h-4 w-4" />
                </button>
                <div class="absolute left-0 bottom-0 right-0 p-3 md:hidden">
                  <div class="inline-flex rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {{ tour.labels[0] }}
                  </div>
                </div>
                <div class="absolute left-3 bottom-3 hidden rounded-full bg-black/60 px-3 py-1 text-xs text-white md:block">
                  {{ tour.labels[1] }}
                </div>
                <div class="absolute left-3 bottom-12 hidden rounded-full bg-black/60 px-3 py-1 text-xs text-white md:block">
                  {{ tour.labels[0] }}
                </div>
              </div>

              <div class="px-4 py-4 md:px-5">
                <div class="flex flex-wrap items-start gap-2">
                  <div :class="tour.scoreColor" class="rounded-sm px-2 py-1 text-sm font-bold text-white">{{ tour.score }}</div>
                  <span v-if="tour.discount" class="rounded-full bg-[#2d63ff] px-3 py-1 text-xs font-semibold text-white">{{ tour.discount }}</span>
                </div>

                <div class="mt-2 flex items-center gap-0.5 text-[#f5b301]">
                  <UIcon v-for="n in 5" :key="n" name="i-mdi-star" class="h-4 w-4" />
                </div>

                <h2 class="mt-2 text-xl font-semibold text-gray-900">{{ tour.title }}</h2>
                <div class="mt-1 flex items-center gap-1 text-sm text-gray-500">
                  <UIcon name="i-mdi-map-marker-outline" class="h-4 w-4" />
                  <span>{{ tour.location }}</span>
                </div>
                <p class="mt-1 text-sm text-gray-500">{{ tour.badge }}</p>

                <div class="mt-5 grid grid-cols-2 gap-3 text-sm text-gray-500 sm:max-w-md">
                  <div v-for="feature in tour.features" :key="feature" class="flex items-center gap-2">
                    <UIcon name="i-mdi-snowflake" class="h-4 w-4 text-gray-400" />
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-100 px-4 py-4 md:border-l md:border-t-0 md:px-5">
                <p class="text-sm leading-tight text-[#ff5b2e]">{{ tour.rightTitle }}</p>
                <div class="mt-10 text-right md:mt-12">
                  <p class="text-2xl font-bold text-gray-900">{{ tour.price }}$ <span class="text-lg font-semibold text-gray-700">{{ tour.priceSuffix }}</span></p>
                  <p class="text-xs text-gray-500">{{ tour.updatedAt }}</p>
                  <p class="mt-1 text-xs text-gray-500">{{ tour.dateText }}</p>
                </div>
                <button
                  class="mt-6 w-full rounded-lg bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1d4ed8]"
                  @click="navigateTo(`/tours/${tour.id}`)"
                >
                  {{ tour.cta }}
                </button>
              </div>
            </div>

            <div v-if="index === 2" class="border-t border-gray-100 bg-white px-4 py-5">
              <div class="rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-sm md:px-6">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-gray-900">{{ resultInclusion.title }}</h3>
                  <button class="text-gray-400">
                    <UIcon name="i-mdi-close" class="h-5 w-5" />
                  </button>
                </div>
                <div class="mt-6 grid grid-cols-2 gap-4 text-center md:grid-cols-5">
                  <div
                    v-for="item in resultInclusion.items"
                    :key="item.label"
                    class="flex flex-col items-center gap-2"
                  >
                    <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB] text-white">
                      <UIcon :name="item.icon" class="h-5 w-5" />
                    </div>
                    <p class="whitespace-pre-line text-xs text-gray-600">{{ item.label }}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div class="flex justify-center gap-2 pt-4">
            <button class="rounded border border-[#2563EB] px-4 py-2 text-sm text-[#2563EB]">Avvalgi</button>
            <button class="rounded bg-[#2563EB] px-4 py-2 text-sm font-semibold text-white">Keyingi</button>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
const {
  resultInclusion,
  searchHero,
  searchResults,
  searchSummary,
  sidebarBlocks,
} = useTourFigmaData()

const calendarBars = [
  { label: '18,ju', height: 24 },
  { label: '19,shan', height: 32, active: true },
  { label: '20,yak', height: 28, active: true },
  { label: '21,du', height: 20 },
  { label: '22,se', height: 18 },
  { label: '23,chor', height: 16 },
  { label: '24,pay', height: 14 },
  { label: '25,ju', height: 18 },
  { label: '26,shan', height: 26 },
  { label: '27,yak', height: 22 },
]

const showCountBadge = (title) => !['Plyaj turi', "Suvli mashg'ulotlar"].includes(title)
const showMoreLink = (title) => title === "Suvli mashg'ulotlar"

useSeoMeta({
  title: 'Turlar qidiruvi - Triponik',
  description: 'Figma asosida tur natijalari sahifasi.',
})
</script>

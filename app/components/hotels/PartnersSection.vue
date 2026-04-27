<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="container mx-auto px-8">
      <!-- First Row - 7 logos (Larger) -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 items-center mb-6 md:mb-8">
        <div
          v-for="partner in partnersRow1"
          :key="partner.id"
          class="flex items-center justify-center"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="max-h-10 md:max-h-14 w-auto object-contain"
          />
        </div>
      </div>

      <!-- Second Row - 12 logos (Smaller) -->
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 md:gap-4 items-center">
        <div
          v-for="partner in partnersRow2"
          :key="partner.id"
          class="flex items-center justify-center"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="max-h-6 md:max-h-8 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import hiltonLogo from '~/assets/logos/hilton.svg fill.png'
import radissonLogo from '~/assets/logos/Margin.png'
import marriottLogo from '~/assets/logos/Image.png'
import intercontinentalLogo from '~/assets/logos/intercontinental.svg fill.png'
import fourseasonsLogo from '~/assets/logos/fourseasons.svg fill.png'
import kempinskiLogo from '~/assets/logos/Image (1).png'
import cosmosLogo from '~/assets/logos/cosmos.svg fill.png'
import mercureLogo from '~/assets/logos/mercure.png'
import novotelLogo from '~/assets/logos/novotel.svg fill.png'
import pullmanLogo from '~/assets/logos/pullman.png'
import ibisLogo from '~/assets/logos/ibis.png'
import wyndhamLogo from '~/assets/logos/widnah.png'
import jumeirahLogo from '~/assets/logos/jumeriah.png'
import lotteLogo from '~/assets/logos/lotte.png'
import bestwesternLogo from '~/assets/logos/bestwestern.svg.png'
import holidayLogo from '~/assets/logos/holiday.png'
import hyattLogo from '~/assets/logos/hyatt.svg fill.png'
import belmondLogo from '~/assets/logos/Image (9).png'
import ramadaLogo from '~/assets/logos/ramada.svg fill.png'

const partnersRow1 = [
  {
    id: 1,
    name: 'Hilton',
    logo: hiltonLogo
  },
  {
    id: 2,
    name: 'Radisson',
    logo: radissonLogo
  },
  {
    id: 3,
    name: 'Marriott',
    logo: marriottLogo
  },
  {
    id: 4,
    name: 'InterContinental',
    logo: intercontinentalLogo
  },
  {
    id: 5,
    name: 'Four Seasons',
    logo: fourseasonsLogo
  },
  {
    id: 6,
    name: 'Kempinski',
    logo: kempinskiLogo
  },
  {
    id: 7,
    name: 'Cosmos',
    logo: cosmosLogo
  }
]

const partnersRow2 = [
  {
    id: 8,
    name: 'Mercure',
    logo: mercureLogo
  },
  {
    id: 9,
    name: 'Novotel',
    logo: novotelLogo
  },
  {
    id: 10,
    name: 'Pullman',
    logo: pullmanLogo
  },
  {
    id: 11,
    name: 'Ibis',
    logo: ibisLogo
  },
  {
    id: 12,
    name: 'Wyndham',
    logo: wyndhamLogo
  },
  {
    id: 13,
    name: 'Jumeirah',
    logo: jumeirahLogo
  },
  {
    id: 14,
    name: 'Lotte',
    logo: lotteLogo
  },
  {
    id: 15,
    name: 'Best Western',
    logo: bestwesternLogo
  },
  {
    id: 16,
    name: 'Holiday Inn',
    logo: holidayLogo
  },
  {
    id: 17,
    name: 'Hyatt',
    logo: hyattLogo
  },
  {
    id: 18,
    name: 'Belmond',
    logo: belmondLogo
  },
  {
    id: 19,
    name: 'Ramada',
    logo: ramadaLogo
  }
]
</script>

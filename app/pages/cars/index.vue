<template>
  <div class="bg-white">
    <CarsHeroSection />
    <CarsStepsSection />
    <CarsPartnersSection />
    <CarsCategoriesSection />
    <DownloadAppSection />
  </div>
</template>

<script setup>
import DownloadAppSection from '~/components/hotels/DownloadAppSection.vue'

useSeoMeta({
  title: 'Avtomobil ijarasi - Triponik',
  description: 'Haydovchisiz yoki haydovchi bilan birga istalgan muddatga ekonom, biznes yoki premium-klass avtomobillarni ijaraga oling.',
  ogTitle: 'Avtomobil ijarasi - Triponik',
  ogDescription: 'Haydovchisiz yoki haydovchi bilan birga istalgan muddatga avtomobil ijaraga oling.',
})
</script>

<style scoped>
</style>

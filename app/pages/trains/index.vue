<template>
  <div class="bg-white">
    <TrainsHeroSectionV2 />
    <TrainsFeaturesSection />
    <TrainsWorldSection />
    <DownloadAppSection />
  </div>
</template>

<script setup>
import DownloadAppSection from '~/components/hotels/DownloadAppSection.vue';

useSeoMeta({
  title: 'Poyezdlar - Triponik',
  description: 'Dunyo bo\'ylab poyezd biletlarini onlayn bron qiling. Eng sara narxlar, qulay joylar, xavfsiz to\'lov.',
  ogTitle: 'Poyezdlar - Triponik',
  ogDescription: 'Dunyo bo\'ylab poyezd biletlarini onlayn bron qiling.',
})
</script>

<style scoped>
</style>

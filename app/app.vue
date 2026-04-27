<template>
  <UApp :toaster="{position: 'top-right'}">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

  <script setup>
useHead({
  htmlAttrs: {
    class: 'light'
  }
})
</script>
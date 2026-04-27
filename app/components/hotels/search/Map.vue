<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <!-- Map Header -->
    <div class="p-3 border-b border-gray-200 flex items-center justify-between">
      <h3 class="font-semibold text-gray-900">Xaritada ko'rish</h3>
      <button
        @click="toggleExpand"
        class="items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors hidden lg:flex"
      >
        <svg v-if="!isExpanded" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        {{ isExpanded ? 'Yopish' : 'Kengaytirish' }}
      </button>
    </div>

    <!-- Yandex Map -->
    <div id="yandex-map" class="h-[600px] w-full"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  hotels: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['hotelSelected', 'expandToggled'])
const route = useRoute()

let map = null
let clusterer = null

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
  emit('expandToggled', isExpanded.value)

  // Resize map after layout change
  setTimeout(() => {
    if (map) {
      map.container.fitToViewport()
    }
  }, 300)
}

onMounted(() => {
  // Load Yandex Maps API
  const script = document.createElement('script')
  script.src = 'https://api-maps.yandex.ru/2.1/?apikey=e772db7d-5a82-4e11-9b30-2d89cd901619&lang=ru_RU'
  script.onload = initMap
  document.head.appendChild(script)
})

function initMap() {
  if (typeof window.ymaps === 'undefined') return

  window.ymaps.ready(() => {
    // Initialize map centered on Tashkent
    map = new window.ymaps.Map('yandex-map', {
      center: [41.3111, 69.2797],
      zoom: 12,
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
    })

    // Create clusterer for grouping nearby markers
    clusterer = new window.ymaps.Clusterer({
      preset: 'islands#blueClusterIcons',
      clusterDisableClickZoom: false,
      clusterOpenBalloonOnClick: true
    })

    // Add markers for each hotel
    const placemarks = props.hotels.map(hotel => {
      // Get rateKey and prepare URL with query params
      const rateKey = hotel.rooms?.[0]?.rates?.[0]?.rateKey || ''
      const hotelUrl = `/hotels/${hotel.code || hotel.id}?rateKey=${rateKey}&checkIn=${route.query.checkIn || ''}&checkOut=${route.query.checkOut || ''}&adults=${route.query.guests || '2'}&children=0&rooms=1`

      const placemark = new window.ymaps.Placemark(
        hotel.coordinates,
        {
          balloonContentHeader: `<div style="font-weight: bold; font-size: 16px;">${hotel.name}</div>`,
          balloonContentBody: `
            <div style="padding: 8px 0;">
              <div style="color: #666; font-size: 13px; margin-bottom: 10px;">${hotel.location}</div>
              <div style="font-weight: bold; font-size: 20px; color: #2563eb; margin-bottom: 10px;">${hotel.price?.toFixed(2) || 0} ${hotel.currency || 'EUR'}</div>
              <a href="${hotelUrl}" style="display: inline-block; background: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 14px;">Ko'rish</a>
            </div>
          `,
          hintContent: hotel.name
        },
        {
          preset: 'islands#blueIcon',
          iconColor: '#2563eb'
        }
      )

      // Add click event to highlight hotel card
      placemark.events.add('click', () => {
        // Emit event to parent to scroll to hotel card
        emit('hotelSelected', hotel.id)
      })

      return placemark
    })

    // Add all placemarks to clusterer
    clusterer.add(placemarks)
    map.geoObjects.add(clusterer)

    // Auto-adjust map bounds to show all markers
    map.setBounds(clusterer.getBounds(), {
      checkZoomRange: true,
      zoomMargin: 50
    })
  })
}

onUnmounted(() => {
  if (map) {
    map.destroy()
    map = null
  }
})
</script>

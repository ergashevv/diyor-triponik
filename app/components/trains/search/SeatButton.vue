<template>
  <button
    :class="[
      'aspect-square rounded font-medium transition-all relative flex items-center justify-center',
      size === 'sm' ? 'w-10 h-10 text-xs' : 'w-full min-w-[48px] text-sm',
      state === 'selected' && 'bg-blue-600 text-white shadow-lg shadow-blue-200',
      state === 'available' && 'bg-white border border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50',
      state === 'reserved' && 'bg-gray-400 text-white cursor-not-allowed',
      state === 'privileged' && 'bg-white border-2 border-dashed border-orange-400 text-gray-700'
    ]"
    :disabled="state === 'reserved'"
    @click="$emit('click')"
  >
    {{ number }}
  </button>
</template>

<script setup>
defineProps({
  number: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    default: 'available'
  },
  size: {
    type: String,
    default: 'md'
  }
})

defineEmits(['click'])
</script>

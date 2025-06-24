<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value?: number;
  max?: number;
  class?: string;
}>();

const progress = computed(() => {
  return Math.min(100, Math.max(0, (props.value || 0) / (props.max || 100) * 100));
});
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-full bg-secondary"
    :class="class"
    role="progressbar"
    :aria-valuemin="0"
    :aria-valuemax="max || 100"
    :aria-valuenow="value"
  >
    <div
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

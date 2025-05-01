<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ state: string }>()

const count = ref(0)
</script>

<template>
  <button @click="count++">{{ state }}</button>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

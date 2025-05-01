<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ state: string }>()

const count = ref(0)
</script>

<template>Welcome Screen Component</template>
<style scoped>

</style>

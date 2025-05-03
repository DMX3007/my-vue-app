<script setup lang="ts">

import MainMeasureImage from '../assets/measure_main.png'

defineProps<{ state: string }>()

</script>

<template>
    <img class="main-measure" :src="MainMeasureImage" alt="">
</template>

<style scoped>
.main-measure {
    position: absolute;
    display: block;
    max-height: 324px;
    top: 92px;
    left: 58px;
    margin-inline: auto;
}
</style>

<script setup lang="ts">

import { ref } from 'vue'
import { useAnimationFrame } from 'motion-v'
import HammerImage from '../assets/hammer.png'
import ButtonImage from '../assets/button.png'

const CONTAINER_HEIGHT = 147

// const domRef = ref(null)
// const current = ref(0)
// let target = Math.random() * CONTAINER_HEIGHT

// useAnimationFrame((_, delta) => {
//     if (!domRef.value) return

//     current.value += (target - current.value) * 0.04

//     domRef.value.style.height = `${current.value}px`

//     if (Math.abs(current.value - target) < 1) {
//         target = Math.random() * CONTAINER_HEIGHT
//     }
// })

</script>

<template>
    <div class="button-container">
        <img class="button" :src="ButtonImage" />
        <img class="hammer" :src="HammerImage" />
    </div>
</template>

<style scoped>
.button-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.button {
    display: block;
    width: 124px;
    position: absolute;
    right: 119px;
    top: -218px;
    z-index: 1;
}

.hammer {
    display: block;
    position: absolute;
    z-index: 1;
    width:120.13px;
    transform: rotate(-43deg) scale(1.0051);
    top: -252px;
    right: 48px;
}
</style>

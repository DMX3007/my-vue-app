<script setup lang="ts">

import {ref} from 'vue'
import { useAnimationFrame } from 'motion-v'

import ScaleBackground from '../assets/scale.png'
import Scale from '../assets/scale-1.png'

const CONTAINER_HEIGHT = 147

const domRef = ref(null) 
    const current = ref(0)
    let target = Math.random() * CONTAINER_HEIGHT

    useAnimationFrame((_, delta) => {
    if (!domRef.value) return

    current.value += (target - current.value) * 0.04
    
    domRef.value.style.height = `${current.value}px`

    if (Math.abs(current.value - target) < 1) {
        target = Math.random() * CONTAINER_HEIGHT
        }
    })

</script>

<template>
    <div class="scale-container" >
        <img class="scale-bg" :src="ScaleBackground"/>
        <img class="scale" :src="Scale"/>
        <div class="filler" ref="domRef" ></div>
    </div>
</template>

<style scoped>

.scale-container {
  position: relative;
}
.scale-bg {
    position: absolute;
}
.scale {
    position: absolute;
}
.filler::before {
    content: "";
    width: 48px;
    height: 3px;
    background-color: #FFFFFF;
    position: absolute;
    left: 0;
    border-radius: 2px;
}
.filler {
    position: absolute;
    height: 0px;
    width: 34px;
    background-color: #00D355;
    bottom:0;
}
</style>

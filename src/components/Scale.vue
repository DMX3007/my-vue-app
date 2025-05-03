<script setup lang="ts">

import { ref } from 'vue'
import { useAnimationFrame } from 'motion-v'

import ScaleBackground from '../assets/scale.png'
import Scale from '../assets/scale-1.png'

import { type GameState } from '../types/d'
import { watch } from 'vue'

const props = defineProps<Omit<GameState, 'hitScore' | 'textHtml' >>()
const emit = defineEmits(['hit'])
let isHit = false;

watch(() => props.state, () => {
    if (props.state === 'hit') {
        isHit = true
    }
})

const CONTAINER_HEIGHT = 147

const domRef = ref<HTMLElement | null>(null)
const current = ref(0)
let target = Math.random() * CONTAINER_HEIGHT

useAnimationFrame(() => {
    if (!domRef.value) return
    if (isHit) {
        return emit('hit', current.value)
    }
    
    current.value += (target - current.value) * 0.04

    domRef.value.style.height = `${current.value}px`

    if (Math.abs(current.value - target) < 1) {
        target = Math.random() * CONTAINER_HEIGHT
    }
})

</script>

<template>
    <div class="scale-container">
        <img class="scale-bg" :src="ScaleBackground" />
        <img class="scale" :src="Scale" />
        <div class="filler" ref="domRef"></div>
    </div>
</template>

<style scoped>
.scale-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.scale-bg {
    display: block;
    width: 48px;
    position: absolute;
    bottom: 32px;
    left: 12px;
}

.scale {
    display: block;
    width: 48px;
    position: absolute;
    bottom: 32px;
    left: 12px;
    z-index: 1;
}

.filler::before {
    content: "";
    width: 48px;
    height: 3px;
    background-color: #FFFFFF;
    position: absolute;
    left: 0;
    border-radius: 2px;
    margin-left: -7px;
}

.filler {
    position: absolute;
    height: 0px;
    width: 34px;
    background-color: #00D355;
    bottom: 35px;
    z-index: 0;
    left: 19px;
    border-radius: 2px;
}
</style>

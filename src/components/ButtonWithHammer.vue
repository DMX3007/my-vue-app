<script setup lang="ts">

import HammerImage from '../assets/hammer.png'
import ButtonImage from '../assets/button.png'
import ButtonActive from '../assets/button_active.png'
import { type GameState } from '../types/d';
import { motion } from 'motion-v'
import { watch } from 'vue'

const props = defineProps<Omit<GameState, 'hitScore' | 'textHtml'>>()

const emit = defineEmits(['eve'])

const INITIAL_HAMMER_ROTATE = -43
const INITIAL_HAMMER_Y = 0

let rotateNew = 0
let yNew = -20
let xNew = 0

let opacityActiveButton = 0
let opacityInactiveButton = 1

watch(() => props.state, (newVal) => {
    if (newVal) {
        if (props.state === 'playing') {
            rotateNew = 10
                yNew = -40
            setTimeout(() => {
                rotateNew = -90
                xNew = -50
                yNew = -20
                opacityActiveButton = 1
                opacityInactiveButton = 0
            }, 100)
        }
        if (props.state === 'welcome' || props.state === 'again') {
            rotateNew = INITIAL_HAMMER_ROTATE
            opacityActiveButton = 0
            opacityInactiveButton = 1
            yNew = INITIAL_HAMMER_Y
            xNew = 0
        }
    }
})
</script>

<template>
    <div class="button-container">
        <motion.img class="button" :src="ButtonImage" :initial="{ opacity: opacityInactiveButton }"
            :animate="{ opacity: opacityInactiveButton }" :transition="{ duration: 0.1 }" />
        <motion.img class="button" :src="ButtonActive" :initial="{ opacity: 0 }"
            :animate="{ opacity: opacityActiveButton }" :transition="{ duration: 0.1 }" />
        <motion.img class="hammer" :src="HammerImage" :transition="{ duration: 1 }" :initial="{ rotate: INITIAL_HAMMER_ROTATE, y: INITIAL_HAMMER_Y }"
            :animate="{ rotate: rotateNew, y: yNew, x: xNew }" />
    </div>
</template>

<style scoped>
.button-container {
    position: relative;
}

.button {
    display: block;
    width: 124px;
    position: absolute;
    right: 119px;
    top: -218px;
    z-index: 1;
}

.invisible {
    opacity: 0
}

.hammer {
    display: block;
    position: absolute;
    z-index: 1;
    width: 120.13px;
    top: -252px;
    right: 48px;
}
</style>

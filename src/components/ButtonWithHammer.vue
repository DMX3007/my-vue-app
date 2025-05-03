<script setup lang="ts">

import HammerImage from '../assets/hammer.png'
import ButtonImage from '../assets/button.png'
import ButtonActive from '../assets/button_active.png'
import { type GameState } from '../types/d';
import { animate, motion } from 'motion-v'
import { watch } from 'vue'


const props = defineProps<Omit<GameState, 'hitScore' | 'textHtml'>>()

let rotate = -43
let y = 0

let rotateNew = 0
let yNew = -20
let xNew = 0

let opacityActiveButton = 0
let opacityInactiveButton = 1

function smackMyBitchUp() {
    
}

watch(() => props.state, (newVal, oldVal) => {
    if(newVal) {
        if (props.state === 'hit') {
            rotateNew = 10
            yNew = -40
            setTimeout(() => {
                rotateNew = -80
                xNew = -50
                yNew = -20
                opacityActiveButton = 1
                opacityInactiveButton = 0
            }, 1000)
        }
    }
})
</script>

<template>
    <div class="button-container">
        <motion.img class="button" :src="ButtonImage" :initial="{opacity: opacityInactiveButton}" :animate="{opacity: opacityInactiveButton}" :transition="{duration: 0.3}"/>
        <motion.img class="button" :src="ButtonActive" :initial="{opacity: 0}" :animate="{opacity: opacityActiveButton}" :transition="{duration: 1}"/>
        <motion.img class="hammer" :src="HammerImage" :transition="{ duration: 1 }" :initial="{ rotate: rotate, y: y }" :animate="{ rotate: rotateNew,  y: yNew, x: xNew }"/>
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
    /* transform: scale(1.0051); */
    top: -252px;
    right: 48px;
}
</style>

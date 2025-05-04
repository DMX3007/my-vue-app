<script setup lang="ts">
import { watch } from 'vue';
import robot from '../assets/robot_1.png'
import robot2 from '../assets/robot_2.png'
import robot3 from '../assets/robot_3.png'
import type { GameState, Phases } from '../types/d';
import { motion } from 'motion-v'

const props = defineProps<Omit<GameState, 'hitScore' | 'textHtml'>>()

let initFirstImageOpacity = 1
let targetFirstImageOpacity = 1

let initHitImageOpacity = 0
let targetHitImageOpacity = 0

let initWinImageOpacity = 0
let targetWinImageOpacity = 0

watch(()=> props.state, () => {
    if (props.state === 'hit') {
        targetFirstImageOpacity = 0
        targetHitImageOpacity = 1
    } else if (props.state === 'win') {
        targetHitImageOpacity = 0
        targetWinImageOpacity = 1
    }
})
</script>

<template>
    <div class="robot-image">
        <motion.img 
            :src="robot" 
            class="robot" 
            :initial="{opacity: initFirstImageOpacity}" 
            :animate="{opacity: targetFirstImageOpacity}"
            :transition="{duration: 0.1}"
             />
        <motion.img 
            :src="robot2" 
            class="robot" 
            :initial="{opacity: initHitImageOpacity}" 
            :animate="{opacity: targetHitImageOpacity}"
            :transition="{duration: 0.1}"
             />
        <motion.img 
            :src="robot3" 
            class="robot" 
            :initial="{opacity: initWinImageOpacity}" 
            :animate="{opacity: targetWinImageOpacity}"
            :transition="{duration: 0.1}"
             />
    </div>
</template>

<style scoped>

.robot-image {
    position: relative;
}

.robot {
    position: absolute;
    height: 86px;
    bottom: 32px;
    right: 2px;
}
</style>

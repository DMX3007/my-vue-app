<script setup lang="ts">
import { watch, ref } from 'vue';
import robot from '../assets/robot_1.png'
import robot2 from '../assets/robot_2.png'
import robot3 from '../assets/robot_3.png'
import type { GameState } from '../types/d';
import { motion } from 'motion-v'

const props = defineProps<Omit<GameState, 'hitScore' | 'textHtml'>>()

const initFirstImageOpacity = ref(1)
const targetFirstImageOpacity = ref(1)

const initHitImageOpacity = ref(0)
const targetHitImageOpacity = ref(0)

const initWinImageOpacity = ref(0)
const targetWinImageOpacity = ref(0)

watch(() => props.state, (state) => {
  if (state === 'hit') {
    targetFirstImageOpacity.value = 0
    targetHitImageOpacity.value = 1
  } else if (state === 'win') {
    targetFirstImageOpacity.value = 0
    targetHitImageOpacity.value = 0
    targetWinImageOpacity.value = 1
  } else {
    initFirstImageOpacity.value = 1
    targetFirstImageOpacity.value = 1
    targetHitImageOpacity.value = 0
    targetWinImageOpacity.value = 0
  }
})
</script>

<template>
    <div class="robot-image">
        <motion.img :src="robot" class="robot" :initial="{ opacity: initFirstImageOpacity }"
            :animate="{ opacity: targetFirstImageOpacity }" :transition="{ duration: 0.3 }" />
        <motion.img :src="robot2" class="robot" :initial="{ opacity: initHitImageOpacity }"
            :animate="{ opacity: targetHitImageOpacity }" :transition="{ duration: 0.3 }" />
        <motion.img :src="robot3" class="robot" :initial="{ opacity: initWinImageOpacity }"
            :animate="{ opacity: targetWinImageOpacity }" :transition="{ duration: 0.3 }" />
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

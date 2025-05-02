<script setup lang="ts">
import robot from '../assets/robot_1.png'
import robot2 from '../assets/robot_2.png'
import robot3 from '../assets/robot_3.png'
</script>

<template>
    <div class="robot-image">
        <img :src="robot" class="robot" />
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

<script setup lang="ts">
import robot from '../assets/robot_1.png'
import robot2 from '../assets/robot_2.png'
import robot3 from '../assets/robot_3.png'
</script>

<template>
    <div class="container roboto-font">
        <div class="text-block">
            <p class="text">Привет! <span class="sub-text">проверим твою силу!</span></p>
            <p class="win">Рубин</p>
        </div>
        <div class="button-container">
            <button class="button roboto-font">Новая Игра</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: absolute;
    bottom: 58px;
}

.text-block {
    display: flex;
    flex-direction: column;
    gap: 0px;
    line-height: 15px;
    font-size: 14px;
}

.text {
    text-align: center;
}

.sub-text {
    text-wrap-mode: nowrap;
}

.button-container {
    position: relative;
    width: 100%;
}

.button {
    position: absolute;
    background-color: #FF42E0;
    bottom: 6px;
    left: 2px;
    width:172px;
    height: 36px;
    z-index: 1;
    text-transform: uppercase;
    outline: 1px solid white;
    border-radius: 4px;
}

</style>

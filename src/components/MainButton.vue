<script setup lang="ts">
import { type GameState } from '../types/d'
import { watch } from 'vue'

const props = defineProps<Omit<GameState, 'hitScore'>>()

let isInvisible = false;

watch(() => [props.state, props.textHtml], () => {
    if (props.state === 'hit') {
        isInvisible = true
    }
    else {
        isInvisible = false
    }
})

</script>

<template>
    <div class="container roboto-font">
        <div class="text-block" :class="{'invisible': isInvisible}">
            <p class="text">{{ props.textHtml.text }}<span class="sub-text">{{ props.textHtml.subText }}</span></p>
        </div>
        <div class="button-container" :class="{'invisible': isInvisible}">
            <button @click="$emit('start-next-phase', props.state)" class="button roboto-font" :class="{ hit: props.state === 'playing'}">{{ props.textHtml.buttonText }}</button>
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
    margin-bottom: 40px;
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
.button-container:hover {
    cursor: pointer;
}

.button:hover {
    cursor: pointer;
}

.button {
    position: absolute;
    background-color: #FF42E0;
    bottom: 6px;
    left: 2px;
    width: 172px;
    height: 36px;
    z-index: 1;
    text-transform: uppercase;
    outline: 1px solid white;
    border-radius: 4px;
    transition: all ease 1s;
}

.invisible {
    opacity: 0;
}

.hit {
    outline: 1px solid #BB20A2;
    background-color: #FFDF35;
    color: #BB20A2;
}
</style>

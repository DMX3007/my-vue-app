<script setup lang="ts">
import { type GameState } from '../types/d'
import { watch, ref } from 'vue'

const props = defineProps<Omit<GameState, 'hitScore'>>()

let isInvisible = ref(false);

watch(() => [props.state, props.textHtml], (newVal) => {
    if(newVal) {
        if (props.state === 'hit') isInvisible.value = true
        setTimeout(() => {
            isInvisible.value = false
    }, 4000)
    }
})

</script>

<template>
    <div class="container roboto-font">
        <div class="text-block" :style="{ marginBottom: props.state === 'win' ? '47px' : '53px' }" :class="{'invisible': isInvisible}">
            <!-- <p class="text" >{{ props.textHtml.text }}<span class="sub-text">{{ props.textHtml.subText }}</span></p> -->
            <p class="text" >{{ props.state === 'win' ? 'ВОТ ЭТО СИЛА!' : props.textHtml.text  }}<span class="sub-text">{{ props.state === 'win' ? 'Ты выбил главный приз!' : props.textHtml.subText  }}</span></p>
            <p v-if="props.state === 'win'" class="ruby">Рубин</p>
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
    margin-bottom: 53px;
}

.text {
    text-align: center;
    margin: 0;
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

.ruby {
    color: #FF4646;
    text-align: center;
    margin: 0;
}
</style>

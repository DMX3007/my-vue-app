<script setup lang="ts">
import { ref, watch, defineProps } from 'vue'

const props = defineProps<{
    isAnimated: boolean,
    score: number | null,
    initialColors: Record<string, string>,
    targetColors: Record<string, string>,
}>()
const levelColors = ref({ ...props.initialColors })

const levelKeys = ['level1', 'level2', 'level3', 'level4', 'level5', 'level6', 'level7']

const scoreMap = [0, 21.5, 43, 64.5, 85.5, 107, 115.5, 130]

const checkTreshold = (treshold: number, currentScore: number | null): boolean | null => {
    if (!currentScore) return null
    return currentScore > treshold
}

const animateSequentially = (index = 0, stopValue = 7) => {
    if (index == stopValue) return
    const key = levelKeys[index]
    levelColors.value[key] = props.targetColors[key]

    setTimeout(() => {
        animateSequentially(index + 1, stopValue)
    }, 400)
}

watch(() => [props.isAnimated, props.score], (newVal) => {
    if (newVal) {
        let stopIndex = 0;
        for (let i = 7; i >= 0; i--) {
            let result = undefined
            result = checkTreshold(scoreMap[i], props.score) 
            if (result) {
                stopIndex = i
                break;
            }
        }
        console.log(newVal, 'changed newVal')
        animateSequentially(undefined, stopIndex)
    }
})

</script>


<template>
    <div class="main-measure-bar">
        <svg width="195" height="324" viewBox="0 0 195 324" fill="none" xmlns="http://www.w3.org/2000/svg">

            <rect x="60.5" y="23" width="73" height="47" rx="4" fill="#080B3A" />
            <rect x="60.5" y="23" width="73" height="47" rx="4" fill="url(#paint0_linear_3974_747)" />
            <defs>
                <linearGradient id="paint0_linear_3974_747" x1="37" y1="21" x2="37" y2="68"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#B676CB" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
            <rect class="level-7" x="59.5" y="76" width="76" height="26" rx="5" :fill="levelColors.level7"
                stroke="#080B3A" stroke-width="2" />
            <rect class="level-6" x="59.5" y="96" width="76" height="27" :fill="levelColors.level6" stroke="#080B3A"
                stroke-width="2" />
            <rect class="level-5" x="59.5" y="121" width="76" height="32" :fill="levelColors.level5" stroke="#080B3A"
                stroke-width="2" />
            <rect class="level-4" x="59.5" y="151" width="76" height="37" :fill="levelColors.level4" stroke="#080B3A"
                stroke-width="2" />
            <rect class="level-3" x="59.5" y="186" width="76" height="42" :fill="levelColors.level3" stroke="#080B3A"
                stroke-width="2" />
            <rect class="level-2" x="59.5" y="226" width="76" height="47" :fill="levelColors.level2" stroke="#080B3A"
                stroke-width="2" />
            <rect class="level-1" x="59.5" y="271" width="76" height="52" :fill="levelColors.level1" stroke="#080B3A"
                stroke-width="2" />
            <rect class="level-6-hor" x="61.5" y="99" width="71" height="3" fill="white" fill-opacity="0.3" />
            <rect class="level-7-hor" x="61.5" y="79" width="71" height="3" fill="white" fill-opacity="0.3" />
            <rect class="level-7-ver" x="129.5" y="99" width="3" height="19" fill="white" fill-opacity="0.3" />
            <rect class="level-6-ver" x="129.5" y="79" width="3" height="14" fill="white" fill-opacity="0.3" />
            <rect class="level-5-ver" x="129.5" y="124" width="3" height="24" fill="white" fill-opacity="0.3" />
            <rect class="level-4-ver" x="129.5" y="154" width="3" height="29" fill="white" fill-opacity="0.3" />
            <rect class="level-3-ver" x="129.5" y="189" width="3" height="34" fill="white" fill-opacity="0.3" />
            <rect class="level-2-ver" x="129.5" y="229" width="3" height="39" fill="white" fill-opacity="0.3" />
            <rect class="level-1-ver" x="129.5" y="274" width="3" height="46" fill="white" fill-opacity="0.3" />
            <rect class="level-5-hor" x="61.5" y="124" width="71" height="3" fill="white" fill-opacity="0.3" />
            <rect class="level-4-hor" x="61.5" y="154" width="71" height="3" fill="white" fill-opacity="0.3" />
            <rect class="level-3-hor" x="61.5" y="189" width="71" height="3" fill="white" fill-opacity="0.3" />
            <rect class="level-2-hor" x="61.5" y="229" width="71" height="3" fill="white" fill-opacity="0.3" />
            <rect class="level-1-hor" x="61.5" y="274" width="71" height="3" fill="white" fill-opacity="0.3" />
            <defs>
                <linearGradient id="paint0_linear_43_2706" x1="97" y1="23" x2="97" y2="70"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF9191" />
                    <stop offset="1" stop-color="#FF0303" />
                </linearGradient>
            </defs>
        </svg>
    </div>
</template>

<style scoped>
.main-measure-bar {
    position: absolute;
    display: block;
    max-height: 324px;
    top: 92px;
    left: 82px;
    margin-inline: auto;
}
</style>

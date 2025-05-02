<script setup lang="ts">
import GameStateManager from './components/GameStateManager.vue'
import BgImage from './assets/bg_top.png'
import WelcomeScreen from './components/WelcomeScreen.vue'
import Scale from './components/Scale.vue'
import MainMeasure from './components/MainMeasure.vue'
import ButtonWithHammer from './components/ButtonWithHammer.vue'

interface State {
  state: 'welcome' | 'playing' | 'result'
}

let game: State = {
  state: 'welcome'
}

</script>

<template>
  <div class="game_container">
      <!-- <img class="bg_image" :src="BgImage" /> -->
      <Scale />
      <ButtonWithHammer />
      <MainMeasure state="" />
      <!-- <GameStateManager :state="game.state"  /> -->
      <!-- <WelcomeScreen v-if="game.state === 'welcome'" :state="game.state"/> -->
  </div>
</template>

<style scoped>
.game_container {
  position: relative;
  max-width: 360px;
  max-height: 640px;
  margin-inline: auto;
  height: 640px;
  background-image: url('./assets/bg_top.png');
  background-repeat: repeat-y;
  background-size: 100% 750px;
  /* background-position: top center; */
  z-index: -1; 
}

</style>

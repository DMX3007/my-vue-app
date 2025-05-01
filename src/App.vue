<script setup lang="ts">
import GameStateManager from './components/GameStateManager.vue'
import BgImage from './assets/bg_top.png'
import WelcomeScreen from './components/WelcomeScreen.vue'
import Scale from './components/Scale.vue'

interface State {
  state: 'welcome' | 'playing' | 'result'
}

let game: State = {
  state: 'welcome'
}

</script>

<template>
  <div class="game_container">
    <img class="bg_image" :src="BgImage" />
  </div>
  <Scale />
  <GameStateManager :state="game.state"  />
  <WelcomeScreen v-if="game.state === 'welcome'" :state="game.state"/>
</template>

<style scoped>
.game_container {
  max-width: 360px;
  max-height: 640px;
  margin-inline: auto;
}
</style>

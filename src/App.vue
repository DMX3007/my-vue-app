<script setup lang="ts">
import GameStateManager from './components/GameStateManager.vue'
import BgImage from './assets/bg_top.png'
import WelcomeScreen from './components/WelcomeScreen.vue'
import Scale from './components/Scale.vue'
import MainMeasure from './components/MainMeasure.vue'
import ButtonWithHammer from './components/ButtonWithHammer.vue'
import NewGameButton from './components/NewGameButton.vue'
import RobotAvatar from './components/RobotAvatar.vue'

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
      <MainMeasure state="measure" />
      <Scale class="scale"/>
      <NewGameButton class="new-game"/>
      <RobotAvatar class="robot"/>
      <ButtonWithHammer class="hammer-button"/>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  z-index: -1;
}

.scale {

}

.new-game {
  grid-column: 2/4;
  /* grid-row: 6; */
}

.hammer-button {
  grid-column: 4;
  grid-row: 6;
}
.robot {
  /* grid-column: 5; */
}
</style>

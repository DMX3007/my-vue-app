<script setup lang="ts">
import Scale from '../components/Scale.vue'
import MainMeasure from '../components/MainMeasure.vue'
import ButtonWithHammer from '../components/ButtonWithHammer.vue'
import NewGameButton from './MainButton.vue'
import RobotAvatar from '../components/RobotAvatar.vue'
import MainMeasureBar from '../components/MainMeasureBar.vue'
import { type GameState, type Phases } from '../types/d'
import { ref } from 'vue';
import gameManager from '../utils/GameManager'

let game = ref<GameState>({
  state: 'welcome',
  hitScore: null,
  textHtml: gameManager.getNextText('welcome')
})

function handleStartNewPhase(newState: Phases = game.value.state) {
  game.value.state = gameManager.getNextPhase(newState)
  game.value.textHtml = gameManager.getNextText(newState)
  return
}

function handleHitScale(score: number){
  game.value.hitScore = score
  return
}

</script>

<template>
  <div class="game_container">
      <MainMeasure state="measure" />
      <MainMeasureBar 
        :score="game.hitScore"
        :is-animated="game.state === 'hit'"
        :target-colors="gameManager.getTargetColors()"
        :initial-colors="gameManager.getInitialColors()" />
      <Scale @hit="handleHitScale" class="scale" :state="game.state"/>
      <NewGameButton :text-html="game.textHtml" class="new-game" @start-next-phase="handleStartNewPhase" :state="game.state"/>
      <RobotAvatar class="robot"/>
      <ButtonWithHammer :state="game.state" class="hammer-button"/>
    </div>
</template>

<style scoped>

.game_container {
  position: relative;
  max-width: 360px;
  max-height: 640px;
  margin-inline: auto;
  height: 640px;
  background-image: url('../assets/bg_top.png');
  background-repeat: repeat-y;
  background-size: 100% 750px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  z-index: -1;
}

.new-game {
  grid-column: 2/4;
 }

.hammer-button {
  grid-column: 4;
  grid-row: 6;
}
</style>

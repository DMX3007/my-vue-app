<script setup lang="ts">
import Scale from '../components/Scale.vue'
import MainMeasure from '../components/MainMeasure.vue'
import ButtonWithHammer from '../components/ButtonWithHammer.vue'
import NewGameButton from './MainButton.vue'
import RobotAvatar from '../components/RobotAvatar.vue'
import MainMeasureBar from '../components/MainMeasureBar.vue'
import { type GameState, type Phases, type MainBarColors } from '../types/d'
import { ref } from 'vue';
import gameManager from '../utils/GameManager'

const game = ref<GameState>({
  state: 'welcome',
  hitScore: null,
  textHtml: gameManager.getNextText('welcome')
})

const colors = ref<MainBarColors>({
  initial: gameManager.getInitialColors(),
  target: gameManager.getTargetColors(),
})

function handleAgainTransition() {
  game.value.state = 'again'
  setTimeout(() => {
    game.value.state = 'playing'
  }, 100)
}

function handleStartNewPhase(newState: Phases = game.value.state) {
  const nextState = gameManager.getNextPhase(newState)
  if (nextState === 'again') {
    handleAgainTransition()
  } else {
    game.value.state = nextState
  }

  game.value.textHtml = gameManager.getNextText(game.value.state)

  if (game.value.state === 'welcome') {
    game.value.hitScore = 0
  }
}

function handleHitScale(score: number) {
  game.value.hitScore = score
}

function handleFilledMeasureBar() {
  if (game.value.hitScore == null) return
  if (game.value.hitScore >= 130) {
    game.value.state = 'win'
  }
}

</script>

<template>
  <div class="game_container">
    <MainMeasure state="measure" />
    <MainMeasureBar @filled="handleFilledMeasureBar" :state="game.state" :score="game.hitScore"
      :is-animated="game.state === 'hit'" :target-colors="colors.target" :initial-colors="colors.initial" />
    <Scale @hit="handleHitScale" class="scale" :state="game.state" />
    <NewGameButton :text-html="game.textHtml" class="new-game" @start-next-phase="handleStartNewPhase"
      :state="game.state" />
    <RobotAvatar :state="game.state" class="robot" />
    <ButtonWithHammer @eve="handleStartNewPhase" :state="game.state" class="hammer-button" />
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
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

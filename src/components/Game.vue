<template>
  <div class="relative">
    <MapComp></MapComp>
    <PlacePoints></PlacePoints>
    <PlayerComp></PlayerComp>
    <Cargos></Cargos>
    <div v-show="game.isWin">
      <button class="bg-red-500" @click="handleNextCheckpoint">下一关</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import MapComp from "./Map.vue";
import PlayerComp from "./Player.vue";
import Cargos from "./Cargos.vue";
import PlacePoints from "./PlacePoints.vue";
import { setupGame,createGame, startGame, startNextLevel} from "../game";
import { reactive } from "vue";

const game = reactive(createGame({level: 1}));
setupGame(game);

startGame();

function handleNextCheckpoint() {
  startNextLevel();
}
</script>

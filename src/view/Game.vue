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
import MapComp from "../components/Map.vue";
import PlayerComp from "../components/Player.vue";
import Cargos from "../components/Cargos.vue";
import PlacePoints from "../components/PlacePoints.vue";
import { setupGame, createGame, startGame, startNextLevel } from "../game";
import { reactive, onMounted } from "vue";

const game = reactive(createGame({ level: 1 }));
setupGame(game);

onMounted(() => {
  startGame();
});

function handleNextCheckpoint() {
  startNextLevel();
}
</script>

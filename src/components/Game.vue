<template>
  <div class="relative">
    <MapComp></MapComp>
    <PlacePoints></PlacePoints>
    <PlayerComp></PlayerComp>
    <Cargos></Cargos>

    <div class="bg-red-300">
      {{ gameManager.isWin }}
    </div>

    <!-- <div v-show="gameManager.isWin"> -->
    <button class="bg-red-500" @click="handleNextCheckpoint">下一关</button>
    <!-- </div> -->
  </div>
</template>
<script setup lang="ts">
import MapComp from "./Map.vue";
import PlayerComp from "./Player.vue";
import Cargos from "./Cargos.vue";
import PlacePoints from "./PlacePoints.vue";
// import { initGame } from "../game";
// import { reactive, watchEffect } from "vue";
import { GameManager } from "../game/gameManager";
// import { Map } from "../game/map";
import { reactive } from "vue";

// 游戏所需要的数据

// TODO need player type
// const player = reactive({ x: 2, y: 2 });

// const rawMap = [
//   [0, 0, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 2, 2, 2, 1, 0],
//   [1, 2, 2, 2, 2, 2, 1, 0],
//   [1, 1, 1, 2, 2, 2, 1, 0],
//   [1, 2, 1, 1, 2, 2, 1, 0],
//   [1, 2, 1, 2, 2, 2, 1, 1],
//   [1, 2, 2, 2, 2, 2, 2, 1],
//   [1, 2, 2, 2, 2, 2, 2, 1],
//   [1, 1, 1, 1, 1, 1, 1, 1],
// ];

// const map = new Map(rawMap);

// const cargos = reactive([
//   // { x: 2, y: 2 },
//   { x: 3, y: 2 },
// ]);

// const placePoints = reactive([
//   // { x: 4, y: 2 },
//   { x: 5, y: 3 },
// ]);

// TODO 这里的 gameManager 响应式数据丢失的问题
const gameManager = reactive(new GameManager(1));

// initGame(player, map, cargos, placePoints, gameManager);

function handleNextCheckpoint() {
  console.log("进入到下一关卡");
  console.log(gameManager)
  // gameManager.nextLevel();
}
</script>

<style scoped></style>

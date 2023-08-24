<template>
  <div class="relative">
    <MapComp></MapComp>
    <PlayerComp></PlayerComp>
    <Cargos></Cargos>
  </div>
</template>

<script setup lang="ts">
import MapComp from "./Map.vue";
import PlayerComp from "./Player.vue";
import Cargos from "./Cargos.vue";
import { initGame } from "../game";
import { reactive } from "vue";

// TODO need player type
const player = reactive({ x: 4, y: 2 });

const rawMap = [
  [0, 0, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 2, 2, 2, 1, 0],
  [1, 2, 2, 2, 2, 2, 1, 0],
  [1, 1, 1, 2, 2, 2, 1, 0],
  [1, 2, 1, 1, 2, 2, 1, 0],
  [1, 2, 1, 2, 2, 2, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];

const cargos = reactive([
  { x: 3, y: 2 },
  { x: 3, y: 4 },
]);

initGame(player, rawMap, cargos);

</script>

<style scoped></style>
../game

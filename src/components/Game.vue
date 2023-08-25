<template>
  <div class="relative">
    <MapComp></MapComp>
    <PlayerComp></PlayerComp>
    <Cargos></Cargos>
    <PlacePoints></PlacePoints>
  </div>
</template>

<script setup lang="ts">
import MapComp from "./Map.vue";
import PlayerComp from "./Player.vue";
import Cargos from "./Cargos.vue";
import PlacePoints from './PlacePoints.vue';
import { initGame } from "../game";
import { reactive } from "vue";

// TODO need player type
const player = reactive({ x: 2, y: 2 });

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
  // { x: 2, y: 2 },
  { x: 3, y: 2 },
]);

const placePoints = reactive([
  { x: 4, y: 2 },
  { x: 5, y: 3 },
]);

initGame(player, rawMap, cargos, placePoints);
</script>

<style scoped></style>
../game

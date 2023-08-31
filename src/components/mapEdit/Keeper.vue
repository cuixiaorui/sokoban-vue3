<template>
  <div v-show="isShowKeeper" class="absolute" :style="positionStyle">
    <img class="block" :src="Keeper" />
  </div>
</template>

<script setup lang="ts">
import Keeper from "../../assets/keeper.png";
import { usePosition } from "../../composables/position";
import { useKeeper } from "../../composables/mapEdit/keeper";

const { keeper, isShowKeeper } = useKeeper();

const { positionStyle } = usePosition(keeper);
</script>

<style scoped></style>

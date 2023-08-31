<template>
  <div class="absolute" :style="positionStyle">
    <img class="block  cursor-pointer" :src="placePointImg" />
  </div>
</template>

<script setup lang="ts">
import placePointImg from "../../assets/target.png";
import { usePosition } from "../../composables/position";

interface Props {
  data: {
    x: number;
    y: number;
  };
}

const props = defineProps<Props>();

const { positionStyle } = usePosition(props.data);
</script>

<style scoped></style>

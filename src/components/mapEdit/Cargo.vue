<template>
  <div class="absolute" :style="positionStyle">
    <img class="block" :src="cargoImg" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from "../../assets/cargo.png";
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

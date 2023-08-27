<template>
  <div class="absolute" :style="positionStyle">
    <img class="block" :src="placePointImg" />
  </div>
</template>

<script setup lang="ts">
import placePointImg from "../assets/target.png";
import { type PlacePoint } from "../game";
import { usePosition } from "../composables/position";

interface Props {
  data: PlacePoint;
}

const props = defineProps<Props>();

const { positionStyle } = usePosition(props.data);
</script>

<style scoped></style>

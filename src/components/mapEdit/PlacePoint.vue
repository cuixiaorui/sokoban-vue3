<template>
  <div class="absolute" :style="positionStyle" @dblclick="handleDblclick">
    <img class="block cursor-pointer" :src="placePointImg" />
  </div>
</template>

<script setup lang="ts">
import placePointImg from "../../assets/target.png";
import { usePosition } from "../../composables/position";
import {
  PlacePoint,
  usePlacePoint,
} from "../../composables/mapEdit/placePoint";

interface Props {
  data: PlacePoint;
}

const props = defineProps<Props>();
const { removePlacePoint } = usePlacePoint();

const { positionStyle } = usePosition(props.data);

function handleDblclick() {
  removePlacePoint(props.data);
}
</script>

<style scoped></style>

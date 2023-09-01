<template>
  <div class="absolute" :style="positionStyle" @dblclick="handleDblclick">
    <img class="block" :src="cargoImg" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from "../../assets/cargo.png";
import { usePosition } from "../../composables/position";
import { Cargo, useCargo } from "../../composables/mapEdit/cargo";

interface Props {
  data: Cargo;
}

const props = defineProps<Props>();

const { removeCargo } = useCargo();
const { positionStyle } = usePosition(props.data);

function handleDblclick() {
  removeCargo(props.data)
}
</script>

<style scoped></style>

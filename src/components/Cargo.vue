<template>
  <div class="absolute" :style="positionStyle">
    <img class="block" :src="cargoImg" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from "../assets/cargo.png";
import { type Cargo } from "../game/cargo";
import { usePosition } from "../composables/position";

interface Props {
  data: Cargo;
}

const props = defineProps<Props>();

const { positionStyle } = usePosition(props.data);

</script>

<style scoped></style>

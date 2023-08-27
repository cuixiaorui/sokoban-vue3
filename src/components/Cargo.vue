<template>
  <div class="absolute" :style="positionStyle">
    <img
      class="block"
      :src="props.data.onTargetPoint ? cargoOnTargetImg : cargoImg"
    />
  </div>
</template>

<script setup lang="ts">
import cargoImg from "../assets/cargo.png";
import cargoOnTargetImg from "../assets/cargo_on_target.png";
import { type Cargo } from "../game";
import { usePosition } from "../composables/position";

interface Props {
  data: Cargo;
}

const props = defineProps<Props>();

const { positionStyle } = usePosition(props.data);
</script>

<style scoped></style>

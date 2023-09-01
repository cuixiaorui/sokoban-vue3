<template>
  <div class="flex-auto">
    <div>地图 json 显示区域</div>
    <textarea rows="10" cols="10" readonly>{{ gameData }}</textarea>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useKeeper } from "../../composables/mapEdit/keeper";
import { useCargo } from "../../composables/mapEdit/cargo";
import { usePlacePoint } from "../../composables/mapEdit/placePoint";
import { useMap } from "../../composables/mapEdit/map";

const { keeper } = useKeeper();
const { cargos } = useCargo();
const { placePoints } = usePlacePoint();
const { map } = useMap();

const gameData = computed(() => {
  return {
    map: map.data.map((row) => {
      return row.map(({ type }) => {
        return type;
      });
    }),
    player: keeper,
    cargos: cargos.map(({ x, y }) => {
      return { x, y };
    }),
    placePoints: placePoints.map(({ x, y }) => {
      return { x, y };
    }),
  };
});
</script>

<style lang="scss" scoped></style>

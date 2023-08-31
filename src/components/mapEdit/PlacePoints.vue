<template>
  <PlacePointComp
    :key="item.id"
    v-for="item in placePoints"
    :data="item"
  ></PlacePointComp>
</template>

<script setup lang="ts">
import PlacePointComp from "./PlacePoint.vue";
import { usePlacePoint } from "../../composables/mapEdit/placePoint";

const { placePoints } = usePlacePoint();
</script>

<style scoped></style>

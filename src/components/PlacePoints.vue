<template>
  <PlacePointComp
    :key="item.id"
    v-for="item in placePoints"
    :data="item"
  ></PlacePointComp>
</template>

<script setup lang="ts">
import PlacePointComp from "./PlacePoint.vue";
import { type PlacePoint, setupPlacePoints } from "../game";
import { reactive } from "vue";

const placePoints = reactive([] as PlacePoint[]);

setupPlacePoints(placePoints);
</script>

<style scoped></style>

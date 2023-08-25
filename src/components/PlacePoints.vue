<template>
  <PlacePoint v-for="item in placePoints" :data="item"></PlacePoint>
</template>

<script setup lang="ts">
import PlacePoint from "./PlacePoint.vue";
import { getPlacePoints } from "../game/placePoint";

const placePoints = getPlacePoints();
</script>

<style scoped></style>

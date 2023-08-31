<template>
  <CargoComp :key="item.id" v-for="item in cargos" :data="item"></CargoComp>
</template>

<script setup lang="ts">
import CargoComp from "./Cargo.vue";
import { useCargo } from "../../composables/mapEdit/cargo";

const { cargos } = useCargo();
</script>

<style scoped></style>

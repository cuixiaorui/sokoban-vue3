<template>
  <CargoComp :key="item.id" v-for="item in cargos" :data="item"></CargoComp>
</template>

<script setup lang="ts">
import CargoComp from "./Cargo.vue";
import { setupCargos, type Cargo } from "../game";
import { reactive } from "vue";

const cargos = reactive([] as Cargo[]);
setupCargos(cargos);
</script>

<style scoped></style>

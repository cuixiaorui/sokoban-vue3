<template>
  <Cargo :key="item.id" v-for="item in cargos" :data="item"></Cargo>
</template>

<script setup lang="ts">
import Cargo from "./Cargo.vue";
import { getCargos } from "../game/cargo";

const cargos = getCargos();
</script>

<style scoped></style>

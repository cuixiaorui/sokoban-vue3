<template>
  <div class="map">
    <div class="row" v-for="row in map.data">
      <div class="col" v-for="j in row">
        <component :is="getElementComponent(j)"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Wall from "./Wall.vue";
import Floor from "./Floor.vue";
import Empty from "./Empty.vue";
import { reactive, type Component } from "vue";
import {  type Element, type Map, setupMap } from "../game";

const map = reactive({} as Map);
setupMap(map)

const mapElement: Record<string, Component> = {
  Wall: Wall,
  Floor: Floor,
  Empty: Empty,
};

function getElementComponent(element: Element) {
  return mapElement[element.name];
}
</script>

<style scoped>
.row {
  display: flex;
}

.col img {
  display: block;
}
</style>

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
import { type Component } from "vue";
import { getMap, type Element } from "../game/map";

const map = getMap()

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

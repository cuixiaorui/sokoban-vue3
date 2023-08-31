<template>
  <div>
    <div class="flex">
      <template v-for="editElement in editElements.tiles">
        <EditElement :edit-element="editElement"></EditElement>
      </template>
    </div>
    <div class="flex">
      <template v-for="editElement in editElements.other">
        <EditElement :edit-element="editElement"></EditElement>
      </template>
    </div>

    <div>currentEditElement: {{ selectedEditElement }}</div>
  </div>
</template>

<script setup lang="ts">
import EditElement from "./EditElement.vue";
import { keeperEditElement } from "../../composables/mapEdit/keeper";
import { cargoEditElement } from "../../composables/mapEdit/cargo";
import { placePointEditElement } from "../../composables/mapEdit/placePoint";
import { tileEditElements } from "../../composables/mapEdit/tile";
import { currentSelectedEditElement } from "../../composables/mapEdit/editElement";
import { computed } from "vue";

const selectedEditElement = computed(() => {
  if (!currentSelectedEditElement.value) {
    return "没有选中";
  }

  return currentSelectedEditElement.value.title;
});

const editElements = {
  tiles: tileEditElements,
  other: [keeperEditElement, cargoEditElement, placePointEditElement],
};
</script>

<style scoped></style>

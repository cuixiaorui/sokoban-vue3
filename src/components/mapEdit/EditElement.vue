<template>
  <div @click="handleClick" class="m-2">
    <img class="block cursor-pointer" :src="editElement.imgSrc" />
    <h2>{{ editElement.title }}</h2>
  </div>
</template>

<script setup lang="ts">
import {
  setCurrentSelectedElement,
  type EditElement,
} from "../../composables/mapEdit/editElement";

const props = defineProps<{
  editElement: EditElement;
}>();

function handleClick() {
  setCurrentSelectedElement(props.editElement);
}
</script>

<style scoped></style>

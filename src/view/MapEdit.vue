<template>
  <div class="bg-white h-screen">
    <div class="bg-gray-500 relative">
      <div class="flex" v-for="i in row">
        <div class="col" v-for="j in col">
          <MapBlock :x="j - 1" :y="i - 1"></MapBlock>
        </div>
      </div>
      <div>
        <Keeper></Keeper>
        <Cargos></Cargos>
        <PlacePoints></PlacePoints>
      </div>
    </div>

    <div>
      <div>
        <div>
          row:
          <input type="text" v-model.number="row" />
        </div>
        <div>
          col:
          <input type="text" v-model.number="col" />
        </div>
      </div>
      <EditElementView></EditElementView>
    </div>
  </div>
</template>

<script setup lang="ts">
import EditElementView from "../components/mapEdit/EditElementView.vue";
import Cargos from "../components/mapEdit/Cargos.vue";
import PlacePoints from "../components/mapEdit/PlacePoints.vue";
import Keeper from "../components/mapEdit/Keeper.vue";
import MapBlock from "../components/mapEdit/MapBlock.vue";
import { ref } from "vue";

const row = ref(5);
const col = ref(4);
</script>

<style scoped></style>

<template>
  <div class="bg-white h-screen">
    <div class="flex">
      <div class="bg-gray-500 relative flex-auto">
        <div class="flex" v-for="rows in map.data">
          <div class="col" v-for="item in rows">
            <MapBlock :key="item.id" :data="item"></MapBlock>
          </div>
        </div>
        <div>
          <Keeper></Keeper>
          <Cargos></Cargos>
          <PlacePoints></PlacePoints>
        </div>
      </div>
      <MapDataDisplay></MapDataDisplay>
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
import MapDataDisplay from "../components/mapEdit/MapDataDisplay.vue";
import EditElementView from "../components/mapEdit/EditElementView.vue";
import Cargos from "../components/mapEdit/Cargos.vue";
import PlacePoints from "../components/mapEdit/PlacePoints.vue";
import Keeper from "../components/mapEdit/Keeper.vue";
import MapBlock from "../components/mapEdit/MapBlock.vue";
import { useMap } from "../composables/mapEdit/map";
import { ref, watchEffect } from "vue";

const { map, initMap, updateMapRow, updateMapCol } = useMap();

const row = ref(8);
const col = ref(8);

watchEffect(() => {
  if (!row.value) return;
  updateMapRow(row.value)
});

watchEffect(() => {
  if(!col.value) return;
  updateMapCol(col.value)
})

initMap();
</script>

<style scoped></style>

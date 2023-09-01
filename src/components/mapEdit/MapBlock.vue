<template>
  <div
    class="w-[32px] h-[32px] bg-white select-none border border-sky-500"
    @click="() => update()"
    @mousemove="handleMousemove"
    @mousedown="handleDown"
  >
    <div v-if="data.type === TileType.wall">
      <img :src="wallImg" draggable="false" />
    </div>
    <div v-else-if="data.type === TileType.floor">
      <img :src="floorImg" draggable="false" />
    </div>
    <div v-else class="bg-red-500 w-[32px] h-[32px]"></div>
  </div>
</template>

<script setup lang="ts">
import { currentSelectedEditElement } from "../../composables/mapEdit/editElement";
import floorImg from "../../assets/floor.png";
import wallImg from "../../assets/wall.png";
import { TileType, isTile } from "../../composables/mapEdit/tile";
import { useCollectMapBlock } from "../../composables/mapEdit/collectMapBlock";
import { useKeeper } from "../../composables/mapEdit/keeper";
import { useCargo } from "../../composables/mapEdit/cargo";
import { usePlacePoint } from "../../composables/mapEdit/placePoint";
import { MapBlock } from "../../composables/mapEdit/map";

interface Prop {
  data: MapBlock;
}

const props = defineProps<Prop>();

const { start, stop, collect } = useCollectMapBlock();
const { isShowKeeper, keeper } = useKeeper();
const { addCargo } = useCargo();
const { addPlacePoint } = usePlacePoint();

function update() {
  if (!currentSelectedEditElement.value) return;

  const editElementType = currentSelectedEditElement.value.type;
  switch (editElementType) {
    case "keeper":
      keeper.x = props.data.x;
      keeper.y = props.data.y;
      isShowKeeper.value = true;
      changeType(TileType.floor);
      break;
    case "cargo":
      addCargo(props.data.x, props.data.y);
      // 这里的 cargo 和 floor 应该是绑定在一起的
      changeType(TileType.floor);
      break;
    case "placePoint":
      addPlacePoint(props.data.x, props.data.y);
      changeType(TileType.floor);
      break;
    default:
      if (isTile(currentSelectedEditElement.value)) {
        changeType(editElementType);
      }
      break;
  }
}
function changeType(newType: number) {
  if (newType === props.data.type) return;
  props.data.type = newType;
}

function handleMousemove() {
  collect(() => {
    if (!currentSelectedEditElement.value) return;

    if (isTile(currentSelectedEditElement.value)) {
      changeType(currentSelectedEditElement.value?.type);
    }
  });
}

function handleMouseup() {
  stop();
  document.removeEventListener("mouseup", handleMouseup);
}

function handleDown() {
  start();
  document.addEventListener("mouseup", handleMouseup);
}
</script>

<style scoped></style>

<template>
  <div
    class="w-[32px] h-[32px] bg-white select-none border border-sky-500"
    @click="() => update()"
    @mousemove="handleMousemove"
    @mousedown="handleDown"
  >
    <div v-if="type === TileType.wall">
      <img :src="wallImg" draggable="false" />
    </div>
    <div v-else-if="type === TileType.floor">
      <img :src="floorImg" draggable="false" />
    </div>
    <div v-else class="bg-red-500 w-[32px] h-[32px]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { currentSelectedEditElement } from "../../composables/mapEdit/editElement";
import floorImg from "../../assets/floor.png";
import wallImg from "../../assets/wall.png";
import { TileType, isTile } from "../../composables/mapEdit/tile";
import { ref } from "vue";
import { useCollectMapBlock } from "../../composables/mapEdit/collectMapBlock";
import { useKeeper } from "../../composables/mapEdit/keeper";
import { useCargo } from "../../composables/mapEdit/cargo";
import { usePlacePoint } from "../../composables/mapEdit/placePoint";

interface Prop {
  x: number;
  y: number;
}

const props = defineProps<Prop>();

const { start, stop, collect } = useCollectMapBlock();
const { isShowKeeper, keeper } = useKeeper();
const { addCargo } = useCargo();
const { addPlacePoint } = usePlacePoint();

const type = ref<TileType | undefined>();

function update() {
  if (!currentSelectedEditElement.value) return;

  const editElementType = currentSelectedEditElement.value.type;
  switch (editElementType) {
    case "keeper":
      keeper.x = props.x;
      keeper.y = props.y;
      isShowKeeper.value = true;
      break;
    case "cargo":
      addCargo(props.x, props.y);
      // 这里的 cargo 和 floor 应该是绑定在一起的
      type.value = TileType.floor;
      break;
    case "placePoint":
      addPlacePoint(props.x, props.y);
      type.value = TileType.floor;
      break;
    default:
      if (isTile(currentSelectedEditElement.value)) {
        type.value = editElementType;
      }
      break;
  }
}

function changeType(newType: number) {
  if (newType === type.value) return;
  type.value = newType;
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

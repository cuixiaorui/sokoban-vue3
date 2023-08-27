<template>
  <div class="absolute" :style="positionStyle">
    <img class="block" :src="Keeper" />
  </div>
</template>

<script setup lang="ts">
import Keeper from "../assets/keeper.png";
import {
  moveRight,
  moveLeft,
  moveUp,
  moveDown,
  setupPlayer,
  Player,
} from "../game";
import { usePosition } from "../composables/position";
import { onMounted, onUnmounted, reactive } from "vue";

const player = reactive({} as Player);
setupPlayer(player);

function useMove() {
  function handleKeyup(e: KeyboardEvent) {
    switch (e.code) {
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowDown":
        moveDown();
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;

      default:
        break;
    }
  }

  onMounted(() => {
    window.addEventListener("keyup", handleKeyup);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", handleKeyup);
  });
}

useMove();

const { positionStyle } = usePosition(player);
</script>

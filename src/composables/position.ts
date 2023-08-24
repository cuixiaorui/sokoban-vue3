import { computed } from "vue";

const STEP = 32;

interface Position {
  x: number;
  y: number;
}

export function usePosition(position: Position) {
  const top = computed(() => {
    return position.y * STEP;
  });

  const left = computed(() => {
    return position.x * STEP;
  });

  const positionStyle = computed(() => {
    return [`top:${top.value}px`, `left:${left.value}px`];
  });

  return {
    positionStyle,
  };
}

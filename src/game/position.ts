export interface Position {
  x: number;
  y: number;
}

// TODO: 可以基于 step 调整获取的 position
// 比如 step 是 1 的话 那么就是求向左一个位置
// 如果是 2 的话 那么就是向左二个位置
export function calcLeftPosition(position: Position) {
  return {
    x: position.x - 1,
    y: position.y,
  };
}

export interface Position {
  x: number;
  y: number;
}

export function calcLeftPosition(position: Position) {
  return {
    x: position.x - 1,
    y: position.y,
  };
}

export function calcRightPosition(position: Position) {
  return {
    x: position.x + 1,
    y: position.y,
  };
}

export function calcUpPosition(position: Position) {
  return {
    x: position.x,
    y: position.y - 1,
  };
}
export function calcDownPosition(position: Position) {
  return {
    x: position.x,
    y: position.y + 1,
  };
}

import { getCargoByPosition } from "./cargo";
import { getElementByPosition } from "./map";
import { type Position } from "./position";

export function collisionWall(position: Position) {
  const element = getElementByPosition(position);

  if (element.name === "Wall") {
    return true;
  }

  return false;
}

export function collisionCargo(position: Position) {
  const cargo = getCargoByPosition(position);

  return !!cargo;
}

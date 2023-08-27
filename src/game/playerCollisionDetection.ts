import { getCargoByPosition } from "./cargo";
import { getElementByPosition } from "./map";
import { Position } from "./position";

export function wallCollision(position: Position) {
  const element = getElementByPosition(position);

  if (element.name === "Wall") {
    return true;
  }

  return false;
}

export function cargoCollision(position: Position) {
  const cargo = getCargoByPosition(position);

  return !!cargo;
}

import { Player } from "./player";
import { Element, Map, getMap } from "./map";
import { Position } from "./position";

export function wallCollisionNew(position: Position) {
  const element = getMap().getElementByPositionNew(position);

  if (element.name === "Wall") {
    return true;
  }

  return false;
}

function wallCollision(element: Element) {
  if (element.name === "Wall") {
    return true;
  }

  return false;
}

export function wallCollisionLeft(
  position: { x: number; y: number },
  map: Map
) {
  return wallCollision(map.getElementByPosition(position.x, position.y));
}

export function wallCollisionRight(player: Player, map: Map) {
  return wallCollision(map.getElementByPosition(player.x + 1, player.y));
}

export function wallCollisionUp(player: Player, map: Map) {
  return wallCollision(map.getElementByPosition(player.x, player.y - 1));
}

export function wallCollisionDown(player: Player, map: Map) {
  return wallCollision(map.getElementByPosition(player.x, player.y + 1));
}

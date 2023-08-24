import { getMap } from "./map";
import {
  wallCollisionDown,
  wallCollisionNew,
  wallCollisionRight,
  wallCollisionUp,
} from "./playerCollisionDetection";
import { getCargoByPosition } from "./cargo";
import { calcLeftPosition } from "./position";

export interface Player {
  x: number;
  y: number;
}

let _player: Player;

export function moveLeft() {
  // 1. 人物的左侧是墙
  if (wallCollisionNew(calcLeftPosition(_player))) return;

  const cargo = getCargoByPosition(calcLeftPosition(_player));

  if (cargo) {
    //2 左侧是箱子  并且箱子的左侧是墙
    if (wallCollisionNew(calcLeftPosition(cargo))) {
      return;
    }

    cargo.x -= 1;
  }

  _player.x -= 1;
}

export function moveRight() {
  if (wallCollisionRight(_player, getMap())) return;

  _player.x += 1;
}

export function moveUp() {
  if (wallCollisionUp(_player, getMap())) return;

  _player.y -= 1;
}

export function moveDown() {
  if (wallCollisionDown(_player, getMap())) return;

  _player.y += 1;
}

export function getPlayer() {
  return _player;
}

export function initPlayer(player: Player) {
  _player = player;
}

import { reactive } from "vue";
import { Direction, fighting } from "./fighting";

export interface Player {
  x: number;
  y: number;
}

let _player: Player = reactive({} as Player);

export function moveLeft() {
  fighting(Direction.left);
}

export function moveRight() {
  fighting(Direction.right);
}

export function moveUp() {
  fighting(Direction.up);
}

export function moveDown() {
  fighting(Direction.down);
}

export function getPlayer() {
  return _player;
}

export function initPlayer(player: Player) {
  _player = player;
}

export function updatePlayer(player: Player) {
  _player.x = player.x;
  _player.y = player.y;
}

import { Direction, move } from "./move";

export interface Player {
  x: number;
  y: number;
}

let _player: Player;
export function setupPlayer(player: Player) {
  _player = player;
}

export function createPlayer({ x, y }: { x: number; y: number }): Player {
  return {
    x,
    y,
  };
}

export function moveLeft() {
  move(Direction.left);
}

export function moveRight() {
  move(Direction.right);
}

export function moveUp() {
  move(Direction.up);
}

export function moveDown() {
  move(Direction.down);
}

export function getPlayer() {
  return _player;
}

export function initPlayer(player: Player) {
  _player = player;
}

export function updatePlayer({ x, y }: { x: number; y: number }) {
  _player.x = x;
  _player.y = y;
}

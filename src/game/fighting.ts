import { getCargoByPosition, handleHitTargetPoint} from "./cargo";
import { getGameManager } from "./gameManager";
import { getPlayer } from "./player";
import { cargoCollision, wallCollision } from "./playerCollisionDetection";
import {
  Position,
  calcDownPosition,
  calcLeftPosition,
  calcRightPosition,
  calcUpPosition,
} from "./position";

export enum Direction {
  left = "left",
  right = "right",
  up = "up",
  down = "down",
}

export function fighting(direction: Direction) {
  // 1. 箱子推到放置点上
  // 2. 箱子检测是不是碰到了箱子
  const player = getPlayer();
  const gameManager = getGameManager();
  const map: Record<
    string,
    {
      calcPositionFn: (position: Position) => Position;
      dirPropName: "x" | "y";
      dir: -1 | 1;
    }
  > = {
    left: { calcPositionFn: calcLeftPosition, dirPropName: "x", dir: -1 },
    right: { calcPositionFn: calcRightPosition, dirPropName: "x", dir: 1 },
    up: { calcPositionFn: calcUpPosition, dirPropName: "y", dir: -1 },
    down: { calcPositionFn: calcDownPosition, dirPropName: "y", dir: 1 },
  };
  const { calcPositionFn, dirPropName, dir } = map[direction];
  if (wallCollision(calcPositionFn(player))) return;

  const cargo = getCargoByPosition(calcPositionFn(player));

  if (cargo) {
    // 看看是不是墙
    if (wallCollision(calcPositionFn(cargo))) {
      return;
    }

    // 看看是不是箱子
    if (cargoCollision(calcPositionFn(cargo))) {
      return;
    }

    cargo[dirPropName] += 1 * dir;
    handleHitTargetPoint(cargo)

    gameManager.judgeIsWin();
  }

  player[dirPropName] += 1 * dir;
}

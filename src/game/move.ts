import { getCargoByPosition, handleHitPlacePoint } from "./cargo";
import { judgeGameWin } from "./game";
import { getPlayer } from "./player";
import { collisionCargo, collisionWall } from "./collisionDetection";
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

export function move(direction: Direction) {
  // 1. 箱子推到放置点上
  // 2. 箱子检测是不是碰到了箱子
  const player = getPlayer();
  const { calcPositionFn, dirPropName, dir } = map[direction];
  if (collisionWall(calcPositionFn(player))) return;

  const cargo = getCargoByPosition(calcPositionFn(player));

  if (cargo) {
    // 看看是不是墙
    if (collisionWall(calcPositionFn(cargo))) {
      return;
    }

    // 看看是不是箱子
    if (collisionCargo(calcPositionFn(cargo))) {
      return;
    }

    cargo[dirPropName] += 1 * dir;

    handleHitPlacePoint(cargo);

    judgeGameWin();
  }

  player[dirPropName] += 1 * dir;
}

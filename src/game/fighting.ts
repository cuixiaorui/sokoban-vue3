import { getCargoByPosition } from "./cargo";
import { getPlacePoints } from "./placePoint";
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

    // 检测 是不是碰到了 placePoint
    // TODO 重构 现在都是低层次的代码
    const point = getPlacePoints().find((point) => {
      return point.x === cargo.x && point.y === cargo.y;
    });

    // reset
    if (cargo.onTargetPoint) {
      cargo.onTargetPoint.onTarget = false;
      cargo.onTargetPoint = undefined;
    }

    if (point) {
      // hit point
      cargo.onTargetPoint = point;
      point.onTarget = true;
    }
  }

  player[dirPropName] += 1 * dir;
}

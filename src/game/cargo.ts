import { PlacePoint } from "./placePoint";
import { Position } from "./position";
import { getPlacePoints } from "./placePoint";
import { reactive } from "vue";
import { generateId } from "./id";

export interface Cargo {
  x: number;
  y: number;
  id: number;
  onTargetPoint?: PlacePoint | undefined;
}

let _cargos = reactive([] as Cargo[]);
export function initCargos(rawCargos: { x: number; y: number }[]) {
  _cargos = rawCargos.map(({ x, y }) => {
    return createCargo(x, y);
  });
}

function createCargo(x: number, y: number): Cargo {
  return {
    x,
    y,
    id: generateId(),
  };
}

export function updateCargos(rawCargos: { x: number; y: number }[]) {
  cleanAllCargos()
  // add new cargos
  rawCargos.forEach((rawCargo) => {
    _cargos.push(createCargo(rawCargo.x, rawCargo.y));
  });
}

function cleanAllCargos() {
  _cargos.length = 0;
}

export function handleHitPlacePoint(cargo: Cargo) {
  reset(cargo);

  const point = getOnTargetPoint(cargo);

  if (point) {
    cargo.onTargetPoint = point;
  }
}

function getOnTargetPoint(cargo: Cargo) {
  return getPlacePoints().find((point) => {
    return point.x === cargo.x && point.y === cargo.y;
  });
}

function reset(cargo: Cargo) {
  if (cargo.onTargetPoint) {
    cargo.onTargetPoint = undefined;
  }
}

export function getCargos() {
  return _cargos;
}

export function getCargoByPosition(position: Position) {
  return _cargos.find((c) => {
    return c.x === position.x && c.y === position.y;
  });
}

export function isAllCargoOnTarget() {
  return _cargos.every((cargo) => {
    return !!cargo.onTargetPoint;
  });
}

import { PlacePoint } from "./placePoint";
import { Position } from "./position";
import { getPlacePoints } from "./placePoint";

export interface Cargo {
  x: number;
  y: number;
  id?: number;
  onTargetPoint?: PlacePoint | undefined;
}

let _cargos: Cargo[] = [];
let id = 0;
export function initCargos(cargos: Cargo[]) {
  _cargos = cargos;

  _cargos.forEach((cargo) => {
    cargo.id = id++;
  });
}

export function updateCargos(cargos: Cargo[]) {
  cargos.forEach((cargo) => {
    cargo.id = id++;
  });

  let len = _cargos.length - 1;

  for (let i = len; i >= 0; i--) {
    _cargos.splice(i, 1);
  }

  cargos.forEach((cargo) => {
    _cargos.push(cargo);
  });
}

export function handleHitTargetPoint(cargo: Cargo) {
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

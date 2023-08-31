import { type PlacePoint, getPointByPosition } from "./placePoint";
import { type Position } from "./position";
import { generateId } from "../utils/id";

export interface Cargo {
  x: number;
  y: number;
  id: number;
  onTargetPoint?: PlacePoint | undefined;
}

let _cargos: Cargo[] = [];
export function setupCargos(cargos: Cargo[]) {
  _cargos = cargos;
}

export function createCargos(rawCargos: { x: number; y: number }[]): Cargo[] {
  return rawCargos.map((rawCargo) => {
    return createCargo(rawCargo.x, rawCargo.y);
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
  cleanAllCargos();

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

  const point = getPointByPosition(cargo);

  if (point) {
    cargo.onTargetPoint = point;
  }
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
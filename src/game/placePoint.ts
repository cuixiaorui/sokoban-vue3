import { generateId } from "./id";
import { Position } from "./position";

export interface PlacePoint {
  x: number;
  y: number;
  id: number;
}

let _placePoints: PlacePoint[] = []

export function setupPlacePoints(placePoint: PlacePoint[]) {
  _placePoints = placePoint;
}

export function createPlacePoints(
  config: { x: number; y: number }[]
): PlacePoint[] {
  return config.map(({ x, y }) => {
    return createPlacePoint(x, y);
  });
}

function createPlacePoint(x: number, y: number): PlacePoint {
  return {
    x,
    y,
    id: generateId(),
  };
}

export function updatePlacePoints(rawPlacePoints: { x: number; y: number }[]) {
  cleanAllPlacePoints();

  // add new placePoint
  rawPlacePoints.forEach(({ x, y }) => {
    _placePoints.push(createPlacePoint(x, y));
  });
}

export function getPointByPosition(position: Position) {
  return _placePoints.find((point) => {
    return point.x === position.x && point.y === position.y;
  });
}

function cleanAllPlacePoints() {
  _placePoints.length = 0;
}

export function getPlacePoints() {
  return _placePoints;
}

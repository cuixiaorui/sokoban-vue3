import { reactive } from "vue";
import { generateId } from "./id";

export interface PlacePoint {
  x: number;
  y: number;
  id: number;
}

let _placePoints: PlacePoint[] = reactive([] as PlacePoint[]);

export function initPlacePoints(rawPlacePoints: { x: number; y: number }[]) {
  _placePoints = rawPlacePoints.map(({ x, y }) => {
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
  cleanAllPlacePoints()

  // add new placePoint
  rawPlacePoints.forEach(({ x, y }) => {
    _placePoints.push(createPlacePoint(x, y));
  });
}

function cleanAllPlacePoints() {
  _placePoints.length = 0;
}

export function getPlacePoints() {
  return _placePoints;
}

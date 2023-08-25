export interface PlacePoint {
  x: number;
  y: number;
  onTarget?: boolean;
}

let _placePoints: PlacePoint[] = [];
export function initPlacePoints(placePoints: PlacePoint[]) {
  _placePoints = placePoints;

  _placePoints.forEach((point) => {
    point.onTarget = false;
  });
}

export function getPlacePoints() {
  return _placePoints;
}

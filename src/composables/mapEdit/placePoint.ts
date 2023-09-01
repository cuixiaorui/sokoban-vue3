import { reactive } from "vue";
import { generateId } from "../../utils/id";
import { type EditElement } from "./editElement";
import placePointImgSrc from "../../assets/target.png";

export interface PlacePoint {
  x: number;
  y: number;
  id: number;
}

export const placePointEditElement: EditElement = {
  type: "placePoint",
  title: "放置点",
  imgSrc: placePointImgSrc,
};

const placePoints = reactive<PlacePoint[]>([]);

export function usePlacePoint() {
  function createPlacePoint(x: number, y: number) {
    return {
      x,
      y,
      id: generateId(),
    };
  }
  function addPlacePoint(x: number, y: number) {
    const placePoint = createPlacePoint(x, y);
    placePoints.push(placePoint);

    return placePoint;
  }

  function removePlacePoint(placePoint: PlacePoint) {
    const index = placePoints.findIndex((p) => p.id === placePoint.id);

    if (index !== -1) placePoints.splice(index, 1);
  }

  function reset() {
    placePoints.length = 0;
  }

  return {
    reset,
    removePlacePoint,
    addPlacePoint,
    placePoints,
  };
}

import { reactive } from "vue";
import { generateId } from "../../utils/id";
import { type EditElement } from "./editElement";
import placePointImgSrc from "../../assets/target.png";

interface PlacePoint {
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
    placePoints.push(createPlacePoint(x, y));
  }

  return {
    addPlacePoint,
    placePoints,
  };
}

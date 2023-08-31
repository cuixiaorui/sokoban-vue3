import { ref } from "vue";
import { TileType } from "./tile";

export interface EditElement {
  title: string;
  type: TileType | "cargo" | "placePoint" | "keeper";
  imgSrc: string
}


export const currentSelectedEditElement = ref<EditElement>();

export function setCurrentSelectedElement(element: EditElement) {
  currentSelectedEditElement.value = element;
}

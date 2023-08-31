import { reactive } from "vue";
import { generateId } from "../../utils/id";
import { type EditElement } from "./editElement";
import cargoSrc from "../../assets/cargo.png";

export interface Cargo {
  id: number;
  x: number;
  y: number;
}

export const cargoEditElement: EditElement = {
  type: "cargo",
  title: "箱子",
  imgSrc: cargoSrc,
};

const cargos = reactive<Cargo[]>([]);

export function useCargo() {
  function createCargo(x: number, y: number) {
    return {
      x,
      y,
      id: generateId(),
    };
  }

  function addCargo(x: number, y: number) {
    cargos.push(createCargo(x, y));
  }

  return {
    cargos,
    addCargo,
  };
}

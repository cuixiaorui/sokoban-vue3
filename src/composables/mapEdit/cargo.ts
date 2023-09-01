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
    const cargo = createCargo(x, y);
    cargos.push(cargo);
    return cargo;
  }

  function removeCargo(cargo: Cargo) {

    const cargoIndex = cargos.findIndex((c) => c.id === cargo.id);

    if (cargoIndex !== -1) cargos.splice(cargoIndex, 1);
  }

  function reset () {
    cargos.length = 0
  }

  return {
    cargos,
    reset,
    addCargo,
    removeCargo,
  };
}

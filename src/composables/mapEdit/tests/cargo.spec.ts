import { it, expect, describe, beforeEach } from "vitest";
import { useCargo } from "../cargo";

describe("map edit cargo", () => {
  beforeEach(() => {
    const { reset } = useCargo();

    reset();
  });
  it("should remove cargo", () => {
    const { removeCargo, addCargo, cargos } = useCargo();

    const cargo = addCargo(1, 1);

    removeCargo(cargo);

    expect(cargos.length).toBe(0);
  });
});

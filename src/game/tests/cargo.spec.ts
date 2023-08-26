import { it, expect, describe } from "vitest";
import { initPlacePoints } from "../placePoint";
import { Cargo, updateCargo } from "../cargo";

describe("cargo", () => {
  it("should on target place point when hit place point", () => {
    initPlacePoints([{ x: 1, y: 1 }]);

    const cargo: Cargo = {
      x: 1,
      y: 1,
    };

    updateCargo(cargo);

    expect(cargo.onTargetPoint).toBeTruthy()
  });

  it("should reset on target point statue", () => {
    initPlacePoints([{ x: 1, y: 1 }]);

    const cargo: Cargo = {
      x: 1,
      y: 1,
    };

    updateCargo(cargo);

    cargo.x += 1

    updateCargo(cargo);

    expect(cargo.onTargetPoint).toBeFalsy()
  });
});

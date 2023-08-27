import { it, expect, describe } from "vitest";
import { createPlacePoints, setupPlacePoints } from "../placePoint";
import {
  handleHitPlacePoint,
  createCargos,
  setupCargos,
} from "../cargo";

describe("cargo", () => {
  it("should on target place point when hit place point", () => {
    setupPlacePoints(createPlacePoints([{ x: 1, y: 1 }]));
    const cargos = createCargos([{ x: 1, y: 1 }]);
    setupCargos(createCargos([{ x: 1, y: 1 }]));
    const cargo = cargos[0]
    handleHitPlacePoint(cargo);

    expect(cargo.onTargetPoint).toBeTruthy();
  });

  it("should reset on target point statue", () => {
    setupPlacePoints(createPlacePoints([{ x: 1, y: 1 }]));
    const cargos = createCargos([{ x: 1, y: 1 }]);
    setupCargos(createCargos([{ x: 1, y: 1 }]));

    const cargo = cargos[0]
    handleHitPlacePoint(cargo);
    cargo.x += 1;
    handleHitPlacePoint(cargo);

    expect(cargo.onTargetPoint).toBeFalsy();
  });
});

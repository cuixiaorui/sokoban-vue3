import { it, expect, describe } from "vitest";
import { initPlacePoints } from "../placePoint";
import { initCargos, getCargos, handleHitPlacePoint } from "../cargo";

describe("cargo", () => {
  it("should on target place point when hit place point", () => {
    initPlacePoints([{ x: 1, y: 1 }]);
    initCargos([{ x: 1, y: 1 }]);

    const cargo = getCargos()[0];
    handleHitPlacePoint(cargo);

    expect(cargo.onTargetPoint).toBeTruthy();
  });

  it("should reset on target point statue", () => {
    initPlacePoints([{ x: 1, y: 1 }]);
    initCargos([{ x: 1, y: 1 }]);

    const cargo = getCargos()[0];
    handleHitPlacePoint(cargo);
    cargo.x += 1;
    handleHitPlacePoint(cargo);

    expect(cargo.onTargetPoint).toBeFalsy();
  });
});

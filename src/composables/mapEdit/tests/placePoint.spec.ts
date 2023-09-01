import { it, expect, describe, beforeEach } from "vitest";
import { usePlacePoint } from "../placePoint";

describe("map edit placePoint", () => {
  beforeEach(() => {
    const { reset } = usePlacePoint();

    reset();
  });

  it("should remove the place point", () => {
    const { removePlacePoint, addPlacePoint, placePoints } = usePlacePoint();

    const placePoint = addPlacePoint(1, 1);

    removePlacePoint(placePoint);

    expect(placePoints.length).toBe(0);
  });
});

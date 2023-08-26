import { it, expect, describe } from "vitest";
import { initMap, Map } from "../map";
import { Floor } from "../Floor";
import { Empty } from "../Empty";
import { Wall } from "../Wall";

describe("Map", () => {
  it("should init map ", () => {
    const map = initMap(new Map([[0, 1, 2]]));
    expect(map.data).toEqual([[new Empty(), new Wall(), new Floor()]]);
  });
});

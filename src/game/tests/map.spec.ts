import { it, expect, describe } from "vitest";
import { createMap, getMap, setupMap } from "../map";
import { Floor } from "../Floor";
import { Wall } from "../Wall";

describe("Map", () => {
  it("should init map ", () => {
    setupMap(createMap([[1, 2]]));

    expect(getMap().data).toEqual([[new Wall(), new Floor()]]);
  });
});

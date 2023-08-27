import { it, expect, describe } from "vitest";
import { createMap, getMap, setupMap } from "../map";
import { Floor } from "../Floor";
import { Empty } from "../Empty";
import { Wall } from "../Wall";

describe("Map", () => {
  it("should init map ", () => {
    setupMap(createMap([[0, 1, 2]]));

    expect(getMap().data).toEqual([[new Empty(), new Wall(), new Floor()]]);
  });
});

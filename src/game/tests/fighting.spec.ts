import { it, expect, describe, beforeEach } from "vitest";
import { initMap, Map } from "../map";
import { getPlayer, initPlayer } from "../player";
import { getCargos, initCargos } from "../cargo";
import { Direction, fighting } from "../fighting";
import { initPlacePoints } from "../placePoint";
import { GameManager, getGameManager, initGameManager } from "../gameManager";

describe("fighting", () => {
  beforeEach(() => {
    initMap(
      new Map([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ])
    )

    initGameManager(new GameManager());
  });
  describe("move to left", () => {
    it("should move to left when next left position is not wall ", () => {
      initPlayer({ x: 2, y: 1 });
      fighting(Direction.left);

      expect(getPlayer().x).toBe(1);
    });

    it("should not move to left when next left position is wall ", () => {
      initPlayer({ x: 1, y: 1 });

      fighting(Direction.left);

      expect(getPlayer().x).toBe(1);
    });

    it("should move player and cargo", () => {
      initPlayer({ x: 3, y: 1 });
      initCargos([{ x: 2, y: 1 }]);

      fighting(Direction.left);

      const cargo = getCargos()[0];
      expect(cargo.x).toBe(1);
      expect(getPlayer().x).toBe(2);
    });

    it("should not move when cargo hit wall", () => {
      initPlayer({ x: 2, y: 1 });
      initCargos([{ x: 1, y: 1 }]);

      fighting(Direction.left);

      const cargo = getCargos()[0];
      expect(cargo.x).toBe(1);
      expect(getPlayer().x).toBe(2);
    });

    it("should not move when cargo hit cargo", () => {
      initPlayer({ x: 3, y: 1 });
      initCargos([
        { x: 2, y: 1 },
        { x: 1, y: 1 },
      ]);

      fighting(Direction.left);

      const firstCargo = getCargos()[0];
      const secondCargo = getCargos()[1];
      expect(firstCargo.x).toBe(2);
      expect(secondCargo.x).toBe(1);
      expect(getPlayer().x).toBe(3);
    });
  });

  describe("move to right", () => {
    it("should move to right when next right position is not wall ", () => {
      initPlayer({ x: 1, y: 1 });

      fighting(Direction.right);

      expect(getPlayer().x).toBe(2);
    });

    it("should not move to right when next right position is wall ", () => {
      initPlayer({ x: 3, y: 1 });

      fighting(Direction.right);

      expect(getPlayer().x).toBe(3);
    });

    it("should move cargo to right when next position is cargo", () => {
      initPlayer({ x: 1, y: 1 });
      initCargos([{ x: 2, y: 1 }]);

      fighting(Direction.right);

      const cargo = getCargos()[0];
      expect(cargo.x).toBe(3);
      expect(getPlayer().x).toBe(2);
    });

    it("should not move to right when cargo's next position is wall", () => {
      initPlayer({ x: 2, y: 1 });
      initCargos([{ x: 3, y: 1 }]);

      fighting(Direction.right);

      const cargo = getCargos()[0];
      expect(cargo.x).toBe(3);
      expect(getPlayer().x).toBe(2);
    });

    it("should not move when cargo hit cargo", () => {
      initPlayer({ x: 1, y: 1 });
      initCargos([
        { x: 2, y: 1 },
        { x: 3, y: 1 },
      ]);

      fighting(Direction.right);

      const firstCargo = getCargos()[0];
      const secondCargo = getCargos()[1];
      expect(firstCargo.x).toBe(2);
      expect(secondCargo.x).toBe(3);
      expect(getPlayer().x).toBe(1);
    });
  });

  describe("move to up", () => {
    it("should move to up when next up position is not wall ", () => {
      initPlayer({ x: 1, y: 2 });

      fighting(Direction.up);

      expect(getPlayer().y).toBe(1);
    });

    it("should not move to up when next up position is wall ", () => {
      initPlayer({ x: 1, y: 1 });

      fighting(Direction.up);

      expect(getPlayer().y).toBe(1);
    });
    it("should move cargo to up when next position is cargo", () => {
      initPlayer({ x: 1, y: 3 });
      initCargos([{ x: 1, y: 2 }]);

      fighting(Direction.up);

      const cargo = getCargos()[0];
      expect(cargo.y).toBe(1);
      expect(getPlayer().y).toBe(2);
    });

    it("should not move to up when cargo's next position is wall", () => {
      initPlayer({ x: 1, y: 2 });
      initCargos([{ x: 1, y: 1 }]);

      fighting(Direction.up);

      const cargo = getCargos()[0];
      expect(cargo.y).toBe(1);
      expect(getPlayer().y).toBe(2);
    });

    it("should not move when cargo hit cargo", () => {
      initPlayer({ x: 1, y: 3 });
      initCargos([
        { x: 1, y: 2 },
        { x: 1, y: 1 },
      ]);

      fighting(Direction.up);

      const firstCargo = getCargos()[0];
      const secondCargo = getCargos()[1];
      expect(firstCargo.y).toBe(2);
      expect(secondCargo.y).toBe(1);
      expect(getPlayer().y).toBe(3);
    });
  });

  describe("move to down", () => {
    it("should move to down when next down position is not wall ", () => {
      initPlayer({ x: 1, y: 1 });

      fighting(Direction.down);

      expect(getPlayer().y).toBe(2);
    });

    it("should not move to down when next down position is wall ", () => {
      initPlayer({ x: 1, y: 3 });

      fighting(Direction.down);

      expect(getPlayer().y).toBe(3);
    });

    it("should move cargo to down when next position is cargo", () => {
      initPlayer({ x: 1, y: 1 });
      initCargos([{ x: 1, y: 2 }]);

      fighting(Direction.down);

      const cargo = getCargos()[0];
      expect(cargo.y).toBe(3);
      expect(getPlayer().y).toBe(2);
    });

    it("should not move to down when cargo's next position is wall", () => {
      initPlayer({ x: 1, y: 2 });
      initCargos([{ x: 1, y: 3 }]);

      fighting(Direction.down);

      const cargo = getCargos()[0];
      expect(cargo.y).toBe(3);
      expect(getPlayer().y).toBe(2);
    });

    it("should not move when cargo hit cargo", () => {
      initPlayer({ x: 1, y: 1 });
      initCargos([
        { x: 1, y: 2 },
        { x: 1, y: 3 },
      ]);

      fighting(Direction.down);

      const firstCargo = getCargos()[0];
      const secondCargo = getCargos()[1];
      expect(firstCargo.y).toBe(2);
      expect(secondCargo.y).toBe(3);
      expect(getPlayer().y).toBe(1);
    });
  });

  describe("game statue", () => {
    it("should game win when all cargos hit all place points", () => {
      initPlayer({ x: 1, y: 1 });
      initCargos([{ x: 2, y: 1 }]);
      initPlacePoints([{ x: 3, y: 1 }]);

      fighting(Direction.right);

      expect(getGameManager().isWin).toBe(true);
    });
  });
});

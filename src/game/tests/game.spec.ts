import { it, expect, describe, beforeEach } from "vitest";
import { createMap, setupMap } from "../map";
import {
  createPlayer,
  getPlayer,
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  setupPlayer,
} from "../player";
import { createCargos, getCargos, setupCargos } from "../cargo";
import { createGame, getGame, setupGame } from "../game";
import { createPlacePoints, setupPlacePoints } from "../placePoint";

function initCargos(config: { x: number; y: number }[]) {
  setupCargos(createCargos(config));
}

function initPlayer(config: { x: number; y: number }) {
  setupPlayer(createPlayer(config));
}

function initPlacePoints(config: { x: number; y: number }[]) {
  setupPlacePoints(createPlacePoints(config));
}

describe("fighting", () => {
  beforeEach(() => {
    setupMap(
      createMap([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ])
    );

    setupGame(createGame({ level: 1 }));
  });
  describe("move to left", () => {
    it("should move to left when next left position is not wall ", () => {
      initPlayer({ x: 2, y: 1 });

      moveLeft();

      expect(getPlayer().x).toBe(1);
    });

    it("should not move to left when next left position is wall ", () => {
      initPlayer({ x: 1, y: 1 });

      moveLeft();

      expect(getPlayer().x).toBe(1);
    });

    it("should move player and cargo", () => {
      initPlayer({ x: 3, y: 1 });
      initCargos([{ x: 2, y: 1 }]);

      moveLeft();

      const cargo = getCargos()[0];
      expect(cargo.x).toBe(1);
      expect(getPlayer().x).toBe(2);
    });

    it("should not move when cargo hit wall", () => {
      initPlayer({ x: 2, y: 1 });
      initCargos([{ x: 1, y: 1 }]);

      moveLeft();

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

      moveLeft();

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

      moveRight();

      expect(getPlayer().x).toBe(2);
    });

    it("should not move to right when next right position is wall ", () => {
      initPlayer({ x: 3, y: 1 });

      moveRight();

      expect(getPlayer().x).toBe(3);
    });

    it("should move cargo to right when next position is cargo", () => {
      initPlayer({ x: 1, y: 1 });
      initCargos([{ x: 2, y: 1 }]);

      moveRight();

      const cargo = getCargos()[0];
      expect(cargo.x).toBe(3);
      expect(getPlayer().x).toBe(2);
    });

    it("should not move to right when cargo's next position is wall", () => {
      initPlayer({ x: 2, y: 1 });
      initCargos([{ x: 3, y: 1 }]);

      moveRight();

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

      moveRight();

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

      moveUp();

      expect(getPlayer().y).toBe(1);
    });

    it("should not move to up when next up position is wall ", () => {
      initPlayer({ x: 1, y: 1 });

      moveUp();

      expect(getPlayer().y).toBe(1);
    });
    it("should move cargo to up when next position is cargo", () => {
      initPlayer({ x: 1, y: 3 });
      initCargos([{ x: 1, y: 2 }]);

      moveUp();
      const cargo = getCargos()[0];
      expect(cargo.y).toBe(1);
      expect(getPlayer().y).toBe(2);
    });
    it("should not move to up when cargo's next position is wall", () => {
      initPlayer({ x: 1, y: 2 });
      initCargos([{ x: 1, y: 1 }]);

      moveUp();

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

      moveUp();
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

      moveDown();

      expect(getPlayer().y).toBe(2);
    });

    it("should not move to down when next down position is wall ", () => {
      initPlayer({ x: 1, y: 3 });

      moveDown();

      expect(getPlayer().y).toBe(3);
    });

    it("should move cargo to down when next position is cargo", () => {
      initPlayer({ x: 1, y: 1 });
      initCargos([{ x: 1, y: 2 }]);

      moveDown();

      const cargo = getCargos()[0];
      expect(cargo.y).toBe(3);
      expect(getPlayer().y).toBe(2);
    });

    it("should not move to down when cargo's next position is wall", () => {
      initPlayer({ x: 1, y: 2 });
      initCargos([{ x: 1, y: 3 }]);

      moveDown();

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

      moveDown();

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

      moveRight();

      expect(getGame().isWin).toBe(true);
    });
  });
});

import { it, expect, describe, beforeEach, beforeAll } from "vitest";
import {
  moveLeft,
  initPlayer,
  getPlayer,
  moveRight,
  moveUp,
  moveDown,
} from "../player";
import { initMap } from "../map";
import { initCargos, getCargos } from "../cargo";

describe("Player", () => {
  describe("move and wall collision", () => {
    beforeEach(() => {
      initMap([
        [1, 1, 1, 1],
        [1, 2, 2, 1],
        [1, 2, 2, 1],
        [1, 1, 1, 1],
      ]);
    });

    describe("move left", () => {
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
    });

    describe("move right", () => {
      it("should move to right when next right position is not wall ", () => {
        initPlayer({ x: 1, y: 1 });

        moveRight();

        expect(getPlayer().x).toBe(2);
      });

      it("should not move to right when next right position is wall ", () => {
        initPlayer({ x: 2, y: 1 });

        moveRight();

        expect(getPlayer().x).toBe(2);
      });
    });

    describe("move up", () => {
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
    });

    describe("move down", () => {
      it("should move to down when next down position is not wall ", () => {
        initPlayer({ x: 1, y: 1 });

        moveDown();

        expect(getPlayer().y).toBe(2);
      });

      it("should not move to down when next down position is wall ", () => {
        initPlayer({ x: 1, y: 2 });

        moveDown();

        expect(getPlayer().y).toBe(2);
      });
    });
  });

  describe("cargo", () => {
    beforeAll(() => {
      initMap([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ]);
    });
    it("should move cargo to left when next position is cargo", () => {
      initPlayer({ x: 3, y: 1 });
      initCargos([{ x: 2, y: 1 }]);

      moveLeft();

      const cargo = getCargos()[0];
      expect(cargo.x).toBe(1);
      expect(getPlayer().x).toBe(2);
    });

    it("当向左侧移动的时候 发现箱子的左侧是墙了  那么 player 和 cargo 都不应该移动了", () => {
      initPlayer({ x: 2, y: 1 });
      initCargos([{ x: 1, y: 1 }]);

      moveLeft();

      const cargo = getCargos()[0];
      expect(cargo.x).toBe(1);
      expect(getPlayer().x).toBe(2);
    });

    it.todo("如果箱子的左侧是箱子的话 那么也不可以移动");
  });
});

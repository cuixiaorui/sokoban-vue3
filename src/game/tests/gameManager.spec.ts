import { it, expect, describe } from "vitest";
import { GameManager } from "../gameManager";
import { gameData } from "../gameData.ts";

describe("GameManager", () => {
  it("should load game data", () => {
    const gameManager = new GameManager({
      gameData,
      level: 1,
    });

    gameManager.startGame();

    // 验证所有的数据是否进行了 init
    //     expect();
  });
});

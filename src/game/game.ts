import { isAllCargoOnTarget, updateCargos } from "./cargo";
import { updateMap } from "./map";
import { updatePlacePoints } from "./placePoint";
import { updatePlayer } from "./player";
import { gameDatas } from "./gameData";

export interface Game {
  currentLevel: number;
  isWin: boolean;
}

let _game: Game;
export function setupGame(game: Game) {
  _game = game;
}

export function createGame(config: { level: number }): Game {
  return {
    currentLevel: config.level,
    isWin: false,
  };
}

export function getGame() {
  return _game;
}

export function startGame() {
  updateGame();
}

export function startNextLevel() {
  _game.currentLevel += 1;
  resetGame();
  updateGame();
}

function resetGame() {
  _game.isWin = false;
}

function updateGame() {
  const { player, map, cargos, placePoints } =
    gameDatas[_game.currentLevel - 1];

  // playerConfig
  // 上面的这些数据 都是 config
  updatePlayer(player);
  updateMap(map);
  updateCargos(cargos);
  updatePlacePoints(placePoints);
}

export function judgeGameWin() {
  _game.isWin = isAllCargoOnTarget();
}

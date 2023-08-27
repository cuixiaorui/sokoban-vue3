import { isAllCargoOnTarget, updateCargos } from "./cargo";
import { updateMap } from "./map";
import { updatePlacePoints } from "./placePoint";
import { updatePlayer } from "./player";
import { gameDatas } from "./gameData";
import { reactive } from "vue";

interface Game {
  currentLevel: number;
  isWin: boolean;
}

let _game = reactive<Game>({
  currentLevel: 1,
  isWin: false,
});

export function initGame(gameConfig: Game) {
  _game = gameConfig;
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

  updatePlayer(player);
  updateMap(map);
  updateCargos(cargos);
  updatePlacePoints(placePoints);
}

export function judgeGameWin() {
  _game.isWin = isAllCargoOnTarget();
}

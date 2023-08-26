import { getCargos, initCargos, updateCargos } from "./cargo";
import { type GameData } from "./gameData";
import { getMap, initMap, Map } from "./map";
import { initPlacePoints } from "./placePoint";
import { initPlayer, updatePlayer } from "./player";
import { reactive } from "vue";
import { gameDatas } from "./gameData";

export class GameManager {
  isWin: boolean = false;
  currentLevel: number;
  currentGameData: GameData;

  constructor(level: number) {
    this.currentLevel = level;

    this.currentGameData = gameDatas[this.currentLevel - 1];

    const { player, map, cargos, placePoints } = this.currentGameData;

    initPlayer(reactive(player));
    initMap(reactive(new Map(map)));
    initCargos(reactive(cargos));
    initPlacePoints(reactive(placePoints));

    initGameManager(this);
  }

  judgeIsWin() {
    console.log(this)
    this.isWin = getCargos().every((cargo) => {
      return !!cargo.onTargetPoint;
    });

    console.log(this.isWin);
  }

  nextLevel() {
    this.currentLevel++;

    this.currentGameData = gameDatas[this.currentLevel - 1];

    const { player, map, cargos, placePoints } = this.currentGameData;

    updatePlayer(player)
    getMap().update(map)
    updateCargos(cargos)
    // initPlacePoints(reactive(placePoints));
  }
}

let _gameManager: GameManager;
export function initGameManager(gameManager: GameManager) {
  _gameManager = gameManager;
}

export function getGameManager() {
  return _gameManager;
}

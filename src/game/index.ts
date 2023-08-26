import { initCargos, type Cargo } from "./cargo";
import { initMap, Map } from "./map";
import { initPlayer, type Player } from "./player";
import { initPlacePoints, type PlacePoint } from "./placePoint";
import { initGameManager } from "./gameManager";

export function initGame(
  _player: Player,
  _map: Map,
  cargos: Cargo[],
  placePoints: PlacePoint[],
  gameManager: any
) {
  initPlayer(_player);
  initMap(_map);
  initCargos(cargos);
  initPlacePoints(placePoints);
  initGameManager(gameManager)
}

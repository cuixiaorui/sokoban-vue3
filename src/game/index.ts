import { initCargos, type Cargo } from "./cargo";
import { initMap } from "./map";
import { initPlayer, type Player } from "./player";
import {initPlacePoints, type PlacePoint} from './placePoint';

export function initGame(_player: Player, _map: number[][], cargos: Cargo[], placePoints: PlacePoint[]) {
  initPlayer(_player);
  initMap(_map);
  initCargos(cargos);
  initPlacePoints(placePoints)
}

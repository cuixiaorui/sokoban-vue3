import { initCargos, type Cargo } from "./cargo";
import { initMap } from "./map";
import { initPlayer, type Player } from "./player";

export function initGame(_player: Player, _map: number[][], cargos: Cargo[]) {
  initPlayer(_player);
  initMap(_map);
  initCargos(cargos);
}

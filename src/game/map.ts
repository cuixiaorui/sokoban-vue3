import { reactive } from "vue";
import { Empty } from "./Empty";
import { Floor } from "./Floor";
import { Wall } from "./Wall";
import { Position } from "./position";

export type Element = Empty | Floor | Wall;

interface Map {
  data: Element[][];
}

let _map: Map = reactive({} as Map);

export function initMap(rawMap: number[][]) {
  updateMap(rawMap)
}

export function getMap() {
  return _map;
}

export function updateMap(rawMap: number[][]) {
  _map.data = convertRawMap(rawMap);
}

export function getElementByPosition(position: Position) {
  return _map.data[position.y][position.x];
}

// 0. 空白
// 1. 墙
// 2. 地板
function convertRawMap(rawMap: number[][]) {
  const newMap: Element[][] = [];
  rawMap.forEach((row, i) => {
    newMap[i] = [];
    row.forEach((col, j) => {
      if (col === 0) {
        newMap[i][j] = new Empty();
      } else if (col === 1) {
        newMap[i][j] = new Wall();
      } else if (col === 2) {
        newMap[i][j] = new Floor();
      }
    });
  });

  return newMap;
}

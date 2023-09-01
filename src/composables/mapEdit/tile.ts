import floorImg from "../../assets/floor.png";
import WallImg from "../../assets/wall.png";
import { type EditElement } from "./editElement";

export enum TileType {
  wall = 1,
  floor = 2,
}

interface TileEditElement extends EditElement {
  type: TileType;
}

export const tileEditElements: TileEditElement[] = [
  {
    imgSrc: floorImg,
    title: "地板",
    type: TileType.floor,
  },
  {
    imgSrc: WallImg,
    title: "墙",
    type: TileType.wall,
  },
];

export function isTile(element: EditElement): element is TileEditElement {
  return element.type === TileType.floor || element.type === TileType.wall;
}

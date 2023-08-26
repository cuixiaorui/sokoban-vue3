export interface GameData {
  name: string;
  map: number[][];
  player: {
    x: number;
    y: number;
  };
  cargos: { x: number; y: number }[];
  placePoints: { x: number; y: number }[];
}

export const gameDatas: GameData[] = [
  {
    name: "关卡一",
    map: [
      [0, 0, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 2, 2, 2, 1, 0],
      [1, 2, 2, 2, 2, 2, 1, 0],
      [1, 1, 1, 2, 2, 2, 1, 0],
      [1, 2, 1, 1, 2, 2, 1, 0],
      [1, 2, 1, 2, 2, 2, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ],
    player: {
      x: 2,
      y: 2,
    },
    cargos: [{ x: 3, y: 2 }],
    placePoints: [{ x: 5, y: 3 }],
  },
  {
    name: "关卡二",
    map: [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 1, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ],
    player: {
      x: 2,
      y: 2,
    },
    cargos: [{ x: 3, y: 2 }],
    placePoints: [{ x: 5, y: 3 }],
  },
];

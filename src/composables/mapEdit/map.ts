import { reactive } from "vue";
import { TileType } from "./tile";
import { generateId } from "../../utils/id";

type MapType = TileType | undefined;
export interface MapBlock {
  type: MapType;
  x: number;
  y: number;
  id: number;
}

interface Map {
  row: number;
  col: number;
  data: MapBlock[][];
}

function createMapBlock(x: number, y: number, type?: MapType): MapBlock {
  return {
    type,
    x,
    y,
    id: generateId(),
  };
}

const map = reactive<Map>({
  row: 0,
  col: 0,
  data: [],
});

export function useMap() {
  function updateMapCol(newCol: number) {
    const oldCol = map.col;
    const addColCount = newCol - oldCol;

    // 添加列
    if (addColCount > 0) {
      let col = map.data[0].length;

      for (let i = 0; i < map.data.length; i++) {
        for (let j = 0; j < addColCount; j++) {
          const block = createMapBlock(col + j, i);
          map.data[i].push(block);
        }
      }
    } else if (addColCount < 0) {
      // 删除
      for (let i = 0; i < map.data.length; i++) {
        for (let j = 0; j < Math.abs(addColCount); j++) {
          map.data[i].pop();
        }
      }
    }

    map.col = newCol;
  }

  function updateMapRow(newRow: number) {
    const oldRow = map.row;
    const addRowCount = newRow - oldRow;

    // 添加行
    if (addRowCount > 0) {
      for (let i = 0; i < addRowCount; i++) {
        // 先创建一行
        const newRow: any = [];
        map.data.push(newRow);

        // 在把新的行填满
        let col = map.data[i].length;

        for (let j = 0; j < col; j++) {
          const block = createMapBlock(j, map.data.length - 1);
          newRow.push(block);
        }
      }
    } else if (addRowCount < 0) {
      // 删除
      for (let i = 0; i < Math.abs(addRowCount); i++) {
        // 删除最后一行
        map.data.pop();
      }
    }

    map.row = newRow;
  }

  function initMap() {
    for (let i = 0; i < map.row; i++) {
      map.data[i] = [];
      for (let j = 0; j < map.col; j++) {
        const block = createMapBlock(j, i);
        map.data[i].push(block);
      }
    }
  }

  return {
    map,
    initMap,
    updateMapCol,
    updateMapRow,
  };
}

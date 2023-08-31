import { reactive, ref } from "vue";
import { type EditElement } from "./editElement";
import keeperImgSrc from "../../assets/keeper.png";

export interface Keeper {
  x: number;
  y: number;
}

export const keeperEditElement: EditElement = {
  title: "玩家",
  type: "keeper",
  imgSrc: keeperImgSrc,
};

const isShowKeeper = ref(false);
const keeper = reactive<Keeper>({
  x: 0,
  y: 0,
});

export function useKeeper() {
  function showKeeper() {
    isShowKeeper.value = true;
  }

  function hideKeeper() {
    isShowKeeper.value = false;
  }
  return {
    keeper,
    isShowKeeper,
    showKeeper,
    hideKeeper,
  };
}

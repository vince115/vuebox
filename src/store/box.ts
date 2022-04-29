import { defineStore } from "pinia";

export const useBoxStore = defineStore({
  id: "box", // id必填，且需要唯一
  state: () => {
    // let position: number[] = [50, 51];
    // return position
    return { x: 50, y: 51 };
  },
  getters: {
    xyPosition: (state) => {
      let x: any = state.x;
      let y: any = state.y;
      //   let position: number[] = [state.x, state.y];
      //  return {position}
      return { x, y };
    },
  },
  actions: {
    updateBox(x: any, y: any) {
      this.x = x;
      this.y = y;
      return { x, y };
    },
  },
});



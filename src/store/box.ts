import { defineStore } from 'pinia'

export const useBoxStore = defineStore({
  id: 'box', // id必填，且需要唯一
  state: () => {
    return {
      x: 50,
      y: 50
    }
  },
  getters: {
    // fullBox: (state) => {
    //   return [ state.x + 'px', state.y + 'px' ]
    // },
    xyPosition:(state)=>{
        return [state.x, state.y]
    }

  },
  actions: {
    updateBox(x:Number, y:Number) {
      this.x = x
      this.y = y
      //return [x,y]
    }
  }
})
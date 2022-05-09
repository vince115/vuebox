import { defineStore } from "pinia";
export const useErrorStore = defineStore({
    id: 'error', // id必填，且需要唯一
    state: () => {
      return {
        errMsg: ''
      }
    },
    getters: {
        getMsg: (state) => {
         let errMsg:any = state.errMsg
         return  errMsg 
      }
    },
    actions: {
      updateErr(errMsg:any) {
        this.errMsg = errMsg
         
      }
    }
  })
  
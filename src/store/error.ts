import { defineStore } from "pinia";
export const useErrorStore = defineStore({
    id: 'error', // id必填，且需要唯一
    state: () => {
      return {
        errMsg_username: '',
        errMsg_password: ''
      }
    },
    getters: {
      getMsg_username: (state) => {
         let errMsg_username:any = state.errMsg_username
         return errMsg_username
      },
      getMsg_password: (state) => {
        let errMsg_password:any = state.errMsg_password
        return errMsg_password
     },
    },
    actions: {
      updateErr_username(errMsg_username:any) {
        this.errMsg_username = errMsg_username
      },
      updateErr_password(errMsg_password:any) {
        this.errMsg_password = errMsg_password
      },
    }
  })
  
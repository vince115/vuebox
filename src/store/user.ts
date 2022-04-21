import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '張三'
    }
  },
  getters: {
    fullName: (state) => {
      return state.name + '豐'
    }
  },
  actions: {
    updateName(name:string) {
      this.name = name
    }

    // async login(account, pwd) {
    //     const { data } = await api.login(account, pwd)
    //     this.setData(data) // 調用另一個 action 的方法
    //     return data
    // },
    // setData(data) {
    //     console.log(data)
    // }
  }
})
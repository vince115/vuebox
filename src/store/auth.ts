import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth", // id必填，且需要唯一
  state: () => {   
    return { 
        username: '', 
        password: '',
        isAuth: false,
        token: '1234',
    }
  },
  getters: {
    getisAuth: (state) => state.isAuth,
    getUser: (state) => state.username
  },
  actions: {
    setAuth(isAuth:boolean) {
      this.isAuth = isAuth;
    },
    setUser(user:any) {
      this.user = user;
    },  
  },
});

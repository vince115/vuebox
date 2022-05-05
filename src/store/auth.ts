import { defineStore } from 'pinia'
import { login } from '../api/auth'
import axios from 'axios'

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {   
    return {
        token: null,
        username: '',
        password: '',
        isLogin: false
    }
  },
  persist:{
    key:'token',
    paths:['token']
  },
  getters: {
    // getToken:(state)=>{
    //   return state.token
    // },
    // getIsLogin:(state) =>{
    //   return state.isLogin
    // }
  },
  actions: {
    async login(params:object){
      //get
      await axios.get('api');  
      //post
      console.log('params',params);
      const axiosResponse = await axios.post('api/login', params)
      // let myparams = JSON.parse(JSON.stringify(params))
      // console.log('params.username',myparams.username)
      // this.username = myparams.username
      
      if (axiosResponse){
        //const token = `${axiosResponse.token}`;
        console.log('axiosResponse',axiosResponse);
        console.log('axiosResponse.isLogin',axiosResponse.data.isLogin);
        this.isLogin = axiosResponse.data.isLogin
      }


    },
    async logout(){
      //post
      const axiosResponse = (await axios.post("api/logout")).data;
      if (axiosResponse){
        localStorage.removeItem("isLogin");
        localStorage.removeItem("token");
        this.$reset();
      } 
    },
    // async ftechUser() {
    //   this.user = (await axios.get("api/me")).data;
    //   this.loggedIn = true;
    // }, 
    setIsLogin(state:any) {
      this.state = state
    }
  

  }

});

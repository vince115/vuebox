import { defineStore } from 'pinia'
import { apiAuth }  from '../api/auth'
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
    // token:(state)=>{
    //  return state.token
    // },
    getIsLogin:(state) =>{
      return state.isLogin
    }
  },
  actions: {
    async toLogin(params:any){
      console.log(622);
      //get
      await axios.get('api'); 

      //post
      //await apiAuth(params);
      console.log('params',params);
      const axiosResponse = await axios.post('api/login', params)
      // // // let myparams = JSON.parse(JSON.stringify(params))
      // // // console.log('params.username',myparams.username)
      if (axiosResponse){
      // // const token = `${axiosResponse.token}`;
      // //   console.log('axiosResponse',axiosResponse);
      // //   console.log('axiosResponse.isLogin',axiosResponse.data.isLogin);
         localStorage.setItem("token",'Bearer ohmytoken');
         this.isLogin = axiosResponse.data.isLogin
      }
    },
    
    async Logout(){
      console.log(333);
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

import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {   
    return {
         isLogin: localStorage.getItem('token')?true:false,
        // isLogin: false,
        user: null,
    }
  },
  getters: {
    isLogin:(state) =>{
      return state.isLogin
    }
  },
  actions: {
    async login(params:object){
      //get
      await axios.get('api'); 
      
      //post
      const axiosResponse = await axios.post('api/login', params)
      //console.log('params',params)
      if (axiosResponse){
        //const token = `${axiosResponse.token}`;   
        console.log('axiosResponse',axiosResponse);  
        //axiosResponse.headers.common["Authorization"] = token;
       
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
    async ftechUser() {
      this.user = (await axios.get("api/me")).data;
      this.loggedIn = true;
    }, 
    // updateLogin(state:any){
    //   this.isLogin = state
    // } 

  }

});

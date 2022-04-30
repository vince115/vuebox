import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {   
    return {
        isLogin: localStorage.getItem('token')?true:false,
        user: null,
    }
  },
  getters: {},
  actions: {
    async login(params:object){
      //get
      await axios.get('api'); 
      //post
 
      console.log('params', params);
      //let person = new Proxy({}, params);
      //console.log('person.name', person.username);
      const axiosResponse = await axios.post('api/login', params)
      if (axiosResponse){
        const token = `Bearer ${axiosResponse.token}`;
        localStorage.setItem('token', token);
        axios.defaults.headers.common["Authorization"] = token;
       
      }
    },
    async logout(){
      //post
      const axiosResponse = (await axios.post("api/logout")).data;
      if (axiosResponse){
        localStorage.removeItem("token");
        this.$reset();
      } 
    },
    async ftechUser() {
      this.user = (await axios.get("api/me")).data;
      this.loggedIn = true;
    }  

  }

});

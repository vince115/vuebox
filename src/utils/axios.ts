import axios from "axios";

//import Vue from 'vue';
//const url = "http://127.0.0.1:8000/api";
//const   myToken =authStore.getToken;
// export default axios.create({
//   url,
//   headers:{"Accept":"application/json"}, 
// });

// import axios from 'axios'
//import { useAuthStore } from '../store/auth'

//export async function isLoggedIn() {
//  axios.post("/api/account/isLoggedIn")
//  .then(response => {
    
//  });
// }

const isDevelopmentMode = process.env.NODE_ENV === 'development';
const backendUrl = (isDevelopmentMode)
  ? 'http://localhost:3000/api'
  : '/backend/';

  const instance = axios.create({
    baseURL: backendUrl,
    withCredentials: isDevelopmentMode,
    headers: {
      "Content-Type": "application/json",
    },
  });
 
  //Create

  //Read

  //Upadate

  //Delete
  
  export default instance  

// axios.interceptors.request.use((request) => {
//   //const authStore = useAuthStore()
//   //request.headers.Authorization = authStore.token
//   console.log('Adding token to header', authStore.token)
// })


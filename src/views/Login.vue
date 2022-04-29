<script lang="ts">
import { useAuthStore } from '../store/auth'
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default defineComponent({
  name: 'Login',
  data() {
    return{
        username: "",
        password: "",
    }
  },
  setup(){
    // const initialState = {
    //   username: "",
    //   password: ""
    // };
    // const form = reactive({ ...initialState });
    //
  const form = reactive(
  {
    username: "",
    password: "",
  });
    const authStore = useAuthStore();
    console.log('form.username', form.username);
   // console.log('username2',data);
    const setStorageToken = (token) =>{
      localStorage.setItem('token',token);
    } 
    const getTokenAuth = ()=>{

      if(localStorage.getItem('token')){
      authStore.setAuth(true);
      }
    }
   
    //
    const router = useRouter();
    const goToHome = () =>{
      router.push({
        name:'Home'
      });
    }
    //
    const submitAuth = () => {
      // 判斷帳密
      console.log('form.username', form.username);
      //console.log('username', username);
      //axios
      if (form.username === '' || form.password === ''){
        alert('帳號或密碼不能為空');
      } else {
        axios({
          method: 'post',
          url: '/login',
          data:{
            username: form.username,
            password: form.password
          }
        }).then(res => {
          console.log(res.data);
          //給token

        }).catch(error => {
          alert('賬號或密碼錯誤');
          console.log(error);
        });
      }

      if(authStore.isAuth === true){
        //成功登入 導入首頁
        console.log('Login Success');
        goToHome();
      }else{
        //NavigationGuards阻擋  回登入頁
        console.log('Login Fail');
      }

    }

    return {
      form,
      submitAuth,
    }
  }
})

</script>
<template>
  <div class="login" id="">

  <form class="form">
    <input type="text" id="username" placeholder="username" v-model="username"  autocomplete="username"/>
    <input type="password" id="password" placeholder="password" v-model="password" autocomplete="current-password" />
    <button type="submit" class="button" @click.prevent="submitAuth">login</button>
    <p class="message">Not registered? <a href="#">Create an account</a></p>
  </form>

  </div>
</template>










<style>
button.button{
  @apply px-4 py-2 m-0 text-white bg-cyan-500 rounded
}

.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}

</style>
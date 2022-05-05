<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import { reg_email, reg_pwd } from "../utils/validate"

// const form = ref({});
const loading = ref(false);
const router = useRouter();
const userInfo = JSON.parse(JSON.stringify(reactive({ username:'',password:'' })))
const onValidate = (userInfo:any, key:string) => {
  
  let checkEmail = reg_email(userInfo.username)
  let checkPWD = reg_pwd(userInfo.password)
  const arr =[checkEmail, checkPWD]
  // 驗證未通過則顯示msg內的訊息
  switch (key) {
    case 'email':
          checkEmail == true ? userInfo.username = userInfo.username : userInfo.username = 'Email格式錯誤或未輸入'
          break
    case 'pwd':
          checkPWD == true ? userInfo.password = userInfo.password : userInfo.password = '密碼格式錯誤或未輸入'
          break
  }
  
  let result = arr.find((item) => {
        return item == false // 尋找array中的false
      })
  // result == undefined ? this.submitDisabled = false : this.submitDisabled = true
  console.log('form: ', arr, result)

}

const onLogin = async(userInfo:object)=>{
  console.log('userInfo2',userInfo)
  loading.value = true;
  try{
    await useAuthStore().login(userInfo)

  }catch(error){ 
  //    
  }
   router.push({ name: "Home" });
}


</script>

<template>
  <div class="login">
  <form @submit.prevent="onLogin(userInfo)" class="form">
    <input type="text" id="username" placeholder="username" v-model="userInfo.username" @change="onValidate(userInfo, 'email')" autocomplete="username"/>
    <input type="password" id="password" placeholder="password" v-model="userInfo.password" @change="onValidate(userInfo, 'pwd')" autocomplete="current-password" />
    <button type="submit" class="button">login</button>
    <p class="message">Not registered? <a href="#">Create an account</a></p>
  </form>
  </div>
</template>

<style>
button.button{
  @apply m-0 px-4 py-2 text-white bg-cyan-500 rounded
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 80px auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6);
  @apply rounded
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
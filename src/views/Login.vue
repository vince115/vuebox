<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
// import { nextTick } from 'vue'
import { reg_email, reg_pwd } from "../utils/validate"

const loading = ref(false);
const router = useRouter();

const userInfo = JSON.parse(JSON.stringify(reactive({ 
  username: { value: '', msg: '' },
  password: { value: '', msg: '' }
})))


const onValidate = (userInfo:any, key:string) => {
  
  let checkEmail = reg_email(userInfo.username.value)
  let checkPWD = reg_pwd(userInfo.password.value)
  const arr =[checkEmail, checkPWD]
  // 驗證未通過則顯示msg內的訊息
  switch (key) {
    case 'email':
          checkEmail == true ? userInfo.username.msg = '' : userInfo.username.msg = 'Email格式錯誤或未輸入'
          break
    case 'pwd':
          checkPWD == true ? userInfo.password.msg = '' : userInfo.password.msg = '密碼格式錯誤或未輸入'
          break
  }
  let result = arr.find((item) => {
        return item == false // 尋找array中的false
      })
  // result == undefined ? this.submitDisabled = false : this.submitDisabled = true
  console.log('form: ', arr, result)
  
}

const onLogin = async(userInfo:any)=>{
  console.log(111)
  loading.value = true;
  try{
    await useAuthStore().toLogin(userInfo)
    console.log(123)
    router.push({ name: "Home" });
  }catch(error){ 
    console.log(104)
    return error
  }
   
}


</script>

<template>
  <div class="login">
  <form @submit.prevent="onLogin(userInfo)" class="form">
    <input type="text" id="username" placeholder="username" v-model="userInfo.username.value"  @change="onValidate(userInfo, 'email')" autocomplete="username.value"/>
    <p class="text-xs text-red-500 h-7">{{  userInfo.username.msg }}</p>
<!-- <v-alert   prominent density="compact"
      type="error"
      variant="outlined">I'm Alert Message</v-alert> -->
    <input type="password" id="password" placeholder="password" v-model="userInfo.password.value" @change="onValidate(userInfo, 'pwd')" autocomplete="current-password" />
   
    <p class="text-xs text-red-500 h-7">{{ userInfo.password.msg }}</p>
    <button type="submit" class="button">login</button>
    <p class="message">Not registered? <a href="#">Create an account</a></p>
  </form>
  </div>
</template>

<style>
button.button{
  @apply m-0 px-4 py-2 text-white bg-cyan-500 rounded
}
.form{
  @apply 
  relative 
  rounded
  z-10
  bg-zinc-50
  max-w-[360px]
  mt-[80px]
  mx-auto
  mb-[100px]
  p-[45px] 
  text-center
  border-[1px]
  border-zinc-200
  shadow-lg
}
.form input {
  @apply m-0 
  p-2.5
  w-full
  bg-[#f2f2f2] 
  box-border
  text-base
  border-[1px]
  border-zinc-100
} 
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  @apply mt-3 p-3
  w-full
  text-base
}
.form button:hover,
.form button:active,
.form button:focus {
  @apply bg-[#43A047]
}
.form .message {
  @apply m-0 mb-4
  text-[#b3b3b3]
  text-xs
}
.form .message a {
  @apply text-[#4CAF50]
  no-underline
} 
.form .register-form {
  @apply object-none
}
.container {
  @apply relative
  z-10
  m-0 mx-auto
  max-w-[300px]
}
.container:before, .container:after {
  @apply block clear-both content-none
}
.container .info {
  @apply mx-auto my-12 text-center
}
.container .info h1 {
  @apply m-0 mb-4 p-0
  text-base
  text-[#1a1a1a]
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
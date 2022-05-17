<script setup lang="ts">
import { ref, reactive, watch, watchEffect, defineComponent } from "vue"
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'
import { useErrorStore } from '../store/error'
import { reg_email, reg_pwd } from "../utils/validate"
  
const loading = ref(false);
const router = useRouter();
const userInfo = JSON.parse(JSON.stringify(reactive({ 
  account: { value: '', msg: '' },
  password: { value: '', msg: '' }
})))

const onValidate = (userInfo:any, key:string) => {
  let checkEmail = reg_email(userInfo.account.value)
  let checkPWD = reg_pwd(userInfo.password.value)
  const arr =[checkEmail, checkPWD]
  // 驗證未通過則顯示msg內的訊息
  switch (key) {
    case 'email':
          checkEmail == true ? userInfo.account.msg = '' : userInfo.account.msg = 'Email格式錯誤或未輸入'
          break
    case 'pwd':
          checkPWD == true ? userInfo.password.msg = '' : userInfo.password.msg = '密碼格式錯誤或未輸入'   
          break
  }
  let result = arr.find((item) => {
      return item == false // 尋找array中的false
  })
  const errStore = useErrorStore()
  watchEffect(() => errStore.updateErr_account(userInfo.account.msg));
  watchEffect(() => errStore.updateErr_password(userInfo.password.msg));
   return {
    userInfo
  }
}

const onLogin = async(userInfo:any)=>{
  loading.value = true;
  try{
    await useAuthStore().toLogin(userInfo)
    router.push({ name: "Home" });
  }catch(error){ 
    return error
  }
}
</script>

<template>
  <div class="login">
  <form @submit.prevent="onLogin(userInfo)" class="form">
    <input type="text" id="account" placeholder="account" v-model="userInfo.account.value"  @change="onValidate(userInfo, 'email')" autocomplete="account.value"/>
    <p class="pt-1 text-xs text-red-500 h-7">{{ useErrorStore().getMsg_account }}</p>
    <input type="password" id="password" placeholder="password" v-model="userInfo.password.value" @change="onValidate(userInfo, 'pwd')" autocomplete="current-password" />
    <p class="pt-1 text-xs text-red-500 h-7">{{ useErrorStore().getMsg_password }}</p>
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
  @apply text-[#4d4d4d]
  text-base
}
.container .info span a {
  @apply text-[#000000] no-underline
}
.container .info span .fa {
  @apply text-[#EF3B3A]
}
</style>
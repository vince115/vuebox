<script lang="ts" setup>
import { useUserStore } from '../store/user'

import { useRouter } from "vue-router";
import { useAuthStore } from '../store/auth'

const userStore = useUserStore()
userStore.updateName('李四')

const router = useRouter();
const authStore = useAuthStore()
if(authStore.getIsLogin !== true){
   router.push({ name: "Login" });
}
</script>

<template>
  <!-- <div>{{ userStore.name }}</div> -->
  <div>{{ userStore.fullName }}</div>
  <div class="mock-service-worker">
    <button @click="handleLogin">login</button>
    <button @click="handleGetUser">get user</button>
  </div>
</template>


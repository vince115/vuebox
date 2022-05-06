<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from '../store/auth'
const router = useRouter();
const authStore = useAuthStore()
if(authStore.getIsLogin !== true){
   router.push({ name: "Login" });
}
</script>
   
<template>
  <div class="home">
    <h1>Welcome to Home</h1>

  </div>
</template>


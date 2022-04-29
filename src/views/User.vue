<template>
  <!-- <div>{{ userStore.name }}</div> -->
  <div>{{ userStore.fullName }}</div>
  <div class="mock-service-worker">
    <button @click="handleLogin">login</button>
    <button @click="handleGetUser">get user</button>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '../store/user'
const userStore = useUserStore()
userStore.updateName('李四')


</script>
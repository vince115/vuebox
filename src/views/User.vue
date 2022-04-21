<template>
  <!-- <div>{{ userStore.name }}</div> -->
  <div>{{ userStore.fullName }}</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '../store/user'
const userStore = useUserStore()
userStore.updateName('李四')
//userStore.name = '李四'
</script>
<script setup lang="ts">
import Navigation from './components/Navbar.vue'
import { useBoxStore } from './store/box'
import { useAuthStore } from './store/auth'

const boxStore = useBoxStore()
const authStore = useAuthStore()

</script>

<template>
  <Navigation msg="Hello Vue 3 + TypeScript + Vite" />
  <div v-show="authStore.getIsLogin"> x: {{ boxStore.xyPosition.x.x}}, y: {{ boxStore.xyPosition.y.y}}</div>
 
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/box">Box</router-link> | 
    <router-link to="/user">User</router-link> |    
    <router-link to="/test">Test</router-link>
  </div>-->

  <router-view /> 

</template>

<style>
body{
  @apply bg-gray-100 justify-center;
  
}
</style>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { useUserStore } from './store/user'
import { useBoxStore } from './store/box'
const userStore = useUserStore()
const boxStore = useBoxStore()
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
   <h1 class="text-3xl font-bold underline text-red-500">
    Hello world!
  </h1>
  <div>Store: {{ userStore.fullName }}</div>
  <div>Store: {{ boxStore.xyPosition}}</div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/boxx">Boxx</router-link> | 
    <router-link to="/user">User</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

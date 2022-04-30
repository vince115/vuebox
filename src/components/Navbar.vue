<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>


<template>
<nav class="nav-navbar"> 
 <div class="nav-container">
  <a href="https://flowbite.com" class="flex items-center">
      <span class="nav-title">VueBox</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="btn-logout">Logout</button>
  </div>
  <div class="nav-items" id="mobile-menu-4">
    <ul class="nav-item-ul">
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>

<style>
.nav-navbar {
    @apply 
    bg-white 
    border-gray-200 
    px-2
    py-2.5 
    bg-blue-400
}
.nav-container{
    @apply 
    container 
    flex 
    flex-wrap
    justify-between 
    items-center 
    mx-auto
}
.nav-title{
    @apply 
    self-center 
    text-xl 
    font-semibold 
    whitespace-nowrap 
    dark:text-white
}
button.btn-logout{
  @apply 
  text-white 
  bg-green-700
  visited:bg-green-700 
  hover:bg-blue-800 
  focus:ring-4 
  focus:outline-none 
  focus:ring-blue-300 
  font-medium 
  rounded-lg 
  text-sm 
  px-5 
  py-2.5 
  text-center 
  mr-3 
  md:mr-0 
  dark:bg-blue-600 
  dark:hover:bg-blue-700 
  dark:focus:ring-blue-800
}

.nav-items{
  @apply hidden justify-between items-center w-full md:flex md:w-auto md:order-1
}
.nav-item-ul{
    @apply flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
}
.nav-item-li{

}
</style>
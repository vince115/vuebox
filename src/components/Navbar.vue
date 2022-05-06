<script lang="ts">
// import { ref } from 'vue'
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";
// defineProps<{ msg: string }>()
// const count = ref(0)

export default defineComponent({
  setup() {
    let token = localStorage.getItem("token");
    const router = useRouter();
    
    console.log("onNavLoad");

    const authStore = useAuthStore();
    console.log('authStore', authStore);
    console.log('authStore.isLogin', authStore.isLogin);
   
    const onLogout = async() => {
      
      console.log("onLogout"); 
      try{
          await useAuthStore().Logout();
          console.log(444); 
      }catch(error){ 
      //    
      }
      router.push({ name: "Login" });
      //window.location.reload();
    };

    return { onLogout, authStore };
  }
});
</script>


<template>
  <nav class="nav-navbar">
    <div class="nav-container">
      <a href="https://flowbite.com" class="flex items-center">
        <span class="nav-title">VueBox</span>
      </a>
      
      <div class="flex md:order-2">
       
        <button type="button"   class="btn-login">
          <router-link to="/login">Login</router-link>
        </button>
        <button type="button" @click="onLogout" class="btn-logout">Logout</button>
      </div>

      <div class="nav-items" id="mobile-menu-4">
        <ul class="nav-item-ul">
          <li>
            <router-link to="/" class="nav-item-li-a">Home</router-link>
          </li>
          <li>
            <router-link to="/box" class="nav-item-li-a">Box</router-link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.nav-navbar {
  @apply bg-white 
    border-gray-200 
    px-2
    py-2.5 
    bg-blue-400;
}
.nav-container {
  @apply container 
    flex 
    flex-wrap
    justify-between 
    items-center 
    mx-auto;
}
.nav-title {
  @apply self-center 
    text-xl 
    font-semibold 
    whitespace-nowrap 
    dark:text-white;
}
button.btn-login {
  @apply text-white
  bg-cyan-600
  hover:bg-cyan-700
  px-5 
  py-2.5 
  text-center 
  mr-3
  rounded-lg;
}
button.btn-logout {
  @apply text-white 
  bg-blue-700
  hover:bg-blue-800 
  font-medium 
  rounded-lg 
  text-sm 
  px-5 
  py-2.5 
  text-center 
  mr-3
}

.nav-items {
  @apply hidden justify-between items-center w-full md:flex md:w-auto md:order-1;
}
.nav-item-ul {
  @apply flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium;
}
.nav-item-lia {
  @apply block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white;
}

.nav-item-li-a {
  @apply block py-2 pr-4 pl-3 text-white  hover:text-yellow-300 focus:text-green-500;
}
</style>
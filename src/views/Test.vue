<template>
  <div class="mock-service-worker">
    <button class="button" @click="handleLogin">login</button>
    <button class="button" @click="handleGetUser">get user</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'testU',
  setup () {
    const handleLogin = () => {
      fetch('/login', {
        method: 'POST'
      }).then((v) => {
        console.log('v', v)
      })
    }

    const handleGetUser = () => {
      fetch('user')
        .then((v) => {
          return v.json()
        })
        .then((v) => {
          console.log('v.json', v)
        })
    }

    return {
      handleLogin,
      handleGetUser
    }
  }
})
</script>

<style>
button.button{
  @apply m-0 px-4 py-2 text-white bg-cyan-500 rounded
}
</style>
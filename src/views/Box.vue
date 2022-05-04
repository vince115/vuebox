<script setup lang="ts">
import { ref } from 'vue'
import { useBoxStore } from '../store/box'
import { useDraggable } from '@vueuse/core'

import { useRouter } from "vue-router";
import { useAuthStore } from '../store/auth'

const el = ref()
const {x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 41 }
})
const boxStore = useBoxStore()
boxStore.updateBox({x},{y})

const router = useRouter();
const authStore = useAuthStore()
if(authStore.getIsLogin !== true){
   router.push({ name: "Login" });
}

</script>


<template>
  <div ref="el" :style="style" style="position: fixed" class="text-green-500 bg-blue-100 rounded-tr-lg rounded-bl-lg rounded-br-lg boxs w-28 h-28">
    <h1>BOX0</h1>
    <h5>x: {{x}}</h5>
    <h5>y: {{y}}</h5>
  </div>
</template>

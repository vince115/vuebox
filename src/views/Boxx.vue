<script setup lang="ts">
import { useBoxStore } from '../store/box'
import { ref } from 'vue'
import { useDraggable } from '@vueuse/core'

const el = ref()
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
const boxStore = useBoxStore()
boxStore.updateBox({x},{y})
</script>

<template>
  <div ref="el" :style="style" style="position: fixed" class="boxs text-green-500 bg-blue-100 rounded-tr-lg rounded-br-lg rounded-bl-lg w-28 h-28">
    <h1>BOX0</h1>
    <h5>x: {{x}}</h5>
    <h5>y: {{y}}</h5>
  </div>
</template>

<template>
  <color-picker-example></color-picker-example>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColorPickerExample from './components/ColorPickerExample.vue'

export default defineComponent({
  name: 'App',
  components: {
    ColorPickerExample
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

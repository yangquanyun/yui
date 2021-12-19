<template>
  <div>
    <colorPicker v-model="color" v-on:change="handleChangeColor"></colorPicker>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ColorPickerExample',

  setup () {
    const color = ref('#ff0000')
    const handleChangeColor = () => {
      console.log('颜色改变')
    }
    return {
      color,
      handleChangeColor
    }
  }
})
</script>

import { createApp } from 'vue'
import App from './App.vue'

// 导入组件库
import ColorPicker from './../packages/index'

const app = createApp(App)

// 注册组件库
app.use(ColorPicker)

app.mount('#app')

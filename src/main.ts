import { createApp } from 'vue'
// 引入element-plus
import ElementPlus from 'element-plus'
// 引入根组件
import App from './App.vue'
// 引入element中文包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入组件样式
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')

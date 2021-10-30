import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { message, Menu, MenuItem } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(store)
app.use(router)

app.use(Menu)

// 全局属性
app.config.globalProperties.$message = message

// 挂载到#app上
app.mount('#app')

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import { createPinia } from 'pinia'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/index.css'

import router from "@/router";

const pinia = createPinia()
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.mount('#app')

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import store from '@/stores/index'

import 'normalize.css/normalize.css'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(store)
app.use(router)

import '@/permission' // permission control

app.mount('#app')

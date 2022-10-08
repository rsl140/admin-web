import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import { setupStore } from '@/stores/index'

import 'normalize.css/normalize.css'
import '@/styles/index.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(createPinia())
setupStore(app)
app.use(router)

app.mount('#app')

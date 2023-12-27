import { createApp } from 'vue'
import { history } from './shared/history'
import { createRouter } from 'vue-router'
import { routes } from './config/routers'
import './style.css'

import { App } from './App'

const router = createRouter({
    history,
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')


import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Loguin from './components/Loguin.vue'
import Register from './components/RegUsers.vue'
import 'bootstrap/dist/js/bootstrap.js'
import 'sweetalert2/dist/sweetalert2.min.css';

//Configuracion de rutas
const routes = [
    { path: '/', component: Loguin },
    { path: '/Register', component: Register },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})




const app = createApp(App)
app.use(router)
app.mount('#app')



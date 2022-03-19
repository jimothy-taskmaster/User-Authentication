import { createApp } from 'vue'
import App from './App.vue'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'


import router from './router/index.js'
import store from './store/store.js'
import basecard from './components/basecard.vue'


  
const app=createApp(App)
app.component('base-card',basecard)
app.use(router)
app.use(store)
app.use(VueSweetalert2)


app.mount('#app')

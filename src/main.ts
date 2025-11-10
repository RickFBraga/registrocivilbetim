import '@/assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'aos/dist/aos.css'
import AOS from 'aos'


const app = createApp(App)

app.use(router)
app.use(PrimeVue)

AOS.init()
app.mount('#app')

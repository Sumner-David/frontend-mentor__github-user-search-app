import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'tailwindcss/tailwind.css'

import './styles/main.scss'
import "@fontsource/space-mono/400.css"
import "@fontsource/space-mono/700.css"

createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { worker } from './mocks/browser'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
}) 

if (process.env.NODE_ENV === 'development') {
    //const { worker } = require('./mocks/browser')
    worker.start()
}

app.use(store).use(router).use(vuetify).mount('#app')

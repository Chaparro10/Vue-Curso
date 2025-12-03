import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {createVuetify} from 'vuetify'


import 'vuetify/styles'; //estilos basicos
import {aliases,mdi} from 'vuetify/iconsets/mdi';//iconos
import '@mdi/font/css/materialdesignicons.css'        // Iconos MDI


const vuetify=createVuetify({
    icons:{
        defaultSet:'mdi',
        aliases,
        sets:{mdi}
    }
})


createApp(App).use(vuetify).mount('#app')

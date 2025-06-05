import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'

import { vuetify } from '@/plugins/vuetify';


  const app = createApp(App)
  app.use(vuetify);
  app.use(router);
  app.mount('#app')

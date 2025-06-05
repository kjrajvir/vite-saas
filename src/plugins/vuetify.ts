// src/plugins/vuetify.ts
import 'vuetify/styles/main.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'; 


export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // Use Material Design Icons by default
  },  
  theme: {
    defaultTheme: 'light'
  },
  components,
  directives,
})

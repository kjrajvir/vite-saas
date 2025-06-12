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
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          primary: '#1976d2',
          background: '#ffffff',
          surface: '#f5f5f5',
          onPrimary: '#ffffff',
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          primary: '#90caf9',
          background: '#121212',
          surface: '#1e1e1e',
          onPrimary: '#000000',
        },
      },
    },
  }, 
  components,
  directives,
})

/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes : {
      dark : { 
        colors : {
          primary : '#38BE92',
          secondary : '#FFFFFF', 
          background : '#282A42',
          surface: '#1C1E35',
          highlight : '#f2af29'
        }
      },
      light : {
        colors : {
          primary : '#38BE92',
          secondary : '#1C1E35', 
          background : '#FFFFFF',
          surface: '#e9e8eb',
          highlight : '#6A66A3'
        }
      }
    }
  },
})

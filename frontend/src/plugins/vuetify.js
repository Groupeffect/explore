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
    defaultTheme: 'groupeffect',
    themes: {
      groupeffect: {
        colors: {
          // "background":"rgb(25,20,25)",
          // "background":"#000000",
          // "background":"#FFFFFF",
          "surface":"#212121",
          "surface-bright":"#ccbfd6",
          "surface-variant":"#a3a3a3",
          "on-surface-variant":"#424242",
          "primary":"rgb(12,34,45)",
          "primary-darken-1":"#277CC1",
          "secondary":"#5CBBF6",
          "secondary-darken-1":"#48A9A6",
          "error":"#CF6679",
          "info":"#2196F3",
          "success":"#4CAF50",
          "warning":"#FB8C00"
        },
      },
      // light: {
      //   colors: {
      //     primary: '#1867C0',
      //     secondary: '#5CBBF6',
      //   },
      // },
    },
  },
})

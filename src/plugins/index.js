/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { router } from '@/routes/router'
import vuetify from './vuetify'
import { createPinia } from 'pinia'

const pinia = createPinia()

export function registerPlugins (app) {
  app.use(router)
  app.use(pinia)
  app.use(vuetify)
}

/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
// Components
import App from '@/App.vue'

// Composables
import { createApp } from 'vue'

import MainMixin from '@/mixins/MainMixin.js'

const app = createApp(App)

registerPlugins(app)

app.mixin(MainMixin)
app.mount('#app')

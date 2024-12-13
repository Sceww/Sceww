import { createApp } from "vue";
import importedApp from './app.vue'

const app = createApp(importedApp)
app.mount('#app')
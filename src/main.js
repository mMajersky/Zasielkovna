import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

// Create and use the Pinia instance
const pinia = createPinia();
app.use(pinia);

// Use the router
app.use(router);

app.mount('#app');


import { createApp } from 'vue';
import App from './app.vue';
import dcbmui from '@dcbmui/components';
const app = createApp(App);
app.use(dcbmui);
app.mount('#app');

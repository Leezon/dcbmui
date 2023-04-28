import { createApp } from 'vue';
import App from './app.vue';
import dcbmui from '@dcbmui/components';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(dcbmui);
app.mount('#app');

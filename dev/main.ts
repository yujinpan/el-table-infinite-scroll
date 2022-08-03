import { createApp } from 'vue';
import App from './src/App.vue';
import elementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(elementPlus);
app.mount('#app');

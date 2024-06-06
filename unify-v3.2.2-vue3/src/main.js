import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'swiper/swiper-bundle.css';
import '@/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.css';
import '@/assets/css/theme.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App);
app.use(router);
app.mount('#app');
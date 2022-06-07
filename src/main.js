import * as Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/soft-design-system.css';
import './assets/js/button.js';
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = Vue.createApp(App).use(store).use(router).mount('#app')
app.use(VueAxios, axios)
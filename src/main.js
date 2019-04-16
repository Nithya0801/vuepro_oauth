// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8088';

window.axios = axios;
/* eslint-disable no-new */

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import VueSession from 'vue-session';
Vue.use(VueSession, {
    persist: true
});

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import '@/assets/css/style.css'

new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/index.css';
import '@/assets/scss/index.scss'


import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;
import axios from 'axios';
// axios.defaults.baseURL = ''
Vue.prototype.$http = axios;

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

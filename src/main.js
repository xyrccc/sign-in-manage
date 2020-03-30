// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI, { Col } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

// import $ from 'jquery'

//import VueAxios from 'vue-axios'
//引入echarts
import echarts from 'echarts'





Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
 data(){
   return {
    info:null
   }
  },
  router,
  components: { App },
  template: '<App/>',


})


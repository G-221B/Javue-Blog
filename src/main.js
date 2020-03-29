import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/css/iconfont.css'
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false

// 配置axios
Vue.prototype.axios = axios
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8080/blog'
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    avatar: JSON.parse(window.sessionStorage.getItem('user')) === null ? '' : JSON.parse(window.sessionStorage.getItem('user')).userImage,
    pageSize: 3
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

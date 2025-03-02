import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './router/permisson'
Vue.config.productionTip = false
//导入样式初始化
import 'normalize.css'
import './assets/css/base.css'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//导入请求方法
// import './api/index'
import api from './api/index'
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import fastclick from 'fastclick'

import './assets/css/reset.css'
import './common/css/plugin.less'


Vue.config.productionTip = false

Vue.use(Toast)

//懒加载的默认占位图
import def_lazy_img from './assets/img/loading.gif'
import { Toast } from './common/js/plugin'
//懒加载组件
Vue.use(VueLazyload, {
  loading: def_lazy_img
})

fastclick.attach(document.body) //作用于body

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

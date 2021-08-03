import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import VueLazyload from 'vue-lazyload'
import def_lazy_img from './assets/img/loading.gif'
import fastclick from 'vue-fastclick'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueLazyload, {
  loading:def_lazy_img
})
// 消除300ms延迟
fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import WmsSanseVerifyCode from 'wms-sanse-verify-code'
Vue.use(WmsSanseVerifyCode)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// import SanseVerifyCode from './sanse-verify-code.vue'
// SanseVerifyCode.install = Vue => Vue.component(SanseVerifyCode.name, SanseVerifyCode)
// export default SanseVerifyCode

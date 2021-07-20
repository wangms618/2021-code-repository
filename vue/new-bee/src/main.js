import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Icon , Swipe, SwipeItem } from 'vant'
import 'lib-flexible/flexible'
import { Form, Field, CellGroup } from 'vant';
const app = createApp(App)
// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith('http')) {
      return url
    } else{
      url = `http://47.99.134.126:28019${url}`
      return url
    }
  }
}




app.use(Swipe).use(Form).use(Field).use(CellGroup).use(SwipeItem).use(Icon).use(Button).use(store).use(router).mount('#app')

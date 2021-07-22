import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Icon , Swipe, SwipeItem } from 'vant'
import 'lib-flexible/flexible'
import { Form, Field, CellGroup,ActionBar, ActionBarIcon, ActionBarButton,Checkbox, CheckboxGroup,SwipeCell,Stepper,SubmitBar } from 'vant';
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




app.use(Swipe)
  .use(Form).use(ActionBarButton)
  .use(SubmitBar)
  .use(SwipeCell).use(Stepper)
  .use(Checkbox).use(CheckboxGroup)
  .use(ActionBarIcon).use(ActionBar)
  .use(Field).use(CellGroup)
  .use(SwipeItem).use(Icon)
  .use(Button).use(store).use(router).mount('#app')

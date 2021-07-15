import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // }
  {
    path: '/',
    // 重定向，进入根页面自动进入/search页面
    redirect:'/search'
  },
  {
    path: '/search',
    component:()=> import ('@/views/search.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

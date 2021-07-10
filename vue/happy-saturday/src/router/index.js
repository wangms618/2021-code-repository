import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/home.vue'
import item from '@/views/item/item'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Home
  },
  // {
  //   path: '/item',
  //   component:()=>import item from ('@/views/item/item.vue')
  // }
  {
    path: '/item',
    component:item
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

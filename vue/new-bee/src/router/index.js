import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Product from '@/views/ProductDetail.vue'
const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      index:1
    }
  }, {
    path: '/login',
    name: 'login',
    component : () =>import ('@/views/Login.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    meta: {
      index:3
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart.vue'),
    meta: {
      index:0
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

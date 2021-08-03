import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Login',
    component:()=>import('@/views/Login.vue')
  },
  {
    path: '/Home',
    name:'home',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: 'UserInfo',
        name: 'UserInfo',
        component:()=>import('@/views/UserInfo.vue')
      },
      {
        path: 'Form',
        name: 'Form',
        component:()=>import('@/views/Form.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

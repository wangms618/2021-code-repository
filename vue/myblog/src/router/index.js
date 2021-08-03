import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/view1',
    component: () => import('@/views/view1.vue'),
    children: [{
        path: 'view11',
        component: () => import('@/views/view11.vue')
      },
      {
        path: 'view12',
        component: () => import('@/views/view12.vue')
      }
    ]
  }, {
    path: '/view2',
    component: () => import('@/views/view2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
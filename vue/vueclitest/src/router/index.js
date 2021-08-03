import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hi from '../components/Hi.vue'
import Hi1 from '../components/Hi1.vue'
import Hi2 from '../components/Hi2.vue'
import Hi3 from '../components/Hi3.vue'
// import Hi4 from '../components/Hi4.vue'
import Params from '../components/Params.vue'
import Error from '@/components/Error.vue'
// import goHome from ''


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // 一个时用component:Home
    component: Home


    // 三个router-view
    // 多route-view时用components
    // components: {
    //   default:Home,
    //   left:Hi3,
    //   right:Hi4
    // }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Hi',
    name: 'Hi',
    component: Hi,
    // 子路由
    children: [
      // {path:'/',component:Hi},
      { path: 'hi1', name: 'Hi1', component: Hi1 },
      { path: 'hi2', name: '我是Hi2', component: Hi2 }
    ]
  },
  {
    // 格式
    path: '/params/:newsId/:newsTitle',
    component: Params,
    // beforeEnter: (to, from, next) => {
    //   console.log(to);
    //   console.log(from);
    //   // 跳转
    //   // next();
    //   // next(true);
    //   // 不跳转
    //   // next(false);
    //   // 选择对应路径跳转,例：跳转根目录
    //   // next({path:'/'})

    // }
  },
  {
    // 重定向回到首页
    path: '/goHome',
    redirect: '/'
  },
  {
    // 重定向到params
    path: '/goParams/:newsId(\\d+)/:newsTitle',
    redirect: '/params/:newsId(\\d+)/:newsTitle'
  },
  {
    path: '/Hi3',
    component: Hi3,
    alias:'/jspang'
  },
  {
    path: '*',
    component:Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

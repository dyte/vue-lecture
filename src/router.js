import Vue from 'vue'
import Router from 'vue-router'
// import UserCreate from './pages/UserCreate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/Home.vue')
    },
    {
      path: '/mixin-sample',
      name: 'mixin',
      component: () => import('@/pages/MixinSample.vue')
    },
    {
      path: '/component',
      name: 'component',
      component: () => import ('@/pages/ComponentSample.vue')
    },
    {
      path: '/axios-sample',
      name: 'axios',
      component: () => import ('@/pages/AxiosSample.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

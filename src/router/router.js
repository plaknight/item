import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/home/index.vue"
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        isShow: true
      },
      children: [
        {
          path: 'city',
          component:()=> import ('@/views/home/city/index.vue'),
          meta: {
            isShow: false
          }
        },
      ]
    }, 
    {
      path: '/movie',
      name: 'movie',
      component: () => import(/* webpackChunkName: "about" */ '../views/movie/index.vue'),
      redirect: 'movie/hots',
      children:[
        {
          path:'future',
          component:()=> import ('../views/movie/movie-future/index.vue'),
          meta: {
            isShow: true
          }
        },
        {
          path:'hots',
          component:()=> import ('../views/movie/movie-hots/index.vue'),
          meta: {
            isShow: true
          }
        }
      ],
      meta: {
        isShow: true
      }
    }, 
    {
      path: '/cinema',
      name: 'cinema',
      component: () => import(/* webpackChunkName: "about" */ '../views/cinema/index.vue'),
      meta: {
        isShow: true
      }
    }, 
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/index.vue'),
      meta: {
        isShow: true
      }
    },
    {
      path:'*',
      redirect: '/home'
    }
    
  ]
})

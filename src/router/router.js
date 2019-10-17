import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue'),
    }, 
    {
      path: '/movie',
      name: 'movie',
      component: () => import(/* webpackChunkName: "about" */ '../views/movie/index.vue'),
      redirect: 'movie/hots',
      children:[
        {
          path:'future',
          component:()=> import ('../views/movie/movie-future/index.vue')
        },
        {
          path:'hots',
          component:()=> import ('../views/movie/movie-hots/index.vue')
        }
      ]
    }, 
    {
      path: '/cinema',
      name: 'cinema',
      component: () => import(/* webpackChunkName: "about" */ '../views/cinema/index.vue')
    }, 
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/index.vue')
    },
    {
      path:'*',
      redirect: '/home'
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: () => import(/* webpackChunkName: "myorder" */ '../views/myorder/index.vue')
    },
    {
      path: '/newcenter',
      name: 'newcenter',
      component: () => import(/* webpackChunkName: "myorder" */ '../views/newcenter/index.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "myorder" */ '../views/news/index.vue')
    }
    
    
  ]
})

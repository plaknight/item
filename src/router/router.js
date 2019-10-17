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
      meta: { 
        isShow:true
       }
    }, 
    {
      path: '/movie',
      name: 'movie',
      component: () => import(/* webpackChunkName: "about" */ '../views/movie/index.vue'),
      redirect: 'movie/hots',
      meta: { 
        isShow:true
       },
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
      component: () => import(/* webpackChunkName: "about" */ '../views/cinema/index.vue'),
      meta: { 
        isShow:true
       },
    }, 
    {
      path:'/cinemaInfo',
      name: 'cinemaInfo',
      component: () => import(/* webpackChunkName: "cinemaInfo" */ '../views/cinema/cinemaInfo/index.vue'),
      meta: { 
        isShow:false
       },
    },
    {
      path: '/nearbyMap',
      name: 'nearbyMap',
      component: () => import(/* webpackChunkName: "nearbyMap" */ '../views/nearbyMap/index.vue'),
      meta: { 
        isShow:false
       }
    }, 
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/index.vue'),
      meta: { 
        isShow:true
       }
    },
    {
      path:'*',
      redirect: '/home'
    }
    
  ]
})

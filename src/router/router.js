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
       meta:{
         isShow:true
       }
    }, 
    {
      path: '/movie',
      name: 'movie',
      component: () => import(/* webpackChunkName: "about" */ '../views/movie/index.vue'),
      redirect: 'movie/hots',
      meta:{
        isShow:true
      },
      children:[
        {
          path:'future',
          component:()=> import ('../views/movie/movie-future/index.vue'),
          meta:{
            isShow:true
          }
        },
        {
          path:'hots',
          component:()=> import ('../views/movie/movie-hots/index.vue'),
          meta:{
            isShow:true
          }
        }
      ]
    }, 
    {
      path: '/cinema',
      name: 'cinema',
      component: () => import(/* webpackChunkName: "about" */ '../views/cinema/index.vue'),
      meta:{
        isShow:true
      }
    }, 
    {
      path: '/my',
      name: 'my',
      component: () => import(/* webpackChunkName: "about" */ '../views/my/index.vue'),
      meta:{
        isShow:true
      }
    },  
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import(/* webpackChunkName: "about" */ '../views/ticket/index.vue'),
      meta:{
        isShow:true
      }
    },   // 临时选座路由

    {
      path:'*',
      redirect: '/home'
    }
    
  ]
})

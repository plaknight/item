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
          component: () => import('@/views/home/city/index.vue'),
          meta: {
            isShow: false
          }
        },
        {
          path: 'signIn',
          component: () => import('@/views/home/signIn/index.vue'),
          meta: {
            isShow: false
          }
        },
        {
          path: 'search',
          component: () => import('@/views/home/search/index.vue'),
          meta: {
            isShow: false
          }
        }
      ]
<<<<<<< HEAD
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        isShow: false
      }
    },
=======

    }, 
>>>>>>> a0e65f2c362b842b316290cfe47ad21898219de4
    {
      path: '/movie',
      name: 'movie',
      component: () => import(/* webpackChunkName: "about" */ '../views/movie/index.vue'),
      redirect: 'movie/hots',
<<<<<<< HEAD
      children: [
=======
      meta: { 
        isShow:true
       },
      children:[
>>>>>>> a0e65f2c362b842b316290cfe47ad21898219de4
        {
          path: 'future',
          component: () => import('../views/movie/movie-future/index.vue'),
          meta: {
            isShow: true
          }
        },
        {
          path: 'hots',
          component: () => import('../views/movie/movie-hots/index.vue'),
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
<<<<<<< HEAD
      meta: {
        isShow: true
      }
    },
=======

      meta: { 
        isShow:true
       },
    }, 
>>>>>>> a0e65f2c362b842b316290cfe47ad21898219de4
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
       },
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
      path: '*',
      redirect: '/login'
    }

  ]
})

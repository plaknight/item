import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/home/index.vue'),
            meta: {
                isShow: true
            }
        },
        {
            path: '/movie',
            name: 'movie',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/movie/index.vue'),
            meta: {
                isShow: true
            },
            redirect: 'movie/hots',
            children: [{
                    path: 'future',
                    component: () =>
                        import ('../views/movie/movie-future/index.vue'),
                    meta: {
                        isShow: true
                    }
                },
                {
                    path: 'hots',
                    component: () =>
                        import ('../views/movie/movie-hots/index.vue'),
                    meta: {
                        isShow: true
                    }
                }
            ]
        },
        {
            path: '/cinema',
            name: 'cinema',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/cinema/index.vue'),
            meta: {
                isShow: true
            }
        },
        {
            path: '/my',
            name: 'my',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/my/index.vue'),
            meta: {
                isShow: true
            }
        },
        {
            path: '/order',
            name: 'order',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/order/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/tickets',
            name: 'tickets',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/tickets/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/seat',
            name: 'seat',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/seat/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '*',
            redirect: '/home'
        }

    ]
})
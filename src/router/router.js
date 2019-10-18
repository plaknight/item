import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                isShow: true
            },
            children: [{
                    path: 'city',
                    component: () =>
                        import('@/views/home/city/index.vue'),
                    meta: {
                        isShow: false
                    }
                },
                {
                    path: 'signIn',
                    component: () =>
                        import('@/views/home/signIn/index.vue'),
                    meta: {
                        isShow: false
                    }
                },
                {
                    path: 'search',
                    component: () =>
                        import('@/views/home/search/index.vue'),
                    meta: {
                        isShow: false
                    }
                }
            ]
        },
        {
            path: '/movie',
            name: 'movie',
            component: () => import( /* webpackChunkName: "about" */ '../views/movie/index.vue'),
            redirect: 'movie/hots',

            children: [{
                    path: 'future',
                    name: 'future',
                    component: () => import('../views/movie/movie-future/index.vue'),
                    meta: {
                        isShow: true
                    },

                },
                {
                    path: 'hots',
                    name: 'hots',
                    component: () => import('../views/movie/movie-hots/index.vue'),
                    meta: {
                        isShow: true
                    },
                },
                {
                    path: 'detail',
                    name: "detail",
                    component: () => import('../views/movie/movie-detail/index.vue'),
                    meta: {
                        isShow: false,
                    },
                    children: [{
                            name: "introduction",
                            path: 'introduction',
                            component: () => import('../views/movie/movie-detail/introduction/index.vue'),
                            meta: {
                                isShow: false,
                            },
                        }, {
                            path: 'evaluation',
                            name: "evaluation",
                            component: () => import('../views/movie/movie-detail/evaluation/index.vue'),
                            meta: {
                                isShow: false
                            },
                        }, {
                            path: 'comment',
                            name: "comment",
                            component: () => import('../views/movie/movie-detail/comment/index.vue'),
                            meta: {
                                isShow: false,
                            },
                        }, {
                            path: 'more',
                            name: "more",
                            component: () => import('../views/movie/movie-detail/more/index.vue'),
                            meta: {
                                isShow: false,
                            },

                        },


                    ],

                },
                {
                    name: "boxoffice",
                    path: 'boxoffice',
                    component: () => import('../views/movie/boxoffice/index.vue'),
                    meta: {
                        isShow: false,
                    },
                },
                {
                    name: "actor",
                    path: 'actor',
                    component: () => import('../views/movie/actor/index.vue'),
                    meta: {
                        isShow: false,
                    },

                }
            ]
        },
        {
            path: '/cinema',
            name: 'cinema',
            component: () =>
                import( /* webpackChunkName: "about" */ '../views/cinema/index.vue'),

            meta: {
                isShow: true
            },
        },
        {
            path: '/cinemaInfo',
            name: 'cinemaInfo',
            component: () =>
                import( /* webpackChunkName: "cinemaInfo" */ '../views/cinema/cinemaInfo/index.vue'),
            meta: {
                isShow: false
            },
        },
        {
            path: '/nearbyMap',
            name: 'nearbyMap',
            component: () =>
                import( /* webpackChunkName: "nearbyMap" */ '../views/nearbyMap/index.vue'),
            meta: {
                isShow: false
            },
        },

        {
            path: '/my',
            name: 'my',
            component: () =>
                import( /* webpackChunkName: "about" */ '@/views/my/index.vue'),
            meta: {
                isShow: true
            },
            redirect: '/my/index/index',
            children: [{
                    path: 'coupon',
                    name: 'coupon',
                    component: () =>
                        import( /* webpackChunkName: "about" */ '@/views/my/coupon/index.vue'),
                    meta: {
                        isShow: true
                    },
                },
                {
                    path: 'personal',
                    name: 'personal',
                    component: () =>
                        import( /* webpackChunkName: "about" */ '@/views/my/personal/index.vue'),
                    meta: {
                        isShow: true
                    }
                },
                {
                    path: 'each',
                    name: 'each',
                    component: () =>
                        import( /* webpackChunkName: "about" */ '@/views/my/each/index.vue'),
                    meta: {
                        isShow: true
                    }
                },
                {
                    path: 'index/index',
                    name: 'index',
                    component: () =>
                        import( /* webpackChunkName: "about" */ '@/views/my/index/index.vue'),
                    meta: {
                        isShow: true
                    },
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import( /* webpackChunkName: "about" */ '../views/login/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/myorder/:ids', //订单页面
            component: () =>
                import( /* webpackChunkName: "myorder" */ '../views/myorder/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/tickets',
            name: 'tickets',
            component: () =>
                import( /* webpackChunkName: "about" */ '../views/tickets/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/seat',
            name: 'seat',
            component: () =>
                import( /* webpackChunkName: "about" */ '../views/seat/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import( /* webpackChunkName: "about" */ '../views/login/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/newcenter',
            name: '/newcenter',
            component: () =>
                import( /* webpackChunkName: "about" */ '../views/newcenter/index.vue'),
            meta: {
                isShow: false
            }
        },
        {
            path: '/news',
            name: '/news',
            component: () =>
                import( /* webpackChunkName: "news" */ '../views/news/index.vue'),
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
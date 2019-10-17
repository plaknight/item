import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/home',
            name: 'home',
            component: () => import( /* webpackChunkName: "about" */ '../views/home/index.vue'),

        },
        {
            path: '/movie',
            name: 'movie',
            component: () => import( /* webpackChunkName: "about" */ '../views/movie/index.vue'),
            redirect: 'movie/hots',

            children: [{
                    path: 'future',
                    component: () => import('../views/movie/movie-future/index.vue'),

                },
                {
                    path: 'hots',
                    component: () => import('../views/movie/movie-hots/index.vue'),

                },
                {
                    path: 'detail',
                    name: "detail",
                    component: () => import('../views/movie/movie-detail/index.vue'),
                    meta: {
                        isShow: true,
                    },
                    children: [{
                        name: "introduction",
                        path: 'introduction',
                        component: () => import('../views/movie/movie-detail/introduction/index.vue'),
                        meta: {
                            isShow: true,
                        },
                    }, {
                        path: 'evaluation',
                        name: "evaluation",
                        component: () => import('../views/movie/movie-detail/evaluation/index.vue'),
                        meta: {
                            isShow: true,
                        },
                    }, {
                        path: 'comment',
                        name: "comment",
                        component: () => import('../views/movie/movie-detail/comment/index.vue'),
                        meta: {
                            isShow: true,
                        },
                    }, {
                        path: 'more',
                        name: "more",
                        component: () => import('../views/movie/movie-detail/more/index.vue'),
                        meta: {
                            isShow: true,
                        },
                    }]
                },
                {
                    name: "boxoffice",
                    path: 'boxoffice',
                    component: () => import('../views/movie/boxoffice/index.vue'),
                    meta: {
                        isShow: true,
                    },
                },
                {
                    name: "actor",
                    path: 'actor',
                    component: () => import('../views/movie/actor/index.vue'),
                    meta: {
                        isShow: true,
                    },
                }

            ]
        },
        {
            path: '/cinema',
            name: 'cinema',
            component: () => import( /* webpackChunkName: "about" */ '../views/cinema/index.vue'),


        },
        {
            path: '/my',
            name: 'my',
            component: () => import( /* webpackChunkName: "about" */ '../views/my/index.vue')

        },
        {
            path: '*',
            redirect: '/home'
        }

    ]
})
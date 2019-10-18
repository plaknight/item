import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
// import Vant from 'vant';
import 'lib-flexible'
import 'vant/lib/index.css';
// import { Switch } from 'vant';
// Vue.use(Switch);
import Vant from "vant"
Vue.use(Vant);

//全局引入animate.css
import "animate.css"
//全局引入BScroll插件  每个页面都得使用
import BScroll from 'better-scroll'
//判断是否登录
// router.beforeEach((to, from, next) => {
//   console.log(to.name)
//   // if (to.name) {
//   if (!window.localStorage.getItem('usermsg')) {
//     next('/login')
//   } else {
//     next()
//   }
//   // } else {
//   //   next()
//   // }

//   // ${//to and from are Route Object,next() must be called to resolve the hook}
//   console.log(to)
//   next()
// })

//全局引入组件
import Search from '@/components/Search.vue'

Vue.component("Search", Search)

//将BScroll 添加至
Vue.prototype.BScroll = BScroll

Vue.config.productionTip = false

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// router.beforeEach((to, from, next) => {
//   // console.log(to.name)
//   // if (to.name) {
//   if (!window.localStorage.getItem('usermsg')) {
//     console.log(123)
//     next('/login')
//   }
//   next()
// })

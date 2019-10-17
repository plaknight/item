import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible'

Vue.use(Vant);

//全局引入BScroll插件  每个页面都得使用
import BScroll from 'better-scroll'


//将BScroll 添加至
Vue.prototype.BScroll = BScroll

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

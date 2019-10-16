<template>
  <div id="app">
    <router-view />
    <div class="nav"  >
  <tabbar v-show="$route.meta.isShow"></tabbar>
    </div>
  
  </div>
</template>
<script>
import tabbar from '@/components/tabbar.vue'
import '@/assets/css/common/reset.css'
export default {
  data() {
    return {

    };
  },
  methods: {
    get(){
// console.log(this.)
    }
  },
  created(){
    
  },
  mounted(){

  },
  components: {
    tabbar:tabbar
  }
};

</script>
<style lang="scss">
html,
body {
  background: #23262d;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
a {
   -webkit-tap-highlight-color:rgba(0,0,0,0);
   text-decoration: none;
}
.nav {
  height: 70px;
}

</style>

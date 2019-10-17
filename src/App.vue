<template>
  <div id="app">
    <router-view />
<<<<<<< HEAD
    <div class="nav"  >
  <tabbar  v-show="$route.meta.isShow" ></tabbar>      <!--  -->
=======

    <div class="nav" v-if="$route.meta.isShow">
  <tabbar></tabbar>

>>>>>>> a0e65f2c362b842b316290cfe47ad21898219de4
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
  mounted:function(){
    
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

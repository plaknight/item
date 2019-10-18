<template>
  <div id="app">
    <transition enter-active-class="animated slideInRight faster" mode="out-in">
      <router-view />
    </transition>
    <div class="nav" v-show="$route.meta.isShow">
      <tabbar></tabbar>
    </div>
  </div>
</template>
<script>
import tabbar from "@/components/tabbar.vue";
import "@/assets/css/common/reset.css";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {
    console.log(1231231)
    if (!window.localStorage.getItem("usermsg")) {
      this.$router.push("/login").catch(err => {});
    }
  },
  components: {
    tabbar: tabbar
  },
  watch: {
    "$route.path"() {
      if (!window.localStorage.getItem("usermsg")) {
        this.$router.push("login").catch(err => {});
      }
    }
  }
};
</script>
<style lang="scss" >
html,
body {
  background: #23262d;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
}
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-decoration: none;
}
.nav {
  height: 70px;
}
</style>


<template>
  <div class="movie">
    <div class="header" v-if="$route.meta.isShow">
      <div class="header-c">
        <div class="adress">
          郑州
          <img :src="imgs.down" alt />
        </div>
        <div class="center">
          <router-link class="router-link hot" to="/movie/hots"
            >正在热映</router-link
          >
          <router-link class="router-link future" to="/movie/future"
            >即将上映</router-link
          >
        </div>
        <div class="search">
          <img :src="imgs.search" alt />
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      imgs: {
        down: require("@/assets/movie-imgs/home/下 箭头.png"),
        search: require("@/assets/movie-imgs/home/搜索.png")
      }
    };
  }
};
</script>

<style lang='scss' scoped>
.movie {
  height: auto;
  width: 100%;
}
.header {
  height: 44px;
  width: 100%;
  background: #33363d;
  .header-c {
    position: relative;
    height: 44px;
    width: 335px;
    margin: 0 auto;
    overflow: hidden;
    .adress {
      float: left;
      margin-top: 15px;
      position: relative;
      width: 50px;
      height: 14px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: #b1b2b3;
      line-height: 14px;
      img {
        position: absolute;
        right: 5px;
        bottom: 3px;
      }
    }
    .center {
      margin: 0 auto;
      margin-top: 10px;
      width: 164px;
      height: 25px;
      border: 1px solid;
      border-radius: 6px 5px 5px 6px;
      border-image: linear-gradient(
          314deg,
          rgba(241, 158, 101, 1),
          rgba(242, 105, 127, 1)
        )
        1 1;
      .router-link {
        float: left;
        width: 50%;
        text-align: center;
        line-height: 25px;
        color: #b1b2b3;
        font-size: 14px;
        font-weight: 500;
        font-family: PingFangSC-Medium, PingFangSC;
      }
      .router-link-exact-active {
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        color: #f5f5f5;
      }
    }
    .search {
      img {
        position: absolute;
        right: 0;
        top: 15px;
      }
    }
  }
}
</style>
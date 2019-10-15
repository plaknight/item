<template>
  <div class="movie">
    <div class="header">
      <div class="header-c">
        <div class="adress">
          郑州
          <img :src="imgs.down" alt />
        </div>
        <p>影院</p>
        <div class="search">
          <img :src="imgs.search" alt />
        </div>
      </div>
    </div>
    <div class="position">
      <div class="position-c">
        <img :src="imgs.position" alt />
        我在: 绿地新都会
      </div>
    </div>

    <div class="cinema"></div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      imgs: {
     down: require("@/assets/movie-imgs/首页_slices/下 箭头.png"),
        // search: require("@/assets/movie-imgs/首页_slices/搜索.png"),

      }
    };
  }
};
</script>

<style lang='scss' scoped>
.header {
  height: 36px;
  width: 100%;
  background: #33363d;
  margin: 12px 0;
  .header-c {
    position: relative;
    height: 36px;
    width: 335px;
    margin: 0 auto;
    .adress {
      float: left;
      margin-top: 11px;
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
    p {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 36px;
      height: 36px;
      font-size: 18px;
      color: rgba(255, 255, 255, 1);
      line-height: 36px;
    }
    .search {
      img {
        position: absolute;
        right: 0;
        top: 9px;
      }
    }
  }
}
.position {
  width: 100%;
  height: 30px;
  background: #2c2f36;
  margin-bottom: 12px;
  .position-c {
    margin: 0 auto;
    width: 335px;
    height: 100%;
    text-indent: 26px;
    font-size: 12px;
    color: #b1b2b3;
    line-height: 30px;
    img {
      float: left;
      margin-top: 6px;
    }
  }
}
.cinema {
  width: 335px;
  margin: 0 auto;
  margin-bottom: 15px;
  height: 146px;
  background: #33363d;
}
</style>
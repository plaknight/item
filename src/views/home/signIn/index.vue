<template>
  <div class="sign-wrap">
    <div class="signIn">
      <div class="signIn-header">
        <img :src="closeImg" alt="" class="close" @click="backHome" />
        <img :src="signImg" alt="" class="signImg" />
        <div class="signIn-main">
          <p>＂要是他没有触犯我的骄傲,我也很容易原谅他的骄傲＂</p>
          <p>《傲慢与偏见》</p>
          <div class="horn"><img :src="hornImg" alt="" /> 8s</div>
        </div>
      </div>
      <div class="signIn-footer">
        <div><img :src="movie" alt="" /></div>
        <div><img :src="share" alt="" /></div>
        <div><img :src="dolike" alt="" /></div>
        <div><img :src="comment" alt="" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signIn",
  methods: {
    backHome() {
      console.log(1);
      this.$router.go(-1);
    }
  },
  data() {
    return {
      closeImg: require("@/assets/movie-imgs/search/close.png"),
      signImg: require("@/assets/movie-imgs/search/sign.png"),
      share: require("@/assets/movie-imgs/search/fenxiang.png"),
      comment: require("@/assets/movie-imgs/search/pinglun.png"),
      dolike: require("@/assets/movie-imgs/search/dianzan.png"),
      movie: require("@/assets/movie-imgs/search/movie.png"),
      hornImg: require("@/assets/movie-imgs/search/laba.png")
    };
  },
  mounted() {
    this.bs = new this.BScroll(".sign-wrap", {
      // ...... 详见配置项
      click: true
    });
  }
};
</script>

<style lang='scss' scoped>
.sign-wrap {
  height: 100%;
  overflow: hidden;
}
.signIn {
  height: 100%;
  padding-bottom: 170px;

  &-header {
    display: flex;
    height: 218px;
    justify-content: space-between;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    flex-wrap: wrap;
    background: url("../../../assets/movie-imgs/search/bg.png") no-repeat bottom;
    background-size: cover;
    z-index: 999;
    position: absolute;
    .close {
      height: 16px;
      margin-left: 20px;
      margin-top: 24px;
    }
    .signImg {
      width: 24px;
      height: 16px;
      margin-right: 20px;
      margin-top: 24px;
    }
    .signIn-main {
      width: 100%;
      height: 660px;
      background: url("../../../assets/movie-imgs/search/women.png") no-repeat 0
        0;
      display: flex;
      flex-wrap: wrap;
      font-size: 18px;
      font-weight: 500;

      line-height: 18px;
      align-content: flex-end;
      p {
        width: 59%;
        margin-left: 35px;
      }
      p:nth-child(1) {
        color: rgba(255, 255, 255, 0.8);
        line-height: 25px;
      }
      p:nth-child(2) {
        margin-bottom: 80px;
        margin-top: 30px;
        color: rgba(255, 255, 255, 0.8);
      }
      .horn {
        color: rgba(255, 255, 255, 0.8);
        width: 85px;
        height: 35px;
        background: linear-gradient(
          130deg,
          rgba(242, 94, 132, 1) 0%,
          rgba(241, 165, 98, 1) 100%
        );
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
  .signIn-footer {
    position: absolute;
    top: 683px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    // padding-bottom: 91px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 18.5px;
      width: 24px;
      height: 24px;
    }
    div:nth-child(2) {
      width: 38px;
      height: 38px;
      background: rgba(51, 54, 61, 1);
      border-radius: 50%;
    }
    div:nth-child(3) {
      width: 38px;
      height: 38px;
      background: rgba(51, 54, 61, 1);
      border-radius: 50%;
    }
  }
}
</style>
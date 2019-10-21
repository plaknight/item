<template>
  <div class="detail">
    <div class="header">
      <div class="goback" @click="goback">{{ left }}</div>
      <div class="icon"></div>
    </div>
    <div class="movie-img">
      <img :src="movieinfo.img" alt="" />
    </div>
    <div class="play"></div>
    <div class="movie-title">
      <p class="text">{{ movieinfo.name }}</p>
      <p class="duration">120min</p>
    </div>
    <div class="pride">
      Pride & Prejudice
    </div>
    <!-- 评分 -->
    <div class="score">
      <!-- 星星 -->
      <div class="star">
        <img
          :src="
            require('../../../assets/movie-imgs/电影详情_slices/星复制 2@2x.png')
          "
          alt=""
        />
        <img
          :src="
            require('../../../assets/movie-imgs/电影详情_slices/星复制 2@2x.png')
          "
          alt=""
        />
        <img
          :src="
            require('../../../assets/movie-imgs/电影详情_slices/星复制 2@2x.png')
          "
          alt=""
        />
        <img
          :src="
            require('../../../assets/movie-imgs/电影详情_slices/星复制 2@2x.png')
          "
          alt=""
        />
        <img
          :src="
            require('../../../assets/movie-imgs/电影详情_slices/编组 2@2x.png')
          "
          alt=""
        />
      </div>
      <!-- 分数 -->
      <div class="fraction">
        <div class="num">9.0</div>
        /10
      </div>
      <!-- 留言 -->
      <div class="message"></div>
      <!-- 点赞 -->
      <div class="like"></div>
    </div>
    <div class="link">
      <div
        class="router-link introduction"
        @click="tointroduction"
        :class="act == 'introduction' ? 'act' : ''"
      >
        简介
      </div>
      <div
        class="router-link evaluation"
        @click="toevaluation"
        :class="act == 'evaluation' ? 'act' : ''"
      >
        影评
      </div>
      <div
        class="router-link comment"
        @click="tocomment"
        :class="act == 'comment' ? 'act' : ''"
      >
        讨论
      </div>
      <div
        class="router-link more"
        @click="tomore"
        :class="act == 'more' ? 'act' : ''"
      >
        更多
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      left: "<",
      movieinfo: {},
      act: "introduction"
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
      localStorage.removeItem("movie");
      this.movieinfo = {};
    },
    tointroduction() {
      this.$router
        .replace({
          name: "introduction",
          params: { movieinfo: this.movieinfo }
        })
        .catch(() => {});
      this.act = "introduction";
    },
    toevaluation() {
      this.$router.replace("/movie/detail/evaluation").catch(() => {});
      this.act = "evaluation";
    },
    tocomment() {
      this.$router.replace("/movie/detail/comment").catch(() => {});
      this.act = "comment";
    },
    tomore() {
      this.$router.replace("/movie/detail/more").catch(() => {});
      this.act = "more";
    }
  },

  created() {
    if (
      !localStorage.getItem("movie") ||
      localStorage.getItem("movie") == "undefined" ||
      localStorage.getItem("movie") == "null"
    ) {
      if (this.$route.params.info || this.$route.params.info != "undefined") {
        localStorage.setItem("movie", JSON.stringify(this.$route.params.info));
      }
    }
    this.movieinfo = localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie"))
      : "";

    this.tointroduction();
  },
  updated() {}
};
</script>

<style lang='scss' scoped>
.detail {
  position: relative;
  padding-left: 20px;
  width: 100%;
  height: auto;
  margin-bottom: -50px;
  box-sizing: border-box;
  .header {
    overflow: hidden;
    position: relative;
    margin-left: -20px;
    box-sizing: border-box;
    width: 375px;
    height: 254px;
    background: url("../../../assets/movie-imgs/电影详情_slices/《傲慢与偏见》@2x.png")
      no-repeat center;
    background-size: cover;
    .goback {
      margin-top: 15px;
      margin-left: 20px;
      font-size: 20px;
      color: #fff;
    }
    .icon {
      position: absolute;
      top: 20px;

      right: 21px;
      width: 19px;
      height: 19px;
      background: url("../../../assets/movie-imgs/电影详情_slices/分 享@2x.png");
      background-size: 19px 19px;
    }
  }
  .movie-img {
    position: absolute;
    top: 150px;
    left: 20px;
    width: 96px;
    height: 131px;
    z-index: 999;
    img {
      width: 96px;
      height: 131px;
    }
  }
  .play {
    position: absolute;
    top: 197px;
    left: 220px;
    width: 50px;
    height: 50px;
    background-color: linear-gradient(
      136deg,
      rgba(241, 100, 129, 1) 0%,
      rgba(241, 144, 108, 1) 100%
    );
    background-image: url("../../../assets/movie-imgs/电影详情_slices/编组@2x.png");
    background-size: 50px 50px;
  }
  .movie-title {
    display: flex;
    margin-top: 50px;
    width: 375px;
    height: 20px;

    line-height: 20px;
    .text {
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
    }
    .duration {
      margin-left: 10px;
      margin-top: 5px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(241, 116, 121, 1);
    }
  }
  .pride {
    margin-top: 20px;
    width: 375px;
    height: 14px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: #86888c;
    line-height: 14px;
  }
  // 评分
  .score {
    position: relative;
    margin-top: 10px;
    width: 375px;
    height: 23px;
    .star {
      float: left;

      img {
        margin-right: 10px;
        width: 22px;
        height: 22px;
      }
    }
    .fraction {
      float: left;
      display: flex;
      width: 22px;
      height: 22px;
      line-height: 35px;
      font-size: 12px;
      // font-family: PingFangSC-Medium, PingFangSC;
      // font-weight: 500;
      color: #86888c;
      .num {
        font-size: 22px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(251, 195, 74, 1);
        line-height: 30px;
      }
    }
    .message {
      position: absolute;
      right: 75px;
      bottom: 0;
      width: 16px;
      height: 16px;
      background-image: url("../../../assets/movie-imgs/电影详情_slices/评论复制@2x.png");
      background-size: 16px 16px;
    }
    .like {
      position: absolute;
      right: 40px;
      bottom: 0;
      position: absolute;
      width: 18px;
      height: 17px;
      background-image: url("../../../assets/movie-imgs/电影详情_slices/星复制 5@2x.png");
      background-size: 17px 17px;
    }
  }
  .link {
    margin-top: 30px;
    display: flex;
    width: 375px;
    height: 30px;
    .router-link {
      margin-right: 30px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: #86888c;
      line-height: 14px;
      &.act {
        position: relative;
        color: #fff;
      }
      &.act:after {
        position: absolute;
        left: -1px;
        bottom: 10px;
        content: "";
        display: block;
        width: 29px;
        height: 3px;
        background: linear-gradient(
          135deg,
          rgba(241, 100, 129, 1) 0%,
          rgba(241, 144, 108, 1) 100%
        );
      }
    }
  }
}
</style>
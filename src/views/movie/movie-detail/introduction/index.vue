<template>
  <div class="introduction">
    <!-- 内容 -->
    <div class="content">
      {{ movieinfo.content }}
    </div>
    <!-- 演员 -->
    <div class="actor-title">
      演职人员
    </div>
    <!-- 演员列表 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <router-link
          :to="{ name: 'actor' }"
          class="swiper-slide"
          v-for="item in actorinfo"
          :key="item.id"
        >
          <img :src="item.img" alt />
          <p>{{ item.name }}</p>
          <div class="play">{{ item.play }}</div>
        </router-link>
      </div>
    </div>
    <div class="video-title">
      视频
    </div>
    <!-- 视频 -->
    <div class="video"></div>
    <!-- 视频列表 -->
    <div class="swiper-container-movie">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img :src="require('@/assets/movie-imgs/actorinfo/movie.png')" alt />
          <p>《傲慢与偏见》：百年经典的绝美呈现， 一次现实与理想的爱情碰撞</p>
        </div>
        <div class="swiper-slide">
          <img :src="require('@/assets/movie-imgs/actorinfo/movie2.png')" alt />
          <p>借了不朽经典的光，拍了一 部沦为普通的爱情故事</p>
        </div>
      </div>
    </div>
    <div class="boxoffice-title">票房</div>
    <div class="boxoffice">
      <div class="today">
        <div class="num">2</div>
        <div class="text">今日票房排行</div>
      </div>
      <div class="week">
        <div class="num">暂无</div>
        <div class="text">首周票房（万）</div>
      </div>
      <div class="quantity">
        <div class="num">2660</div>
        <div class="text">今日票房</div>
      </div>
    </div>
    <router-link :to="{ name: 'boxoffice' }">
      <div class="boxoffice-info">票房</div>
    </router-link>
    <selection></selection>
  </div>
</template>

<script>
import selection from "../../../../components/selection";
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "introduction",
  data() {
    return {
      movieinfo: {},
      actorinfo: {}
    };
  },
  created() {
    // this.movieinfo = this.$route.params.movieinfo;

    this.movieinfo = localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie"))
      : "";

    this.actorinfo = localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie.actorinfo"))
      : "";
    this.actorinfo = this.movieinfo.actorinfo;
  },
  mounted: function() {
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 15,
      freeMode: true,
      breakpoints: {
        //当宽度大于等于320
        320: {
          slidesPerView: "auto",
          spaceBetween: 15
        }
      }
    });
    new Swiper(".swiper-container-movie", {
      slidesPerView: "auto",
      spaceBetween: 15,
      freeMode: true,
      breakpoints: {
        //当宽度大于等于320
        320: {
          slidesPerView: "auto",
          spaceBetween: 15
        }
      }
    });
  },
  components: {
    selection: selection
  }
};
</script>

<style lang='scss' scoped>
.introduction {
  .content {
    width: 330px;
    height: 72px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: #5a5d62;
    line-height: 18px;

    white-space: wrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
  }
  .actor-title {
    margin-top: 30px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 18px;
  }
  .swiper-container {
    margin-left: -20px;
    margin-top: 20px;
    .swiper-wrapper {
      margin-left: 20px;
      .swiper-slide {
        width: 100px;
        img {
          width: 100px;
          height: 140px;
        }
        p {
          margin-top: 10px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: #b9babc;
          line-height: 14px;
        }
        .play {
          margin-top: 6px;
          width: 60px;
          height: 12px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: #64676b;
          line-height: 12px;
        }
      }
    }
  }
  .video-title {
    margin-top: 30px;
    width: 375px;
    height: 18px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 18px;
  }
  .swiper-container-movie {
    margin-left: -20px;
    margin-top: 20px;
    .swiper-wrapper {
      margin-left: 20px;
      .swiper-slide {
        width: 200px;
        img {
          width: 200px;
          height: 120px;
        }
        p {
          margin-top: 10px;
          width: 216px;
          height: 36px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: #bcbdbf;
          line-height: 18px;
        }
      }
    }
  }
  .boxoffice-title {
    margin-top: 30px;
    width: 36px;
    height: 18px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 18px;
  }
  .boxoffice {
    margin-left: -20px;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    height: 40px;
    width: 100%;
    .today,
    .week,
    .quantity {
      text-align: center;
      width: 33%;
      height: 100%;
      .num {
        height: 18px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
      }
      .text {
        margin-top: 5px;
        height: 12px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #55585d;
        line-height: 12px;
      }
    }
  }
  .boxoffice-info {
    margin-bottom: 60px;
    height: 14px;
    width: 375px;
    text-align: center;
    margin-left: -20px;
    margin-top: 17px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(251, 195, 74, 1);
    line-height: 14px;
  }
}
</style>
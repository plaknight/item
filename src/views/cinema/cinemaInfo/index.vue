<template>
  <div class="cinemaInfo">
    <div class="topBg">
      <div class="top">
        <div class="top-c center">
          <img :src="imgs.backArr" alt="" class="backArr" @click="goBack()" />
          <h3>{{ cinemaObj.name }}</h3>
          <img :src="imgs.star" alt="" class="star" />
        </div>
        <div class="title">
          <div class="title-c center">
            <h3>{{ cinemaObj.name }}</h3>
            <img :src="imgs.arrRight" alt="" />
            <img :src="imgs.position" alt="" class="position" />
          </div>
        </div>
        <div class="address">
          {{ cinemaObj.address }}
        </div>
        <swiper
          :options="moviesSwiperOption"
          ref="mySwiper"
          class="movieSwiper"
        >
          <swiper-slide
            v-for="(item, index) in movieSwiperArr"
            :key="index"
            class="swiper-slide"
          >
            <img :src="item.img" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "cinemaInfo",
  data() {
    return {
      imgs: {
        backArr: require("../../../assets/movie-imgs/map/arr-left.png"),
        star: require("../../../assets/movie-imgs/cinemaInfo/star.png"),
        arrRight: require("../../../assets/movie-imgs/cinemaInfo/arr-right.png"),
        position: require("@/assets/movie-imgs/cinemaInfo/position.png")
      },
      cinemaObj: {},
      moviesSwiperOption: {
        slidesPerView: "auto",
        spaceBetween: -60,
        centeredSlides: true,
        loop: true,
      }
    };
  },
  computed: {
    ...mapState({
      movieSwiperArr(state) {
        return state.cinemaInfo.movieSwiperArr;
      }
    })
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },

  created() {
    this.cinemaObj = JSON.parse(localStorage.getItem("cinemaObj"));
  },
  destroyed() {
    window.localStorage.removeItem("cinemaObj");
  }
};
</script>

<style lang='scss' scoped>
.cinemaInfo {
  width: 100%;
  height: 100%;
  font-family: PingFangSC-Medium, PingFangSC;
  .center {
    position: relative;
    width: 335px;
    margin: 0 auto;
  }
  .topBg {
    width: 100%;
    height: 323px;
    background: url("../../../assets/movie-imgs/cinemaInfo/topbg.png") no-repeat
      center;
    background-size: 100% 100%;
    position: relative;
    .top {
      width: 100%;
      height: 22px;
      padding-top: 20px;
      .top-c {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .backArr {
          width: 18px;
          height: 18px;
        }
        h3 {
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
        }
        .star {
          width: 20px;
          height: 18px;
        }
      }
    }
    .title {
      width: 100%;
      height: 22px;
      margin: 23px 0 1px 0;
      .title-c {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
          text-indent: 44px;
          height: 22px;
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
        }
        img {
          width: 20px;
          height: 20px;
        }
        .position {
          position: absolute;
          top: 0;
          left: 0;
          width: 24px;
          height: 27px;
        }
      }
    }
    .address {
      text-indent: 44px;
      width: 335px;
      margin: 0 auto;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.6);
      line-height: 17px;
    }
    .movieSwiper {
      width: 297px !important;
      height: 188px;
      margin-top: 44px;
      .swiper-slide {
        width: 140px !important;
        height: 188px !important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        transition: 300ms;
        transform: scale(0.8);
        margin-top: -5px;
        img {
          width: 140px;
          height: 188px;
        }
      }
      .swiper-slide-active,
      .swiper-slide-duplicate-active {
        transform: scale(1);
        z-index: 10;
      }
      .swiper-slide-prev,
      .swiper-slide-next {
        transform: scale(0.8);
        z-index: 9;
      }
      .swiper-slide-next + div {
        transform: scale(0.6);
      }
      .swiper-slide-first {
        transform: scale(0.6);
      }
    }
  }
}
</style>
<template>
  <div class="cinemaInfo">
    <div class="betterScroll">
      <div class="topBg">
        <div class="top">
          <div class="top-c center">
            <img :src="imgs.backArr" alt="" class="backArr" @click="goBack()" />
            <h3>{{ cinemaObj.name }}</h3>
            <img :src="imgs.star" alt="" class="star" />
          </div>
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
            <img :src="item.img" alt="" :data-id="index" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="movieText">
        <div class="movieText-c center">
          <h3>{{ movieSwiperArr[index].name }}</h3>
          <div class="info">
            <span class="time">{{ movieSwiperArr[index].time }}</span>
            <span class="movieClass">{{ movieSwiperArr[index].class }}</span>
            <span class="actor">{{ movieSwiperArr[index].actor }}</span>
          </div>
        </div>
      </div>
      <div class="date">
        今天10月1日
      </div>
      <div class="ticket">
        <div class="ticket-c center">
          <div
            class="ticketBox"
            v-for="(item, index) in movieSwiperArr[index].session"
            :key="index"
          >
            <div class="time">
              <div class="startTime">
                {{ item.startTime }}
              </div>
              <div class="endTime">{{ item.endTime }}离场</div>
            </div>
            <div class="where">
              <h4>原版3D</h4>
              <p>2号厅(冠名招商中))</p>
            </div>
            <div class="maney">30.9元</div>
            <div class="buy" @click="jumpSeat">购票</div>
          </div>
        </div>
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
      index: 0,
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
        on: {
          slideChangeTransitionEnd: () => {
            this.index = document.querySelector(
              ".swiper-slide-active"
            ).dataset.swiperSlideIndex;
          }
        }
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
    jumpSeat() {
      this.$router.push("/seat");
    },
    goBack() {
      this.$router.go(-1);
      window.localStorage.removeItem("cinemaObj");
    }
  },
  mounted() {
    let bs = new this.BScroll(".cinemaInfo", {
      // ...... 详见配置项
      click: true
    });
  },
  created() {
    this.cinemaObj = JSON.parse(localStorage.getItem("cinemaObj"));
  }
};
</script>

<style lang='scss' scoped>
.cinemaInfo {
  width: 100%;
  height: 100%;
  font-family: PingFangSC-Medium, PingFangSC;
  .betterScroll {
    .center {
      position: relative;
      width: 335px;
      margin: 0 auto;
    }
    .topBg {
      width: 100%;
      height: 323px;
      background: url("../../../assets/movie-imgs/cinemaInfo/topbg.png")
        no-repeat center;
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
        width: 335px !important;
        height: 210px;
        margin-top: 34px;
        .swiper-slide {
          width: 148px !important;
          height: 210px !important;
          transition: 300ms;
          transform: scale(0.6);
          margin: 0 auto;
          img {
            width: 148px;
            height: 210px;
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
      }
    }
    .movieText {
      margin-top: 30px;
      width: 100%;
      height: 100px;
      .movieText-c {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: center;
        h3 {
          text-align: center;
          width: 100%;
          height: 25px;
          font-size: 18px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 25px;
        }
        .info {
          width: 100%;
          height: 70px;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          justify-content: center;
          span {
            text-align: center;
            display: block;
            width: 100%;
            color: #84878a;
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          }
        }
      }
    }
    .date {
      width: 335px;
      height: 17px;
      margin: 10px auto;
      font-size: 12px;
      font-weight: 400;
      color: rgba(251, 195, 74, 1);
      line-height: 17px;
    }
    .ticket {
      width: 100%;
      .ticket-c {
        color: #a9aaad;
        .ticketBox {
          width: 100%;
          height: 91px;
          background-color: #33363d;
          display: flex;
          justify-content: space-around;
          margin-bottom: 10px;
          .time {
            width: 64px;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-content: center;
            flex-wrap: wrap;
            .startTime {
              height: 25px;
              font-size: 18px;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              line-height: 25px;
            }
            .endTime {
              height: 17px;
              font-size: 12px;
              font-weight: 400;
              line-height: 17px;
            }
          }
          .where {
            width: 68px;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-content: center;
            flex-wrap: wrap;
            h4 {
              color: #e0e1e2;
              height: 17px;
              font-size: 12px;
              font-weight: 400;
              line-height: 17px;
            }
            p {
              font-size: 12px;
              font-weight: 400;
              line-height: 17px;
            }
          }
          .maney {
            height: 100%;
            font-size: 18px;
            font-weight: 500;
            color: rgba(251, 195, 74, 1);
            line-height: 91px;
          }
          .buy {
            margin-top: 34px;
            width: 45px;
            height: 25px;
            background: linear-gradient(
              150deg,
              rgba(242, 91, 134, 1) 0%,
              rgba(241, 172, 94, 1) 100%
            );
            box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
            border-radius: 6px;
            font-size: 12px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 25px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
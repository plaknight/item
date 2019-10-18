<template>
  <div class="home">
    <transition
      enter-active-class="animated slideInRight faster"
      leave-active-class="animated slideOutRight faster"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
    <div class="betterScroll" v-show="$route.meta.isShow">
      <!-- betterScroll 插件 -->
      <!-- 头部开始 -->
      <div class="header">
        <div class="header-c">
          <div class="adress" @click="jumpCity">
            <p>{{ address }}</p>
            <img :src="imgs.down" alt />
          </div>
          <div class="input">
            <img :src="imgs.search" alt />
            <input
              type="text"
              placeholder="搜影片、影院、影人"
              @click="fucusJump($event)"
            />
          </div>
          <div class="clock">
            <img :src="imgs.clock" alt @click="jumpSignIn" />
          </div>
        </div>
      </div>
      <!-- 轮播开始 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in imgs.swiperImg"
            :key="index"
          >
            <img :src="item" alt />
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <titleP msg="热映影片" msg2="全部" to="hots"></titleP>
      <!-- 热映电影 -->
      <div class="swiper-container-hots">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in hotList" :key="item.id">
            <img :src="item.img" alt />
            <p>{{ item.name }}</p>
            <div class="btnBuy">购票</div>
          </div>
        </div>
      </div>
      <!-- 即将上映 -->
      <titleP msg="即将上映" msg2="全部" to="future"></titleP>
      <div class="swiper-container-future">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in futureList" :key="item.id">
            <img :src="item.img" alt />
            <p>{{ item.name }}</p>
            <div class="time">{{ item.time }}</div>
          </div>
        </div>
      </div>
      <!-- 预告 -->
      <titleP msg="精选预告" msg2="更多" to="future"></titleP>
      <div class="swiper-container-herald">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in heraldList" :key="item.id">
            <img :src="item.img" alt />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import titleP from "@/components/home-title.vue";
// @ is an alias to /src
//图片
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "home",
  watch: {
    // "$route.path"(newVal, old) {
    //   if (newVal === "/home") {
    //     this.address = this.$route.query.address;
    //   }
    // }
  },
  computed: {
    ...mapState({
      hotList(state) {
        return state.hotmovie.hotmovie;
      },
      futureList(state) {
        return state.hotmovie.datemovie;
      },
      heraldList(state) {
        return state.hotmovie.heraldmovie;
      }
    }),
    ...mapGetters({
      address: "city/getAddress"
    })
  },
  methods: {
    ...mapMutations({
      changeAddress: "city/changeAddress",
      initPosition: "city/initPosition"
    }),

    //跳转到签到页面
    jumpSignIn() {
      this.$router.push("/home/signIn");
    },
    //跳转到城市页面
    jumpCity() {
      this.$router.push("/home/city");
    },
    //搜索框聚焦跳转
    fucusJump(e) {
      this.$router
        .push({
          path: "/home/search"
          // query: {
          //   address: this.address
          // }
        })
        .catch(err => {});
    }
    //百度地图定位
  },
  data() {
    return {
      imgs: {
        down: require("@/assets/movie-imgs/home/下 箭头.png"),
        search: require("@/assets/movie-imgs/home/搜索.png"),
        clock: require("@/assets/movie-imgs/home/打卡.png"),
        swiperImg: [
          require("@/assets/movie-imgs/home/大鱼海棠.png"),
          require("@/assets/movie-imgs/home/大鱼海棠复制 4.png"),
          require("@/assets/movie-imgs/home/大鱼海棠.png")
        ]
      }
      // address: ""
      // cityShow: true
    };
  },
  components: {
    titleP: titleP
  },
  mounted: function() {
    //默认百度插件执行
    // console.log(1);
    this.initPosition();

    //betterSrcoll插件
    let bs = new this.BScroll(".home", {
      // ...... 详见配置项
      click: true
    });
    new Swiper(".swiper-container", {
      autoplay: {
        //自动
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      pagination: {
        //分页器
        el: ".swiper-pagination"
      },
      loop: true, //开启循环
      //	loopedSlides:5,//在loop模式下使用slidesPerview:'auto',还需使用该参数设置所要用到的loop个数。
      slidesPerView: "auto", //设置slider容器能够同时显示的slides数量(carousel模式)。另外，支持'auto'值，会根据容器container的宽度调整slides数目。
      effect: "coverflow", //可以实现3D效果的轮播,
      centeredSlides: true, //设定为true时，active slide会居中，而不是默认状态下的居左。
      spaceBetween: -20,
      coverflowEffect: {
        rotate: 0
      }
    });
    new Swiper(".swiper-container-hots", {
      slidesPerView: "auto",
      spaceBetween: 10,
      breakpoints: {
        //当宽度大于等于320
        320: {
          slidesPerView: "auto",
          spaceBetween: 10
        }
      }
    });
    new Swiper(".swiper-container-future", {
      slidesPerView: "auto",
      spaceBetween: 10,
      breakpoints: {
        //当宽度大于等于320
        320: {
          slidesPerView: "auto",
          spaceBetween: 10
        }
      }
    });
    new Swiper(".swiper-container-herald", {
      slidesPerView: "auto",
      spaceBetween: 15,
      breakpoints: {
        //当宽度大于等于320
        320: {
          slidesPerView: "auto",
          spaceBetween: 15
        }
      }
    });
  },
  created() {}
};
</script>
<style lang="scss" scoped>
// 修改

.home {
  height: 100%;
}

.header {
  height: 36px;
  width: 100%;
  .header-c {
    position: relative;
    height: 36px;
    width: 335px;
    margin: 10px auto;
    .adress {
      float: left;
      margin-top: 11px;
      position: relative;
      width: 50px;
      height: 14px;
      font-size: 14px;
      font-weight: 400;
      color: #b1b2b3;
      line-height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 34px;
        text-align: center;
      }
    }
    .input {
      position: relative;
      float: left;
      width: 259px;
      height: 36px;
      img {
        position: absolute;
        left: 12px;
        bottom: 9px;
      }
      input {
        width: 259px;
        height: 36px;
        background: rgba(51, 54, 61, 1);
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
        border: none;
        outline: none;
        border-radius: 18px;
        color: #b1b2b3;
        text-indent: 36px;
      }
    }
    .clock {
      img {
        position: absolute;
        right: 0;
        top: 9px;
      }
    }
  }
}
.swiper-container {
  margin-top: 10px;
  width: 100%;
  height: 145px;
}
.swiper-container img {
  display: block;
  width: 335px;
  height: 145px;
  margin: 0 auto;
}
.swiper-pagination-bullets {
  margin-top: 8px;
  position: relative;
  width: auto;
  left: 50%;
  transform: translate(-50%, -50%);
}
.swiper-container-hots {
  margin-left: 20px;
  img {
    width: 90px;
    height: 122px;
    // background:rgba(216,216,216,1);
    border-radius: 6px;
  }
  p {
    overflow: hidden;
    width: 90px;
    height: 12px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFangSC;
    font-weight: 500;
    color: rgba(223, 223, 223, 1);
    line-height: 12px;
    margin: 5px 0;
  }
  .btnBuy {
    width: 50px;
    height: 22px;
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
    border-radius: 11px;
    line-height: 22px;
    font-size: 12px;
    font-weight: 500;
    color: rgba(223, 223, 223, 1);
    text-align: center;
  }
  .swiper-slide {
    width: auto !important;
  }
}
.swiper-container-future {
  margin-left: 20px;
  img {
    width: 120px;
    height: 162px;
    border-radius: 6px;
  }
  p {
    width: 96px;
    height: 20px;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
    color: rgba(223, 223, 223, 1);
    line-height: 20px;
    margin: 5px 0;
    overflow: hidden;
  }
  .time {
    width: 50px;
    height: 17px;
    font-size: 10px;
    font-weight: 400;
    color: #b1b2b3;
    line-height: 17px;
  }
  .swiper-slide {
    width: auto !important;
  }
}
.swiper-container-herald {
  margin-left: 20px;
  img {
    width: 295px;
    height: 160px;
    border-radius: 6px;
  }
  p {
    width: 295px;
    height: 36px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFangSC;
    font-weight: 500;
    color: rgba(223, 223, 223, 1);
    line-height: 18px;
  }
  .swiper-slide {
    width: auto !important;
  }
}
// 修改的地方
.betterScroll {
  padding-bottom: 100px;
}
</style>

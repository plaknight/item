<template>
  <div class="nearbyMap">
    <div class="wrapper">
      <div class="content">
        <div class="header">
          <div class="header-c center">
            <img :src="imgs.backArr" alt="" class="backArr" @click="back" />
            <h3>影院地图</h3>
            <img :src="imgs.search" alt="" class="search" />
          </div>
        </div>
        <div id="mapDiv"></div>
        <swiper :options="cinemaSwiperOption" ref="mySwiper" class="cinemaSwiper">
          <swiper-slide v-for="(item, index) in cinemaInfo" :key="index" class="swiper-slide">
            <div class="item">
              <img :src="item.img" alt="" />
              <div class="info">
                <div class="title">{{ item.name }}</div>
                <div class="row">
                  <div class="icon">
                    <img :src="imgs.fx" alt="" class="fx">
                    <img :src="imgs.tel" alt="" class="tel">
                  </div>
                  <span>45min</span>
                </div>
                <div class="look">查看</div>
              </div>
            </div>
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
  name: "nearbyMap",
  data() {
    return {
      imgs: {
        backArr: require("../../assets/movie-imgs/map/arr-left.png"),
        search: require("@/assets/movie-imgs/首页_slices/搜索.png"),
        fx: require("../../assets/movie-imgs/map/share.png"),
        tel: require("../../assets/movie-imgs/map/电话@2x.png"),
      },
      map: {
        pointLat: "",
        pointLng: "",
        cityName: ""
      },
      cinemaSwiperOption: {
        slidesPerView: "auto",
        spaceBetween: 18,
        freeMode: true,
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    ...mapState({
      cinemaInfo(state) {
        return state.cinema.cinemaInfo;
      }
    })
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    addMap() {
      // 百度地图API功能
      var map = new BMap.Map("mapDiv"); // 创建Map实例
      map.centerAndZoom(
        new BMap.Point(this.map.pointLng, this.map.pointLat),
        16
      ); // 初始化地图,设置中心点坐标和地图级别
      var top_right_navigation = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
        type: BMAP_NAVIGATION_CONTROL_SMALL
      });
      var marker = new BMap.Marker(
        new BMap.Point(this.map.pointLng, this.map.pointLat),
        {
          icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
            scale: 1.5, //图标缩放大小
            fillColor: "#000", //填充颜色
            fillOpacity: 0.8 //填充透明度
          })
        }
      );

      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map }
      });
      local.search("影院");
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.addControl(top_right_navigation);
      map.addOverlay(marker);
    }
  },
  mounted() {
    this.addMap();
  },
  created() {
    this.map.pointLat = this.$route.params.pointLat;
    this.map.pointLng = this.$route.params.pointLng;
    this.map.cityName = this.$route.params.cityName;
  }
};
</script>

<style lang='scss' scoped>
.nearbyMap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: PingFangSC-Regular, PingFangSC;
  .wrapper {
    width: 100%;
    height: 100%;
    .content {
      width: 100%;
      height: 100%;
      .center {
        width: 335px;
        margin: 0 auto;
        position: relative;
      }
      .header {
        height: 44px;
        width: 100%;
        background: #33363d;
        margin-top: 12px;
        .header-c {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .backArr {
            width: 16px;
            height: 16px;
          }
          h3 {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            height: 44px;
            font-size: 19px;
            color: rgba(255, 255, 255, 1);
            line-height: 44px;
          }
          .search {
            img {
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
      #mapDiv {
        width: 100%;
        height: 611px;
        border-radius: 22px;
      }
      .cinemaSwiper {
        position: absolute;
        bottom: 36px;
        left: 0;
        padding-left: 20px;
        box-sizing: border-box;
        width: 100%;
        height: 194px;
        z-index: 10;
        .swiper-slide {
          width: 203px !important;
          height: 100%;
          .item{
            width: 100%;
            height: 100%;
            background-color: #33363d;
            box-shadow:0px 0px 9px 3px rgba(0,0,0,0.19);
            border-radius:10px !important;
            img {
            width: 203px;
            height: 126px;
            box-shadow:0px 0px 9px 3px rgba(0,0,0,0.19);
            border-radius:10px !important;
            }
            .info {
              width: 100%;
              height: 68px;
              background-color: #33363d;
              position: relative;
              .title {
                width: 132px;
                height: 17px;
                font-size: 12px;
                line-height: 17px;
                font-weight: 400;
                padding: 5px 0 0 7px;
                color: #c7c7c9;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .row{
                width: 132px;
                height: 17px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 7px 0 0 10px;
                .icon{
                  width: 48px;
                  height: 100%;
                  display: flex;
                  justify-content: space-between;
                  img{
                    width: 17px;
                    height: 17px;
                  }
                }
                span{
                  font-size:12px;
                  font-weight:400;
                  color:#77797E;
                  line-height:17px;
                }
              }
              .look{
                position: absolute;
                right: 6px;
                bottom: 23px;
                width:45px;
                height:25px;
                background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
                box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
                border-radius:6px;
                text-align: center;
                line-height: 25px;
                font-size:12px;
                font-weight: 500;
                color:#FEFAF9;
              }
            }
          }
        }
      }
    }
  }
}
</style>
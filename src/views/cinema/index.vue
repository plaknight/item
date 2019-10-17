<template>
  <div class="cinema">
    <div class="wrapper">
      <div class="content">
        <div class="header">
          <div class="header-c center">
            <div class="adress">
              郑州
              <img :src="imgs.downArr" alt />
            </div>
            <p>影院</p>
            <div class="search">
              <img :src="imgs.search" alt />
            </div>
          </div>
        </div>
        <div class="position">
          <div class="position-c center">
            <img :src="imgs.position" alt="" class="positionIcon" />
            <div class="positionCity" @click="newPosition">
              <span>我在:</span>
              <span class="cityName">{{ cityName ? cityName : "未定位" }}</span>
            </div>
            <div class="lookMap" @click="toMap">查看地图</div>
          </div>
        </div>
        <div class="cinemaInfo" v-if="ifPosition">
          <div class="cinemaInfo-c center">
            <div
              class="cinemaBox"
              v-for="(item, index) in cinemaInfo"
              :key="index"
              @click="toCinemaInfo(item.id)"
            >
              <div class="cinemaBox-c">
                <div class="title">
                  <h3>{{ item.name }}</h3>
                  <div class="money">
                    <span class="num">{{ item.maney }}</span>
                    <span class="qi">起</span>
                  </div>
                </div>
                <div class="cinemaAddress">
                  <p>{{ item.address }}</p>
                  <span>1.7km</span>
                </div>
                <div class="coupon">
                  <div class="couponInfo">
                    <span>惠</span>
                    <p>我不是药神等4部影片特惠</p>
                  </div>
                  <div class="couponInfo2">
                    <span>促</span>
                    <p>观影套餐限量特惠</p>
                  </div>
                  <div class="couponInfo3">
                    <span>卡</span>
                    <p>开卡特惠，每单2张立减2元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="error" v-else>未获取定位信息,无法加载影院</div>
      </div>
    </div>
    <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    <div id="allmap"></div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import { Dialog } from "vant";
export default {
  name: "cinema",
  data() {
    return {
      imgs: {
        down: require("@/assets/movie-imgs/home/下 箭头.png"),
        search: require("@/assets/movie-imgs/home/搜索.png")
      },
      ifPosition: false
    };
  },
  computed: {
    ...mapState({
      cityName(state) {
        return state.cinema.map.cityName;
      },
      pointLat(state) {
        return state.cinema.map.pointLat;
      },
      pointLng(state) {
        return state.cinema.map.pointLng;
      },
      cinemaInfo(state) {
        return state.cinema.cinemaInfo;
      }
    })
  },
  methods: {
    ...mapMutations({
      initPosition: "cinema/initPosition"
    }),
    toMap() {
      this.$router.push({
        name: "nearbyMap",
        params: {
          pointLat: this.pointLat,
          pointLng: this.pointLng,
          cityName: this.cityName
        }
      });
    },
    toCinemaInfo(val) {
      var index = this.cinemaInfo.findIndex(ele => ele.id == val);
      localStorage.setItem("cinemaObj", JSON.stringify(this.cinemaInfo[index]));
      this.$router.push({ name: "cinemaInfo" });
    },
    newPosition() {
      Dialog.confirm({
        title: "定位",
        message: "是否允许获取您的位置信息"
      })
        .then(() => {
          this.ifPosition = true;
          this.initPosition();
        })
        .catch(() => {
          // this.ifPosition = false
        });
    }
  },
  created() {
    if (this.cityName == "") {
      Dialog.confirm({
        title: "定位",
        message: "是否允许获取您的位置信息"
      })
        .then(() => {
          this.ifPosition = true;
          this.initPosition();
        })
        .catch(() => {
          // this.ifPosition = false
        });
    }
  }
};
</script>

<style lang='scss' scoped>
.cinema {
  width: 100%;
  height: 100%;
  font-family: PingFangSC-Regular, PingFangSC;
  .wrapper {
    width: 100%;
    height: 100%;
    .content {
      width: 100%;
      padding-bottom: 35px;
      .center {
        width: 335px;
        margin: 0 auto;
        position: relative;
      }
      .header {
        height: 44px;
        width: 100%;
        background: #33363d;
        margin: 12px 0;

        .header-c {
          height: 44px;
          .adress {
            float: left;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
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
      .position {
        width: 100%;
        height: 30px;
        background-color: #2c2f36;
        .position-c {
          height: 100%;
          display: flex;
          align-items: center;
          .positionIcon {
            width: 13px;
            height: 16px;
          }
          .positionCity {
            span {
              height: 17px;
              font-size: 12px;
              line-height: 17px;
              color: #95979a;
              margin-left: 11px;
            }
            .cityName {
              padding-top: 10px;
            }
          }
          .lookMap {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 17px;
            font-size: 12px;
            line-height: 17px;
            color: #95979a;
          }
        }
      }
      .cinemaInfo {
        width: 100%;
        height: auto;
        margin-top: 12px;

        .cinemaInfo-c {
          height: 100%;
          .cinemaBox {
            width: 100%;
            height: 146px;
            background-color: #2c2f36;
            margin-bottom: 15px;
            .cinemaBox-c {
              width: 312px;
              height: 100%;
              margin: 0 auto;
              color: #b7b8bb;
              .title {
                width: 100%;
                height: 20px;
                display: flex;
                justify-content: space-between;
                padding-top: 9px;
                margin-bottom: 3px;
                h3 {
                  color: #ffffff;
                  font-size: 14px;
                  line-height: 20px;
                  font-weight: 500;
                }
                .money {
                  height: 20px;
                  .num {
                    color: #fbc34a;
                    font-size: 14px;
                    height: 20px;
                    line-height: 20px;
                  }
                  .qi {
                    font-size: 12px;
                    color: #c8c8c9;
                    height: 12px;
                    line-height: 12px;
                  }
                }
              }
              .cinemaAddress {
                width: 100%;
                height: 17px;
                display: flex;
                justify-content: space-between;
                p {
                  width: 240px;
                  font-size: 12px;
                  height: 100%;
                  line-height: 17px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
              .coupon {
                width: 100%;
                height: 75px;
                margin-top: 10px;
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                .couponInfo2 {
                  span {
                    background: linear-gradient(
                      135deg,
                      rgba(176, 70, 157, 1) 0%,
                      rgba(97, 72, 170, 1) 100%
                    ) !important;
                  }
                }
                .couponInfo3 {
                  span {
                    background: linear-gradient(
                      135deg,
                      rgba(50, 36, 149, 1) 0%,
                      rgba(49, 56, 172, 1) 100%
                    ) !important;
                  }
                }
                .couponInfo,
                .couponInfo2,
                .couponInfo3 {
                  width: 100%;
                  height: 19px;
                  display: flex;
                  justify-content: start;
                  span {
                    display: block;
                    width: 18px;
                    height: 19px;
                    background: linear-gradient(
                      135deg,
                      rgba(235, 110, 117, 1) 0%,
                      rgba(247, 166, 83, 1) 100%
                    );
                    border-radius: 4px;
                    color: #dfdfdf;
                    text-align: center;
                    line-height: 19px;
                  }
                  p {
                    margin-left: 9px;
                    font-size: 12px;
                    height: 17px;
                    line-height: 19px;
                  }
                }
              }
            }
          }
        }
      }
      .error {
        width: 100%;
        height: 400px;
        color: #fff;
        font-size: 20px;
        text-align: center;
        line-height: 400px;
      }
    }
  }
}
</style>
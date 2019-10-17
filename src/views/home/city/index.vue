<template>
  <div class="city-wrap">
    <div class="city">
      <div class="city-header">
        <div class="city-search">
          <div class="search-info">
            <img :src="search" alt="" /><input
              type="text"
              placeholder="输入城市"
              v-model="searchCity"
              @keydown.13="clearText"
            />
          </div>
          <p>取消</p>
        </div>
      </div>
      <div class="city-main">
        <ul class="correspond">
          <li
            v-for="(item, index) in searchCityList"
            :key="item.id"
            :class="index === searchCityList.length - 1 ? 'firstItem' : ''"
            @click="jumpHeader(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
        <p class="positionCity-title">定位城市</p>
        <div class="positionCity">
          <div>{{ address }}</div>
          <img :src="position" alt="" @click="initPosition" />
        </div>
        <!-- <div class="positionCity">{{ address }}</div> <img :src="position" alt=""> -->
        <p class="historyCity-title">历史访问城市</p>
        <div class="historyCity">
          <div
            class="positionCity-item"
            v-for="(item, index) in historyCity"
            :key="item + index"
            @click="jumpHeader(item)"
          >
            {{ item }}
          </div>
        </div>
        <p class="hotCity-title">热门城市</p>
        <div class="hotCity">
          <div
            class="hotCity-item"
            v-for="(item, index) in hotCity"
            :key="item + index"
            @click="jumpHeader(item.name)"
          >
            {{ item.name }}
          </div>
        </div>

        <ul class="cityList" ref="cityList">
          <li class="cityLi" v-for="(val, key, index) in cityList" :key="index">
            <h5>{{ key }}</h5>
            <p v-for="el in val" :key="el.id" @click="jumpHeader(el.name)">
              {{ el.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div class="sidebar">
      <p>定位历史热门</p>
      <ul
        class="cityAlphabet"
        @touchmove.stop="move($event)"
        @touchend="end($event)"
      >
        <li v-for="item in cityListLetter" :key="item.id" @touchstart="start">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="mask" v-show="maskIsShow">
      {{ letter }}
    </div>
    <div id="allmap"></div>
    <div class="city-title">
      <p class="close" @click="backHome">关闭</p>
      <h3 class="text">选择城市</h3>
    </div>
  </div>
</template>

<script>
//引入 城市数据

import cityList from "./data.json";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "city",
  data() {
    return {
      // address: "",
      cityListLetter: Object.keys(cityList).filter(el => el !== "hot"),
      hotCity: cityList["hot"],
      cityList,
      // historyCity: [],
      maskIsShow: false,
      letter: "A",
      bs: {},
      search: require("@/assets/movie-imgs/home/搜索.png"),
      searchCity: "",
      searchCityList: [],
      position: require("@/assets/movie-imgs/search/position.png")
    };
  },
  watch: {
    searchCity(now, old) {
      this.searchCityList = [];
      for (let key in this.cityList) {
        if (key !== "hot") {
          this.cityList[key].forEach(el => {
            if (el.name.includes(now) && now !== "") {
              this.searchCityList.push(el);
            }
          });
        }
      }
    }
  },
  computed: {
    ...mapState({
      // address(state){
      // }
    }),
    ...mapGetters({
      address: "city/getAddress",
      historyCity: "city/gethistoryCity"
    })
  },
  methods: {
    ...mapMutations({
      changeAddress: "city/changeAddress"
      // initPosition: "city/initPosition"
    }),
    backHome() {
      // console.log(window)
      this.$router
        .push({
          path: "/home"
          // query: {
          //   address: this.address
          // }
        })
        .catch(err => {});
    },
    clearText() {
      this.searchCity = "";
      console.log(this.$store);
    },

    jumpHeader(val) {
      this.searchCityList = [];
      if (!this.historyCity.some(el => el === val)) {
        this.historyCity.unshift(val);
        if (this.historyCity.length > 6) {
          this.historyCity.pop();
        }
      }
      this.changeAddress(val);
      this.bs.scrollTo(0, 0, 400);
    },

    start() {
      this.maskIsShow = true;
    },

    pubulic(el) {
      var eleTop =
        el.currentTarget.parentNode.offsetTop -
        el.currentTarget.parentNode.offsetHeight / 2;
      var eleTopChild = el.currentTarget.offsetTop;
      var eleHeight = el.currentTarget.children[0].offsetHeight;
      var nowY = el.changedTouches[0].pageY;
      var index = Math.floor((nowY - eleTop - eleTopChild) / eleHeight);
      return index;
    },
    move(el) {
      this.letter = this.cityListLetter[this.pubulic(el)];
      this.jumpCity(this.letter);
    },
    end(el) {
      this.letter = this.cityListLetter[this.pubulic(el)];
      this.jumpCity(this.letter);
      this.maskIsShow = false;
    },
    //sidebar 点击
    jumpCity(val, number = -44) {
      this.letter = val;
      //scrollToElement(el, time, offsetX, offsetY, easing)
      const h5 = this.$refs.cityList.querySelectorAll("h5");
      let ele = Array.from(h5).find(el => el.innerText === val);
      console.log(ele);
      this.bs.scrollToElement(ele, 400, 0, number);
    },

    //定位
    initPosition() {
      var _this = this;
      var map = new BMap.Map("allmap");
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(
        function(r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var geoc = new BMap.Geocoder();
            var point = new BMap.Point(r.point.lng, r.point.lat);

            //地址逆解析
            geoc.getLocation(point, function(rs) {
              var addComp = rs.addressComponents;
              // _this.address = addComp.city.slice(0, addComp.city.length - 1);

              _this.changeAddress(
                addComp.city.slice(0, addComp.city.length - 1)
              );
              if (!_this.historyCity.some(el => el === _this.address)) {
                _this.historyCity.push(_this.address);
              }
            });
          } else {
            alert("failed" + this.getStatus());
          }
        },
        { enableHighAccuracy: true }
      );
    }
  },
  created() {},
  mounted() {
    // console.log(1);
    this.bs = new this.BScroll(".city-wrap", {
      // ...... 详见配置项
      click: true
    });
    // this.initPosition();
  }
};
</script>
<style lang='scss' scoped>
.city-wrap {
  height: 100%;
  .sidebar {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    // margin-top: calc(50% + 0px );
    right: 20px;
    z-index: 999;
    p {
      width: 30px;
      height: 52px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(241, 163, 99, 1);
      line-height: 18px;
      text-align: center;
    }
    .cityAlphabet {
      margin-top: 10px;
      li {
        font-size: 12px;
        font-weight: 400;
        color: rgba(130, 130, 130, 1);
        line-height: 17px;
        text-align: center;
        height: 17px;
      }
    }
  }

  .mask {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100px;
    height: 100px;
    border-radius: 0.26667rem;
    background: hsla(0, 0%, 100%, 0.5);
    font-size: 30px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
  .city-title {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    height: 44px;
    font-size: 0.42667rem;
    color: #fff;
    align-items: center;
    justify-content: space-between;
    background-color: #23262d;
    z-index: 999;
    .close {
      font-size: 14px;
      font-weight: 400;
      color: rgba(247, 247, 247, 1);
      line-height: 16px;
      margin-left: 25px;
    }
    .text {
      flex: 1;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      color: rgba(245, 245, 245, 1);
      line-height: 18px;
      padding-right: 32px;
    }
  }
}
.city {
  .city-header {
    padding-top: 60px;
    .city-search {
      display: flex;
      align-items: center;
      justify-content: center;
      .search-info {
        width: 298px;
        //  width: 100%;
        height: 36px;
        background: #33363d;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
        border-radius: 18px;
        display: flex;
        align-items: center;
        img {
          width: 17px;
          height: 17px;
          margin: 0 7px 0 17px;
        }
        input {
          font-size: 14px;
          color: #fff;
          outline: none;
          border: none;
          background-color: #33363d;
        }
      }
      p {
        font-size: 12px;
        font-weight: 400;
        color: rgba(247, 247, 247, 1);
        line-height: 16px;
        margin-left: 6px;
      }
    }
  }
  .city-main {
    padding-left: 20px;

    .correspond {
      li {
        // width: 100px;
        height: 50px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(247, 247, 247, 1);
        line-height: 50px;
        text-indent: 5px;
        &.firstItem {
          border-bottom: 1px solid #565454;
        }
      }
      width: 340px;
    }

    .positionCity-title {
      margin: 22px 0 15px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(247, 247, 247, 1);
      line-height: 12px;
    }
    .positionCity {
      display: flex;
      align-items: center;
      & > div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 90px;
        height: 30px;
        border: 2px solid rgba(249, 195, 74, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        color: rgba(247, 247, 247, 1);
      }
      img {
        margin-left: 30px;
        width: 20px;
        height: 20px;
      }
    }
    .historyCity-title {
      margin: 23px 0 15px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(247, 247, 247, 1);
      line-height: 12px;
    }
    .historyCity {
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      align-items: center;
      .positionCity-item {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 90px;
        height: 30px;
        background: rgba(51, 54, 61, 1);
        margin: 0 10px 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        color: rgba(247, 247, 247, 1);
        text-align: center;
        margin: 8px 8px 8px 0;
      }
    }
    .hotCity-title {
      margin: 23px 0 17px;
      font-size: 12px;
      font-weight: 400;
      color: rgba(247, 247, 247, 1);
      line-height: 12px;
    }
    .hotCity {
      display: flex;
      flex-wrap: wrap;
      .hotCity-item {
        width: 90px;
        height: 30px;
        background: rgba(51, 54, 61, 1);
        margin: 0 10px 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        color: rgba(247, 247, 247, 1);
      }
    }
    .cityList {
      p,
      h5 {
        height: 50px;
        font-size: 14px;
        font-weight: 400;
        color: rgba(247, 247, 247, 1);
        line-height: 50px;
        text-indent: 5px;
      }
    }
  }
}
</style>
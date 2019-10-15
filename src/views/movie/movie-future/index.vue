<template>
  <div class="future">
    <div class="herald">
      <h2>热门预告片</h2>
      <div class="swiper-container-herald">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in heraldList" :key="item.id">
            <img :src="item.img" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="future-main">
      <h2>即将上映</h2>
      <div class="swiper-container-dates">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            :class="chooseID == item.id ? 'active' : ''"
            v-for="item in futureList"
            :key="item.id"
            @click="chooseTime(item.date, item.id)"
          >
            {{ item.date }}
          </div>
        </div>
      </div>
    </div>
    <div class="choosetimeList" v-for="item in chooseTimeList" :key="item.id">
      <img :src="item.img" alt="" />
      <h2>{{ item.name }}</h2>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "",
  data() {
    return {
      heraldList: [],
      futureList: [],
      chooseTimeList: [],
      chooseID: null
    };
  },
  mounted() {
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
    new Swiper(".swiper-container-dates", {
      slidesPerView: "auto",
      spaceBetween: 16,
      breakpoints: {
        //当宽度大于等于320
        320: {
          slidesPerView: "auto",
          spaceBetween: 16
        }
      }
    });
  },
  methods: {
    chooseTime(time, id) {
      this.chooseTimeList = this.futureList.filter(ele => {
        return ele.date == time;
      });
      this.chooseID = id;
    }
  },
  created() {
    this.heraldList = this.$store.state.heraldList;
    this.futureList = this.$store.state.futureList;
    this.chooseID = this.futureList[0].id; // 默认第一个
    this.chooseTimeList = this.futureList.filter(ele => {
      return ele.date == this.futureList[0].date;
    }); // 默认第一个
  }
};
</script>
<style lang='scss' scoped>
h2 {
  height: 18px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(223, 223, 223, 1);
  line-height: 18px;
}
.herald {
  h2 {
    margin: 30px 0 20px 20px;
  }
  .swiper-container-herald {
    margin-left: 20px;
    .swiper-slide {
      width: auto !important;
    }
  }
}
.future-main {
  h2 {
    margin: 26px 0 11px 20px;
  }
  .swiper-container-dates {
    height: 26px;
    margin-left: 20px;
    .swiper-slide {
      width: 82px;
      height: 26px;
      text-align: center;
      line-height: 22px;
      border-radius: 13px;
      border: 2px solid rgba(150, 147, 147, 1);
      color: #b1b2b3;
      box-sizing: border-box;
    }
  }
  .active {
    background: linear-gradient(
      150deg,
      rgba(242, 91, 134, 1) 0%,
      rgba(241, 172, 94, 1) 100%
    );
    line-height: 26px !important;
    color: #dfdfdf !important;
    border: none !important;
  }
}
.choosetimeList {
  position: relative;
  width: 335px;
  margin: 0 auto;
  margin-top: 15px;
  img {
    float: left;
  }
  h2 {
    float: left;
    margin: 20px 0 0 30px;
    font-size: 18px;
    color: #dfdfdf;
  }
}
</style>
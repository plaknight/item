<template>
  <div class="ticket">
      <div class="betterScroll" >
    <div class="header">
      <div class="header-c">
        <div class="goback" @click="goback"></div>
        <div class="user">
          <div class="img"></div>
          <div class="username">hi,znKK</div>
        </div>
      </div>
    </div>
    <div class="ticket-main">
      <div class="ticket-main-c">
        <div class="search" @click="tosearch">
          <div class="search-text">试一试搜索电影</div>
          <div class="right"></div>
        </div>
        <div class="cinema" @click="toMap">
          <div class="cinema-text">万达影院</div>
          <div class="right"></div>
          <div class="position"></div>
        </div>
        <div class="date">
          <div class="date-text">5月9号</div>
          <div class="time">1:34pm</div>
          <div class="right"></div>
          <div class="more">更多场次</div>
        </div>
        <div class="radio">
          <div class="preferential">
            <input id="color-input-bgc" type="checkbox" v-model="ispreferential" />
            <label for="color-input-bgc"></label>
            <p>特惠票</p>
          </div>
          <div class="seats">
            <input id="color-input-bgc2" type="checkbox" v-model="isseats" />
            <label for="color-input-bgc2"></label>
            <p>推荐座位</p>
          </div>
        </div>
        <div class="btn">购票</div>
        <div class="history">
          <p>一条狗的使命</p>
          <p>我不是贾坤</p>
          <p>清除历史</p>
        </div>
      </div>
    </div>
    <div class="cheap">
      <div class="cheap-c">
        <div class="cheap-header">
          <h2>特惠票</h2>
          <p>更多优惠</p>
        </div>
      </div>
      <div class="card" v-for="(item,index) in cheapList" :key="index" >
        <div class="card-c">
          <div class="card-time">
            <h3 class="start">{{ item.timeStart }}</h3>
            <p class="end">{{ item.timeEnd }}</p>
          </div>
          <div class="card-name">
            <h3 class="name">{{ item.name }}</h3>
            <p class="hall">{{ item.hall }}</p>
          </div>
          <div class="card-price">{{ item.price }}</div>
          <div class="buy">购票</div>
        </div>
      </div>
    </div>
    <div class="tabbar"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      ispreferential: false,
      isseats: true,
      cheapList: [
        {
          id: 1,
          timeStart: "18:15",
          timeEnd: "20:25",
          name: "贾胖子的奇妙旅行",
          hall: "万达影城6号厅",
          price: "40.9元"
        },
        {
          id: 2,
          timeStart: "18:15",
          timeEnd: "20:25",
          name: "贾胖子的奇妙旅行",
          hall: "万达影城6号厅",
          price: "40.9元"
        },
        {
          id: 3,
          timeStart: "18:15",
          timeEnd: "20:25",
          name: "贾胖子的奇妙旅行",
          hall: "万达影城6号厅",
          price: "40.9元"
        },
        {
          id: 4,
          timeStart: "18:15",
          timeEnd: "20:25",
          name: "贾胖子的奇妙旅行",
          hall: "万达影城6号厅",
          price: "40.9元"
        },
        {
          id: 5,
          timeStart: "18:15",
          timeEnd: "20:25",
          name: "贾胖子的奇妙旅行",
          hall: "万达影城6号厅",
          price: "40.9元"
        }
      ]
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    toMap(){
      this.$router.push('/nearbyMap')
    },
     tosearch(){
         this.$router.push('/home/search')
  }
  },
 
  mounted(){
      let bs = new this.BScroll(".ticket", {
      // ...... 详见配置项
      click: true
    });
  }
};
</script>
<style lang='scss' scoped>
.ticket {
  height: 100%;
}
.header {
  height: 33px;
  width: 100%;
  padding: 20px 0;
  .header-c {
    position: relative;
    width: 335px;
    margin: 0 auto;
    height: 100%;
    .goback {
      background: url("../../assets/movie-imgs/ticket/back.png") no-repeat
        center;
      height: 100%;
      width: 7px;
    }
    .img {
      position: absolute;
      top: 0;
      right: 50px;
      width: 33px;
      height: 33px;
      background: url("../../assets/movie-imgs/ticket/userimg.png") no-repeat
        center;
      background-size: cover;
      border-radius: 50%;
    }
    .username {
      height: 33px;
      width: auto;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 33px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
.ticket-main {
  height: 300px;
  width: 335px;
  margin: 12px auto;
  background: #33363d;
  .ticket-main-c {
    width: 300px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .search {
      height: 17px;
      margin: 20px 0;
      position: relative;
      .search-text {
        font-size: 12px;
        font-weight: 400;
        color: #96979b;
        line-height: 17px;
      }
    }
    .cinema,
    .date {
      height: 22px;
      margin: 20px 0;
      position: relative;
      .cinema-text {
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      .position {
        height: 18px;
        width: 15px;
        background: url("../../assets/movie-imgs/ticket/定位复制.png") no-repeat
          center;
        background-size: cover;
        position: absolute;
        top: 2px;
        right: 33px;
      }
    }
    .date {
      .date-text {
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        float: left;
      }
      .time {
        float: left;
        margin-left: 10px;
        color: #eff0f0;
        font-size: 12px;
        line-height: 22px;
      }
      .more {
        top: 0;
        right: 17px;
        position: absolute;
        height: 22px;
        font-size: 12px;
        font-weight: 400;
        color: #96979b;
        line-height: 22px;
      }
    }
    .right {
      position: absolute;
      width: 7px;
      height: 13px;
      background: url("../../assets/movie-imgs/ticket/next.png") no-repeat
        center;
      background-size: cover;
      top: 50%;
      transform: translateY(-50%);
      right: 80px;
    }
    .radio {
      height: 18px;
      margin: 35px 0;

      .preferential,
      .seats {
        float: left;
        width: 50%;

        input[type="checkbox"] {
          width: 0;
          height: 0;
          visibility: hidden;
        }
        #color-input-bgc + label,
        #color-input-bgc2 + label {
          display: block;
          width: 18px;
          height: 18px;
          background: linear-gradient(
            128deg,
            rgba(241, 109, 125, 1) 0%,
            rgba(242, 141, 109, 1) 100%
          );
          border-radius: 1px;
          float: left;
        }
        #color-input-bgc:checked + label::before,
        #color-input-bgc2:checked + label::before {
          display: block;
          color: #fff;
          content: "\2714";
          text-align: center;
          font-size: 16px;
        }
        p {
          margin-left: 8px;
          float: left;
          width: auto;
          height: 18px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 18px;
        }
      }
      .seats {
        width: 90px;
        float: right;
      }
    }
    .btn {
      width: 100%;
      height: 40px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
      border-radius: 6px;
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 40px;
      text-align: center;
    }
    .history {
      margin-top: 20px;
      width: auto;
      height: 17px;
      p {
        line-height: 17px;
        font-size: 12px;
        color: #96979b;
        float: left;
        margin-right: 8px;
      }
    }
  }
}
.cheap {
  width: 100%;
  .cheap-c {
    width: 335px;
    margin: 0 auto;
    .cheap-header {
      height: 22px;
      margin: 29px 0 20px 0;
      h2 {
        float: left;
        line-height: 22px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
      p {
        float: right;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #96979b;
        line-height: 22px;
      }
    }
  }
  .card {
    width: 335px;
    height: 70px;
    margin: 0 auto;
    background: #33363d;
    position: relative;
    margin-bottom: 15px;
    .card-c {
      width: 95%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .card-time,
      .card-name {
        width: auto;
        height: auto;
        h3 {
          height: 22px;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
        }
        p {
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: #96979b;
          line-height: 17px;
        }
      }
      .card-price {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(251, 195, 74, 1);
      }
      .buy {
        width: 45px;
        height: 25px;
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 6px;
        text-align: center;
        line-height: 25px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
.tabbar{
  height: 70px;
}
</style>
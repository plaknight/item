<template>
  <div class="tickets">
    <div class="header">
      <div class="go" @click="go"></div>
      我的电影票
    </div>
    <div class="con">
      <div class="top">
        <div class="tl">
          <div class="name">{{ name }}</div>
          <div class="data">{{ data }}</div>
          <div class="address">{{ address }}</div>
          <div class="seat">{{ seat }}</div>
        </div>
        <img :src="src" alt="" />
      </div>
      <div class="line"></div>
      <div class="center">
        <div class="top">
          <span>取票码</span>
          <span>{{ codeid }}</span>
          <span>{{ total }}元</span>
        </div>
        <div class="code">二维码</div>
        <span>{{ length }}张电影票</span>
      </div>
      <div class="footer">
        <div class="ftop">
          <span>{{ address }}</span>
          <span>{{ distance }}km</span>
        </div>
        <div class="fbot">
          <span>{{ moveaddress }}</span>
          <img src="@/assets/movie-imgs/order/tel.png" alt="" />
        </div>
      </div>
      <div class="mov1"></div>
       <div class="mov2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      name: "后来的我们",
      data: "今天 5-8 12:00-13:56 （英语3D)",
      address: "耀莱成龙影城（建业店)",
      seat: "1号激光厅 7排12座 7排13座",
      total: 33,
      codeid: "284856992589858F",
      length: 2,
      distance: 1.3,
      moveaddress: "地址：云龙区万达广场3层",
      src: require("@/assets/movie-imgs/order/img1.png")
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='scss' scoped>
.tickets {
    perspective: 500px;
    transform-style: preserve-3d;
  .mov1 {
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -147px;
    width: 294px;
    height: 10px;
    border-radius: 10px;
    background-color: #817e7e;
     transform:translateZ(-10px);
  }
  .mov2 {
    position: absolute;
    bottom: -20px;
    left: 50%;
    margin-left: -134px;
    width: 268px;
    height: 10px;
    border-radius: 10px;
    background-color: #817e7e;
     transform:translateZ(-20px);
  }
  .header {
    padding-left: 20px;
    box-sizing: border-box;
    text-align: center;
    font-size: 20px;
    color: #fff;
    line-height: 0;
    .go {
      width: 7px;
      height: 13px;
      margin-top: 50px;
      background: url("../../assets/movie-imgs/order/left.png") no-repeat center;
      background-size: cover;
    }
  }
  .con {
    position: relative;
    z-index: 9999;
    width: 340px;
    height: 519px;
    background-color: #fff;
    border-radius: 10px;
    margin: 50px auto;
    transform:translateZ(10px);
    box-shadow: 5px 5px 5px 20px rgba(0, 0, 0, .5);
    .line {
      width: 268px;
      height: 1px;
      border: 0.5px dashed gray;
      margin: 0 auto;
    }
    .top {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .name {
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 600;
        color: #3a3a3a;
        line-height: 33px;
      }
      .data,
      .address,
      .seat {
        margin-top: 15px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        color: #3a3a3a;
      }
    }
    .center {
      position: relative;
      padding: 5px;
      text-align: center;
      border-bottom: 1px dashed gray;
      .top {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        font-size: 14px;
        span:nth-child(1),
        span:nth-child(3) {
          font-size: 14px;
          font-weight: 400;
        }
        span:nth-child(2) {
          font-size: 14px;
          font-weight: 400;
          border: 1px solid gray;
          height: 20px;
          width: 155px;
          text-align: center;
          border-radius: 5px;
        }
      }
      .code {
        width: 144px;
        height: 144px;
        line-height: 144px;
        text-align: center;
        margin: 0px auto;
        margin-top: -20px;
        border: 1px solid red;
      }
      span {
        font-size: 10px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(58, 58, 58, 1);
        margin: 10px;
        display: block;
      }
    }
    .center::before {
      position: absolute;
      left: -8px;
      top: 5px;
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #000000;
    }
    .center::after {
      position: absolute;
      right: -8px;
      top: 5px;
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #000000;
    }
    .footer {
      padding: 10px 20px;
      div {
        display: flex;
        justify-content: space-between;
        height: 20px;
        line-height: 20px;
        &.ftop {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(58, 58, 58, 1);
        }
      }
    }
  }
}
</style>
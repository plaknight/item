<template>
  <div class="order">
    <div class="header" :style="`backgroundImage:url(${imgb})`">
      <div class="go" @click="go"></div>
      <div class="name">{{ name }}</div>
      <div class="data">{{ data }}</div>
      <div class="address">{{ address }}</div>
      <div class="seat">{{ seat }}</div>
    </div>
    <div class="main">
      <div class="content">
        <info :text="'电影优惠券'" :text1="'一张优惠券可用 >'"></info>
        <info :text="'会员卡'" :text1="'去使用 >'"></info>
        <div>
          <info :text="'票价总计'"></info>
          <p>{{ total }}元</p>
        </div>
        <info :text="'手机号'"></info>
        <div>
          <span>购票成功后将收到取票码</span>
          <span>{{ tel }}</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="ft">
        <div class="tl">
          查看退票、改签协议
          <div class="rimg"></div>
        </div>
        <div class="tr">
          还需支付：<span>{{ total }}元</span>
          <div class="rimg"></div>
        </div>
      </div>
       <div class="but" @click="pay">确认订单</div>
    </div>
  </div>
</template>

<script>
import info from "@/components/orderInfo";
export default {
  name: "order",
  components: {
    info
  },
  data() {
    return {
      name: "后来的我们",
      data: "今天2月1日 17:10（原版2D)",
      address: "耀莱成龙影城（建业店)",
      seat: "3号激光厅 6排9座",
      total: 33,
      tel: 13858574848,
      imgb:require("@/assets/movie-imgs/order/banner.png")
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    pay(){
      this.$router.push({path:'/tickets'})
    }
  }
};
</script>

<style lang='scss' scoped>
* {
  color: rgba(255, 255, 255, 1);
}
.order {
  // position: relative;
  .header {
    height: 253px;
    // border-radius: 50px;
    background: no-repeat center;
    background-size: cover;
    overflow: hidden;
    padding-left: 20px;
    .go {
      width: 7px;
      height: 13px;
      margin-top: 50px;
      background: url("../../assets/movie-imgs/order/left.png") no-repeat center;
      background-size: cover;
    }
    .name {
      margin-top: 20px;
      font-size: 24px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 33px;
    }
    .data,
    .address,
    .seat {
      margin-top: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFangSC;
      color: rgba(255, 255, 255, 1);
    }
  }
  .main {
    border-top: 1px dashed #fff;
    .content {
      width: 335px;
      height: 209px;
      border-radius: 10px;
      background-color: #33363d;
      margin: 5px auto;
      padding: 10px 5px;
      div {
        display: flex;
        justify-content: space-between;
        color: red;
        p {
          width: 50px;
          margin-top: 20px;
          line-height: 20px;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFangSC;
          font-weight: 500;
          color: rgba(194, 19, 19, 1);
        }
        span {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-top: 10px;
        }
      }
    }
  }
  .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 145px;
    background-color: #33363d;
    padding: 20px;
    box-sizing: border-box;
    .ft {
      display: flex;
      justify-content: space-between;
      .tl {
        font-size: 12px;
        color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .tr {
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          color: red;
          margin-right: 5px;
        }
      }
      .rimg {
        width: 13px;
        height: 7px;
        background: url("../../assets/movie-imgs/order/top.png") no-repeat
          center;
        background-size: cover;
        margin: 0 5px;
      }
    }
    .but{
        width: 335px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        margin-top: 40px;
        border-radius: 10px;
        background: linear-gradient(to right,#F25B86,#F1AC5E)
      }
  }
}
</style>
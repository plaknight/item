<template>
  <div class="my">
    <div class="header">
      <img src="../../../assets/movie-imgs/my/head.png" alt />
      <span class="username">yujia1130</span>
      <span class="goto">></span>
      <div class="huiyuan">V1青铜会员&nbsp;></div>
      <router-link class="shezhi" to="/my/personal"></router-link>
      <!-- <div class="shezhi"></div> -->
      <div class="pinglun"></div>
      <div class="member">
        <span class="text-1">会员中心</span>
        <div class="text-2"></div>
        <span class="text-3">会员中心</span>
        <span class="text-4">层50元通兑券天天送</span>
        <div class="hongbao"></div>
      </div>
    </div>
    <div class="order">
      <span class="text-1">我的订单</span>
      <span class="text-2">全部&nbsp;></span>
      <ul class="list">
        <li class="item">
          <div class="img-1"></div>
          <span>未消费</span>
        </li>
        <li class="item">
          <div class="img-2"></div>
          <span>待付款</span>
        </li>
        <li class="item">
          <div class="img-3"></div>
          <span>待评价</span>
        </li>
        <li class="item">
          <div class="img-4"></div>
          <span class="s4">退款</span>
        </li>
      </ul>
    </div>
    <div class="main">
      <div class="card">
        <div>影城会员卡</div>
        <div>></div>
      </div>
      <router-link class="router-link coupon" to="/my/coupon">
        <div>优惠券</div>
        <div>></div>
      </router-link>
      <div class="collect">
        <div>我的收藏</div>
        <div>></div>
      </div>
      <div class="help">
        <div>帮助与反馈</div>
        <div>></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: 210px;
  position: relative;
  background: linear-gradient(to right, #f25e85, #f1a661);
  background: -webkit-linear-gradient(to right, #f25e85, #f1a661);
  border-radius: 30px;
  img{
    position: absolute;
    top: 91px;
    left: 20px;
  }
  .username{
    position: absolute;
    top: 100px;
    left: 111px;
    font-size: 18px;
    color: #FFFFFF;
  }
  .goto{
    position: absolute;
    top: 110px;
    right: 40px;
    color: #FFFFFF;
    opacity: .5;
    font-size: 20px;
  }
  .huiyuan{
    position: absolute;
    top: 129px;
    left: 110px;
    width: 99px;
    height: 23px;
    background-color: #33363D;
    font-size: 14px;
    color: #FFFFFF;
    border-radius: 10px;
    text-align: center;
    line-height: 23px;
  }
  .shezhi {
    width: 19px;
    height: 19px;
    position: absolute;
    top: 49px;
    right: 52px;
    background: url("../../../assets/movie-imgs/my/设置.png") no-repeat center;
    background-size: cover;
  }
  .pinglun {
    width: 19px;
    height: 18px;
    position: absolute;
    top: 50px;
    right: 21px;
    background: url("../../../assets/movie-imgs/my/评论.png") no-repeat center;
    background-size: cover;
  }
  .member {
    width: 336px;
    height: 68px;
    position: absolute;
    top: 181px;
    left: 20px;
    background-color: #33363d;
    border-radius: 20px;
    .text-1 {
      display: block;
      font-size: 18px;
      color: #ffffff;
      position: absolute;
      font-weight: bold;
      top: 22px;
      left: 36px;
    }
    .text-2 {
      width: 1px;
      height: 47px;
      position: absolute;
      top: 13px;
      left: 119px;
      background-color: #979797;
    }
    .text-3 {
      display: block;
      font-size: 12px;
      color: #ffffff;
      position: absolute;
      opacity: .8;
      top: 16px;
      left: 136px;
    }
    .text-4 {
      display: block;
      font-size: 12px;
      color: #ffffff;
      position: absolute;
      opacity: .8;
      bottom: 10px;
      left: 136px;
    }
    .hongbao {
      position: absolute;
      top: 17px;
      right: 21px;
      width: 32px;
      height: 34px;
      background: url("../../../assets/movie-imgs/my/红包.png") no-repeat center;
      background-size: cover;
    }
  }
}
.order {
  position: relative;
  width: 100%;
  height: 137px;
  background-color: #33363d;
  margin-top: 65px;
  border-radius: 10px;
  .text-1 {
    display: block;
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    font-weight: bold;
    top: 10px;
    left: 20px;
  }
  .text-2 {
    display: block;
    font-size: 14px;
    color: #ffffff;
    position: absolute;
    opacity: .6;
    top: 13px;
    right: 5px;
  }
  .list {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    height: 48px;
    .item {
      position: relative;
      float: left;
      width: 42px;
      height: 48px;
      margin-left: 42px;
      .img-1 {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 0;
        left: 9px;
        background: url("../../../assets/movie-imgs/my/编组.png") no-repeat
          center;
        background-size: cover;
      }
      .img-2 {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 0;
        left: 9px;
        background: url("../../../assets/movie-imgs/my/编组(1).png") no-repeat
          center;
        background-size: cover;
      }
      .img-3 {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 0;
        left: 9px;
        background: url("../../../assets/movie-imgs/my/编组(2).png") no-repeat
          center;
        background-size: cover;
      }
      .img-4 {
        position: absolute;
        height: 24px;
        width: 24px;
        top: 0;
        left: 9px;
        background: url("../../../assets/movie-imgs/my/编组(3).png") no-repeat
          center;
        background-size: cover;
      }
      span {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        color: #ffffff;
        opacity: .8;
        font-size: 14px;
      }
      .s4 {
        display: block;
        position: absolute;
        bottom: 0;
        left: 7px;
      }
    }
  }
}
.main {
  width: 100%;
  height: 215px;
  background-color: #33363d;
  border-radius: 10px;
  margin-top: 20px;
  .card,
  .coupon,
  .collect,
  .help {
    width: 100%;
    height: 25%;
    display: flex;
    // align-items: baseline;
    justify-content: space-between;
    color: #ffffff;
    font-size: 16px;
    opacity: .8;
    // line-height: 100%;
    // text-align: center;
    div {
      padding: 15px;
    }
  }
}
</style>
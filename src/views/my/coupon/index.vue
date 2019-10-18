<template>
  <div class="coupon">
      <div class="header">
          <div class="jump" @click="$router.go(-1)"><</div>
          <div>优惠券</div>
      </div>
      <div class="number"><span>你有2张优惠券可用</span></div>
      <ul>
        <li>
          <img src="../../../assets/movie-imgs/优惠券/矩形.png" alt="">
          <span class="text-1">电影专享代金券</span>
          <span class="text-2">购票即可抵扣 快去购票</span>
          <span class="text-3">有效期至： 2018-04-11</span>
          <span class="text-4">5 元</span>
          <span class="text-5">购票</span>
        </li>
        <li>
          <img src="../../../assets/movie-imgs/优惠券/矩形.png" alt="">
          <span class="text-1">电影专享代金券</span>
          <span class="text-2">购票即可抵扣 快去购票</span>
          <span class="text-3">有效期至： 2018-04-11</span>
          <span class="text-4">5 元</span>
          <span class="text-5">购票</span>
        </li>
        <li>
          <img src="../../../assets/movie-imgs/优惠券/矩形复制 2.png" alt="">
          <span class="text-1">电影专享代金券</span>
          <span class="text-2">购票即可抵扣 快去购票</span>
          <span class="text-3">有效期至： 2018-04-5</span>
          <span class="text-4">5 元</span>
          <img class="guoqi" src="../../../assets/movie-imgs/优惠券/已过期.png" alt="">
        </li>
      </ul>
      <div class="footer">去购票&nbsp;></div>
  </div>
</template>

<script>
export default {
  name: 'coupon',
  data() { 
    return {

    }
  }
 }
</script>

<style lang='scss' scoped>
    .header{
        width: 100%;
        height: 50px;
        background-color: #33363D;
        color: #fff;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: start;
        div{
          margin-right: 150px;
        }
        .jump{
          margin-left: 15px;
          opacity: .8;
        }
    }
    .number{
      position: relative;
      width: 100%;
      height: 30px;
      background-color: #2C2F36;
      span{
        display: block;
        position: absolute;
        font-size: 12px;
        color: #FFFFFF;
        opacity: .6;
        left: 10px;
        top: 10px;
      }
    }
    ul{
      width: 335px;
      display: flex;
      flex-direction: column;
      li{
        position: relative;
        width: 100%;
        height: 120px;
        margin-top: 10px;
        margin-left: 20px;
        background-size: cover;
        // color: #FFFFFF;
        .text-1{
          display: block;
          position: absolute;
          font-size: 18px;
          color: #FFFFFF;
          top: 22px;
          left: 22px;
        }
        .text-2{
          display: block;
          position: absolute;
          font-size: 12px;
          color: #FFFFFF;
          opacity: .4;
          top: 55px;
          left: 22px;
        }
        .text-3{
          display: block;
          position: absolute;
          font-size: 12px;
          color: #FFFFFF;
          opacity: .4;
          top: 80px;
          left: 22px;
        }
        .text-4{
          display: block;
          position: absolute;
          font-size: 24px;
          color: #FFFFFF;
          top: 40px;
          right: 35px;
        }
        .text-5{
          display: block;
          position: absolute;
          font-size: 18px;
          color: #FFFFFF;
          bottom: 27px;
          right: 42px;
        }
        .guoqi{
          position: absolute;
          bottom: 26px;
          right: 28px;
        }
      }
    }
    .footer{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 70px;
      background-color: #2C2F36;
      font-size: 18px;
      text-align: center;
      color: #FFFFFF;
      z-index: 99999;
      padding-top: 40px;
    }
</style>
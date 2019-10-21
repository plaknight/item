<template>
  <div class="box-office">
    <div class="header">
      <div class="goback" @click="goback">{{ left }}</div>
      <div class="title">傲慢与偏见</div>
    </div>
    <div class="boxoffice">
      <div class="today">
        <div class="num">2</div>
        <div class="text">今日票房排行</div>
      </div>
      <div class="week">
        <div class="num">暂无</div>
        <div class="text">首周票房（万）</div>
      </div>
      <div class="quantity">
        <div class="num">2660</div>
        <div class="text">今日票房</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="total">
      <div class="title">总票房</div>
      <div class="total-info">
        <div class="area">
          <div class="key">地区</div>
          <div class="value">中国</div>
        </div>
        <div class="week">
          <div class="key">每周末票房</div>
          <div class="value">暂无数据</div>
        </div>
        <div class="total-num">
          <div class="key">总票房</div>
          <div class="value">501万元</div>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "boxoffice",
  data() {
    return {
      left: "<"
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang='scss' scoped>
.box-office {
  overflow: hidden;

  .header {
    margin-top: 20px;
    height: 20px;
    width: 375;
    .goback {
      float: left;
      margin-left: 20px;
      font-size: 20px;
      color: #fff;
    }
    .title {
      float: left;
      margin-top: 3px;
      margin-left: 110px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 16px;
    }
  }
  .boxoffice {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    height: 40px;
    width: 100%;
    .today,
    .week,
    .quantity {
      text-align: center;
      width: 33%;
      height: 100%;
      .num {
        height: 18px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(251, 195, 74, 1);
        line-height: 18px;
      }
      .text {
        margin-top: 5px;
        height: 12px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #55585d;
        line-height: 12px;
      }
    }
    .week {
      .num {
        color: #fff;
      }
    }
  }
  .line {
    margin-top: 20px;
    width: 375px;
    height: 6px;
    background: rgba(51, 54, 61, 1);
  }
  .total {
    .title {
      margin-left: 20px;
      margin-top: 20px;
      width: 48px;
      height: 18px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 18px;
    }
    .total-info {
      display: flex;
      padding: 0 20px;
      box-sizing: border-box;
      justify-content: space-between;
      .area,
      .week,
      .total-num {
        .key {
          margin-top: 23px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: #54575e;
          line-height: 12px;
        }
        .value {
          margin-top: 20px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          color: #b6b7b9;
          line-height: 12px;
        }
      }
    }
  }
}
</style>
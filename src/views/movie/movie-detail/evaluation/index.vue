<template>
  <div class="evaluation">
    <div class="evaluation-title">观众热评</div>
    <div class="evaluation-item">
      <div class="evaluation-name">用户 : yujia2754</div>
      <div class="evaluation-text">
        2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人
        选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的
        爱情电影《小岛之恋》上映…
      </div>
      <div class="evaluation-date">05-17 09:34</div>
    </div>
    <div class="evaluation-item">
      <div class="evaluation-name">用户 : yujia2754</div>
      <div class="evaluation-text">
        2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人
        选拔，获得最佳新人“完…
      </div>
      <div class="evaluation-date">05-17 09:34</div>
    </div>
    <div class="evaluation-item">
      <div class="evaluation-name">用户 : yujia2754</div>
      <div class="evaluation-text">
        2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人
        选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的
        爱情电影《小岛之恋》上映…
      </div>
      <div class="evaluation-date">05-17 09:34</div>
    </div>
    <selection></selection>
  </div>
</template>

<script>
import selection from "../../../../components/selection";
export default {
  name: "evaluation",
  data() {
    return {};
  },
  components: {
    selection
  }
};
</script>

<style lang='scss' scoped>
.evaluation-title {
  width: 375px;
  height: 17px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFangSC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 18px;
}
.evaluation-item {
  margin-bottom: 60px;
  padding-right: 20px;
  box-sizing: border-box;
  margin-top: 20px;
  // height: 100px;
  width: 375px;
  .evaluation-name {
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFangSC;
    font-weight: 600;
    color: #babcbe;
    line-height: 14px;
  }
  .evaluation-text {
    margin-top: 10px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: #828488;
    line-height: 18px;
  }
  .evaluation-date {
    margin-top: 10px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: #606368;
    line-height: 17px;
  }
}
</style>
<template>
  <div class="more">
    <img
      class="air"
      :src="require('../../../../assets/movie-imgs/actorinfo/air.png')"
      alt=""
    />
    <div class="air-text">暂无数据</div>
  </div>
</template>

<script>
export default {
  name: "more",
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.more {
  .air {
    margin-top: 10px;
    margin-left: 120px;
    width: 82px;
    height: 71px;
  }
  .air-text {
    margin-left: 120px;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(51, 54, 61, 1);
    line-height: 28px;
  }
}
</style>
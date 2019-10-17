<template>
  <div class="order">
    <span> {{ text }}</span>
    <span> {{ text1 }}</span>
  </div>
</template>

<script>
export default {
  name: "order",
  props: ["text", "text1"],
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.order {
  width: 100%;
  height: 20px;
  line-height: 20px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  span:first-child {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFangSC;
    color: rgba(255, 255, 255, 1);
  }
  span:nth-child(2) {
    font-size: 12px;
    color: rgba(249, 195, 74, 1);
  }
}
</style>
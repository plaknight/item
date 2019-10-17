<template>
  <div class="selection">特惠选座</div>
</template>

<script>
export default {
  name: "Selection",
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.selection {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 375px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
  box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
}
</style>
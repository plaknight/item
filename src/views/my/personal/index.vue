<template>
  <div class="personal">
    <div class="header">
      <span class="text-1"  @click="$router.go(-1)"><</span>
      <span class="text-2">设置</span>
    </div>
    <div class="user">
      <img src="../../../assets/movie-imgs/my/head.png" alt />
      <span>yujia1130</span>
    </div>
    <div class="safe">
      <div class="text-1">账号与安全</div>
      <div class="text-2">手机绑定与更换&nbsp;&nbsp;></div>
    </div>
    <div class="main">
      <div class="items">
        <div class="text">被赞提醒</div>
        <van-switch
          v-model="checked1"
          class="ipt v1"
          size="24px"
          active-color="#F1717B"
          inactive-color="#FFFFFF"
        />
      </div>
      <div class="items">
        <div class="text">影评/话题提醒</div>
        <van-switch
          v-model="checked2"
          class="ipt v2"
          size="24px"
          active-color="#F1717B"
          inactive-color="#FFFFFF"
        />
      </div>
      <div class="items">
        <div class="text">系统通知</div>
        <van-switch
          v-model="checked3"
          class="ipt v3"
          size="24px"
          active-color="#F1717B"
          inactive-color="#FFFFFF"
        />
      </div>
      <div class="items">
        <div class="text">系统通知</div>
        <van-switch
          v-model="checked4"
          class="ipt v4"
          size="24px"
          active-color="#F1717B"
          inactive-color="#FFFFFF"
        />
      </div>
    </div>
    <div class="about">
      <div class="text-1">关于</div>
      <div class="text-2">></div>
    </div>
    <div class="out">退出登录</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
    };
  }
};
</script>

<style lang='scss' scoped>
.header {
  position: relative;
  width: 100%;
  height: 30px;
  span {
    font-size: 16px;
    color: #ffffff;
  }
  .text-1 {
    display: block;
    position: absolute;
    left: 20px;
    top: 10px;
  }
  .text-2 {
    display: block;
    position: absolute;
    left: 50%;
    top: 10px;
  }
}
.user {
  position: relative;
  width: 100px;
  height: 195px;
  img {
    position: absolute;
    left: 151px;
    top: 40px;
  }
  span {
    display: block;
    position: absolute;
    top: 125px;
    left: 151px;
    font-size: 16px;
    color: #ffffff;
    // opacity: .5;
  }
}
.safe {
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  .text-1 {
    color: #ffffff;
    font-size: 14px;
    margin-left: 10px;
  }
  .text-2 {
    color: #ffffff;
    font-size: 14px;
    opacity: 0.6;
    margin-right: 10px;
  }
}
.main {
  width: 100%;
  height: 160px;
  border-top: 6px solid #33363d;
  border-bottom: 6px solid #33363d;
  .items {
    width: 100%;
    height: 25%;
    position: relative;
    .text {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 14px;
      color: #ffffff;
    }
    .ipt {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}
.about {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // align-items: center;
  .text-1 {
    color: #ffffff;
    font-size: 14px;
    margin-left: 10px;
  }
  .text-2 {
    color: #ffffff;
    font-size: 14px;
    opacity: 0.6;
    margin-right: 10px;
  }
}
.out {
  width: 335px;
  height: 40px;
  margin: 10px auto;
  background: linear-gradient(to right, #F25B86, #F1AC5E);
  background: -webkit-linear-gradient(to right,#F25B86, #F1AC5E);
  color: #FFFFFF;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;
}
</style>
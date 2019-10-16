<template>
  <div class="ticket">
    <div class="header">
      <div class="header-c">
        <div class="goback" @click="goback"></div>
        <div class="user">
          <div class="img"></div>
          <div class="username">hi,znKK</div>
        </div>
      </div>
    </div>
    <div class="ticket-main">
      <div class="ticket-main-c">
        <div class="search">
          <div class="search-text">试一试搜索电影</div>
          <div class="right"></div>
        </div>
        <div class="cinema">
          <div class="cinema-text">万达影院</div>
          <div class="right"></div>
          <div class="position"></div>
        </div>
        <div class="date">
          <div class="date-text">5月9号</div>
          <div class="time">1:34pm</div>
          <div class="right"></div>
          <div class="more">更多场次</div>
        </div>
        <div class="radio">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='scss' scoped>
.header {
  height: 33px;
  width: 100%;
  padding: 20px 0;
  .header-c {
    position: relative;
    width: 335px;
    margin: 0 auto;
    height: 100%;
    .goback {
      background: url("../../assets/movie-imgs/ticket/back.png") no-repeat
        center;
      height: 100%;
      width: 7px;
    }
    .img {
      position: absolute;
      top: 0;
      right: 50px;
      width: 33px;
      height: 33px;
      background: url("../../assets/movie-imgs/ticket/userimg.png") no-repeat
        center;
      background-size: cover;
      border-radius: 50%;
    }
    .username {
      height: 33px;
      width: auto;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 33px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
.ticket-main {
  height: 300px;
  width: 335px;
  margin: 12px auto;
  background: #33363d;
  .ticket-main-c {
    width: 300px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    .search {
      height: 17px;
      margin: 20px 0;
      position: relative;
      .search-text {
        font-size: 12px;
        font-weight: 400;
        color: #96979b;
        line-height: 17px;
      }
    }
    .cinema,
    .date {
      height: 22px;
      margin: 20px 0;
      position: relative;
      .cinema-text {
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
      }
      .position {
        height: 18px;
        width: 15px;
        background: url("../../assets/movie-imgs/ticket/定位复制.png") no-repeat
          center;
        background-size: cover;
        position: absolute;
        top: 2px;
        right: 33px;
      }
    }
    .date {
      .date-text {
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        float: left;
      }
      .time {
        float: left;
        margin-left: 10px;
        color: #eff0f0;
        font-size: 12px;
        line-height: 22px;
      }
      .more {
        top: 0;
        right: 17px;
        position: absolute;
        height: 22px;
        font-size: 12px;
        font-weight: 400;
        color: #96979b;
        line-height: 22px;
      }
    }
    .right {
      position: absolute;
      width: 7px;
      height: 13px;
      background: url("../../assets/movie-imgs/ticket/next.png") no-repeat
        center;
      background-size: cover;
      top: 50%;
      transform: translateY(-50%);
      right: 80px;
    }
  }
}
</style>
<template>
  <div class="nav">
    <div class="tabbar">
      <router-link class="router-link home" to="/home"></router-link>
      <router-link class="router-link movie" to="/movie"></router-link>
      <router-link class="router-link ticket" to="/ticket"></router-link>
      <router-link class="router-link cinema" to="/cinema"></router-link>
      <router-link class="router-link my" to="/my"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleP"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tabbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 104px;
  z-index: 999;
  background: url("../assets/movie-imgs/图标/编组.png") no-repeat center;
  background-size: cover;
  .router-link {
    position: relative;
    width: 50px;
    height: 50px;
    background: no-repeat center;
    background-size: 33px 33px;
    margin-top: 20px;
    &.home {
      background-image: url("../assets/movie-imgs/图标/形状结合2.png");
      &.router-link-active {
        background-image: url("../assets/movie-imgs/图标/形状结合.png");
      }
    }
    &.movie {
      background-image: url("../assets/movie-imgs/图标/编组 4.png");
      &.router-link-active {
        background-image: url("../assets/movie-imgs/图标/编组 4复制.png");
      }
    }
    &.ticket {
      width: 70px;
      height: 70px;
      background-image: url("../assets/movie-imgs/图标/编组 6.png");
      background-size: 58px 58px;
      margin-top: 0;
    }
    &.cinema {
      background-image: url("../assets/movie-imgs/图标/编组 8.png");
      &.router-link-active {
        background-image: url("../assets/movie-imgs/图标/编组 81.png");
      }
    }
    &.my {
      background-image: url("../assets/movie-imgs/图标/编组 3.png");
      &.router-link-active {
        background-image: url("../assets/movie-imgs/图标/编组 31.png");
      }
    }
  }
  .router-link-active::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(
      147deg,
      rgba(242, 95, 132, 1) 0%,
      rgba(241, 164, 98, 1) 100%
    );
    box-shadow: 0px 0px 2px 2px rgba(242, 101, 129, 0.11);
    border-radius: 50%;
  }
  .ticket.router-link-active::after {
    width: 0;
    height: 0;
  }
}
</style>

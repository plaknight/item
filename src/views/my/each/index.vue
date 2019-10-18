<template>
  <div id="app">
    <!-- 顶部 -->
    <div class="betterScroll">
    <div class="top">
      <!-- 返回 -->
      <router-link to="/my/index/index" tag="div" class="back"></router-link>
      <!-- 个人设置 -->
      <div class="plm">
        <!-- 头像 -->
        <div class="headImg"></div>
      </div>
      <!-- 个人信息 画布 -->
      <div class="header-bg">
        <!-- 名字 -->
        <div class="header-name">
          <div class="inner-name">YH.Dai116</div>
          <!-- vip等级 -->
          <div class="inner-vip">
            <div class="vip-icon"></div>
            <p>LV10</p>
          </div>
        </div>
        <!-- 签名 -->
        <div class="header-text">同学有点懒,还没有写签名</div>
        <!-- 记录按钮 -->
        <div class="header-xx">
          <div class="header-xk">
            <p>想看</p>
            <p id="num">11</p>
          </div>
          <div class="header-kg">
            <p>看过</p>
            <p id="num">6</p>
          </div>
        </div>
      </div>
      </div>
    </div>

    <!-- 看过的历史记录 -->
    <div class="history">
      <!-- 标题 -->
      <div class="history-title">看过电影</div>
      <div class="detail" v-for="item in list" :key="item.id">
        <div class="mark">
          <!-- 星星 -->

          <!-- 评分 -->
          <p>{{ item.score }}分很好</p>
        </div>
        <!-- 电影信息 -->
        <div class="history-movie">
          <img :src="item.imgMovie" alt />
          <div class="movie-text">
            <p>{{ item.movieTitle }}</p>
            <div id="moviec">电影类型:{{ item.movieClass }}</div>
            <div class="nation">国家/时长:{{ item.nation }}</div>
            <div class="timer">购票时间:{{ item.timer }}</div>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          score: 9,
          imgMovie: require("@/assets/movie-imgs/cinemaInfo/swiper1.png"),
          movieTitle: "后来的我们",
          movieClass: "剧情",
          nation: "中国/106分钟",
          timer: "2018-09-06"
        },
        {
          id: 2,
          score: 7,
          imgMovie: require("@/assets/movie-imgs/cinemaInfo/swiper2.png"),
          movieTitle: "帕丁顿熊",
          movieClass: "动画/奇幻",
          nation: "美国/146分钟",
          timer: "2020-11-14"
        },
        {
          id: 3,
          score: 6,
          imgMovie: require("@/assets/movie-imgs/cinemaInfo/swiper3.png"),
          movieTitle: "大鱼海棠",
          movieClass: "动画/奇幻",

          nation: "中国/156分钟",
          timer: "2018-10-26"
        },
        {
          id: 4,
          score: 5,
          imgMovie: require("@/assets/movie-imgs/cinemaInfo/swiper4.png"),
          movieTitle: "星空",
          movieClass: "科幻/动画",
          nation: "日本/126分钟",
          timer: "2019-02-16"
        }
      ]
    };
  },
  mounted(){
     let bs = new this.BScroll("#app", {
      // ...... 详见配置项
      click: true
    });
  }
};
</script>

<style lang="scss" scoped>
#app {
  .top {
    display: flex;
    align-items: center;
    width: 100%;
    height: 210px;
    background: linear-gradient(
      123deg,
      rgba(242, 94, 133, 1) 0%,
      rgba(241, 166, 97, 1) 100%
    );
    border-radius: 29px;
    opacity: 0.9029;

    .back {
      position: absolute;
      left: 20px;
      top: 20px;
      width: 13px;
      height: 19px;
      background: url("../../../assets/movie-imgs/ticket/back.png") no-repeat
        center;
      background-size: 100% 100%;
    }

    .plm {
      display: flex;
      width: 100%;
      height: 73px;

      .headImg {
        position: relative;
        width: 73px;
        height: 73px;
        margin: -50px auto;
        border-radius: 100%;
        background-image: url("../../../assets/movie-imgs/my/head.png");
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 99;
      }
    }

    .header-bg {
      position: absolute;
      left: 19px;
      top: 50px;
      width: 336px;
      height: 185px;
      background: rgba(51, 54, 61, 1);
      box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
      border-radius: 17px;

      .header-name {
        display: flex;
        justify-content: space-between;
        margin: 40px auto;
        width: 143px;
        height: 26px;

        .inner-name {
          width: 77px;
          height: 100%;
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          line-height: 25px;
        }

        .inner-vip {
          display: flex;
          justify-content: space-around;
          width: 50px;
          height: 18px;
          color: #fff;
          border-radius: 12px;
          border: 1px solid rgba(251, 195, 73, 1);

          .vip-icon {
            width: 12px;
            height: 12px;
            margin-top: 3px;
            background: url("../../../assets/movie-imgs/ticket/back.png")
              no-repeat center;
            background-size: 100% 100%;
          }

          p {
            width: 17px;
            height: 14px;
            margin: 1.5px 6px 0 0;
            font-size: 10px;
            font-weight: 400;
            color: rgba(251, 195, 73, 1);
            line-height: 14px;
          }
        }
      }
    }

    .header-text {
      width: 168px;
      height: 20px;
      margin: -35px auto;
      font-size: 14px;
      font-weight: 400;
      color: #939498;
      line-height: 20px;
    }

    .header-xx {
      display: flex;
      justify-content: space-between;
      width: 278px;
      height: 37px;
      margin: 60px auto;

      p {
        width: 38px;
        height: 16px;
        color: #fff;
        margin-left: 10px;
        font-size: 16px;
        line-height: 37px;
      }

      #num {
        width: 38px;
        height: 16px;
        color: #fff;
        margin-left: 54px;
        font-size: 16px;
        line-height: 37px;
      }

      .header-xk {
        display: flex;
        width: 134px;
        height: 100%;
        border-radius: 6px;
        border: 1px solid;
        border-image: linear-gradient(
            139deg,
            rgba(242, 96, 132, 1),
            rgba(241, 159, 100, 1)
          )
          1 1;
      }

      .header-kg {
        display: flex;
        width: 134px;
        height: 100%;
        border-radius: 6px;
        border: 1px solid;
        border-image: linear-gradient(
            137deg,
            rgba(60, 76, 172, 1),
            rgba(198, 69, 151, 1)
          )
          1 1;
      }
    }
  }

  .history {
    // .detail:nth-last-child(1) {
    //     margin-bottom: 104px;
    // }

    .history-title {
      width: 72px;
      height: 25px;
      margin: 60px 0 0 20px;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
      line-height: 25px;
    }

    .detail {
      .mark {
        width: auto;
        margin: 0 auto;
        p {
          width: 50px;
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: rgba(251, 195, 74, 1);
          line-height: 17px;
          margin: 0 auto;
               margin-top: 20px;
        }
      }

      .history-movie {
        display: flex;
        width: 335px;
        height: 120px;
        margin: 20px auto;
        background: rgba(51, 54, 61, 1);
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
        border-radius: 6px;

        img {
          width: 94px;
          height: 120px;
        }

        .movie-text {
          display: flex;
          flex-wrap: wrap;
          width: 160px;
          height: 100%;

          p {
            height: 22px;
            margin: 10px 0 0 20px;
            font-size: 16px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 22px;
          }

          #moviec {
            height: 17px;
            margin-left: 20px;
            font-size: 12px;
            font-weight: 400;
            color: #8e8f93;
            line-height: 17px;
          }

          .nation {
            width: auto;
            height: 17px;
            margin-left: 20px;
            font-size: 12px;
            font-weight: 400;
            color: #8e8f93;
            line-height: 17px;
          }

          .timer {
            height: 17px;
            margin-left: 20px;
            font-size: 12px;
            font-weight: 400;
            color: #8e8f93;
            line-height: 17px;
          }
        }
      }
    }
  }
}
.footer{
  height: 70px;
}
</style>
<template>
  <div class="grade-wrap">
    <div class="grade">
      <div class="grade-header">
        <img :src="backImg" alt="" />
        <p>电影评分</p>
        <img :src="shareImg" alt="shareImg" />
      </div>
      <div class="grade-main">
        <div class="title">
          <p>《傲慢与偏见》</p>
          <p>★★★★★<span>9.0</span><span>分</span></p>
          <p>28.5万人评分</p>
        </div>
        <div class="barchart">
          <div class="barchartitem" v-for="item in barchartList" :key="item">
            <div>
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
        <p class="mian-foot">以上数据，实时更新</p>
        <div class="midLine"></div>
        <div class="grade-footer">
          <p class="footer-title">观众评分画像</p>
          <div class="vsGrade">
            <div class="man">
              <img :src="manImg" alt="" />
              <p>男性观众</p>
              <p>8.4分</p>
            </div>
            <p>VS</p>
            <div class="women">
              <img :src="womenImg" alt="" />
              <p>女性观众</p>
              <p>8.6分</p>
            </div>
          </div>
          <div class="echart">
            <div class="95">
              <p>95后</p>
              <div></div>
            </div>
            <div class="90">
              <p>90后</p>
              <div></div>
            </div>
            <div class="80">
              <p>80后</p>
              <div></div>
            </div>
            <div class="70">
              <p>70后</p>
              <div></div>
            </div>
          </div>

          <p class="ending">·以上数据，每30分钟更新一次</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "grade",
  data() {
    return {
      backImg: require("@/assets/movie-imgs/icons/arr-left.png"),
      shareImg: require("@/assets/movie-imgs/icons/share.png"),
      barchartList: ["56.4%", "29.4%", "12.3%", "1.1%", "0.8%"],
      manImg: require("@/assets/movie-imgs/icons/man.png"),
      womenImg: require("@/assets/movie-imgs/icons/women.png")
    };
  },
  mounted() {
    let bs = new this.BScroll(".grade-wrap", {
      // ...... 详见配置项
      click: true
    });
  }
};
</script>
<style lang='scss' scoped>
@mixin publicStyle($or: 400) {
  font-weight: $or;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
}
.grade-wrap{
  height: 100%;
}
.grade {
  // background: url('../../../assets/movie-imgs/icons/aoman.png') no-repeat top left;
  // height: 444px;
  // opacity: 0.8;
  background-size: 100%;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    opacity: 1;
    img:nth-child(1) {
      width: 14px;
      height: 20px;
      margin-left: 20px;
    }
    p {
      @include publicStyle($or: bold);
    }
    img:nth-child(3) {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
  }
  .grade-main {
    padding-top: 47px;
    .title {
      p:nth-child(1) {
        @include publicStyle;
        text-align: center;
      }
      p:nth-child(2) {
        color: #fbc34a;
        letter-spacing: 3px;
        display: flex;
        align-items: center;
        padding-top: 10px;
        justify-content: center;
        span {
          font-size: 22px;
          letter-spacing: 0px;
        }
        span:nth-child(2) {
          font-size: 12px;
        }
      }
      p:nth-child(3) {
        padding-top: 5px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 17px;
        text-align: center;
      }
    }
    .barchart {
      display: flex;
      align-items: flex-end;
      // width: 100%;
      flex-direction: row;
      padding-top: 42px;
      justify-content: center;
      .barchartitem {
        transform: rotate(180deg);
        & > div {
          display: flex;
          align-items: flex-end;
          position: relative;
          width: 22px;
          background: linear-gradient(
            0deg,
            rgba(241, 162, 99, 1) 0%,
            rgba(242, 94, 132, 1) 100%
          );
          border-radius: 5px;
          margin: 16px;
          animation: move 0.3s ease 1 forwards 0.5s;
          p {
            position: absolute;
            bottom: -22px;
            font-size: 12px;
            width: 40px;
            left: 50%;
            // transform: ;
            font-weight: 400;
            color: #fbc34a;
            line-height: 17px;
            text-align: center;
            transform: translateX(-50%) rotate(180deg);
          }
        }
        div::after {
          content: "9-10分";
          position: absolute;
          top: -20px;
          width: 40px;
          left: 50%;
          transform: translateX(-50%) rotate(180deg);
          color: rgba(255, 255, 255, 1);
          text-align: center;
          opacity: 0.55;
        }
        &:nth-child(1) {
          height: 135px;
        }
        &:nth-child(2) {
          height: 98px;
        }
        &:nth-child(3) {
          height: 49px;
        }
        &:nth-child(4) {
          height: 25px;
        }
        &:nth-child(5) {
          height: 8px;
        }
      }
    }
    .mian-foot {
      font-size: 12px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 17px;
      text-align: center;
      padding-top: 15px;
    }
    .midLine {
      margin-top: 15px;
      width: 100%;
      height: 6px;
      background: rgba(51, 54, 61, 1);
    }
    .grade-footer {
      .footer-title {
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        padding-top: 20px;
      }
      .vsGrade {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        & > p {
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin: 0 12px;
        }
        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 138px;
          height: 36px;
          background: rgba(51, 54, 61, 1);
          border-radius: 6px;
          p:nth-child(2) {
            margin-left: 10px;
            font-size: 12px;
            color: rgba(255, 255, 255, 1);
          }
          p:nth-child(3) {
            margin-left: 5px;
            font-size: 10px;
            color: #fbc34a;
          }
        }
      }
      .echart {
        margin-left: 79px;
        & > div {
          position: relative;
          height: 20px;
          margin-top: 22px;
          p {
            position: absolute;
            left: -38px;
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);
            line-height: 20px;
          }
          & > div {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            height: 12px;
            background: linear-gradient(
              270deg,
              rgba(241, 162, 99, 1) 0%,
              rgba(242, 94, 132, 1) 100%
            );
            border-radius: 5px;
            animation: moves 0.3s ease 1 forwards 0.5s;
            &::after {
              content: "";
              position: absolute;
              right: -38px;
              color: #fbc34a;
            }
          }
        }
        & > div:nth-child(1) {
          width: 135px;
          & > div::after {
            content: "8.7分";
          }
        }

        & > div:nth-child(2) {
          width: 126px;
          & > div::after {
            content: "8.4分";
          }
        }
        & > div:nth-child(3) {
          width: 110px;
          & > div::after {
            content: "8.2分";
          }
        }
        & > div:nth-child(4) {
          width: 117px;
          & > div::after {
            content: "8.5分";
          }
        }
      }
      .ending {
        margin-top: 20px;
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.33);
        line-height: 17px;
      }
    }
  }
}
@keyframes move {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
@keyframes moves {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
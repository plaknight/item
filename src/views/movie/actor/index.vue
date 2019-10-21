<template>
  <div class="actor">
    <div class="background">
      <!-- 返回按钮 -->
      <div class="goback" @click="goback">{{ left }}</div>
      <!-- 头像 -->
      <div class="avatar">
        <div class="img"></div>
        <div class="name">凯拉·奈特莉</div>
        <div class="english">Satomi lshihara</div>
        <div class="btn">关注</div>
        <div class="attention">138585人关注</div>
      </div>
      <!-- 简介 -->
      <div class="introduction">
        <div class="title">简介</div>
        <div class="text">
          2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人
          选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的爱
          情电影《小岛之恋》上映；4月5日，参演的喜剧电影《我的爷爷
          》上映，在片中饰演五代家的独生女五代珠子，她则凭借该片获
          得了第27届日本…
        </div>
      </div>
    </div>
    <!-- 作品 -->
    <div class="sort works">作品</div>
    <div class="works-item">
      <!-- <div class="img"></div> -->
      <img
        :src="require('../../../../src/assets/movie-imgs/actorinfo/zp_rz.png')"
        alt=""
      />
      <div class="info">
        <div class="title">忍者之国</div>
        <div class="fraction">
          <div class="pf">评分</div>
          <div class="num">9.0</div>
        </div>
        <div class="act">演员 大野智</div>
        <div class="time">上映时间 2017年7月1日</div>
      </div>
    </div>
    <div class="works-item">
      <img
        :src="require('../../../../src/assets/movie-imgs/actorinfo/zp_gsl.png')"
        alt=""
      />
      <div class="info">
        <div class="title">新·哥斯拉</div>
        <div class="fraction">
          <div class="pf">评分</div>
          <div class="num">9.0</div>
        </div>
        <div class="act">演员 长谷川博己，竹…</div>
        <div class="time">上映时间 2016年7月29日</div>
      </div>
    </div>
    <div class="sort album">相册</div>
    <div class="photo">
      <div class="photobox-one">
        <img
          class="photo-one"
          :src="
            require('../../../../src/assets/movie-imgs/actorinfo/photo_1.png')
          "
          alt=""
        />
        <div class="photobox-two">
          <img
            class="photo-two"
            :src="
              require('../../../../src/assets/movie-imgs/actorinfo/CRACKS_act1.png')
            "
            alt=""
          />
          <img
            class="photo-three"
            :src="
              require('../../../../src/assets/movie-imgs/actorinfo/IMG_91658@2x.png')
            "
            alt=""
          />
        </div>
      </div>
      <img
        class="photo-four"
        :src="
          require('../../../../src/assets/movie-imgs/actorinfo/photo_4.png')
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "actor",
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
.actor {
  margin-bottom: -50px;
  .background {
    position: relative;
    overflow: hidden;
    height: 440px;
    width: 375px;
    background: url("../../../../src/assets/movie-imgs/actorinfo/actor_bg.png")
      no-repeat center;
    background-size: 100% 100%;
    .goback {
      margin-top: 15px;
      margin-left: 20px;
      font-size: 20px;
      color: #fff;
    }
    .avatar {
      position: absolute;
      text-align: center;
      top: 90px;
      left: 50%;
      margin-left: -55px;
      width: 110px;
      .img {
        margin-left: 12px;
        width: 86px;
        height: 86px;
        background-color: red;
        border-radius: 50%;
        background: url("../../../../src/assets/movie-imgs/actorinfo/act_kt.png");
        background-size: 100% 100%;
      }
      .name {
        margin-top: 10px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
      }
      .english {
        margin-top: 10px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #a4a5a7;
        line-height: 12px;
      }
      .btn {
        margin-top: 10px;
        margin-left: 30px;
        width: 48px;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        background: linear-gradient(
          150deg,
          rgba(242, 91, 134, 1) 0%,
          rgba(241, 172, 94, 1) 100%
        );
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
        border-radius: 11px;
      }
      .attention {
        margin-top: 10px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #a4a5a7;
        line-height: 12px;
      }
    }
    .introduction {
      position: absolute;
      bottom: 0;
      width: 375px;
      padding: 0 20px;
      box-sizing: border-box;
      .title {
        width: 32px;
        height: 16px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 16px;
      }
      .text {
        margin-top: 10px;
        width: 341px;
        height: 90px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #a4a5a7;
        line-height: 18px;
      }
    }
  }
  .sort {
    margin-top: 30px;
    padding: 0 20px;
    box-sizing: border-box;
    width: 375px;
    height: 16px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFangSC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 16px;
  }
  .works-item {
    margin-top: 10px;
    width: 375px;
    height: 140px;
    padding: 0 20px;
    box-sizing: border-box;
    img {
      float: left;
      width: 100px;
      height: 140px;
      border-radius: 6px;
    }
    .info {
      float: left;
      width: 235px;
      height: 140px;
      padding: 0 20px;
      box-sizing: border-box;
      .title {
        margin-top: 20px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
      }
      .fraction {
        margin-top: 10px;
        display: flex;
        .pf {
          color: #939498;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFangSC;
          font-weight: 400;
          line-height: 19px;
        }
        .num {
          margin-left: 5px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFangSC;
          font-weight: 500;
          color: rgba(251, 195, 74, 1);
          line-height: 20px;
        }
      }
      .act {
        margin-top: 10px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #939498;
        line-height: 14px;
      }
      .time {
        margin-top: 10px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #939498;
        line-height: 14px;
      }
    }
  }
  .photo {
    margin-top: 10px;
    padding: 0 20px;
    box-sizing: border-box;
    width: 375px;
    height: 230px;
    .photobox-one {
      float: left;
      width: 192px;
      .photo-one {
        width: 192px;
        height: 100px;
      }
      .photobox-two {
        margin-top: 5px;
        .photo-two {
          width: 94px;
          height: 123px;
        }
        .photo-three {
          margin-left: 4px;
          width: 94px;
          height: 123px;
        }
      }
    }
    .photo-four {
      float: left;
      margin-left: 5px;
      width: 138px;
      height: 230px;
    }
  }
}
</style>
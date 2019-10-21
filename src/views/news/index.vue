<template>
  <div class="wraper">
    <div class="news">
      <div class="title">
        <div class="title-left" @click="$router.go(-1)">
          <i></i>
          <img src="../../assets/movie-imgs/newcenter/head1.png" alt="" />
          <span>Zeng Wen</span>
        </div>
        <div class="btn">.&nbsp;.&nbsp;.</div>
      </div>
      <div class="mian-wraper">
        <div class="main" style="margin-bottom:70px">
          <div class="bubble" v-for="item in user" :key="item.id">
            <div class="comment" v-bind:class="[{ comment1: item.isActive }]">
              {{ item.msg }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="entering">
      <input type="text" v-model="msg" v-on:keyup.enter="sendMsg" />
      <select
        name="public-choice"
        v-model="couponSelected"
        @change="getCouponSelected"
      >
        <option
          :value="coupon.id"
          :key="coupon.id"
          v-for="coupon in couponList"
          >{{ coupon.name }}</option
        >
      </select>
      <div class="send" @click="sendMsg">发送</div>
    </div>
  </div>
</template>

<script>
import Mock from "mockjs";
import axios from "axios";
// axios.defaults.headers.post["Content-Type"] = "application/json";
const Random = Mock.Random;
export default {
  data() {
    return {
      id: Random.guid(),
      msg: "",
      isActive: 0,
      couponList: [
        {
          id: "0",
          name: "用户1"
        },
        {
          id: "1",
          name: "用户2"
        }
      ],
      couponSelected: "",
      bs: "",
      user: [
        {
          msg: "oh Rose",
          isActive: 0
        },
        {
          msg: "oh Jack",
          isActive: 1
        }
      ]
    };
  },
  mounted() {
    //  new this.BScroll(".wraper", {
    //   // ...... 详见配置项
    //   click: true
    // });
    this.bs = new this.BScroll(".mian-wraper", {
      // ...... 详见配置项
      click: true
    });
  },
  updated() {
    this.$nextTick(el => {
      var oldHeight = document.querySelector(".mian-wraper").offsetHeight;
      var nowHeight = document.querySelector(".main").offsetHeight + 85;
      var move = oldHeight - nowHeight;
      // if()
      if (move < 0) {
        setTimeout(() => {
          this.bs.scrollTo(0, move, 400);
        }, 200);
      }
    });
  },
  methods: {
    sendMsg() {
      this.init();
      var newMsg = {
        id: Random.guid(),
        msg: this.msg,
        isActive: this.isActive
      };
      this.user.push(newMsg);
      this.msg = "";
    },
    move() {},
    getCouponSelected() {
      //获取选中的用户
      console.log(this.couponSelected);
      this.isActive = this.couponSelected == "0" ? false : true;
      console.log(this.isActive);
    },
    init() {
      axios({
        url: "/api/openapi/api/v2",
        method: "post",
        data: {
          reqType: 0,
          perception: {
            inputText: {
              text: this.msg
            }
          },
          userInfo: {
            apiKey: "f349e24ecd19c5511664f50edd0d7b7b",
            userId: "123"
          }
        }
        // headers:{
        // 	'Content-Type':'application/json'
        // }
      }).then(res => {
        var newdata = res.data.results[0].values.text;
        // console.log(res.data.results[0].values.text);
        var newMsg = {
          id: Random.guid(),
          msg: newdata,
          isActive: true
        };
        this.user.push(newMsg);
        // this.list = res.data.data;
      });
    }
  },
  created() {
    //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
    this.couponSelected = this.couponList[0].id;
  }
};
</script>

<style lang="scss" scoped>
.wraper {
  height: calc(100% - 125px);
}
.bubble {
  width: 100%;
  overflow: hidden;
}
.comment {
  margin-top: 50px;
  position: relative;
  margin: 30px 28px 0px;
  background: #f8ac09;
  border-radius: 5px;
  box-sizing: content-box;
  padding: 14px;
  float: right;
  color: #fff;
  position: relative;
  max-width: 215px;
  word-wrap: break-word;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFangSC;
  font-weight: 400;
}

.comment:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: -4px;
  right: -13px;
  border: solid 16px;
  border-color: transparent transparent #f8ac09 transparent;
  font-size: 0;
}
.comment1 {
  position: relative;
  background: #33363d;
  float: left;
}
.comment1::after {
  top: 0px;
  left: -14px;
  border-color: transparent transparent #33363d transparent;
}
@mixin titleCenter() {
  //  标题居中样式
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.news {
  width: 335px;
  height: 100%;
  margin: 0 auto;
  .mian-wraper {
    height: 100%;
  }
  .title {
    margin-left: -20px;
    top: 0;
    z-index: 999;
    position: fixed;
    width: 100%;
    background: #33363d;
    color: #fff;
    height: 50px;
    @include titleCenter;
    .title-left {
      @include titleCenter();
      width: 150px;
      i {
        margin-top: -20px;
        float: left;
        width: 7px;
        height: 50px;
        background-image: url("../../assets/movie-imgs/myorder/arr-left.png");
        background-size: cover;
      }
      img {
        width: 32px;
        height: 32px;
        float: left;
      }
      span {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.6);
        line-height: 22px;
        margin-left: -10px;
      }
    }
  }
  .main {
    margin-top: 50px;
  }
}
.entering {
  width: 100%;
  height: 75px;
  background: #33363d;
  position: fixed;
  left: 0;
  bottom: 0;
  @include titleCenter();
}
.send {
  width: 60px;
  height: 30px;
  color: #fff;
  background: #f8ac09;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #33363d;
}
</style>
<template>
  <div class="search">
    <div class="betterScroll">
      <div class="search-header">
        <div class="input">
          <img :src="search" alt />
          <input type="text" placeholder="搜影片、影院、影人" />
        </div>
        <p class="cencel" @click="backHome">取消</p>
      </div>
      <div class="searchMsg">
        <div class="searchMsg-title">
          <img :src="searchRed" alt="" /> <a>影火虫热搜</a>
        </div>
        <ul class="searchMsgList">
          <li
            v-for="(item, index) in searchMsgList"
            :key="item + index"
            :class="item.status"
          >
            {{ item.name }}
          </li>
          <li class="moreSeach"><a href="javascript:void(0)">更多热搜</a> ></li>
        </ul>
        <div class="holder"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      search: require("@/assets/movie-imgs/home/搜索.png"),
      searchRed: require("@/assets/movie-imgs/search/search-1.png"),
      searchMsgList: [
        { name: "一条狗的使命", status: "hot" },
        { name: "哥斯拉2:怪兽之王", status: "normal" },
        { name: "大鱼海棠", status: "new" },
        { name: "下一任：前任", status: "normal" },
        { name: "人间.小团圆", status: "normal" },
        { name: "音乐家", status: "new" },
        { name: "爱你直到世界尽头", status: "recommend" }
      ]
    };
  },
  methods: {
      backHome(){
        this.$router.push({path:"/home",query:{
          address: this.$route.query.address
        }}).catch(el=>{})
      }
  },
  mounted() {
    let bs = new this.BScroll(".betterScroll", {
      // ...... 详见配置项
      click: true
    });
  }
};
</script>

<style lang='scss' scoped>
.search {
  .search-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    .input {
      position: relative;
      float: left;
      width: 298px;
      height: 36px;
      img {
        position: absolute;
        left: 12px;
        bottom: 9px;
      }
      input {
        width: 100%;
        height: 36px;
        background: rgba(51, 54, 61, 1);
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
        border: none;
        outline: none;
        border-radius: 18px;
        color: #b1b2b3;
        text-indent: 36px;
      }
    }
    .cencel {
      font-size: 14px;
      margin-left: 10px;
      font-weight: 400;
      color: rgba(247, 247, 247, 1);
      line-height: 16px;
    }
  }
  .searchMsg {
    padding-left: 20px;
    .searchMsg-title {
      display: flex;
      align-items: center;
      padding-left: 4px;
      height: 24px;
      margin-top: 19px;
      a {
        font-size: 14px;
        font-weight: 400;
        color: rgba(223, 223, 223, 1);
        line-height: 16px;
        margin-left: 8px;
      }
    }
    .searchMsgList {
      display: flex;
      flex-wrap: wrap;
      margin-top: 24px;
      li {
        position: relative;
        width: 50%;
        font-size: 14px;
        font-weight: 400;
        color: rgba(223, 223, 223, 1);
        line-height: 16px;
        margin-bottom: 22px;
        &.hot::after {
          content: "沸";
          position: absolute;
          width: 18px;
          height: 19px;
          top: 50%;
          margin-left: 5px;
          transform: translateY(-50%);
          background: linear-gradient(
            135deg,
            rgba(176, 70, 157, 1) 0%,
            rgba(97, 72, 170, 1) 100%
          );
          border-radius: 4px;
          font-size: 12px;
          text-align: center;
          line-height: 19px;
        }
        &.new::after {
          content: "新";
          position: absolute;
          width: 18px;
          height: 19px;
          top: 50%;
          margin-left: 5px;
          transform: translateY(-50%);
          background: linear-gradient(
            143deg,
            rgba(235, 110, 117, 1) 0%,
            rgba(247, 166, 83, 1) 100%
          );
          border-radius: 4px;
          font-size: 12px;
          text-align: center;
          line-height: 19px;
        }
        &.recommend::after {
          content: "荐";
          position: absolute;
          width: 18px;
          height: 19px;
          top: 50%;
          margin-left: 5px;
          transform: translateY(-50%);
          background: linear-gradient(
            135deg,
            rgba(50, 36, 149, 1) 0%,
            rgba(49, 56, 172, 1) 100%
          );
          border-radius: 4px;
          font-size: 12px;
          text-align: center;
          line-height: 19px;
        }
      }
      .moreSeach {
        color: rgba(241, 163, 99, 1);
        a {
          font-size: 14px;
          font-weight: 400;
          color: rgba(241, 163, 99, 1);
          line-height: 16px;
        }

      }
    }
    .holder{
      height: 410px;
    }
  }
}
</style>
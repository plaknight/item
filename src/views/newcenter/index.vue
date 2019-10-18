<template>
<div>
  <div class="newcenter">
        <div class="title">
          <div class="title-c">
                <i></i>
                <span>消息中心</span>
                <div class="btn"></div>
          </div>    
        </div>
        <!-- 消息通知 -->
        <div class="newtips">
          <div class="notice">
            <div class="icon">
            <img src="../../assets/movie-imgs/newcenter/notice.png" alt="">
            </div>
            <div class="msg">
              <h3>系统通知</h3>
              <p>哈皮巴斯得！祝你生日快乐！</p>
            </div>
            <div class="time">一个月前</div>
          </div>
        </div>

          <div class="newtips">
          <div class="notice">
            <div class="icon" style="background:#EF8833">
            <img src="../../assets/movie-imgs/newcenter/praise.png" alt="">
            </div>
            <div class="msg">
              <h3>系统通知</h3>
              <p>一个赞都不给我！</p>
            </div>
            <div class="time"><span>一个月前</span></div>
          </div>
        </div>


           <div class="newtips">
          <div class="notice">
            <div class="icon" style="background:#6548A9">
            <img src="../../assets/movie-imgs/newcenter/comment.png" alt="">
            </div>
            <div class="msg">
              <h3>系统通知</h3>
              <p>哈皮巴斯得！祝你生日快乐！</p>
            </div>
            <div class="time">一个月前</div>
          </div>
        </div>
<!-- 全部私信部分 -->
          <div class="title">
          <div class="title-c">
                <span>全部私信</span>
                <div class="btn"></div>
          </div>    
        </div>
        <!-- 消息通知 -->
        <router-link tag="div" to="/news" class="newtips" v-for="item in list" :key="item.id">
          <div class="notice">
            <div class="icon">
            <img :src="item.img" alt="" class="headimg">
            </div>
            <div class="msg">
              <p>{{item.name}}</p>
              <p>哈皮巴斯得！祝你生日快乐！</p>
            </div>
            <div class="time">
              <span>一个月前</span>
              <div class="round">1</div>
            </div>
          </div>
        </router-link>
  </div>
</div>

</template>

<script>
export default {
data(){
  return{
    list:[{
      id:0,
      img:require('@/assets/movie-imgs/newcenter/head1.png'),
      name:'Zeng Wen'
    },
    {
      id:1,
      img:require('@/assets/movie-imgs/newcenter/head3.png'),
      name:'Kimmy McIlmorie'
    },
    {
      id:2,
      img:require('@/assets/movie-imgs/newcenter/head4.png'),
      name:'Kimmy McIlmorie'
    },
    ]
  }
}
}
</script>

<style lang="scss" scoped>
@mixin titleCenter() {
  //  标题居中样式
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.newcenter { 
  width: 335px;
  margin: 0 auto;
  .title {
    width: 100%;
    color: #fff;
    .title-c {
      @include titleCenter;
      i {
        width: .58667rem;
        height: .58667rem;
        background-image: url("../../assets/movie-imgs/myorder/arr-left.png");
        background-size: cover;
      }
      span {
      width:64px;
      height:22px;
      font-size:16px;
      font-family:PingFangSC-Medium,PingFangSC;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:22px;
      }
      .btn {
        width: 42px;
        height: 20px;
        // border: 1px solid #f9c34a;
        // color: #f9c34a;
        // text-align: center;
        // line-height: 20px;
        border-radius: 2px;
      }
    }
  }
.newtips{
  margin:14px 0;
  overflow: hidden;
  .icon{
    width:44px;
    height:44px;
    background:rgba(249,195,74,1);
    border-radius: 50%;
    text-align: center;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width:20px;
      height:23px;
    }
    .headimg{
      width:44px;
      height: 44px;
    }
  }
  .msg{
    float: left;
    margin-left: 14px;
    h3{
      height:22px;
      font-size:16px;
      font-family:PingFangSC-Medium,PingFangSC;
      font-weight:500;
      color:rgba(255,255,255,1);
      line-height:22px;
    }
    p{
      height:17px;
      font-size:12px;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(255,255,255,.3);
      line-height:17px;
    }
    p:first-child{
      height:20px;
      font-size:14px;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(249,195,74,1);
      line-height:20px;
    }
  }
  .time{
    float: right;
    height: 44px;
    line-height: 44px;
    font-size:12px;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(255,255,255,.3);
    position: relative;
    .round{
      width:12px;
      height: 12px;
      text-align: center;
      line-height: 12px;
      font-size: 10px;
      color:#fff;
      background: #F9C34A;
      position: absolute;
      left: 30px;
      top: 30px;
      border-radius: 50%;
    }
  }
}




}
</style>
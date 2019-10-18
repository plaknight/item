<template>
  <div class="myorder">
    <div class="title">
      <div class="title-c">
        <i @click="$router.go(-1)"></i>
        <span>我的订单</span>
        <div class="btn">编辑</div>
      </div>
      <ul class="opt">
        <!-- 按钮选项 -->
        <li  @click="changeid(item.id)" :class="{active:item.id==index}" v-for="item in btnlist" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <div class="main">
        <div class="filmTicket" v-for="item in obj" :key="item.id">
            <p class="ticketTitle">
                <span>{{item.cinema}}</span>
                <i></i>
                <span>{{stateMsg}}</span>
            </p>
            <div class="ticketMain">
                <img :src="item.img" alt="">
                <div class="filmMsg">
                    <p>
                        <span>{{item.filmname}}</span>
                        <span>{{item.ticketNum}}张</span>
                    </p>
                    <p>
                        <span>{{item.date}}&ensp;</span>
                        <span>{{item.time}}</span>
                    </p>
                    <p>
                        <span>{{item.position}}&ensp;</span>
                        <span>{{item.seat}}</span>
                    </p>
                </div>
                <div class="price">
                    <span>总价：{{item.price}}元</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
data(){
  return{
    id:'',
    stateMsg:'',
    index:0,
    isActive:false,
    btnlist:[
      {
        id:0,
        name:'全部'
      },
      {
        id:1,
        name:'待付款'
      },
      {
        id:2,
        name:'待评价'
      },{
        id:3,
        name:'退款'
      }
    ]
  }
},
computed:{
  ...mapState({
    obj:function(state){
      if(this.id ==0){
        return state.ticketData.ticketdate  //传过来为0 代表是全部数据
      }else{
      return state.ticketData.ticketdate.filter(ele=>ele.status ==this.id) //筛选出对应状态的数据
      }
    }
  }
  )
},

methods:{
    judgeStatus(){
    switch(this.id) {
     case 1:
        this.stateMsg="待付款",
        this.isActive = "true"
        break;
     case 2:
        this.stateMsg="待评价"
        this.isActive = "true"
        break;
      case 3:
        this.stateMsg="退款"
        this.isActive = "true"
        break;
     default:  
        this.stateMsg ='未消费'   //这一步没用
        this.isActive = "false"
} 
    },
    changeid(num){ //点击事件切换列表
      this.id = num;
      this.index = num;
    }
},
created(){
  this.id = this.$route.params.ids
  this.index = this.$route.params.ids
  console.log(this.id)
  console.log(this.obj)
  this.judgeStatus();  //将用数字表示的状态变成文字
}


}
</script>

<style lang="scss" scoped>
// 头部选项开始
@mixin titleCenter() {
  //  标题居中样式
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.myorder { //总的版心
  width: 335px;
  margin: 0 auto;
  .title {//标题
    width: 100%;
    color: #fff;
    .title-c {
      @include titleCenter;
      i {
        width: 10px;
        height: 20px;
        background-image: url("../../assets/movie-imgs/myorder/arr-left.png");
        background-size: cover;
      }
      span {
        width: 64px;
        height: 22px;
        color: #fff;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
      }
      .btn {
        width: 42px;
        height: 20px;
        border: 1px solid #f9c34a;
        color: #f9c34a;
        text-align: center;
        line-height: 20px;
        border-radius: 2px;
      }
    }
    .opt {
      @include titleCenter;
      margin: 12px 0px;
      li {
        // line-height: 21px;
        height: 22px;
        color: #ffffff;
        font-size: 14px;
        box-sizing: border-box;
      }
     li.active{
        border-bottom: 3px solid #f9c34a;
        color:#F9C34A;
     }
    }
  }
    .main{
        .filmTicket{
            width:335px;
            height: 161px;
            background: #33363D;
            color:#fff;
            box-sizing:border-box;
            padding: 14px;
            margin-bottom: 10px;
            .ticketTitle {
                @include titleCenter();
                margin-bottom: 10px;
               span{
                width:84px;
                height:14px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFangSC;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:14px;
            }
            span:first-child{
                position: relative;
            }
            span:first-child::after{
                width:10px;
                height:13px;
                content:'';
                display: block;
                background-image: url("../../assets/movie-imgs/myorder/arr-right.png");
                background-size: cover;
                position: absolute;
               right: -12px;
                top: 0;
            }
            }
            
          .ticketMain{
        img{
              width:70px;
              height:81px;
              float: left;
          }
         .filmMsg{
              float: left;
              box-sizing: border-box;
              padding: 14px;
              color:rgba(255,255,255,.3);
              font-size: 12px;
              line-height: 18px;
        
          }
          .filmMsg p:first-child{
              width: 140px;
                font-size:14px;
                font-family:PingFangSC-Medium,PingFangSC;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:24px;
                @include titleCenter();
          }
          .price{
              clear: both;
               color:rgba(255,255,255,.3);
               font-size: 12px;
               margin-top: 8px;
          }
          } 
        }
    }

}

// 头部选项结束
</style>
<template>
<div>
    <div class="news">
    <div class="title">  
          <div class="title-left">
            <i></i>
           <img src="../../assets/movie-imgs/newcenter/head1.png" alt="">
           <span>Zeng Wen</span>
          </div>
        <div class="btn">.&nbsp;.&nbsp;.</div>
    </div>
    
    <div class="main">
    <div class="bubble" v-for="item in user" :key="item.id">
  <div class="comment" v-bind:class="[{ comment1: item.isActive }]">{{item.msg}}</div> 
        </div> 
    </div>
    </div>
<div class="entering">
    <input  type="text"   v-model="msg" />
    <select name="public-choice" v-model="couponSelected" @change="getCouponSelected">                                        
    <option :value="coupon.id" :key="coupon.id" v-for="coupon in couponList" >{{coupon.name}}</option>                                    
    </select>
    <div class="send" @click = "sendMsg">发送</div>
</div>

</div>
</template>

<script>
import Mock from "mockjs";
const Random = Mock.Random;
export default {
    data(){
        return{
            id:Random.guid(),
            msg:'',
            isActive:0,
            couponList:[
                        {
                            id: '0',
                            name: '用户1'
                        },
                        {
                            id: '1',
                            name: '用户2'
                        }
                    ],
            couponSelected: '',
            user:[
                {
            id: Random.guid(),
            msg:"啊啊啊啊啊啊",
            isActive:0
            },
            {
            msg:"我擦擦擦擦擦",
            isActive:1
            },
            {
            msg:"水水水水水水",
            isActive:0
            },
            {
            msg:"水水水水水水",
            isActive:1
            }
            ]
            
        }
    },
    methods:{
        sendMsg(){
            
            var newMsg={
                 id: Random.guid(),
                 msg:this.msg,
                 isActive:this.isActive
            }
           this.user.unshift(newMsg)
           this.msg="";
        },
        getCouponSelected(){
                        //获取选中的用户
                        console.log(this.couponSelected)
                this.isActive = this.couponSelected =='0'?false:true;
                console.log(this.isActive)
            }
    },
     created(){
　　　　　　　　　　　　//如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
                    this.couponSelected = this.couponList[0].id;
                },
};
</script>

<style lang="scss" scoped>
.bubble{
    width: 100%;
    overflow: hidden;
}
  .comment {
    position: relative;
    margin: 30px 28px 0px;
    background: #f8ac09;
    border-radius: 5px;
    box-sizing: content-box;
    padding: 14px;
    float: right;
    color:#fff;
    position: relative;
    max-width: 215px;
    word-wrap:break-word;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
  }

  .comment:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -4px;
    right: -13px;
    border: solid 16px;
    border-color: transparent transparent  #f8ac09  transparent ;
    font-size: 0;
  }
  .comment1{
      position: relative;
      background: #33363D;
      float: left;
  }
  .comment1::after{
       top: 0px;
    left: -14px;
     border-color: transparent transparent  #33363D  transparent ;
  }
  @mixin titleCenter() {
  //  标题居中样式
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.news { 
  width: 335px;
  margin: 0 auto;
  .title {
      position: fixed;
    width: 100%;
    background: #33363D ; 
    color: #fff;
    @include titleCenter;
    .title-left{
        @include titleCenter();
        width:150px;
        i{
        float: left;
        width: 7px;
        height: 13px;
        background-image: url("../../assets/movie-imgs/myorder/arr-left.png");
        background-size: cover;
        }
        img{
            width:32px;
            height:32px;
            float: left;
        }
    span {
      font-size:14px;
      font-family:PingFangSC-Medium,PingFangSC;
      font-weight:500;
      color:rgba(255,255,255,.6);
      line-height:22px;
      margin-left: -10px;
      }
    }
 

  }
 
}
 .entering{
      width:100%;
      height:75px;
      background: #33363D;
      position: fixed;
      left: 0;
      bottom: 0;
     @include titleCenter();
  }
  .send{
      width:60px;
      height: 30px;
      color:#fff;
      background: #f8ac09;
      border-radius: 10px;
      text-align: center;
      line-height: 30px;
      border: 1px solid  #33363D;
  }
</style>
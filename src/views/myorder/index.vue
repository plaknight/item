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
        <li>全部</li>
        <li>待付款</li>
        <li>待评价</li>
        <li>退款</li>
      </ul>
    </div>
    <div class="main">
        <div class="filmTicket">
            <p class="ticketTitle">
                <span>万达国际影城</span>
                <i></i>
                <span>等待退款</span>
            </p>
            <div class="ticketMain">
                <img src="../../assets/movie-imgs/myorder/movie.png" alt="">
                <div class="filmMsg">
                    <p>
                        <span>星空</span>
                        <span>1张</span>
                    </p>
                    <p>
                        <span>05月17号&ensp;</span>
                        <span>17：00</span>
                    </p>
                    <p>
                        <span>5号厅&ensp;</span>
                        <span>5排14座</span>
                    </p>
                </div>
                <div class="price">
                    <span>总价：70元</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
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
     li:hover{
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
<template>
  <div class="titleP">
    <span></span>
    <h1>{{ msg }}</h1>
    <p >{{ msg2 }}</p>
    <img :src='right' alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      right:require('@/assets/movie-imgs/首页_slices/右 箭头.png') 
    }
  },
  name: 'titleP',
  props: {
    msg: String,
    msg2:String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.titleP{
  position: relative;
height: 18px;
width: 335px;
margin: 0 auto;
margin-top: 30px;
margin-bottom: 10px;
}
span {
  display: block;
  float: left;
  width:4px;
   height:18px;
  background:linear-gradient(90deg,rgba(242,97,130,1) 0%,rgba(241,160,100,1) 100%);
}
h1 {
  margin-left: 5px;
float: left;
width:72px;
height:18px;
font-size:16px;
font-family:PingFangSC-Medium,PingFangSC;
font-weight:500;
color:#b1b2b3;
line-height:18px;
}
p {
  width:24px;
height:18px;
font-size:12px;
font-family:PingFangSC-Regular,PingFangSC;
font-weight:400;
color:#b1b2b3;
line-height:18px;
float: right;
margin-right: 10px;
}
img {
  position: absolute;
  right: 0px;
  top: 5px;
}
</style>

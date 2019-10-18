<template>
  <div class="">
  这是个人界面
     <router-link tag="div" :to="`/myorder/${ item.id }`" v-for="item in list" :key="item.id" class="per">
     {{item.name}}
      </router-link>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
       list:[
         {
           id:0,
           name:'全部'
         }
         ,{
         id:1,
         name:'待付款'
       },{
         id:2,
         name:'待评价'
       },{
         id:3,
         name:'退款'
       },{
         id:4,
         name:'未消费'
       }]
    }
  }
 }
</script>

<style lang='scss' scoped>

.per{
  float: left;
  width:50px;
  height: 50px;
  background: red;
}

</style>
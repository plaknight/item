<template>
  <div class="hots">
      <div class="hot" v-for="item in hotList" :key="item.id">
      <img :src="item.img" alt="">
      <h2> {{ item.name }} </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hots',
  data() { 
    return {
      hotList:[]
    }
  },
  created () {
    this.hotList = this.$store.state.hotList
  }
 }
</script>

<style lang='scss' scoped>
.hots {
  width: 100%;
  height: auto;
}
.hot {
  height: 146px;
    position: relative;
  width: 335px;
  margin:0 auto;
  margin-top:25px;
  img {
    float: left;
  }
  h2 {
    float: left;
    margin: 20px 0 0 30px;
       font-size: 18px;
       color: #DFDFDF;
  }
}
</style>
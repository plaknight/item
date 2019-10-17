<template>
  <div class="search"><img :src="search" alt="" /><input type="text" :placeholder="text"/></div>
</template>

<script>

export default {
  name: "",
  data() {
    return {
       search: require('@/assets/movie-imgs/home/搜索.png')
    };
  },
  methods: {
    
  },
  computed: {
    
  },
  props:["text"]
};
</script>

<style lang='scss' scoped>
.search {
  width: 100%;
  height: 36px;
  background: #33363D;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.09);
  border-radius: 18px;
  display: flex;
  align-items: center;
  img{
      width: 17px;
      height: 17px;
      margin:0 7px 0 17px;
  }
  input{
      font-size: 14px;
      color: #fff;
      outline: none;
      border: none;
      background-color: #33363D;
  }
}
</style>
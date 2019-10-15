<template>
  <div class="hots">
    <movielist></movielist>
  </div>
</template>

<script>
import movielist from "../../../components/movielist.vue";
export default {
  name: "hots",
  data() {
    return {
      hotList: []
    };
  },
  components: {
    movielist
  }
};
</script>

<style lang='scss' scoped>
.hots {
  width: 100%;
  height: auto;
}
</style>
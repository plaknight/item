<template>
  <div class="hots">
    <movielist :movie="movie"></movielist>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
  },
  computed: {
    ...mapState({
      movie(state) {
        return state.hotmovie.hotmovie;
      }
    })
  },
  mounted() {}
};
</script>

<style lang='scss' scoped>
.hots {
  width: 100%;
  height: auto;
}
</style>
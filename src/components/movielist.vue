<template>
  <div class="movielist">
    <div class="movie-item" v-for="item in movie" :key="item.id">
      <img :src="item.img" alt="" />
      <div class="content">
        <div class="name">{{ item.name }}</div>
        <div class="score">{{ item.score }}</div>
        <p class="director">{{ item.director }}</p>
        <p class="actor">{{ item.actor }}</p>
        <div class="labels">
          <div
            v-for="lab in item.labels"
            class="label-item"
            :class="lab.act"
            :key="lab.id"
          >
            {{ lab.text }}
          </div>
        </div>
        <div class="ticket" :class="item.ticketcolor">
          {{ item.ticket }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "movielist",
  data() {
    return {};
  },
  //   props: {
  //     movielist: String
  //   },
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
.movielist {
  margin-top: 10px;
  padding-left: 20px;
  padding-bottom: 100px;
  .movie-item {
    display: flex;
    height: 170px;
    width: 335px;

    img {
      height: 170px;
      width: 119px;
    }
    .content {
      position: relative;
      box-sizing: border-box;
      padding: 10px;
      margin-left: -7px;
      margin-top: 15px;
      height: 144px;
      width: 223px;
      background: rgba(51, 54, 61, 1);
      box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      .name {
        margin-top: 10px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFangSC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 16px;
      }
      .score {
        margin-top: 10px;
        width: 94px;
        height: 14px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #d4d4d6;
        line-height: 14px;
      }
      p {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: #6c6e73;
        line-height: 12px;
        &.director {
          margin-top: 10px;
        }
        &.actor {
          margin-top: 5px;
        }
      }
      .labels {
        display: flex;
        margin-top: 20px;
      }
      .label-item {
        width: 48px;
        height: 17px;
        line-height: 17px;
        text-align: center;
        border-radius: 3px;
        font-size: 10px;
        margin-right: 5px;
        &.yellow {
          border: 1px solid rgba(251, 195, 74, 1);
          color: rgba(251, 195, 74, 1);
        }
        &.red {
          border: 1px solid rgba(242, 108, 126, 1);
          color: rgba(242, 108, 126, 1);
        }
        &.blue {
          border: 1px solid rgba(60, 76, 172, 1);
          color: rgba(60, 76, 172, 1);
        }
      }
      .ticket {
        position: absolute;
        left: 160px;
        top: 70px;
        width: 54px;
        height: 25px;
        line-height: 25px;
        text-align: center;

        box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
        border-radius: 6px;
        &.pink {
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
        }
        &.purple {
          background: linear-gradient(
            150deg,
            rgba(98, 75, 163, 1) 0%,
            rgba(203, 68, 152, 1) 100%
          );
        }
      }
    }
  }
}
</style>
<template>
  <div class="seat">
    <div class="tops">
      <div class="header">
        <div class="top">
          <div @click="go"></div>
          <span>{{ address }}</span>
          <div></div>
        </div>
        <div class="name">{{ name }}</div>
        <div>
          <span>{{ time }}</span>
          <span>{{ type }}</span>
        </div>
        <div class="hf">
          <div>
            <div class="gray"></div>
            可选
          </div>
          <div>
            <div class="yellow"></div>
            不可选
          </div>
          <div>
            <div class="pro"></div>
            已选
          </div>
        </div>
        <div class="bot">{{ seat }}</div>
      </div>
      <div class="center">
        <div class="cl">
          <div v-for="(items, index) in row" :key="index">{{ index + 1 }}</div>
        </div>
        <div class="cr">
          <div
            :class="item[1].flag ? 'select' : ''" class="list"
            v-for="(item, index) in seatArr"
            :key="item + index"
          >
            <!-- <div
              v-for="seat in item"
              :key="seat.index"
              class="row"
              @click="color($event, index + 1, seat)"
            ></div> -->
            <!-- {{item}} -->
          </div>
        </div>
      </div>
    </div>
    <div class="fo" v-if="!show">
      <div class="footer">
        <div class="ft">
          <span>推荐座位</span>
          <div @click="choseSeat(1)">1人</div>
          <div @click="choseSeat(2)">2人</div>
          <div @click="choseSeat(3)">3人</div>
          <div @click="choseSeat(4)">4人</div>
        </div>
        <div class="but">请先选座</div>
      </div>
    </div>
    <div class="display" v-else>
      <div>已选座位</div>
      <div class="banks">
        <div
          class="bank"
          @click="remove(item)"
          v-for="(item, index) in select"
          :key="index"
        >
          {{ item.row }}排{{ item.li }}座
        </div>
      </div>
      <div class="but" @click="goorder">¥{{ total }} 确认选座</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "seat",
  data() {
    return {
      name: "后来的我们",
      time: "15:30—17:14",
      type: "原版3D",
      address: "耀莱成龙影城（建业店)",
      seat: "3号激光厅银幕",
      total: 33,
      row: [12, 12, 12, 12, 12, 12, 12, 12, 12],
      select: [],
      seatArr: [],
      idx: 3,
    };
  },
  watch: {
    seatArr : {
       deep:true, //深度监听设置为 true
        handler:function(newV,oldV){
           let newArr = newV.filter(el =>{
              return  (el[0] === this.idx) 
            })
         var flag = newArr.every(el =>{
             return (el[1].flag === true)
          })
          console.log(1)
          if(flag && this.idx > 0){
            this.idx--
          }
          
     }
    }

  },
  created() {
    this.addSeat();
  },
  computed: {
    show() {
      return this.select.length;
    },
    bought() {
      return this.$store.state.bought;
    }
  },
  mounted() {
    function initdom() {
      // var arr = document.querySelector(".cr").childNodes;
      // for (var i = 0; i < arr.length; i++) {
      //   //   console.log(arr);
      //   var arr1 = arr[i].childNodes;
      //   for (var j = 0; j < arr1.length; j++) {
      //     if (i == 0) {
      //       if (j == 1 || j == 5) {
      //         arr1[j].style.marginRight = "15px";
      //       } else {
      //         arr1[j].style.marginRight = "5px";
      //       }
      //     } else if (i == 1) {
      //       if (j == 2 || j == 6) {
      //         arr1[j].style.marginRight = "15px";
      //       } else {
      //         arr1[j].style.marginRight = "5px";
      //       }
      //     } else {
      //       if ((j + 1) % 4 == 0) {
      //         arr1[j].style.marginRight = "15px";
      //       } else {
      //         arr1[j].style.marginRight = "5px";
      //       }
      //     }
      //   }
      //   if ((i + 1) % 3 == 0) {
      //     arr[i].style.marginBottom = "15px";
      //   } else {
      //     arr[i].style.marginBottom = "5px";
      //   }
      //   arr[0].style.marginLeft = "-10px";
      //   arr[1].style.marginLeft = "-10px";
      // }
    }
    function ul() {
      var ul = document.querySelector(".cl").childNodes;
      for (let i = 0; i < ul.length; i++) {
        if ((i + 1) % 3 == 0) {
          ul[i].style.marginBottom = "15px";
        } else {
          ul[i].style.marginBottom = "5px";
        }
      }
    }
    ul();
    initdom();
    console.log(this.seatArr);
    // 不能选
    // this.bought.forEach(ele => {
    //   var arr = document.querySelector(".cr").childNodes;
    //   arr[ele.row - 1].childNodes[ele.li - 1].classList.add("bought");
    //   arr[ele.row - 1].childNodes[ele.li - 1].style.pointerEvents = "none";
    // });
  },
  methods: {
    choseSeat(val){

          let arr = this.seatArr.filter(el=> {
            // console.log((el[0] === 4))
           return (el[0] === this.idx) && (el[1].flag === false)
          })
          for(let j = 0 ; j < val; j ++){
            
            
            arr[j][1].flag = true
            
          }
            console.log(arr)
    },
    addSeat() {
      for (let i = 0; i < this.row.length; i++) {
        for (let j = 0; j < this.row[i]; j++) {
          // debugger
          if (
            i === 0 ||
            i === this.row.length - 1 ||
            j === 0 ||
            j === this.row[i] - 1
          ) {
            this.seatArr.push([0, { flag: false }]);
            continue;
          }
          if (
            i === 1 ||
            i === this.row.length - 2 ||
            j === 1 ||
            j === this.row[i] - 2
          ) {
            this.seatArr.push([1, { flag: false }]);
            continue;
          }
          if (
            i === 2 ||
            i === this.row.length - 3 ||
            j === 2 ||
            j === this.row[i] - 3
          ) {
            this.seatArr.push([2, { flag: false }]);
            continue;
          }
          if (
            i === 3 ||
            i === this.row.length - 4 ||
            j === 3 ||
            j === this.row[i] - 4
          ) {
            this.seatArr.push([3, { flag: false }]);
            continue;
          }

          this.seatArr.push([4, { flag: true }]);
        }
      }
    },
    go() {
      console.log(1);
      this.$router.go(-1);
    },
    goorder() {
      this.$store.commit("boughtList", this.select);
      this.$router.push({ path: "order" });
    },
    remove(val) {
      var index = this.select.findIndex(ele => ele.id == val.id);
      this.select.splice(index, 1);
      var arr = document.querySelector(".cr").childNodes;
      arr[val.row - 1].childNodes[val.li - 1].classList.remove("select");
    },
    color(e, row, li) {
      var obj = {
        id: row * 10 + li,
        row: row,
        li: li
      };
      var bol = this.select.find(ele => {
        return obj.id == ele.id;
      });
      var arr = document.querySelector(".cr").childNodes;
      if (bol) {
        var index = this.select.findIndex(ele => ele.id == obj.id);
        this.select.splice(index, 1);
        arr[row - 1].childNodes[li - 1].classList.remove("select");
      } else {
        if (this.select.length < 4) {
          this.select.push(obj);
          arr[row - 1].childNodes[li - 1].classList.add("select");
        } else {
          alert("一次最多只能选4张票");
        }
      }
    }
  }
};
</script>

<style lang='scss' scoped>
* {
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
}
.select {
  background-color: "#6548A9";
}
.seat {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .tops {
    flex: 1;
    overflow: auto;
  }
  .header {
    height: 265px;
    background: url("../../assets/movie-imgs/order/路径 5.png") no-repeat 0 0;
    padding: 60px 20px;
    box-sizing: border-box;
    border-bottom: 1px dashed gray;
    .top {
      display: flex;
      justify-content: space-between;
      div:first-child {
        width: 7px;
        height: 13px;
        background: url("../../assets/movie-imgs/order/left.png") no-repeat
          center;
        background-size: cover;
      }
      div:last-child {
        width: 17px;
        height: 17px;
        background: url("../../assets/movie-imgs/order/fx.png") no-repeat center;
        background-size: cover;
      }
    }
    .name {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFangSC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      margin: 15px 0;
    }
    div:nth-child(3) {
      display: flex;
      span:first-child {
        display: block;
        text-align: center;
        border-radius: 5px;
        font-size: 14px;
        width: 99px;
        height: 23px;
        line-height: 23px;
        background-color: #33363d;
      }
      span:last-child {
        display: block;
        text-align: center;
        border-radius: 5px;
        font-size: 14px;
        width: 61px;
        margin: 0 10px;
        line-height: 23px;
        background-color: #dd736e;
      }
    }
    .hf {
      display: flex;
      justify-content: space-between;
      height: 26px;
      margin: 20px 0;
      div {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFangSC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 26px;
        display: flex;
        justify-content: space-between;
        .gray,
        .yellow,
        .pro {
          width: 26px;
          height: 26px;
          border-radius: 5px;
          background-color: #fff;
          margin-right: 5px;
        }
        .gray {
          background-color: #4c2931;
        }
        .yellow {
          background-color: #f9c34a;
        }
        .pro {
          background-color: #6548a9;
        }
      }
    }
    .bot {
      margin: 28px auto;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFangSC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      width: 140px;
      height: 20px;
      background-color: #33363d;
      line-height: 20px;
      //   border-top: 20px solid #33363d;
      //   border-left: 5px solid transparent;
      //   border-right: 5px solid transparent;
    }
  }
  .fo {
    position: relative;
    width: 100%;
    height: 145px;
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 145px;
    background-color: #33363d;
    padding: 10px 20px;
    box-sizing: border-box;
    .ft {
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      line-height: 23px;
      div {
        font-size: 14px;
        width: 52px;
        height: 23px;
        line-height: 23px;
        text-align: center;
        border: 1px solid gray;
      }
    }
    .but {
      width: 335px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      border-radius: 6px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      background: linear-gradient(to right, #f25b86, #f1ac5e);
      margin-top: 40px;
    }
  }
  .display {
    position: relative;
    padding: 10px 20px;
    font-size: 16px;
    box-sizing: border-box;
    height: 145px;
    width: 100%;
    background-color: #fff;
    border-right: 1px solid #fff;
    div:first-child {
      color: black;
    }
    .but {
      position: absolute;
      bottom: 10px;
      left: 50%;
      margin-left: -167.5px;
      width: 335px;
      height: 40px;
      line-height: 40px;
      background-color: orange;
      border-radius: 5px;
      text-align: center;
    }
    .banks {
      width: 100%;
      height: 70px;
      // background-color: red;
      display: flex;
      justify-content: left;
      .bank {
        width: 70px;
        height: 40px;
        background-color: #fff;
        color: black;
        border: 1px solid black;
        margin: 5px;
        line-height: 40px;
        text-align: center;
      }
    }
  }
  .center {
    // padding: 20px;
    display: flex;
    justify-content: space-between;
    .cl {
      width: 20px;
      //   height: 300px;
      padding-top: 15px;
      background-color: #33363d;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      div {
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        // margin-bottom: 5px;
      }
    }
    .cr {
      width: 100%;
      padding-left: 15px;
      padding-top: 10px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap-reverse;
      // flex-direction: column-reverse;
      align-content: flex-start;
      .list {
        width: 20px;
        height: 20px;
        border-radius: 3px;
        background: rgba(216, 216, 216, 1);
        margin: 4px;
        &.select {
          background-color: #6548a9;
        }
        &.bought {
          background-color: #f9c34a;
        }
      }
    }
  }
}
</style>
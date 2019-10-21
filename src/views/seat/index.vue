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
            <div class="gray">
              <img :src="yellowImgs" alt="">
            </div>
            可选
          </div>
          <div>
            <div class="yellow">
              <img :src="proImgs" alt="">
            </div>
            不可选
          </div>
          <div>
            <div class="pro">
              <img :src="grayImgs" alt="">
            </div>
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
          <div class="inner-seat-wrapper" ref="innerSeatWrapper">
            <div v-for="row in seatRow">
              <!--这里的v-if很重要，如果没有则会导致报错，因为seatArray初始状态为空-->
              <div
                v-for="col in seatCol"
                v-if="seatArray.length > 0"
                class="seat"
                :style="{ width: seatSize + 'px', height: seatSize + 'px' }"
                :key="col"
              >
                <div
                  class="inner-seat"
                  @click="handleChooseSeat(row - 1, col - 1)"
                  v-if="seatArray[row - 1][col - 1] !== -1"
                  :class="
                    seatArray[row - 1][col - 1] === 2
                      ? 'bought-seat'
                      : seatArray[row - 1][col - 1] === 1
                      ? 'selected-seat'
                      : 'unselected-seat'
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fo">
      <div class="footer">
        <div class="ft">
          <span>推荐座位</span>
          <div @click="smartChoose(1)">1人</div>
          <div  @click="smartChoose(2)">2人</div>
          <div  @click="smartChoose(3)">3人</div>
          <div  @click="smartChoose(4)">4人</div>
        </div>
        <div class="but" @click="jumpOrder">请先选座</div>
      </div>
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

      //影院座位的二维数组,-1为非座位，0为未购座位，1为已选座位(绿色),2为已购座位(红色)
				seatArray:[],
        //影院座位行数
        seatRow:9,
        //影院座位列数
        seatCol:12,
        //座位尺寸
        seatSize:'',
        //推荐选座最大数量
        smartChooseMaxNum:4,
        grayImgs: require('@/assets/movie-imgs/icons/selected.png'),
        yellowImgs: require('@/assets/movie-imgs/icons/unselected.png'),
        proImgs: require('@/assets/movie-imgs/icons/bought.png'),
    };
  },
  watch: {
  },
  created() {
    // this.addSeat();
  },
  computed: {
    show() {
      // return this.select.length;
    },
    bought() {
      return this.$store.state.bought;
    }
  },
  mounted() {
    this.initSeatArray();
    this.initNonSeatPlace()
  },
  methods: {
    //页面跳转
    jumpOrder(){
      this.$router.push('order')
    },

    //向前后某个方向进行搜索的函数,参数是起始行，终止行,推荐座位个数
    searchSeatByDirection: function(fromRow, toRow, num) {
      /*
       * 推荐座位规则
       * (1)初始状态从座位行数的一半处的后一排的中间开始向左右分别搜索，取离中间最近的，如果满足条件，
       *    记录下该结果离座位中轴线的距离，后排搜索完成后取距离最小的那个结果作为最终结果，优先向后排进行搜索，
       *    后排都没有才往前排搜，前排逻辑同上
       * (2)只考虑并排且连续的座位，不能不在一排或者一排中间有分隔
       * */

      /*
       * 保存当前方向搜索结果的数组,元素是对象,result是结果数组，offset代表与中轴线的偏移距离
       * {
       *   result:Array([x,y])
       *   offset:Number
       * }
       */
      let currentDirectionSearchResult = [];
      //确定行数的大小关系，从小到大进行遍历
      let largeRow = fromRow > toRow ? fromRow : toRow,
        smallRow = fromRow > toRow ? toRow : fromRow;
      //逐行搜索
      for (let i = smallRow; i <= largeRow; i++) {
        //每一排的搜索,找出该排里中轴线最近的一组座位
        let tempRowResult = [],
          minDistanceToMidLine = Infinity;
        for (let j = 0; j <= this.seatCol - num; j++) {
          //如果有合法位置
          if (this.checkRowSeatContinusAndEmpty(i, j, j + num - 1)) {
            //计算该组位置距离中轴线的距离:该组位置的中间位置到中轴线的距离
            let resultMidPos = parseInt(j + num / 2, 10);
            let distance = Math.abs(parseInt(this.seatCol / 2) - resultMidPos);
            //如果距离较短则更新
            if (distance < minDistanceToMidLine) {
              minDistanceToMidLine = distance;
              //该行的最终结果
              tempRowResult = this.generateRowResult(i, j, j + num - 1);
            }
          }
        }
        //保存该行的最终结果
        currentDirectionSearchResult.push({
          result: tempRowResult,
          offset: minDistanceToMidLine
        });
      }

      //处理后排的搜索结果:找到距离中轴线最短的一个
      //注意这里的逻辑需要区分前后排，对于后排是从前往后，前排则是从后往前找
      let isBackDir = fromRow < toRow;
      let finalReuslt = [],
        minDistanceToMid = Infinity;
      if (isBackDir) {
        //后排情况,从前往后
        currentDirectionSearchResult.forEach(item => {
          if (item.offset < minDistanceToMid) {
            finalReuslt = item.result;
            minDistanceToMid = item.offset;
          }
        });
      } else {
        //前排情况，从后往前找
        currentDirectionSearchResult.reverse().forEach(item => {
          if (item.offset < minDistanceToMid) {
            finalReuslt = item.result;
            minDistanceToMid = item.offset;
          }
        });
      }
      //直接返回结果
      return finalReuslt;
    },
   /*辅助函数，判断每一行座位从i列到j列是否全部空余且连续
       *
       */
      checkRowSeatContinusAndEmpty: function(rowNum,startPos,endPos){
      	  let isValid = true;
          for(let i=startPos;i<=endPos;i++){
          	if(this.seatArray[rowNum][i]!==0){
          		isValid=false;
          		break;
            }
          }
          return isValid
      },
      //辅助函数：返回每一行的某个合理位置的座位数组
      generateRowResult: function(row,startPos,endPos){
      	let result = [];
      	for(let i=startPos;i<=endPos;i++){
      		result.push([row,i])
        }
        return result
      },
      //辅助函数:智能推荐的选座操作
      chooseSeat: function(result){
        let oldArray = this.seatArray.slice();
        for(let i=0;i<result.length;i++){
        	//选定座位
        	oldArray[result[i][0]][result[i][1]] = 1
        }
        this.seatArray = oldArray;
      },
    //推荐选座,参数是推荐座位数目
    smartChoose: function(num) {
      //找到影院座位水平垂直中间位置的后一排
      let rowStart = parseInt((this.seatRow - 1) / 2, 10) + 1;
      //先从中间排往后排搜索
      let backResult = this.searchSeatByDirection(
        rowStart,
        this.seatRow - 1,
        num
      );
      if (backResult.length > 0) {
        this.chooseSeat(backResult);
        return;
      }
      //再从中间排往前排搜索
      let forwardResult = this.searchSeatByDirection(rowStart - 1, 0, num);
      if (forwardResult.length > 0) {
        this.chooseSeat(forwardResult);
        return;
      }
      //提示用户无合法位置可选
      alert("无合法位置可选!");
    },
    //初始座位数组
    initSeatArray: function() {
      let seatArray = Array(this.seatRow)
        .fill(0)
        .map(() => Array(this.seatCol).fill(0));
      this.seatArray = seatArray;
      //均分父容器宽度作为座位的宽度
      console.log(this.$refs.innerSeatWrapper)
      this.seatSize = this.$refs.innerSeatWrapper
        ? parseInt(
            parseInt(
              window.getComputedStyle(this.$refs.innerSeatWrapper).width,
              10
            ) / this.seatCol,
            10
          )
        : 0;
      //初始化不是座位的地方
      this.initNonSeatPlace();
    },
    //处理座位选择逻辑
    handleChooseSeat: function(row, col) {
      let seatValue = this.seatArray[row][col];
      let newArray = this.seatArray;
      //如果是已购座位，直接返回
      if (seatValue === 2) return;
      //如果是已选座位点击后变未选
      if (seatValue === 1) {
        newArray[row][col] = 0;
      } else if (seatValue === 0) {
        newArray[row][col] = 1;
      }
      //必须整体更新二维数组，Vue无法检测到数组某一项更新,必须slice复制一个数组才行
      this.seatArray = newArray.slice();
    },
    //初始化不是座位的地方
    initNonSeatPlace: function() {
      for (let i = 0; i < 2; i++) {
        this.seatArray[i][0] = -1;
        
      }
      for (let i = 0; i < 1; i++) {
        this.seatArray[i][1] = -1;
        this.seatArray[i][this.seatArray[0].length - 2] =  -1;
      }
      for (let i = 0; i < 2; i++) {
        this.seatArray[i][this.seatArray[0].length - 1] = -1 ;
        
      }
      for (let i = 3; i < 6; i++) {
        this.seatArray[i][this.seatArray[0].length - 6] =  2;
        this.seatArray[i][this.seatArray[0].length - 7] =  2;
        this.seatArray[i][this.seatArray[0].length - 5] =  2;
      }
      for (let i = 5; i < 8; i++) {
        this.seatArray[5][i] = 2;
      }
    },

    go() {
      this.$router.go(-1);
    },
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
          img{
            width: 100%;
            height: 100%;
          }
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
        height: 28px;
        line-height: 28px;
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
      .inner-seat-wrapper{
    // position: absolute;
    // top:120px;
    // bottom:0;
    width:100%;
    box-sizing: border-box;
  }
  .seat{
    float:left;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner-seat{
    width:80%;
    height:80%;
    cursor: pointer;
  }
  .selected-seat{
    background: url('../../assets/movie-imgs/icons/selected.png') center center no-repeat;
    background-size: 100% 100%;
  }
  .unselected-seat{
    background: url('../../assets/movie-imgs/icons/unselected.png') center center no-repeat;
    background-size: 100% 100%;
  }
  .bought-seat{
    background: url('../../assets/movie-imgs/icons/bought.png') center center no-repeat;
    background-size: 100% 100%;
  }
    }
  }
}
</style>
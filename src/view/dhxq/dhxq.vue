<template>
  <div class="dhxq">
    <!-- 右上角按钮 -->
    <div class="rightBtn">
      <div class="blocks1" @click="fanhuiClick"></div>
      <div class="blocks2" @click="sanweiClick"></div>
    </div>
    <!-- 右下角按钮 -->
    <div class="bottomBtn">
      <div class="b_block">
        <div
          class="b_item"
          @click="currentClick(0)"
          :class="currentIndex == 0 ? 'b_item2' : ''"
        >
          <span>基本情况</span>
        </div>
        <div
          class="b_item"
          @click="currentClick(1)"
          :class="currentIndex == 1 ? 'b_item2' : ''"
        >
          <span>片区概况</span>
        </div>
      </div>
      <div class="b_block">
        <div
          class="b_item"
          @click="currentClick(2)"
          :class="currentIndex == 2 ? 'b_item2' : ''"
        >
          <span>容东片区</span>
        </div>
        <div
          class="b_item"
          @click="currentClick(3)"
          :class="currentIndex == 3 ? 'b_item2' : ''"
        >
          <span>容西片区</span>
        </div>
      </div>
      <div class="b_block">
        <div
          class="b_item"
          @click="currentClick(4)"
          :class="currentIndex == 4 ? 'b_item2' : ''"
        >
          <span>启动区</span>
        </div>
        <div
          class="b_item"
          @click="currentClick(5)"
          :class="currentIndex == 5 ? 'b_item2' : ''"
        >
          <span>咎岗片区</span>
        </div>
      </div>
      <div class="b_block">
        <div
          class="b_item"
          @click="currentClick(6)"
          :class="currentIndex == 6 ? 'b_item2' : ''"
        >
          <span>起步区</span>
        </div>
        <div
          class="b_item"
          @click="currentClick(7)"
          :class="currentIndex == 7 ? 'b_item2' : ''"
        >
          <span>雄东片区</span>
        </div>
      </div>
    </div>
    <!-- 基本情况 -->
    <div class="jiben" v-show="currentIndex == 0"></div>
    <!-- 片区概况 -->
    <div class="pianqu" v-show="currentIndex == 1"></div>
    <!-- 容东片区 -->
    <div class="rongdong" v-show="currentIndex == 2"></div>
    <div class="rongdong2" v-show="currentIndex == 2"></div>
    <!-- 容西片区 -->
    <div class="rongxi" v-show="currentIndex == 3"></div>
    <div class="rongxi2" v-show="currentIndex == 3"></div>
    <!-- 启动区 -->
    <div class="qidong" v-show="currentIndex == 4"></div>
    <div class="qidong2" v-show="currentIndex == 4"></div>
    <!-- 咎岗片区 -->
    <div class="jiugang" v-show="currentIndex == 5"></div>
    <div class="jiugang2" v-show="currentIndex == 5"></div>
    <!-- 起步区 -->
    <div class="qibu" v-show="currentIndex == 6"></div>
    <div class="qibu2" v-show="currentIndex == 6"></div>
    <!-- 雄东片区 -->
    <div class="xiongdong" v-show="currentIndex == 7"></div>
    <div class="xiongdong2" v-show="currentIndex == 7"></div>
  </div>
</template>

<script>
export default {
  name: "dhxq",
  data() {
    return {
      currentIndex: 0,
    };
  },
  activated() {
    let data = {
      functionName: "NavigationPage",
      functionParameters: [
        {
          key: "xinxiDetils",
          value: "0",
        },
      ],
    };
    ue.interface.broadcast("PSAPI", JSON.stringify(data));
  },
  deactivated() {
    this.currentIndex = 0;
  },
  mounted() {},

  methods: {
    currentClick(e) {
      this.currentIndex = e;
      let data = {
        functionName: "NavigationPage",
        backFunctionName: "",
        functionParameters: [
          {
            key: "xinxiDetils",
            value: e,
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    fanhuiClick() {
      let data = {
        functionName: "fanhuiDaoHang",
        backFunctionName: "",
        functionParameters: [],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      this.$router.push({
        path: "/daohang",
      });
    },
    sanweiClick() {
      let data = {
        functionName: "goSanWei",
        backFunctionName: "",
        functionParameters: [
          {
            key: "XA",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      let v = { ChooseType: "ShowCompass", value: true };
      let data2 = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      let v2 = { ChooseType: "ShowFastPositionButton", SelectType: true };
      let data3 = {
        functionName: "QuickPosition",
        functionParameters: [
          {
            key: "QuickPosition",
            value: JSON.stringify(v2),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data3));
      this.$router.push({
        path: "/index",
      });
      let that = this;
    },
  },
};
</script>

<style scoped>
.dhxq {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999999 !important;
}
.rightBtn {
  width: 313px;
  height: 42px;
  position: fixed;
  right: 20px;
  top: 56px;
  display: flex;
  justify-content: space-between;
}
.rightBtn > .blocks1 {
  width: 144px;
  height: 42px;
  background: url("img/fanhui.png") no-repeat;
  background-size: 100% 100%;
}
.rightBtn > .blocks2 {
  width: 144px;
  height: 42px;
  background: url("img/sanwei.png") no-repeat;
  background-size: 100% 100%;
}
</style>
<style scoped>
.bottomBtn {
  width: 221px;
  height: 192px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bottomBtn > .b_block {
  width: 100%;
  height: 41px;
  display: flex;
  justify-content: space-between;
}
.bottomBtn > .b_block > .b_item {
  width: 100px;
  height: 100%;
  background: url("img/block.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.bottomBtn > .b_block > .b_item2 {
  background: url("img/block2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.bottomBtn > .b_block > .b_item2 > span {
  font-family: SourceHanSansSC-Bold;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0em;
  color: #ffffff;

  /* 11 */
  text-shadow: 0px 0px 10px 0px rgba(255, 238, 132, 0.8);
}
.bottomBtn > .b_block > .b_item > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
}
</style>
<style scoped>
.jiben {
  width: 371px;
  height: 965px;
  position: fixed;
  left: 14px;
  top: 101px;
  background: url("img/jiben.png") no-repeat;
  background-size: 100% 100%;
}
.pianqu {
  width: 371px;
  height: 965px;
  position: fixed;
  left: 14px;
  top: 101px;
  background: url("img/pianqu.png") no-repeat;
  background-size: 100% 100%;
}
.rongdong {
  width: 371px;
  height: 527px;
  position: fixed;
  left: 14px;
  top: 193px;
  background: url("img/rongdong1.png") no-repeat;
  background-size: 100% 100%;
}
.rongdong2 {
  width: 371px;
  height: 423px;
  position: fixed;
  right: 14px;
  top: 193px;
  background: url("img/rongdong2.png") no-repeat;
  background-size: 100% 100%;
}
.rongxi {
  width: 371px;
  height: 658px;
  position: fixed;
  left: 14px;
  top: 193px;
  background: url("img/rongxi.png") no-repeat;
  background-size: 100% 100%;
}
.rongxi2 {
  width: 371px;
  height: 409px;
  position: fixed;
  right: 14px;
  top: 193px;
  background: url("img/rongxi2.png") no-repeat;
  background-size: 100% 100%;
}
.qidong {
  width: 371px;
  height: 614px;
  position: fixed;
  left: 14px;
  top: 193px;
  background: url("img/qidong.png") no-repeat;
  background-size: 100% 100%;
}
.qidong2 {
  width: 371px;
  height: 614px;
  position: fixed;
  right: 14px;
  top: 193px;
  background: url("img/qidong2.png") no-repeat;
  background-size: 100% 100%;
}
.jiugang {
  width: 371px;
  height: 691px;
  position: fixed;
  left: 14px;
  top: 193px;
  background: url("img/jiugang.png") no-repeat;
  background-size: 100% 100%;
}
.jiugang2 {
  width: 371px;
  height: 409px;
  position: fixed;
  right: 14px;
  top: 193px;
  background: url("img/jiugang2.png") no-repeat;
  background-size: 100% 100%;
}
.qibu {
  width: 371px;
  height: 614px;
  position: fixed;
  left: 14px;
  top: 193px;
  background: url("img/qibu.png") no-repeat;
  background-size: 100% 100%;
}
.qibu2 {
  width: 371px;
  height: 614px;
  position: fixed;
  right: 14px;
  top: 193px;
  background: url("img/qibu2.png") no-repeat;
  background-size: 100% 100%;
}
.xiongdong {
  width: 371px;
  height: 658px;
  position: fixed;
  left: 14px;
  top: 193px;
  background: url("img/xiongdong.png") no-repeat;
  background-size: 100% 100%;
}
.xiongdong2 {
  width: 371px;
  height: 565px;
  position: fixed;
  right: 14px;
  top: 193px;
  background: url("img/xiongdong2.png") no-repeat;
  background-size: 100% 100%;
}
</style>

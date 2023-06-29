<template>
  <div class="buidan" v-if="show">
    <!-- <transition name="transitionBottom">
      <div v-show="show && !showItem" class="bottomss"></div>
    </transition> -->
    <!-- <transition name="transitionBottom">
      <liebiao @isShowItem="isShowItem" v-show="show && !showItem"></liebiao>
    </transition> -->
    <transition name="transitionLeft">
      <div v-show="show" class="wb"></div>
    </transition>
    <!-- ----------------------杆塔布点 物理信息、空间信息部分 阴影 --------------------- -->
    <transition name="transitionBottom">
      <div v-show="show" class="wb"></div>
    </transition>
    <transition name="transitionLeft">
      <div v-show="show && showXX2" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-show="show && showXX2" class="wr"></div>
    </transition>
    <!--移动旋转按钮-->
    <transition name="transitionRight">
      <div
        v-show="show && showKongJian"
        :class="showSC === true ? 'shanchu2' : ''"
        class="shanchu"
        @click="scClick"
      ></div>
    </transition>
    <!--返回按钮-->
    <transition name="transitionRight">
      <div class="fh_mr" v-show="show" @click="fhMrClick"></div>
    </transition>
    <!--信息缩放按钮-->
    <transition name="transitionRight">
      <div
        class="xxsf"
        v-show="show"
        :class="showXX2 ? 'xxsf2' : ''"
        @click="sfxxClick"
      ></div>
    </transition>

    <!-- 杆塔布点详情页面物理 -->
    <transition name="transitionLeft">
      <bxLeft @showKJ="showKJ" v-show="show && showXX2"></bxLeft>
    </transition>
    <transition name="transitionRight">
      <bxRight v-show="show && showXX2 && showKongJian"></bxRight>
    </transition>
  </div>
</template>

<script>
import bxLeft from "./components/bxLeft.vue";
import newLieBiao from "./components/newLieBiao.vue";
import bxRight from "./components/bxRight.vue";
export default {
  name: "j_buxian2",
  components: {
    bxLeft,
    newLieBiao,
    bxRight,
  },
  data() {
    return {
      show: false,
      showItem: false,
      showSC: false, //是否移入-杆塔布点-删除按钮
      showFH: false, //是否移入-杆塔布点-返回按钮
      tgId: null,
      showXX2: true,
      currentIndex: 0, //层级选择
      showKongJian: false,
    };
  },

  activated() {
    this.show = true;
    this.showKongJian = false;
  },
  deactivated() {
    this.show = false;
    this.showItem = false;
  },
  methods: {
    // 控制展示空间信息
    showKJ() {
      this.showKongJian = true;
    },
    isShowItem(e) {
      this.showItem = true;
      this.tgId = e;
    },
    fhYr() {
      this.showFH = true;
    },
    fhYc() {
      this.showFH = false;
    },
    fhClick() {
      this.showItem = false;
      let v = {
        FocusTarget: {
          target: "Line",
          ID: this.tgId,
          FocusType: false,
          IDType: "Line",
        },
      };
      let data = {
        functionName: "FocusTower",
        backFunctionName: "",
        functionParameters: [
          {
            key: "FocusTarget",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    scYr() {
      this.showSC = true;
    },
    scYc() {
      this.showSC = false;
    },
    scClick() {
      this.showSC = !this.showSC;

      // 监听点击删除
      let ids = [];
      ids.push(this.tgId);
      let v = { ChooseType: "SwitchingMode", value: this.showSC };

      let data = {
        functionName: "Sundry",
        backFunctionName: "BackSundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },

    sfxxClick() {
      this.showXX2 = !this.showXX2;
    },
    fhMrClick() {
      // let v = { ChooseType: "Return", Value: "Tower" };
      // let data = {
      //   functionName: "CableMaintenance",
      //   functionParameters: [
      //     {
      //       key: "CableMaintenance",
      //       value: JSON.stringify(v),
      //     },
      //   ],
      // };
      // ue.interface.broadcast("PSAPI", JSON.stringify(data));

      let v2 = { ChooseType: "LineLinkEditer", value: "false" };
      let datas = {
        functionName: "Sundry",
        functionParameters: [
          {
            key: "Sundry",
            value: JSON.stringify(v2), //切换类型
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(datas));

      let v3 = {
        FocusTarget: {
          target: "IntervalInfo",
          ID: window.bxSelectData.oid, //传点击或这选中的右侧信息的qsgt
          FocusType: "false",
          EditMode: "false",
          IntervalInfoindex: window.bxSelectData.Str_ValID, //传点击或这选中的右侧信息的Str_ValID
        },
      };
      let data3 = {
        functionName: "FocusTower",
        functionParameters: [
          {
            key: "FocusTarget",
            value: JSON.stringify(v3),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data3));
      let v4 = {
        FocusTarget: {
          target: "IntervalInfo",
          ID: window.bxSelectData2.oid, //传点击或这选中的右侧信息的qsgt
          FocusType: "false",
          EditMode: "false",
          IntervalInfoindex: window.bxSelectData2.Str_ValID, //传点击或这选中的右侧信息的Str_ValID
        },
      };
      let data4 = {
        functionName: "FocusTower",
        functionParameters: [
          {
            key: "FocusTarget",
            value: JSON.stringify(v4),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data4));
      this.$router.push({
        path: "/mr",
      });
    },
    // 层级选择
    cengClick(e) {
      if (this.currentIndex == e) {
        this.currentIndex = -1;
      } else {
        this.currentIndex = e;
      }
    },
  },
};
</script>

<style scoped>
.buidan {
  width: 100%;
  height: 100%;
}
.bottomss {
  width: 100%;
  height: 681px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: -1;
  background: url("img/bottom.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>

<style scoped>
/* 物理信息、空间信息部分 */
.wb {
  width: 100%;
  height: 86px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: url("img/wb.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
.wl {
  width: 630px;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: url("img/wl.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
.wr {
  width: 630px;
  height: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  background: url("img/wr.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
.shanchu {
  width: 100px;
  height: 44px;
  position: fixed;
  bottom: 79px;
  left: 403px;
  background: url("img/rotation.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.shanchu2 {
  background: url("img/move.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.shanchu > img {
  width: 19px;
  height: 20px;
}

.fanhui {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 58.58px;
  right: 463px;
  background: url("img/ibg.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.fanhui2 {
  background: url("img/ibga.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.fanhui > img {
  width: 17px;
  height: 21px;
}
.ceng {
  width: 159px;
  height: 124px;
  position: absolute;
  right: 414px;
  bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.cengItem {
  width: 72px;
  height: 28px;
  background: url("img/bgg1.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cengItem > span {
  font-family: Source Han Sans SC;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.8);
}
.cengItem2 {
  background: url("img/bgg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.cengItem2 > span {
  color: rgba(255, 255, 255, 1);
}
</style>

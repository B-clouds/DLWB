<template>
  <div class="buidan" v-if="show">
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
    <!-- 筛选设备类型 -->
    <shaixuan @showType="showType" />
    <!--移动旋转按钮-->
    <transition name="transitionLeft">
      <div
        v-show="(show && showIndex == 0) || (show && showIndex == 1)"
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
    <!-- 储能箱 -->
    <transition name="transitionLeft">
      <equipmentLeft
        @showKJ="showKJ"
        v-show="show && showXX2 && showIndex == 0"
      ></equipmentLeft>
    </transition>
    <transition name="transitionRight">
      <kongjian2
        @baoCun="baoCun"
        v-show="show && showXX2 && showIndex == 0 && showCNright"
      ></kongjian2>
    </transition>
    <!-- 光伏板 -->
    <transition name="transitionLeft">
      <gfbLeft
        @showKJ="showKJ"
        v-show="show && showXX2 && showIndex == 1"
      ></gfbLeft>
    </transition>
    <transition name="transitionRight">
      <gfbRight
        @baoCun="baoCun"
        v-show="show && showXX2 && showIndex == 1 && showGFBright"
      ></gfbRight>
    </transition>
  </div>
</template>

<script>
import equipmentLeft from "./components/equipmentLeft.vue";
import kongjian2 from "./components/kongjian2.vue";
import shaixuan from "./components/shaixuan.vue";
import gfbLeft from "./components/gfbLeft.vue";
import gfbRight from "./components/gfbRight.vue";
export default {
  name: "w_sheshi2",
  components: {
    equipmentLeft,
    kongjian2,
    shaixuan,
    gfbLeft,
    gfbRight,
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
      showIndex: -1,
      showCNright: false, //储能箱是否显示右侧
      showGFBright: false, //光伏板是否显示右侧
    };
  },

  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
    this.showItem = false;
    this.showIndex = -1;
    this.showCNright = false;
  },
  methods: {
    showKJ(e) {
      if (e == 0) {
        this.showCNright = true;
      } else if (e == 1) {
        this.showGFBright = true;
      }
    },
    showType(e) {
      this.showIndex = e;
    },
    baoCun(e) {
      let ids = [];
      ids.push(this.tgId);
      let v = { range: { type: "Save", target: "MStationing", member: ids } };
      let data = {
        functionName: "SaveGame",
        backFunctionName: "ws_saves",
        functionParameters: [
          {
            key: "range",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.ws_saves = this.ws_saves;
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
      let v = {
        FocusTarget: {
          target: "MStationing",
          FocusType: false,
          IDType: "MStationing",
          EditMode: false,
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

<style scoped>
.fh_mr {
  width: 71px;
  height: 31px;
  position: absolute;
  top: 46px;
  right: 125px;
  background: url("img/fh_mr.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}

.xxsf {
  width: 98.5px;
  height: 31px;
  position: absolute;
  right: 9px;
  top: 46px;
  background: url("img/zk.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.xxsf2 {
  background: url("img/zd.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.s_show1 {
  width: 18px;
  height: 142px;
  background: url("img/shou1.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: absolute;
  top: 493px;
  left: 0px;
}
.s_show2 {
  width: 18px;
  height: 142px;
  background: url("img/shou2.png") no-repeat !important;
  background-size: 100% 100% !important;
  position: absolute;
  top: 493px;
  right: 0px;
}
</style>

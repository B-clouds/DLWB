<template>
  <div class="buidan">
    <transition name="transitionLeft">
      <newLieBiao
        @isShowItem="isShowItem"
        v-show="show && !showItem"
      ></newLieBiao>
    </transition>
    <!-- ----------------------杆塔布点 物理信息、空间信息部分 阴影 --------------------- -->
    <transition name="transitionBottom">
      <div v-show="show && showItem" class="wb"></div>
    </transition>
    <transition name="transitionLeft">
      <div v-show="show && showItem && showXX2" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-show="show && showItem && showXX2" class="wr"></div>
    </transition>
    <!--移动旋转按钮-->
    <transition name="transitionRight">
      <div
        v-show="show && showItem"
        :class="showSC === true ? 'shanchu2' : ''"
        class="shanchu"
        @click="scClick"
      ></div>
    </transition>
    <!--返回按钮-->
    <transition name="transitionRight">
      <div class="fh_mr" v-show="show && showItem" @click="fhMrClick"></div>
    </transition>
    <!--信息缩放按钮-->
    <transition name="transitionRight">
      <div
        class="xxsf"
        v-show="show && showItem"
        :class="showXX2 ? 'xxsf2' : ''"
        @click="sfxxClick"
      ></div>
    </transition>
    <!-- 杆塔布点详情页面物理 -->
    <transition name="transitionLeft">
      <wuli v-show="show && showItem && showXX2"></wuli>
    </transition>
    <!-- 杆塔布点详情页面空间 -->
    <transition name="transitionRight">
      <kongjian @baoCun="baoCun" v-if="show && showItem && showXX2"></kongjian>
    </transition>
  </div>
</template>

<script>
import kongjian from "./components/kongjian.vue";
import newLieBiao from "./components/newLieBiao.vue";
import wuli from "./components/wuli.vue";
export default {
  name: "w_sheshi",
  components: {
    kongjian,
    newLieBiao,
    wuli,
  },
  data() {
    return {
      show: false,
      showItem: false,
      showSC: true, //是否移入-杆塔布点-删除按钮
      showFH: false, //是否移入-杆塔布点-返回按钮
      tgId: null,
      showXX2: true,
    };
  },

  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
    this.showItem = false;
  },
  methods: {
    isShowItem(e) {
      this.showItem = true;
      this.tgId = e;
      // 监听点击删除
      let ids = [];
      ids.push(this.tgId);
      let v = { ChooseType: "SwitchingMode", value: true };

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
    fhYr() {
      this.showFH = true;
    },
    fhYc() {
      this.showFH = false;
    },
    fhMrClick() {
      this.showItem = false;
      this.showSC = true;
      let v = {
        FocusTarget: {
          target: "HStation",
          ID: this.tgId,
          FocusType: false,
          IDType: "HStation",
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
    sfxxClick() {
      this.showXX2 = !this.showXX2;
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
    ws_deletes() {
      this.showItem = false;
      let that = this;

      that.$bus.$emit("getSelect");
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
    ws_saves() {
      let that = this;
      that.$bus.$emit("getSelect");
    },
  },
};
</script>

<style scoped>
.buidan {
  width: 100%;
  height: 100%;
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

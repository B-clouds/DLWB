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
      <div v-show="show && showItem" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-show="show && showItem" class="wr"></div>
    </transition>
    <!-- 杆塔布点详情页面的删除按钮 -->
    <!-- <transition name="transitionRight">
      <div
        v-show="show && showItem"
        :class="showSC ? 'shanchu2' : ''"
        class="shanchu"
        @mouseenter="scYr"
        @mouseleave="scYc"
        @click="scClick"
      >
        <img v-show="!showSC" src="./img/sc.png" />
        <img v-show="showSC" src="./img/sc2.png" />
      </div>
    </transition> -->
    <!-- 杆塔布点详情页面的返回按钮 -->
    <transition name="transitionRight">
      <div
        v-show="show && showItem"
        :class="showFH ? 'fanhui2' : ''"
        class="fanhui"
        @mouseenter="fhYr"
        @mouseleave="fhYc"
        @click="fhClick"
      >
        <img v-show="!showFH" src="./img/fh.png" />
        <img v-show="showFH" src="./img/fh2.png" />
      </div>
    </transition>
    <!-- 杆塔布点详情页面物理 -->
    <transition name="transitionLeft">
      <wuli v-show="show && showItem"></wuli>
    </transition>
    <!-- 杆塔布点详情页面空间 -->
    <!-- <transition name="transitionRight">
      <kongjian @baoCun="baoCun" v-if="show && showItem"></kongjian>
    </transition> -->
  </div>
</template>

<script>
import newLieBiao from "./components/newLieBiao.vue";
import kongjian from "./components/kongjian.vue";
import wuli from "./components/wuli.vue";
export default {
  name: "d_buxian",
  components: {
    kongjian,
    newLieBiao,
    wuli,
  },
  data() {
    return {
      show: false,
      showItem: false,
      showSC: false, //是否移入-杆塔布点-删除按钮
      showFH: false, //是否移入-杆塔布点-返回按钮
      tgId: null,
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
          target: "CableLine",
          ID: this.tgId,
          FocusType: false,
          IDType: "CableLine",
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
      // 监听点击删除
      let ids = [];
      ids.push(this.tgId);
      let v = {
        range: {
          type: "Delet",
          target: "CableLine",
          member: ids,
          SaveType: "Json",
        },
      };
      let data = {
        functionName: "SaveGame",
        backFunctionName: "dx_deletes",
        functionParameters: [
          {
            key: "range",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.dx_deletes = this.dx_deletes;
    },
    dx_deletes() {
      this.showItem = false;
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
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 110px;
  right: 463px;
  background: url("img/ibg.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.shanchu2 {
  background: url("img/ibga.png") no-repeat !important;
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

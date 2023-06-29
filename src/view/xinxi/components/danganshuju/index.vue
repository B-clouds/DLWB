<template>
  <div class="dasj">
    <!-- 列表页左侧选项 -->
    <!-- <transition name="transitionLeft">
      <dh @navclick="navclick" v-show="show" />
    </transition> -->
    <!-- 子级导航 -->
    <transition name="transitionBottom">
      <div v-if="show" class="navs">
        <div class="navsLeft" @click="navListQ"></div>
        <div class="navsRight" @click="navListQ"></div>
        <div
          class="blocks"
          @click="navclick(index)"
          :class="navIndex == index ? 'blocks2' : ''"
          v-for="(item, index) in navList"
          :key="index"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </transition>

    <!-- ------------------------------------- 站房档案 --------------------------------- -->
    <transition name="transitionBottom">
      <zhanfang v-if="show && detiles1"></zhanfang>
    </transition>
    <transition name="transitionBottom">
      <ganta v-if="show && detiles2"></ganta>
    </transition>
    <transition name="transitionBottom">
      <xianlu v-if="show && detiles3"></xianlu>
    </transition>
    <transition name="transitionBottom">
      <taiqu v-if="show && detiles4"></taiqu>
    </transition>
    <transition name="transitionBottom">
      <dianlan v-if="show && detiles5"></dianlan>
    </transition>
    <transition name="transitionBottom">
      <weiwang v-if="show && detiles6"></weiwang>
    </transition>
    <transition name="transitionBottom">
      <jiange v-if="show && detiles7"></jiange>
    </transition>
    <transition name="transitionBottom">
      <kaiguan v-if="show && detiles8"></kaiguan>
    </transition>
    <transition name="transitionBottom">
      <wulian v-if="show && detiles9"></wulian>
    </transition>
    <transition name="transitionBottom">
      <wangluo v-if="show && detiles10"></wangluo>
    </transition>
  </div>
</template>

<script>
import dh from "./components/dh.vue";
import zhanfang from "./components/zhanfang.vue";
import ganta from "./components/ganta.vue";
import xianlu from "./components/xianlu.vue";
import taiqu from "./components/taiqu.vue";
import dianlan from "./components/dianlan.vue";
import weiwang from "./components/weiwang.vue";
import jiange from "./components/jiange.vue";
import kaiguan from "./components/kaiguan.vue";
import wulian from "./components/wulian.vue";
import wangluo from "./components/wangluo.vue";
export default {
  name: "dasj",
  components: {
    dh,
    zhanfang,
    ganta,
    xianlu,
    taiqu,
    dianlan,
    weiwang,
    jiange,
    kaiguan,
    wulian,
    wangluo,
  },
  data() {
    return {
      show: false,
      detiles1: true,
      detiles2: false,
      detiles3: false,
      detiles4: false,
      detiles5: false,
      detiles6: false,
      detiles7: false,
      detiles8: false,
      detiles9: false,
      detiles10: false,
      navList: ["站房档案", "杆塔档案", "线路档案", "台区档案", "电缆档案"],
      navList2: ["站房档案", "杆塔档案", "线路档案", "台区档案", "电缆档案"],
      navList3: ["微网档案", "间隔档案", "开关档案", "物联档案", "网格档案"],
      navIndex: 0,
      navData: 0,
    };
  },

  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
    this.navIndex = 0;
    this.detiles1 = true;
  },
  methods: {
    navclick(e) {
      this.navIndex = e;
      if (this.navData == 0) {
        if (e == 0) {
          this.detiles1 = true;
          this.detiles2 = false;
          this.detiles3 = false;
          this.detiles4 = false;
          this.detiles5 = false;
          this.detiles6 = false;
          this.detiles7 = false;
          this.detiles8 = false;
          this.detiles9 = false;
          this.detiles10 = false;
        } else if (e == 1) {
          this.detiles2 = true;
          this.detiles1 = false;
          this.detiles3 = false;
          this.detiles4 = false;
          this.detiles5 = false;
          this.detiles6 = false;
          this.detiles7 = false;
          this.detiles8 = false;
          this.detiles9 = false;
          this.detiles10 = false;
        } else if (e == 2) {
          this.detiles3 = true;
          this.detiles1 = false;
          this.detiles2 = false;
          this.detiles4 = false;
          this.detiles5 = false;
          this.detiles6 = false;
          this.detiles7 = false;
          this.detiles8 = false;
          this.detiles9 = false;
          this.detiles10 = false;
        } else if (e == 3) {
          this.detiles4 = true;
          this.detiles1 = false;
          this.detiles2 = false;
          this.detiles3 = false;
          this.detiles5 = false;
          this.detiles6 = false;
          this.detiles7 = false;
          this.detiles8 = false;
          this.detiles9 = false;
          this.detiles10 = false;
        } else if (e == 4) {
          this.detiles5 = true;
          this.detiles1 = false;
          this.detiles2 = false;
          this.detiles3 = false;
          this.detiles4 = false;
          this.detiles6 = false;
          this.detiles7 = false;
          this.detiles8 = false;
          this.detiles9 = false;
          this.detiles10 = false;
        }
      } else {
        if (e == 0) {
          this.detiles5 = false;
          this.detiles1 = false;
          this.detiles2 = false;
          this.detiles3 = false;
          this.detiles4 = false;
          this.detiles6 = true;
          this.detiles7 = false;
          this.detiles8 = false;
          this.detiles9 = false;
          this.detiles10 = false;
        } else if (e == 1) {
          this.detiles5 = false;
          this.detiles1 = false;
          this.detiles2 = false;
          this.detiles3 = false;
          this.detiles4 = false;
          this.detiles6 = false;
          this.detiles7 = true;
          this.detiles8 = false;
          this.detiles9 = false;
          this.detiles10 = false;
        } else if (e == 2) {
          this.detiles5 = false;
          this.detiles1 = false;
          this.detiles2 = false;
          this.detiles3 = false;
          this.detiles4 = false;
          this.detiles6 = false;
          this.detiles7 = false;
          this.detiles8 = true;
          this.detiles9 = false;
          this.detiles10 = false;
        } else if (e == 3) {
          this.detiles5 = false;
          this.detiles1 = false;
          this.detiles2 = false;
          this.detiles3 = false;
          this.detiles4 = false;
          this.detiles6 = false;
          this.detiles7 = false;
          this.detiles8 = false;
          this.detiles9 = true;
          this.detiles10 = false;
        } else if (e == 4) {
          this.detiles5 = false;
          this.detiles1 = false;
          this.detiles2 = false;
          this.detiles3 = false;
          this.detiles4 = false;
          this.detiles6 = false;
          this.detiles7 = false;
          this.detiles8 = false;
          this.detiles9 = false;
          this.detiles10 = true;
        }
      }
    },

    navListQ() {
      this.navIndex = -1;
      if (this.navData == 0) {
        this.navList = this.navList3;
        this.navData = 1;
      } else {
        this.navList = this.navList2;
        this.navData = 0;
      }
    },
  },
};
</script>

<style scoped>
</style>

<style scoped>
.navs {
  width: 720px;
  height: 40px;
  position: fixed;
  left: 610px;
  bottom: 21px;
  display: flex;
  justify-content: space-between;
}
.navsLeft {
  position: absolute;
  width: 39px;
  height: 38px;
  top: 4px;
  left: -52px;
  background: url("img/left.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.navsRight {
  cursor: pointer;

  position: absolute;
  width: 39px;
  height: 38px;
  top: 4px;
  right: -52px;
  background: url("img/right.png") no-repeat;
  background-size: 100% 100%;
}
.navs > .blocks {
  width: 136px;
  height: 39px;
  background: url("img/nav.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.navs > .blocks > span {
  font-size: 22px !important;
  text-align: center;
  font-weight: normal;
  margin-top: 4px;
  font-family: YouSheBiaoTiHei;
  background-image: -webkit-linear-gradient(
    bottom,
    #569eff,
    #ffffff
  ) !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navs > .blocks2 {
  background: url("img/nava.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.navs > .blocks2 > span {
  background-image: -webkit-linear-gradient(
    bottom,
    #6bedff,
    #ffffff
  ) !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.dwTop {
  width: 100%;
  height: 140px;
  position: fixed;
  left: 0;
  top: 0;
  background: url("img/dwTop.png") no-repeat !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
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
.bottomss {
  width: 100%;
  height: 514px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: -1;
  background: url("img/bottom.png") no-repeat !important;
  background-size: 100% 100% !important;
}
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
.bbb {
  width: 100%;
  height: 681px;
  position: fixed;
  left: 0;
  bottom: 0;
  background: url("img/bbb.png") no-repeat !important;
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
  bottom: 21.58px;
  right: 373px;
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

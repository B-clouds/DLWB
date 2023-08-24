<template>
  <div class="dasj">
    <!-- 子级导航 -->
    <transition name="transitionBottom">
      <div v-if="show && !detiles0" class="navs">
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
    <!-- 默认页面 -->
    <transition name="transitionLeft">
      <jLeft v-if="show && detiles0" @showNav="showNav" />
    </transition>
    <!-- ------------------------------------- 站房档案 --------------------------------- -->
    <transition name="transitionBottom">
      <zhanfang
        @fanhuiClick="fanhuiClick"
        v-if="show && detiles1 && !detiles0"
      ></zhanfang>
    </transition>
    <transition name="transitionBottom">
      <ganta
        @fanhuiClick="fanhuiClick"
        v-if="show && detiles2 && !detiles0"
      ></ganta>
    </transition>
    <transition name="transitionBottom">
      <xianlu
        @fanhuiClick="fanhuiClick"
        v-if="show && detiles3 && !detiles0"
      ></xianlu>
    </transition>
    <transition name="transitionBottom">
      <taiqu
        @fanhuiClick="fanhuiClick"
        v-if="show && detiles4 && !detiles0"
      ></taiqu>
    </transition>
    <transition name="transitionBottom">
      <dianlan
        @fanhuiClick="fanhuiClick"
        v-if="show && detiles5 && !detiles0"
      ></dianlan>
    </transition>
    <transition name="transitionBottom">
      <weiwang
        @fanhuiClick="fanhuiClick"
        v-if="show && detiles6 && !detiles0"
      ></weiwang>
    </transition>
    <transition name="transitionBottom">
      <jiang
        @fanhuiClick="fanhuiClick"
        v-if="show && detiles7 && !detiles0"
      ></jiang>
    </transition>
    <transition name="transitionBottom">
      <kaiguan
        @fanhuiClick="fanhuiClick"
        v-if="show && detiles8 && !detiles0"
      ></kaiguan>
    </transition>
    <transition name="transitionBottom">
      <wulian
        @fanhuiClick="fanhuiClick"
        v-if="show && detiles9 && !detiles0"
      ></wulian>
    </transition>
    <transition name="transitionBottom">
      <wangluo
        @fanhuiClick="fanhuiClick"
        v-if="show && detiles10 && !detiles0"
      ></wangluo>
    </transition>
  </div>
</template>

<script>
import dh from "./components/dh.vue";
import jLeft from "./components/jLeft.vue";
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
    jLeft,
  },
  data() {
    return {
      show: false,
      detiles0: true,
      detiles1: false,
      detiles2: false,
      detiles3: false,
      detiles4: false,
      detiles5: false,
      detiles6: false,
      detiles7: false,
      detiles8: false,
      detiles9: false,
      detiles10: false,
      navList: [
        "站房档案",
        "杆塔档案",
        "线路档案",
        "台区档案",
        "电缆档案",
        "微网档案",
        "间隔档案",
        "开关档案",
        "物联档案",
        "网格档案",
      ],
      navIndex: 0,
    };
  },

  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
    this.navIndex = 0;
    this.detiles0 = true;
    this.detiles10 = false;
    this.detiles1 = false;
    this.detiles2 = false;
    this.detiles3 = false;
    this.detiles4 = false;
    this.detiles6 = false;
    this.detiles7 = false;
    this.detiles8 = false;
    this.detiles9 = false;
    this.detiles5 = false;
  },
  methods: {
    navclick(e) {
      this.navIndex = e;
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
      } else if (e == 5) {
        this.detiles6 = true;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles7 = false;
        this.detiles8 = false;
        this.detiles9 = false;
        this.detiles10 = false;
      } else if (e == 6) {
        this.detiles7 = true;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles6 = false;
        this.detiles5 = false;
        this.detiles8 = false;
        this.detiles9 = false;
        this.detiles10 = false;
      } else if (e == 7) {
        this.detiles8 = true;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles6 = false;
        this.detiles7 = false;
        this.detiles5 = false;
        this.detiles9 = false;
        this.detiles10 = false;
      } else if (e == 8) {
        this.detiles9 = true;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles6 = false;
        this.detiles7 = false;
        this.detiles8 = false;
        this.detiles5 = false;
        this.detiles10 = false;
      } else if (e == 9) {
        this.detiles10 = true;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles6 = false;
        this.detiles7 = false;
        this.detiles8 = false;
        this.detiles9 = false;
        this.detiles5 = false;
      }
    },
    showNav() {
      this.detiles0 = false;
      this.detiles10 = false;
      this.detiles1 = true;
      this.detiles2 = false;
      this.detiles3 = false;
      this.detiles4 = false;
      this.detiles6 = false;
      this.detiles7 = false;
      this.detiles8 = false;
      this.detiles9 = false;
      this.detiles5 = false;
      this.navIndex = 0;
    },
    fanhuiClick() {
      this.detiles0 = true;
      this.detiles10 = false;
      this.detiles1 = false;
      this.detiles2 = false;
      吧;
      this.detiles3 = false;
      this.detiles4 = false;
      this.detiles6 = false;
      this.detiles7 = false;
      this.detiles8 = false;
      this.detiles9 = false;
      this.detiles5 = false;
    },
  },
};
</script>

<style scoped></style>

<style scoped>
.navs {
  width: 1460px;
  height: 40px;
  position: fixed;
  left: 230px;
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

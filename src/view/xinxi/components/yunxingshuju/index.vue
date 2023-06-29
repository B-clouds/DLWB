<template>
  <div class="dasj">
    <!-- 列表页左侧选项 -->
    <transition name="transitionBottom">
      <div v-if="show" class="navs">
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

    <!-- ------------------------------------- 运行数据 --------------------------------- -->
    <transition name="transitionBottom">
      <gonglv v-if="show && detiles1"></gonglv>
    </transition>
    <transition name="transitionBottom">
      <dianya v-if="show && detiles2"></dianya>
    </transition>
    <transition name="transitionBottom">
      <dianliu v-if="show && detiles3"></dianliu>
    </transition>
    <transition name="transitionBottom">
      <yaoxin v-if="show && detiles4"></yaoxin>
    </transition>
  </div>
</template>

<script>
import dh from "./components/dh.vue";
import gonglv from "./components/gonglv.vue";
import dianya from "./components/dianya.vue";
import dianliu from "./components/dianliu.vue";
import yaoxin from "./components/yaoxin.vue";

export default {
  name: "yxsj",
  components: {
    dh,
    gonglv,
    dianya,
    dianliu,
    yaoxin,
  },
  data() {
    return {
      show: false,
      detiles1: true,
      detiles2: false,
      detiles3: false,
      detiles4: false,
      navIndex: 0,
      navList: ["功率数据", "电压数据", "电流数据", "通信数据"],
    };
  },

  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
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
      } else if (e == 6) {
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
      } else if (e == 7) {
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
      } else if (e == 8) {
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
      } else if (e == 9) {
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
    },
  },
};
</script>

<style scoped>
</style>

<style scoped>
.navs {
  width: 590px;
  height: 40px;
  position: fixed;
  left: 690px;
  bottom: 21px;
  display: flex;
  justify-content: space-between;
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

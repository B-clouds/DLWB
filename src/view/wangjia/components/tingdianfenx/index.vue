<template>
  <div class="buidan">
    <!-- 列表页阴影 -->
    <transition name="transitionLeft">
      <div v-show="show" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-show="show" class="wr"></div>
    </transition>
    <!-- 子级导航 -->
    <transition name="transitionBottom">
      <div v-show="show && showNavs" class="navs">
        <div
          class="blocks"
          @click="navClick(index)"
          :class="navIndex == index ? 'blocks2' : ''"
          v-for="(item, index) in navList"
          :key="index"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </transition>
    <!-- 默认页面 -->
    <tdLeft
      @showNav="showNav"
      @getOid="getOid"
      @getIds="getIds"
      v-if="show && !showNavs"
    />
    <!-- 停电监测 -->
    <tdjcLeft @geshihua="geshihua" v-if="show && showNavs && detiles1" />
    <tdjcRight v-if="show && showNavs && detiles1" />

    <!-- 原因分析 -->
    <yyfxLeft @geshihua="geshihua" v-if="show && showNavs && detiles2" />
    <yyfxRight v-if="show && showNavs && detiles2" />

    <!-- 措施跟踪 -->
    <csgzLeft @geshihua="geshihua" v-if="show && showNavs && detiles3" />
    <csgzRight v-if="show && showNavs && detiles3" />
  </div>
</template>

<script>
// 基本信息
import tdLeft from "./components/tdLeft.vue";
// 停电监测
import tdjcLeft from "./components/tdjcLeft.vue";
import tdjcRight from "./components/tdjcRight.vue";
// 原因分析
import yyfxLeft from "./components/yyfxLeft.vue";
import yyfxRight from "./components/yyfxRight.vue";
// 措施跟踪
import csgzLeft from "./components/csgzLeft.vue";
import csgzRight from "./components/csgzRight.vue";
export default {
  name: "tingdianfenx",
  components: {
    tdLeft,
    tdjcLeft,
    tdjcRight,
    yyfxLeft,
    yyfxRight,
    csgzLeft,
    csgzRight,
  },
  data() {
    return {
      show: false,
      navIndex: 0,
      navList: ["停电监测", "原因分析", "措施跟踪"],
      showRights: false,
      ids: [],
      oids: 0,
      showNavs: false,
      detiles1: true,
      detiles2: false,
      detiles3: false,
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("showDetiles1", () => {
      that.detiles1 = true;
      that.detiles2 = false;
      that.navIndex = 0;
      that.showRights = false;
    });
  },
  activated() {
    this.show = true;
  },
  deactivated() {
    this.showNavs = false;
    this.show = false;
    this.detiles1 = true;
    this.detiles2 = false;
    this.navIndex = 0;
  },
  methods: {
    geshihua() {
      this.showNavs = false;
    },
    getOid(e) {
      this.oids = e;
    },
    getIds(e) {
      this.ids = e;
    },
    navClick(e) {
      this.navIndex = e;
      if (e == 0) {
        this.detiles1 = true;
        this.detiles2 = false;
        this.detiles3 = false;
      } else if (e == 1) {
        this.detiles1 = false;
        this.detiles2 = true;
        this.detiles3 = false;
      } else if (e == 2) {
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = true;
      }
    },
    showNav() {
      this.showNavs = true;
      this.detiles1 = true;
      this.navIndex = 0;
      console.log("----------------", this.showNav, this.navIndex);
    },
  },
};
</script>

<style scoped>
.navs {
  width: 470px;
  height: 40px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
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
  margin-top: 7px;
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
.buidan {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
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
</style>

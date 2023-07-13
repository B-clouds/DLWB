<template>
  <div class="fuheyuce">
    <!-- 列表页阴影 -->
    <transition name="transitionLeft">
      <div v-show="show" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-show="show && isShowRight" class="wr"></div>
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
    <!-- 基本管理 -->
    <fhLeft
      @showRight="showRight"
      @getOid="getOid"
      @getIds="getIds"
      v-if="show && detiles1"
    />
    <fhRight v-if="show && showRights && detiles1"/>
    <!-- 负荷概括 -->
    <fhgkLeft v-if="show && detiles2 && navIndex == 0"/>
    <fhgkRight v-if="show && detiles2 && navIndex == 0"/>
    <!-- 大用户接入 -->
    <dyhLeft v-if="show && detiles2 && navIndex == 1"/>
    <dyhRight v-if="show && detiles2 && navIndex == 1"/>
    <!-- 负荷预测 -->
    <fhycLeft v-if="show && detiles2 && navIndex == 2"/>
    <!-- 预测查询 -->
    <yccxLeft v-if="show && detiles2 && navIndex == 3"/>
    <!-- 远景负荷 -->
    <yjfhLeft v-if="show && detiles2 && navIndex == 4"/>
  </div>
</template>

<script>
// 基本信息
import fhLeft from "./components/fhLeft.vue";
import fhRight from "./components/fhRight.vue";
import fhgkLeft from "./components/fhgkLeft.vue";
import fhgkRight from "./components/fhgkRight.vue";
import dyhLeft from "./components/dyhLeft.vue";
import dyhRight from "./components/dyhRight.vue";
import fhycLeft from "./components/fhycLeft.vue";
import yccxLeft from "./components/yccxLeft.vue";
import yjfhLeft from "./components/yjfhLeft.vue";
export default {
  name: "fuheyuce",
  components: {
    fhLeft,
    fhRight,
    fhgkLeft,
    fhgkRight,
    dyhLeft,
    dyhRight,
    fhycLeft,
    yccxLeft,
    yjfhLeft,
  },
  data() {
    return {
      show: false,
      showRights: false,
      ids: [],
      oids: 0,
      detiles1: true,
      detiles2: false,
      navList: ["负荷概括", "大用户接入", "负荷预测", "预测查询", "远景负荷"],
      navIndex: 0,
      showNavs: false,
      isShowRight: true,
    };
  },
  mounted() {
    let that = this;
    that.$bus.$on("initSubpage", () => {
      that.detiles1 = false;
      that.showNavs = true;
      that.navIndex = 0;
      that.detiles2 = true;
    });

    that.$bus.$on("returnMain", () => {
      that.detiles1 = true;
      that.showNavs = false;
      that.navIndex = 0;
      that.detiles2 = false;
    });
  },
  activated() {
    this.show = true; 
  },
  deactivated() {
    this.showRights = false;
    this.show = false;
    this.detiles1 = true;
    this.detiles2 = false;
    this.showNavs = false;
    this.isShowRight = true;
  },
  methods: {
    getOid(e) {
      this.oids = e;
    },
    getIds(e) {
      this.ids = e;
    },
    showRight(e) {
      this.showRights = e;
    },
    navClick(e) {
      this.navIndex = e;
      if(e == 2 || e == 4) {
        this.isShowRight = false;
      }else {
        this.isShowRight = true;
      }
    },
  },
};
</script>

<style scoped>
.fuheyuce {
  width: 100%;
  height: 100%;
}
</style>
<style scoped>
.navs {
  width: 706px;
  height: 40px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 21px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
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

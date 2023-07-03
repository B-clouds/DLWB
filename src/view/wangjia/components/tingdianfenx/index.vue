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
      <div v-show="show && detiles1" class="navs">
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
    <jLeft
      @showRight="showRight"
      @getOid="getOid"
      @getIds="getIds"
      v-if="show && detiles1"
    />
    <jRight v-if="show && showRights && detiles1"/>
    <newLieBiao v-if="show && detiles2" />
  </div>
</template>

<script>
// 基本信息
import jLeft from "./components/jLeft.vue";
import jRight from "./components/jRight.vue";
// 数据查询
import newLieBiao from "./components/newLieBiao.vue";
export default {
  name: "tingdianfenx",
  components: {
    jLeft,
    jRight,
    newLieBiao,
  },
  data() {
    return {
      show: false,
      navList: ["停电分析", "数据查询"],
      navIndex: 0,
      showRights: false,
      ids: [],
      oids: 0,
      detiles1: true,
      detiles2: false,
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
    this.showRights = false;
    this.show = false;
    this.detiles1 = true;
    this.detiles2 = false;
    this.navIndex = 0;
  },
  methods: {
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
        this.isShowNav = true;
      } else if (e == 1) {
        this.detiles1 = false;
        this.detiles2 = true;
        this.isShowNav = false;
      }
    },
    showRight(e) {
      this.showRights = e;
    },
  },
};
</script>

<style scoped>
.navs {
  width: 281px;
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

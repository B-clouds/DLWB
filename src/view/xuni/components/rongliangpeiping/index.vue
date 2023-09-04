<template>
  <div class="buidan">
    <!-- 子级导航 -->
    <transition name="transitionBottom">
      <div v-show="show && showNavs && !d2Item" class="navs">
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
    <!-- 初始页面 -->

    <jLeft
      @showRight="showRight"
      @showNav="showNav"
      @getOid="getOid"
      @getIds="getIds"
      v-if="show && !showNavs"
    />
    <jRight v-if="showRights && !showNavs" />
    <!-- 容量现状 -->
    <transition name="transitionLeft">
      <rlxzLeft @geshihua="geshihua" v-if="show && detiles1" />
    </transition>
    <transition name="transitionRight">
      <rlxzRight v-if="show && detiles1" />
    </transition>
    <!-- 配平分析 -->
    <transition name="transitionLeft">
      <ppfxLeft @geshihua="geshihua" v-if="show && detiles2" />
    </transition>
    <transition name="transitionRight">
      <ppfxRight v-if="show && detiles2" />
    </transition>
    <!-- 电源规划 -->
    <transition name="transitionLeft">
      <dyghLeft v-if="show && detiles3" />
    </transition>
    <!-- 电量平衡 -->
    <transition name="transitionLeft">
      <dlph v-if="show && detiles4" />
    </transition>
    <!-- 网架电站 -->
    <wjdz v-if="show && !showNavs" />
  </div>
</template>

<script>
import jLeft from "./components/jLeft.vue";
import jRight from "./components/jRight.vue";
import rlxzLeft from "./components/rlxzLeft.vue";
import rlxzRight from "./components/rlxzRight.vue";
import ppfxLeft from "./components/ppfxLeft.vue";
import ppfxRight from "./components/ppfxRight.vue";
import dyghLeft from "./components/dyghLeft.vue";
import dlph from "./components/dlph.vue";
import wjdz from "@/components/wjdz/index.vue";

export default {
  name: "zonghepinggu",
  components: {
    jLeft,
    jRight,
    rlxzLeft,
    rlxzRight,
    ppfxLeft,
    ppfxRight,
    dyghLeft,
    wjdz,
    dlph,
  },
  data() {
    return {
      baseData:{},
      show: false,
      showSC: false, //是否移入-杆塔布点-删除按钮
      showFH: false, //是否移入-杆塔布点-返回按钮
      tgId: null,
      detiles1: false,
      detiles2: false,
      d2Item: false,
      detiles3: false,
      detiles4: false,
      detiles5: false,
      detiles6: false,
      navList: ["容量现状", "配平分析", "电源规划", "电量平衡"],
      navIndex: 0,
      showRights: false,
      showRights2: false,
      jr_index: -1,
      ids: [],
      oids: 0,
      showNavs: false,
    };
  },
  mounted(){
    let that = this
    that.$bus.$on("areaId", (data) => {
      that.baseData=data
      setTimeout(()=>{
        that.$bus.$emit("sendId", data);
      },50)
    });
  },
  activated() {
    this.show = true;
  },
  deactivated() {
    this.showRights = false;
    this.show = false;
  },
  methods: {
    fanhuiCX() {
      this.d2Item = false;
    },
    geshihua() {
      this.showNavs = false;
      this.detiles1 = false;
      this.detiles2 = false;
    },
    showZDCXItem() {
      this.d2Item = true;
    },
    showNav() {
      this.showNavs = true;
      this.detiles1 = true;
    },
    getOid(e) {
      this.oids = e;
    },
    getIds(e) {
      this.ids = e;
    },

    navClick(e) {
      let that =this
      // setTimeout(()=>{
      //   that.$bus.$emit("sendId", this.baseData);
      // },50)

      this.navIndex = e;
      if (e == 0) {
        this.detiles1 = true;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = false;
      } else if (e == 1) {
        this.detiles2 = true;
        this.detiles1 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = false;
      } else if (e == 2) {
        this.detiles3 = true;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = false;
      } else if (e == 3) {
        this.detiles4 = true;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles5 = false;
        this.detiles6 = false;
      } else if (e == 4) {
        this.detiles5 = true;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles6 = false;
      } else if (e == 5) {
        this.detiles5 = false;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles6 = true;
      }
      setTimeout(()=>{
        try {
          that.$bus.$emit("sendId", this.baseData);
          // alert('发送成功')
          // console.log('444')
        }catch (e){
          console.log(e)
        }
      },50)
    },
    showRight(e) {
      this.showRights = e;
    },
    showRight2(e) {
      this.showRights2 = e;
    },
  },
};
</script>

<style scoped>
.navs {
  width: 557px;
  height: 40px;
  position: fixed;
  left: 680px;
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

<style scoped>
.jr_threeD {
  width: 80px;
  height: 104px;
  position: absolute;
  left: 415px;
  top: 319px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
}
.jr_threeD > .jr_blocks {
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("img/jrbg.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.jr_threeD > .jr_blocks > span {
  font-family: SourceHanSansCN-Regula;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.8);
}
.jr_blocks2 {
  background: url("img/jrbg2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.jr_blocks2 > span {
  color: #ffffff !important;
}
</style>

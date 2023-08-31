<template>
  <div class="buidan" v-if="show">
    <transition name="transitionBottom">
      <div v-show="show && !showItem" class="bottomss"></div>
    </transition>
    <!-- 列表页阴影 -->
    <transition name="transitionLeft">
      <div v-show="show && !showItem" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-show="show && !showItem" class="wr"></div>
    </transition>

    <!-- 返回按钮 -->
    <transition name="transitionRight">
      <div
        class="fh"
        v-show="show && showItem && showNavList"
        @click="fhClick"
      ></div>
    </transition>
    <!-- 信息缩放按钮 -->
    <transition name="transitionRight">
      <div
        class="xxsf"
        v-show="show && showItem && showNavList"
        :class="showXX ? 'xxsf2' : ''"
        @click="sfxxClick"
      ></div>
    </transition>
    <!-- 子级导航 -->
    <transition name="transitionBottom">
      <div v-show="show && showItem && showNavList" class="navs">
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
    <!-- ------------------------------------基本信息的阴影 ----------------------- -->
    <transition name="transitionBottom">
      <div v-if="show && showItem && detiles1 && showXX" class="wb"></div>
    </transition>
    <transition name="transitionLeft">
      <div v-if="show && showItem && detiles1 && showXX" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-if="show && showItem && detiles1 && showXX" class="wr"></div>
    </transition>
    <!-- ------------------------------------基本信息 ------------------------------ -->
    <transition name="transitionLeft">
      <wuli v-if="show && showItem && detiles1 && showXX && types == 0"></wuli>
      <xianluLeft v-if="show && showItem && detiles1 && showXX && types == 1" />
      <byqLeft v-if="show && showItem && detiles1 && showXX && types == 2" />
    </transition>
    <transition name="transitionRight">
      <kongjian
        v-if="show && showItem && detiles1 && showXX && types == 0"
      ></kongjian>
      <xianluRight
        v-if="show && showItem && detiles1 && showXX && types == 1"
      />
      <byqRight v-if="show && showItem && detiles1 && showXX && types == 2" />
    </transition>

    <!-- ------------------------------实景照片--------------------------------------- -->
    <transition name="transitionBottom">
      <div v-if="show && showItem && detiles6 && showXX" class="wb"></div>
    </transition>
    <transition name="transitionLeft">
      <div v-if="show && showItem && detiles6 && showXX" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-if="show && showItem && detiles6 && showXX" class="wr"></div>
    </transition>
    <transition name="transitionLeft">
      <sjLeft v-if="show && showItem && detiles6 && showXX"></sjLeft>
    </transition>
    <transition name="transitionRight">
      <sjRight v-if="show && showItem && detiles6 && showXX"></sjRight>
    </transition>
    <!-- --------------------------运行分析----------------------------- -->
    <!-- 底部阴影背景 -->
    <transition name="transitionBottom">
      <!-- <div v-if="show && showItem && detiles2" class="bbb"></div> -->
    </transition>
    <!-- 左侧导航 -->
    <!-- <transition name="transitionLeft">
      <yNav v-if="show && showItem && detiles2" />
    </transition> -->
    <transition name="transitionBottom">
      <!-- 小图模式 -->
      <yyfx
        @changeDXT="changeDXT"
        @goJiBen="goJiBen"
        v-show="show && showItem && detiles2 && showXX && showXt"
      />
      <!-- <yIndex v-if="show && showItem && detiles2" /> -->
    </transition>
    <!-- 大图模式 -->
    <transition name="transitionBottom">
      <yyfx2
        @changeDXT="changeDXT"
        @goJiBen="goJiBen"
        :types="types"
        v-show="show && showItem && detiles2 && showXX && showDt"
      />
    </transition>
    <!-- -----------------------负载分析----------------------------------- -->
    <!-- 小图模式 -->
    <transition name="transitionBottom">
      <fzfx
        @changeDXT2="changeDXT2"
        @goJiBen="goJiBen"
        v-show="show && showItem && detiles3 && showXX && showXt2"
      />
    </transition>
    <!-- 大图模式 -->
    <transition name="transitionBottom">
      <fzfx2
        @changeDXT2="changeDXT2"
        @goJiBen="goJiBen"
        :types="types"
        v-show="show && showItem && detiles3 && showXX && showDt2"
      />
    </transition>

    <!-- ---------------------------溯源分析---------------------------- -->
    <transition name="transitionLeft">
      <syIndex v-if="show && showItem && detiles4 && showXX" />
    </transition>
    <!-- ----------------------------停电分析------------------------------- -->
    <transition name="transitionLeft">
      <tdIndex v-if="show && showItem && detiles5 && showXX" />
    </transition>
  </div>
</template>

<script>
import dh from "./components/dh.vue";
import liebiao from "./components/liebiao.vue";
import kongjian from "./components/kongjian.vue";
import wuli from "./components/wuli.vue";
import sjLeft from "./components/sjLeft.vue";
import sjRight from "./components/sjRight.vue";
import yNav from "./components/y_nav.vue";
import yIndex from "./components/y_index.vue";
import yIndex2 from "./components/y_index2.vue";
import syIndex from "./components/syIndex.vue";
import tdIndex from "./components/tdIndex.vue";
import znIndex from "./components/znIndex.vue";
// 线路基本信息
import xianluLeft from "./components/xianlujibenLeft.vue";
import xianluRight from "./components/xianlujibenRight.vue";
// 变压器基本信息
import byqLeft from "./components/byqLeft.vue";
import byqRight from "./components/byqRight.vue";
// 运营分析小图模块
import yyfx from "./components/yyfx.vue";
// 运营分享大图模块
import yyfx2 from "./components/yyfx2.vue";
// 负载分析小图模块
import fzfx from "./components/fzfx.vue";
// 负载分析大图模块
import fzfx2 from "./components/fzfx2.vue";
export default {
  name: "ssfxItem",
  components: {
    dh,
    liebiao,
    kongjian,
    wuli,
    sjLeft,
    sjRight,
    yNav,
    yIndex,
    yIndex2,
    syIndex,
    tdIndex,
    znIndex,
    yyfx,
    yyfx2,
    fzfx,
    fzfx2,
    xianluLeft,
    xianluRight,
    byqLeft,
    byqRight,
  },
  data() {
    return {
      show: false,
      showItem: true,
      showSC: false, //是否移入-杆塔布点-删除按钮
      showFH: false, //是否移入-杆塔布点-返回按钮
      tgId: null,
      detiles1: true,
      detiles2: false,
      detiles3: false,
      detiles4: false,
      detiles5: false,
      detiles6: false,
      detiles7: false,
      showNavList: true,
      navList: [
        "基本信息",
        "运行分析",
        "负载分析",
        "溯源分析",
        "停电分析",
        "实景照片",
        "智能巡视",
      ],
      navIndex: 0,
      showXX: true,
      showDt: false,
      showXt: true,
      showDt2: false,
      showXt2: true,
      types: 0, //存放类型 0：电站 1：线路  2：变压器
    };
  },

  activated() {
    this.show = true;
    this.showNavList = true;
    this.types = 0;
    this.types = window.types;
    console.log(this.types, "--------------1");
  },
  deactivated() {
    this.show = false;
  },
  methods: {
    // 运营分析大小图切换
    changeDXT(e) {
      // e = 0  切换成大图  e = 1 切换成小图
      if (e == 0) {
        this.showXt = false;
        this.showDt = true;
      } else {
        this.showXt = true;
        this.showDt = false;
      }
    },
    // 负载分析大小图切换
    changeDXT2(e) {
      // e = 0  切换成大图  e = 1 切换成小图
      if (e == 0) {
        this.showXt2 = false;
        this.showDt2 = true;
      } else {
        this.showXt2 = true;
        this.showDt2 = false;
      }
    },
    sfxxClick() {
      this.showXX = !this.showXX;
    },
    goJiBen() {
      this.showNavList = true;
      this.detiles1 = true;
      this.detiles2 = false;
      this.detiles3 = false;
      this.detiles4 = false;
      this.detiles5 = false;
      this.detiles6 = false;
      this.detiles7 = false;
      this.navIndex = 0;
    },
    dianzhanJuJiao(e) {},
    navClick(e) {
      this.navIndex = e;
      if (e == 0) {
        this.detiles1 = true;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = false;
        this.detiles7 = false;
      } else if (e == 1) {
        this.detiles2 = true;
        this.detiles1 = false;
        this.detiles3 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = false;
        this.detiles7 = false;
        this.showNavList = false;
      } else if (e == 2) {
        this.detiles3 = true;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = false;
        this.detiles7 = false;
        this.showNavList = false;
      } else if (e == 3) {
        this.detiles4 = true;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles5 = false;
        this.detiles6 = false;
        this.detiles7 = false;
        let v = {
          type: "SelectHStationSource",
          selectType: "true",
          value: this.tgId,
        };
        let data = {
          functionName: "WireFrame",
          backFunctionName: "",
          functionParameters: [
            {
              key: "WireFrame",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else if (e == 4) {
        this.detiles4 = false;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles5 = true;
        this.detiles6 = false;
        this.detiles7 = false;
        let v = {
          type: "SelectHStationPowerCut",
          selectType: "true",
          value: this.tgId,
        };
        let data = {
          functionName: "WireFrame",
          backFunctionName: "",
          functionParameters: [
            {
              key: "WireFrame",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else if (e == 5) {
        this.detiles4 = false;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles5 = false;
        this.detiles6 = true;
        this.detiles7 = false;
      } else if (e == 6) {
        this.detiles4 = false;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles3 = false;
        this.detiles5 = false;
        this.detiles6 = false;
        this.detiles7 = true;
      }
    },
    isShowItem(e) {
      this.showItem = true;
      this.navClick(0);
      this.tgId = e;
    },
    fhYr() {
      this.showFH = true;
    },
    fhYc() {
      this.showFH = false;
    },
    fhClick() {
      let v;
      // this.showItem = false;
      if (window.ssflIndex == 0) {
        this.$router.push("/wj/dianzhan");
        v = {
          type: "SelectHStation",
          selectType: "false",
          value: {
            data: [
              {
                key: "fbzt",
                value: "已发布",
              },
            ],
          },
        };
        let data = {
          functionName: "WireFrame",
          backFunctionName: "",
          functionParameters: [
            {
              key: "WireFrame",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else if (window.ssflIndex == 1) {
        this.$router.push("/wj/xianlu");
        v = {
          type: "SelectWireFrameLine",
          selectType: "false",
          value: {
            data: [
              {
                key: "fbzt",
                value: "已发布",
              },
            ],
          },
        };
        let data = {
          functionName: "WireFrame",
          backFunctionName: "",
          functionParameters: [
            {
              key: "WireFrame",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else if (window.ssflIndex == 2) {
        this.$router.push("/wj/byq");
      } else if (window.ssflIndex == 3) {
        this.$router.push("/wj/ssgt");
      } else if (window.ssflIndex == 4) {
        this.$router.push("/wj/ww");
      }
    },
    scYr() {
      this.showSC = true;
    },
    scYc() {
      this.showSC = false;
    },
    scClick() {
      // 监听点击删除
      // let ids = [];
      // ids.push(this.tgId);
      // let data = {
      //   functionName: "SaveGame",
      //   backFunctionName: "deletes_2",
      //   functionParameters: [
      //     {
      //       key: "range",
      //       value: {
      //         range: { type: "Delet", target: "IntervalInfo", member: ids },
      //       },
      //     },
      //   ],
      // };
      // ue.interface.broadcast("PSAPI", JSON.stringify(data));
      // window.ue.interface.deletes_2 = this.deletes_2;
      this.showItem = false;
    },
    deletes_2() {
      this.showItem = false;
      let that = this;

      that.$bus.$emit("getSelect");
    },
    baoCun(e) {
      let ids = [
        {
          key: "Str_ValID",
          value: e,
        },
        {
          key: "PublishID",
          value: this.tgId,
        },
      ];
      let v = {
        range: {
          type: "Publish",
          target: "IntervalInfo",
          member: ids,
          SaveType: "Json",
        },
      };
      let data = {
        functionName: "SaveGame",
        backFunctionName: "wj_publishs2",
        functionParameters: [
          {
            key: "range",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.wj_publishs2 = this.wj_publishs2;
    },
    publish_2() {
      let that = this;
      that.$bus.$emit("getSelect2");
    },
  },
};
</script>

<style scoped>
.navs {
  width: 1060px;
  height: 40px;
  position: fixed;
  left: 483px;
  bottom: 21px;
  display: flex;
  justify-content: space-between;
  z-index: 99999999999;
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
  right: 323px;
  background: url("img/ibg.png") no-repeat !important;
  background-size: 100% 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99999;
}
.fanhui2 {
  background: url("img/ibga.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.fanhui > img {
  width: 17px;
  height: 21px;
}
.fh {
  width: 71px;
  height: 31px;
  position: absolute;
  top: 46px;
  right: 125px;
  background: url("img/fh.png") no-repeat !important;
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
</style>

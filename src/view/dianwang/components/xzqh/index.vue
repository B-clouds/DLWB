<template>
  <div class="buidan">
    <!-- 列表页阴影 -->
    <transition name="transitionLeft">
      <div v-show="show" class="wl"></div>
    </transition>
    <transition name="transitionRight">
      <div v-show="show" class="wr"></div>
    </transition>

    <!-- 基本管理 -->
    <jLeft
      @showRight="showRight"
      @getOid="getOid"
      @getIds="getIds"
      v-if="show"
    />
    <jRight v-if="showRights && jr_index !== 0" />
    <jRight2 v-if="showRights && jr_index == 0" />
    <!-- 3D图层 -->
    <div class="jr_threeD" v-show="show && showRights && !showNavs">
      <div
        class="jr_blocks"
        @click="jrCilck(0)"
        :class="{ jr_blocks2: jr_index == 0 }"
      >
        <span>画图工具</span>
      </div>
      <div class="jr_blocks" @click="jrCilck2()">
        <span>一键清空</span>
      </div>
      <div class="jr_blocks" @click="jrCilck3()">
        <span>保存</span>
      </div>
    </div>
  </div>
</template>

<script>
// 基本信息
import jLeft from "./components/jLeft.vue";
import jRight from "./components/jRight.vue";
import jRight2 from "./components/jRight2.vue";

export default {
  name: "wanggefenxi",
  components: {
    jLeft,
    jRight,
    jRight2,
  },
  data() {
    return {
      show: false,
      showRights: false,
      showRights2: false,
      jr_index: -1,
      ids: [],
      oids: 0,
    };
  },

  activated() {
    this.show = true;
  },
  deactivated() {
    this.showRights = false;
    this.show = false;
  },
  methods: {
    geshihua() {
      this.showNavs = false;
      this.detiles1 = false;
      this.detiles2 = false;
      this.detiles3 = false;
      this.detiles4 = false;
      this.detiles5 = false;
      this.detiles6 = false;
      this.detiles7 = false;

      this.detiles8 = false;
      this.detiles9 = false;
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
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = false;
        this.detiles7 = false;

        this.detiles8 = false;
        this.detiles9 = false;
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
      } else if (e == 3) {
        this.detiles3 = false;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles4 = true;
        this.detiles5 = false;
        this.detiles6 = false;
        this.detiles7 = false;
        this.detiles8 = false;
        this.detiles9 = false;
      } else if (e == 4) {
        this.detiles3 = false;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles4 = false;
        this.detiles5 = true;
        this.detiles6 = false;
        this.detiles7 = false;
        this.detiles8 = false;
        this.detiles9 = false;
      } else if (e == 5) {
        this.detiles3 = false;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = true;
        this.detiles7 = false;
        this.detiles8 = false;
        this.detiles9 = false;
      } else if (e == 6) {
        this.detiles3 = false;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = false;
        this.detiles7 = true;
        this.detiles8 = false;
        this.detiles9 = false;
      } else if (e == 7) {
        this.detiles3 = false;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = false;
        this.detiles7 = false;
        this.detiles8 = true;
        this.detiles9 = false;
      } else if (e == 8) {
        this.detiles3 = false;
        this.detiles1 = false;
        this.detiles2 = false;
        this.detiles4 = false;
        this.detiles5 = false;
        this.detiles6 = false;
        this.detiles7 = false;
        this.detiles8 = false;
        this.detiles9 = true;
      }
    },
    showRight(e) {
      this.showRights = e;
    },

    jrCilck(e) {
      let v = {};
      if (this.jr_index == e) {
        this.jr_index = -1;
        v = { Type: "DrawPolygon", Value: "false" };
      } else {
        this.jr_index = e;
        v = { Type: "DrawPolygon", Value: "true" };
      }
      let data = {
        functionName: "GridNavigationTree",
        functionParameters: [
          {
            key: "GridNavigationTree",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    jrCilck2() {
      this.jr_index = -1;
      let v2 = { Type: "DrawPolygon", Value: "false" };
      let data2 = {
        functionName: "GridNavigationTree",
        functionParameters: [
          {
            key: "GridNavigationTree",
            value: JSON.stringify(v2),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));

      let v = { Type: "DeletePolygonDate", oid: this.oids };
      let data = {
        functionName: "GridNavigationTree",
        functionParameters: [
          {
            key: "GridNavigationTree",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));

      this.$bus.$emit("clearList");
    },
    jrCilck3() {
      this.jr_index = -1;
      let v2 = { Type: "DrawPolygon", Value: "false" };
      let data2 = {
        functionName: "GridNavigationTree",
        functionParameters: [
          {
            key: "GridNavigationTree",
            value: JSON.stringify(v2),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data2));

      let v = { Type: "SavePolygonDate", Ids: this.ids };
      let data = {
        functionName: "GridNavigationTree",
        backFunctionName: "backVertices",

        functionParameters: [
          {
            key: "GridNavigationTree",
            value: JSON.stringify(v),
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
      window.ue.interface.backVertices = this.backVertices;
    },
    backVertices(e) {
      let data = JSON.parse(e).value;
      this.$bus.$emit("rightCx", data);
    },
  },
};
</script>

<style scoped>
.navs {
  width: 1070px;
  height: 40px;
  position: fixed;
  left: 430px;
  bottom: 21px;
  display: flex;
  justify-content: space-between;
}
.navs > .blocks {
  width: 116px;
  height: 39px;
  background: url("img/nav.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.navs > .blocks > span {
  font-size: 18px !important;
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

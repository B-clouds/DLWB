<template>
  <div class="daohang">
    <!-- 三维场景 -->
    <div
      class="sanweichangjing"
      @click="sIndexClick(0)"
      :class="s_index == 0 ? 'sanweichangjing2' : ''"
    ></div>
    <!-- 数据场景 -->
    <div
      class="shujuchangjing"
      @click="sIndexClick(1)"
      :class="s_index == 1 ? 'shujuchangjing2' : ''"
    ></div>
    <!-- 公共按钮 -->
    <!-- 区划 -->
    <div
      class="quhua"
      @click="quhuaClick"
      :class="currentIndex == 0 ? 'quhua2' : ''"
    ></div>

    <!-- 路网 -->
    <div
      class="luwang"
      @click="luwangClick"
      :class="currentIndex == 1 ? 'luwang2' : ''"
    ></div>
    <!-- 区划一级页面 -->
    <div v-show="currentIndex == 0">
      <quhua @showXA="isShowXaClick" v-show="!isShowXA" />
    </div>
    <xaDetils v-show="isShowXA" />

    <!-- 路网切换按钮 -->
    <div class="luwangBtn" v-show="currentIndex == 1">
      <div class="blockss" @click="navClick(0)">
        <img v-show="navIndex != 0" src="./img/t1.png" />
        <img v-show="navIndex == 0" src="./img/t1a.png" />
      </div>
      <div class="blockss" @click="navClick(1)">
        <img v-show="navIndex != 1" src="./img/g1.png" />
        <img v-show="navIndex == 1" src="./img/g1a.png" />
      </div>
      <!-- 铁路详情 -->
      <tielu v-show="navIndex == 0" />
      <!-- 公路详情 -->
      <gonglu v-show="navIndex == 1" />
    </div>
    <!-- 底图选择错误，弹框 -->
    <div class="zhezhao" v-show="isShowTK">
      <div class="z_delete">
        <div class="z_d_block">
          <img class="imgs" src="./img/jj2.png" />
          <span>请先选择行政区划下的某一市政单位图标。</span>
        </div>
        <div class="z_btn2">
          <div class="z_blocks" @click="selectQH">
            <span>确认</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import quhua from "./components/quhua.vue";
import xaDetils from "./components/xaDetils.vue";
import tielu from "./components/tielu.vue";
import gonglu from "./components/gonglu.vue";
export default {
  name: "daohang",
  components: {
    quhua,
    xaDetils,
    tielu,
    gonglu,
  },
  data() {
    return {
      currentIndex: 0,
      isShowXA: false,
      navIndex: 0,
      isShowTK: false,
      s_index: 0,
    };
  },
  deactivated() {
    this.currentIndex = 0;
    this.isShowXA = false;
  },
  methods: {
    sIndexClick(e) {
      this.s_index = e;
    },
    quhuaClick() {
      this.currentIndex = 0;
      this.isShowXA = false;
      this.navIndex = 0;
      let data = {
        functionName: "NavigationPage",
        functionParameters: [
          {
            key: "anniuXZ",
            value: "XZQH",
          },
        ],
      };
      ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    luwangClick() {
      if (this.isShowXA == false) {
        if (this.currentIndex != 1) {
          this.isShowTK = true;
        } else {
          let data = {
            functionName: "NavigationPage",
            functionParameters: [
              {
                key: "anniuXZ",
                value: "LWXX",
              },
            ],
          };
          ue.interface.broadcast("PSAPI", JSON.stringify(data));
        }
      } else {
        this.currentIndex = 1;
        this.isShowXA = false;
        let data2 = {
          functionName: "NavigationPage",
          functionParameters: [
            {
              key: "LWXX",
              value: "TL",
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      }
    },
    isShowXaClick() {
      this.isShowXA = true;
      this.currentIndex = -1;
    },
    navClick(e) {
      this.navIndex = e;
      if (e == 0) {
        let data2 = {
          functionName: "NavigationPage",
          functionParameters: [
            {
              key: "LWXX",
              value: "TL",
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      } else {
        let data2 = {
          functionName: "NavigationPage",
          functionParameters: [
            {
              key: "LWXX",
              value: "GL",
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data2));
      }
    },
    selectQH() {
      this.isShowTK = false;
    },
  },
};
</script>

<style scoped>
.daohang {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
.quhua {
  width: 129px;
  height: 42px;
  position: fixed;
  top: 66px;
  right: 174px;
  background: url("img/quhua.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer !important;
}
.quhua:hover {
  background: url("img/quhua2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.quhua2 {
  background: url("img/quhua2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.luwang {
  width: 129px;
  height: 42px;
  position: fixed;
  top: 66px;
  right: 20px;
  background: url("img/luwang.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer !important;
}
.luwang:hover {
  background: url("img/luwang2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.luwang2 {
  background: url("img/luwang2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.luwangBtn {
  width: 114px;
  height: 116px;
  position: fixed;
  left: 14px;
  bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.luwangBtn > .blockss {
  width: 100%;
  height: 50px;
  cursor: pointer;
}
.luwangBtn > .blockss > img {
  width: 100%;
  height: 100%;
}
</style>
<style scoped>
.zhezhao {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999999 !important;
  background: rgba(1, 11, 23, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.z_delete {
  width: 348px;
  height: 133px;
  background: url("img/de.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.z_d_block {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
}
.z_d_block > img {
  width: 22px;
  height: 20px;
  margin-left: 19px;
  margin-right: 4px;
}
.z_d_block > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
}
.z_tankuang {
  width: 348px;
  height: 174px;
  background: url("img/tk.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.z_tankuang2 {
  height: 218px !important;
  background: url("img/tk2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_tankuang > .z_cha {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 24px;
  right: 10px;
  background: url("img/cha.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
}
.z_tankuang > .z_title {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 18px;
}
.z_tankuang > .z_title > span {
  font-family: YouSheBiaoTiHei;
  font-size: 26px;
  font-weight: normal;
  letter-spacing: 4px;
  color: #e8efff;
  margin-left: 30px;
}
.z_tankuang > .z_blockss {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
}
.z_tankuang > .z_blockss > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  color: #ffe856;
  margin-left: 26px;
}
.z_tankuang > .z_input {
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.z_tankuang > .z_input > .lefts {
  width: 55px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 26px;
  margin-right: 13px;
}
.z_tankuang > .z_input > .lefts > span {
  font-family: AlibabaPuHuiTi_2_55_Regular;
  font-size: 13px;
  font-weight: normal;
  color: #ffffff;
}
.z_tankuang > .z_input > .rights {
  width: 216px;
  height: 32px;
  background: url("img/inputs.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn {
  width: 174px;
  height: 33px;
  position: absolute;
  right: 17px;
  bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.z_btn > .z_blocks {
  width: 81px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url("img/tbn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn > .z_blocks > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}

.z_btn2 {
  width: 174px;
  height: 33px;
  position: absolute;
  right: 17px;
  bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.z_btn2 > .z_blocks {
  width: 81px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: url("img/tbn.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.z_btn2 > .z_blocks > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #e2e2e2;
}
</style>
<style scoped>
.sanweichangjing {
  width: 230px;
  height: 51px;
  position: absolute;
  left: 21px;
  top: 63px;
  background: url("img/s1.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.sanweichangjing2 {
  background: url("img/s2.png") no-repeat !important;
  background-size: 100% 100% !important;
}

.shujuchangjing {
  width: 230px;
  height: 51px;
  position: absolute;
  left: 21px;
  top: 135px;
  background: url("img/sj1.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.shujuchangjing2 {
  background: url("img/sj2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>

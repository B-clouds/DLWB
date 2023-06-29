<template>
  <div class="mx">
    <!-- 背景 -->
    <div class="t_ty"></div>
    <transition name="transitionLeft">
      <div class="t_ty2" v-if="show"></div>
    </transition>
    <transition name="transitionRight">
      <div class="t_ty3" v-if="show && showRights"></div>
    </transition>

    <transition name="transitionLeft">
      <mxLeft
        @showKSH="showKSH"
        @chongzhi="chongzhi"
        @showRight="showRight"
        v-if="show"
      ></mxLeft>
    </transition>
    <transition name="transitionRight">
      <mxRight v-if="show && showRights"></mxRight>
    </transition>
    <transition name="transitionRight2">
      <!-- v-show="showTK" -->
      <div class="r_Btn" v-show="showKSHs">
        <div
          class="titles"
          @click="indexClick(0)"
          :class="currentIndex == 0 ? 'titles2' : ''"
        >
          <span>外观层</span>
        </div>
        <div
          class="titles"
          @click="indexClick(1)"
          :class="currentIndex == 1 ? 'titles2' : ''"
        >
          <span>电气层</span>
        </div>
        <div class="titles" :class="currentIndex == 2 ? 'titles2' : ''">
          <span>暖通层</span>
        </div>
        <div class="titles" :class="currentIndex == 3 ? 'titles2' : ''">
          <span>消防层</span>
        </div>
        <div class="titles" :class="currentIndex == 4 ? 'titles2' : ''">
          <span>照明层</span>
        </div>
        <div class="titles" :class="currentIndex == 5 ? 'titles2' : ''">
          <span>排气层</span>
        </div>
      </div>
    </transition>
    <!-- <div
      class="bg"
      v-show="showKSHs"
      @click="iconClick"
      @mouseenter="yiRu"
      @mouseleave="yiChu"
    >
      <img v-show="!showIcon" src="./img/img1.png" />
      <img v-show="showIcon" src="./img/img2.png" />
    </div> -->
  </div>
</template>

<script>
import mxLeft from "./components/mxLeft.vue";
import mxRight from "./components/mxRight.vue";
export default {
  name: "moxing",
  components: {
    mxLeft,
    mxRight,
  },
  data() {
    return {
      show: false,
      showRights: false,
      showIcon: false,
      showTK: false,
      showKSHs: false,
      currentIndex: 0,
    };
  },
  activated() {
    this.show = true;
  },
  deactivated() {
    this.show = false;
    this.showRights = false;
    this.showKSHs = false;
    this.currentIndex = 0;
  },
  methods: {
    indexClick(e) {
      this.currentIndex = e;
      if (e == 0) {
        let v = { ChooseType: "SwitchWG", value: "true" };
        let data = {
          functionName: "Sundry",
          backFunctionName: "",
          functionParameters: [
            {
              key: "Sundry",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else if (e == 1) {
        let v = { ChooseType: "SwitchDQ", value: "true" };
        let data = {
          functionName: "Sundry",
          backFunctionName: "",
          functionParameters: [
            {
              key: "Sundry",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      }
    },
    // indexClick(e) {
    //   if (this.currentIndex == e) {
    //     this.currentIndex = -1;
    //     if (e == 0) {
    //       let v = { ChooseType: "SwitchWG", value: "false" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     } else if (e == 1) {
    //       let v = { ChooseType: "SwitchDQ", value: "false" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     } else if (e == 2) {
    //       let v = { ChooseType: "SwitchTN", value: "false" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     } else if (e == 3) {
    //       let v = { ChooseType: "SwitchXF", value: "false" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     } else if (e == 4) {
    //       let v = { ChooseType: "SwitchZM", value: "false" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     } else if (e == 5) {
    //       let v = { ChooseType: "SwitchPQ", value: "false" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     }
    //   } else {
    //     this.currentIndex = e;
    //     if (e == 0) {
    //       let v = { ChooseType: "SwitchWG", value: "true" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     } else if (e == 1) {
    //       let v = { ChooseType: "SwitchDQ", value: "true" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     } else if (e == 2) {
    //       let v = { ChooseType: "SwitchTN", value: "true" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     } else if (e == 3) {
    //       let v = { ChooseType: "SwitchXF", value: "true" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     } else if (e == 4) {
    //       let v = { ChooseType: "SwitchZM", value: "true" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     } else if (e == 5) {
    //       let v = { ChooseType: "SwitchPQ", value: "true" };
    //       let data = {
    //         functionName: "Sundry",
    //         backFunctionName: "",
    //         functionParameters: [
    //           {
    //             key: "Sundry",
    //             value: JSON.stringify(v),
    //           },
    //         ],
    //       };
    //       ue.interface.broadcast("PSAPI", JSON.stringify(data));
    //     }
    //   }
    // },
    showKSH(e) {
      this.showKSHs = e;
    },
    chongzhi() {
      this.currentIndex = 0;
    },
    showRight(e) {
      this.showRights = e;
    },
    iconClick() {
      if (this.showIcon) {
        this.showIcon = false;
        let v = {
          ChooseType: "SwitchModelTransparency",
          value: "false",
        };
        let data = {
          functionName: "Sundry",
          backFunctionName: "",
          functionParameters: [
            {
              key: "Sundry",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      } else {
        this.showIcon = true;
        let v = {
          ChooseType: "SwitchModelTransparency",
          value: "true",
        };
        let data = {
          functionName: "Sundry",
          backFunctionName: "",
          functionParameters: [
            {
              key: "Sundry",
              value: JSON.stringify(v),
            },
          ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data));
      }
    },
    yiRu() {
      this.showTK = true;
    },
    yiChu() {
      this.showTK = false;
    },
  },
};
</script>

<style scoped>
.mx {
  width: 100%;
  height: 100%;
  /* position: absolute;
  z-index: 9; */
}
.titles {
  width: 100%;
  height: 28px;
  background: url("img/btn.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.titles > span {
  font-family: SourceHanSansSC-Regular;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.8);
}
.titles2 {
  background: url("img/btns.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.titles2 > span {
  color: rgba(255, 255, 255, 1);
}
.r_Btn {
  width: 72px;
  height: 218px;
  position: absolute;
  right: 520px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.bg {
  width: 35px;
  height: 35px;
  position: fixed;
  right: 548px;
  bottom: 75px;
  background: url("img/bg.png") no-repeat !important;
  background-size: 100% 100% !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg > img {
  width: 18px;
  height: 20px;
}
.t_ty {
  width: 100%;
  height: 66px;
  position: absolute;
  left: 0;
  top: 0;
  background: url("img/y1.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.t_ty2 {
  width: 403px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("img/y2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
.t_ty3 {
  width: 403px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background: url("img/y2.png") no-repeat !important;
  background-size: 100% 100% !important;
}
</style>

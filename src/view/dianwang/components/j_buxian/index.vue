<template>
    <div class="buidan" v-if="show">
        <!-- <transition name="transitionBottom">
      <div v-show="show && !showItem" class="bottomss"></div>
    </transition> -->
        <!-- <transition name="transitionBottom">
      <liebiao @isShowItem="isShowItem" v-show="show && !showItem"></liebiao>
    </transition> -->
        <transition name="transitionLeft">
            <newLieBiao
                @isShowItem="isShowItem"
                v-show="show && !showItem"
            ></newLieBiao>
        </transition>
        <!-- ----------------------杆塔布点 物理信息、空间信息部分 阴影 --------------------- -->
        <transition name="transitionBottom">
            <div v-show="show && showItem" class="wb"></div>
        </transition>
        <transition name="transitionLeft">
            <div v-show="show && showItem && showXX2" class="wl"></div>
        </transition>
        <transition name="transitionRight">
            <div v-show="show && showItem && showXX2" class="wr"></div>
        </transition>
        <!--移动旋转按钮-->
        <transition name="transitionRight">
            <div
                v-show="show && showItem"
                :class="showSC === true ? 'shanchu2' : ''"
                class="shanchu"
                @click="scClick"
            ></div>
        </transition>
        <!--返回按钮-->
        <transition name="transitionRight">
            <div
                class="fh_mr"
                v-show="show && showItem"
                @click="fhMrClick"
            ></div>
        </transition>
        <!--信息缩放按钮-->
        <transition name="transitionRight">
            <div
                class="xxsf"
                v-show="show && showItem"
                :class="showXX2 ? 'xxsf2' : ''"
                @click="sfxxClick"
            ></div>
        </transition>
        <!-- 层级选择功能 -->
        <!-- <transition name="transitionRight">
      <div class="ceng" v-if="show && showItem">
        <div
          class="cengItem"
          @click="cengClick(0)"
          :class="currentIndex == 0 ? 'cengItem2' : ''"
        >
          <span>外观层</span>
        </div>
        <div
          class="cengItem"
          @click="cengClick(1)"
          :class="currentIndex == 1 ? 'cengItem2' : ''"
        >
          <span>电气层</span>
        </div>
        <div
          class="cengItem"
          @click="cengClick(2)"
          :class="currentIndex == 2 ? 'cengItem2' : ''"
        >
          <span>暖通层</span>
        </div>
        <div
          class="cengItem"
          @click="cengClick(3)"
          :class="currentIndex == 3 ? 'cengItem2' : ''"
        >
          <span>消防层</span>
        </div>
        <div
          class="cengItem"
          @click="cengClick(4)"
          :class="currentIndex == 4 ? 'cengItem2' : ''"
        >
          <span>照明层</span>
        </div>
        <div
          class="cengItem"
          @click="cengClick(5)"
          :class="currentIndex == 5 ? 'cengItem2' : ''"
        >
          <span>排气层</span>
        </div>
      </div>
    </transition> -->
        <!-- 杆塔布点详情页面物理 -->
        <transition name="transitionLeft">
            <wuli v-show="show && showItem && showXX2"></wuli>
        </transition>
        <transition name="transitionRight">
            <kongjian v-show="show && showItem && showXX2"></kongjian>
        </transition>
    </div>
</template>

<script>
import wuli from "./components/wuli.vue";
import newLieBiao from "./components/newLieBiao.vue";
import kongjian from "./components/kongjian.vue";
import bxRight from "./components/bxRight.vue";
export default {
    name: "j_buxian",
    components: {
        wuli,
        kongjian,
        newLieBiao,
        bxRight,
    },
    data() {
        return {
            show: false,
            showItem: false,
            showSC: false, //是否移入-杆塔布点-删除按钮
            showFH: false, //是否移入-杆塔布点-返回按钮
            tgId: null,
            showXX2: true,
            currentIndex: 0, //层级选择
        };
    },

    activated() {
        this.show = true;
    },
    deactivated() {
        this.show = false;
        this.showItem = false;
    },
    methods: {
        isShowItem(e) {
            this.showItem = true;
            let v2 = { ChooseType: "LineLinkEditer", value: "true" };
            let datas = {
                functionName: "Sundry",
                functionParameters: [
                    {
                        key: "Sundry",
                        value: JSON.stringify(v2), //切换类型
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(datas));
            this.tgId = e;
        },
        fhYr() {
            this.showFH = true;
        },
        fhYc() {
            this.showFH = false;
        },
        fhClick() {
            this.showItem = false;
            let v = {
                FocusTarget: {
                    target: "Line",
                    ID: this.tgId,
                    FocusType: false,
                    IDType: "Line",
                },
            };
            let data = {
                functionName: "FocusTower",
                backFunctionName: "",
                functionParameters: [
                    {
                        key: "FocusTarget",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        scYr() {
            this.showSC = true;
        },
        scYc() {
            this.showSC = false;
        },
        scClick() {
            this.showSC = !this.showSC;

            // 监听点击删除
            let ids = [];
            ids.push(this.tgId);
            let v = { ChooseType: "SwitchingMode", value: this.showSC };

            let data = {
                functionName: "Sundry",
                backFunctionName: "BackSundry",
                functionParameters: [
                    {
                        key: "Sundry",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },

        sfxxClick() {
            this.showXX2 = !this.showXX2;
        },
        fhMrClick() {
            this.showItem = false;
            let v = {
                FocusTarget: {
                    target: "HStation",
                    ID: this.tgId,
                    FocusType: false,
                    IDType: "HStation",
                },
            };
            let data = {
                functionName: "FocusTower",
                backFunctionName: "",
                functionParameters: [
                    {
                        key: "FocusTarget",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        // 层级选择
        cengClick(e) {
            if (this.currentIndex == e) {
                this.currentIndex = -1;
            } else {
                this.currentIndex = e;
            }
        },
    },
};
</script>

<style scoped>
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
.shanchu {
    width: 100px;
    height: 44px;
    position: fixed;
    bottom: 79px;
    left: 403px;
    background: url("img/rotation.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.shanchu2 {
    background: url("img/move.png") no-repeat !important;
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
    bottom: 58.58px;
    right: 463px;
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
.ceng {
    width: 159px;
    height: 124px;
    position: absolute;
    right: 414px;
    bottom: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}
.cengItem {
    width: 72px;
    height: 28px;
    background: url("img/bgg1.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cengItem > span {
    font-family: Source Han Sans SC;
    font-size: 14px;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.8);
}
.cengItem2 {
    background: url("img/bgg2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.cengItem2 > span {
    color: rgba(255, 255, 255, 1);
}
</style>

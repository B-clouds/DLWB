<template>
    <div class="buidan" v-if="show">
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
        <!-- 杆塔布点详情页面的返回按钮 -->
        <!-- <transition name="transitionRight">
      <div
        v-show="show && showItem"
        :class="showFH ? 'fanhui2' : ''"
        class="fanhui"
        @mouseenter="fhYr"
        @mouseleave="fhYc"
        @click="fhClick"
      >
        <img v-show="!showFH" src="./img/fh.png" />
        <img v-show="showFH" src="./img/fh2.png" />
      </div>
    </transition> -->
        <!-- 详情页面 返回列表页面 -->
        <transition name="transitionRight">
            <div
                class="fh_mr"
                v-show="show && showItem"
                @click="fhMrClick"
            ></div>
        </transition>

        <!-- 信息缩放按钮 -->
        <transition name="transitionRight">
            <div
                class="xxsf"
                v-show="show && showItem"
                :class="showXX2 ? 'xxsf2' : ''"
                @click="sfxxClick"
            ></div>
        </transition>
        <!-- 杆塔布点详情页面物理 -->
        <transition name="transitionLeft">
            <wuli v-show="show && showItem && showXX2"></wuli>
        </transition>
        <!-- 杆塔布点详情页面空间 -->
        <transition name="transitionRight">
            <kongjian
                @baoCun="baoCun"
                v-if="show && showItem && showXX2"
            ></kongjian>
        </transition>
    </div>
</template>

<script>
import newLieBiao from "./components/newLieBiao.vue";
import kongjian from "./components/kongjian.vue";
import wuli from "./components/wuli.vue";
export default {
    name: "z_jiange",
    components: {
        newLieBiao,
        kongjian,
        wuli,
    },
    data() {
        return {
            show: false,
            showItem: false,
            showSC: false, //是否移入-杆塔布点-删除按钮
            showFH: false, //是否移入-杆塔布点-返回按钮
            tgId: null,
            currentIndex: 0,
            showXX2: true,
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
        // 层级选择
        cengClick(e) {
            if (this.currentIndex == e) {
                this.currentIndex = -1;
            } else {
                this.currentIndex = e;
            }
        },

        sfxxClick() {
            this.showXX2 = !this.showXX2;
        },
        isShowItem(e) {
            this.showItem = true;
            this.tgId = e;
        },
        fhYr() {
            this.showFH = true;
        },
        fhYc() {
            this.showFH = false;
        },
        fhMrClick() {
            this.showItem = false;
            this.showSC = true;
            let v = {
                FocusTarget: {
                    target: "HSInterval",
                    ID: this.tgId,
                    FocusType: false,
                    IDType: "HSInterval",
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
                    target: "HSInterval",
                    member: ids,
                    SaveType: "Json",
                },
            };
            let data = {
                functionName: "SaveGame",
                backFunctionName: "zj_publishs",
                functionParameters: [
                    {
                        key: "range",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.zj_publishs = this.zj_publishs;
        },
        zj_publishs() {
            let that = this;
            that.$bus.$emit("getSelect");
        },
    },
};
</script>

<style scoped>
.buidan {
    width: 100%;
    height: 100%;
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
.s_show1 {
    width: 18px;
    height: 142px;
    background: url("img/shou1.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: absolute;
    top: 493px;
    left: 0px;
}
.s_show2 {
    width: 18px;
    height: 142px;
    background: url("img/shou2.png") no-repeat !important;
    background-size: 100% 100% !important;
    position: absolute;
    top: 493px;
    right: 0px;
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
.jjBtn {
    width: 260px;
    height: 34px;
    position: absolute;
    left: 830px;
    bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.jjBtnItem {
    width: 119px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("img/g1.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.jjBtnItem > span {
    font-size: 18px;
    background-image: -webkit-linear-gradient(
        bottom,
        #569eff,
        #ffffff
    ) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
}
.jjBtnItem2 {
    background: url("img/g2.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.jjBtnItem2 > span {
    font-size: 18px;
    font-weight: bold;
    background-image: -webkit-linear-gradient(
        bottom,
        #6bedff,
        #ffffff
    ) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
}
</style>

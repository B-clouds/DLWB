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
        <transition name="transitionLeft">
            <div
                @click="changeKG"
                v-show="show && showItem"
                class="kgBtn"
                :class="showkaiguan ? '' : 'kgBtn2'"
            ></div>
        </transition>
        <!-- 旋转、移动切换按钮 -->
        <transition name="transitionLeft">
            <div
                v-show="show && showItem && navIndex == 0 && showkaiguan"
                :class="showSC == true ? 'shanchu2' : ''"
                class="shanchu"
                @click="scClick"
            ></div>
        </transition>
        <!-- 详情页面 返回列表页面 -->
        <transition name="transitionRight">
            <div
                class="fh_mr"
                v-show="show && showItem && !showLieBiao"
                @click="fhMrClick"
            ></div>
        </transition>

        <!-- 信息缩放按钮 -->
        <transition name="transitionRight">
            <div
                class="xxsf"
                v-show="show && showItem && !showLieBiao"
                :class="showXX2 ? 'xxsf2' : ''"
                @click="sfxxClick"
            ></div>
        </transition>
        <!-- 站房选址详情页面物理 -->
        <transition name="transitionLeft">
            <wuli
                v-show="
                    show && showItem && !showLieBiao && showXX2 && navIndex == 0
                "
            ></wuli>
        </transition>
        <!-- 站房选址详情页面空间 -->
        <transition name="transitionRight">
            <kongjian
                @baoCun="baoCun"
                @lieBiao="lieBiao"
                v-if="
                    show && showItem && !showLieBiao && showXX2 && navIndex == 0
                "
            ></kongjian>
        </transition>
        <!-- 站房选址详情页面间隔维护  真实模型左侧 -->
        <transition name="transitionLeft">
            <realLeft
                v-if="
                    show && showItem && !showLieBiao && showXX2 && navIndex == 1
                "
            ></realLeft>
        </transition>
        <!-- 站房选址详情页面间隔维护  真实模型右侧 -->
        <transition name="transitionRight">
            <realRight
                v-if="
                    show && showItem && !showLieBiao && showXX2 && navIndex == 1
                "
            ></realRight>
        </transition>
        <!-- 层级选择功能 -->
        <transition name="transitionRight">
            <div class="ceng" v-if="show && showItem && !showLieBiao">
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
        </transition>
        <!-- 切换按钮 -->
        <transition name="transitionBottom">
            <div
                class="jjBtn"
                v-if="show && showItem && !showLieBiao && showXX2"
            >
                <div
                    class="jjBtnItem"
                    @click="navClick(0)"
                    :class="navIndex == 0 ? 'jjBtnItem2' : ''"
                >
                    <span>基本信息</span>
                </div>
                <div
                    class="jjBtnItem"
                    @click="navClick(1)"
                    :class="navIndex == 1 ? 'jjBtnItem2' : ''"
                >
                    <span>间隔维护</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import liebiao from "./components/liebiao.vue";
import newLieBiao from "./components/newLieBiao.vue";
import kongjian from "./components/kongjian.vue";
import wuli from "./components/wuli.vue";
import realLeft from "./components/realLeft.vue";
import realRight from "./components/realRight.vue";
export default {
    name: "z_xuanzhi",
    components: {
        liebiao,
        kongjian,
        wuli,
        newLieBiao,
        realLeft,
        realRight,
    },
    data() {
        return {
            show: false,
            showItem: false,
            showSC: true, //是否移入-杆塔布点-删除按钮
            showFH: false, //是否移入-杆塔布点-返回按钮
            tgId: null,
            showLieBiao: false,
            showXX2: true,
            currentIndex: 0, //层级选择

            navIndex: 0, // 0 : 基本信息  1 : 间隔维护
            showkaiguan: true,
        };
    },

    activated() {
        this.show = true;
        this.showkaiguan = true;
        // let v = { ChooseType: "FocusModel", value: "true" };
        // let data = {
        //   functionName: "Sundry",
        //   functionParameters: [
        //     {
        //       key: "Sundry",
        //       value: JSON.stringify(v), //切换类型
        //     },
        //   ],
        // };
        // ue.interface.broadcast("PSAPI", JSON.stringify(data));
    },
    deactivated() {
        this.show = false;
        this.showItem = false;
    },
    methods: {
        changeKG() {
            if (this.showkaiguan) {
                this.showkaiguan = false;
                let v = { ChooseType: "FocusModel", value: "false" };
                let data = {
                    functionName: "Sundry",
                    functionParameters: [
                        {
                            key: "Sundry",
                            value: JSON.stringify(v), //切换类型
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            } else {
                this.showkaiguan = true;
                let v = { ChooseType: "FocusModel", value: "true" };
                let data = {
                    functionName: "Sundry",
                    functionParameters: [
                        {
                            key: "Sundry",
                            value: JSON.stringify(v), //切换类型
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            }
        },
        navClick(e) {
            this.navIndex = e;
            if (e == 1) {
                let v2 = { ChooseType: "WG", value: true };

                let data2 = {
                    functionName: "ChooseHStationHierarchy",
                    functionParameters: [
                        {
                            key: "ChooseStationHierarchy",
                            value: JSON.stringify(v2),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data2));
            }
        },
        // 层级选择
        cengClick(e) {
            if (this.currentIndex == e) {
                this.currentIndex = -1;
                let choose;
                if (e == 0) {
                    choose = "WG";
                } else if (e == 1) {
                    choose = "DQ";
                } else if (e == 2) {
                    choose = "NT";
                } else if (e == 3) {
                    choose = "XF";
                } else if (e == 4) {
                    choose = "ZM";
                } else if (e == 5) {
                    choose = "PQ";
                }

                let v2 = { ChooseType: choose, value: false };
                let data2 = {
                    functionName: "ChooseHStationHierarchy",
                    functionParameters: [
                        {
                            key: "ChooseHStationHierarchy",
                            value: JSON.stringify(v2),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data2));
            } else {
                this.currentIndex = e;
                let choose;
                if (e == 0) {
                    choose = "WG";
                } else if (e == 1) {
                    choose = "DQ";
                } else if (e == 2) {
                    choose = "NT";
                } else if (e == 3) {
                    choose = "XF";
                } else if (e == 4) {
                    choose = "ZM";
                } else if (e == 5) {
                    choose = "PQ";
                }

                let v2 = { ChooseType: choose, value: true };
                let data2 = {
                    functionName: "ChooseHStationHierarchy",
                    functionParameters: [
                        {
                            key: "ChooseHStationHierarchy",
                            value: JSON.stringify(v2),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data2));
            }
        },

        sfxxClick() {
            this.showXX2 = !this.showXX2;
        },
        isShowItem(e) {
            this.showItem = true;
            this.navIndex = 0;
            this.tgId = e;
            // 监听点击删除
            let ids = [];
            ids.push(this.tgId);
            let v = { ChooseType: "SwitchingMode", value: true };

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

            let v2 = { ChooseType: "WG", value: true };

            let data2 = {
                functionName: "ChooseHStationHierarchy",
                functionParameters: [
                    {
                        key: "ChooseHStationHierarchy",
                        value: JSON.stringify(v2),
                    },
                ],
            };
            console.log(data2, "打印--------------------------");
            ue.interface.broadcast("PSAPI", JSON.stringify(data2));
        },
        fhYr() {
            this.showFH = true;
        },
        fhYc() {
            this.showFH = false;
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
        zx_deletes() {
            this.showItem = false;
            let that = this;

            that.$bus.$emit("getSelect");
        },
        baoCun() {
            let ids = [];
            ids.push(this.tgId);
            let v = {
                range: { type: "Save", target: "HStation", member: ids },
            };
            let data = {
                functionName: "SaveGame",
                backFunctionName: "zx_saves",
                functionParameters: [
                    {
                        key: "range",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.zx_saves = this.zx_saves;
        },
        zx_saves() {
            let that = this;
            that.$bus.$emit("getSelect");
        },
        lieBiao(e) {
            this.showLieBiao = e;
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
    background: url("img/x.png") no-repeat !important;
    background-size: 100% 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.shanchu2 {
    background: url("img/x2.png") no-repeat !important;
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
</style>

<style>
.fh_mr {
    width: 71px;
    height: 31px;
    position: absolute;
    top: 46px;
    right: 125px;
    background: url("img/fh_mr.png") no-repeat !important;
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
<style scoped>
.kgBtn {
    width: 28px;
    height: 28px;
    position: fixed;
    left: 407px;
    bottom: 128px;
    background: url("../../../../assets/image/k.png") no-repeat;
    background-size: 100% 100%;
}
.kgBtn2 {
    background: url("../../../../assets/image/g.png") no-repeat !important;
    background-size: 100% 100% !important;
}
</style>

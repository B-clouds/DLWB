<template>
    <div class="zdy">
        <!-- ----------------------杆塔布点 物理信息、空间信息部分 阴影 --------------------- -->
        <transition name="transitionBottom">
            <div v-show="show" class="wb"></div>
        </transition>
        <transition name="transitionLeft">
            <div v-show="show && showXX2" class="wl"></div>
        </transition>
        <transition name="transitionRight">
            <div v-show="show && showXX2" class="wr"></div>
        </transition>
        <transition name="transitionLeft">
            <div
                @click="changeKG"
                v-show="show && showZright"
                class="kgBtn"
                :class="showkaiguan ? '' : 'kgBtn2'"
            ></div>
        </transition>
        <!-- 旋转、移动切换按钮 -->
        <transition name="transitionLeft">
            <div
                v-show="show && showkaiguan && showZright"
                :class="showSC == true ? 'shanchu2' : ''"
                class="shanchu"
                @click="scClick"
            ></div>
        </transition>
        <!-- 详情页面 返回列表页面 -->
        <transition name="transitionRight">
            <div class="fh_mr" v-show="show" @click="fhMrClick"></div>
        </transition>

        <!-- 信息缩放按钮 -->
        <transition name="transitionRight">
            <div
                class="xxsf"
                v-show="show"
                :class="showXX2 ? 'xxsf2' : ''"
                @click="sfxxClick"
            ></div>
        </transition>
        <!-- 站房选址-自定义建站页面左侧 -->
        <transition name="transitionLeft">
            <zdyLeft @showZR="showZR" v-show="show && showXX2"></zdyLeft>
        </transition>
        <!-- 站房选址-自定义建站页面右侧 -->
        <transition name="transitionRight">
            <zdyRight v-show="show && showXX2 && showZright"></zdyRight>
        </transition>
    </div>
</template>

<script>
import zdyRight from "./components/zdyRight.vue";
import zdyLeft from "./components/zdyLeft.vue";
export default {
    name: "z_xuanzhi",
    components: {
        zdyRight,
        zdyLeft,
    },
    data() {
        return {
            show: true,
            showItem: false,
            showSC: true, //是否移入-杆塔布点-删除按钮
            showFH: false, //是否移入-杆塔布点-返回按钮
            tgId: null,
            showLieBiao: false,
            showXX2: true,
            currentIndex: 0, //层级选择
            navIndex: 0, // 0 : 基本信息  1 : 间隔维护
            showZright: false,
            showkaiguan: true,
        };
    },
    activated() {
        let v = { ChooseType: "CablePGPEditer", value: "true" };
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
        let v2 = { ChooseType: "ShowCableTerminal", value: "false" };
        let data2 = {
            functionName: "Sundry",
            functionParameters: [
                {
                    key: "Sundry",
                    value: JSON.stringify(v2), //切换类型
                },
            ],
        };
        ue.interface.broadcast("PSAPI", JSON.stringify(data2));

        this.showZright = false;
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
        showZR() {
            this.showZright = true;
        },
        // 旋转、移动
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
        // 返回默认页
        fhMrClick() {
            let that = this;
            setTimeout(() => {
                let v = {
                    FocusTarget: {
                        target: "CablePGS",
                        FocusType: false,
                        IDType: "CablePGS",
                        EditMode: false,
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
                setTimeout(() => {
                    let v2 = { ChooseType: "CablePGPEditer", value: "false" };
                    let data2 = {
                        functionName: "Sundry",
                        functionParameters: [
                            {
                                key: "Sundry",
                                value: JSON.stringify(v2), //切换类型
                            },
                        ],
                    };
                    ue.interface.broadcast("PSAPI", JSON.stringify(data2));
                    setTimeout(() => {
                        let v3 = { ChooseType: "FocusModel", value: "false" };
                        let data3 = {
                            functionName: "Sundry",
                            functionParameters: [
                                {
                                    key: "Sundry",
                                    value: JSON.stringify(v3), //切换类型
                                },
                            ],
                        };
                        ue.interface.broadcast("PSAPI", JSON.stringify(data3));
                        setTimeout(() => {
                            let v4 = {
                                ChooseType: "ShowCableTerminal",
                                value: "false",
                            };
                            let data4 = {
                                functionName: "Sundry",
                                functionParameters: [
                                    {
                                        key: "Sundry",
                                        value: JSON.stringify(v4), //切换类型
                                    },
                                ],
                            };
                            ue.interface.broadcast(
                                "PSAPI",
                                JSON.stringify(data4)
                            );
                            that.$router.push({
                                path: "/mr",
                            });
                        }, 10);
                    }, 10);
                }, 10);
            }, 10);
        },
        // 信息缩放按钮
        sfxxClick() {
            this.showXX2 = !this.showXX2;
        },
    },
};
</script>

<style scoped>
.zdy {
    width: 100%;
    height: 100%;
}
</style>
<style scoped>
/* 阴影 */
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
</style>
<style scoped>
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

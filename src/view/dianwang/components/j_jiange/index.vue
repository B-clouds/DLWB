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
        <!-- 杆塔布点详情页面的删除按钮 -->
        <!-- <transition name="transitionRight">
      <div
        v-show="show && showItem"
        :class="showSC ? 'shanchu2' : ''"
        class="shanchu"
        @mouseenter="scYr"
        @mouseleave="scYc"
        @click="scClick"
      >
        <img v-show="!showSC" src="./img/sc.png" />
        <img v-show="showSC" src="./img/sc2.png" />
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
        <!-- 详情页面 返回列表页面 -->
        <transition name="transitionRight">
            <div class="fh_mr" v-show="show && showItem" @click="fhClick"></div>
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
        <!-- 底部按钮 -->
        <!-- <transition name="transitionBottom">
      <div class="bottomBtn" v-show="show && showItem && showXX2"></div>
    </transition> -->
    </div>
</template>

<script>
import newLieBiao from "./components/newLieBiao.vue";
import kongjian from "./components/kongjian.vue";
import wuli from "./components/wuli.vue";
export default {
    name: "j_jiange",
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
        fhClick() {
            this.showItem = false;
            this.showSC = true;
            let v = {
                FocusTarget: {
                    target: "IntervalInfo",
                    ID: this.tgId,
                    FocusType: false,
                    IDType: "IntervalInfo",
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
        sfxxClick() {
            this.showXX2 = !this.showXX2;
        },
        scYr() {
            this.showSC = true;
        },
        scYc() {
            this.showSC = false;
        },
        scClick() {
            // 监听点击删除
            let ids = [];
            ids.push(this.tgId);
            let data = {
                functionName: "SaveGame",
                backFunctionName: "deletes_2",
                functionParameters: [
                    {
                        key: "range",
                        value: {
                            range: {
                                type: "Delet",
                                target: "IntervalInfo",
                                member: ids,
                            },
                        },
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.deletes_2 = this.deletes_2;
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
                backFunctionName: "jj_publishs",
                functionParameters: [
                    {
                        key: "range",
                        value: JSON.stringify(v),
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
            window.ue.interface.jj_publishs = this.jj_publishs;
        },
        jj_publishs() {
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
.bottomBtn {
    position: fixed;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 22px;
    width: 132px;
    height: 45px;
    background: url("img/jbxx.png") no-repeat;
    background-size: 100% 100%;
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
</style>

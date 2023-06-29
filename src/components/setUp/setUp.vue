<template>
    <div class="setUp">
        <div
            class="setIcon"
            :class="{ iconHide: iconActive }"
            @click="iconClick()"
        ></div>
        <div class="setContent" v-show="iconActive == true">
            <div class="close" @click="closeClick"></div>

            <div class="setTop">
                <div class="icons"></div>
                <span class="setTitle">设置</span>
            </div>
            <div class="choose">
                <div class="pdg">
                    <span class="itemText">宏观网架:</span>
                    <div
                        class="switchs"
                        :class="{ switchHide: hgActive }"
                        @click="optionClick('HGWJ')"
                    ></div>
                </div>
                <div class="pdg">
                    <span class="itemText">数字底板加载:</span>
                    <div
                        class="switchs"
                        :class="{ switchHide: pdgActive }"
                        @click="optionClick('PDG')"
                    ></div>
                </div>
                <div class="selects" v-show="pdgActive == true">
                    <div class="selItem" @click="optionClick('JZ')">
                        <div
                            class="selIcon"
                            :class="{ iconSel: jzActive }"
                        ></div>
                        <span class="selText" :class="{ textSel: jzActive }"
                            >建筑</span
                        >
                    </div>
                    <div class="selItem" @click="optionClick('ZB')">
                        <div
                            class="selIcon"
                            :class="{ iconSel: zbActive }"
                        ></div>
                        <span class="selText" :class="{ textSel: zbActive }"
                            >周边</span
                        >
                    </div>
                    <div class="selItem" @click="optionClick('HH')">
                        <div
                            class="selIcon"
                            :class="{ iconSel: hhActive }"
                        ></div>
                        <span class="selText" :class="{ textSel: hhActive }"
                            >灰画</span
                        >
                    </div>
                    <div class="selItem" @click="optionClick('DT')">
                        <div
                            class="selIcon"
                            :class="{ iconSel: dtActive }"
                        ></div>
                        <span class="selText" :class="{ textSel: dtActive }"
                            >底图</span
                        >
                    </div>
                </div>
                <div class="pdg">
                    <span class="itemText">行政边界:</span>
                    <div
                        class="switchs"
                        :class="{ switchHide: xzActive }"
                        @click="optionClick('XZBJ')"
                    ></div>
                </div>
                <div class="pdg">
                    <span class="itemText">倾斜摄影加载:</span>
                    <div
                        class="switchs"
                        :class="{ switchHide: OSJBActive }"
                        @click="optionClick('OSJB')"
                    ></div>
                </div>
                <div class="pdg">
                    <span class="itemText">光照时间:</span>
                    <div class="inputss">
                        <el-time-picker
                            @change="timeClick"
                            v-model="elTimeValue"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            placeholder="请选择时间"
                            :clearable="false"
                            popper-class="timeClass"
                        >
                        </el-time-picker>
                        <div class="timeIcon"></div>
                        <!-- <el-time-select
              v-model="value3"
              :picker-options="{
                start: '00:00',
                step: '01:00',
                end: '23:00',
              }"
              placeholder="选择时间"
              @change="timeClick"
            >
            </el-time-select> -->
                    </div>
                </div>
                <div class="returns" @click="tuiChuDL">
                    <span class="reText">退出登录</span>
                </div>
                <div class="zhezhao" v-show="showZheZhao">
                    <div class="iconss"></div>
                    <div class="spans"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "setUp",
    data() {
        return {
            iconActive: false,
            pdgActive: false,
            hgActive: false,
            xzActive: false,
            OSJBActive: false,
            jzActive: false,
            zbActive: false,
            hhActive: false,
            dtActive: false,
            showZheZhao: false,
            elTimeValue: new Date(),
            value3: "",
        };
    },
    mounted() {
        let that = this;
        that.$bus.$on("hongClick", (e) => {
            that.hgActive = false;
        });
        that.$bus.$on("closeLoading2", (e) => {
            that.showZheZhao = false;
        });
    },
    methods: {
        closeClick() {
            this.iconActive = false;
        },
        // 设置按钮点击
        iconClick() {
            this.iconActive = !this.iconActive;
        },
        timeClick(e) {
            var date = new Date(this.elTimeValue);
            var time2 = date.valueOf();
            let data = {
                functionName: "Sundry",
                functionParameters: [
                    {
                        key: "Sundry",
                        value:
                            '{"ChooseType":"ChangeSkyTime","value":"' +
                            time2 +
                            '"}',
                    },
                ],
            };
            ue.interface.broadcast("PSAPI", JSON.stringify(data));
        },
        // 选项点击
        optionClick(e) {
            var type = "";
            var choose = false;
            if (e == "PDG") {
                this.pdgActive = !this.pdgActive;
                type = "SwitchPDG";
                choose = this.pdgActive;
                this.jzActive = false;
                this.zbActive = false;
                this.hhActive = false;
                this.dtActive = true;
            } else if (e == "HGWJ") {
                this.hgActive = !this.hgActive;
                // type = "SwitchHongGuan";
                // choose = this.hgActive;
                this.$router.push({
                    path: "/hongguan",
                });
                let v = { ChooseType: "SwitchMactv", value: true };
                let data = {
                    functionName: "Sundry",
                    functionParameters: [
                        {
                            key: "Sundry",
                            value: JSON.stringify(v),
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
                this.iconActive = false;
            } else if (e == "XZBJ") {
                this.xzActive = !this.xzActive;
                type = "SwitchBoundary";
                choose = this.xzActive;
            } else if (e == "OSJB") {
                this.OSJBActive = !this.OSJBActive;
                type = "SwitchOSGB";
                choose = this.OSJBActive;
            } else if (e == "JZ") {
                this.jzActive = !this.jzActive;
                if (this.jzActive) {
                    this.showZheZhao = true;
                }
                type = "SwitchBuild";
                choose = this.jzActive;
            } else if (e == "ZB") {
                this.zbActive = !this.zbActive;
                if (this.zbActive) {
                    this.showZheZhao = true;
                }
                type = "SwitchDetail";
                choose = this.zbActive;
            } else if (e == "HH") {
                this.hhActive = !this.hhActive;
                if (this.hhActive) {
                    this.showZheZhao = true;
                }
                type = "SwitchAshing";
                choose = this.hhActive;
            } else if (e == "DT") {
                this.dtActive = !this.dtActive;
                if (this.dtActive) {
                    this.showZheZhao = true;
                }
                type = "SwitchPDG";
                choose = this.dtActive;
            }
            if (type == "SwitchPDG") {
                if (choose == true) {
                    let data = {
                        functionName: "Sundry",
                        functionParameters: [
                            {
                                key: "Sundry",
                                value:
                                    '{"ChooseType":"' +
                                    type +
                                    '","value":"' +
                                    choose +
                                    '"}',
                            },
                        ],
                    };
                    ue.interface.broadcast("PSAPI", JSON.stringify(data));
                    this.showZheZhao = true;
                } else {
                    let data = {
                        functionName: "Sundry",
                        functionParameters: [
                            {
                                key: "Sundry",
                                value:
                                    '{"ChooseType":"SwitchPDG","value":"' +
                                    choose +
                                    '"}',
                            },
                        ],
                    };
                    let data2 = {
                        functionName: "Sundry",
                        functionParameters: [
                            {
                                key: "Sundry",
                                value:
                                    '{"ChooseType":"SwitchBuild","value":"' +
                                    choose +
                                    '"}',
                            },
                        ],
                    };
                    let data3 = {
                        functionName: "Sundry",
                        functionParameters: [
                            {
                                key: "Sundry",
                                value:
                                    '{"ChooseType":"SwitchDetail","value":"' +
                                    choose +
                                    '"}',
                            },
                        ],
                    };
                    let data4 = {
                        functionName: "Sundry",
                        functionParameters: [
                            {
                                key: "Sundry",
                                value:
                                    '{"ChooseType":"SwitchAshing","value":"' +
                                    choose +
                                    '"}',
                            },
                        ],
                    };
                    let data5 = {
                        functionName: "Sundry",
                        functionParameters: [
                            {
                                key: "Sundry",
                                value:
                                    '{"ChooseType":"SwitchDiTu","value":"' +
                                    choose +
                                    '"}',
                            },
                        ],
                    };
                    ue.interface.broadcast("PSAPI", JSON.stringify(data));
                    ue.interface.broadcast("PSAPI", JSON.stringify(data2));
                    ue.interface.broadcast("PSAPI", JSON.stringify(data3));
                    ue.interface.broadcast("PSAPI", JSON.stringify(data4));
                    ue.interface.broadcast("PSAPI", JSON.stringify(data5));
                }
            } else {
                let data = {
                    functionName: "Sundry",
                    functionParameters: [
                        {
                            key: "Sundry",
                            value:
                                '{"ChooseType":"' +
                                type +
                                '","value":"' +
                                choose +
                                '"}',
                        },
                    ],
                };
                ue.interface.broadcast("PSAPI", JSON.stringify(data));
            }
        },
        // 退出登录
        tuiChuDL() {
            this.$router.push({
                path: "/login",
            });
            this.iconActive = false;
        },
    },
};
</script>

<style>
.el-picker-panel {
    border: 0 !important;
    background: transparent !important;
    color: rgba(255, 255, 255, 0.6) !important;
    background: url("../../assets/image/riqiBg.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.selected {
    color: #fff !important;
}
.time-select-item:hover {
    background: transparent !important;
    color: #fff !important;
}
.el-date-editor.el-input {
    width: 177px !important;
    height: 40px !important;
}

.el-date-editor > .el-input__inner {
    height: 40px !important;
    background: none !important;
    font-family: SourceHanSansCN-Regular !important;
    font-size: 20px !important;
    font-weight: normal !important;
    color: #d9d4d4 !important;
    border-radius: 0 !important;
    /* border: 1px solid #00d3ff !important; */
    cursor: pointer !important;
}

.el-input__prefix {
    left: 19px !important;
    top: 10px !important;
    color: #ffffff !important;
    width: 35px !important;
    height: 35px !important;
    background: url(img/tm.png) no-repeat !important;
    background-size: 100% 100% !important;
}

.el-icon-time:before {
    content: "" !important;
}

.timeClass {
    width: 157px !important;
    height: 210px !important;
    background: rgba(4, 20, 32, 0.6) !important;
    border: 1px solid #00d3ff !important;
}

.el-time-panel__content {
    height: 220px !important;
    top: 20px !important;
}

.el-time-spinner,
.el-time-spinner__wrapper {
    height: 150px !important;
}

.is-horizontal {
    height: 0 !important;
}

.is-vertical {
    width: 0 !important;
}

.el-time-panel__content::before {
    margin-top: -40px !important;
    height: 120px !important;
    border-top: 1px solid rgba(255, 255, 255, 0.4) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4) !important;
}

.el-time-panel__content::after {
    height: 40px !important;
    border: none !important;
}

.el-input__prefix,
.el-input__suffix {
    font-size: 16px !important;
    color: #c0c4cc !important;
    text-align: center;
}

.el-time-spinner__item {
    height: 40px !important;
    font-size: 16px !important;
    font-weight: normal !important;
    color: #c0c4cc !important;
    text-align: center;
    line-height: 40px !important;
}

.active {
    color: #ffffff !important;
}

.el-time-spinner__item:hover {
    background: none !important;
}

.el-time-spinner__list::after,
.el-time-spinner__list::before {
    height: 40px !important;
}

.timeClass > .popper__arrow {
    display: none !important;
}

.el-time-panel__footer {
    position: absolute;
    bottom: 0 !important;
    width: 100% !important;
    height: 40px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;
}

.el-time-panel__btn {
    margin-top: -8px !important;
    font-family: SourceHanSansSC-Regular !important;
    font-size: 20px !important;
    font-weight: normal !important;
    color: #c0c4cc !important;
}
</style>
<style>
@keyframes myRotate {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
<style scoped>
.zhezhao {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    /* background: url("img/bg2.png") no-repeat !important;
  background-size: 100% 100% !important; */
    background: rgba(1, 11, 23, 0.6);
}
.close {
    width: 37px;
    height: 37px;
    position: absolute;
    top: 7px;
    right: 7px;
    background: url("img/cha.png") no-repeat !important;
    background-size: 100% 100% !important;
    cursor: pointer;
}
.spans {
    position: absolute;
    left: 880px;
    top: 628px;
    width: 180px;
    height: 60px;
    background: url("img/span.png") no-repeat !important;
    background-size: 100% 100% !important;
}
.iconss {
    width: 158px;
    height: 158px;
    position: absolute;
    left: 904px;
    top: 412px;
    background: url("img/icon2.png") no-repeat !important;
    background-size: 100% 100% !important;
    animation: myRotate 3s infinite;
}
</style>
<style scoped>
.inputss {
    width: 177px;
    height: 40px;
    border: 1px solid #00d3ff;
    margin-left: 140px;
    position: relative;
}
.timeIcon {
    position: absolute;
    left: 10px;
    top: 11px;
    width: 19px;
    height: 19px;
    background: url("img/tm.png") no-repeat;
    background-size: 100% 100%;
}
.setIcon {
    position: fixed;
    top: 7.87px;
    right: 8.52px;
    width: 22px;
    height: 22px;
    background: url("img/set.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    z-index: 9999;
}
.iconHide,
.setIcon:hover {
    background: url("img/set1.png") no-repeat;
    background-size: 100% 100%;
}
.setContent {
    position: fixed;
    margin: auto;
    top: 323.48px;
    left: 0;
    right: 0;
    width: 427.52px;
    height: 489px;
    background: url("img/bg.png") no-repeat;
    background-size: 100% 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    z-index: 9999;
}
.setTop {
    width: 100%;
    height: 58px;
    background: url("img/tbg.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;

    z-index: -1;
}
.icons {
    width: 48px;
    height: 52px;
    background: url("img/icon.png") no-repeat;
    background-size: 100% 100%;
}
.setTitle {
    font-family: YouSheBiaoTiHei;
    font-size: 30px;
    font-weight: normal;
    line-height: 24px;
    letter-spacing: 0.12em;
    background-image: -webkit-linear-gradient(bottom, #56c9ff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.choose {
    width: 100%;
    height: 305px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.pdg {
    margin-top: 23px;
    margin-left: 28px;
    width: 300px;
    height: 26px;
    display: flex;
    align-items: center;
}
.itemText {
    position: absolute;
    left: 28px;
    font-family: SourceHanSansSC-Regular;
    font-size: 22px;
    font-weight: normal;
    line-height: 25px;
    letter-spacing: 0px;
    background-image: -webkit-linear-gradient(bottom, #bbe7ff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.switchs {
    position: absolute;
    left: 185px;
    width: 39px;
    height: 26px;
    background: url("img/switch.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.switchHide {
    background: url("img/switch1.png") no-repeat;
    background-size: 100% 100%;
}
.selects {
    margin-top: 33px;
    margin-left: 30px;
    margin-bottom: 9px;
    display: flex;
    align-items: center;
}
.selItem {
    margin-right: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
}
.selIcon {
    width: 24px;
    height: 24px;
    background: url("img/select.png") no-repeat;
    background-size: 100% 100%;
}
.iconSel {
    background: url("img/select1.png") no-repeat;
    background-size: 100% 100%;
}
.selText {
    margin-left: 8px;
    font-family: SourceHanSansCN-Regular;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #c4c4c4;
}
.textSel {
    color: #5bd6ff;
}
.returns {
    position: absolute;
    left: 78.46px;
    bottom: 20px;
    width: 271px;
    height: 55px;
    background: url("img/tc.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.reText {
    font-family: SourceHanSansSC-Medium;
    font-size: 22px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0px;
    background-image: -webkit-linear-gradient(bottom, #bbe7ff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
